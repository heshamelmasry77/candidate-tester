<script setup>
// import HelloWorld from './components/Home.vue'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="w-96 h-[720px]">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
