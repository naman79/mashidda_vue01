import { createApp } from 'vue'
import { router } from './router' // 라우터 추가하고 
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
