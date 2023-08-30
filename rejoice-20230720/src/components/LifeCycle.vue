<script setup lang="ts">
    import { onMounted } from 'vue';
    onMounted(() => {
        console.log(`the component is now mounted.`)
    })
    
</script>

<template>
  <div class="greetings">
    <h3>生命周期钩子函数</h3>
  </div>
</template>

<style scoped>
 h3 {
    color: pink;
 }
</style>
