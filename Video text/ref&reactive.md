#### ref &Reactive

- **作用**：定义响应式变量，可以定义基本类型，也可以定义对象类型。

- **语法**：let name = ref('szz');

- **返回值**：一个RefImpl的实例对象，简称ref对象

- **注意点**：

​		1.JS中操作数据要name.value,模板中不需要.value

​		2.name不是响应式的，name.value是响应式的

​		3.Ref 会使它的值具有深层响应性。这意味着即使改变嵌套对象或数组时，变化也会被检测到。

```js
import { ref } from 'vue'

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}
```





#### reactive

- **作用**：定义响应式变量，只能定义对象类型。定义的响应式对象是深层次的。
- **语法**：let person = reactive({name: 'szz'});

- **返回值**：一个Proxy对象

- **注意点**：

​		1.reactive重新分配一个对象，会失去响应式。

​		2.reactive 具有深层响应性。

```vue
//修改reactive定义的对象
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
```

```vue
//修改ref定义的响应式数据
<template>
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
</script>
```

