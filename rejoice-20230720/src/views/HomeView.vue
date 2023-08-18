<script setup lang="ts">
  import { ref, reactive, computed } from 'vue';
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
    <button @click = increment()>click</button>
    
    


    <h5>计算属性</h5>
    <p>has published books: {{ publishedBooksNumber }} books</p>
    <p>{{firstName + lastName  + fullName }}</p>
  </main>
</template>
