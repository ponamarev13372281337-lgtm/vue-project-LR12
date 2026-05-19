import { createRouter, createWebHistory } from "vue-router"; 
import WeatherView from "./components/WeatherView.vue";
import About from "./components/About.vue";
import Feedback from "./components/Feedback.vue";

const routes = [
    {
        path: '/',
        name: 'weather',
        component: WeatherView
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: Feedback
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router