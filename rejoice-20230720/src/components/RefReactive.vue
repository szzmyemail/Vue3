<script setup lang="ts">
import { reactive } from 'vue';
import LifeCycle from './LifeCycle.vue';
let obj = reactive( {
  name: 'lily',
  age: 18
} )

function changeObj() {
  obj = {
    name: 'wl',
    age: 19
  }
  console.log(111, obj);
}



</script>

<template>
  <div>
    <p>{{ obj.name }}</p>
    <p>{{ obj.age }}</p>
    <button @click="changeObj">changeObj</button>
  </div>
</template>

<style scoped>

</style>
