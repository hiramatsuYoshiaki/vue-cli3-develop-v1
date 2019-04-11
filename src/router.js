import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    // return { x: 0, y: 0 }
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return { selector: to.hash  }
      }else{
        return  { x: 0, y: 0 } 
      }
    }
    // if (to.hash) {
    //   return { selector: to.hash  }
    // }else{
    //   return  { x: 0, y: 10 } 
    // }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('./views/Works.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import(/* webpackChunkName: "about" */ './views/Service.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "about" */ './views/NotFound.vue')
    },
  ]
})
