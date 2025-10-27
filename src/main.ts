/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          // background: 'var(--color-background)',
          surface: 'var(--color-card)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          error: 'var(--color-destructive)',
        },
      },
      dark: {
        colors: {
          // background: 'var(--color-background)',
          surface: 'var(--color-card)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          error: 'var(--color-destructive)',
        },
      },
    },
  },
})

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
import './assets/tailwind.css'

const app: any = createApp(App)
registerPlugins(app)

app
.use(vuetify)
.mount('#app')
