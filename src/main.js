// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css';
import http from '@/utils/request'

import store from './store'
Vue.prototype.$http = http()

Vue.use(iView);
Vue.config.productionTip = false
require("./assets/css/index.scss")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
