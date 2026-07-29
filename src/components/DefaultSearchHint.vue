<template>
  <div
    v-if="visible"
    :class="[
      'mb-6 rounded-2xl px-4 py-3 text-left text-sm border',
      isDarkMode
        ? 'bg-white/5 border-white/10 text-gray-300'
        : 'bg-black/[0.03] border-black/5 text-gray-700'
    ]"
  >
    <div class="flex gap-3 items-start">
      <div class="flex-1 min-w-0">
        <p class="font-medium mb-1" :class="isDarkMode ? 'text-gray-100' : 'text-gray-900'">
          Use o BuscaLogo como busca padrão do navegador
        </p>
        <p class="opacity-80 mb-2 leading-relaxed">
          Os navegadores não permitem que um site defina isso sozinho (por segurança).
          Você adiciona o BuscaLogo como mecanismo e depois escolhe como padrão nas configurações.
        </p>
        <ol class="list-decimal list-inside space-y-1 opacity-90 text-xs sm:text-sm">
          <li>Na barra de endereço, abra o menu do campo de busca / “Adicionar mecanismo” (Chrome, Edge, Firefox).</li>
          <li>Adicione <strong>BuscaLogo</strong> (URL: <code class="text-xs">/search?q=%s</code>).</li>
          <li>Em Configurações → Mecanismo de pesquisa, defina BuscaLogo como padrão.</li>
        </ol>
        <p class="mt-2 text-xs opacity-70">
          Atalho: buscas no formato
          <a
            href="/search?q=opencode"
            class="underline underline-offset-2"
            :class="isDarkMode ? 'text-blue-400' : 'text-blue-600'"
          >buscalogo.com/search?q=…</a>
        </p>
      </div>
      <button
        type="button"
        class="flex-shrink-0 p-1 rounded-lg opacity-60 hover:opacity-100 transition"
        title="Dispensar"
        @click="dismiss"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue'

const STORAGE_KEY = 'buscalogo_default_search_hint_dismissed'
const isDarkMode = inject('isDarkMode', ref(false))
const visible = ref(false)

onMounted(() => {
  try {
    visible.value = localStorage.getItem(STORAGE_KEY) !== '1'
  } catch {
    visible.value = true
  }
})

const dismiss = () => {
  visible.value = false
  try {
    localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* ignore */
  }
}
</script>
