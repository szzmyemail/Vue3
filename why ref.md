#### 为什么要使用ref?

```vue
<script setup lang="ts">
  import { ref } from 'vue';
  const count = ref(0);
  function increment() {
    count.value++;
  } 
</script>

<template>
  <main>
    <span>{{ count }}</span>
    <button @click = increment()>click</button>
  </main>
</template>
```

为什么使用带有.value的ref,而不是普通的变量？为了解释这一点，需要简单的讨论下Vue的响应式系统是如何工作的。

当你在模板中使用了一个ref,然后改变这个ref的值时，Vue会自动检测到这个变化，并且相应的更新DOM。这是通过一个基于依赖追踪的响应式系统实现的。当一个组件首次渲染时，Vue会追踪在渲染过程中使用的每一个ref,然后，当一个ref被修改时，它会触发追踪它的组件的重新渲染。

在标准的JS中，检测普通变量的访问或修改是行不通的。但是我们可以拦截属性的get和set操作。

该value属性属性给予了Vue一个机会来检测ref何时被访问或修改。在其内部，Vue在它的getter中执行追踪，在它的setter中执行触发。从概念上来讲，可以将ref看做是一个像这样的对象：

```js
// 伪代码，不是真正的实现
const myRef = {
  _value: 0,
  get value() {
    track()
    return this._value
  },
  set value(newValue) {
    this._value = newValue
    trigger()
  }
}
```

 另一个 ref 的好处是，与普通变量不同，你可以将 ref 传递给函数，同时保留对最新值和响应式连接的访问。当将复杂的逻辑重构为可重用的代码时，这将非常有用。

