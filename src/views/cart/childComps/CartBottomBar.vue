<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="price">合计：{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import { getters, mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          // 保留两位小数失效
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      // 使用filter
      // return !this.cartList.filter(item => !item.checked).length;
      // find方法具有更高性能
      return !this.cartList.find(item => !item.checked);
      // 普通遍历
      // for(let item of this.cartList){
      //   if(!this.checked){
      //     return false
      //   }
      // }
      // return true
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #eeeeee;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  line-height: 20px;
}
.price {
  flex: 1;
  margin-left: 30px;
}
.calculate {
  width: 90px;
  text-align: center;
  background-color: red;
  color: #fff;
}
</style>
