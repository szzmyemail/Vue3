#### 标签的ref属性

作用：用于注册模板引用

- 用在普通DOM标签上，获取的是DOM节点。
- 用在组件标签上，获取的是组件实例对象。

```vue
<template>
    <ToRefs ref="toRefsChild"/>
    <h2 ref="title2">title2</h2>
    <button @click="showLog">click</button>
</template>
  
<script lang="ts" setup>
    import ToRefs from './ToRefs.vue'
    import { ref } from 'vue'
    let title2 = ref();
    let toRefsChild = ref();
    function showLog() {
        console.log(title2.value); //<h2>title2</h2>
        console.log(toRefsChild.value); //Proxy(Object) {person: Proxy(Object), __v_skip: true}
        console.log(toRefsChild.value.person); //Proxy(Object) {person: Proxy(Object), __v_skip: true}
    }
</script>
```

ToRefs组件

```vue
<template>
    <div>姓名： {{person.name}}</div>
    <div>年龄 {{person.age}}</div>
</template>
  
<script lang="ts" setup>
    import { reactive, defineExpose } from 'vue'
    let person = reactive({
        name: 'Lily',
        age: 18
    });

   defineExpose({person})//这样父组件才可以访问其数据

</script>
```

