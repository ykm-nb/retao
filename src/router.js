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
    {
      meta: {
        title: '热淘网—忘记密码'
      },
      path: '/forgetpsd',
      name: 'forgetpsd',
      component: () => import('@/components/Login/Forgetpsd.vue')
    },
    {
      meta: {
        title: '帮助中心'
      },
      path: '/helpcenter',
      name: 'helpcenter',
      component: () => import('@/views/helpcenter.vue')
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
        title: '新闻咨询列表'
      },
      path: '/newslists',
      name: 'newslists',
      component: () => import('@/views/newslists.vue')
    },
    {
      meta: {
        title: '新闻咨询'
      },
      path: '/newsdetails',
      name: 'newsdetails',
      component: () => import('@/views/newsdetails.vue')
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
    },

    // ============ adminvip =============
    {
      meta: {
          title: "会员管理"
      },
      path: "/adminvip",
      redirect: {
          name: "userinfo"
      },
      name: "adminvip",
      component: () => import('@/views/adminvip/admin.vue'),
      children: [
          // ===== 交易管理 =====
          {
              meta: {
                  title: "热淘-用户信息"
              },
              path: "/userinfo",
              name: "userinfo",
              component: () => import("./views/adminvip/dealManagement/Userinfo.vue")
          },
          {
              meta: {
                  title: "热淘-出售的产品"
              },
              path: "/productsforsale",
              name: "productsforsale",
              component: () => import("./views/adminvip/dealManagement/ProductsForSale.vue")
          },
          {
              meta: {
                  title: "热淘-购买的产品"
              },
              path: "/purchasedproducts",
              name: "purchasedproducts",
              component: () => import("./views/adminvip/dealManagement/PurchasedProducts.vue")
          },
          // ===== 合同管理 =====
          {
              meta: {
                  title: "热淘-签署列表"
              },
              path: "/signature",
              name: "signature",
              component: () => import("./views/adminvip/contractManagement/signature.vue")
          },
          {
              meta: {
                  title: "热淘-实名认证"
              },
              path: "/certification",
              name: "certification",
              component: () => import("./views/adminvip/contractManagement/Certification.vue")
          },
          {
              meta: {
                  title: "热淘-我的合同"
              },
              path: "/mycontract",
              name: "mycontract",
              component: () => import("./views/adminvip/contractManagement/MyContract.vue")
          },
          // ===== 资金管理 =====
          {
              meta: {
                  title: "热淘-我要充值"
              },
              path: "/recharge",
              name: "recharge",
              component: () => import("./views/adminvip/fundsManagement/Recharge.vue")
          },
          {
              meta: {
                  title: "热淘-充值记录"
              },
              path: "/rechargerecord",
              name: "rechargerecord",
              component: () => import("./views/adminvip/fundsManagement/RechargeRecord.vue")
          },
          {
              meta: {
                  title: "热淘-我要提现"
              },
              path: "/withdrawdeposit",
              name: "withdrawdeposit",
              component: () => import("./views/adminvip/fundsManagement/WithdrawDeposit.vue")
          },
          {
              meta: {
                  title: "热淘-提现记录"
              },
              path: "/withdrawalrecord",
              name: "withdrawalrecord",
              component: () => import("./views/adminvip/fundsManagement/WithdrawalRecord.vue")
          },
          {
              meta: {
                  title: "热淘-设置提现账号"
              },
              path: "/settingcashaccount",
              name: "settingcashaccount",
              component: () => import("./views/adminvip/fundsManagement/SettingCashAccount.vue")
          },
          // ===== 账号中心 =====
          {
              meta: {
                  title: "热淘-完善资料"
              },
              path: "/learningdocument",
              name: "learningdocument",
              component: () => import("./views/adminvip/accountCenter/LearningDocument.vue")
          },
          {
              meta: {
                  title: "热淘-支付密码"
              },
              path: "/companyprofile",
              name: "companyprofile",
              component: () => import("./views/adminvip/accountCenter/CompanyProfile.vue")
          },
          {
              meta: {
                  title: "热淘-登录密码"
              },
              path: "/applyforreimbursement",
              name: "applyforreimbursement",
              component: () => import("./views/adminvip/accountCenter/ApplyForReimbursement.vue")
          }
      ]
  },
  ]
})

router.beforeEach((to, from, next) => {
  // if (to.meta.title) document.title = to.meta.title;
  document.documentElement.scrollTop = 0;
  next();
});

export default router;