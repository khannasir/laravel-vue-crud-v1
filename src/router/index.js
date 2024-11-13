import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      // component: () => import('../views/users/index.vue')
    },
    {
      path: '/user',
      name: 'userList',
      component: () => import('../views/users/index.vue')
    },
    {
      path: '/user/create',
      name: 'userCreate',
      component: () => import('../views/users/create.vue')
    },
    {
      path: '/user/:id/edit',
      name: 'userEdit',
      component: () => import('../views/users/edit.vue'),
      props: true
    }
  ]
})

export default router
