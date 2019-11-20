import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.prototype.http = axios
import VueAMap from 'vue-amap';



import { Swipe, SwipeItem } from 'vant';
import { Popup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Button } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Field } from 'vant';
import { Panel } from 'vant';
import { Tab, Tabs } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Row, Col } from 'vant';
import { DatetimePicker } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Uploader } from 'vant';
import { Dialog } from 'vant';
import { List } from 'vant';
import { Area } from 'vant';
import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
  } from 'vant';
import { Card } from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.use(Popup);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Button);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Field);
Vue.use(Panel);
Vue.use(Tab).use(Tabs);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Cell).use(CellGroup);
Vue.use(Row).use(Col);
Vue.use(DatetimePicker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(List);
Vue.use(Area);
Vue
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton);
Vue.use(Card);


import Mint from 'mint-ui' 
import 'mint-ui/lib/style.css'
import {Icon,NavBar}from 'vant';
import './lib/mui/css/mui.min.css'

Vue.use(Icon);
Vue.use(NavBar)
Vue.config.productionTip = false

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}




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
    Mint,
    render: h => h(App)
}).$mount('#app')
