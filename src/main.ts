import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/fonts.css'

import Header from './components/header.vue'
import TodoInput from './components/TodoInput.vue'
import Footer from './components/Footer.vue'


const app = createApp(App)

app.use(router)

app.mount('#app')

app.component("Header", Header)
app.component("TodoInput", TodoInput)
app.component("Footer", Footer)
