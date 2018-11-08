import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)


import page1 from '../views/page/page1'
import aboutUs from '../views/publice/about/aboutUs'
import callme from '../views/publice/about/callme'
import setting from '../views/publice/setting/setting'
import other from '../views/publice/other/other'
import login from '../views/publice/login/login'
import register from '../views/publice/login/register'
import nodata from '../views/publice/nodata'



// import myHeader from './views'
// export default new Router({

// })
const router = new Router({
  mode: 'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs,
      children:[
        {
          path: '/aboutUs/callme',
          name: 'callme',
          component: callme
        }
      ]
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting,
      beforeEnter: (to, from, next) => {
        // ...
        alert("先登录");
        next("/login");
      }
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/404',
      name: 'nodata',
      component: nodata
    },
    
  ]
});

export default router