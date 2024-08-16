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
  <style scoped>
  .flex {
      display: flex;
      align-items: flex-start;
  }
  .aside {
      list-style: none;
      padding: 0;
      width: 200px;
      background: rgba(0,0,0,.2)
  }
  .content {
      width: 1000px;
      height: 500px;
      background: rgba(234, 0, 0, 0.2)
  }
  .acitve-status {
          color: hsla(160, 100%, 37%, 1);
          background-color: #fff;
      }
  </style>