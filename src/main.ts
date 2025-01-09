import { QuillEditor } from '@vueup/vue-quill'

import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@vueup/vue-quill/dist/vue-quill.snow.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component('QuillEditor', QuillEditor)

app.mount('#app')
