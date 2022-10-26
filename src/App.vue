<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="w-full h-full sm:w-96 sm:h-[720px]">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
