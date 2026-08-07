<template>
  <div class="container mx-auto px-4 py-8">
    <main class="max-w-4xl mx-auto">
      <!-- Cabeçalho da Página -->
      <div class="text-center mb-8">
        <p class="text-sm font-medium mb-2" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
          BuscaLogo · Universal Chat Translator
        </p>
        <h1 class="text-4xl font-bold mb-4" :class="isDarkMode ? 'text-gray-100' : 'text-gray-800'">
          Política de Privacidade
        </h1>
        <p class="text-lg" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
          Como a extensão Universal Chat Translator trata dados ao traduzir suas conversas
        </p>
        <div class="mt-4 p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
          <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
            <strong>Importante:</strong> Nenhum dado é enviado para o BuscaLogo ou para quem desenvolve a extensão.
            O texto das suas mensagens só vai para o servidor de IA que <strong>você mesmo escolhe e configura</strong>.
          </p>
        </div>
        <div class="mt-4 p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700">
          <p class="text-sm" :class="isDarkMode ? 'text-blue-300' : 'text-blue-700'">
            <strong>Última atualização:</strong> 7 de agosto de 2026 - Versão 1.0
          </p>
        </div>
      </div>

      <!-- Conteúdo Principal -->
      <div class="space-y-8">
        <!-- Introdução -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📋 Introdução
          </h2>
          <p class="leading-relaxed mb-4" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            Esta política descreve como a extensão <strong>Universal Chat Translator</strong> (produto do BuscaLogo)
            acessa, usa e armazena dados ao traduzir mensagens em tempo real no Discord e no WhatsApp Web, em
            conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
          </p>
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              <strong>Nosso compromisso:</strong> a extensão não tem servidor próprio. O texto que ela processa
              só circula entre o seu navegador e o servidor de IA que você mesmo configurar.
            </p>
          </div>
        </section>

        <!-- Dados Acessados -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📊 Dados Acessados
          </h2>

          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Texto das mensagens</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Enquanto ativa numa aba do Discord ou do WhatsApp Web, a extensão lê o texto visível das mensagens
                na tela e o conteúdo do campo de digitação, exclusivamente para traduzir. Ela não acessa suas
                credenciais, não usa a API oficial dessas plataformas e não vê nada fora das abas onde está habilitada.
              </p>
            </div>
          </div>
        </section>

        <!-- Dados Armazenados Localmente -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            💾 O Que Fica Salvo, e Onde
          </h2>

          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Tudo fica no seu navegador</h3>
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              Nada é salvo em servidores do BuscaLogo. Os dados abaixo ficam apenas no armazenamento local da
              extensão no seu navegador (<code>chrome.storage.local</code>):
            </p>
            <ul class="space-y-1 text-sm mt-2" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              <li>• Traduções já feitas, para não traduzir a mesma mensagem de novo ao reabrir uma conversa</li>
              <li>• Idioma de tradução escolhido para cada conversa</li>
              <li>• Configurações do servidor de IA (endereço, modelo, chave de API se você usar uma)</li>
            </ul>
          </div>
        </section>

        <!-- Para Onde os Dados Vão -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🌐 Para Onde os Dados São Enviados
          </h2>

          <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              Só para o endereço de servidor de IA que você mesmo digitar nas opções da extensão — pode ser um
              servidor rodando na sua própria rede local, ou um provedor de IA de sua escolha. A extensão não tem
              servidor próprio, não coleta estatísticas de uso e não tem analytics.
            </p>
          </div>
          <div class="mt-4 p-4 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700">
            <p class="text-sm" :class="isDarkMode ? 'text-amber-300' : 'text-amber-700'">
              <strong>Atenção:</strong> se o servidor escolhido for de terceiros (não local nem seu), o conteúdo
              traduzido também fica sujeito à política de privacidade desse provedor — vale conferir a política
              dele separadamente antes de configurar.
            </p>
          </div>
        </section>

        <!-- Base Legal -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            ⚖️ Base Legal para Tratamento
          </h2>

          <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              O tratamento ocorre com base na <strong>execução de funcionalidade solicitada pelo usuário</strong>
              (art. 7º, V, LGPD): você instala a extensão, escolhe habilitá-la numa conversa e configura para onde
              o texto deve ser enviado para tradução. Nada é processado sem essa ação explícita sua.
            </p>
          </div>
        </section>

        <!-- Compartilhamento -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🤝 Compartilhamento de Dados
          </h2>

          <div class="p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-700">
            <p class="text-sm" :class="isDarkMode ? 'text-red-300' : 'text-red-700'">
              <strong>Nunca vendemos, alugamos ou compartilhamos dados</strong> com terceiros. O único destinatário
              do texto das mensagens é o servidor de IA que você mesmo escolheu — nenhum outro terceiro tem acesso.
            </p>
          </div>
        </section>

        <!-- Permissões -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🔑 Permissões do Navegador e Por Quê
          </h2>

          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">storage / unlimitedStorage</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Guardar suas configurações e o cache de traduções localmente, sem esbarrar no limite padrão de
                armazenamento à medida que o cache cresce com o uso.
              </p>
            </div>
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">discord.com / web.whatsapp.com</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Ler e mostrar as traduções diretamente nessas páginas, onde a extensão funciona.
              </p>
            </div>
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Endereço do servidor de IA</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Solicitada só na hora em que você salva um endereço nas opções — dá acesso apenas a esse endereço
                específico, escolhido por você, nunca a qualquer host de forma ampla.
              </p>
            </div>
          </div>
        </section>

        <!-- Retenção -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            ⏰ Retenção e Exclusão
          </h2>

          <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              O cache de traduções fica salvo até você apagá-lo manualmente na tela de estatísticas da extensão
              (com opção de limpar por site ou tudo de uma vez) ou até desinstalar a extensão, momento em que o
              Chrome remove automaticamente todos os dados locais dela.
            </p>
          </div>
        </section>

        <!-- Cookies -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🍪 Cookies e Rastreamento
          </h2>

          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              A extensão <strong>não utiliza cookies, analytics ou qualquer forma de rastreamento</strong>. Não há
              conta, login ou identificação de usuário.
            </p>
          </div>
        </section>

        <!-- Menores -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            👶 Proteção de Menores
          </h2>

          <div class="p-4 rounded-lg border border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-700">
            <p class="text-sm" :class="isDarkMode ? 'text-orange-300' : 'text-orange-700'">
              A extensão não é direcionada a menores de 13 anos e não foi feita para coletar dados desse público.
            </p>
          </div>
        </section>

        <!-- Transferência -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🌍 Transferência Internacional
          </h2>

          <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
              A extensão em si não transfere dados internacionalmente. Se você configurar um servidor de IA
              hospedado fora do Brasil, essa transferência é uma escolha e responsabilidade sua — verifique onde
              o provedor escolhido processa os dados antes de configurá-lo.
            </p>
          </div>
        </section>

        <!-- Alterações -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📝 Alterações nesta Política
          </h2>

          <p class="leading-relaxed mb-4" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            Podemos atualizar esta política periodicamente. Alterações relevantes também serão descritas nas
            notas de versão da extensão na Chrome Web Store.
          </p>

          <div class="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700">
            <p class="text-sm" :class="isDarkMode ? 'text-blue-300' : 'text-blue-700'">
              <strong>Versão atual:</strong> 1.0 - 7 de agosto de 2026
            </p>
          </div>
        </section>

        <!-- Contato -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📞 Contato e Encarregado de Dados
          </h2>

          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Encarregado de Dados (DPO)</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <strong>Email:</strong> <a href="mailto:privacidade@buscalogo.com" class="text-blue-600 hover:underline">privacidade@buscalogo.com</a><br>
                <strong>Função:</strong> Responsável por questões relacionadas à proteção de dados e LGPD
              </p>
            </div>

            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Contato Geral</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <strong>Email:</strong> <a href="mailto:contato@buscalogo.com" class="text-blue-600 hover:underline">contato@buscalogo.com</a><br>
                <strong>Website:</strong> <a href="https://buscalogo.com" class="text-blue-600 hover:underline">https://buscalogo.com</a>
              </p>
            </div>

            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-red-600">Autoridade Nacional</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Você também pode contatar a <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>
                para questões relacionadas à LGPD: <a href="https://www.gov.br/anpd" class="text-blue-600 hover:underline">www.gov.br/anpd</a>
              </p>
            </div>

            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-gray-500">Política geral do BuscaLogo</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Esta página cobre especificamente o Universal Chat Translator. Para a política do mecanismo de
                busca BuscaLogo, veja
                <router-link to="/privacidade" class="text-blue-600 hover:underline">/privacidade</router-link>.
              </p>
            </div>
          </div>
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
