import {createRouter,createWebHistory} from 'vue-router'
import Home from "@/views/Home-test";
import About from "@/views/About-test";

const routes = [
    {path:'/home',name: 'Home',component: Home},
    {path:'/homess',component: About, alias: '/home2'},//别名 home2
    {path:'/about',name: 'About',component: About}
]
const router = createRouter({
    history:createWebHistory(),
    routes
    // routes:[
    //     {path:'/home',name: 'Home',component: Home},
    //     {path:'/about',name: 'About',component: About}
    // ]
})

export default router
