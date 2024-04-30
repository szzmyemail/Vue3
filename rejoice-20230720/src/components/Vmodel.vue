<script setup lang="ts">
    const a = defineModel()
    function update() {
        a.value = 'rejoice'
    }

</script>

<template>
  <div class="greetings">
   <h3>v-model:在组件上使用以实现双向绑定</h3>
   <button @click="update()">login</button>
   <p>{{  a }}</p>
  </div>
</template>

<style scoped>
 h3 {
    color: pink;
 }
</style>
