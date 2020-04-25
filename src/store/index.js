import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);
const state = {
  cartList: []
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
  // 使用mutations中可以便于跟踪，mutations最主要的作用就是用于跟踪
  // 异步操作推荐放在actions中执行
});
export default store;
