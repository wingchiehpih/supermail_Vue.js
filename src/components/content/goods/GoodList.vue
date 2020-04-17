<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index"
    />
  </div>
</template>
<script>
import GoodsListItem from "@/components/content/goods/GoodListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  padding 2px
}
</style>
