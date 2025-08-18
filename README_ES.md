# 🌐 Frontend BuscaLogo - Interfaz Web

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![Language](https://img.shields.io/badge/language-EN-blue.svg)](README.md)
[![Language](https://img.shields.io/badge/language-PT-blue.svg)](README_PT.md)
[![Language](https://img.shields.io/badge/language-ES-blue.svg)](README_ES.md)

> Interfaz web moderna y responsiva para BuscaLogo, construida con Vue.js 3 y Tailwind CSS.

## 🌟 Visión General

El frontend de BuscaLogo es una aplicación Vue.js 3 que proporciona una interfaz elegante e intuitiva para búsqueda colaborativa. Se conecta al servidor de señalización y permite a los usuarios realizar búsquedas en datos recolectados por extensiones de Chrome.

### ✨ Características

- 🔍 **Interfaz de Búsqueda Inteligente** - Campo de búsqueda con autocompletado
- 📱 **Diseño Responsivo** - Funciona en desktop, tablet y móvil
- 🌙 **Modo Dark/Light** - Tema adaptativo con persistencia
- ⚡ **Rendimiento Optimizado** - Vite + Vue 3 Composition API
- 🎨 **UI Moderna** - Tailwind CSS con componentes personalizados
- 🔄 **Tiempo Real** - Actualizaciones en tiempo real vía WebSocket

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 18.x o superior
- **npm** o **yarn**
- **Servidor de señalización** ejecutándose

### 1. Instalación

```bash
cd frontend
npm install
```

### 2. Configuración

Crea un archivo `.env.local` en la carpeta `frontend/`:

```env
# Configuraciones del Frontend
VITE_APP_NAME=BuscaLogo
VITE_APP_VERSION=1.0.0

# Servidor de Señalización
VITE_WS_SERVER_URL=ws://localhost:3001

# Configuraciones de la Aplicación
VITE_RESULTS_PER_PAGE=10
VITE_SEARCH_TIMEOUT=30000
```

### 3. Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### 4. Build de Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
frontend/
├── 📁 public/              # Archivos estáticos
│   ├── favicon.ico
│   └── assets/
├── 📁 src/                 # Código fuente
│   ├── 📁 components/      # Componentes Vue
│   │   ├── Home.vue        # Página principal
│   │   └── ...
│   ├── 📁 views/           # Páginas de la aplicación
│   │   ├── InstalarExtensao.vue
│   │   ├── SobreSistema.vue
│   │   └── TermosResponsabilidade.vue
│   ├── 📁 assets/          # Recursos estáticos
│   │   ├── img/            # Imágenes
│   │   └── css/            # Estilos personalizados
│   ├── App.vue             # Componente raíz
│   ├── main.js             # Punto de entrada
│   ├── router.js           # Configuración de rutas
│   ├── p2p-client.js       # Cliente P2P
│   └── style.css           # Estilos globales
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración Vite
├── tailwind.config.js      # Configuración Tailwind
├── postcss.config.js       # Configuración PostCSS
└── README.md               # Este archivo
```

## 🛠️ Tecnologías

### Core
- **Vue.js 3** - Framework progresivo de JavaScript
- **Vite** - Herramienta de build y servidor dev ultra-rápido
- **Vue Router 4** - Enrutamiento del lado del cliente

### UI/UX
- **Tailwind CSS** - Framework CSS utilitario
- **PostCSS** - Procesamiento CSS avanzado
- **Autoprefixer** - Prefijos CSS automáticos

### Desarrollo
- **ESLint** - Linting de código
- **Prettier** - Formateo automático
- **Hot Module Replacement** - Recarga automática

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Vista previa del build
npm run lint         # Verificar calidad del código
npm run lint:fix     # Corregir problemas automáticamente

# Análisis
npm run analyze      # Analizar bundle (si está configurado)
```

## 🎨 Sistema de Diseño

### Colores

```css
/* Colores principales */
--color-primary: #3B82F6;      /* Blue 500 */
--color-secondary: #8B5CF6;     /* Violet 500 */
--color-accent: #10B981;        /* Emerald 500 */

/* Modo claro */
--color-bg: #FFFFFF;
--color-text: #1F2937;
--color-surface: #F9FAFB;

/* Modo oscuro */
--color-bg-dark: #111827;
--color-text-dark: #F9FAFB;
--color-surface-dark: #1F2937;
```

### Tipografía

```css
/* Jerarquía de texto */
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

El frontend utiliza un sistema de componentes basado en:

- **Atomic Design** - Átomos, moléculas, organismos
- **Composition API** - Lógica reutilizable
- **Props/Emits** - Comunicación entre componentes
- **Slots** - Inyección de contenido

## 🔌 Integración con Backend

### WebSocket

```javascript
// Conexión con servidor de señalización
const ws = new WebSocket('ws://localhost:3001')

// Eventos principales
ws.onopen = () => console.log('Conectado al servidor')
ws.onmessage = (event) => handleServerMessage(event.data)
ws.onclose = () => console.log('Desconectado del servidor')
```

### Cliente P2P

```javascript
// Cliente P2P para comunicación con extensiones
import P2PClient from './p2p-client.js'

const p2pClient = new P2PClient()
await p2pClient.connect()

// Búsqueda en peers conectados
const results = await p2pClient.search('término de búsqueda')
```

## 📱 Responsividad

### Breakpoints

```css
/* Tailwind CSS breakpoints */
sm: 640px    /* Dispositivos pequeños */
md: 768px    /* Dispositivos medianos */
lg: 1024px   /* Dispositivos grandes */
xl: 1280px   /* Dispositivos extra grandes */
2xl: 1536px  /* Dispositivos 2X grandes */
```

### Estrategias

- **Mobile First** - El diseño comienza en móvil
- **Flexbox/Grid** - Layouts flexibles y adaptativos
- **Imágenes responsivas** - Optimizadas para cada dispositivo
- **Touch friendly** - Elementos adecuados para toque

## 🌙 Modo Oscuro

### Implementación

```javascript
// Estado del tema
const isDarkMode = ref(false)

// Toggle del tema
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

### Persistencia

- **localStorage** - Guarda preferencia del usuario
- **System preference** - Detecta preferencia del sistema
- **Auto-switch** - Cambia automáticamente con el sistema

## 🧪 Pruebas

### Estructura de Pruebas

```bash
# Instalar dependencias de prueba
npm install --save-dev @vue/test-utils @testing-library/vue jest

# Ejecutar pruebas
npm run test              # Todas las pruebas
npm run test:unit         # Pruebas unitarias
npm run test:integration  # Pruebas de integración
npm run test:coverage     # Cobertura de pruebas
```

### Ejemplo de Prueba

```javascript
import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  it('renders search input', () => {
    const wrapper = mount(Home)
    expect(wrapper.find('input[placeholder="Escribe tu búsqueda..."]').exists()).toBe(true)
  })
  
  it('performs search when enter is pressed', async () => {
    const wrapper = mount(Home)
    const input = wrapper.find('input')
    
    await input.setValue('prueba')
    await input.trigger('keyup.enter')
    
    expect(wrapper.vm.isSearching).toBe(true)
  })
})
```

## 📊 Rendimiento

### Optimizaciones

- **Code Splitting** - Carga lazy de componentes
- **Tree Shaking** - Eliminación de código no utilizado
- **Minificación** - Compresión de código en producción
- **Gzip/Brotli** - Compresión de assets
- **CDN** - Distribución global de assets

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

## 🔒 Seguridad

### Buenas Prácticas

- **HTTPS** - Comunicación encriptada
- **CSP** - Política de Seguridad de Contenido
- **XSS Protection** - Prevención de ataques XSS
- **CSRF Protection** - Protección contra CSRF
- **Input Validation** - Validación de entrada

### Configuraciones

```javascript
// Config de seguridad de Vite
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

## 🚀 Despliegue

### Build de Producción

```bash
# Build optimizado
npm run build

# Vista previa local
npm run preview

# Despliegue a producción
npm run deploy
```

### Plataformas

- **Vercel** - Despliegue automático desde Git
- **Netlify** - Despliegue con vista previa
- **GitHub Pages** - Despliegue gratuito
- **AWS S3** - Hosting estático
- **Nginx** - Servidor propio

## 🐛 Solución de Problemas

### Problemas Comunes

#### El build falla
```bash
# Limpiar cache
rm -rf node_modules package-lock.json
npm install

# Verificar versión de Node
node --version  # Debe ser 18+
```

#### Hot reload no funciona
```bash
# Verificar configuración de Vite
# Verificar firewall/antivirus
# Reiniciar servidor de desarrollo
```

#### Los estilos no cargan
```bash
# Verificar Tailwind CSS
npm run build:css

# Verificar PostCSS
npx postcss src/style.css -o dist/style.css
```

## 🤝 Contribución

### Directrices

1. **Fork** el proyecto
2. **Clone** tu fork
3. **Crea** una rama para tu funcionalidad
4. **Desarrolla** siguiendo estándares del proyecto
5. **Prueba** tus cambios
6. **Commit** con mensajes convencionales
7. **Push** a tu rama
8. **Abre** un Pull Request

### Estándares de Código

- **ESLint** - Reglas de calidad de código
- **Prettier** - Formateo automático
- **Vue Style Guide** - Estándares de Vue.js
- **Conventional Commits** - Mensajes de commit

## 📚 Recursos Adicionales

- **[Vue.js 3 Documentation](https://vuejs.org/)**
- **[Vite Documentation](https://vitejs.dev/)**
- **[Tailwind CSS Documentation](https://tailwindcss.com/)**
- **[Vue Router Documentation](https://router.vuejs.org/)**

## 📞 Soporte

- **Issues**: [GitHub Issues](https://github.com/buscalogo/buscalogo.com/issues)
- **Discussions**: [GitHub Discussions](https://github.com/buscalogo/buscalogo.com/discussions)
- **Email**: contato@buscalogo.com

## 🌍 Internacionalización

Este proyecto está disponible en múltiples idiomas:

- 🇺🇸 **English** (Principal) - [README.md](README.md)
- 🇧🇷 **Portuguese** - [README_PT.md](README_PT.md)
- 🇪🇸 **Spanish** - [README_ES.md](README_ES.md)

---

**🚀 ¡El frontend de BuscaLogo ofrece una experiencia de búsqueda moderna e intuitiva!**
