<template>
  <div
    class="overflow-y-scroll scrollbar-hide h-[calc(100vh-169px)] sm:h-[467px]"
  >
    <DayShowsList
      v-for="channel in channels"
      :id="channel.id"
      :shows="channel.schedules"
    />
  </div>
</template>

<script>
import DayShowsList from "./DayShowsList.vue";

export default {
  name: "DayShows",
  props: ["channels"],
  components: {
    DayShowsList,
  },
};
</script>
