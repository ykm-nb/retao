<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import "@/assets/css/reset.css";
import "@/assets/css/index.less";
export default {
  mounted() {
    setTimeout(()=>{document.getElementsByClassName("qidian_wpa_img")[0].click()},3000);
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  font-family: arial, 'Microsoft Yahei', '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
