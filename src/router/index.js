import Vue from 'vue'
import VueRouter from 'vue-router'
import shezhi from '../views/user/shezhi' //设置页面
import account from '../views/user/account' //账号与安全
import withdrawdeposit from '../views/user/withdrawdeposit' //提现资料
import aboutme from '../views/user/aboutme' //关于我们
import agreement from '../views/user/agreement' //平台协议
import remaining from '../views/user/remaining' //账户余额
import remainingdetail from '../views/user/remainingdetail' //余额明细
import tixian from '../views/user/tixian' //提现界面
Vue.use(VueRouter)

const routes = [
    //格式
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // }
    { //设置页面
        path: '/shezhi',
        name: 'shezhi',
        component: shezhi
    },
    { //账号与安全
        path: '/account',
        name: 'account',
        component: account
    },
    { //提现资料
        path: '/withdrawdeposit',
        name: 'withdrawdeposit',
        component: withdrawdeposit
    },
    { //关于我们
        path: '/aboutme',
        name: 'aboutme',
        component: aboutme
    },
    { //平台协议
        path: '/agreement',
        name: 'agreement',
        component: agreement
    },
    { //账户余额
        path: '/remaining',
        name: 'remaining',
        component: remaining
    },
    { //余额明细
        path: '/remainingdetail',
        name: 'remainingdetail',
        component: remainingdetail
    },
    { //提现界面
        path: '/tixian',
        name: 'tixian',
        component: tixian
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router