import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)


import homePage from '../views/publice/navItem/homePage.vue'
import personalLetter from '../views/publice/navItem/personalLetter.vue'
import toFind from '../views/publice/navItem/toFind.vue'
import user from '../views/publice/navItem/user.vue'
import login from '../views/publice/login/login'
import register from '../views/publice/login/register'
import nodata from '../views/publice/nodata'


// export default new Router({})

const router = new Router({
  mode: 'history',
  // linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      // children:[
      //   {
      //     path: '',
      //     name: '',
      //     component: ''
      //   }
      // ]
    },
    {
      path: '/personalLetter',
      name: 'personalLetter',
      component: personalLetter,
      beforeEnter: (to, from, next) => {
        // ...
        alert("先登录");
        next("/login");
      }
    },
    {
      path: '/toFind',
      name: 'toFind',
      component: toFind
    },
    {
      path: '/user',
      name: 'user',
      component: user,
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