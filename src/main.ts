// Módulo CreateApp para criar o projeto Vue
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Importa o App.vue
import App from './App.vue'
import { vuetify } from './plugins/vuetify'



// Responsável pela exibição de estruturas do nosso arquivo (HTML, JS, etc.)
createApp(App).use(vuetify).mount('#app')