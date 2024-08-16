<template>
    <!-- <ul>
        <li v-for="person in props.personList">
            {{person.id + '-' + person.name + '-' + person.age}}
        </li>
    </ul> -->
    <br>    
    <ul>
        <li v-for="person in personList">
            {{person.id + '-' + person.name + '-' + person.age}}
        </li>
    </ul>
</template>
  
<script lang="ts" setup>
    import {withDefaults} from 'vue'
    import { type Person } from '@/types'
    // 只接收personList
    // defineProps(['personList'])
    // let props = defineProps(['personList']);
    // console.log(props.personList);
    
    //接收personList + 限制类型
    //defineProps<{personList: Person}>()

    //接收personList + 限制类型 + 限制必要性 + 指定默认值
    withDefaults(defineProps<{personList?: Person}>(), {
        personList: () => [
            {
                id: '33333',
                name: 'newUs',
                age: 100
            }
        ]
    })
</script>