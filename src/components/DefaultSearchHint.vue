<template>
  <div
    v-if="visible"
    class="mt-2 text-center text-xs text-[var(--bl-muted)]"
  >
    <button
      type="button"
      class="inline-flex items-center gap-1.5 hover:text-[var(--bl-amber)] transition-colors"
      @click="expanded = !expanded"
    >
      <span>Definir como busca padrão do navegador</span>
      <svg
        class="w-3 h-3 transition-transform"
        :class="expanded ? 'rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="expanded"
      class="mt-3 mx-auto max-w-md text-left rounded-2xl px-4 py-3 border border-[var(--bl-border)] bg-[var(--bl-surface)] text-[var(--bl-muted)]"
    >
      <p class="mb-2 leading-relaxed">
        Os navegadores não deixam um site se tornar o padrão sozinho.
        Adicione o BuscaLogo e depois escolha-o nas configurações.
      </p>
      <ol class="list-decimal list-inside space-y-1 mb-2">
        <li>Na barra de endereço, use “Adicionar mecanismo de pesquisa”.</li>
        <li>URL: <code class="text-[11px] text-[var(--bl-ink)]">https://buscalogo.com/search?q=%s</code></li>
        <li>Em Configurações → Mecanismo de pesquisa → defina como padrão.</li>
      </ol>
      <button
        type="button"
        class="text-[var(--bl-amber)] hover:underline"
        @click="dismiss"
      >
        Dispensar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'buscalogo_default_search_hint_dismissed'
const visible = ref(false)
const expanded = ref(false)

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
