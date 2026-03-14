<template>
  <div class="flex-1 flex flex-col relative w-full">
    <!-- Barra de Progresso (Absoluta no topo) -->
    <div v-if="isSearching || (searchProgress.status && searchProgress.status !== 'idle')" class="absolute top-0 left-0 w-full z-50">
      <div class="h-[2px] w-full bg-transparent overflow-hidden">
        <div 
            :class="[
            'h-full transition-all duration-300 ease-out',
            searchProgress.status === 'error' ? 'bg-red-500' : 'bg-transparent'
          ]"
          :style="{ width: searchProgress.progress + '%' }"
        ></div>
      </div>
    </div>

    <!-- Campo de Busca: Teleport para header quando há resultados -->
    <Teleport v-if="hasEverHadSearchResults" to="#header-search-slot">
      <div class="w-full max-w-xl mx-auto">
        <div class="relative w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.03)] rounded-full">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            v-model="searchQuery"
            @keyup.enter="performSearch"
            :class="[
              'w-full border-0 pl-10 pr-10 py-2 text-sm rounded-full focus:outline-none focus:ring-1',
              isDarkMode 
                ? 'bg-[#1a1a1a] text-gray-100 placeholder-gray-500 focus:ring-gray-600' 
                : 'bg-white text-gray-900 placeholder-gray-400 focus:ring-gray-300'
            ]"
            placeholder="Pesquise na rede P2P..."
            :disabled="isSearching || isReconnecting"
          >
          <button
            type="button"
            @click="performSearch"
            :disabled="isSearching || isReconnecting || !searchQuery.trim()"
            :class="[
              'absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full p-1.5 transition-all duration-200',
              isSearching || isReconnecting || !searchQuery.trim()
                ? 'opacity-50 cursor-not-allowed'
                : 'opacity-90 hover:opacity-100',
              isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
            ]"
            title="Buscar"
          >
            <span v-if="isSearching || isReconnecting" class="block w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin"></span>
            <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </Teleport>

    <!-- Campo de Busca (estado inicial - antes da primeira busca) -->
    <div 
      v-if="!hasEverHadSearchResults"
      class="transition-all duration-500 ease-in-out flex flex-col w-full py-0 min-h-[60vh] justify-center"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Logo e Título -->
          <div class="text-center mb-10">
            <h1 
              :class="[
                'text-5xl md:text-7xl font-bold tracking-tight mb-3',
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              ]"
            >
              BuscaLogo
            </h1>
            <p 
              :class="[
                'text-base md:text-lg',
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
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
              <div class="relative w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.03)] rounded-full">
                <!-- Ícone de Busca interno -->
                <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input
                  v-model="searchQuery"
                  @keyup.enter="performSearch"
                  :class="[
                    'w-full border-0 transition-all duration-200 focus:outline-none focus:ring-1 rounded-full',
                    'pl-12 pr-12 py-4 text-lg',
                    isDarkMode 
                      ? 'bg-[#1a1a1a] text-gray-100 placeholder-gray-500 focus:ring-gray-600' 
                      : 'bg-white text-gray-900 placeholder-gray-400 focus:ring-gray-300'
                  ]"
                  placeholder="Pesquise na rede P2P..."
                  :disabled="isSearching || isReconnecting"
                >
                <button
                  type="button"
                  @click="performSearch"
                  :disabled="isSearching || isReconnecting || !searchQuery.trim()"
                  :class="[
                    'absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition-all duration-200',
                    isSearching || isReconnecting || !searchQuery.trim()
                      ? 'opacity-50 cursor-not-allowed'
                      : 'opacity-90 hover:opacity-100',
                    isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                  ]"
                  title="Buscar"
                >
                  <span v-if="isReconnecting || isSearching" class="block w-4 h-4 border border-current border-t-transparent rounded-full animate-spin"></span>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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

    <div 
      class="flex-1 container mx-auto px-4" 
      :class="hasEverHadSearchResults ? 'py-4' : 'py-6'"
    >
      <!-- Status da Busca (primeira vez, sem resultados ainda) -->
      <div v-if="(isSearching || (searchProgress.status && searchProgress.status !== 'idle')) && !hasEverHadSearchResults" class="max-w-4xl mx-auto text-center mt-6">
        <p :class="[
          'text-sm font-medium flex items-center justify-center gap-2',
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        ]">
          <span class="loading-dots" :class="[isDarkMode ? 'text-blue-400' : 'text-blue-500']">
            <span></span><span></span><span></span>
          </span>
          {{ progressText }}
          <span v-if="searchProgress.peersCount > 0" class="opacity-75 relative bottom-[0.5px] ml-2 font-normal text-xs">
            {{ searchProgress.peersResponded || 0 }}/{{ searchProgress.peersCount }} peers 
            <span v-if="searchProgress.progress">({{ searchProgress.progress }}%)</span>
          </span>
        </p>
      </div>

      <!-- Resultados da Busca -->
      <div v-if="searchResults.length > 0" class="max-w-4xl mx-auto">
        <!-- Barra de ferramentas -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <p :class="[
            'text-sm',
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          ]">
            {{ displayedTotal }} resultados
            <span v-if="searchTime > 0 && !isSearching" class="opacity-80">• {{ searchTime }}ms</span>
            <span v-if="isSearching || (searchProgress.status && ['started','progress'].includes(searchProgress.status))" class="ml-2 inline-flex items-center gap-1.5">
              <span class="loading-dots" :class="[isDarkMode ? 'text-blue-400' : 'text-blue-500']">
                <span></span><span></span><span></span>
              </span>
              <span class="text-xs">Atualizando resultados...</span>
            </span>
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <div class="flex items-center gap-2">
              <span :class="['text-xs font-medium', isDarkMode ? 'text-gray-500' : 'text-gray-500']">Filtrar:</span>
              <select
                v-model="filterDomain"
                @change="currentPage = 1"
                :class="[
                  'text-sm px-3 py-1.5 rounded-lg border transition-colors cursor-pointer min-w-[140px]',
                  isDarkMode 
                    ? 'bg-[#1a1a1a] border-white/10 text-gray-300 hover:border-white/20' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                ]"
              >
                <option value="">Todos os domínios</option>
                <option v-for="d in uniqueDomains" :key="d.domain" :value="d.domain">
                  {{ d.domain }} ({{ d.count }})
                </option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <span :class="['text-xs font-medium', isDarkMode ? 'text-gray-500' : 'text-gray-500']">Ordenar:</span>
              <select
                v-model="sortBy"
                @change="currentPage = 1"
                :class="[
                  'text-sm px-3 py-1.5 rounded-lg border transition-colors cursor-pointer',
                  isDarkMode 
                    ? 'bg-[#1a1a1a] border-white/10 text-gray-300 hover:border-white/20' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                ]"
              >
                <option value="relevance">Relevância</option>
                <option value="date">Mais recente</option>
                <option value="domain">Por domínio</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Skeleton durante nova busca -->
        <div v-if="isSearching || (searchProgress.status && ['started','progress'].includes(searchProgress.status))" class="space-y-4 py-4">
          <div v-for="i in 5" :key="i" class="flex items-start gap-3">
            <div :class="['w-4 h-4 rounded flex-shrink-0 mt-0.5 animate-pulse', isDarkMode ? 'bg-white/10' : 'bg-gray-200']"></div>
            <div class="flex-1 min-w-0 space-y-2">
              <div :class="['h-5 rounded w-3/4 animate-pulse', isDarkMode ? 'bg-white/10' : 'bg-gray-200']"></div>
              <div :class="['h-3 rounded w-1/2 animate-pulse', isDarkMode ? 'bg-white/5' : 'bg-gray-100']"></div>
              <div :class="['h-3 rounded w-full animate-pulse', isDarkMode ? 'bg-white/5' : 'bg-gray-100']"></div>
            </div>
          </div>
        </div>

        <!-- Lista de Resultados (agrupada por domínio ou plana) -->
        <div v-else class="space-y-8 py-4">
          <!-- Modo domínio: grupos -->
          <template v-if="sortBy === 'domain'">
            <div 
              v-for="group in paginatedResultsByDomain" 
              :key="group.baseDomain"
              class="space-y-4"
            >
              <div :class="[
                'flex items-center gap-2 pb-2 border-b',
                isDarkMode ? 'border-white/10' : 'border-gray-200'
              ]">
                <span :class="[
                  'text-xs font-semibold uppercase tracking-wider',
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                ]">
                  {{ group.baseDomain }}
                </span>
                <span :class="[
                  'text-xs ml-1',
                  isDarkMode ? 'text-gray-600' : 'text-gray-400'
                ]">
                  · {{ group.results.length }} {{ group.results.length === 1 ? 'resultado' : 'resultados' }}
                </span>
              </div>
              <div :class="['divide-y', isDarkMode ? 'divide-white/10' : 'divide-gray-200']">
                <article
                  v-for="result in group.results"
                  :key="result.id"
                  class="py-4 first:pt-0"
                >
                  <ResultCard :result="result" />
                </article>
              </div>
            </div>
          </template>

          <!-- Modo relevância/data: lista plana -->
          <template v-else>
            <div :class="['divide-y', isDarkMode ? 'divide-white/10' : 'divide-gray-200']">
              <article
                v-for="result in paginatedResults"
                :key="result.id"
                class="py-4 first:pt-0"
              >
                <ResultCard :result="result" />
              </article>
            </div>
          </template>
        </div>

        <!-- Paginação -->
        <div v-if="calculatedTotalPages > 1 && !isSearching && !['started','progress'].includes(searchProgress.status)" class="mt-6 flex justify-center">
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

      <!-- Mensagem vazia -->
      <div v-else-if="!isSearching && searchResults.length === 0" class="max-w-xl mx-auto text-center mt-12">
        <p :class="[
          'text-[15px] mb-8',
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        ]">
          {{ hasEverHadSearchResults ? `Nenhum resultado encontrado para "${searchQuery || searchProgress.query || ''}".` : 'Busque para explorar o conhecimento colaborativo indexado pelas extensões conectadas.' }}
        </p>
        <router-link 
          v-if="!hasEverHadSearchResults"
          to="/instalar-extensao"
          :class="[
            'inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 duration-200',
            isDarkMode 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-[#1a1a1a] text-white hover:bg-black'
          ]"
        >
          Instalar Extensão Chrome
        </router-link>
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
import { ref, computed, onMounted, onUnmounted, inject } from 'vue'
import P2PClient from '../p2p-client.js'
import ResultCard from './ResultCard.vue'

// Injeta do App.vue
const updateAppConnectionStatus = inject('updateAppConnectionStatus', () => {})
const isDarkMode = inject('isDarkMode', ref(false))
const resetHomeRef = inject('resetHome', ref(null))

const resetToInitial = () => {
  searchResults.value = []
  hasEverHadSearchResults.value = false
  searchQuery.value = ''
  searchProgress.value = {}
  currentPage.value = 1
  filterDomain.value = ''
}

// Estado da aplicação
const searchQuery = ref('')
const isSearching = ref(false)
const searchResults = ref([])
const hasEverHadSearchResults = ref(false)
const searchProgress = ref({})
const searchTime = ref(0)
const currentPage = ref(1)
const totalResults = ref(0)
const resultsPerPage = ref(10)
const sortBy = ref('relevance')
const filterDomain = ref('')

// Estado para reconexão automática
const isReconnecting = ref(false)
const reconnectionAttempts = ref(0)
const maxReconnectionAttempts = 3

const displayedTotal = computed(() => filterDomain.value ? filteredResults.value.length : totalResults.value)

const calculatedTotalPages = computed(() => {
  return Math.ceil(displayedTotal.value / resultsPerPage.value) || 1
})

// Layout: mantém modo busca após primeira pesquisa (sem alterar ao fazer nova busca)
const hasSearchResults = computed(() => searchResults.value.length > 0)

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

const getBaseDomain = (hostname) => {
  if (!hostname) return ''
  const parts = hostname.split('.')
  if (parts.length <= 2) return hostname
  const multiPartTlds = ['com.br', 'co.uk', 'com.au', 'co.jp', 'net.br', 'org.br']
  if (parts.length >= 3 && multiPartTlds.some(m => hostname.endsWith('.' + m))) {
    return parts.slice(-3).join('.')
  }
  return parts.slice(-2).join('.')
}

const isBaseDomain = (hostname) => {
  const base = getBaseDomain(hostname)
  return hostname === base
}

const getResultHostnameForSort = (result) => {
  if (result.metadata?.hostname) return result.metadata.hostname
  if (result.hostname) return result.hostname
  try {
    return result.url ? new URL(result.url).hostname : ''
  } catch {
    return ''
  }
}

/** 2=raiz sem /, 1=raiz com /, 0=tem path/hash */
const getRootPriority = (url) => {
  if (!url) return 0
  try {
    const u = new URL(url)
    const path = u.pathname || ''
    const hash = (u.hash || '').trim()
    if (hash.length > 1) return 0
    if (path === '') return 2
    if (path === '/') return 1
    return 0
  } catch {
    return 0
  }
}

const uniqueDomains = computed(() => {
  const counts = new Map()
  for (const r of searchResults.value) {
    const host = getResultHostnameForSort(r)
    const base = getBaseDomain(host)
    if (base) counts.set(base, (counts.get(base) || 0) + 1)
  }
  return Array.from(counts.entries())
    .map(([domain, count]) => ({ domain, count }))
    .sort((a, b) => b.count - a.count)
})

const filteredResults = computed(() => {
  if (!filterDomain.value) return searchResults.value
  return searchResults.value.filter(r => {
    const host = getResultHostnameForSort(r)
    const base = getBaseDomain(host)
    return base === filterDomain.value
  })
})

const sortedResults = computed(() => {
  const results = [...filteredResults.value]
  const sort = sortBy.value

  if (sort === 'relevance') {
    return results.sort((a, b) => {
      const relA = a.relevance ?? a.score ?? 0
      const relB = b.relevance ?? b.score ?? 0
      if (relB !== relA) return relB - relA
      const tsA = new Date(a.metadata?.scrapedAt || a.timestamp || 0)
      const tsB = new Date(b.metadata?.scrapedAt || b.timestamp || 0)
      return tsB - tsA
    })
  }

  if (sort === 'date') {
    return results.sort((a, b) => {
      const tsA = new Date(a.metadata?.scrapedAt || a.created_at || a.timestamp || 0)
      const tsB = new Date(b.metadata?.scrapedAt || b.created_at || b.timestamp || 0)
      return tsB - tsA
    })
  }

  if (sort === 'domain') {
    return results.sort((a, b) => {
      const hostA = getResultHostnameForSort(a)
      const hostB = getResultHostnameForSort(b)
      const baseA = getBaseDomain(hostA)
      const baseB = getBaseDomain(hostB)
      if (baseA !== baseB) return baseA.localeCompare(baseB)
      const isBaseA = isBaseDomain(hostA)
      const isBaseB = isBaseDomain(hostB)
      if (isBaseA && !isBaseB) return -1
      if (!isBaseA && isBaseB) return 1
      const rootA = getRootPriority(a.url || a.link || '')
      const rootB = getRootPriority(b.url || b.link || '')
      if (rootA !== rootB) return rootB - rootA
      const relA = a.relevance ?? a.score ?? 0
      const relB = b.relevance ?? b.score ?? 0
      return relB - relA
    })
  }

  return results
})

const resultsByDomain = computed(() => {
  const groups = new Map()
  for (const r of sortedResults.value) {
    const host = getResultHostnameForSort(r)
    const base = getBaseDomain(host)
    if (!groups.has(base)) groups.set(base, [])
    groups.get(base).push(r)
  }
  for (const arr of groups.values()) {
    arr.sort((a, b) => {
      const hostA = getResultHostnameForSort(a)
      const hostB = getResultHostnameForSort(b)
      const isBaseA = isBaseDomain(hostA)
      const isBaseB = isBaseDomain(hostB)
      if (isBaseA && !isBaseB) return -1
      if (!isBaseA && isBaseB) return 1
      const rootA = getRootPriority(a.url || a.link || '')
      const rootB = getRootPriority(b.url || b.link || '')
      if (rootA !== rootB) return rootB - rootA
      return (b.relevance ?? b.score ?? 0) - (a.relevance ?? a.score ?? 0)
    })
  }
  return Array.from(groups.entries()).map(([baseDomain, results]) => ({ baseDomain, results }))
})

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * resultsPerPage.value
  const end = start + resultsPerPage.value
  return sortedResults.value.slice(start, end)
})

const paginatedResultsByDomain = computed(() => {
  const start = (currentPage.value - 1) * resultsPerPage.value
  const end = start + resultsPerPage.value
  const flat = resultsByDomain.value.flatMap(g => g.results)
  const slice = flat.slice(start, end)
  const groups = new Map()
  for (const r of slice) {
    const base = getBaseDomain(getResultHostnameForSort(r))
    if (!groups.has(base)) groups.set(base, [])
    groups.get(base).push(r)
  }
  return Array.from(groups.entries()).map(([baseDomain, results]) => ({ baseDomain, results }))
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

const getResultHostname = (result) => {
  if (result.metadata?.hostname) return result.metadata.hostname
  if (result.hostname) return result.hostname
  try {
    return result.url ? new URL(result.url).hostname : null
  } catch {
    return null
  }
}

const getResultDate = (result) => {
  return result.metadata?.scrapedAt || result.created_at || result.timestamp
}

const getResultRelevance = (result) => {
  return result.relevance ?? result.score ?? null
}

const performSearch = async () => {
  if (!searchQuery.value.trim() || isSearching.value) return
  
  console.log('🔍 Iniciando busca por:', searchQuery.value)
  console.log('📱 P2PClient disponível:', !!p2pClient.value)
  console.log('🔌 Status da conexão:', p2pClient.value?.isConnected)
  
  const startTime = Date.now()
  isSearching.value = true
  // Não limpa resultados: mantém layout estável até nova resposta
  currentPage.value = 1
  filterDomain.value = ''
  filterDomain.value = ''
  
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
          await p2pClient.value.connectToServer()
          
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
  if ((results?.length || 0) > 0) hasEverHadSearchResults.value = true
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
  resetHomeRef.value = resetToInitial
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

onUnmounted(() => {
  if (resetHomeRef?.value === resetToInitial) resetHomeRef.value = null
})
</script>

<style scoped>
.loading-dots {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.loading-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: loading-dots 1.4s ease-in-out infinite both;
}
.loading-dots span:nth-child(1) { animation-delay: 0s; }
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes loading-dots {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}
</style>
