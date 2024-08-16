<template>
    <h2>{{ sum }}, 放大10倍后是 {{ bigSum }}</h2>
    <button @click="add">click</button>
</template>
  
<script lang="ts" setup>
    import useSum from '@/hooks/useSum'

    const {sum, bigSum, add} = useSum();
</script>