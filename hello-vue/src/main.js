import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'

let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI
console.log(HelloAPI)

app.mount('#app')
