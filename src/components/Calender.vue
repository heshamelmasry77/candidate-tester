<template>
  <div>
    <DayHours/>
    <DayShows/>
  </div>
</template>

<script>
import DayHours from '../components/DayHours.vue'
import DayShows from "./DayShows.vue";

export default {
  name: 'Calender',
  components: {
    DayHours,
    DayShows
  },
  data() {
    return {}
  },
}
</script>

