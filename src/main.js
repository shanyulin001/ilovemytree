import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'

// import Vant from 'vant';
import 'vant/lib/index.css';
// Vue.use(Vant);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { Popup } from 'vant';
Vue.use(Popup);
import { Icon } from 'vant';
Vue.use(Icon);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Button } from 'vant';
Vue.use(Button);
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
import { Field } from 'vant';
Vue.use(Field);
import { Panel } from 'vant';
Vue.use(Panel);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);
import { RadioGroup, Radio } from 'vant';
Vue.use(RadioGroup);
Vue.use(Radio);
import { Uploader } from 'vant';
Vue.use(Uploader);
import { Dialog } from 'vant';
Vue.use(Dialog);
import { List } from 'vant';
Vue.use(List);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Area } from 'vant';
Vue.use(Area);
import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
} from 'vant';
Vue
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton);
import { Card } from 'vant';
Vue.use(Card);



import './lib/mui/css/mui.min.css'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.prototype.$http = axios
Vue.use(VueAxios, axios);

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '217ee093340f7fc824ab0ca4ba673f45',
    plugin: [
        "AMap.Autocomplete", //输入提示插件
        "AMap.PlaceSearch", //POI搜索插件
        "AMap.Scale", //右下角缩略图插件 比例尺
        "AMap.OverView", //地图鹰眼插件
        "AMap.ToolBar", //地图工具条
        "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
        "AMap.PolyEditor", //编辑 折线多，边形
        "AMap.CircleEditor", //圆形编辑器插件
        "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
    ],
    v: '1.4.4'
});

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')