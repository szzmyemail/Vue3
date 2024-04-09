<script setup lang="ts">
    import { ref, defineProps } from 'vue';
    let props = defineProps(['name', 'arr']);
    /// 像下面这样做就使name和 prop的后续更新无关了
    let name = ref(props.name);
    props.arr[0] = 22;
</script>

<template>
  <div class="greetings">
   <h3>v-for与数组</h3>
    <p>props.name: {{props.name }}</p>
    <p>name:{{name }}</p>
    <p>arr:{{props.arr.toString() }}</p>
  </div>
</template>

<style scoped>
 h3 {
    color: pink;
 }
</style>
