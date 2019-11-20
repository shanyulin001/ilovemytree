import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui' 
import 'mint-ui/lib/style.css'
import {Icon,NavBar}from 'vant';
import './lib/mui/css/mui.min.css'

Vue.use(Icon);
Vue.use(NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Mint,
  
  render: h => h(App)
}).$mount('#app')
