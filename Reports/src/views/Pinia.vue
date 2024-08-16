<template>
    <h2>{{counter.count}}</h2>
    <h2>{{counter.doubleCount}}</h2>
    <h2>{{counter.sum}}</h2>

    <br>
    <h2>{{count}}</h2>
    <h2>{{doubleCount}}</h2>
    <h2>{{sum}}</h2>
    <button @click="add">click</button>
</template>
  
<script lang="ts" setup>
    import { useCounterStore1 } from '@/stores/counter'
    import { storeToRefs } from 'pinia';
    import { toRefs } from 'vue';
    const counter = useCounterStore1();
    //Proxy(Object) {$id: 'counter', $onAction: ƒ, $patch: ƒ, $reset: ƒ, $subscribe: ƒ, …}
    console.log(counter);

    //##读取数据： 读取一个响应式对象上的属性，如果该属性是ref所定义的，可直接读取，不用再.value
    console.log(counter.count);
    console.log(counter.sum);
    //以下写法报错
    //console.log(counter.count.value);

    function add() {
        //第一种修改方式
        //counter.count+= 1;
        
        //第二种修改方式
        // counter.$patch({
        //     count: 2,
        // })

        //第三种修改方式
        counter.increment(5);
    }

    //storeToRefs
    const {count, doubleCount, sum} = storeToRefs(counter);//storeToRefs只会解构对象里的数据，单单的toRefs会解构counter里的所有属性
    console.log(storeToRefs(counter));//{count: ObjectRefImpl, doubleCount: ObjectRefImpl, sum: ObjectRefImpl}
    console.log(toRefs(counter));//{$id: ObjectRefImpl, $onAction: ObjectRefImpl, $patch: ObjectRefImpl, $reset: ObjectRefImpl, $subscribe: ObjectRefImpl, …
    
    //$subscribe
    counter.$subscribe((mutate, state) => {
        console.log(mutate, state);//state保存了当前的数据
        console.log(state.count);
    })
</script>