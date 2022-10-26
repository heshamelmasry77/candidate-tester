import moment from "moment";

const state = {
  // = data
  isHere: true,
};

const getters = {
  // = computed properties
  weekDays: (state, getters) => {
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
