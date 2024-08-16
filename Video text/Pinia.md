#### Pinia 

vue3的状态管理工具，属于集中式状态（数据）管理，把共享的数据交给集中式状态管理，而不是组件自身的数据。



```typescript
//counter.ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore1 = defineStore('counter',{
  actions: {
    increment(value: number) {
      this.count+= value;
      this.sum+= value;
    }
  },
  state() {
    const count = ref(0); //写在state里面，使用的组件里得到的count是ObjectRefImpl类型,可以直接写成普通类型，不需要用ref包裹
    const doubleCount = computed(() => count.value * 2)
    const sum = 0 //写在state里面，使用的组件里得到的sum是ObjectRefImpl类型

  
    return { count, doubleCount, sum }
  }
})

//上面写法更加符合 Pinia 的设计模式,将状态管理的不同部分进行了更好的分离和组织。下面这种方式虽然更加简洁,但可能在大型应用中不太容易维护。
//组合式写法
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  let sum = 0; //这种写法使用的组件里得到的sum就是一个普通字符串，不是RefImp类型，需要写成响应式类型

  function increment(val: number) {
    count.value+= val
    sum+= val;
  }
  return { count, doubleCount, sum, increment }
})

```

```vue
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
```



