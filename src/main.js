import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';
import { Area } from 'vant';
import { Popup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Button } from 'vant';
import Router from 'vue-router'
import './lib/mui/css/mui.min.css'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}
import { NavBar } from 'vant';

Vue.use(NavBar);
import { RadioGroup, Radio } from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
Vue.use(RadioGroup);
Vue.use(Radio);

Vue.use(Button);
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
