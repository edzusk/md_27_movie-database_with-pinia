import { createRouter, createWebHistory } from 'vue-router'
import MovieView from '../views/MovieView.vue'
import AboutViewVue from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MovieView
    },
    {
      path: '/:id',
      name: 'about',
      component: AboutViewVue
    }
  ]
})

export default router
