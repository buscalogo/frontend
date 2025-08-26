<template>
  <div class="container mx-auto px-4 py-8">
    <main class="max-w-6xl mx-auto">
      <!-- Cabeçalho da Página -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold mb-6" :class="isDarkMode ? 'text-gray-100' : 'text-gray-800'">
          🚀 Roadmap de Melhorias
        </h1>
        <p class="text-xl" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
          Mapeamento completo das funcionalidades e melhorias planejadas para o BuscaLogo
        </p>
        <div class="mt-4 flex justify-center space-x-4">
          <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            ✅ Implementado
          </span>
          <span class="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            📋 Planejado
          </span>
          <span class="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            🔮 Futuro
          </span>
        </div>
      </div>

      <!-- Status Atual -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-center" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
          🎯 Status Atual da Extensão
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Funcionalidades Implementadas -->
          <div class="p-6 rounded-xl border-2" :class="isDarkMode ? 'bg-gray-800 border-green-600' : 'bg-white border-green-200'">
            <h3 class="text-xl font-semibold mb-4 text-green-600">✅ Funcionalidades Implementadas</h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <span class="text-green-500 mt-1">✓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Coleta manual de páginas com botão de captura</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-500 mt-1">✓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Indexação inteligente com IndexedDB otimizado</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-500 mt-1">✓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Crawling automático para descoberta de artigos</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-500 mt-1">✓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Comunicação P2P via servidor de sinalização</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-500 mt-1">✓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Interface responsiva com popup funcional</span>
              </li>
            </ul>
          </div>

          <!-- Arquitetura Atual -->
          <div class="p-6 rounded-xl border-2" :class="isDarkMode ? 'bg-gray-800 border-blue-600' : 'bg-white border-blue-200'">
            <h3 class="text-xl font-semibold mb-4 text-blue-600">🏗️ Arquitetura Atual</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="text-blue-500">↓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Extensão Chrome → IndexedDB</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-blue-500">↓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Servidor WebSocket → Frontend Vue.js</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-blue-500">↓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Coleta Dados → Armazenamento</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-blue-500">↓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Comunicação → Interface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Fases de Desenvolvimento -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-center" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
          🚀 Fases de Desenvolvimento
        </h2>

        <!-- FASE 1 -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              1
            </div>
            <h3 class="text-2xl font-bold" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
              FASE 1: Funcionalidades Core (Prioridade ALTA)
            </h3>
          </div>
          
          <div class="grid md:grid-cols-1 gap-6 ml-16">
            <!-- Sistema de Notificações -->
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-xl font-semibold text-green-600">Sistema de Notificações e Alertas</h4>
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">✅ Implementado</span>
              </div>
              <p class="mb-3" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Notificações push para novas descobertas e status de crawling
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Funcionalidades:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• Notificação de nova página capturada</li>
                    <li>• Alerta quando crawling encontra conteúdo relevante</li>
                    <li>• Badge na extensão mostrando novas capturas</li>
                    <li>• Notificações de status (conectado/desconectado)</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Detalhes:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• <strong>Impacto:</strong> Melhora engajamento do usuário</li>
                    <li>• <strong>Estimativa:</strong> 2-3 dias</li>
                    <li>• <strong>Dependências:</strong> Chrome Notifications API</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Interface de Busca Avançada -->
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-xl font-semibold text-green-600">Interface de Busca Avançada</h4>
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">✅ Implementado</span>
              </div>
              <p class="mb-3" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Sistema de busca local com filtros avançados
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Funcionalidades:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• Busca por texto completo</li>
                    <li>• Filtros por tipo de conteúdo</li>
                    <li>• Filtros por data de captura</li>
                    <li>• Filtros por domínio/hostname</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Detalhes:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• <strong>Impacto:</strong> Melhora descoberta de conteúdo local</li>
                    <li>• <strong>Estimativa:</strong> 3-4 dias</li>
                    <li>• <strong>Dependências:</strong> IndexedDB queries avançadas</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Dashboard de Analytics -->
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-xl font-semibold text-green-600">Dashboard de Analytics</h4>
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">✅ Implementado</span>
              </div>
              <p class="mb-3" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Interface para visualizar estatísticas de coleta e performance
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Funcionalidades:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• Gráfico de páginas capturadas por dia</li>
                    <li>• Estatísticas de domínios mais visitados</li>
                    <li>• Métricas de qualidade do conteúdo</li>
                    <li>• Relatórios de performance do crawling</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Detalhes:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• <strong>Impacto:</strong> Transparência sobre dados coletados</li>
                    <li>• <strong>Estimativa:</strong> 4-5 dias</li>
                    <li>• <strong>Dependências:</strong> Charts.js ou similar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FASE 2 -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              2
            </div>
            <h3 class="text-2xl font-bold" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
              FASE 2: Experiência do Usuário (Prioridade MÉDIA)
            </h3>
          </div>
          
          <div class="grid md:grid-cols-1 gap-6 ml-16">
            <!-- Sistema de Favoritos -->
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-xl font-semibold text-yellow-600">Sistema de Favoritos e Bookmarks</h4>
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">📋 Planejado</span>
              </div>
              <p class="mb-3" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Marcar e organizar páginas importantes
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Funcionalidades:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• Marcar páginas como favoritas</li>
                    <li>• Organizar em coleções temáticas</li>
                    <li>• Tags personalizadas</li>
                    <li>• Exportar favoritos</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Detalhes:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• <strong>Impacto:</strong> Melhora organização pessoal</li>
                    <li>• <strong>Estimativa:</strong> 3-4 dias</li>
                    <li>• <strong>Dependências:</strong> Nova store no IndexedDB</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Captura Automática -->
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-xl font-semibold text-yellow-600">Captura Automática Inteligente</h4>
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">📋 Planejado</span>
              </div>
              <p class="mb-3" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Captura automática baseada em padrões de navegação
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Funcionalidades:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• Detecção de padrões de navegação</li>
                    <li>• Captura automática de artigos relevantes</li>
                    <li>• Configuração de regras de captura</li>
                    <li>• Whitelist/blacklist de domínios</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Detalhes:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• <strong>Impacto:</strong> Reduz necessidade de intervenção manual</li>
                    <li>• <strong>Estimativa:</strong> 5-6 dias</li>
                    <li>• <strong>Dependências:</strong> Machine Learning básico</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FASE 3 -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              3
            </div>
            <h3 class="text-2xl font-bold" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
              FASE 3: Otimizações Técnicas (Prioridade MÉDIA)
            </h3>
          </div>
          
          <div class="grid md:grid-cols-1 gap-6 ml-16">
            <!-- Sistema de Cache -->
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-xl font-semibold text-blue-600">Sistema de Cache Inteligente</h4>
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">📋 Planejado</span>
              </div>
              <p class="mb-3" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Cache otimizado para buscas e dados frequentes
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Funcionalidades:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• Cache de buscas frequentes</li>
                    <li>• Cache de metadados de domínios</li>
                    <li>• Compressão de dados para transferência</li>
                    <li>• Versionamento de dados</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Detalhes:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• <strong>Impacto:</strong> Melhora performance e responsividade</li>
                    <li>• <strong>Estimativa:</strong> 4-5 dias</li>
                    <li>• <strong>Dependências:</strong> Service Worker cache</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FASE 4 -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              4
            </div>
            <h3 class="text-2xl font-bold" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
              FASE 4: Funcionalidades Avançadas (Prioridade BAIXA)
            </h3>
          </div>
          
          <div class="grid md:grid-cols-1 gap-6 ml-16">
            <!-- Machine Learning -->
            <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-xl font-semibold text-purple-600">Machine Learning para Classificação</h4>
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">🔮 Futuro</span>
              </div>
              <p class="mb-3" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Classificação automática avançada de conteúdo
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Funcionalidades:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• Classificação automática de tópicos</li>
                    <li>• Detecção de idioma</li>
                    <li>• Análise de sentimento avançada</li>
                    <li>• Recomendações personalizadas</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium mb-2" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">Detalhes:</h5>
                  <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <li>• <strong>Impacto:</strong> Melhora qualidade da indexação</li>
                    <li>• <strong>Estimativa:</strong> 2-3 semanas</li>
                    <li>• <strong>Dependências:</strong> TensorFlow.js, modelo treinado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Matriz de Priorização -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-center" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
          📊 Matriz de Priorização
        </h2>
        
        <div class="overflow-x-auto">
          <table class="w-full border-collapse" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            <thead>
              <tr :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-100'">
                <th class="border p-3 text-left font-semibold">Melhoria</th>
                <th class="border p-3 text-center font-semibold">Impacto</th>
                <th class="border p-3 text-center font-semibold">Esforço</th>
                <th class="border p-3 text-center font-semibold">Prioridade</th>
                <th class="border p-3 text-center font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in priorizacaoMatrix" :key="index" 
                  :class="isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'">
                <td class="border p-3 font-medium">{{ item.melhoria }}</td>
                <td class="border p-3 text-center">{{ item.impacto }}</td>
                <td class="border p-3 text-center">{{ item.esforco }}</td>
                <td class="border p-3 text-center">
                  <span :class="getPriorityClass(item.prioridade)">{{ item.prioridade }}</span>
                </td>
                <td class="border p-3 text-center">
                  <span :class="getStatusClass(item.status)">{{ item.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Metas por Sprint -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-center" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
          🎯 Metas por Sprint
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-6 rounded-xl border-2" :class="isDarkMode ? 'bg-gray-800 border-green-600' : 'bg-white border-green-200'">
            <h3 class="text-xl font-semibold mb-4 text-green-600">Sprint 1 (Semana 1-2)</h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <span class="text-green-500 mt-1">✓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Sistema de notificações</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-500 mt-1">✓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Interface de busca avançada básica</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-500 mt-1">✓</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Dashboard de analytics básico</span>
              </li>
            </ul>
          </div>

          <div class="p-6 rounded-xl border-2" :class="isDarkMode ? 'bg-gray-800 border-yellow-600' : 'bg-white border-yellow-200'">
            <h3 class="text-xl font-semibold mb-4 text-yellow-600">Sprint 2 (Semana 3-4)</h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <span class="text-yellow-500 mt-1">○</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Sistema de favoritos</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-yellow-500 mt-1">○</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Context menu integration</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-yellow-500 mt-1">○</span>
                <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">Otimizações de performance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Métricas de Sucesso -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-center" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
          📈 Métricas de Sucesso
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 rounded-lg border text-center" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <h3 class="text-xl font-semibold mb-3 text-blue-600">Métricas de Engajamento</h3>
            <ul class="space-y-2 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              <li><strong>Taxa de uso:</strong> >70% dos usuários ativos</li>
              <li><strong>Tempo de sessão:</strong> >5 minutos por sessão</li>
              <li><strong>Retenção:</strong> >60% retornam na semana seguinte</li>
            </ul>
          </div>

          <div class="p-6 rounded-lg border text-center" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <h3 class="text-xl font-semibold mb-3 text-green-600">Métricas de Performance</h3>
            <ul class="space-y-2 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              <li><strong>Tempo de busca:</strong> <500ms para resultados locais</li>
              <li><strong>Uso de memória:</strong> <100MB para extensão ativa</li>
              <li><strong>Tempo de captura:</strong> <2s para páginas padrão</li>
            </ul>
          </div>

          <div class="p-6 rounded-lg border text-center" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <h3 class="text-xl font-semibold mb-3 text-purple-600">Métricas de Qualidade</h3>
            <ul class="space-y-2 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              <li><strong>Precisão da busca:</strong> >85% de resultados relevantes</li>
              <li><strong>Taxa de captura:</strong> >90% de páginas capturadas</li>
              <li><strong>Satisfação:</strong> >4.5/5 estrelas</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Recursos e Referências -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-center" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
          📚 Recursos e Referências
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <h3 class="text-xl font-semibold mb-4 text-blue-600">Documentação Técnica</h3>
            <ul class="space-y-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              <li>• <a href="https://developer.chrome.com/docs/extensions/mv3/" target="_blank" class="text-blue-400 hover:underline">Chrome Extensions Manifest V3</a></li>
              <li>• <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB" target="_blank" class="text-blue-400 hover:underline">IndexedDB API</a></li>
              <li>• <a href="https://developer.chrome.com/docs/extensions/reference/notifications/" target="_blank" class="text-blue-400 hover:underline">Chrome Notifications API</a></li>
              <li>• <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank" class="text-blue-400 hover:underline">Service Workers</a></li>
            </ul>
          </div>

          <div class="p-6 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <h3 class="text-xl font-semibold mb-4 text-green-600">Ferramentas Recomendadas</h3>
            <ul class="space-y-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              <li>• <strong>Charts.js</strong> para gráficos e dashboards</li>
              <li>• <strong>Lodash</strong> para utilitários de array/objeto</li>
              <li>• <strong>Day.js</strong> para manipulação de datas</li>
              <li>• <strong>Chrome DevTools</strong> para debugging</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Footer da Página -->
      <footer class="text-center py-8 border-t" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
        <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
          <strong>Documento criado:</strong> 2024-01-15 | 
          <strong>Última atualização:</strong> 2024-01-15 | 
          <strong>Versão:</strong> 1.0
        </p>
        <p class="text-sm mt-2" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
          <strong>Responsável:</strong> Equipe de Desenvolvimento BuscaLogo
        </p>
        <p class="text-sm mt-4 italic" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
          💡 <strong>Nota:</strong> Este roadmap é um documento vivo e deve ser atualizado conforme o projeto evolui e novas necessidades surgem.
        </p>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Roadmap',
  data() {
    return {
      isDarkMode: false,
      priorizacaoMatrix: [
        { melhoria: 'Notificações', impacto: 'Alto', esforco: 'Baixo', prioridade: '🔴 Alta', status: '✅ Implementado' },
        { melhoria: 'Busca Avançada', impacto: 'Alto', esforco: 'Médio', prioridade: '🔴 Alta', status: '✅ Implementado' },
        { melhoria: 'Dashboard Analytics', impacto: 'Alto', esforco: 'Médio', prioridade: '🔴 Alta', status: '✅ Implementado' },
        { melhoria: 'Favoritos', impacto: 'Médio', esforco: 'Baixo', prioridade: '🟡 Média', status: '📋 Planejado' },
        { melhoria: 'Captura Automática', impacto: 'Médio', esforco: 'Alto', prioridade: '🟡 Média', status: '📋 Planejado' },
        { melhoria: 'Context Menu', impacto: 'Baixo', esforco: 'Baixo', prioridade: '🟡 Média', status: '📋 Planejado' },
        { melhoria: 'Cache Inteligente', impacto: 'Médio', esforco: 'Médio', prioridade: '🟡 Média', status: '📋 Planejado' },
        { melhoria: 'Otimização Performance', impacto: 'Médio', esforco: 'Médio', prioridade: '🟡 Média', status: '📋 Planejado' },
        { melhoria: 'Backup/Sincronização', impacto: 'Médio', esforco: 'Alto', prioridade: '🟢 Baixa', status: '📋 Planejado' },
        { melhoria: 'Machine Learning', impacto: 'Alto', esforco: 'Muito Alto', prioridade: '🔮 Futuro', status: '🔮 Futuro' },
        { melhoria: 'Sistema de Plugins', impacto: 'Alto', esforco: 'Muito Alto', prioridade: '🔮 Futuro', status: '🔮 Futuro' },
        { melhoria: 'Integrações Externas', impacto: 'Médio', esforco: 'Alto', prioridade: '🔮 Futuro', status: '🔮 Futuro' }
      ]
    }
  },
  mounted() {
    // Verificar se o modo escuro está ativo
    this.checkDarkMode();
    
    // Adicionar listener para mudanças no modo escuro
    window.addEventListener('storage', this.checkDarkMode);
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.checkDarkMode);
  },
  methods: {
    checkDarkMode() {
      this.isDarkMode = localStorage.getItem('buscalogo-theme') === 'dark';
    },
    getPriorityClass(prioridade) {
      if (prioridade.includes('🔴')) return 'text-red-600 font-semibold';
      if (prioridade.includes('🟡')) return 'text-yellow-600 font-semibold';
      if (prioridade.includes('🟢')) return 'text-green-600 font-semibold';
      if (prioridade.includes('🔮')) return 'text-blue-600 font-semibold';
      return '';
    },
    getStatusClass(status) {
      if (status.includes('✅')) return 'text-green-600 font-semibold';
      if (status.includes('📋')) return 'text-yellow-600 font-semibold';
      if (status.includes('🔮')) return 'text-blue-600 font-semibold';
      return '';
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para a página de roadmap */
.container {
  max-width: 1200px;
}

/* Animações suaves para hover */
.hover\:bg-gray-50:hover {
  transition: background-color 0.2s ease-in-out;
}

.hover\:bg-gray-600:hover {
  transition: background-color 0.2s ease-in-out;
}

/* Estilos para links */
a {
  transition: color 0.2s ease-in-out;
}

a:hover {
  text-decoration: underline;
}

/* Responsividade para tabelas */
@media (max-width: 768px) {
  .overflow-x-auto {
    font-size: 0.875rem;
  }
  
  .overflow-x-auto th,
  .overflow-x-auto td {
    padding: 0.5rem;
  }
}
</style>
