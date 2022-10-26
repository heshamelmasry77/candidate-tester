<template>
  <div class="overflow-y-scroll scrollbar-hide h-[467px]">
    <DayShowsList />
    <DayShowsList />
    <DayShowsList />
    <DayShowsList />
    <DayShowsList />
    <DayShowsList />
    <DayShowsList />
    <DayShowsList />
  </div>
</template>

<script>
import DayShowsList from "./DayShowsList.vue";

export default {
  name: "DayShows",
  components: {
    DayShowsList,
  },
  data() {
    return {};
  },
};
</script>
