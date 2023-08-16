<script setup lang="ts">
  import { ref, reactive, computed } from 'vue';
  const count = ref(0);
  function increment() {
    count.value++;
  } 

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
</script>

<template>
  <main>
    <span>{{ count }}</span>
    <button @click = increment()>click</button>
    <br>
    <p>has published books: {{ publishedBooksNumber }} books</p>
    <p>{{firstName + lastName  + fullName }}</p>
  </main>
</template>
