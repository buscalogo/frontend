<template>
  <article class="bl-result group">
    <!-- Linha do site: favicon + nome + URL (padrão Brave) -->
    <div class="flex items-center gap-2 min-w-0 mb-1">
      <div class="flex-shrink-0 w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-[var(--bl-border)]/40">
        <img
          v-if="faviconUrl"
          :src="faviconUrl"
          @error="faviconError = true"
          :alt="hostname"
          class="w-3.5 h-3.5 object-contain"
        >
        <span v-else class="text-[9px] font-semibold text-[var(--bl-muted)]">{{ siteInitial }}</span>
      </div>
      <div class="min-w-0 flex flex-col leading-tight">
        <span class="text-[13px] font-medium text-[var(--bl-ink)] truncate">{{ siteName }}</span>
        <a
          :href="result.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[12px] text-[var(--bl-url)] hover:underline truncate"
          :title="result.url"
        >
          {{ displayUrl }}
        </a>
      </div>
    </div>

    <!-- Título -->
    <a
      :href="result.url"
      target="_blank"
      rel="noopener noreferrer"
      class="bl-result-title text-[1.25rem] leading-snug font-normal block mb-1 line-clamp-2"
    >
      {{ result.title || result.url }}
    </a>

    <!-- Snippet -->
    <p v-if="description" class="text-[14px] leading-[1.55] text-[var(--bl-muted)] line-clamp-3 mb-1.5">
      {{ description }}
    </p>

    <!-- Meta discreta -->
    <div v-if="metaBits.length" class="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[12px] text-[var(--bl-muted)]/80">
      <template v-for="(bit, i) in metaBits" :key="i">
        <span v-if="i > 0" class="opacity-40" aria-hidden="true">·</span>
        <span>{{ bit }}</span>
      </template>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  result: { type: Object, required: true }
})

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

const siteName = computed(() => {
  const host = hostname.value.replace(/^www\./, '')
  if (!host) return 'Site'
  const base = host.split('.')[0]
  return base.charAt(0).toUpperCase() + base.slice(1)
})

const faviconUrl = computed(() => {
  if (faviconError.value) return null
  const indexed = props.result.favicon || props.result.metadata?.favicon
  if (indexed) return indexed
  if (!hostname.value) return null
  const domain = hostname.value.replace(/^www\./, '')
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=32`
})

const siteInitial = computed(() => hostname.value ? hostname.value.charAt(0).toUpperCase() : '?')

const displayUrl = computed(() => {
  const raw = props.result.url || ''
  try {
    const u = new URL(raw)
    const path = u.pathname === '/' ? '' : u.pathname.replace(/\/$/, '')
    const host = u.hostname.replace(/^www\./, '')
    const crumbs = [host, ...path.split('/').filter(Boolean)].slice(0, 4)
    return crumbs.join(' › ')
  } catch {
    return raw.replace(/^https?:\/\//, '').replace(/^www\./, '')
  }
})

const description = computed(() => {
  return props.result.description || props.result.meta?.description || props.result.snippet || ''
})

const metaBits = computed(() => {
  const bits = []
  const ts = props.result.metadata?.scrapedAt || props.result.created_at || props.result.timestamp
  if (ts) {
    bits.push(new Date(ts).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }))
  }
  if (props.result.created_by?.displayName) {
    bits.push(props.result.created_by.displayName)
  }
  const rel = props.result.relevance ?? props.result.score
  if (rel != null && Number(rel) > 0) {
    bits.push(`${rel} pts`)
  }
  return bits
})
</script>

<style scoped>
.bl-result-title {
  color: var(--bl-link);
}
.bl-result-title:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.bl-result-title:visited {
  color: var(--bl-link-visited);
}
</style>
