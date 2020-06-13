import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrencyConverter from '../views/CurrencyConverter.vue'
import Calculator from '../views/Calculator.vue'
import { Plugin } from 'vue-fragment';
Vue.use(Plugin);

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'CurrencyConverter',
    component: CurrencyConverter
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
