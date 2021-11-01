import Vue from 'vue'
import VueRouter from 'vue-router'
import vueScrollBehavior from 'vue-scroll-behavior'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LoginView from '../views/Chat/LoginView.vue'
import RegisterView from '../views/Chat/RegisterView.vue'
import Room from '../views/Chat/Room.vue'
import ChatHome from '@/views/Chat/ChatHome'

Vue.use(VueRouter)
Vue.use(vueScrollBehavior, {router: router,})

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/rooms',
    name: 'chat-home',
    component: ChatHome
  },
  {
    path: '/room',
    name: 'chat-room',
    component: Room
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } 
      else {
        if (to.hash) {
          return {
            selector: to.hash
          }
        }
      return { x: 0, y: 0 }
    }
  }
})

export default router
