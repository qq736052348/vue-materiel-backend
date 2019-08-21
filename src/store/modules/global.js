import TAB_SETTING from '@/assets/js/tabSetting'
import NAT_SETTING from '@/assets/js/navSetting'

export default {
    namespaced: true,
    state:{
        pageTitleOpt: NAT_SETTING,
        tabSetting: TAB_SETTING,
        titleOpt: {
            isShowBack: true,
            content: "default title",
            moreIcon:""
        }
    },
    mutations: {
        editCurrentTitleOpt (state,payload) {
            state.titleOpt = payload.noTitle ? {
                ...state.titleOpt,
                ...payload
            } : payload
            console.log(state.titleOpt)
        }
    },
    actions: {
        asyncChangeNum ({commit,state},payload) {
            setTimeout(()=>{
                commit('addNum',payload)
            },1000)
        }
    },
    getters: {
        changeNumText: state => state + 10
    }
}