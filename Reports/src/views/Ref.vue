<template>
    <ToRefs ref="toRefsChild"/>
    <h2 ref="title2">title2</h2>
    <button @click="showLog">click</button>
</template>
  
<script lang="ts" setup>
    import ToRefs from './ToRefs.vue'
    import { ref } from 'vue'
    let title2 = ref();
    let toRefsChild = ref();
    function showLog() {
        console.log(title2.value); //<h2>title2</h2>
        console.log(toRefsChild.value); //Proxy(Object) {person: Proxy(Object), __v_skip: true}
        console.log(toRefsChild.value.person); //Proxy(Object) {person: Proxy(Object), __v_skip: true}
    }
</script>