<template>
  <ul class="flex items-center overflow-x-scroll scrollbar-hide">
    <li
      v-for="(show, showsIdx) in modifiedShows"
      :key="show.id"
      :class="[showsIdx % 2 === 0 ? 'bg-black' : 'bg-neutral-700']"
      :style="{ width: show.durationInWidth + 'px' }"
      class="flex-none text-white first:pl-4 first:ml-20 last:pr-4 p-4 h-20 border-b border-gray-500"
    >
      <div class="flex flex-col justify-center items-center overflow-y-hidden">
        <span class="capitalize text-sm text-center">{{ show.title }}</span>
        <span class="text-xs text-gray-400"
          >{{ show.formattedStartTime }} - {{ show.formattedEndTime }}</span
        >
      </div>
    </li>
  </ul>
</template>
<script>
import moment from "moment";

export default {
  name: "DayShowsList",
  props: ["shows"],
  computed: {
    modifiedShows() {
      return this.shows.map((show) => {
        let endTime = moment(show.end);
        let startTime = moment(show.start);
        let duration = moment.duration(endTime.diff(startTime));
        let seconds = duration.asSeconds() / 10;
        let formattedStartTime = moment(show.start).format("hh:mm");
        let formattedEndTime = moment(show.end).format("hh:mm");
        return {
          ...show,
          durationInWidth: seconds,
          formattedStartTime,
          formattedEndTime,
        };
      });
    },
  },
};
</script>
