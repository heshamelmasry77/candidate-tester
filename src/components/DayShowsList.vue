<template>
  <ul class="flex items-center overflow-x-scroll scrollbar-hide">
    <li
      v-for="(show, showsIdx) in shows"
      :key="show.id"
      :class="[showsIdx % 2 === 0 ? 'bg-black' : 'bg-neutral-700']"
      :style="{ width: show.duration + 'px' }"
      class="flex-none text-white first:pl-4 last:pr-4 p-4 h-20 border-b border-gray-500"
    >
      <div class="flex flex-col justify-center items-center">
        <span class="capitalize">{{ show.name }}</span>
        <span class="text-sm text-gray-400">14:00 - 15:00</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
const shows = [
  {
    id: 1,
    name: "show 1",
    duration: 224,
  },
  {
    id: 2,
    name: "show 2",
    duration: 224,
  },
];
</script>
