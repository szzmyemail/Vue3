<template>
    <PropsAndEmitChild  
        :name = 'person' 
        :sendToy="getToy"
        @send-child-toy="getChildToy"
        />
    <h2>子给父的玩具： {{ toy }}</h2>
</template>
  
<script lang="ts" setup>
    import PropsAndEmitChild from '../components/PropsAndEmitChild.vue'
    import { ref } from 'vue'

    const person = ref('lily');
    const toy = ref<null | string>(null);

    function getToy(val: string) {
       toy.value = val;
    }

    function getChildToy(val: any) {
        toy.value = val;
    }
    
</script>