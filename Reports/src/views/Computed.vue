<template>
    <div>名： <input v-model='lastName'/></div>
    <div>姓： <input v-model='firstName'/></div>
    <div>姓名： {{lastName.substring(0, 1).toUpperCase() + lastName.substring(1) + ' ' + firstName}}</div>
    <div>姓名： {{fullName}}</div>
    <div>姓名： {{fullName}}</div>
    <div>姓名2： {{fullName2()}}</div>
    <div>姓名2： {{fullName2()}}</div>
    <button @click='changeFullName1()'>change fullName1</button> 
</template>
  
<script lang="ts" setup>
    //推荐使用计算属性来描述依赖响应式状态的复杂逻辑
    //computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref。和其他一般的 ref 类似，你可以通过 fullName.value 访问计算结果。计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value。
    //计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。
    //计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建
    //从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算
    import { ref, computed } from 'vue'
    let firstName = ref('song');
    let lastName = ref('lily');
    
    let fullName = computed(() => {
        console.log(111); //只打印一次
        return lastName.value.substring(0, 1).toUpperCase() + lastName.value.substring(1) + ' ' + firstName.value
    })

    function fullName2() {
        console.log(222);//打印两次
        return lastName.value.substring(0, 1).toUpperCase() + lastName.value.substring(1) + ' ' + firstName.value
    }

    let fullName1 = computed({
        get() {
            return lastName.value.substring(0, 1).toUpperCase() + lastName.value.substring(1) + ' ' + firstName.value
        },
        set(val) {
            [firstName.value, lastName.value] = val.split(' ')
        }
    })
    function changeFullName1() {
        fullName1.value = 'William Tong';
    }

</script>