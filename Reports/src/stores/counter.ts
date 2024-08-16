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



