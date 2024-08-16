<template>
    <div>姓名： {{person.name}}</div>
    <div>年龄 {{person.age}}</div>
    <button @click='changeName()'>change Name</button> <br>
    <button @click='changeAge()'>change Age</button> <br>
    <button @click='changeName1()'>change Name1</button> 
</template>
  
<script lang="ts" setup>
    import { reactive, toRefs, toRef, defineExpose } from 'vue'
    let person = reactive({
        name: 'Lily',
        age: 18
    });

    // let { name, age } = person; //直接这样写，在修改name,age的时候，页面不会变，因为name,age只是解构出来的一个字符串，跟person没有任何关系
    let { name, age } = toRefs(person);
    let name1 = toRef(person, 'name');
    
    function changeName() {
        name.value += '~'
    }

    function changeAge() {
        age.value -= 1
    }

    function changeName1() {
        name1.value += '#'
    }

   defineExpose({person}) //这样父组件才可以访问其数据

</script>