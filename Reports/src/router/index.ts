import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RouterLearn from '../views/RouterLearn.vue'
import RefAndReactive from '../views/RefAndReactive.vue'
import Watch from '../views/Watch.vue'
import Computed from '../views/Computed.vue'
import ToRefs from '../views/ToRefs.vue'
import Ref from '../views/Ref.vue'
import Props from '../views/Props.vue'
import Hooks from '../views/Hooks.vue'
import Pinia from '../views/Pinia.vue'
import PropsAndEmit from '../views/PropsAndEmit.vue'
import VModel from '../views/VModel.vue'


import News from '../components/News.vue'
import Foods from '../components/Foods.vue'
import FoodDetail from '../components/FoodDetail.vue'
import NewsDetail from '../components/NewsDetail.vue'
import Animals from '../components/Animals.vue'
import AnimalDetail from '../components/AnimalDetail.vue'

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
        {
          path: 'foods',
          name: 'foods',
          component: Foods,
          children: [
            {
              path: '',
              redirect: '/router-learn/foods/detail/1/tomato'
            },
            {
              name: 'foodDetailName',
              path: 'detail/:id/:content',
              component: FoodDetail
            }
          ]
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
    },
    {
      path: '/ref-reactive',
      name: 'refAndReactive',
      component: RefAndReactive
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed
    },
    {
      path: '/to-refs',
      name: 'toRefs',
      component: ToRefs
    },
    {
      path: '/ref',
      name: 'ref',
      component: Ref
    },
    {
      path: '/props',
      name: 'props',
      component: Props
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: Hooks
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: Pinia
    },
    {
      path: '/props-and-emit',
      component: PropsAndEmit
    },
    {
      path: '/component-v-model',
      component: VModel
    },
  ]
})

export default router
