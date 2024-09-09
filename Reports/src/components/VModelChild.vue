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