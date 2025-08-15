<template>
  <div class="container mx-auto px-4 py-8">
    <main class="max-w-4xl mx-auto">
      <!-- Cabeçalho da Página -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4" :class="isDarkMode ? 'text-gray-100' : 'text-gray-800'">
          Termos de Responsabilidade
        </h1>
        <p class="text-lg" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
          Leia atentamente os termos de uso e responsabilidade da plataforma
        </p>
      </div>

      <!-- Conteúdo Principal -->
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📋 Aceitação dos Termos
          </h2>
          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            Ao utilizar o BuscaLogo, você concorda com estes termos de responsabilidade. 
            Se não concordar com qualquer parte destes termos, não deve usar nossa plataforma.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🔒 Uso Responsável
          </h2>
          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-blue-600">Conteúdo Apropriado</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Você é responsável por todo o conteúdo que captura e compartilha através da extensão. 
                Não é permitido o uso para capturar conteúdo ilegal, ofensivo ou que viole direitos autorais.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-green-600">Respeito à Privacidade</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Respeite a privacidade de outros usuários e não tente acessar informações pessoais 
                ou confidenciais através da plataforma.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-orange-600">Uso Não Comercial</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                O BuscaLogo é destinado ao uso pessoal e educacional. Não é permitido o uso 
                comercial sem autorização expressa.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            ⚠️ Limitações de Responsabilidade
          </h2>
          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-red-600">Conteúdo de Terceiros</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                O BuscaLogo não é responsável pelo conteúdo capturado pelos usuários. 
                Cada usuário é responsável pela verificação e validação das informações que compartilha.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-yellow-600">Disponibilidade do Serviço</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                O serviço é fornecido "como está" sem garantias de disponibilidade contínua. 
                Podemos interromper ou modificar o serviço a qualquer momento.
              </p>
            </div>
            
            <div class="p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <h3 class="text-lg font-medium mb-2 text-purple-600">Limitação de Danos</h3>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                Em nenhuma circunstância o BuscaLogo será responsável por danos diretos, 
                indiretos, incidentais ou consequenciais decorrentes do uso da plataforma.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            🛡️ Segurança e Privacidade
          </h2>
          <p class="leading-relaxed mb-4" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            Embora implementemos medidas de segurança para proteger sua privacidade, 
            nenhum sistema é 100% seguro. Você deve tomar precauções adicionais para 
            proteger suas informações pessoais.
          </p>
          <ul class="space-y-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Mantenha sua extensão atualizada</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Não compartilhe informações sensíveis</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Use conexões seguras quando possível</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Reporte comportamentos suspeitos</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📝 Modificações dos Termos
          </h2>
          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. 
            As modificações entrarão em vigor imediatamente após sua publicação. 
            É sua responsabilidade revisar periodicamente os termos para estar 
            ciente de quaisquer alterações.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📞 Contato
          </h2>
          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            Se você tiver dúvidas sobre estes termos ou precisar de esclarecimentos, 
            entre em contato conosco através do email: 
            <a href="mailto:contato@buscalogo.com" class="text-blue-600 hover:underline">contato@buscalogo.com</a>
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4" :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'">
            📅 Data de Vigência
          </h2>
          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
            Estes termos entram em vigor a partir de 1º de janeiro de 2024 e 
            permanecem válidos até que sejam modificados ou revogados.
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
