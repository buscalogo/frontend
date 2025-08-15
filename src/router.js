import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import TermosResponsabilidade from './views/TermosResponsabilidade.vue'
import SobreSistema from './views/SobreSistema.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/termos-responsabilidade',
    name: 'TermosResponsabilidade',
    component: TermosResponsabilidade
  },
  {
    path: '/sobre-sistema',
    name: 'SobreSistema',
    component: SobreSistema
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
