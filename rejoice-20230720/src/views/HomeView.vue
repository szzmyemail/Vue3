<script setup lang="ts">
  import { ref } from 'vue';
  const count = ref(0);
  function increment() {
    count.value++;
  } 
</script>

<template>
  <main>
    <span>{{ count }}</span>
    <button @click = increment()>click</button>
  </main>
</template>
