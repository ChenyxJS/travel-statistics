import { createApp } from 'vue'
import '@/style/index.scss'
import '@/style/flex.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'


import SvgIcon from "@/components/SvgIcon.vue";


const app = createApp(App)
app.use(router)
app.component('svg-icon',SvgIcon)
app.use(ElementPlus)
app.mount('#app')
