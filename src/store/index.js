import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    see:true
  },
  mutations: {
    change(state){
      return state.see=false;
    },
    toxys(state){
      return state.see=false;
    },
    tree(state){
      return state.see=true;
    },
    eee(state){
      return state.see=false;
    }
  },
  actions: { 
     eee({commit}){
        commit('aaa')
     }
  },
  modules: {
  }
})
