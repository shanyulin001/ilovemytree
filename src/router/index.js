import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/about',
    name: 'login',
    component:()=> import('../views/login.vue')
  },
  {
    path:'/registration-agreement',
    name:'registration-agreement',
    component:()=>import('../views/registration-agreement')
  },
  {
    path:'/signin',
    name:'signin',
    component:()=>import('../views/signin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
