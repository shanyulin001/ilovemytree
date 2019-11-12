import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';
import { Area } from 'vant';
import { Popup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

Vue.use(Popup);
Vue.use(Area);

Vue.use(Icon);

Vue.use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
