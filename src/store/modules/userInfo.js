import * as types from '../types'

const state = {
  userInfoArr:[]
}

const getters = {
  userInfo:state=>state.userInfoArr
}

const mutations = {
  [types.USER_INFO](state,arr){
    state.userInfoArr = arr
  }
}

const actions = {
  getUserInfo({commit},arr){
    commit(types.USER_INFO,arr)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
