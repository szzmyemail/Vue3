<script setup lang="ts">
  import { onUpdated, ref } from 'vue';
  import WatchLearn from '@/components/WatchLearn.vue';
  let todoList = ref([1, 2, 3]);
  //如何给一个响应式属性重新赋值？？？？
  function changeArr() {
    todoList.value = [3, 2, 1];;
  }

  onUpdated(() =>{
    console.log('DOM 更新发生了');
  })
</script>
<template>
  <div class="about">
    <button @click = changeArr()>click</button>
    <ul>
      <li v-for="(val, i) of todoList" :class="i + 'a'" :key="i">{{ val }}</li>
    </ul>
    <h3>watch</h3>
    <WatchLearn/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
 
}
</style>
