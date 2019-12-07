<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import "@/assets/css/reset.css";
import "@/assets/css/index.less";
import api from "@/api";

export default {
  data(){
    return {
      newss: {}
    }
  },
  methods: {
    getDesc() {
        api.axs("post", "/netOptimize/queryNetInfo").then(({ data })=>{
            if (data.code === "SUCCESS") {
                this.newss = data.data
                document.title = data.data.netTitle
                document.getElementById('metakeywords').innerText = data.data.netKeyword
                document.getElementById('metadesc').innerText = data.data.netDescriber
            } else {
                this.$Message.error(data.remark);
            }
        });
    }
  },
  mounted() {
    setTimeout(()=>{document.getElementsByClassName("qidian_wpa_img")[0].click()},3000);
    // this.getDesc()
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
