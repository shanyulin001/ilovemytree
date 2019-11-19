import Vue from 'vue'
import VueRouter from 'vue-router'
import tree from '../views/tree'
import oldtree from '../views/oldtree'
import rj from '../views/rj'
import Gong from '../views/gong'
import Fu from '../views/fu'
import Song from '../views/song'


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
import jifenuse from '../views/user/jifenuse' //积分用途界面
Vue.use(VueRouter)

const routes = [
    //格式
    // {
    // path: '/',
    // name: 'home',
    // component: Home
    // },
    {
        path: '/tree',
        name: 'tree',
        component: tree
    },
    {
        path: '/oldtree',
        name: "oldtree",
        component: oldtree
    },
    {
        path: '/userhome',
        name: 'userhome',
        component: userhome
    }, {
        path: '/userinfo',
        name: 'userinfo',
        component: userinfo
    }, {
        path: '/userchange',
        name: 'userchange',
        component: userchange
    }, {
        path: '/user_stgyl',
        name: 'user_stgyl',
        component: user_stgyl
    }, { //设置页面
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
    },
    { //积分用途界面
        path: '/jifenuse',
        name: 'jifenuse',
        component: jifenuse
    },
    {
        path: '/tree/renyang',
        name: 'renyang',
        component: () =>
            import ('../views/renyang')
    },
    {
        path: '/feature',
        name: 'feature',
        component: () =>
            import ('../views/feature')
    },
    {
        path: '/culture',
        name: 'culture',
        component: () =>
            import ('../views/culture')
    },
    {
        path: '/tree/xys',
        name: 'xys',
        component: () =>
            import ('../views/xys')
    },
    {
        path: '/tree/xys/rj',
        name: 'rj',
        component: rj
    },
    {
        path: '/',
        redirect: '/tree'
    },
    {
        path: '/tree/xys/make',
        name: 'make',
        component: () =>
            import ('../views/make')
    },
    {
        path: '/tree/xys/eee',
        name: 'eee',
        component: () =>
            import ('../views/eee')

    },
    // { path:'',
    // name:'',
    //  component:  
    // },

    {
        path: '/tree/xys/fx',
        component: () =>
            import ('../views/aspiration'),
        children: [{
                path: '/',
                name: 'gong',
                component: Gong
            }, {
                path: 'fu',
                name: 'fu',
                component: Fu
            },
            {
                path: 'song',
                name: 'song',
                component: Song
            }, {
                path: '/signin',
                name: 'signin',
                component: () =>
                    import ('../views/signin')
            },
            {
                path: '/zhuan',
                name: 'zhuan',
                component: () =>
                    import ('../views/zhuan')
            },
            {
                path: '/trees/:id',
                name: 'detail',
                component: () =>
                    import ('../views/detail')


            },

            {
                path: '/oldtree',
                name: "oldtree",
                component: oldtree
            },
            {
                path: '/tree/renyang',
                name: 'renyang',
                component: () =>
                    import ('../views/renyang')
            },
            {
                path: '/feature',
                name: 'feature',
                component: () =>
                    import ('../views/feature')
            },
            {
                path: '/culture',
                name: 'culture',
                component: () =>
                    import ('../views/culture')
            },
            {
                path: '/tree/xys',
                name: 'xys',
                component: () =>
                    import ('../views/xys')
            },
            {
                path: '/tree/xys/rj',
                name: 'rj',
                component: rj
            },
            {
                path: '/',
                redirect: '/tree'
            },
            {
                path: '/tree/xys/make',
                name: 'make',
                component: () =>
                    import ('../views/make')
            },
            {
                path: '/tree/xys/eee',
                name: 'eee',
                component: () =>
                    import ('../views/eee')

            },
            {
                path: '/tree/shop',
                name: 'verify',
                component: () =>
                    import ('../views/verify')
            },
            {
                path: '/tree/xuyuan',
                name: 'xuyaun',
                component: () =>
                    import ('../views/xuyuan')
            }
        ]
    }
]



export default router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})