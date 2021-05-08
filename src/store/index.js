import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    USERINFO:'222'
  },

  mutations:{
    SETUSERINFO(state,value){
      state.USERINFO = value;
    }
  }
  
})