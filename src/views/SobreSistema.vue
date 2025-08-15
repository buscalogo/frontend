<template>
  <div class="container mx-auto px-4 py-8">
    <main class="max-w-4xl mx-auto">
      <!-- Cabeçalho da Página -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4" :class="isDarkMode ? 'text-gray-100' : 'text-gray-800'">
          Sobre o Sistema BuscaLogo
        </h1>
        <p class="text-lg" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
          Conheça mais sobre nossa plataforma de busca colaborativa
        </p>
      </div>

      <!-- Conteúdo Principal -->
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🚀 O que é o BuscaLogo?
          </h2>
          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            O BuscaLogo é uma plataforma inovadora de busca colaborativa que utiliza tecnologia P2P (Peer-to-Peer) 
            para conectar usuários e compartilhar conhecimento de forma descentralizada. Diferente dos buscadores 
            tradicionais, o BuscaLogo permite que cada usuário contribua para o acervo coletivo de informações.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🔧 Como Funciona?
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-xl font-medium mb-3 text-blue-600">1. Instalação da Extensão</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Os usuários instalam uma extensão no navegador que captura e indexa automaticamente 
                as páginas visitadas, criando um banco de dados local personalizado.
              </p>
            </div>
            
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-xl font-medium mb-3 text-purple-600">2. Conexão P2P</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Através de conexões diretas entre usuários (WebRTC), o sistema permite busca 
                em tempo real nos bancos de dados de todos os peers conectados.
              </p>
            </div>
            
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-xl font-medium mb-3 text-green-600">3. Busca Distribuída</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                As consultas são distribuídas entre todos os peers ativos, garantindo 
                resultados rápidos e abrangentes sem depender de servidores centrais.
              </p>
            </div>
            
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-xl font-medium mb-3 text-orange-600">4. Resultados em Tempo Real</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Os resultados são agregados e apresentados instantaneamente, 
                mostrando a relevância e origem de cada informação encontrada.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🛡️ Privacidade e Segurança
          </h2>
          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            O BuscaLogo prioriza a privacidade dos usuários. Todas as buscas são realizadas localmente 
            em cada peer, e nenhum dado pessoal é transmitido ou armazenado em servidores centrais. 
            A comunicação P2P é criptografada e os usuários mantêm controle total sobre suas informações.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🌟 Vantagens do Sistema
          </h2>
          <ul class="space-y-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            <li class="flex items-start space-x-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Busca descentralizada sem dependência de servidores centrais</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Resultados em tempo real com baixa latência</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Privacidade total - dados ficam nos dispositivos dos usuários</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Escalabilidade natural - mais usuários = mais conteúdo</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Sem censura ou controle centralizado</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🔮 Tecnologias Utilizadas
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center p-4 rounded-lg" :class="isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'">
              <div class="text-2xl mb-2">🌐</div>
              <div class="font-medium">WebRTC</div>
              <div class="text-sm">Conexões P2P</div>
            </div>
            <div class="text-center p-4 rounded-lg" :class="isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'">
              <div class="text-2xl mb-2">💾</div>
              <div class="font-medium">IndexedDB</div>
              <div class="text-sm">Armazenamento Local</div>
            </div>
            <div class="text-center p-4 rounded-lg" :class="isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'">
              <div class="text-2xl mb-2">⚡</div>
              <div class="font-medium">Vue 3</div>
              <div class="text-sm">Interface Moderna</div>
            </div>
            <div class="text-center p-4 rounded-lg" :class="isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'">
              <div class="text-2xl mb-2">🔌</div>
              <div class="font-medium">WebSocket</div>
              <div class="text-sm">Sinalização</div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🎯 Objetivos Futuros
          </h2>
          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            O BuscaLogo está em constante evolução. Nossos objetivos incluem melhorar a relevância 
            dos resultados, implementar filtros avançados, adicionar suporte para diferentes tipos 
            de conteúdo e expandir a comunidade de usuários colaborativos.
          </p>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// Injeta o tema do App.vue
const isDarkMode = inject('isDarkMode', false)
</script>

<style scoped>
.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose ul {
  margin-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}
</style>
