<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
/* 引入css样式文件 */
@import "./assets/css/base.css";
</style>
