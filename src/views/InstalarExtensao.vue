<template>
  <div class="container mx-auto px-4 py-8">
    <main class="max-w-4xl mx-auto">
      <!-- Header da Página -->
      <div class="text-center mb-12">
        <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <img src="@/assets/img/dark-logo.png" alt="BuscaLogo" class="w-12 h-12">
        </div>
        <h1 :class="[
          'text-4xl font-bold mb-4',
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        ]">
          Instalar Extensão BuscaLogo
        </h1>
        <p :class="[
          'text-lg max-w-2xl mx-auto',
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        ]">
          Siga estas instruções para instalar a extensão BuscaLogo no seu navegador Chrome e começar a contribuir para a rede colaborativa de busca
        </p>
      </div>

      <!-- Passos de Instalação -->
      <div class="space-y-8">
        <!-- Passo 1: Download -->
        <section :class="[
          'p-6 rounded-lg border-2',
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        ]">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div class="flex-1">
              <h3 :class="[
                'text-xl font-semibold mb-3',
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              ]">
                📥 Baixar a Extensão
              </h3>
              <p :class="[
                'text-base mb-4 leading-relaxed',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]">
                A extensão BuscaLogo está disponível no GitHub como código aberto. Você pode baixar o arquivo ZIP ou clonar o repositório.
              </p>
              
              <div class="space-y-3">
                <a 
                  href="https://github.com/buscalogo/extension/archive/refs/heads/main.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="[
                    'inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105',
                    isDarkMode 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  ]"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  Baixar ZIP da Extensão
                </a>
                
                <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
                  Ou clone o repositório: 
                  <code class="px-2 py-1 rounded bg-gray-100 text-gray-800 font-mono text-xs">
                    git clone https://github.com/buscalogo/extension.git
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Passo 2: Extrair -->
        <section :class="[
          'p-6 rounded-lg border-2',
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        ]">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div class="flex-1">
              <h3 :class="[
                'text-xl font-semibold mb-3',
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              ]">
                📁 Extrair os Arquivos
              </h3>
              <p :class="[
                'text-base mb-4 leading-relaxed',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]">
                Após o download, extraia o arquivo ZIP para uma pasta de fácil acesso no seu computador.
              </p>
              
              <div class="space-y-3">
                <div :class="[
                  'p-4 rounded-lg',
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                ]">
                  <h4 :class="[
                    'font-medium mb-2',
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  ]">
                    📋 Estrutura dos Arquivos:
                  </h4>
                  <div class="font-mono text-sm space-y-1" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <div>📁 extension/</div>
                    <div class="ml-4">├── manifest.json</div>
                    <div class="ml-4">├── background.js</div>
                    <div class="ml-4">├── content.js</div>
                    <div class="ml-4">├── popup.html</div>
                    <div class="ml-4">├── popup.js</div>
                    <div class="ml-4">└── icons/</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Passo 3: Abrir Chrome -->
        <section :class="[
          'p-6 rounded-lg border-2',
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        ]">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div class="flex-1">
              <h3 :class="[
                'text-xl font-semibold mb-3',
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              ]">
                🌐 Abrir Chrome e Gerenciar Extensões
              </h3>
              <p :class="[
                'text-base mb-4 leading-relaxed',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]">
                Abra o Google Chrome e acesse a página de gerenciamento de extensões.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🔧</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    Digite <strong>chrome://extensions/</strong> na barra de endereços
                  </span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">⚙️</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    Ou vá em <strong>Menu → Mais ferramentas → Extensões</strong>
                  </span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">⌨️</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    Ou use o atalho: <strong>Ctrl+Shift+E</strong> (Windows/Linux) ou <strong>Cmd+Shift+E</strong> (Mac)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Passo 4: Ativar Modo Desenvolvedor -->
        <section :class="[
          'p-6 rounded-lg border-2',
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        ]">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div class="flex-1">
              <h3 :class="[
                'text-xl font-semibold mb-3',
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              ]">
                🛠️ Ativar Modo Desenvolvedor
              </h3>
              <p :class="[
                'text-base mb-4 leading-relaxed',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]">
                Para instalar extensões não oficiais, você precisa ativar o modo desenvolvedor.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🔓</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    No canto superior direito, ative o <strong>"Modo desenvolvedor"</strong>
                  </span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">⚠️</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    <strong>Importante:</strong> Este modo permite instalar extensões não verificadas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Passo 5: Carregar Extensão -->
        <section :class="[
          'p-6 rounded-lg border-2',
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        ]">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              5
            </div>
            <div class="flex-1">
              <h3 :class="[
                'text-xl font-semibold mb-3',
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              ]">
                📦 Carregar Extensão Descompactada
              </h3>
              <p :class="[
                'text-base mb-4 leading-relaxed',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]">
                Agora você pode carregar a extensão BuscaLogo no Chrome.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">📁</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    Clique no botão <strong>"Carregar sem compactação"</strong>
                  </span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">📂</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    Selecione a pasta <strong>extension</strong> que você extraiu
                  </span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">✅</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    A extensão será instalada e aparecerá na lista
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Passo 6: Configurar -->
        <section :class="[
          'p-6 rounded-lg border-2',
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        ]">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              6
            </div>
            <div class="flex-1">
              <h3 :class="[
                'text-xl font-semibold mb-3',
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              ]">
                ⚙️ Configurar e Testar
              </h3>
              <p :class="[
                'text-base mb-4 leading-relaxed',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]">
                Após a instalação, configure a extensão e teste sua funcionalidade.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🔗</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    Clique no ícone da extensão na barra de ferramentas
                  </span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🌐</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    Navegue para um site e teste a captura de dados
                  </span>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🔍</span>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    Volte ao BuscaLogo e faça uma busca para testar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Dicas e Solução de Problemas -->
      <div class="mt-12 space-y-6">
        <h2 :class="[
          'text-2xl font-bold text-center mb-8',
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        ]">
          💡 Dicas e Solução de Problemas
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Dicas -->
          <div :class="[
            'p-6 rounded-lg border',
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          ]">
            <h3 :class="[
              'text-lg font-semibold mb-4 flex items-center',
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            ]">
              <span class="text-2xl mr-2">💡</span>
              Dicas Importantes
            </h3>
            <ul :class="[
              'space-y-2 text-sm',
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            ]">
              <li>• Mantenha a pasta da extensão no mesmo local</li>
              <li>• Não mova ou renomeie arquivos da extensão</li>
              <li>• A extensão funciona apenas no Chrome/Chromium</li>
              <li>• Reinicie o Chrome se houver problemas</li>
              <li>• Verifique se o modo desenvolvedor está ativo</li>
            </ul>
          </div>

          <!-- Solução de Problemas -->
          <div :class="[
            'p-6 rounded-lg border',
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          ]">
            <h3 :class="[
              'text-lg font-semibold mb-4 flex items-center',
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            ]">
              <span class="text-2xl mr-2">🔧</span>
              Solução de Problemas
            </h3>
            <ul :class="[
              'space-y-2 text-sm',
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            ]">
              <li>• <strong>Erro de manifest:</strong> Verifique se todos os arquivos estão presentes</li>
              <li>• <strong>Extensão não carrega:</strong> Ative o modo desenvolvedor</li>
              <li>• <strong>Ícone não aparece:</strong> Verifique se a extensão está ativa</li>
              <li>• <strong>Funcionalidade não funciona:</strong> Recarregue a extensão</li>
              <li>• <strong>Problemas de conexão:</strong> Verifique se o servidor está rodando</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- BuscaLogo Desktop -->
      <div class="mt-12 p-6 rounded-lg border-2 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 :class="[
            'text-2xl font-bold mb-2',
            isDarkMode ? 'text-green-200' : 'text-green-800'
          ]">
            🖥️ BuscaLogo Desktop
          </h3>
          <p :class="[
            'text-base max-w-2xl mx-auto',
            isDarkMode ? 'text-green-300' : 'text-green-700'
          ]">
            Além da extensão, experimente nossa poderosa aplicação desktop com recursos avançados de scraping e funcionalidade offline
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <!-- Funcionalidades -->
          <div>
            <h4 :class="[
              'text-lg font-semibold mb-3',
              isDarkMode ? 'text-green-200' : 'text-green-800'
            ]">
              ✨ Funcionalidades Avançadas
            </h4>
            <ul :class="[
              'space-y-2 text-sm',
              isDarkMode ? 'text-green-300' : 'text-green-700'
            ]">
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Scraping web mais poderoso
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Modo offline completo
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Exportação de dados avançada
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Performance nativa superior
              </li>
            </ul>
          </div>

          <!-- Downloads -->
          <div>
            <h4 :class="[
              'text-lg font-semibold mb-3',
              isDarkMode ? 'text-green-200' : 'text-green-800'
            ]">
              📦 Downloads Disponíveis
            </h4>
            <div class="space-y-3">
              <a 
                href="https://github.com/buscalogo/desktop-app/releases/download/v1.1.9/BuscaLogo-1.1.0.AppImage"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105',
                  isDarkMode 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                ]"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                Linux (AppImage)
              </a>
              
              <a 
                href="https://github.com/buscalogo/desktop-app/releases/download/v1.1.9/BuscaLogo-1.1.0.exe"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105',
                  isDarkMode 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                ]"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                Windows (.exe)
              </a>
              
              <a 
                href="https://github.com/buscalogo/desktop-app/releases/download/v1.1.9/BuscaLogo-1.1.0.dmg"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105',
                  isDarkMode 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                ]"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                macOS (.dmg)
              </a>
            </div>
          </div>
        </div>

        <!-- Instruções de Instalação -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
          <h5 :class="[
            'text-md font-semibold mb-3',
            isDarkMode ? 'text-green-200' : 'text-green-800'
          ]">
            🔧 Instruções de Instalação
          </h5>
          <div class="space-y-2 text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
            <p><strong>Linux:</strong> <code class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-xs">chmod +x BuscaLogo-1.1.0.AppImage && ./BuscaLogo-1.1.0.AppImage</code></p>
            <p><strong>Windows:</strong> Execute o arquivo .exe e siga as instruções do instalador</p>
            <p><strong>macOS:</strong> Abra o arquivo .dmg e arraste o BuscaLogo para a pasta Applications</p>
          </div>
        </div>

        <!-- Link para mais informações -->
        <div class="text-center mt-4">
          <a 
            href="https://github.com/buscalogo/desktop-app"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              isDarkMode 
                ? 'bg-green-700 text-green-200 hover:bg-green-600' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            ]"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
            </svg>
            Ver Repositório Desktop
          </a>
        </div>
      </div>

      <!-- Links Úteis -->
      <div class="mt-12 text-center">
        <h3 :class="[
          'text-xl font-semibold mb-4',
          isDarkMode ? 'text-gray-200' : 'text-gray-800'
        ]">
          🔗 Links Úteis
        </h3>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/buscalogo/extension"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'inline-flex items-center px-4 py-2 rounded-lg transition-colors',
              isDarkMode 
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
            </svg>
            Repositório GitHub
          </a>
          
          <a 
            href="https://github.com/buscalogo/extension/issues"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'inline-flex items-center px-4 py-2 rounded-lg transition-colors',
              isDarkMode 
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            Reportar Problemas
          </a>
          
          <a 
            href="https://github.com/buscalogo/extension/wiki"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'inline-flex items-center px-4 py-2 rounded-lg transition-colors',
              isDarkMode 
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Wiki e Documentação
          </a>
        </div>
      </div>

      <!-- Voltar à Busca -->
      <div class="mt-12 text-center">
        <router-link 
          to="/"
          :class="[
            'inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105',
            isDarkMode 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          ]"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Voltar à Busca
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const isDarkMode = inject('isDarkMode', false)
</script>
