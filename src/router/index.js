import Vue from 'vue'
import VueRouter from 'vue-router'

import userhome from 'views/user/userhome'
import userinfo from 'views/user/userinfo'
import userchange from 'views/user/userchange'
import user_stgyl from 'views/user/user_stgyl'
import guide from 'views/user/guide'

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
  },{
    path: '/guide',
    name: 'guide',
    component: guide
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
