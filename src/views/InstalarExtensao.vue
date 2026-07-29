<template>
  <div class="container mx-auto px-4 py-8">
    <main class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <div class="w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <img src="@/assets/img/logo.png" alt="BuscaLogo" class="w-20 h-20 object-contain drop-shadow-md">
        </div>
        <h1 :class="['text-4xl font-bold mb-4', isDarkMode ? 'text-gray-100' : 'text-gray-800']">
          Instalar BuscaLogo
        </h1>
        <p :class="['text-lg max-w-2xl mx-auto', isDarkMode ? 'text-gray-300' : 'text-gray-600']">
          Extensão na Chrome Web Store + Agent local (launcher) para indexação, DNS <code class="text-sm">.bl</code> e busca offline.
        </p>
      </div>

      <div class="space-y-8">
        <!-- Extensão Chrome -->
        <section :class="['p-6 rounded-lg border-2', isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200']">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div class="flex-1">
              <h3 :class="['text-xl font-semibold mb-3', isDarkMode ? 'text-gray-200' : 'text-gray-800']">
                Extensão no Chrome
              </h3>
              <p :class="['text-base mb-4 leading-relaxed', isDarkMode ? 'text-gray-300' : 'text-gray-600']">
                A extensão <strong>BuscaLogo Agent</strong> está na Chrome Web Store. Ela verifica se a página está indexada no Agent local e permite sugerir indexação.
              </p>
              <a
                :href="chromeStoreUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105"
              >
                <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                Instalar na Chrome Web Store
              </a>
              <p :class="['text-sm mt-3', isDarkMode ? 'text-gray-400' : 'text-gray-500']">
                Requisito: Agent rodando em <code class="px-1 rounded bg-gray-100 dark:bg-gray-700 text-xs">http://127.0.0.1:9970</code>
              </p>
            </div>
          </div>
        </section>

        <!-- Agent / Launcher -->
        <section class="p-6 rounded-lg border-2 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 :class="['text-2xl font-bold mb-2', isDarkMode ? 'text-green-200' : 'text-green-800']">
              BuscaLogo Agent (Launcher)
            </h3>
            <p :class="['text-base max-w-2xl mx-auto', isDarkMode ? 'text-green-300' : 'text-green-700']">
              Substitui o antigo BuscaLogo Desktop. Roda localmente: painel, scraper, DNS <code>.bl</code>, CouchDB e P2P.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 :class="['text-lg font-semibold mb-3', isDarkMode ? 'text-green-200' : 'text-green-800']">
                O que inclui
              </h4>
              <ul :class="['space-y-2 text-sm', isDarkMode ? 'text-green-300' : 'text-green-700']">
                <li class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                  Painel em <code class="text-xs">127.0.0.1:9970</code>
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                  Scraper e sites <code class="text-xs">*.bl</code>
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                  Busca offline / P2P
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                  Atualização automática via GitHub
                </li>
              </ul>
            </div>

            <div>
              <h4 :class="['text-lg font-semibold mb-3', isDarkMode ? 'text-green-200' : 'text-green-800']">
                Download
              </h4>
              <div class="space-y-3">
                <a
                  :href="agentReleasesUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-all duration-200 hover:scale-105"
                >
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  Linux (.deb) — releases
                </a>
                <p :class="['text-sm', isDarkMode ? 'text-green-400' : 'text-green-700']">
                  Windows em breve. Por enquanto só Linux.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
            <h5 :class="['text-md font-semibold mb-3', isDarkMode ? 'text-green-200' : 'text-green-800']">
              Instalação (Linux)
            </h5>
            <div class="space-y-2 text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              <p>1. Baixe o <code class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-xs">buscalogo-agent_*_amd64.deb</code> na página de releases</p>
              <p>2. Instale:</p>
              <pre class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-xs overflow-x-auto">sudo dpkg -i buscalogo-agent_*_amd64.deb
sudo apt-get install -f   # se faltar dependência</pre>
              <p>3. Abra o Agent no menu de apps ou em <code class="font-mono text-xs">http://127.0.0.1:9970</code></p>
            </div>
          </div>

          <div class="text-center mt-4 flex flex-wrap justify-center gap-3">
            <a
              :href="agentRepoUrl"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                isDarkMode ? 'bg-green-700 text-green-200 hover:bg-green-600' : 'bg-green-100 text-green-700 hover:bg-green-200'
              ]"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
              </svg>
              Repositório no GitHub
            </a>
            <a
              :href="agentReleasesUrl"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                isDarkMode ? 'bg-green-700 text-green-200 hover:bg-green-600' : 'bg-green-100 text-green-700 hover:bg-green-200'
              ]"
            >
              Ver releases
            </a>
          </div>
        </section>

        <!-- Dicas -->
        <div class="grid md:grid-cols-2 gap-6">
          <div :class="['p-6 rounded-lg border', isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200']">
            <h3 :class="['text-lg font-semibold mb-4', isDarkMode ? 'text-gray-200' : 'text-gray-800']">
              Ordem recomendada
            </h3>
            <ol :class="['space-y-2 text-sm list-decimal list-inside', isDarkMode ? 'text-gray-300' : 'text-gray-600']">
              <li>Instale o Agent (.deb) e abra o painel</li>
              <li>Instale a extensão na Chrome Web Store</li>
              <li>Abra um site e use o popup / alerta na página</li>
            </ol>
          </div>
          <div :class="['p-6 rounded-lg border', isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200']">
            <h3 :class="['text-lg font-semibold mb-4', isDarkMode ? 'text-gray-200' : 'text-gray-800']">
              Problemas comuns
            </h3>
            <ul :class="['space-y-2 text-sm', isDarkMode ? 'text-gray-300' : 'text-gray-600']">
              <li>• <strong>Agente offline:</strong> confirme o Agent em <code class="text-xs">127.0.0.1:9970</code></li>
              <li>• <strong>Firefox:</strong> loja AMO em breve; por enquanto sideload pelo painel do Agent</li>
              <li>• <strong>Permissão localhost:</strong> no popup, “Permitir Agent local”</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <h3 :class="['text-xl font-semibold mb-4', isDarkMode ? 'text-gray-200' : 'text-gray-800']">Links úteis</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <a :href="chromeStoreUrl" target="_blank" rel="noopener noreferrer"
            :class="['inline-flex items-center px-4 py-2 rounded-lg transition-colors', isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']">
            Chrome Web Store
          </a>
          <a :href="agentRepoUrl" target="_blank" rel="noopener noreferrer"
            :class="['inline-flex items-center px-4 py-2 rounded-lg transition-colors', isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']">
            Agent no GitHub
          </a>
          <a href="https://github.com/buscalogo/buscalogo-lauche/issues" target="_blank" rel="noopener noreferrer"
            :class="['inline-flex items-center px-4 py-2 rounded-lg transition-colors', isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']">
            Reportar problemas
          </a>
        </div>
      </div>

      <div class="mt-12 text-center">
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105"
        >
          Voltar à Busca
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const isDarkMode = inject('isDarkMode', false)

const chromeStoreUrl =
  'https://chromewebstore.google.com/detail/buscalogo-agent/gecmkbanhikgnhpcdibplcfndapclneh'
const agentRepoUrl = 'https://github.com/buscalogo/buscalogo-lauche'
const agentReleasesUrl = 'https://github.com/buscalogo/buscalogo-lauche/releases/latest'
</script>
