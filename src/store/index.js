import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    see:true,
    xx:'',
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
    },
    wenst(state){
      return state.see=false;
    },
    model(state,value){
      return state.xx=value
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
