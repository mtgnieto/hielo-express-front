import Vue from 'vue'
import VueRouter from 'vue-router'
import { requireAuth, requireGuest } from "@/services/AuthServices";

Vue.use(VueRouter)

const authPages = {
  path: '/',
  component: () => import(/* webpackChunkName: "DashboardLayout" */ '@/components/Layout/DashboardLayout.vue'),
  name: 'Authentication',
  beforeEnter: requireGuest,
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Home.vue')
    },
  ]
};

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "DashboardLayout" */ '@/components/Layout/DashboardLayout.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        path: '/',
        name: 'homeApp',
        component: () => import(/* webpackChunkName: "HomeApp" */ '@/views/HomeApp.vue')
      }
    ]
  },
  authPages
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
