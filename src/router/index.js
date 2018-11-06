import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: () => import ('@/components/index/index'), redirect: "/city" },
    { path: '/city', name: 'city', component: () => import ('@/components/city/city') },
    { path: '/address', name: 'address', component: () => import ('@/components/address/address') },
    { path: '/elm', name: 'elm', redirect: '/elm/home', component: () => import ('@/components/elm/elm') , children: [
      { path: 'home', name: 'home', component: () => import ('@/components/elm/home/home') },
      { path: 'search', name: 'search', component: () => import ('@/components/elm/search/search') },
      { path: 'order', name: 'order', component: () => import ('@/components/elm/order/order') },
      { path: 'my', name: 'my', component: () => import ('@/components/elm/my/my') }
    ] },
  ]
})
