<template>   
    <h2>父传子姓名： {{ name }}</h2>
    <button @click="sendToy(toy)">给父一个toy</button>
    <button @click="sendFatherToy">给父一个toy1</button>
    <button @click="emit('send-child-toy', toy)">emit给父一个toy</button>
    <button @click="sendChildToyToFather">emit给父一个toy1</button>
</template>
  
<script lang="ts" setup>
    import { ref } from 'vue'    
    
    // 接收personList
    const props = defineProps(['name', 'sendToy'])

    const toy = ref('car');

    //props给父传递数据
    function sendFatherToy () {
        props.sendToy(toy.value);
    }

    //defineEmits给父传递数据
    const emit = defineEmits(['send-child-toy'])
    function sendChildToyToFather() {
        emit('send-child-toy', toy.value)
    }

</script>