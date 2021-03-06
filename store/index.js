// ESTA PARTE DEFINE EL FLUJO EN VUE
// import Vue from 'vue'
//import Vuex from 'vuex'

// import tareas from './modules/tareas'
/* ./modules/tareas.js
export default{
    // Para importar por el nombre en modulos agregar esta variable al archivo tareas
    // namespaced = true,
    state: {},
    mutations: {},
    ...
}
 */

// Vue.use(Vuex)
/*
export default new Vuex.Store({
    state: {
        // variables
    },
    mutations: {
        // cambio de state
        cambia(state, payload) {
            state.variables = payload;
        }
    },
    actions: {
        // funcion que afecta a una mutación
        guarda({
            commit
        }, payload) {
            commit('cambia', payload)
        },
    },
    getters: {
        // variables monitoreadas, contadores tal vez
        // variableGlobal: state => !!state.token
    },
    modules: {
        // Importar modulos
        // tareas,
    }
})
*/


// ESTA PARTE DEFINE EL FLUJO EN NUXT

/* acceder a otro state desde un store, usa rooState
const getters = {
    getApi: (state, getters, rootState) => {
    // Access the state token from index.js
    rootState.token
}} */

export const state = () => ({
    loading: false
})

export const mutations = {
    SET_LOADING (state, payload) {
        state.loading = payload;
    }
}

export const actions = {
    setLoading({ commit }, payload) {
        commit("SET_LOADING", payload);
    }
}

export const getters = () => ({

})
