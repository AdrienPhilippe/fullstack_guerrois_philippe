import Vue from 'vue'
import VueRouter from 'vue-router'
import Thrive from '@/components/Thrive.vue'
import Home from '@/components/Home.vue'
import CreateUser from '@/components/CreateUser.vue'
import CreatePosts from '@/components/CreatePosts.vue'
import Login from '@/components/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      next("/home");
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/create_user',
    name: 'Create user',
    component: CreateUser
  },
  {
    path: '/create_post',
    name: 'Create post',
    component: CreatePosts
  },
  {
    path: '/Thrive',
    name: 'Thrive',
    component: Thrive
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "/front/",
  routes
})

export default router