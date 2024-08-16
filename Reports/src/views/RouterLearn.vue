<script setup lang="ts">
 import {RouterLink, RouterView} from 'vue-router';
</script>
<template>
    <div class="navigate">
        <RouterLink to="/router-learn/news" active-class="acitve-status">News</RouterLink>
        <RouterLink to="/router-learn/foods" active-class="acitve-status">Foods</RouterLink>
        <RouterLink to="/router-learn/animals" active-class="acitve-status">Animals</RouterLink>
    </div>
    <div class="content">
        <RouterView></RouterView>
    </div>

</template>

<style>
    .navigate a {
       padding: 0.25rem 1rem; 
    }
    .acitve-status {
        color: hsla(160, 100%, 37%, 1);
        background-color: #fff;
    }
</style>
