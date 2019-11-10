import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index/Index.vue'

Vue.use(Router)

var router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: "index"
      }
    },
    {
      path: '/main',
      redirect: {
        name: "index"
      }
    },
    {
      meta: {
        title: '热淘网'
      },
      path: '/index',
      name: 'index',
      component: Index
    },
    // === 登录，注册 ===
    {
      meta: {
        title: '热淘网—登录/注册'
      },
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login/Login.vue')
    },
    // === 列表页 ===
    {
      meta: {
        title: '天猫列表页'
      },
      path: '/tmlistpage',
      name: 'tmlistpage',
      component: () => import('@/views/tmListPage/index.vue')
    },
    {
      meta: {
        title: '天猫特价列表页'
      },
      path: '/tmtjlistpage',
      name: 'tmtjlistpage',
      component: () => import('@/views/tmTJListPage/index.vue')
    },
    {
      meta: {
        title: '淘宝列表页'
      },
      path: '/tblistpage',
      name: 'tblistpage',
      component: () => import('@/views/tbListPage/index.vue')
    },
    {
      meta: {
        title: '店铺详情'
      },
      path: '/shopdetails',
      name: 'shopdetails',
      component: () => import('@/views/shopDetails/shopDetails.vue')
    },
    {
      meta: {
        title: '信息'
      },
      path: '/message',
      name: 'message',
      component: () => import('@/views/message.vue')
    },
    {
      meta: {
        title: '一键入驻'
      },
      path: '/enter',
      name: 'enter',
      component: () => import('@/views/enter.vue')
    },
    {
      meta: {
        title: '我们的服务'
      },
      path: '/service',
      name: 'service',
      component: () => import('@/views/service.vue')
    },
    {
      meta: {
        title: '代运营'
      },
      path: '/operation',
      name: 'operation',
      component: () => import('@/views/operation.vue')
    },
    {
      meta: {
        title: '底部说明'
      },
      path: '/explain',
      name: 'explain',
      component: () => import('@/views/explain.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // if (to.meta.title) document.title = to.meta.title;
  document.documentElement.scrollTop = 0;
  next();
});

export default router;