// .vuepress/enhanceApp.js
import GoogleDrivePlayer from './components/GoogleDrivePlayer.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Vue from 'vue'
import IframeLoader from './components/IframeLoader.vue'
import PrimeVue from 'primevue/config'
import Select from 'primevue/select'
import 'primevue/resources/themes/saga-blue/theme.css'       // Tema CSS
import 'primevue/resources/primevue.min.css'                // PrimeVue CSS
import 'primeicons/primeicons.css'                          // PrimeIcons CSS
import 'tailwindcss'
import tailwindConfig from '../../tailwind.config'

export default ({ Vue, app }) => {
  app.component('GoogleDrivePlayer', GoogleDrivePlayer);
  Vue.component('IframeLoader', IframeLoader);
  Vue.use(PrimeVue)
  Vue.component('Select', Select)
  Vue.use('tailwindcss', tailwindcss)
  Vue.use('tailwindcssConfig', tailwindConfig)
};
