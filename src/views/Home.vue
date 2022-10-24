<template>
  <div class="relative">
    <div class="absolute overflow-y-scroll scrollbar-hide h-[576px] shadow-2xl shadow-gray-600 z-20">
      <ChannelsList/>
    </div>
    <WeekDays/>
    <div class="relative pt-[44px]">
      <CurrentTimeIndicator/>
      <div class="absolute z-30 w-full top-0">
        <DayHours/>
      </div>
      <Calender/>
    </div>
    <NowTimeBtn/>
  </div>
</template>

<script>
import axios from 'axios';
import ChannelsList from '../components/ChannelsList.vue'
import WeekDays from '../components/WeekDays.vue'
import Calender from '../components/Calender.vue'
import DayHours from '../components/DayHours.vue'
import CurrentTimeIndicator from '../components/CurrentTimeIndicator.vue'
import NowTimeBtn from '../components/NowTimeBtn.vue'

export default {
  name: 'Home',
  components: {
    WeekDays,
    Calender,
    ChannelsList,
    DayHours,
    CurrentTimeIndicator,
    NowTimeBtn
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
