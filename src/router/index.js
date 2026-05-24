import { createRouter, createWebHistory } from 'vue-router'

import Portafolio from '../components/Portafolio.vue'
import Ofta from '../components/Projecto1/Portafolio2.vue'

const routes = [
  {
    path: '/',
    component: Portafolio
  },

  {
    path: '/oftalmologia',
    component: Ofta
  }
]

const router = createRouter({
  history: createWebHistory(),

  routes,

  // SCROLL ARRIBA AL CAMBIAR DE RUTA
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router