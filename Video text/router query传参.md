#### 路由query传参

##### 定义路由

```typescript
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),//路由器的工作模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/router-learn',
      name: 'routerLearn',
      component: RouterLearn,
      children: [
        {
          path: '',
          redirect: '/router-learn/news'
        },
        {
          path: 'news', // 子路由这个path不用写 /
          name: 'news',
          component: News,
          children: [
            {
              path: '',
              redirect: '/router-learn/news/detail?id=1&content=1122211'
            },
            {
              name: 'newsDetailName',
              path: 'detail',
              component: NewsDetail,
              //query 参数不能使用这种方式
              //props: true,

              //可以这样传递
              props(route) {
                return route.query
              }
            }
          ]
        },
      ]
    }
  ]
})
```

##### 路由导航

```vue
<template>
    <div class="flex">
        <ul class="aside">
            <li v-for="news in newsList" :key="news.id">
                <RouterLink :to = '`/router-learn/news/detail?id=${news.id}&content=${news.content}`'>
                    {{ news.id }}
                </RouterLink>
            </li>
            <!-- 第二种写法 -->
            <li v-for="news in newsList" :key="`${news.id}new`">
                <RouterLink 
                    :to = "{
                        //path: '/router-learn/news/detail',//也可以不写path，写name
                        name: 'newsDetailName',
                        query: {
                            id: news.id,
                            content: news.content
                        }
                    }"
                >
                    {{ news.id }}
                </RouterLink>
            </li>
        </ul>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
    import {reactive} from 'vue';
    import {RouterView, RouterLink} from 'vue-router';
    const newsList = reactive([
        {
            id: 1,
            content: '1111111111111111'
        },
        {
            id: 2,
            content: '22222222222222222'
        },
        {
            id: 3,
            content: '33322222222222222'
        },
    ])
</script>
```

##### 路由参数接收

```vue
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
</template>
<script setup>
    import {toRefs} from 'vue'
    import { useRoute } from 'vue-router'
    let route = useRoute();
    //let {query} = route //这个写法有问题，因为对一个响应式对象解构，会使其失去响应性
    //toRefs会保留其响应性
    let {query} = toRefs(route)

    defineProps(['id', 'content'])
</script>
```



