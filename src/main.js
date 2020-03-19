// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $http from './https'
// import ElementUI from 'element-ui';
import VueResource from 'vue-resource'
// import MintUI from 'mint-ui'
import vantUI from "vant"
import 'mint-ui/lib/style.csWs'
import './assets/css/common.css'
import './assets/css/font.css'
import components from './components/'  //注册 components 下的组件
require('./mock/mock.js')

// import { Toast, MessageBox } from 'mint-ui';   //全局引入贼不舒服
Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(VueResource);
// Vue.use(MintUI)
Vue.use(vantUI)
// Vue.use($http)



Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, components[key])
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // $http,
  components: { App },
  template: '<App/>'
})
