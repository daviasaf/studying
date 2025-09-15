import './assets/main.css'
import { createRouter,createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import LoginView from "./views/LoginView.vue"
import RegisterView from './views/RegisterView.vue' 
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/login",
            name:"login",
            component:LoginView
        },
        {
            path:"/register",
            name:"register",
            component:RegisterView
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount("#app")