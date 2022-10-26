<template>
  <ul class="flex flex-col items-start">
    <li class="flex-none p-4 w-20 h-16 text-white bg-neutral-800">
      <div class="flex flex-col justify-center items-center h-full">
        <v-icon name="la-star-solid" fill="#979eaa" scale="1.5" />
      </div>
    </li>
    <li
      class="flex-none px-4 w-20 h-11 text-white border-b border-gray-500 bg-neutral-800"
    >
      <div class="flex flex-col justify-center items-center h-full"></div>
    </li>
    <li
      v-for="channel in channels"
      :key="channel.id"
      class="flex-none p-4 w-20 h-20 text-white bg-neutral-800 border-b border-gray-500"
    >
      <div class="flex flex-col justify-center items-center h-full">
        <img
          :src="channel.images.logo"
          v-bind:alt="channel.id"
          @error="replaceByDefault"
        />
      </div>
    </li>
  </ul>
</template>
<script>
import img from "../assets/default.png";

export default {
  name: "ChannelsList",
  props: ["channels"],
  methods: {
    replaceByDefault(e) {
      e.target.src = img;
    },
  },
};
</script>
