import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'
let app = createApp(App).mount('#app')

app.config.globalProperties.$hello_api = HelloAPI
console.log(HelloAPI)

app.mount('#app')
