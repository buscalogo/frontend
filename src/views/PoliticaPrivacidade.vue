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
        <div class="mt-4 p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700">
          <p class="text-sm" :class="isDarkMode ? 'text-blue-300' : 'text-blue-700'">
            <strong>Última atualização:</strong> 27 de agosto de 2025 - Versão 1.0
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
          
          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Dados Técnicos (Coleta Automática)</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Endereço IP (anonimizado)</li>
                <li>• Tipo de navegador e versão</li>
                <li>• Sistema operacional</li>
                <li>• Timestamp das interações</li>
                <li>• URLs acessadas (apenas domínios, não conteúdo)</li>
              </ul>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Dados de Uso (Opcional)</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Termos de busca utilizados</li>
                <li>• Preferências de configuração</li>
                <li>• Estatísticas de uso da plataforma</li>
                <li>• Logs de erro (sem dados pessoais)</li>
              </ul>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-orange-600">Dados de Contato (Apenas se fornecido)</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Endereço de email (para suporte)</li>
                <li>• Nome (opcional, para personalização)</li>
                <li>• Mensagens de contato</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Finalidades -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🎯 Finalidades do Tratamento
          </h2>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Funcionamento da Plataforma</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Processar buscas e resultados</li>
                <li>• Manter conectividade P2P</li>
                <li>• Garantir segurança técnica</li>
                <li>• Detectar e corrigir erros</li>
              </ul>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Melhoria do Serviço</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Analisar padrões de uso</li>
                <li>• Otimizar performance</li>
                <li>• Desenvolver novas funcionalidades</li>
                <li>• Personalizar experiência</li>
              </ul>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-purple-600">Suporte e Comunicação</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Responder a solicitações</li>
                <li>• Fornecer suporte técnico</li>
                <li>• Comunicar atualizações</li>
                <li>• Processar denúncias</li>
              </ul>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-red-600">Conformidade Legal</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• Cumprir obrigações legais</li>
                <li>• Cooperar com autoridades</li>
                <li>• Manter registros de auditoria</li>
                <li>• Proteger direitos de terceiros</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Base Legal -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            ⚖️ Base Legal para Tratamento
          </h2>
          
          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Execução de Contrato</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Dados necessários para fornecer os serviços da plataforma conforme os Termos de Uso.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Interesse Legítimo</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Melhoria dos serviços, segurança da plataforma e prevenção de fraudes.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-purple-600">Cumprimento de Obrigação Legal</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Manutenção de registros conforme Marco Civil da Internet e demais legislações.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-orange-600">Consentimento</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Para dados opcionais e comunicações promocionais (quando aplicável).
              </p>
            </div>
          </div>
        </section>

        <!-- Compartilhamento -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🤝 Compartilhamento de Dados
          </h2>
          
          <div class="space-y-4">
            <div class="p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-700">
              <h3 class="text-lg font-medium mb-2 text-red-700 dark:text-red-300">Não Vendemos Dados</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-red-300' : 'text-red-700'">
                <strong>Nunca vendemos, alugamos ou comercializamos seus dados pessoais</strong> 
                para terceiros por qualquer motivo.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Compartilhamento Limitado</h3>
              <p class="text-sm mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Compartilhamos dados apenas nas seguintes situações:
              </p>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• <strong>Autoridades competentes:</strong> Quando exigido por lei ou ordem judicial</li>
                <li>• <strong>Prestadores de serviço:</strong> Empresas que nos auxiliam tecnicamente (com contratos de proteção)</li>
                <li>• <strong>Proteção de direitos:</strong> Para proteger nossos direitos ou de terceiros</li>
                <li>• <strong>Emergências:</strong> Para proteger a segurança de pessoas</li>
              </ul>
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
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Direitos de Acesso</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• <strong>Acesso:</strong> Saber quais dados temos sobre você</li>
                <li>• <strong>Correção:</strong> Corrigir dados incorretos</li>
                <li>• <strong>Atualização:</strong> Atualizar dados incompletos</li>
                <li>• <strong>Portabilidade:</strong> Receber seus dados em formato legível</li>
              </ul>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Direitos de Controle</h3>
              <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <li>• <strong>Exclusão:</strong> Solicitar remoção de dados</li>
                <li>• <strong>Revogação:</strong> Retirar consentimento</li>
                <li>• <strong>Oposição:</strong> Opor-se ao tratamento</li>
                <li>• <strong>Informação:</strong> Obter informações sobre o tratamento</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-4 p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
            <h3 class="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Como Exercer Seus Direitos</h3>
            <p class="text-sm mb-2" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              Para exercer qualquer um dos seus direitos, entre em contato conosco:
            </p>
            <ul class="space-y-1 text-sm" :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
              <li>• <strong>Email:</strong> <a href="mailto:privacidade@buscalogo.com" class="text-blue-600 hover:underline">privacidade@buscalogo.com</a></li>
              <li>• <strong>Prazo de resposta:</strong> Até 15 dias úteis</li>
              <li>• <strong>Identificação:</strong> Pode ser solicitada para sua segurança</li>
              <li>• <strong>Gratuito:</strong> Exercício de direitos é sempre gratuito</li>
            </ul>
          </div>
        </section>

        <!-- Retenção -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            ⏰ Retenção de Dados
          </h2>
          
          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Dados Técnicos</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <strong>6 meses:</strong> Logs de acesso e dados técnicos para funcionamento da plataforma.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Dados de Contato</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <strong>2 anos:</strong> Emails e mensagens de suporte, ou até solicitação de exclusão.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-purple-600">Dados de Uso</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <strong>1 ano:</strong> Estatísticas anonimizadas para melhoria do serviço.
              </p>
            </div>
          </div>
        </section>

        <!-- Cookies -->
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🍪 Cookies e Tecnologias Similares
          </h2>
          
          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Cookies Essenciais</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Utilizamos apenas cookies essenciais para o funcionamento da plataforma. 
                Não utilizamos cookies de rastreamento ou publicitários.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Local Storage</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Armazenamos localmente apenas suas preferências de configuração e tema 
                (claro/escuro) para melhorar sua experiência.
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
              <strong>Versão atual:</strong> 1.0 - 27 de agosto de 2025
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
