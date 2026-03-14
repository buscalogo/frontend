<template>
  <div class="result-card flex items-start gap-3">
    <div class="flex-shrink-0 mt-0.5">
      <img
        v-if="faviconUrl"
        :src="faviconUrl"
        @error="faviconError = true"
        :alt="`Favicon ${hostname}`"
        class="w-4 h-4 rounded object-contain"
      >
      <div
        v-else
        :class="[
          'w-4 h-4 rounded flex items-center justify-center text-[9px] font-medium',
          isDarkMode ? 'bg-white/10 text-gray-500' : 'bg-gray-200 text-gray-500'
        ]"
      >
        {{ siteInitial }}
      </div>
    </div>
    <div class="min-w-0 flex-1">
      <div class="flex items-start justify-between gap-4">
        <a
          :href="result.url"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'text-lg font-medium leading-snug block line-clamp-2',
            isDarkMode 
              ? 'text-blue-400 hover:text-blue-300 visited:text-purple-400' 
              : 'text-blue-700 hover:text-blue-800 visited:text-purple-700'
          ]"
        >
          {{ result.title || result.url }}
        </a>
        <span
          v-if="relevance != null"
          :class="['text-xs shrink-0 mt-0.5', isDarkMode ? 'text-gray-500' : 'text-gray-500']"
        >
          {{ relevance }} pts
        </span>
      </div>
      <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs" :class="[isDarkMode ? 'text-gray-500' : 'text-gray-500']">
        <a
          v-if="displayUrl"
          :href="result.url"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'truncate max-w-md',
            isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-700 hover:text-green-800'
          ]"
        >
          {{ displayUrl }}
        </a>
        <span v-if="result.created_by?.displayName" :title="'Indexado por ' + result.created_by.displayName">{{ result.created_by.displayName }}</span>
        <span v-if="dateStr">{{ dateStr }}</span>
        <span v-if="headingsCount">{{ headingsCount }} headings</span>
      </div>
      <p 
        v-if="description" 
        :class="[
          'text-sm leading-relaxed line-clamp-2 mt-1',
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        ]"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref, watch } from 'vue'

const props = defineProps({
  result: { type: Object, required: true }
})

const isDarkMode = inject('isDarkMode', ref(false))
const faviconError = ref(false)

watch(() => props.result?.url, () => { faviconError.value = false })

const hostname = computed(() => {
  const r = props.result
  if (r.metadata?.hostname) return r.metadata.hostname
  if (r.hostname) return r.hostname
  try {
    return r.url ? new URL(r.url).hostname : ''
  } catch {
    return ''
  }
})

const faviconUrl = computed(() => {
  if (faviconError.value) return null
  // Prioriza favicon indexado no scraping
  const indexed = props.result.favicon || props.result.metadata?.favicon
  if (indexed) return indexed
  if (!hostname.value) return null
  // Usa proxy do Google (evita NS_BINDING_ABORTED e CORS)
  const domain = hostname.value.replace(/^www\./, '')
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=32`
})

const siteInitial = computed(() => {
  return hostname.value ? hostname.value.charAt(0).toUpperCase() : '?'
})

const displayUrl = computed(() => {
  return props.result.url?.replace(/^https?:\/\//, '')
})

const description = computed(() => {
  return props.result.description || props.result.meta?.description || ''
})

const relevance = computed(() => {
  return props.result.relevance ?? props.result.score ?? null
})

const dateStr = computed(() => {
  const ts = props.result.metadata?.scrapedAt || props.result.created_at || props.result.timestamp
  if (!ts) return ''
  return new Date(ts).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
})

const headingsCount = computed(() => {
  const h = props.result.content?.headings || props.result.metadata?.headingsCount
  if (typeof h === 'number') return h
  if (!h || typeof h !== 'object') return null
  const arr = [].concat(h.h1 || [], h.h2 || [], h.h3 || [])
  return arr.length || null
})
</script>
