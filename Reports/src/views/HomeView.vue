<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
// import {
//   Check,
//   Edit
// } from '@element-plus/icons-vue'
type User = {
    name: string,
    age: number
} 

const lilyNew:User = {
    name: 'Lily',
    age: 18
}

type ArrType = [string, string, number];
const arr: ArrType = ['a', 'b', 1]
//报错
//const arr1: ArrType = [2, 'b', 1]


type Params = string | number;
const name: Params = 'lily';
const age: Params = 18;
</script>

<template>
  <main>
    <TheWelcome />
    <div class="mb-4">
      <!-- <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle /> -->
    </div>
  </main>
</template>
