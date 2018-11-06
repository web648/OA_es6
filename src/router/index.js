import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)


import page1 from '../views/page/page1'
// import myHeader from './views'
// export default new Router({

// })
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
});

export default router