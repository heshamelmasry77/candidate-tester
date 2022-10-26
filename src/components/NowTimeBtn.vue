<template>
  <div class="absolute z-50 right-4 bottom-4">
    <a
      type="button"
      class="inline-flex items-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 uppercase text-lg tracking-wide shadow-2xl shadow-gray-600 cursor-pointer"
      @click.prevent="handleNavigateNowHour"
    >
      now
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NowTimeBtn",
  data() {
    return {};
  },
  methods: {
    handleNavigateNowHour() {
      let element = document.getElementById(`${this.nowHourId}`);
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    },
  },
  computed: {
    ...mapGetters({
      nowHourId: "home/nowHour",
    }),
  },
};
</script>
