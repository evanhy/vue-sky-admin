import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// 使用 tailwindcss-compat 重置样式 避免与 Ant Design Vue 冲突 导致按钮透明
// import '@unocss/reset/tailwind-compat.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
