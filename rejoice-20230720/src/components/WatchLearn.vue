<script setup lang="ts">
    import {ref, reactive, watch} from 'vue';
    const firstName = ref('lily');
    const lastName = ref('song');

    //watch 的第一个参数可以是不同形式的“数据源”：
    //它可以是一个 ref (包括计算属性)、一个响应式对象、
    //一个 getter 函数、
    //或多个数据源组成的数组：
    watch(firstName, (newName, oldName) => {
        console.log(111, newName, oldName);
    })

    watch(() => (firstName.value+ " " + lastName.value), (name) => {
        console.log(222, name);
    })

    watch([firstName, () => lastName.value], ([firstName, lastName]) => {
        console.log(333, firstName + ' ' + lastName);
    })

    function changeName() {
        firstName.value = 'rejoice';
    }

    //注意，你不能直接侦听响应式对象的属性值
    let lily = reactive({
        name: 'lily',
        age: 100,
        hobby: {
            name: 'song',
            sports: {
                name: 'run'
            }
        }
    })
    //以下代码报错
    // watch(lily.age, (age) => {
    //     console.log(age);
    // })
    watch(() => lily.age, (age) => {
        console.log(age);
    })


    //当属性值是对象时，可以直接监听，修改对象的属性值，会触发以下监听，直接lily.hobby = {}重新赋值，不会触发监听
    watch(
        lily.hobby, 
        (newHobby, oldHobby) => {
            console.log(77777, newHobby, oldHobby);
        }
    )

    function changeAge() {
        lily.age = 101;
    }

    function changeHobby() {
        lily.hobby.name = 'songsong';
    }

    function changeHobbySports() {
        lily.hobby.sports.name = 'pingpang';
    }



    watch(lily, (newLily, oldLily) => {
        console.log(3333333, newLily, oldLily);
    })
</script>

<template>
  <div class="greetings">
    <button @click="changeName()">changeName</button>
    <button @click="changeAge()">changeAge</button>
    <button @click="changeHobby()">changeHobby</button>
    <button @click="changeHobbySports()">changeHobbySports</button>
    
   
  </div>
</template>

<style scoped>

</style>
