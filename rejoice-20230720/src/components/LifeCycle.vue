<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    // 声明一个 ref 来存放该元素的引用
    // 必须和模板里的 ref 同名
    const inputDOM = ref(null);
    const list = [1, 2, 3];
    const itemRefs = ref([])

    function test(el) {
      console.log(22222222, el);
    }
    onMounted(() => {
        console.log(`the component is now mounted.`);
        inputDOM.value.focus();
        console.log(111111, itemRefs.value); //Proxy(Array) {0: li, 1: li, 2: li}
        //应该注意的是，ref 数组并不保证与源数组相同的顺序。
    })
    
</script>

<template>
  <div class="greetings">
    <h3>生命周期钩子函数</h3>
    <h3>模板引用</h3>
    <input type="text" ref="inputDOM">
    <h5>v-for中的模板引用</h5>
    <ul>
      <li v-for="val in  list" ref="itemRefs">{{val}}</li>
    </ul>
    <h5>函数模板引用</h5>
    <input :ref="(el) => { console.log(333333, el) }">
    <input :ref="test">
  </div>
</template>

<style scoped>
 h3 {
    color: pink;
 }
</style>
