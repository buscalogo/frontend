# 🌐 BuscaLogo Frontend - Web Interface

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![Language](https://img.shields.io/badge/language-EN-blue.svg)](README.md)
[![Language](https://img.shields.io/badge/language-PT-blue.svg)](README_PT.md)
[![Language](https://img.shields.io/badge/language-ES-blue.svg)](README_ES.md)

> Modern and responsive web interface for BuscaLogo, built with Vue.js 3 and Tailwind CSS.

## 🌟 Overview

The BuscaLogo frontend is a Vue.js 3 application that provides an elegant and intuitive interface for collaborative search. It connects to the signaling server and allows users to search through data collected by Chrome extensions.

### ✨ Features

- 🔍 **Intelligent Search Interface** - Search field with autocomplete
- 📱 **Responsive Design** - Works on desktop, tablet and mobile
- 🌙 **Dark/Light Mode** - Adaptive theme with persistence
- ⚡ **Optimized Performance** - Vite + Vue 3 Composition API
- 🎨 **Modern UI** - Tailwind CSS with custom components
- 🔄 **Real-time** - Real-time updates via WebSocket

## 🖥️ BuscaLogo Desktop

In addition to the web interface, BuscaLogo offers a powerful desktop application that provides enhanced scraping capabilities and offline functionality.

### 🚀 Latest Release: v1.1.9

#### 📦 Downloads

**Linux**
- **AppImage (64-bit)**: [BuscaLogo-1.1.0.AppImage](https://github.com/buscalogo/desktop-app/releases/download/v1.1.9/BuscaLogo-1.1.0.AppImage)

**Windows**
- **Installer (64-bit)**: [BuscaLogo-1.1.0.exe](https://github.com/buscalogo/desktop-app/releases/download/v1.1.9/BuscaLogo-1.1.0.exe)

**macOS**
- **DMG (Intel + Apple Silicon)**: [BuscaLogo-1.1.0.dmg](https://github.com/buscalogo/desktop-app/releases/download/v1.1.9/BuscaLogo-1.1.0.dmg)

#### 🔧 Installation

**Linux**
```bash
chmod +x BuscaLogo-1.1.0.AppImage
./BuscaLogo-1.1.0.AppImage
```

**Windows**
Execute the `.exe` file and follow the installer instructions.

**macOS**
Open the `.dmg` file and drag BuscaLogo to the Applications folder.

#### ✨ Desktop Features

- 🕷️ **Advanced Web Scraping** - More powerful than browser extensions
- 💾 **Offline Mode** - Work without internet connection
- 🔍 **Enhanced Search** - Advanced filtering and analysis tools
- 📊 **Data Export** - Export results in multiple formats
- 🚀 **Performance** - Native application performance
- 🔒 **Privacy** - Local data processing

#### 📋 Changelog & Support

- **Full Changelog**: [CHANGELOG.md](https://github.com/buscalogo/desktop-app/blob/main/CHANGELOG.md)
- **Report Issues**: [GitHub Issues](https://github.com/buscalogo/desktop-app/issues)
- **Contributing**: [CONTRIBUTING.md](https://github.com/buscalogo/desktop-app/blob/main/CONTRIBUTING.md)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**
- **Signaling server** running

### 1. Installation

```bash
cd frontend
npm install
```

### 2. Configuration

Create a `.env.local` file in the `frontend/` folder:

```env
# Frontend Configuration
VITE_APP_NAME=BuscaLogo
VITE_APP_VERSION=1.0.0

# Signaling Server
VITE_WS_SERVER_URL=ws://localhost:3001

# Application Settings
VITE_RESULTS_PER_PAGE=10
VITE_SEARCH_TIMEOUT=30000
```

### 3. Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
frontend/
├── 📁 public/              # Static files
│   ├── favicon.ico
│   └── assets/
├── 📁 src/                 # Source code
│   ├── 📁 components/      # Vue components
│   │   ├── Home.vue        # Main page
│   │   └── ...
│   ├── 📁 views/           # Application pages
│   │   ├── InstalarExtensao.vue
│   │   ├── SobreSistema.vue
│   │   └── TermosResponsabilidade.vue
│   ├── 📁 assets/          # Static resources
│   │   ├── img/            # Images
│   │   └── css/            # Custom styles
│   ├── App.vue             # Root component
│   ├── main.js             # Entry point
│   ├── router.js           # Route configuration
│   ├── p2p-client.js       # P2P client
│   └── style.css           # Global styles
├── index.html              # Main HTML
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## 🛠️ Technologies

### Core
- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Ultra-fast build tool and dev server
- **Vue Router 4** - Client-side routing

### UI/UX
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - Advanced CSS processing
- **Autoprefixer** - Automatic CSS prefixes

### Development
- **ESLint** - Code linting
- **Prettier** - Automatic formatting
- **Hot Module Replacement** - Automatic reloading

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Build preview
npm run lint         # Check code quality
npm run lint:fix     # Fix problems automatically

# Analysis
npm run analyze      # Analyze bundle (if configured)
```

## 🎨 Design System

### Colors

```css
/* Primary colors */
--color-primary: #3B82F6;      /* Blue 500 */
--color-secondary: #8B5CF6;     /* Violet 500 */
--color-accent: #10B981;        /* Emerald 500 */

/* Light mode */
--color-bg: #FFFFFF;
--color-text: #1F2937;
--color-surface: #F9FAFB;

/* Dark mode */
--color-bg-dark: #111827;
--color-text-dark: #F9FAFB;
--color-surface-dark: #1F2937;
```

### Typography

```css
/* Text hierarchy */
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
```

### Components

The frontend uses a component system based on:

- **Atomic Design** - Atoms, molecules, organisms
- **Composition API** - Reusable logic
- **Props/Emits** - Component communication
- **Slots** - Content injection

## 🔌 Backend Integration

### WebSocket

```javascript
// Connection to signaling server
const ws = new WebSocket('ws://localhost:3001')

// Main events
ws.onopen = () => console.log('Connected to server')
ws.onmessage = (event) => handleServerMessage(event.data)
ws.onclose = () => console.log('Disconnected from server')
```

### P2P Client

```javascript
// P2P client for communication with extensions
import P2PClient from './p2p-client.js'

const p2pClient = new P2PClient()
await p2pClient.connect()

// Search in connected peers
const results = await p2pClient.search('search term')
```

## 📱 Responsiveness

### Breakpoints

```css
/* Tailwind CSS breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### Strategies

- **Mobile First** - Design starts on mobile
- **Flexbox/Grid** - Flexible and adaptive layouts
- **Responsive images** - Optimized for each device
- **Touch friendly** - Elements suitable for touch

## 🌙 Dark Mode

### Implementation

```javascript
// Theme state
const isDarkMode = ref(false)

// Theme toggle
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

### Persistence

- **localStorage** - Saves user preference
- **System preference** - Detects system preference
- **Auto-switch** - Automatically changes with system

## 🧪 Testing

### Test Structure

```bash
# Install test dependencies
npm install --save-dev @vue/test-utils @testing-library/vue jest

# Run tests
npm run test              # All tests
npm run test:unit         # Unit tests
npm run test:integration  # Integration tests
npm run test:coverage     # Test coverage
```

### Test Example

```javascript
import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  it('renders search input', () => {
    const wrapper = mount(Home)
    expect(wrapper.find('input[placeholder="Type your search..."]').exists()).toBe(true)
  })
  
  it('performs search when enter is pressed', async () => {
    const wrapper = mount(Home)
    const input = wrapper.find('input')
    
    await input.setValue('test')
    await input.trigger('keyup.enter')
    
    expect(wrapper.vm.isSearching).toBe(true)
  })
})
```

## 📊 Performance

### Optimizations

- **Code Splitting** - Lazy loading of components
- **Tree Shaking** - Removal of unused code
- **Minification** - Code compression in production
- **Gzip/Brotli** - Asset compression
- **CDN** - Global asset distribution

### Metrics

```javascript
// Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

## 🔒 Security

### Best Practices

- **HTTPS** - Encrypted communication
- **CSP** - Content Security Policy
- **XSS Protection** - XSS attack prevention
- **CSRF Protection** - CSRF protection
- **Input Validation** - Input validation

### Configurations

```javascript
// Vite security config
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

### Production Build

```bash
# Optimized build
npm run build

# Local preview
npm run preview

# Deploy to production
npm run deploy
```

### Platforms

- **Vercel** - Automatic Git deployment
- **Netlify** - Deployment with preview
- **GitHub Pages** - Free deployment
- **AWS S3** - Static hosting
- **Nginx** - Own server

## 🐛 Troubleshooting

### Common Issues

#### Build fails
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version  # Should be 18+
```

#### Hot reload doesn't work
```bash
# Check Vite configuration
# Check firewall/antivirus
# Restart development server
```

#### Styles don't load
```bash
# Check Tailwind CSS
npm run build:css

# Check PostCSS
npx postcss src/style.css -o dist/style.css
```

## 🤝 Contributing

### Guidelines

1. **Fork** the project
2. **Clone** your fork
3. **Create** a branch for your feature
4. **Develop** following project standards
5. **Test** your changes
6. **Commit** with conventional messages
7. **Push** to your branch
8. **Open** a Pull Request

### Code Standards

- **ESLint** - Code quality rules
- **Prettier** - Automatic formatting
- **Vue Style Guide** - Vue.js standards
- **Conventional Commits** - Commit messages

## 📚 Additional Resources

- **[Vue.js 3 Documentation](https://vuejs.org/)**
- **[Vite Documentation](https://vitejs.dev/)**
- **[Tailwind CSS Documentation](https://tailwindcss.com/)**
- **[Vue Router Documentation](https://router.vuejs.org/)**

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/buscalogo/buscalogo.com/issues)
- **Discussions**: [GitHub Discussions](https://github.com/buscalogo/buscalogo.com/discussions)
- **Email**: contato@buscalogo.com
- **Community**: [Discord](https://discord.gg/AJjDJUc8bn) | [Telegram](https://t.me/buscalogo)

## 🌍 Internationalization

This project is available in multiple languages:

- 🇺🇸 **English** (Primary) - [README.md](README.md)
- 🇧🇷 **Portuguese** - [README_PT.md](README_PT.md)
- 🇪🇸 **Spanish** - [README_ES.md](README_ES.md)

---

**🚀 The BuscaLogo frontend offers a modern and intuitive search experience!**
