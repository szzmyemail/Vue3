<script setup lang="ts">
    import { ref } from 'vue';
    const items = ref([
        { message: 'Foo' }, 
        { message: 'Bar' }
    ]);

    const obj = ref({
        name: "lily",
        age: 100
    });
</script>

<template>
  <div class="greetings">
   <h3>v-for与数组</h3>
   <ul>
    <li v-for="item in items"> {{ item.message }} </li>
   </ul>

   <h3>v-for与对象</h3>
   <ul>
    <li v-for="(val, key, index) in obj"> {{ `${key}: ${val}(${index})` }} </li>
   </ul>

   <h3>在 v-for 里使用范围值</h3>
   <!-- 注意n是从1开始而非0 -->
   <span v-for="n in 10">{{ n }}</span>
  </div>
</template>

<style scoped>
 h3 {
    color: pink;
 }
</style>
