# 🌐 Frontend BuscaLogo - Interface Web

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)

> Interface web moderna e responsiva para o BuscaLogo, construída com Vue.js 3 e Tailwind CSS.

## 🌟 Visão Geral

O frontend do BuscaLogo é uma aplicação Vue.js 3 que fornece uma interface elegante e intuitiva para busca colaborativa. Ele se conecta ao servidor de sinalização e permite que usuários façam buscas em dados coletados por extensões Chrome.

### ✨ Características

- 🔍 **Interface de Busca Inteligente** - Campo de busca com autocompletar
- 📱 **Design Responsivo** - Funciona em desktop, tablet e mobile
- 🌙 **Modo Dark/Light** - Tema adaptativo com persistência
- ⚡ **Performance Otimizada** - Vite + Vue 3 Composition API
- 🎨 **UI Moderna** - Tailwind CSS com componentes customizados
- 🔄 **Tempo Real** - Atualizações em tempo real via WebSocket

## 🚀 Início Rápido

### Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** ou **yarn**
- **Servidor de sinalização** rodando

### 1. Instalação

```bash
cd frontend
npm install
```

### 2. Configuração

Crie um arquivo `.env.local` na pasta `frontend/`:

```env
# Configurações do Frontend
VITE_APP_NAME=BuscaLogo
VITE_APP_VERSION=1.0.0

# Servidor de Sinalização
VITE_WS_SERVER_URL=ws://localhost:3001

# Configurações da Aplicação
VITE_RESULTS_PER_PAGE=10
VITE_SEARCH_TIMEOUT=30000
```

### 3. Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### 4. Build de Produção

```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
frontend/
├── 📁 public/              # Arquivos estáticos
│   ├── favicon.ico
│   └── assets/
├── 📁 src/                 # Código fonte
│   ├── 📁 components/      # Componentes Vue
│   │   ├── Home.vue        # Página principal
│   │   └── ...
│   ├── 📁 views/           # Páginas da aplicação
│   │   ├── InstalarExtensao.vue
│   │   ├── SobreSistema.vue
│   │   └── TermosResponsabilidade.vue
│   ├── 📁 assets/          # Recursos estáticos
│   │   ├── img/            # Imagens
│   │   └── css/            # Estilos customizados
│   ├── App.vue             # Componente raiz
│   ├── main.js             # Ponto de entrada
│   ├── router.js           # Configuração de rotas
│   ├── p2p-client.js       # Cliente P2P
│   └── style.css           # Estilos globais
├── index.html              # HTML principal
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração Vite
├── tailwind.config.js      # Configuração Tailwind
├── postcss.config.js       # Configuração PostCSS
└── README.md               # Este arquivo
```

## 🛠️ Tecnologias

### Core
- **Vue.js 3** - Framework progressivo JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **Vue Router 4** - Roteamento client-side

### UI/UX
- **Tailwind CSS** - Framework CSS utilitário
- **PostCSS** - Processamento CSS avançado
- **Autoprefixer** - Prefixos CSS automáticos

### Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação automática
- **Hot Module Replacement** - Recarregamento automático

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Verificar qualidade do código
npm run lint:fix     # Corrigir problemas automaticamente

# Análise
npm run analyze      # Analisar bundle (se configurado)
```

## 🎨 Sistema de Design

### Cores

```css
/* Cores principais */
--color-primary: #3B82F6;      /* Blue 500 */
--color-secondary: #8B5CF6;     /* Violet 500 */
--color-accent: #10B981;        /* Emerald 500 */

/* Modo claro */
--color-bg: #FFFFFF;
--color-text: #1F2937;
--color-surface: #F9FAFB;

/* Modo escuro */
--color-bg-dark: #111827;
--color-text-dark: #F9FAFB;
--color-surface-dark: #1F2937;
```

### Tipografia

```css
/* Hierarquia de texto */
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
```

### Componentes

O frontend utiliza um sistema de componentes baseado em:

- **Atomic Design** - Átomos, moléculas, organismos
- **Composition API** - Lógica reutilizável
- **Props/Emits** - Comunicação entre componentes
- **Slots** - Injeção de conteúdo

## 🔌 Integração com Backend

### WebSocket

```javascript
// Conexão com servidor de sinalização
const ws = new WebSocket('ws://localhost:3001')

// Eventos principais
ws.onopen = () => console.log('Conectado ao servidor')
ws.onmessage = (event) => handleServerMessage(event.data)
ws.onclose = () => console.log('Desconectado do servidor')
```

### P2P Client

```javascript
// Cliente P2P para comunicação com extensões
import P2PClient from './p2p-client.js'

const p2pClient = new P2PClient()
await p2pClient.connect()

// Busca em peers conectados
const results = await p2pClient.search('termo de busca')
```

## 📱 Responsividade

### Breakpoints

```css
/* Tailwind CSS breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### Estratégias

- **Mobile First** - Design começa no mobile
- **Flexbox/Grid** - Layouts flexíveis e adaptativos
- **Imagens responsivas** - Otimizadas para cada dispositivo
- **Touch friendly** - Elementos adequados para toque

## 🌙 Modo Dark

### Implementação

```javascript
// Estado do tema
const isDarkMode = ref(false)

// Toggle do tema
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('buscalogo-theme', isDarkMode.value ? 'dark' : 'light')
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
```

### Persistência

- **localStorage** - Salva preferência do usuário
- **System preference** - Detecta preferência do sistema
- **Auto-switch** - Muda automaticamente com o sistema

## 🧪 Testes

### Estrutura de Testes

```bash
# Instalar dependências de teste
npm install --save-dev @vue/test-utils @testing-library/vue jest

# Executar testes
npm run test              # Todos os testes
npm run test:unit         # Testes unitários
npm run test:integration  # Testes de integração
npm run test:coverage     # Cobertura de testes
```

### Exemplo de Teste

```javascript
import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  it('renders search input', () => {
    const wrapper = mount(Home)
    expect(wrapper.find('input[placeholder="Digite sua busca..."]').exists()).toBe(true)
  })
  
  it('performs search when enter is pressed', async () => {
    const wrapper = mount(Home)
    const input = wrapper.find('input')
    
    await input.setValue('teste')
    await input.trigger('keyup.enter')
    
    expect(wrapper.vm.isSearching).toBe(true)
  })
})
```

## 📊 Performance

### Otimizações

- **Code Splitting** - Carregamento lazy de componentes
- **Tree Shaking** - Remoção de código não utilizado
- **Minificação** - Compressão de código em produção
- **Gzip/Brotli** - Compressão de assets
- **CDN** - Distribuição global de assets

### Métricas

```javascript
// Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

## 🔒 Segurança

### Boas Práticas

- **HTTPS** - Comunicação criptografada
- **CSP** - Content Security Policy
- **XSS Protection** - Prevenção de ataques XSS
- **CSRF Protection** - Proteção contra CSRF
- **Input Validation** - Validação de entrada

### Configurações

```javascript
// Vite config de segurança
export default defineConfig({
  server: {
    https: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    }
  }
})
```

## 🚀 Deploy

### Build de Produção

```bash
# Build otimizado
npm run build

# Preview local
npm run preview

# Deploy para produção
npm run deploy
```

### Plataformas

- **Vercel** - Deploy automático do Git
- **Netlify** - Deploy com preview
- **GitHub Pages** - Deploy gratuito
- **AWS S3** - Hosting estático
- **Nginx** - Servidor próprio

## 🐛 Troubleshooting

### Problemas Comuns

#### Build falha
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install

# Verificar versão do Node
node --version  # Deve ser 18+
```

#### Hot reload não funciona
```bash
# Verificar configuração Vite
# Verificar firewall/antivírus
# Reiniciar servidor de desenvolvimento
```

#### Estilos não carregam
```bash
# Verificar Tailwind CSS
npm run build:css

# Verificar PostCSS
npx postcss src/style.css -o dist/style.css
```

## 🤝 Contribuição

### Diretrizes

1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie** uma branch para sua feature
4. **Desenvolva** seguindo padrões do projeto
5. **Teste** suas mudanças
6. **Commit** com mensagens convencionais
7. **Push** para sua branch
8. **Abra** um Pull Request

### Padrões de Código

- **ESLint** - Regras de qualidade
- **Prettier** - Formatação automática
- **Vue Style Guide** - Padrões Vue.js
- **Conventional Commits** - Mensagens de commit

## 📚 Recursos Adicionais

- **[Vue.js 3 Documentation](https://vuejs.org/)**
- **[Vite Documentation](https://vitejs.dev/)**
- **[Tailwind CSS Documentation](https://tailwindcss.com/)**
- **[Vue Router Documentation](https://router.vuejs.org/)**

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/buscalogo/buscalogo.com/issues)
- **Discussions**: [GitHub Discussions](https://github.com/buscalogo/buscalogo.com/discussions)
- **Email**: contato@buscalogo.com

---

**🚀 O frontend do BuscaLogo oferece uma experiência de busca moderna e intuitiva!**
