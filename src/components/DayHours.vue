<template>
  <ul
    id="hours-container"
    class="flex overflow-x-scroll justify-between items-center border-t border-b border-gray-500 scrollbar-hide h-11 overflow-y-hidden bg-neutral-800"
  >
    <li
      v-for="(hour, index) in dayHours"
      :key="index"
      :id="index"
      class="flex-none w-56 text-white last:pr-4 h-full bg-neutral-800"
    >
      <div class="flex justify-center items-center h-full relative">
        <div class="h-2 w-[1px] bg-neutral-700 absolute bottom-0"></div>
        <span>{{ hour }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DayHours",
  computed: {
    ...mapGetters({
      dayHours: "home/dayHours",
    }),
  },
};
</script>
