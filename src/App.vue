<template>
  <div :class="[
    'min-h-screen transition-colors duration-300 flex flex-col',
    isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'
  ]">
    <!-- Header -->
    <header :class="[
      'border-b transition-colors duration-300 flex-shrink-0',
      isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    ]">
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-center justify-between">
          <!-- Logo e Nome -->
          <router-link to="/" class="flex items-center space-x-2">
            <img src="./assets/img/dark-logo.png" alt="BuscaLogo" class="w-6 h-6 rounded-lg shadow-sm">
            <div>
              <h1 class="text-lg font-bold">BuscaLogo</h1>
              <p class="text-xs text-gray-500">Buscador P2P</p>
            </div>
          </router-link>
          
          <!-- Navegação e Status -->
          <div class="flex items-center space-x-4">
            <!-- Botão Voltar à Busca (condicional) -->
            <router-link 
              v-if="!isHomePage" 
              to="/" 
              :class="[
                'px-2 py-1 rounded text-sm font-medium transition-colors',
                isDarkMode 
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              ← Voltar à Busca
            </router-link>
            
            <!-- Toggle Dark Mode -->
            <button
              @click="toggleDarkMode"
              :class="[
                'p-1.5 rounded transition-all duration-200 hover:scale-105',
                isDarkMode 
                  ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              ]"
              :title="isDarkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'"
            >
              <svg v-if="isDarkMode" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
              </svg>
              <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </button>
            
            <!-- Status da Conexão -->
            <div class="flex items-center space-x-2">
              <div :class="[
                'w-1.5 h-1.5 rounded-full transition-colors duration-200',
                connectionStatusClass
              ]"></div>
              <span :class="[
                'text-xs font-medium',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]">
                {{ connectionStatusText }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Conteúdo Principal -->
    <main class="flex-1 flex flex-col">
      <router-view />
    </main>

    <!-- Footer -->
    <footer :class="[
      'border-t transition-colors duration-300 flex-shrink-0 mt-auto',
      isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    ]">
      <div class="container mx-auto px-4 py-3">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <!-- Copyright -->
          <div :class="[
            'text-xs',
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          ]">
            © 2024 BuscaLogo. Todos os direitos reservados.
          </div>
          
          <!-- Links -->
          <div class="flex items-center space-x-3 text-xs">
            <router-link 
              to="/sobre-sistema" 
              :class="[
                'transition-colors',
                isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              ]"
            >
              Sobre o Sistema
            </router-link>
            <span :class="isDarkMode ? 'text-gray-600' : 'text-gray-300'">•</span>
            <router-link 
              to="/roadmap" 
              :class="[
                'transition-colors',
                isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              ]"
            >
              Roadmap
            </router-link>
            <span :class="isDarkMode ? 'text-gray-600' : 'text-gray-300'">•</span>
            <router-link 
              to="/termos-responsabilidade" 
              :class="[
                'transition-colors',
                isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              ]"
            >
              Termos de Responsabilidade
            </router-link>
            <span :class="isDarkMode ? 'text-gray-600' : 'text-gray-300'">•</span>
            <a 
              href="https://github.com/buscalogo" 
              target="_blank" 
              rel="noopener noreferrer" 
              :class="[
                'transition-colors',
                isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              ]"
            >
              GitHub
            </a>
            <span :class="isDarkMode ? 'text-gray-600' : 'text-gray-300'">•</span>
            <a 
              href="mailto:contato@buscalogo.com" 
              :class="[
                'transition-colors',
                isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              ]"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, provide } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Estado do tema
const isDarkMode = ref(false)

// Estado da conexão
const connectionStatus = ref({
  isConnected: false,
  currentQuery: ''
})

// Computed properties para status da conexão
const connectionStatusClass = computed(() => {
  return connectionStatus.value.isConnected 
    ? 'bg-green-500' 
    : 'bg-red-500'
})

const connectionStatusText = computed(() => {
  return connectionStatus.value.isConnected 
    ? 'Conectado' 
    : 'Desconectado'
})

const currentQuery = computed(() => {
  return connectionStatus.value.currentQuery || ''
})

const isHomePage = computed(() => {
  return route.path === '/'
})

// Função para alternar o tema
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('buscalogo-theme', isDarkMode.value ? 'dark' : 'light')
  
  // Aplica o tema ao documento
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Função para atualizar status da conexão (fornecida para componentes filhos)
const updateConnectionStatus = (status) => {
  connectionStatus.value = status
}

// Inicialização do tema
onMounted(() => {
  // Carrega tema do localStorage
  const savedTheme = localStorage.getItem('buscalogo-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  // Define tema inicial
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
  
  // Listener para mudanças de preferência do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('buscalogo-theme')) {
      isDarkMode.value = e.matches
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  })
})

// Fornece o tema e função de atualização para componentes filhos
provide('isDarkMode', isDarkMode)
provide('updateAppConnectionStatus', updateConnectionStatus)
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animações */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsividade */
@media (max-width: 640px) {
  .max-w-3xl {
    max-width: 100%;
  }
  
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
