<template>
  <h1 class="m-3">program details page</h1>
</template>

<script>
import moment from "moment";

export default {
  name: "ProgramDetails",
  created() {
    const startOfWeek = moment().startOf("isoWeek");
    const endOfWeek = moment().endOf("isoWeek");
    let days = [];
    let day = startOfWeek;
    while (day <= endOfWeek) {
      days.push({
        name: day.format("ddd"),
        date: day.format("D.M"),
      });
      day = day.clone().add(1, "d");
    }

    console.log(days);
  },
};
</script>
