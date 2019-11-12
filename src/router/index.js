import Vue from 'vue'
import VueRouter from 'vue-router'
import tree from '../views/tree'
import oldtree from '../views/oldtree'
Vue.use(VueRouter)

const routes = [
  //格式
  {
    path: '/',
    name: 'tree',
    component: tree
  },
  {
    path:'/oldtree',
    name:"oldtree",
    component:oldtree
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
