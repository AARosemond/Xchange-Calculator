import Vue from 'vue'
import VueRouter from 'vue-router'
import XchangeCalculator from '../views/XchangeCalculator.vue'
import About from '../views/About.vue'
import { Plugin } from 'vue-fragment';
Vue.use(Plugin);

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'XchangeCalculator',
    component: XchangeCalculator
  },
  {
    path: '/about',
    name: 'About',
    component: About
    

  }
]

const router = new VueRouter({
  routes
})

export default router
