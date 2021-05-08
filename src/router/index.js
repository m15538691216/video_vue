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
    path: '/search/:id',
    name: 'Search',
    meta: { title: '搜索' },
    component: () => import('../views/search/index.vue'),
  },
  {
    path: '/screen',
    name: 'Screen',
    meta: { title: '筛选' },
    component: () => import('../views/screen/index.vue'),
  },
  {
    path: '/set',
    name: 'Set',
    meta: { title: '设置' },
    component: () => import('../views/user/setUp/index.vue'),
  },
  {
    path: '/editor',
    name: 'Editor',
    meta: { title: '发表' },
    component: () => import('../views/found/editor.vue'),
  },
  {
    path: '/movie/details/:id',
    name: 'movieDetails',
    meta: { title: '电影详情' },
    component: () => import('../views/home/movie/details.vue'),
  },
  {
    path: '/teleplay/details/:id',
    name: 'teleplayDetails',
    meta: { title: '电视剧详情' },
    component: () => import('../views/home/teleplay/details.vue'),
  },
  {
    path: '/anime/details/:id',
    name: 'animeDetails',
    meta: { title: '动漫详情' },
    component: () => import('../views/home/anime/details.vue'),
  },
  {
    path: '/variety/details/:id',
    name: 'varietyDetails',
    meta: { title: '综艺详情' },
    component: () => import('../views/home/variety/details.vue'),
  },
  {
    path: '/',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/',
        meta: { title: '首页' },
        component: () => import('../views/home/index.vue'),
        children: [
          {
            path: '/',
            name: 'Recom',
            meta: { title: '精选' },
            component: () => import('../views/home/recom/index.vue')
          },
          {
            path: '/movie',
            name: 'Movie',
            meta: { title: '电影' },
            component: () => import('../views/home/movie/index.vue')
          },
          {
            path: '/teleplay',
            name: 'Teleplay',
            meta: { title: '电视剧' },
            component: () => import('../views/home/teleplay/index.vue')
          },
          {
            path: '/anime',
            name: 'Anime',
            meta: { title: '动漫' },
            component: () => import('../views/home/anime/index.vue')
          },
          {
            path: '/variety',
            name: 'Variety',
            meta: { title: '综艺' },
            component: () => import('../views/home/variety/index.vue')
          },
          {
            path: '/microfilm',
            name: 'Microfilm',
            meta: { title: '微电影' },
            component: () => import('../views/home/microfilm/index.vue')
          },
        ]
      },
      {
        path: '/found',
        name: 'Found',
        meta: { title: '发现', index: 1 },
        component: () => import('../views/found/index.vue'),
      },
      {
        path: '/main/index',
        name: 'MainIndex',
        meta: { title: '个人中心', index: 2 },
        component: () => import('../views/user/main/index.vue'),
      },
    ]
  },
  {
    path: '/test',
    name: 'test',
    meta: { title: '测试' },
    component: () => import('../views/test.vue'),
  }
  
]


export default new Router({
  // mode: 'history',
  routes: constantRoutes
})
