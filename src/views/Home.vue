<template>
  <div>
    <WeekDays/>
    <Calender/>
  </div>
</template>

<script>
import axios from 'axios';
import WeekDays from '../components/WeekDays.vue'
import Calender from '../components/Calender.vue'

export default {
  name: 'Home',
  components: {
    WeekDays,
    Calender
  },
  data() {
    return {
      epgData: []
    }
  },
  mounted() {
    axios
        .get('http://localhost:1337/epg')
        .then((response) => {
          console.log("response: ", response);
        })
  }
}
</script>
