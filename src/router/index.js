import Vue from 'vue'
import VueRouter from 'vue-router'

import userhome from 'views/user/userhome'
import userinfo from 'views/user/userinfo'
import userchange from 'views/user/userchange'
import user_stgyl from 'views/user/user_stgyl'

import shezhi from '../views/user/shezhi' //设置页面
import account from '../views/user/account' //账号与安全
import withdrawdeposit from '../views/user/withdrawdeposit' //提现资料
import aboutme from '../views/user/aboutme' //关于我们
import agreement from '../views/user/agreement' //平台协议
import remaining from '../views/user/remaining' //账户余额
import remainingdetail from '../views/user/remainingdetail' //余额明细
import tixian from '../views/user/tixian' //提现界面
import jifen from '../views/user/jifen' //积分首页界面
import jifendetails from '../views/user/jifendetails' //积分明细界面
Vue.use(VueRouter)

const routes = [
  //格式
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // }
    {
    path: '/userhome',
    name: 'userhome',
    component: userhome
    },{
    path: '/userinfo',
    name: 'userinfo',
    component: userinfo
    },{
    path: '/userchange',
    name: 'userchange',
    component: userchange
    },{
    path: '/user_stgyl',
    name: 'user_stgyl',
    component: user_stgyl
    },{ //设置页面
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
    },
    { //积分首页界面
        path: '/jifen',
        name: 'jifen',
        component: jifen
    },
    { //积分明细界面
        path: '/jifendetails',
        name: 'jifendetails',
        component: jifendetails
    }]


export default router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})