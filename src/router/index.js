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
    component: Calculator
    

  }
]

const router = new VueRouter({
  routes
})

export default router
