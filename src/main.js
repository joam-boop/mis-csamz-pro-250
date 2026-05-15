import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

localStorage.removeItem("staffRequests")
localStorage.removeItem("studentRequests")
localStorage.removeItem("loggedInUser")
localStorage.removeItem("users")

// auto admin
import "./store/admin"

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')