import Vue from 'vue'
import Vuex from 'vuex'


import items from './modules/items/items'
import login from './modules/login/login'
import categorias from './modules/categorias/categorias'
import usuarios from './modules/usuarios/usuarios'
import reservas from './modules/reservas/reservas'
import cardapios from './modules/cardapios/cardapios'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        items,
        login,
        categorias,
        usuarios,
        reservas,
        cardapios
    }
})

export default store