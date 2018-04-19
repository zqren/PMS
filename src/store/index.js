import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './types'

import userInfo from './modules/userInfo' //保存用户信息
import userPhone from './modules/userPhone' //保存用户手机号码

Vue.use(Vuex)

const state = {
    loadState:false
}
const mutations = {
    [types.LOAD_STATE](state,status){
        state.loadState = status
    }
}
const actions = {
    getLoadState({commit},status){
        commit(types.LOAD_STATE,status)
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
      userInfo,
      userPhone
    }
})

export default store
