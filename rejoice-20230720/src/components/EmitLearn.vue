<script setup lang="ts">
    import { ref } from 'vue';
    const emit = defineEmits({
        clickName: null,
        loginIn({email, pwd }) {
            if (email && pwd) {
            return true
            } else {
            console.warn('Invalid submit event payload!')
            return false
            }
    }
    })

    function submitForm(email: any, pwd: any) {
        emit('loginIn', { email, pwd })
    }

    const name = ref('lily');
    const pwd = ref('231');
</script>

<template>
  <div class="greetings">
   <h3>Emit:向父组件传递数据</h3>
   <button @click="submitForm(name, pwd)">login</button>
  </div>
</template>

<style scoped>
 h3 {
    color: pink;
 }
</style>
