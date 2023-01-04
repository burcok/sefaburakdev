import { createRouter,createWebHistory } from "vue-router";
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue' 
import Education from '/src/components/education.vue' 
import Contact from '/src/components/contact.vue' 
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
        path: '/education',
        name: 'Education',
        component: Education,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
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