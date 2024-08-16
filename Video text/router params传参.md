#### 路由params传参

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
          path: 'animals',
          component: Animals,
          children: [
            {
              path: '',
              redirect: '/router-learn/animals/detail/1/cat'
            },
            {
              name: 'animalDetailName',
              path: 'detail/:id/:content',
              component: AnimalDetail,
              //第一种写法:将路由收到的所有params参数作为props传给路由组件,如果是query，不能使用这种方法
              //props: true, 


              //第二种写法：可以自己决定将什么作为props给路由组件
              props(route) {
                return route.params
              },


              //第三种写法：对象写法，可以自己决定将什么作为props给路由组件
              // props: {
              //   a: 777,
              //   b: 888,
              //   c: 999
              // }
            }
          ]
        }
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
              <li v-for="animal in animalsList" :key="animal.id">
                  <RouterLink :to = '`/router-learn/animals/detail/${animal.id}/${animal.content}`'>
                      {{ animal.id }}
                  </RouterLink>
              </li>
              <!-- 第二种写法 -->
            <li v-for="animal in animalsList" :key="`${animal.id}new`">
                <RouterLink 
                    :to = "{
                        //path: '/router-learn/foods/detail', //params只能用name， path无效
                        name: 'foodDetailName', 
                        params: {
                            id: animal.id,
                            content: animal.content //params不能传数组 对象
                        }
                    }"
                >
                    {{ animal.id }}
                </RouterLink>
            </li>
          </ul>
          <div class="content">
              <router-view></router-view>
          </div>
      </div>
  </template>
  <script setup>
      import {reactive} from 'vue';
      import {RouterView, RouterLink} from 'vue-router';
      const animalsList = reactive([
          {
              id: '1',
              content: 'tiger'
          },
          {
              id: '2',
              content: 'lion'
          },
          {
              id: '3',
              content: 'dog'
          },
      ])
  </script>
```

##### 路由参数接收 animalDetailName组件

```vue
<template>
    <div>
      <div>
        <p>{{route.params.id}}</p>
        <p>{{route.params.content}}</p>
      </div>
      <div>
        <p>{{ params.id }}</p>
        <p>{{ params.content }}</p>
      </div>
    </div>
    <!-- props获取参数方式 -->
    <div>
      <p>{{id}}</p>
      <p>{{content}}</p>
      <p>{{a}}</p>
      <p>{{b}}</p>
      <p>{{c}}</p>
    </div>
  </template>
  <script setup>
      import {toRefs} from 'vue'
      import { useRoute } from 'vue-router'
      let route = useRoute();
      //let {params} = route //这个写法有问题，因为对一个响应式对象解构，会使其失去响应性
      //toRefs会保留其响应性
      let {params} = toRefs(route)
     defineProps(['id', 'content', 'a', 'b', 'c'])
  </script>
```



