import Home from './components/Home.vue'
import signup from './components/signup.vue' 
import Add from './components/Add.vue'
import update from './components/update'

import {createRouter,createWebHistory} from 'vue-router'

import login from './components/Login.vue'

const routes=[ 
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'signup',
        component:signup,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'update',
        component:update,
        path:'/update'
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router

 
