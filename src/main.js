import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "swiper/css/swiper.min.css" // Swiper
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
Vue.use(iView)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
