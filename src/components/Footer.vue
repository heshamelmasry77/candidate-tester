<template>
  <div
    class="flex justify-between items-center p-2 bg-neutral-900 shadow-2xl shadow-black absolute bottom-0 z-50 sm:relative w-full"
  >
    <v-icon name="fa-home" fill="white" scale="1.5" />
    <router-link to="/details">
      <v-icon name="md-livetv" fill="white" scale="1.5" />
    </router-link>
    <router-link to="/">
      <v-icon name="fa-th-list" fill="white" scale="1.5" />
    </router-link>
    <v-icon name="bi-play-circle" fill="white" scale="1.5" />
    <v-icon name="gi-read" fill="white" scale="1.5" />
  </div>
</template>
