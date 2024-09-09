<template>
  <div>
    <h2>父组件： {{ userName }}</h2>
    <!-- <VModelChild 
        :modelValue="userName"
        @update:modelValue="userName = $event"
    /> -->

    <VModelChild 
        v-model="userName"
    />
    <VModelChild1
        v-model="userName"
    />
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    import  VModelChild from '../components//VModelChild.vue'
    import  VModelChild1 from '../components//VModelChild1.vue'
    let userName = ref('lily')
</script>

<style scoped>

</style>