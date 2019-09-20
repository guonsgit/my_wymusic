import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue' 
import Lunbo from './components/Lunbo.vue'
import Remen from './components/Remen.vue'
import Header from './components/Header.vue'
import Log from './components/Log'
Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',name: 'home',component: Home},

    // {path: '/about',name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {path: '/index',component:Index},
    {path: '/Lunbo',component:Lunbo},
    {path:'/Remen',component:Remen},
    {path:'/Header',component:Header},
    {path:'/Log',component:Log}
    
  ]
})
