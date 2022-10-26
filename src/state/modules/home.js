import moment from "moment";

const state = {
  // = data
  isHere: true,
};

const getters = {
  // = computed properties
  weekDays: () => {
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
    return days;
  },
  todayDate: () => {
    return moment().format("D.M");
  },
  dayHours: () => {
    console.log(moment().format("H"));
    let hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(i + ":" + "00");
    }
    return hours;
  },
  nowHour: () => {
    return moment().format("H");
  },
};

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
