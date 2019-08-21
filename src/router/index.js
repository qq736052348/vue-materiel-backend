import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

import NAV_SETTING from '@/assets/js/navSetting'

Vue.use(Router)



const listRouterTitle = {
  'workLog': '工作日志',
  'leaveApply': '请假申请',
  'materialOut': '材料出库单',
  'toolOut': '工具出库单'
}


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/login' 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */  '@/page/login')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "login" */  '@/page/list')
    },
    { path: '/container', 
      redirect:"/container/workbench",
      component: () => import(/* webpackChunkName: "container" */  '@/page/container/index'),
      children: [
        {
          path: 'workbench',
          component: () => import(/* webpackChunkName: "workbench" */  '@/page/container/child/workbench')
        },
        {
          path: 'depository',
          component: () => import(/* webpackChunkName: "depository" */  '@/page/container/child/depository')
        },
        {
          path: 'project',
          component: () => import(/* webpackChunkName: "project" */  '@/page/container/child/project')
        },
        {
          path: 'account',
          component: () => import(/* webpackChunkName: "account" */  '@/page/container/child/account')
        }
      ]
    }
  ]
})

function setPageTitleOptions ({path,query,...remain}) {
    let currentRouterTitleOpt = NAV_SETTING.find(item => item.path == path) || {noTitle: true};
    if (path == '/list') {
      currentRouterTitleOpt['content'] = listRouterTitle[query.name]
    }
    store.commit('_global/editCurrentTitleOpt', currentRouterTitleOpt);
}

function checkUserLoginInterceptor ({path},next) {
    if (path == '/login') {
      next()
    } else {
      let _token = window.localStorage.getItem('token'),
          _loginTime = window.localStorage.getItem('loginTime'),
          _expires_In = window.localStorage.getItem('Expires_In'),
          currentTime = new Date();
      if(!_token || ((currentTime - _loginTime) / 1000) > _expires_In) {
          next("/login")
      } else {
        next()
      }
    }
}






router.beforeEach((to, from, next) => {
  setPageTitleOptions(to); //设置title头部
  checkUserLoginInterceptor(to,next) //设置登陆拦截。
  next()
})

export default router



