import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import datos from './response'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    departamentos: {}
  },
  mutations: {
    setDepartamentos(state, departamentos){
      state.departamentos = departamentos
    }
  },
  actions: {
    async getDepartamentos({ commit }){
      try {
        /*const result = await axios.get('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json', {headers: {"Access-Control-Allow-Origin": "*"}})
        const data = result.data*/
        const data = datos
        commit('setDepartamentos', data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})