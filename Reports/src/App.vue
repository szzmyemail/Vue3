<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Control hub</el-header>
      <el-container>
        <el-aside width="200px"> 
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
          >
          <el-menu-item index="2">
            <span>
              <RouterLink to="/">Home</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="3">
            <span>
              <RouterLink to="/about">About</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="4">
            <span>
              <RouterLink to="/router-learn">Router learn</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="5">
            <span>
              <RouterLink to="/ref-reactive">Ref&Reactive</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="6">
            <span>
              <RouterLink to="/watch">Watch</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="7">
            <span>
              <RouterLink to="/computed">Computed</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="8">
            <span>
              <RouterLink to="/to-refs">ToRefs</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="9">
            <span>
              <RouterLink to="/ref">Ref</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="10">
            <span>
              <RouterLink to="/props">Props</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="11">
            <span>
              <RouterLink to="/hooks">Hooks</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="12">
            <span>
              <RouterLink to="/pinia">Pinia</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="13">
            <span>
              <RouterLink to="/props-and-emit">Props&Emit</RouterLink>
            </span>
          </el-menu-item>
          <el-menu-item index="14">
            <span>
              <RouterLink to="/component-v-model">Component v-model</RouterLink>
            </span>
          </el-menu-item>
        </el-menu>
      </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100vh;
  .el-container {
    height: 100%;
  }
  .el-header {
      background-color: var(--el-color-primary-light-7);
      color: var(--el-text-color-primary);
      text-align: center;
  } 
  .el-aside {
    background-color: var(--el-color-primary-light-8);
    color: var(--el-text-color-primary);
    text-align: center;
  }
  .el-container {
    background-color: var(--el-color-primary-light-9);
    color: var(--el-text-color-primary);
    text-align: center;
  }
  a.router-link-active {
    color: hsla(160, 100%, 37%, 1);
  }

  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  a:first-of-type {
    border: 0;
  }
  }     




</style>
