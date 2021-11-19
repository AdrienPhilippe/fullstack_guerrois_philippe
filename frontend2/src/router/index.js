/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import AppHome from '@/views/AppHome'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/apphome',
      name: 'AppHome',
      component: AppHome
    }
    

  ]
})

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       component: () => import("../views/Home.vue"),
//     },
//     {
//       path: "/sign-in",
//       component: () => import("../views/Login.vue"),
//     },
//   ],
// });

export default router;