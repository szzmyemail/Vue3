<script setup lang="ts">
  import { onUpdated, ref } from 'vue';
  import WatchLearn from '@/components/WatchLearn.vue';
  import VFor from '@/components/VFor.vue';
  import LifeCycle from '@/components/LifeCycle.vue';
  import PropsLearn from '@/components/PropsLearn.vue';
  import EmitLearn from '@/components/EmitLearn.vue';
  let todoList = ref([1, 2, 3]);
  //如何给一个响应式属性重新赋值？？？？
  function changeArr() {
    todoList.value = [3, 2, 1];;
  }

  onUpdated(() =>{
    console.log('DOM 更新发生了');
  })

  const name = ref('lily');
  function changeName() {
    name.value+= "new Lily"
  }

  const arr = ref([1, 2, 3]);

  function testEmit(event: any) {
    console.log(999, event);
  }
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
    <h2 class="header"> Props Learn</h2>
    <PropsLearn :name = 'name' :arr="arr"/>
    <button @click="changeName()">change name</button>
    <p>arr: {{ arr.toString() }}</p>

    <h2 class="header"> Emits Learn</h2>
    <EmitLearn @login-in="testEmit($event)"/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .header {
    color: blue;
  }
 
}
</style>
