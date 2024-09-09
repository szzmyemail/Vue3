#### 组件v-model

```vue
//父组件
<template>
  <div>
    <h2>父组件： {{ userName }}</h2>
    <!-- <VModelChild 
        :modelValue="userName"
        @update:modelValue="userName = $event"
    /> -->
		<!--简写-->
    <VModelChild 
        v-model="userName"
    />
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    import  VModelChild from '../components//VModelChild.vue'
    let userName = ref('lily')
</script>

//子组件
<template>
    <h2>子组件： {{ modelValue }}</h2>
    <input 
        type="text"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
    >
    
</template>

<script setup>
    defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue'])
</script>
```

