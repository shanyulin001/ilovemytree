import Vue from 'vue'
import VueRouter from 'vue-router'
import tree from '../views/tree'
import oldtree from '../views/oldtree'
import rj from '../views/rj'
import   Gong from '../views/gong'
import    Fu  from '../views/fu'
import    Song from '../views/song'

import userhome from '../views/user/userhome'
import userinfo from 'views/user/userinfo'
import userchange from 'views/user/userchange'
import user_stgyl from 'views/user/user_stgyl'
import guide from 'views/user/guide'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tree',
    name: 'tree',
    component: tree
  },
  {
    path:'/oldtree',
    name:"oldtree",
    component:oldtree
  },
  {
    path:'/tree/renyang',
    name:'renyang',
    component: () => import('../views/renyang')
  },
  {
    path:'/feature',
    name:'feature',
    component: () => import('../views/feature')
  },
  {
    path:'/culture',
    name:'culture',
    component: () => import('../views/culture')
  },
  {
    path:'/tree/xys',
    name:'xys',
    component: () => import('../views/xys')
  },
  {
    path:'/tree/xys/rj',
    name:'rj',
    component: rj
  },
  {
    path:'/',
    redirect:'/tree'
  },
  {
    path:'/tree/xys/make',
    name:'make',
    component: () => import('../views/make')
  },
  {
    path:'/tree/xys/eee',
    name:'eee',
    component:  () => import('../views/eee')
  },{
    path:'/tree/xys/fx',
    component: () => import('../views/aspiration'),
    children:[
    { path:'/',
      name:'gong',
      component:Gong
    },{
      path:'fu',
      name:'fu',
      component:Fu
    },
    {
      path:'song',
      name:'song',
      component:Song
    }
    ]
  },{
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
