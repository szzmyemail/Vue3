<script setup lang="ts">
  import { ref, onMounted, reactive, computed } from 'vue'

  
  const htmlContent = ref('<span style="color:red">This should be red.</span')
  


  // 响应式状态
  const count = ref(0)
  // 用来修改状态、触发更新的函数
  function increment() {
    console.log(count);
    console.log(count.value);
    count.value++
  }


  const author = reactive({
    name: 'lily',
    books: ['one', 'two','three']
  })
  //一个计算属性 ref
  const authorBooksLength = computed(() => {
    return author.books.length
  })

  function addBooks() {
    author.books.push('four');
    console.log('author',author);
  }




  // 生命周期钩子
  onMounted(() => {
    //console.log(`The initial count is ${count.value}.`)
  })
</script>

<template>
  <div class="about">
    <h2>AboutView component</h2>
    <div>
      <p>{{htmlContent}}</p>
      <p>Using v-html directive: <span v-html="htmlContent"></span></p>
    </div>

    <button @click="increment">Count is: {{ count }}</button>

    <h3>author info</h3>
    <button @click="addBooks()">add books</button>
    <h4>books length: {{authorBooksLength}}</h4>
    <ul>
      <li v-for="book in author.books">{{book}}</li>
    </ul>
    


  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    /* min-height: 100vh; */
    padding: 100px 0 50px 0;
  }
}
</style>
