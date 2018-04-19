import * as types from '../types'

const state = {
    userPhone:""
}
const getters = {
    phoneNum:state=>state.userPhone
}

const mutations = {
    [types.USER_PHONE](state,str){
        state.userPhone = str
    }
}

const actions = {
    getPhoneNum({commit},str){
        commit(types.USER_PHONE,str)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}
