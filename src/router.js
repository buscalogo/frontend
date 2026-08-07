import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import TermosResponsabilidade from './views/TermosResponsabilidade.vue'
import SobreSistema from './views/SobreSistema.vue'
import InstalarExtensao from './views/InstalarExtensao.vue'
import Roadmap from './views/Roadmap.vue'
import PoliticaPrivacidade from './views/PoliticaPrivacidade.vue'
import PrivacidadeChatTranslator from './views/PrivacidadeChatTranslator.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, _from, next) {
      // Compat: /?q=termo → /search?q=termo (padrão de mecanismos de busca)
      const q = to.query.q
      if (typeof q === 'string' && q.trim()) {
        next({ path: '/search', query: { q: q.trim() }, replace: true })
        return
      }
      next()
    }
  },
  {
    path: '/search',
    name: 'Search',
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
  },
  {
    path: '/instalar-extensao',
    name: 'InstalarExtensao',
    component: InstalarExtensao
  },
  {
    path: '/roadmap',
    name: 'Roadmap',
    component: Roadmap
  },
  {
    path: '/privacidade',
    name: 'PoliticaPrivacidade',
    component: PoliticaPrivacidade
  },
  {
    path: '/privacidade/chat-translator',
    name: 'PrivacidadeChatTranslator',
    component: PrivacidadeChatTranslator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
