<template>
  <div class="flex-1 flex flex-col">
    <!-- Campo de Busca (Dinâmico) -->
    <div 
      class="sticky top-0 z-10 transition-all duration-300 backdrop-blur-sm" 
      :class="[
        isDarkMode ? 'bg-gray-900/80' : 'bg-white/80',
        hasSearchResults ? 'py-2' : 'py-6'
      ]"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Logo e Título (Só aparecem quando não há resultados) -->
          <div v-if="!hasSearchResults" class="text-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="@/assets/img/dark-logo.png" alt="BuscaLogo" class="w-8 h-8">
            </div>
            <h1 
              :class="[
                'text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
                isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'
              ]"
            >
              BuscaLogo
            </h1>
            <p 
              :class="[
                'text-sm',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]"
            >
              Buscador colaborativo P2P
            </p>
          </div>

          <!-- Campo de Busca (Centralizado) -->
          <div class="flex justify-center">
            <div 
              class="relative" 
              :class="hasSearchResults ? 'w-full max-w-lg' : 'w-full max-w-2xl'"
            >
              <div class="relative">
                <input
                  v-model="searchQuery"
                  @keyup.enter="performSearch"
                  :class="[
                    'w-full border transition-all duration-200 focus:outline-none focus:ring-2 shadow-sm rounded-full',
                    hasSearchResults 
                      ? 'px-4 py-2 text-base' 
                      : 'px-6 py-4 text-lg',
                    isDarkMode 
                      ? 'bg-gray-800/90 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20' 
                      : 'bg-white/90 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20'
                  ]"
                  placeholder="Digite sua busca..."
                  :disabled="isSearching || isReconnecting"
                >
                <button
                  @click="performSearch"
                  :disabled="isSearching || isReconnecting || !searchQuery.trim()"
                  :class="[
                    'absolute right-2 top-1/2 transform -translate-y-1/2 font-medium transition-all duration-200 rounded-full',
                    hasSearchResults 
                      ? 'px-3 py-1 text-sm' 
                      : 'px-6 py-2',
                    isSearching || isReconnecting || !searchQuery.trim()
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : isDarkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                  ]"
                >
                  <span v-if="isReconnecting">
                    <div class="flex items-center space-x-2">
                      <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span class="text-xs">Conectando...</span>
                    </div>
                  </span>
                  <span v-else-if="isSearching">🔍</span>
                  <span v-else>Buscar</span>
                </button>
              </div>
              
              <!-- Indicador de Reconexão -->
              <div v-if="isReconnecting" class="mt-3 text-center">
                <div class="flex items-center justify-center space-x-2">
                  <div class="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <span :class="[
                    'text-sm font-medium',
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  ]">
                    Reconectando ao servidor... ({{ reconnectionAttempts }}/{{ maxReconnectionAttempts }})
                  </span>
                </div>
                <p :class="[
                  'text-xs mt-1',
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                ]">
                  Tentando restabelecer a conexão automaticamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conteúdo Principal -->
    <div 
      class="flex-1 container mx-auto px-4" 
      :class="hasSearchResults ? 'py-4' : 'py-6'"
    >
      <!-- Barra de Progresso -->
      <div v-if="isSearching || (searchProgress.status && searchProgress.status !== 'idle')" class="max-w-4xl mx-auto mb-4">
        <div :class="[
          'bg-gray-200 rounded-full h-2 overflow-hidden',
          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        ]">
          <div 
            :class="[
              'h-full transition-all duration-300 ease-out',
              searchProgress.status === 'error' 
                ? 'bg-red-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            ]"
            :style="{ width: searchProgress.progress + '%' }"
          ></div>
        </div>
        
        <!-- Status da Busca -->
        <div class="mt-2 text-center">
          <p :class="[
            'text-sm font-medium',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          ]">
            {{ progressText }}
          </p>
          
          <!-- Estatísticas dos Peers -->
          <div v-if="searchProgress.peersCount > 0" class="mt-1">
            <p :class="[
              'text-xs',
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            ]">
              {{ searchProgress.peersResponded || 0 }}/{{ searchProgress.peersCount }} peers
            </p>
          </div>
          
          <!-- Status Específico -->
          <div v-if="searchProgress.status === 'started' || searchProgress.status === 'progress'" class="mt-1">
            <p :class="[
              'text-sm',
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            ]">
              Buscando em {{ searchProgress.peersCount }} peers... {{ searchProgress.progress }}%
            </p>
          </div>
        </div>
      </div>

      <!-- Resultados da Busca -->
      <div v-if="searchResults.length > 0" class="max-w-4xl mx-auto">
        <!-- Estatísticas (Compactas quando há resultados) -->
        <div class="mb-4 text-left">
          <p :class="[
            'text-base',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          ]">
            {{ totalResults }} resultados encontrados
            <span v-if="searchTime > 0" class="text-sm opacity-75">• {{ searchTime }}ms</span>
          </p>
        </div>

        <!-- Lista de Resultados -->
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <div 
            v-for="result in paginatedResults" 
            :key="result.id"
            :class="[
              'py-4'
            ]"
          >
            <!-- Cabeçalho do Resultado -->
            <div class="flex items-start space-x-3 mb-2">
              <!-- Favicon -->
              <div class="flex-shrink-0">
                <img 
                  v-if="getFaviconUrl(result.hostname)"
                  :src="getFaviconUrl(result.hostname)"
                  @load="handleFaviconLoad"
                  @error="handleFaviconError"
                  :alt="`Favicon de ${result.hostname}`"
                  class="w-4 h-4 rounded"
                >
                <div 
                  v-else
                  :class="[
                    'w-4 h-4 rounded flex items-center justify-center text-xs font-bold',
                    isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-300 text-gray-600'
                  ]"
                >
                  {{ getSiteInitial(result.hostname) }}
                </div>
              </div>
              
              <!-- Título e URL -->
              <div class="flex-1 min-w-0">
                <h3 class="text-xl font-normal leading-6 mb-1">
                  <a 
                    :href="result.url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    :class="[
                      'hover:underline transition-colors',
                      isDarkMode 
                        ? 'text-blue-400 visited:text-purple-400 hover:text-blue-300' 
                        : 'text-blue-700 visited:text-purple-700 hover:text-blue-800'
                    ]"
                  >
                    {{ result.title }}
                  </a>
                </h3>
                <p :class="[
                  'text-sm truncate',
                  isDarkMode ? 'text-green-400' : 'text-green-700'
                ]">
                  {{ result.url }}
                </p>
              </div>
              
              <!-- Score -->
              <div :class="[
                'text-xs font-normal whitespace-nowrap',
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              ]">
                {{ result.score }} pts
              </div>
            </div>
            
            <!-- Descrição -->
            <p v-if="result.meta?.description" :class="[
              'text-sm leading-relaxed mb-2',
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            ]">
              {{ result.meta.description }}
            </p>
            
            <!-- Metadados -->
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span :class="[
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              ]">
                📅 {{ formatDate(result.timestamp) }}
              </span>
              
              <span v-if="result.headings?.length" :class="[
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              ]">
                📝 {{ result.headings.length }} headings
              </span>
              
              <span v-if="result.topics?.length" :class="[
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              ]">
                🏷️ {{ result.topics.join(', ') }}
              </span>
            </div>
          </div>
        </div>

        <!-- Paginação -->
        <div v-if="calculatedTotalPages > 1" class="mt-6 flex justify-center">
          <nav class="flex items-center space-x-2">
            <!-- Botão Anterior -->
            <button
              @click="goToPage(currentPage - 1)"
              :disabled="currentPage <= 1"
              :class="[
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                currentPage <= 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              ← Anterior
            </button>
            
            <!-- Páginas -->
            <div class="flex items-center space-x-1">
              <button
                v-for="page in visiblePages"
                :key="page"
                @click="goToPage(page)"
                :class="[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  page === currentPage
                    ? isDarkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                {{ page }}
              </button>
            </div>
            
            <!-- Botão Próximo -->
            <button
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage >= calculatedTotalPages"
              :class="[
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                currentPage >= calculatedTotalPages
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              Próximo →
            </button>
          </nav>
        </div>
      </div>

      <!-- Mensagem de Boas-vindas -->
      <div v-else-if="!isSearching && searchResults.length === 0" class="max-w-4xl mx-auto text-center">
        <div class="max-w-md mx-auto">
          <h3 :class="[
            'text-2xl font-bold mb-4',
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          ]">
            Bem-vindo ao BuscaLogo!
          </h3>
          <p :class="[
            'text-lg mb-6',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          ]">
            Digite sua busca acima para começar a explorar o conhecimento compartilhado pela comunidade.
          </p>
          <div class="space-y-3">
            <router-link 
              to="/instalar-extensao"
              :class="[
                'inline-flex items-center px-4 py-2 rounded-lg transition-colors',
                isDarkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              ]"
            >
              📥 Instalar Extensão
            </router-link>
            <p :class="[
              'text-sm',
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            ]">
              Após instalar, navegue por alguns sites e volte aqui para fazer sua primeira busca!
            </p>
          </div>
        </div>
      </div>

      <!-- Mensagem de Erro -->
      <div v-if="searchProgress.status === 'error'" class="max-w-4xl mx-auto text-center">
        <div :class="[
          'p-6 rounded-lg border',
          isDarkMode ? 'bg-red-900/20 border-red-700 text-red-300' : 'bg-red-50 border-red-200 text-red-700'
        ]">
          <h3 class="text-lg font-medium mb-2">❌ Erro na busca</h3>
          <p>{{ searchProgress.error }}</p>
        </div>
      </div>

      <!-- Mensagem de Nenhum Peer -->
      <div v-if="searchProgress.status === 'no_peers'" class="max-w-4xl mx-auto text-center">
        <div :class="[
          'p-6 rounded-lg border',
          isDarkMode ? 'bg-yellow-900/20 border-yellow-700 text-yellow-300' : 'bg-yellow-50 border-yellow-200 text-yellow-700'
        ]">
          <h3 class="text-lg font-medium mb-2">⚠️ Nenhuma extensão conectada</h3>
          <p>Instale a extensão BuscaLogo para buscar em páginas capturadas por outros usuários.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import P2PClient from '../p2p-client.js'

// Injeta a função de atualização do App.vue e o tema
const updateAppConnectionStatus = inject('updateAppConnectionStatus', () => {})
const isDarkMode = inject('isDarkMode', ref(false))

// Estado da aplicação
const searchQuery = ref('')
const isSearching = ref(false)
const searchResults = ref([])
const searchProgress = ref({})
const searchTime = ref(0)
const currentPage = ref(1)
const totalResults = ref(0)
const resultsPerPage = ref(10)
const sortBy = ref('relevance')

// Estado para reconexão automática
const isReconnecting = ref(false)
const reconnectionAttempts = ref(0)
const maxReconnectionAttempts = 3

// Computed para calcular total de páginas
const calculatedTotalPages = computed(() => {
  return Math.ceil(totalResults.value / resultsPerPage.value)
})

// Computed para verificar se há resultados
const hasSearchResults = computed(() => {
  return searchResults.value.length > 0
})

// Cliente P2P
const p2pClient = ref(null)

// Computed properties
const currentQuery = computed(() => {
  return searchProgress.value.query || ''
})

const progressText = computed(() => {
  if (searchProgress.value.status === 'started') return 'Iniciando busca...'
  if (searchProgress.value.status === 'progress') return 'Buscando em peers...'
  if (searchProgress.value.status === 'completed') return 'Busca concluída'
  if (searchProgress.value.status === 'no_peers') return 'Nenhum peer conectado'
  if (searchProgress.value.status === 'error') return 'Erro na busca'
  return 'Preparando busca...'
})

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * resultsPerPage.value
  const end = start + resultsPerPage.value
  const results = searchResults.value.slice(start, end)
  console.log(`📄 Paginação: página ${currentPage.value}, mostrando ${results.length} de ${searchResults.value.length} resultados`)
  return results
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(calculatedTotalPages.value, start + maxVisible - 1)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// Cache de favicons para melhor performance
const faviconCache = new Map()

const getFaviconUrl = (hostname) => {
  if (!hostname) return null
  
  // Verifica cache primeiro
  if (faviconCache.has(hostname)) {
    return faviconCache.get(hostname)
  }
  
  // Remove www. se presente para melhor compatibilidade
  const cleanHostname = hostname.replace(/^www\./, '')
  
  // Tenta diferentes formatos de favicon em ordem de prioridade
  const faviconPaths = [
    '/favicon.ico',
    '/favicon.png',
    '/apple-touch-icon.png',
    '/apple-touch-icon-precomposed.png',
    '/favicon-16x16.png',
    '/favicon-32x32.png'
  ]
  
  // Retorna o primeiro favicon disponível (https primeiro)
  const faviconUrl = `https://${cleanHostname}${faviconPaths[0]}`
  
  // Adiciona ao cache
  faviconCache.set(hostname, faviconUrl)
  
  return faviconUrl
}

const getSiteInitial = (hostname) => {
  if (!hostname) return '?'
  return hostname.charAt(0).toUpperCase()
}

const performSearch = async () => {
  if (!searchQuery.value.trim() || isSearching.value) return
  
  console.log('🔍 Iniciando busca por:', searchQuery.value)
  console.log('📱 P2PClient disponível:', !!p2pClient.value)
  console.log('🔌 Status da conexão:', p2pClient.value?.isConnected)
  
  const startTime = Date.now()
  isSearching.value = true
  searchResults.value = []
  currentPage.value = 1
  
  try {
    // Verifica se está desconectado e tenta reconectar
    if (!p2pClient.value || !p2pClient.value.isConnected) {
      console.log('🔌 Cliente desconectado, tentando reconectar...')
      isReconnecting.value = true
      reconnectionAttempts.value = 0
      
      // Tenta reconectar até o máximo de tentativas
      while (reconnectionAttempts.value < maxReconnectionAttempts && (!p2pClient.value || !p2pClient.value.isConnected)) {
        reconnectionAttempts.value++
        console.log(`🔄 Tentativa de reconexão ${reconnectionAttempts.value}/${maxReconnectionAttempts}`)
        
        try {
          // Inicializa o cliente P2P
          p2pClient.value = new P2PClient()
          await p2pClient.value.connect()
          
          // Aguarda um pouco para estabilizar a conexão
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          if (p2pClient.value.isConnected) {
            console.log('✅ Reconexão bem-sucedida!')
            break
          }
        } catch (error) {
          console.error(`❌ Tentativa ${reconnectionAttempts.value} falhou:`, error)
          
          if (reconnectionAttempts.value < maxReconnectionAttempts) {
            // Aguarda antes da próxima tentativa
            await new Promise(resolve => setTimeout(resolve, 2000))
          }
        }
      }
      
      isReconnecting.value = false
      
      if (!p2pClient.value || !p2pClient.value.isConnected) {
        throw new Error(`Falha na reconexão após ${maxReconnectionAttempts} tentativas`)
      }
    }
    
    if (!p2pClient.value) {
      throw new Error('P2PClient não foi inicializado')
    }
    
    // Configura callbacks para atualizar o status da conexão
    p2pClient.value.setCallbacks(
      handleResultsUpdate,
      handleProgressUpdate,
      handleConnectionChange
    )
    
    // Executa a busca
    await p2pClient.value.search(searchQuery.value.trim())
    
    searchTime.value = Date.now() - startTime
    console.log('✅ Busca concluída em', searchTime.value, 'ms')
    
  } catch (error) {
    console.error('❌ Erro na busca:', error)
    
    let errorMessage = 'Erro na busca'
    if (error.message.includes('reconexão')) {
      errorMessage = 'Falha na reconexão com o servidor. Tente novamente.'
    } else if (error.message.includes('P2PClient')) {
      errorMessage = 'Erro na inicialização do cliente. Recarregue a página.'
    } else {
      errorMessage = error.message || 'Erro desconhecido na busca'
    }
    
    searchProgress.value = {
      status: 'error',
      error: errorMessage,
      progress: 0,
      query: searchQuery.value,
      peersCount: 0,
      peersResponded: 0
    }
  } finally {
    isSearching.value = false
  }
}

const goToPage = (page) => {
  if (page >= 1 && page <= calculatedTotalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const formatDate = (timestamp) => {
  if (!timestamp) return 'Data desconhecida'
  const date = new Date(timestamp)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

// Funções para lidar com favicons
const handleFaviconLoad = (event) => {
  // Favicon carregou com sucesso, esconde o fallback
  const fallback = event.target.nextElementSibling
  if (fallback) {
    fallback.style.display = 'none'
  }
}

const handleFaviconError = (event) => {
  // Favicon falhou, esconde a imagem e mostra o fallback
  event.target.style.display = 'none'
  const fallback = event.target.nextElementSibling
  if (fallback) {
    fallback.style.display = 'flex'
  }
}

// Callbacks do P2P Client
const handleResultsUpdate = (data) => {
  console.log('📥 handleResultsUpdate chamado com:', data)
  
  // Extrai os resultados do objeto recebido
  const { results, currentPage: page, totalResults: total } = data
  
  // Atualiza os dados de busca
  searchResults.value = results || []
  currentPage.value = page || 1
  totalResults.value = total || 0
  // totalPages é calculado automaticamente pelo computed
  
  console.log(`✅ ${results?.length || 0} resultados recebidos`)
  console.log(`📄 Página atual: ${page}, Total de páginas: ${calculatedTotalPages.value}, Total de resultados: ${total}`)
  console.log(`🔍 searchResults.value agora tem ${searchResults.value.length} itens`)
}

const handleProgressUpdate = (progress) => {
  console.log('📊 handleProgressUpdate chamado com:', progress)
  
  // Extrai os dados de progresso
  const { status, query, peersCount, progress: progressValue, totalResults: total, duration } = progress
  
  // Atualiza o progresso
  searchProgress.value = {
    status: status || 'idle',
    query: query || '',
    peersCount: peersCount || 0,
    progress: progressValue || 0,
    totalResults: total || 0,
    duration: duration || 0
  }
  
  // Atualiza o tempo de busca quando completada
  if (status === 'completed' && duration) {
    searchTime.value = duration
  }
  
  // Atualiza o status no App.vue
  updateLocalConnectionStatus()
  
  console.log(`📊 Progresso atualizado:`, searchProgress.value)
}

const handleConnectionChange = (isConnected) => {
  console.log('🔌 handleConnectionChange chamado com:', isConnected)
  
  if (isReconnecting.value && isConnected) {
    // Reconexão bem-sucedida
    isReconnecting.value = false
    reconnectionAttempts.value = 0
    console.log('✅ Reconexão automática bem-sucedida!')
  }
  
  updateLocalConnectionStatus(isConnected ? 'Conectado' : 'Desconectado')
  console.log('🔌 Status da conexão:', isConnected ? 'Conectado' : 'Desconectado')
}

// Função para atualizar o status no App.vue
const updateLocalConnectionStatus = (status) => {
  if (p2pClient.value) {
    const currentStatus = {
      isConnected: p2pClient.value.isConnected,
      currentQuery: searchProgress.value.query || '',
      status: status || (p2pClient.value.isConnected ? 'Conectado' : 'Desconectado')
    }
    
    // Chama a função injetada do App.vue
    updateAppConnectionStatus(currentStatus)
  }
}

// Inicialização
onMounted(async () => {
  console.log('🚀 Inicializando BuscaLogo...')
  
  try {
    // Inicializa cliente P2P
    p2pClient.value = new P2PClient()
    console.log('📱 P2PClient criado:', p2pClient.value)
    
    // Configura callbacks
    console.log('🔧 Configurando callbacks...')
    p2pClient.value.setCallbacks(
      handleResultsUpdate,
      handleProgressUpdate,
      handleConnectionChange
    )
    console.log('✅ Callbacks configurados')
    
    // Conecta ao servidor
    console.log('🔌 Conectando ao servidor...')
    await p2pClient.value.connectToServer()
    console.log('✅ BuscaLogo inicializado')
    
    // Verifica status da conexão
    console.log('🔍 Status da conexão:', p2pClient.value.isConnected)
    
    // Atualiza o status no App.vue
    updateLocalConnectionStatus()
    
  } catch (error) {
    console.error('❌ Erro na inicialização:', error)
    console.error('Stack trace:', error.stack)
    
    // Atualiza o status de erro no App.vue
    updateLocalConnectionStatus()
  }
})
</script>
