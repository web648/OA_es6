// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/common.css'
import './assets/css/font.css'
import components from './components/'  //注册 components 下的组件

// import { Toast, MessageBox } from 'mint-ui';   //全局引入贼不舒服
Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(MintUI)



Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, components[key])
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
