<template>
  <div>
    <p>{{route.query.id}}</p>
    <p>{{route.query.content}}</p>
  </div>
  <div>
    <p>{{ query.id }}</p>
    <p>{{ query.content }}</p>
  </div>
  <div>
    <p>{{ id }}</p>
    <p>{{ content }}</p>
  </div>
  <button @click="goToFoodsPage()">GO TO foods</button>
</template>
<script setup>
    import {toRefs} from 'vue'
    import { useRoute, useRouter} from 'vue-router'
    let route = useRoute();
    //let {query} = route //这个写法有问题，因为对一个响应式对象解构，会使其失去响应性
    //toRefs会保留其响应性
    let {query} = toRefs(route);

    defineProps(['id', 'content'])

    const router = useRouter();
    function goToFoodsPage() {
      //router.push("/router-learn/foods/detail/1/'番茄'");
      router.push(
        {
            //path: '/router-learn/foods/detail', //params只能用name， path无效
            name: 'foodDetailName', 
            params: {
                id: 1,
                content: '番茄' //params不能传数组 对象
            }
        }
      );
    }
</script>