import Vue from "vue";
import Vuex from "vuex"
import pictures from "./modules/pictures";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pictures
  }
})