  <script setup lang="ts">
    import { defineProps } from 'vue'
    const props = defineProps({
        name: String,
        greetingMessage: String,
        title: String //如果title没有定义为props 父组件中传入的title会绑定到子组件的根节点中 变成title属性
    })

  </script>
  
  <template>
    <div>
      <h2>PropsNew component</h2>
      <i>{{name}}</i>
      <b>{{greetingMessage}}</b>
      <i>{{title}}</i>
    </div>
  </template>
  
  <style>
    @media (min-width: 1024px) {

    }
  </style>
  