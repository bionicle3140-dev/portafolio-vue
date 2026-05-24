import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// IMPORTA EL ROUTER
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')