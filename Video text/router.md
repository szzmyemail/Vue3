```vue
//设置导航的组件
<template>
 <RouterLink
  	:to="/news/detail?id=123&content='aaa'"
  >
		导航1
 </RouterLink>
 <RouterLink
      :to="
      {
        path: "/news/detail",
        query: {
          id: 123,
          content: 'aaa'
        }
      }
      "
    >
	导航2
  </RouterLink>
</template>




//导航到的组件，即需要获取路由参数的组件
<script setup>
  import {useRoute} from 'vue-router';
  let route = useRoute();
  console.log(route.query.id);
</script>

```









从一个响应式对象身上解构得来的值，会失去响应性，解决方法是结构的时候加上toRefs(被解构对象)