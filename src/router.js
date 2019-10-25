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
        title: '热淘网—登录'
      },
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login/Login.vue')
    },
    {
      meta: {
        title: '热淘网—注册'
      },
      path: '/regist',
      name: 'regist',
      component: () => import('@/components/Regist/Regist.vue')
    },
    {
      meta: {
        title: '天猫转让'
      },
      path: '/tmtransfer',
      name: 'tmtransfer',
      component: () => import('@/views/tmTransfer/tmTransfer.vue')
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
        title: '底部说明'
      },
      path: '/explain',
      name: 'explain',
      component: () => import('@/views/explain.vue')
    },
    // // === 仟呗 ===
    // {
    //   meta: {
    //     title: '仟呗'
    //   },
    //   path: '/qbindex',
    //   name: 'qbindex',
    //   component: () => import('@/views/qbIndex/Index.vue')
    // },
    // {
    //   meta: {
    //     title: "热淘——代入驻"
    //   },
    //   path: "/enter",
    //   name: "enter",
    //   component: () => import("@/views/Enter.vue")
    // },
    // {
    //   meta: {
    //     title: "热淘——代运营"
    //   },
    //   path: "/operation",
    //   name: "operation",
    //   component: () => import("@/views/Operation.vue")
    // },
    // {
    //   meta: {
    //     title: "热淘——企业服务"
    //   },
    //   path: "/enterpriseservice",
    //   name: "enterpriseservice",
    //   component: () => import("@/views/EnterpriseService.vue")
    // },
    // {
    //   meta: {
    //     title: "热淘——软文营销"
    //   },
    //   path: "/marketing",
    //   name: "marketing",
    //   component: () => import("@/views/Marketing.vue")
    // },
    // {
    //   meta: {
    //     title: "热淘——网站建设"
    //   },
    //   path: "/websitedevelopment",
    //   name: "websitedevelopment",
    //   component: () => import("@/views/WebsiteDevelopment.vue")
    // },
    // {
    //   meta: {
    //     title: "热淘——知识产权"
    //   },
    //   path: "/intellectualproperty",
    //   name: "intellectualproperty",
    //   component: () => import("@/views/IntellectualProperty.vue")
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // if (to.meta.title) document.title = to.meta.title;
  document.documentElement.scrollTop = 0;
  next();
});

export default router;