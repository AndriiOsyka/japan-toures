import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import LocationsView from '../views/LocationsView.vue'
import VideosView from '../views/VideosView.vue'
import SignInView from '../views/SignInView.vue'
import Service from '../views/Service.vue'
import allGuides from '../views/allGuides.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesView
  },
  {
    path: '/locations',
    name: 'locations',
    component: LocationsView
  },
  {
    path: '/videos',
    name: 'videos',
    component: VideosView
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInView
  },
  {
    path: '/allGuides',
    name: 'allGuides',
    component: allGuides
  },
  {
    path: '/service/:id',
    name: 'service',
    component: Service
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
