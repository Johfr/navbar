import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        index: 1
      },
    },
    {
      path: '/search',
      name: "fock",
      component: Search,
      meta: {
        index: 2
      },
    },
    {
      path: '/favorite',
      component: Home,
    },
    {
      path: '/preference',
      component: Home,
    },
  ],
})

export default router
