import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'

import App from './App.vue'
import compOne from './components/compOne.vue'
import compTwo from './components/compTwo.vue'

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path:'/compone',component:compOne},
        {path:'/comptwo',component:compTwo}
    ]
})
const app = createApp(App)
app.use(router)
// app.component("comp-one",compOne)
// app.component("comp-two", compTwo);
app.mount("#app")


