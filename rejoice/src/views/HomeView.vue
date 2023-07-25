<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import PropsNew from '../components/PropsNew.vue'
import AboutView from './AboutView.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <AboutView />
    <PropsNew name="lily" greeting-message="hello" id="test" title="really title" />
  </main>
</template>
