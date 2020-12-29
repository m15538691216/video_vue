import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}



export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../views/user/login.vue'),
  },
  {
    path: '/',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        meta: { title: '首页' },
        component: () => import('../views/home/index.vue'),
      },
      {
        path: '/search',
        name: 'Search',
        meta: { title: '搜索' },
        component: () => import('../views/search/index.vue'),
      },
      {
        path: '/screen/:id',
        name: 'Screen',
        meta: { title: '筛选' },
        component: () => import('../views/screen/index.vue'),
      },
      {
        path: '/found',
        name: 'Found',
        meta: { title: '发现' },
        component: () => import('../views/found/index.vue'),
      },
      {
        path: '/main/index',
        name: 'MainIndex',
        meta: { title: '个人中心' },
        component: () => import('../views/user/main/index.vue'),
      },
    ]
  },
]


export default new Router({
  mode: 'history',
  routes: constantRoutes
})
