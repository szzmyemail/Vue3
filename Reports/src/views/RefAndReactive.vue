<template>
    <div>{{ person.name }}</div>
    <div>{{ person.hobby.type }}</div>
    <div>{{ person.hobby.name }}</div>
    <div><button @click="changeName">Change name</button></div>
    <div><button @click="changehobby">Change hobby</button></div>
    <div><button @click="changePerson">Change Person</button></div>
</template>
  
<script lang="ts" setup>
    import { reactive } from 'vue'
    let person = reactive({
        name: 'lily',
        hobby: {
            type: 'sport',
            name: 'pingpang'
        }
    });

    function changeName() {
        person.name = 'twl';
    }

    function changehobby() {
        person.hobby.type = 'sing';
        person.hobby.name = 'song';
    }

    function changePerson() {
        //以下两种写法都无效 reactive重新分配一个对象，会失去响应式。
        // person = {
        //     name: 'wl'
        // };
        // person = reactive({
        //     name: 'wl'
        // });

        //这样可以修改reactive定义的对象
        Object.assign(person, {name: 'wl'})
    }

    const obj = {name: 'wl'};
    const obj2 = Object.assign(obj, {age: 18});
    console.log(obj === obj2); //true
</script>

<!-- <template>
    <div>{{ name }}</div>
    <div><button @click="changeName">Change name</button></div>
    <br>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <div><button @click="changePersonName">Change person name</button></div>
    <div><button @click="changePerson">Change person</button></div>
</template>
  
<script lang="ts" setup>
    import { ref } from 'vue'
    let name = ref('szz');
    console.log(name); //RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 'szz', _value: 'szz'}

    function changeName() {
            name.value = 'twl';
        }

    let person = ref(
        {
            name: 'szz',
            age: 18
        }
    );
    function changePersonName() {
        person.value.name = 'twl';
    }
    function changePerson() {
        //可以修改
        person.value = {
            name: 'twl',
            age: 20
        }

        //无效
        person = ref({
            name: 'twl',
            age: 20
        })
    }
</script> -->







<!-- <template>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <div><button @click="changePerson">Change person</button></div>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  let person = reactive({
    name: 'tongwl',
    age: 18
  })
  
  const changePerson = () => {
    // 通过Object.assign修改对象属性，可以触发响应式
    person = Object.assign(person, {
      name: 'szz',
      age: 16
    })
  }
  </script>
  <style lang="scss" scoped></style> -->