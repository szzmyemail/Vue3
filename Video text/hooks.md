#### hooks

```ts
// hooks/useSum.ts文件
import {ref, computed, onMounted} from 'vue';

export default function() {
    let sum = ref(0);
    let bigSum = computed(() => sum.value*10)

    function add() {
        sum.value+= 1
    }

    onMounted(() => add())
    return {
        sum,
        bigSum,
        add
    }
}

```

```vue
//使用hooks的文件
<template>
    <h2>{{ sum }}, 放大10倍后是 {{ bigSum }}</h2>
    <button @click="add">click</button>
</template>
  
<script lang="ts" setup>
    import useSum from '@/hooks/useSum'

    const {sum, bigSum, add} = useSum();
</script>
```

