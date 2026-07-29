<template>
  <div :class="[
    'min-h-screen transition-colors duration-300 flex flex-col',
    isDarkMode ? 'dark bg-[var(--bl-bg)] text-[var(--bl-ink)]' : 'bg-[var(--bl-bg)] text-[var(--bl-ink)]'
  ]">
    <header :class="[
      'sticky top-0 z-50 transition-colors duration-300 flex-shrink-0 border-b',
      isDarkMode
        ? 'bg-[var(--bl-bg)]/90 backdrop-blur-md border-[var(--bl-border)]'
        : 'bg-[var(--bl-bg)]/90 backdrop-blur-md border-transparent'
    ]">
      <div class="container mx-auto px-4 py-2.5">
        <div class="flex items-center gap-4 w-full">
          <router-link
            to="/"
            class="flex items-center gap-2.5 flex-shrink-0 group"
            @click="handleLogoClick"
          >
            <img
              src="@/assets/img/logo.png"
              alt="BuscaLogo"
              class="w-9 h-9 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
            >
            <span class="text-xl font-extrabold tracking-tight leading-none">
              Busca<span class="text-[var(--bl-amber)]">Logo</span>
            </span>
          </router-link>
          <div id="header-search-slot" class="flex-1 min-w-0 flex items-center"></div>

          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <router-link
              v-if="!isHomePage"
              to="/"
              :class="[
                'px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
                isDarkMode
                  ? 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  : 'bg-black/5 text-gray-600 hover:bg-black/10 hover:text-black'
              ]"
            >
              ← Voltar
            </router-link>

            <button
              type="button"
              @click="toggleDarkMode"
              :class="[
                'p-2 rounded-full transition-all duration-200 active:scale-95',
                isDarkMode
                  ? 'text-gray-400 hover:text-white hover:bg-white/10'
                  : 'text-gray-500 hover:text-black hover:bg-black/5'
              ]"
              :title="isDarkMode ? 'Modo claro' : 'Modo escuro'"
            >
              <svg v-if="isDarkMode" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
              </svg>
              <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </button>

            <div class="hidden sm:flex items-center gap-2 pl-1">
              <div :class="['w-1.5 h-1.5 rounded-full', connectionStatusClass]"></div>
              <span class="text-xs font-medium text-[var(--bl-muted)]">
                {{ connectionStatusText }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1 flex flex-col">
      <router-view />
    </main>

    <footer class="flex-shrink-0 mt-auto border-t border-[var(--bl-border)]/60">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-3">
          <div class="text-xs text-[var(--bl-muted)]">
            © {{ currentYear }} BuscaLogo
          </div>
          <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[var(--bl-muted)]">
            <router-link to="/sobre-sistema" class="hover:text-[var(--bl-amber)] transition-colors">Sobre</router-link>
            <span class="opacity-40">·</span>
            <router-link to="/roadmap" class="hover:text-[var(--bl-amber)] transition-colors">Roadmap</router-link>
            <span class="opacity-40">·</span>
            <router-link to="/instalar-extensao" class="hover:text-[var(--bl-amber)] transition-colors">Instalar</router-link>
            <span class="opacity-40">·</span>
            <router-link to="/privacidade" class="hover:text-[var(--bl-amber)] transition-colors">Privacidade</router-link>
            <span class="opacity-40">·</span>
            <a href="https://github.com/buscalogo" target="_blank" rel="noopener" class="hover:text-[var(--bl-amber)] transition-colors">GitHub</a>
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
const currentYear = new Date().getFullYear()

const isDarkMode = ref(false)

const connectionStatus = ref({
  isConnected: false,
  currentQuery: ''
})

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

const isHomePage = computed(() => {
  return route.path === '/' || route.path === '/search'
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('buscalogo-theme', isDarkMode.value ? 'dark' : 'light')

  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const updateConnectionStatus = (status) => {
  connectionStatus.value = status
}

onMounted(() => {
  const savedTheme = localStorage.getItem('buscalogo-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }

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

const resetHomeRef = ref(null)
provide('resetHome', resetHomeRef)
provide('isDarkMode', isDarkMode)
provide('updateAppConnectionStatus', updateConnectionStatus)

const handleLogoClick = () => {
  resetHomeRef.value?.()
}
</script>
