import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import HomeView from '../views/HomeView.vue'
import TvView from '../views/TvView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tv',
      name: 'tv',
      component: TvView
    }
  ]
})

export default router