import { createRouter, createWebHistory } from 'vue-router'
import PortadaView from '../components/Portada/Portada.vue'
import ComputoIIView from '../views/ComputoIIView.vue'
import ComputoIIIView from '../views/ComputoIIIView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portada',
      component: PortadaView
    },
    {
      path: '/ComputoII',
      name: 'ComputoII',
      component: ComputoIIView,
    },
    {
      path: '/ComputoIII',
      name: 'ComputoIII',
      component: ComputoIIIView,
    },
   
  ]
})

export default router
