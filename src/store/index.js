import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import container from './modules/container'
import _global from './modules/global'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login,
        container,
        _global
    }
})