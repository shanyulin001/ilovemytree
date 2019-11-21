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
    },
    wenst(state){
      return state.see=false;
    },
  },
  actions: { 
<<<<<<< HEAD
     eee({commit}){
        commit('aaa')
     }
=======
    add(context,movie){
      console.log(movie)
    }
>>>>>>> 053fc5c6443a42ed6756230bf0161db3f54bda50
  },
  modules: {
  }
})
