import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ExperimentDashboard from '@/views/ExperimentDashboard.vue'
import ExperimentView from '@/views/ExperimentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView
    },
    {
      path: '/experimentDashboard',
      name: 'expDashboard',
      component: ExperimentDashboard
    },
    {
      path: '/viewExperimentChart',
      name: 'viewExperimentChart',
      component: ExperimentView
    }
  ]
})

export default router
