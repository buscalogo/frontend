<template>
  <div class="container mx-auto px-4 py-8">
    <main class="max-w-4xl mx-auto">
      <!-- Cabeçalho da Página -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4" :class="isDarkMode ? 'text-gray-100' : 'text-gray-800'">
          Política de Privacidade
        </h1>
        <p class="text-lg" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
          Como coletamos, usamos e protegemos suas informações pessoais
        </p>
        <div class="mt-4 p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
          <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
            <strong>Importante:</strong> O BuscaLogo não coleta dados pessoais identificáveis dos usuários. 
            Não há necessidade de cadastro e não utilizamos cookies de rastreamento.
          </p>
        </div>
        <div class="mt-4 p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700">
          <p class="text-sm" :class="isDarkMode ? 'text-blue-300' : 'text-blue-700'">
            <strong>Última atualização:</strong> 27 de agosto de 2025 - Versão 2.0
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
            Esta Política de Privacidade descreve como o BuscaLogo ("nós", "nosso" ou "plataforma") 
            coleta, usa, armazena e protege suas informações pessoais em conformidade com a 
            <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e demais 
            legislações aplicáveis.
          </p>
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              <strong>Nosso compromisso:</strong> Respeitamos sua privacidade e coletamos apenas 
              os dados mínimos necessários para o funcionamento da plataforma.
            </p>
          </div>
        </section>

        <!-- Dados Coletados -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📊 Dados Coletados
          </h2>
          
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Nenhum Dado Pessoal Coletado</h3>
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              O BuscaLogo <strong>não coleta dados pessoais identificáveis</strong> dos usuários. 
              Não há necessidade de cadastro, login ou fornecimento de informações pessoais para usar a plataforma.
            </p>
          </div>
          
          <div class="space-y-4 mt-6">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-amber-600">Sistema de Denúncia (Única Coleta)</h3>
              <p class="text-sm mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                A única coleta de dados ocorre quando um usuário reporta um link através do sistema de denúncia:
              </p>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• <strong>IP público</strong> (criptografado)</li>
                <li>• <strong>Data e hora</strong> da denúncia (criptografado)</li>
                <li>• <strong>URL reportada</strong> (para moderação)</li>
              </ul>
              <p class="text-sm mt-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <strong>Importante:</strong> Esses dados são criptografados e utilizados apenas para moderação. 
                Nenhuma informação pessoal ou sensível é coletada ou armazenada.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-purple-600">Futuro Cadastro Local</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Em versões futuras, caso o recurso de cadastro seja habilitado, todos os dados do usuário 
                (histórico, favoritos, preferências) ficarão armazenados <strong>apenas no dispositivo 
                do usuário (local storage)</strong>. O servidor do BuscaLogo não terá acesso a esses dados.
              </p>
            </div>
          </div>
        </section>

        <!-- Finalidades -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🎯 Finalidades do Tratamento
          </h2>
          
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Sem Tratamento de Dados Pessoais</h3>
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              Como não coletamos dados pessoais identificáveis, não há tratamento de dados pessoais na plataforma BuscaLogo.
            </p>
          </div>
          
          <div class="space-y-4 mt-6">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-amber-600">Sistema de Denúncia</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Os dados coletados no sistema de denúncia (IP, data, hora) são utilizados <strong>exclusivamente para moderação</strong> 
                da plataforma, garantindo que conteúdo inadequado seja identificado e removido quando necessário.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Funcionamento da Plataforma</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                A plataforma funciona de forma descentralizada, processando buscas sem armazenar dados pessoais dos usuários. 
                Todas as operações são realizadas localmente no dispositivo do usuário.
              </p>
            </div>
          </div>
        </section>

        <!-- Base Legal -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            ⚖️ Base Legal para Tratamento
          </h2>
          
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Não Aplicável</h3>
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              Como não coletamos dados pessoais identificáveis, não há necessidade de base legal para tratamento de dados pessoais.
            </p>
          </div>
          
          <div class="space-y-4 mt-6">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-amber-600">Sistema de Denúncia</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                A coleta de dados no sistema de denúncia é baseada no <strong>interesse legítimo</strong> 
                de moderar a plataforma e proteger os usuários de conteúdo inadequado.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Marco Civil da Internet</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Cumprimento de obrigações legais conforme Marco Civil da Internet para 
                cooperação com autoridades competentes quando necessário.
              </p>
            </div>
          </div>
        </section>

        <!-- Compartilhamento -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🤝 Compartilhamento de Dados
          </h2>
          
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Não Compartilhamos Dados</h3>
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              Como não coletamos dados pessoais identificáveis, não há dados para compartilhar com terceiros.
            </p>
          </div>
          
          <div class="space-y-4 mt-6">
            <div class="p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-700">
              <h3 class="text-lg font-medium mb-2 text-red-700 dark:text-red-300">Nunca Vendemos Dados</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-red-300' : 'text-red-700'">
                <strong>Nunca vendemos, alugamos ou comercializamos dados</strong> para terceiros por qualquer motivo.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-amber-600">Sistema de Denúncia</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Os dados coletados no sistema de denúncia (IP, data, hora) <strong>não são compartilhados</strong> 
                com terceiros, exceto em cumprimento de ordens judiciais válidas conforme a legislação brasileira.
              </p>
            </div>
          </div>
        </section>

        <!-- Segurança -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🔒 Medidas de Segurança
          </h2>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Segurança Técnica</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Criptografia de dados em trânsito</li>
                <li>• Anonimização de IPs</li>
                <li>• Logs de auditoria</li>
                <li>• Monitoramento de segurança</li>
              </ul>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Controles Organizacionais</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Acesso restrito aos dados</li>
                <li>• Treinamento da equipe</li>
                <li>• Políticas internas</li>
                <li>• Revisões periódicas</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-4 p-4 rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700">
            <p class="text-sm" :class="isDarkMode ? 'text-yellow-300' : 'text-yellow-700'">
              <strong>Importante:</strong> Nenhum sistema é 100% seguro. Em caso de incidente de segurança, 
              notificaremos as autoridades competentes e os afetados conforme a LGPD.
            </p>
          </div>
        </section>

        <!-- Direitos do Titular -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            👤 Seus Direitos
          </h2>
          
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Máxima Privacidade</h3>
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              Como não coletamos dados pessoais identificáveis, você já tem <strong>máxima privacidade</strong> 
              ao usar o BuscaLogo. Não há dados pessoais para acessar, corrigir ou excluir.
            </p>
          </div>
          
          <div class="space-y-4 mt-6">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-amber-600">Sistema de Denúncia</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Se você realizou uma denúncia e deseja informações sobre os dados coletados 
                (IP, data, hora), pode entrar em contato conosco para esclarecimentos.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Contato</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Para qualquer questão relacionada à privacidade: 
                <a href="mailto:privacidade@buscalogo.com" class="text-blue-600 hover:underline">privacidade@buscalogo.com</a>
              </p>
            </div>
          </div>
        </section>

        <!-- Retenção -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            ⏰ Retenção de Dados
          </h2>
          
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Não Retemos Dados Pessoais</h3>
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              Como não coletamos dados pessoais identificáveis, não há dados pessoais para reter.
            </p>
          </div>
          
          <div class="space-y-4 mt-6">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-amber-600">Sistema de Denúncia</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Os dados coletados no sistema de denúncia (IP, data, hora) são mantidos por 
                <strong>6 meses</strong> para fins de moderação, após o que são automaticamente excluídos.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-purple-600">Futuro Cadastro Local</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Em versões futuras, os dados do usuário ficarão armazenados apenas no dispositivo local, 
                sem retenção no servidor do BuscaLogo.
              </p>
            </div>
          </div>
        </section>

        <!-- Cookies -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🍪 Cookies e Tecnologias Similares
          </h2>
          
          <div class="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Não Utilizamos Cookies</h3>
            <p class="text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              O BuscaLogo <strong>não utiliza cookies de rastreamento ou publicitários</strong>. 
              Não há necessidade de banner de consentimento de cookies.
            </p>
          </div>
          
          <div class="space-y-4 mt-6">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Local Storage (Futuro)</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Em versões futuras, apenas suas preferências de configuração e tema 
                (claro/escuro) serão armazenadas localmente no seu dispositivo, 
                sem envio para nossos servidores.
              </p>
            </div>
          </div>
        </section>

        <!-- Menores -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            👶 Proteção de Menores
          </h2>
          
          <div class="p-4 rounded-lg border border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-700">
            <p class="text-sm" :class="isDarkMode ? 'text-orange-300' : 'text-orange-700'">
              <strong>Importante:</strong> Nossa plataforma não coleta intencionalmente dados de menores de 18 anos. 
              Se identificarmos que coletamos dados de um menor, tomaremos medidas para excluí-los 
              imediatamente. Pais ou responsáveis podem entrar em contato conosco para exercer 
              os direitos dos menores.
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
              <strong>Armazenamento Local:</strong> Todos os dados são processados e armazenados no Brasil. 
              Não realizamos transferência internacional de dados pessoais, exceto quando 
              tecnicamente necessário para o funcionamento da plataforma e sempre com 
              garantias adequadas de proteção.
            </p>
          </div>
        </section>

        <!-- Alterações -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📝 Alterações nesta Política
          </h2>
          
          <p class="leading-relaxed mb-4" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            Podemos atualizar esta Política de Privacidade periodicamente. Alterações significativas 
            serão comunicadas através da plataforma ou por email (quando disponível). 
            Recomendamos revisar esta política regularmente.
          </p>
          
          <div class="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700">
            <p class="text-sm" :class="isDarkMode ? 'text-blue-300' : 'text-blue-700'">
              <strong>Versão atual:</strong> 2.0 - 27 de agosto de 2025
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
