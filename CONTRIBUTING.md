# 🤝 Guia de Contribuição - BuscaLogo

> **Obrigado por considerar contribuir com o BuscaLogo!** 🚀
> 
> Este documento fornece diretrizes completas e informações para contribuidores de todos os níveis.

## 🌟 **Como Contribuir**

### **1. Preparação Inicial**

```bash
# 1. Fork o projeto no GitHub
# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/buscalogo.com.git
cd buscalogo.com

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/buscalogo/buscalogo.com.git

# 4. Instale dependências
npm run install:all
```

### **2. Criação de Branch**

```bash
# Crie uma branch para sua feature/fix
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
# ou
git checkout -b docs/atualizacao-documentacao
# ou
git checkout -b test/novos-testes
```

### **3. Desenvolvimento e Testes**

```bash
# Desenvolvimento
npm run dev                    # Inicia todos os serviços
npm run dev:frontend          # Apenas frontend
npm run dev:server            # Apenas servidor

# Testes e Qualidade
npm run test                  # Executa todos os testes
npm run lint                  # Verifica qualidade do código
npm run lint:fix             # Corrige problemas automaticamente
npm run build                # Build de produção
```

### **4. Commit e Push**

```bash
# Adicione suas mudanças
git add .

# Faça commit seguindo convenções
git commit -m "feat: adiciona nova funcionalidade de busca"

# Push para sua branch
git push origin feature/nova-funcionalidade
```

### **5. Pull Request**

1. Vá para o repositório original no GitHub
2. Clique em "New Pull Request"
3. Selecione sua branch
4. Preencha o template de PR
5. Aguarde review e feedback

---

## 📋 **Diretrizes de Contribuição**

### **Padrões de Código**

#### **JavaScript/TypeScript**
- **ESLint** - Regras de qualidade configuradas
- **Prettier** - Formatação automática
- **ES2022+** - Use recursos modernos do JavaScript
- **Módulos ES** - Use `import/export` em vez de `require`
- **Async/Await** - Prefira promises modernas

#### **Vue.js 3**
- **Composition API** - Prefira `setup()` e `ref()/reactive()`
- **Script Setup** - Use `<script setup>` quando possível
- **Props/Emits** - Comunicação clara entre componentes
- **Vue Style Guide** - Siga as convenções oficiais
- **TypeScript** - Use tipos quando possível

#### **CSS/Tailwind**
- **Tailwind CSS** - Use classes utilitárias
- **Componentes** - Crie componentes reutilizáveis
- **Responsivo** - Design mobile-first
- **Modo Dark** - Suporte a tema escuro
- **Customização** - Use `@apply` para componentes complexos

#### **Chrome Extension**
- **Manifest V3** - Use a versão mais recente
- **Service Workers** - Para background scripts
- **Content Scripts** - Para manipulação de páginas
- **Storage API** - Para persistência de dados

### **Estrutura de Commits**

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### **Tipos de Commit**

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação, ponto e vírgula, etc.
- **refactor**: Refatoração de código
- **test**: Adição de testes
- **chore**: Tarefas de build, dependências, etc.

#### **Exemplos**

```bash
feat(search): adiciona filtros avançados de busca
fix(extension): corrige problema de permissões no Chrome
docs(readme): atualiza instruções de instalação
style(ui): ajusta espaçamento dos componentes
refactor(api): simplifica lógica de validação
test(unit): adiciona testes para utilitários
chore(deps): atualiza dependências para versões mais recentes
```

---

## 🏗️ **Arquitetura do Projeto**

### **Estrutura de Diretórios**

```
buscalogo.com/
├── .github/profile/          # Perfil da organização
├── frontend/                 # Interface web Vue 3
├── extension/                # Extensão Chrome
├── desktop-app/              # Aplicativo desktop Electron
├── server/                   # Servidor de sinalização P2P
├── docs/                     # Documentação
└── scripts/                  # Scripts de automação
```

### **Tecnologias Principais**

- **Frontend**: Vue 3 + Vite + Tailwind CSS
- **Extension**: Chrome Extension API (Manifest V3)
- **Desktop**: Electron + Node.js
- **Backend**: Node.js + WebSocket + WebRTC
- **Storage**: IndexedDB + Local Storage

---

## 🧪 **Testes**

### **Executando Testes**

```bash
# Todos os testes
npm run test

# Testes específicos
npm run test:unit            # Testes unitários
npm run test:integration     # Testes de integração
npm run test:coverage        # Cobertura de testes
npm run test:watch           # Modo watch
```

### **Escrevendo Testes**

- **Unitários**: Teste funções individuais
- **Integração**: Teste interação entre componentes
- **E2E**: Teste fluxos completos do usuário
- **Performance**: Teste de velocidade e memória

---

## 📚 **Documentação**

### **Padrões de Documentação**

- **README**: Visão geral do projeto
- **API Docs**: Documentação de endpoints
- **Component Docs**: Documentação de componentes
- **Guia de Usuário**: Instruções de uso
- **Changelog**: Histórico de mudanças

### **Idiomas**

- **Inglês**: Idioma principal
- **Português**: Tradução brasileira
- **Espanhol**: Tradução latina

---

## 🐛 **Reportando Bugs**

### **Template de Bug Report**

```markdown
## Descrição do Bug
Descrição clara e concisa do problema.

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role para baixo até '...'
4. Veja o erro

## Comportamento Esperado
O que deveria acontecer.

## Comportamento Atual
O que está acontecendo.

## Screenshots
Se aplicável, adicione screenshots.

## Ambiente
- OS: [ex: Windows 10, macOS 11]
- Browser: [ex: Chrome 91, Firefox 89]
- Versão: [ex: 1.0.0]

## Informações Adicionais
Qualquer contexto adicional sobre o problema.
```

---

## 💡 **Solicitando Features**

### **Template de Feature Request**

```markdown
## Resumo da Feature
Descrição clara e concisa da funcionalidade desejada.

## Problema que Resolve
Explicação de como esta feature resolve um problema existente.

## Solução Proposta
Descrição da solução que você gostaria de ver implementada.

## Alternativas Consideradas
Outras soluções que você considerou.

## Contexto Adicional
Qualquer contexto adicional, screenshots, ou exemplos.
```

---

## 🔧 **Configuração de Desenvolvimento**

### **Requisitos**

- **Node.js**: 18.0.0 ou superior
- **npm**: 8.0.0 ou superior
- **Git**: 2.20.0 ou superior
- **Chrome**: 88+ (para extensão)

### **Variáveis de Ambiente**

```bash
# .env.local
NODE_ENV=development
PORT=3000
VITE_API_URL=http://localhost:3001
VITE_WS_URL=ws://localhost:3001
```

### **Scripts Disponíveis**

```bash
# Desenvolvimento
npm run dev                    # Inicia todos os serviços
npm run dev:frontend          # Apenas frontend
npm run dev:server            # Apenas servidor
npm run dev:extension         # Build da extensão em modo dev

# Build
npm run build                 # Build de produção
npm run build:frontend        # Build do frontend
npm run build:extension       # Build da extensão

# Qualidade
npm run lint                  # Verifica código
npm run lint:fix             # Corrige problemas
npm run test                 # Executa testes
npm run test:coverage        # Cobertura de testes

# Utilitários
npm run clean                # Limpa node_modules
npm run install:all          # Instala todas as dependências
```

---

## 🌍 **Internacionalização**

### **Traduções**

- Mantenha consistência entre idiomas
- Use variáveis para textos dinâmicos
- Teste em diferentes idiomas
- Considere diferenças culturais

### **Estrutura de Arquivos**

```
locales/
├── en.json                   # Inglês (padrão)
├── pt-BR.json               # Português brasileiro
└── es.json                  # Espanhol
```

---

## 🚀 **Deploy e Release**

### **Processo de Release**

1. **Desenvolvimento** em branch feature
2. **Testes** e validação
3. **Merge** para main
4. **Build** de produção
5. **Deploy** automático
6. **Tag** da versão

### **Versionamento**

- **Semantic Versioning** (MAJOR.MINOR.PATCH)
- **Changelog** atualizado
- **Release Notes** detalhados
- **Breaking Changes** documentados

---

## 🤝 **Comunidade**

### **Canais de Comunicação**

- **Discord**: [https://discord.gg/AJjDJUc8bn](https://discord.gg/AJjDJUc8bn)
- **Telegram**: [https://t.me/buscalogo](https://t.me/buscalogo)
- **GitHub Issues**: Para bugs e features
- **GitHub Discussions**: Para discussões gerais
- **Email**: contato@buscalogo.com

### **Código de Conduta**

- **Respeito**: Trate todos com respeito
- **Inclusão**: Seja acolhedor com novos contribuidores
- **Colaboração**: Trabalhe em equipe
- **Construtivo**: Feedback construtivo e útil

---

## 🙏 **Agradecimentos**

Obrigado a todos os contribuidores que tornam o BuscaLogo possível!

---

## 📄 **Licença**

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**🚀 Juntos, estamos construindo o futuro da busca colaborativa!**
