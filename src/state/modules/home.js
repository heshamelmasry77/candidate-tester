import moment from "moment";
import { GET_EPG_URL } from "../../settings/api";
import axios from "axios";

const state = {
  // = data
  channels: [],
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
    let hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(i + ":" + "00");
    }
    return hours;
  },
  nowHour: () => {
    return moment().format("H");
  },
  nowMinutes: () => {
    return moment().get("minutes");
  },
};

const actions = {
  getChannels({ commit }) {
    axios
      .get(GET_EPG_URL)
      .then(function (response) {
        commit("SET_CHANNELS", response.data.channels);
      })
      .catch(function () {
        //TODO handle errors
        // console.log(error);
      });
  },
};

const mutations = {
  SET_CHANNELS(state, channels) {
    state.channels = channels;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
