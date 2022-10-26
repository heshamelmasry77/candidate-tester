<template>
  <ul
    class="flex overflow-x-scroll gap-x-4 justify-between items-center p-4 bg-neutral-800 scrollbar-hide h-16"
  >
    <li
      v-for="(item, index) in weekDays"
      :key="index"
      class="flex flex-col items-center font-semibold first:pl-4 last:pr-4"
      :class="todayDate === item.date ? 'text-white' : 'text-gray-400'"
    >
      <span>{{ item.name }}</span>
      <span>{{ item.date }}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WeekDays",
  computed: {
    ...mapGetters({
      weekDays: "home/weekDays",
      todayDate: "home/todayDate",
      dayHours: "home/dayHours",
    }),
  },
};
</script>
