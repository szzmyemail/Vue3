<script setup lang="ts">
  import { ref, shallowRef, reactive, computed } from 'vue';
  //模板语法
  const htmlStr = '<span style="color: red">This should be red.</span>';
  const idStr = ref('box');
  const isButtonDisabled = ref(true);
  const  objectOfAttrs = reactive({
    id: 'container',
    class: 'wrapper'
  });







  //响应式基础
  const count = ref(0);
  function increment() {
    count.value++;
  } 
    //Ref 可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，比如 Map。
    //非原始值将通过 reactive() 转换为响应式代理
    const objTest = ref({
      nested: { count: 0 },
      arr: ['foo', 'bar']
    })

    function mutateDeeply() {
      // 以下都会按照期望工作
      objTest.value.nested.count++
      objTest.value.arr.push('baz')
    }

    const objTest2 = shallowRef({
      nested: { count: 99 },
      arr: ['foo', 'bar']
    })

    function mutateDeeply2() {
      // 以下不会按照期望工作
      objTest2.value.nested.count++
      objTest2.value.arr.push('baz22')
    }




  //计算属性
  const author = reactive({
    name: 'John Doe',
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  })
  const publishedBooksNumber = computed(() => {
    return author.books.length
  })

  const firstName = ref('lily');
  const lastName = ref('song');
  let fullName = computed({
    get() {
      return firstName.value + lastName.value;
    },
    set(newValue) {
      // 注意：我们这里使用的是解构赋值语法
      [firstName.value, lastName.value] = newValue.split(' ')
    }
  });

  fullName.value = 'William Tong';



  //绑定类class
  let isActive = ref(true);
  const classObject = reactive({
    active: true,
    'text-danger': false
  })
  const activeClass = ref('active')
  const errorClass = ref('text-danger')

  //绑定内联样式
  const activeColor = ref('red')
  const fontSize = ref(30) 

  const styleObject = reactive({
    color: 'red',
    fontSize: '13px'
  })

  const baseStyles = reactive({
    color: 'red',
    fontSize: '13px'
  })
  const overridingStyles = reactive({
    color: 'green',
    fontSize: '20px'
  })


</script>

<template>
  <main>
    <h5>模板语法</h5>
    <!--文本插值-->
    <p>{{ count }}</p>

    <!-- 原始HTML -->
    <!-- 在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。请仅在内容安全可信时再使用 v-html，并且永远不要使用用户提供的 HTML 内容。 -->
    <p v-html="htmlStr"></p>

    <!-- Attribute 绑定 -->
    <div v-bind:id="idStr"></div>
    <!-- 简写 -->
    <div :id="idStr"></div>
    <!-- 当 isButtonDisabled 为真值或一个空字符串 (即 <button disabled="">) 时，元素会包含这个 disabled attribute。而当其为其他假值时 attribute 将被忽略。 -->
    <button :disabled="isButtonDisabled">Button</button>

    <!-- 动态绑定多个值 -->
    <div v-bind="objectOfAttrs"></div>

    <h5>响应式基础</h5>
    <span>{{ count }}</span>
    <!-- <button v-on:click = increment()>click</button> -->
    <!-- 简写 -->
    <p>{{ objTest.nested.count }}</p>
    <p>{{ objTest.arr[2] }}</p>

    <p>{{ objTest2.nested.count }}</p>
    <p>{{ objTest2.arr[2] }}</p>
    <button @click = increment()>click</button>
    <button @click="mutateDeeply()">mutateDeeply</button>
    <button @click="mutateDeeply2()">mutateDeeply2</button>
    
    


    <h5>计算属性</h5>
    <p>has published books: {{ publishedBooksNumber }} books</p>
    <p>{{firstName + lastName  + fullName }}</p>

    <h5>绑定class</h5> 
    <div :class="{active: isActive}">绑定class的方式 </div>
    <p>:class 指令也可以和一般的 class attribute 共存。</p>
    <div class="box" :class="classObject">绑定一个对象</div>
    <div :class="[activeClass, errorClass]">绑定一个数组</div>
    <div :class="[{ active: isActive }, errorClass]">也可以在数组中嵌套对象</div>
    <p>在组件上使用</p>
    <p>对于只有一个根元素的组件，当你使用了 class attribute 时，这些 class 会被添加到根元素上并与该元素上已有的 class 合并。</p>
    <p>如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 $attrs 属性来实现指定</p>


    <h5>绑定内联样式</h5>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">111</div>
    <div :style="styleObject">222</div>
    <div :style="[baseStyles, overridingStyles]">333</div>
  </main>
</template>
