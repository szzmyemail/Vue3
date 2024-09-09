#### 组件通信v-model

```vue
//父组件
<template>
  <div>
    <h2>父组件： {{ userName }}</h2>
    <VModelChild1
        v-model="userName"
    />
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    import  VModelChild1 from '../components//VModelChild1.vue'
    let userName = ref('lily')
</script>

//子组件
<template>
  <div>
    <input v-model="model" />
  </div>
</template>

<script setup>
 const model = defineModel()

</script>
```

