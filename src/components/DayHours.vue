<template>
  <ul
    id="hours-container"
    class="flex overflow-x-scroll justify-between items-center p-4 py-3 border-t border-b border-gray-500 bg-neutral-800 scrollbar-hide h-11"
  >
    <li
      v-for="(hour, index) in dayHours"
      :key="index"
      :id="index"
      class="flex-none w-56 text-white first:pl-4 last:pr-4"
    >
      <div class="flex justify-center items-center">
        <span>{{ hour }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DayHours",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      dayHours: "home/dayHours",
    }),
  },
};
</script>
