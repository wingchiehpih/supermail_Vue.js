import { ADD_COUNTER, ADD_TO_CART } from "./mutations-type";

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    // 通过修改模型的方法来改变是否选中
    payload.checked = false;
    state.cartList.push(payload);
  }
  // mutations唯一的目的是修改state中的状态
  // mutations中的每个方法尽可能完成的事件比较单一
};
