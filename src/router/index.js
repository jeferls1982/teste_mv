import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Cardapios from '../pages/Cardapios'
import Login from '../pages/Login'
import Items from '../pages/Items'
import Categorias from '../pages/Categorias'
import Usuarios from '../pages/Usuarios'
import Reservas from '../pages/Reservas'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/cardapios', component: Cardapios, name: 'cardapios' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/items', component: Items, name: 'items' },
    { path: '/categorias', component: Categorias, name: 'categorias' },
    { path: '/usuarios', component: Usuarios, name: 'usuarios' },
    { path: '/reservas', component: Reservas, name: 'reservas' },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router