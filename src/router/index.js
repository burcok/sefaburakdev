import { createRouter,createWebHistory } from "vue-router";
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue' 
import PageNotFound from '/src/components/PageNotFound.vue' 


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/:catchAll(.*)',
        name: "PageNotFound",
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router