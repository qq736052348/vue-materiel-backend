import {getUserLogin} from '@/store/modules/api'

export default {
    namespaced: true,
    state:{
        isLogin:false,
        userInfo:{}
    },
    mutations:{
        getUserMsg (state,payload) {
            let {AccessToken, Expires_In} = payload
            window.localStorage.setItem("token",AccessToken)
            window.localStorage.setItem("loginTime",new Date())
            window.localStorage.setItem("Expires_In",Expires_In)
            state.userInfo = {
                ...state.userInfo,
                ...payload
            }
        }
    },
    actions:{
        async userLogin ({commit,state},payload) {
            commit('getUserMsg', await getUserLogin(payload))
        }
    },
    getters:{

    }
}