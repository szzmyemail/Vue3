<script setup lang="ts">
  import { onUpdated, ref } from 'vue';
  import WatchLearn from '@/components/WatchLearn.vue';
  import VFor from '@/components/VFor.vue';
  import LifeCycle from '@/components/LifeCycle.vue';
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
    <h2 class="header">Change Arr</h2>
    <button @click = changeArr()>click</button>
    <ul>
      <li v-for="(val, i) of todoList" :class="i + 'a'" :key="i">{{ val }}</li>
    </ul>
    <h2 class="header">watch</h2>
    <WatchLearn/>
    <h2 class="header">v-for</h2>
    <VFor/>
    <h2 class="header"> Life Cycle</h2>
    <LifeCycle/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .header {
    color: blue;
  }
 
}
</style>
