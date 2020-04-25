<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="@/assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      dafault: true
    }
  }
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #ccc;
}
.check {
  background-color: orchid;
  border-color: red;
}
</style>
