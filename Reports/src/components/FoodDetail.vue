<template>
    <div>
      <p>{{route.params.id}}</p>
      <p>{{route.params.content}}</p>
    </div>
    <div>
      <p>{{ params.id }}</p>
      <p>{{ params.content }}</p>
    </div>
  </template>
  <script setup>
      import {toRefs} from 'vue'
      import { useRoute } from 'vue-router'
      let route = useRoute();
      //let {params} = route //这个写法有问题，因为对一个响应式对象解构，会使其失去响应性
      //toRefs会保留其响应性
      let {params} = toRefs(route)
  </script>