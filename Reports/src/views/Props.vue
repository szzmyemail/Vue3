<template>
    <PropsChild  :personList = 'persons'/>
</template>
  
<script lang="ts" setup>
    import PropsChild from '../components/PropsChild.vue'
    import { type IPerson, type Person } from '@/types'
    import { reactive } from 'vue'

    let persons = reactive<Person>([
        {
            id: '11111',
            name: 'lily',
            age: 16,
        },
        {
            id: '22222',
            name: 'william',
            age: 18,
        },
    ]);
    
</script>