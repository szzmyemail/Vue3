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