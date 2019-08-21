'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, { //因为 vue脚手架 的webpack 版本是3 ，所以这里需要手动 设置全局NODE_ENV webpack4  的mode 属性将自动吧当前NODE_ENV设置对应环境的值
  NODE_ENV: '"development"'
})
