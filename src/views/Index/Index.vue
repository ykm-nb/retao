<template>
  <div class="index">

    <!-- 头部 -->
    <Header id="header" :userInfo="userInfo"></Header>

    <Nav></Nav>

    <div class="inner-bg banner-bg">
      <div class="inner banner">
        <div class="banner-left">
          <div class="city">
            <p class="title">热门城市</p>
            <ul>
              <li @click="hotStore({title: item})" v-for="(item, index) in hotCity" :key="index">{{ item }}</li>
              <li @click="$router.push('tmlistpage')" class="more">更多</li>
            </ul>
          </div>
          <div class="industry">
            <p class="title">热门类目</p>
            <ul>
              <li @click="hotStore({title: item})" v-for="(item, index) in hotCategory" :key="index">{{ item }}</li>
              <li @click="$router.push('tmlistpage')" class="more">更多</li>
            </ul>
          </div>
        </div>

        <div class="banner-right">
          <div class="avatar">
            <img src="./components/images/avatar.png">
            <p>专注电商，助推企业成长</p>
          </div>
          <div class="btn" v-if="!userInfo">
            <button @click="gotoPage('login', 0)" type="button">请登录</button>
            <button @click="gotoPage('login', 1)" class="regist" type="button">立即注册</button>
          </div>
          <div class="wx">
            <img src="./components/images/wx.png">
            <p>扫一扫 ，有惊喜</p>
          </div>
        </div>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide1"></div>
          <div class="swiper-slide slide2"></div>
          <div class="swiper-slide slide3"></div>
        </div>

        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <Info></Info>

    <Shop1 id="shop1" ref="shop1" @author-index="getAuthorIndex" :tjList="tjList" :yzList="yzList" :xqList="xqList"></Shop1>

    <Service id="service" @author-index="getAuthorIndex"></Service>

    <Shop2 id="shop2" @author-index="getAuthorIndex" :tmList="tmList" :tbList="tbList"></Shop2>
    
    <Message id="msg" :newAllDatas="newAllDatas" @author-index="getAuthorIndex"></Message>

    <Safe></Safe>

    <!-- 底部 -->
    <Footer id="footer"></Footer>

    <!-- 锚点 -->
    <ul class="anchor" :class="{'show-anchor': showAnchor}">
      <li @click="goto('service', undefined, 0)" :class="['item', {'actived': authorIndex === 0}]">客服中心</li>
      <li @click="goto('shop1', 'start', 1)" :class="['item', {'actived': authorIndex === 1}]">特惠店铺</li>
      <li @click="goto('shop1', undefined, 2)" :class="['item', {'actived': authorIndex === 2}]">优质店铺</li>
      <li @click="goto('shop1', 'end', 3)" :class="['item', {'actived': authorIndex === 3}]">稀缺店铺</li>
      <li @click="goto('shop2', undefined, 4)" :class="['item', {'actived': authorIndex === 4}]">天猫转让</li>
      <li @click="goto('shop2', undefined, 5)" :class="['item', {'actived': authorIndex === 5}]">淘宝过户</li>
      <li @click="goto('msg', 'start', 6)" :class="['item', 'no-border', {'actived': authorIndex === 6}]">行业资讯</li>
      <li class="top" @click="goto('header')">
        <p>返回</p>
      </li>
    </ul>

    <!-- 联系客服 -->
    <Consult ref="consult"></Consult>

  </div>
</template>

<script>
import ls from "store2";
import api from "@/api";
const Header = () => import ('@/components/Header/Header')
const Nav = () => import ('@/components/Nav/Nav')
const Consult = () => import ('@/components/Consult/Consult')
const Footer = () => import ('@/components/Footer/Footer')
const Info = () => import ('./components/info')
const Shop1 = () => import ('./components/shop1')
const Shop2 = () => import ('./components/shop2')
const Safe = () => import ('./components/safe')
const Service = () => import ('./components/service')
const Message = () => import ('./components/message')
// Swiper
import Swiper from 'swiper';
export default {
  name: 'index',
  components: {
    Footer, Header,
    Consult, Nav, 
    Shop1, Shop2,
    Safe, Service,
    Message, Info
  },
  data() {
    return {
      userInfo: ls.session.get('qbuserInfo'),
      showAnchor: false,
      authorIndex: -1,
      // 热门城市，热门类目
      hotCity: ["北京", "上海", "深圳", "广州", "杭州", "金华", "绍兴", "温州", "嘉兴", "湖州", "苏州", "南京", "武汉", "长沙", "成都", "南昌", "泉州", "厦门"],
      hotCategory: ["住宅", "家居", "办公", "收纳", "清洁", "宠物", "服饰", "箱包", "鞋帽", "五金", "建材", "数码", "汽车", "珠宝", "配饰", "户外", "电器", "美妆", "母婴", "图书", "影音"],
      // 店铺
      tjList: [],
      yzList: [],
      xqList: [],
      tmList: [],
      tbList: [],
      newAllDatas: {
        datas: [],
        newsLists: []
      }
    }
  },
  methods: {
    initSwiper() { // swiper
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 4000,
            // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination"
        },
      })
    },
    goto(value, block = 'center', index) { // 锚点跳转
      const ele = document.getElementById(value);

      this.authorIndex = index;
      ele.scrollIntoView({
        behavior: 'smooth',
        block
      })
    },
    gotoPage(page, type) { // 跳转页面
      const curPath = this.$route.path.substring(1);

      if(curPath === page) return; // 页面相同
      this.$router.push({
        path: page,
        query: { type }
      })
      // window.open(href)
    },
    keyupEnter() { // 监听滚动
      let a = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      (a > 400) ? this.showAnchor = true : this.showAnchor = false
    },
    hotStore (obj) {
      ls.session("tbList", obj)
      this.$router.push("tmlistpage")
    },
    getAuthorIndex (index) {
      this.authorIndex = index
    }
  },
  created () {
    // 获取首页五个店铺信息
    api.axs('post', "/tmStore/queryHomeStorePages", {pageSize: 18}).then(({ data }) => {
        if(data.code === "SUCCESS") {
            var datas = data.data;
            this.tjList = datas.tjList.list
            this.yzList = datas.yzList.list
            this.xqList = datas.xqList.list
            this.tmList = datas.tmList.list
            this.tbList = datas.tbList.list

            //详情页-猜你喜欢 的数据来源
            var firstLists = []
            if (datas.tjList.list.length) firstLists.push(datas.tjList.list[0])
            if (datas.yzList.list.length) firstLists.push(datas.yzList.list[0])
            if (datas.xqList.list.length) firstLists.push(datas.xqList.list[0])
            ls.session('firstLists',firstLists)
        }
    })

    api.axs("post", "/news/anon/queryForPage").then(({ data })=>{
        if (data.code === "SUCCESS") {
            this.newAllDatas.datas = data.data
            this.newAllDatas.newsLists[0] = data.data[0].list[0]
            this.newAllDatas.newsLists[1] = data.data[1].list[0]
            this.newAllDatas.newsLists[2] = data.data[2].list[0]
        } else {
            this.$Message.error(data.remark);
        }
    })
    
  },
  mounted() {
    this.initSwiper() // swiper初始化必须在mounted，因为此时dom元素已经渲染完
    window.addEventListener('scroll', this.keyupEnter)
    
    ls.session("rtSearch", "") // 清空搜索
    ls.session("tbList", null)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.keyupEnter)
  }
}
</script>

<style lang="less" scoped>
html, body {
  height: 100%;
}
.index {
  // 锚点
  .anchor {
      width: 52px;
      background-color: #fff;
      position: fixed;
      left: 2%;
      top: 50%;
      transform: translate(0,-50%);
      z-index: -999;
      transition: .4s;
      opacity: 0;
      cursor: pointer;

      &.show-anchor {
        opacity: 1;
        z-index: 999;
      }

      li {
        font-size: 14px;
        padding: 10px;
        cursor: pointer;
      }

      .item {
        line-height: 16px;
        color: #9e9d9d;
        border-bottom: 1px dashed #dfdfdf;
        transition: .4s;

        &.no-border {
          border: none;
        }

        &.actived {
          color: rgba(255,255,255,.9);
          background-color: #ff0036;
        }
      }

      .top {
        height: 36px;
        padding-top: 15px;
        background: url("./components/images/author.png") no-repeat center;

        p {
          font-size: 14px;
          line-height: 18px;
          color: rgba(255,255,255,.9);
        }
      }
  }

  .banner-bg {
      height: 515px;
      width: 100%;
      position: relative;

      .banner {
        height: 100%;
        display: flex;
        justify-content: space-between;

        .banner-left {
          width: 262px;
          height: 100%;
          color: #fff;
          padding-top: 40px;
          background-color: rgba(0, 0, 0, .4);
          overflow: hidden;
          z-index: 2;

          div {
            .title {
              font-size: 18px;
              line-height: 18px;
              margin-bottom: 28px;
              background: url("./components/images/banner-title.png") no-repeat center;
            }

            ul {
              display: flex;
              // justify-content: center;
              flex-wrap: wrap;
              margin: 0 22px;

              li {
                font-size: 15px;
                line-height: 15px;
                margin: 0 6px 18px;
                cursor: pointer;

                &:hover {
                  text-decoration: underline;
                }

                &.more {
                  color: rgb(232, 27, 64);

                  &:hover {
                    text-decoration: none;
                  }
                }
              }
            }
          }

          .city {
            margin-bottom: 30px;
          }
        }

        .banner-right {
          width: 243px;
          height: 100%;
          padding-top: 75px;
          background: url('./components/images/banner-right.png') no-repeat 0 75px;
          z-index: 2;

          .avatar {
            padding-top: 75px;
            position: relative;

            img {
              position: absolute;
              top: 0;
              left: 50%;
              transform: translate(-50%,-50%);
            }

            p {
              font-size: 16px;
              line-height: 16px;
              color: #333333;
            }
          }

          .btn {
            display: flex;
            justify-content: center;
            margin: 20px 0 0;

            button {
              width: 78px;
              height: 32px;
              font-size: 16px;
              line-height: 32px;
              color: #fff;
              background-color: #ff0036;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }

            .regist {
              width: 92px;
              color: #6d6d6d;
              margin-left: 10px;
              background-color: #fff;
              border: 1px solid #ff0036;
            }
          }

          .wx {
            margin-top: 55px;
          }

          .wx p {
            font-size: 16px;
            line-height: 16px;
            color: #999999;
            margin-top: 5px; 
          }
        }
      }

      /deep/.swiper-container {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        
        .swiper-wrapper {
          height: 100%;
          width: 100%;

          .swiper-slide {
            height: 100%;
            background-size: cover;
          }

          .slide1 {
            background: url('./components/images/banner2.png') no-repeat center;
          }
          .slide2 {
            background: url('./components/images/banner3.png') no-repeat center;
          }
          .slide3 {
            background: url('./components/images/banner4.png') no-repeat center;
          }
        }

        .swiper-pagination {
          /deep/ .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            opacity: 1;
            margin: 0 5px;
            background-color: #fff;
          }
          
          .swiper-pagination-bullet-active {
            width: 32px;
            background-color: #fff;
            border-radius: 20px;
          }
        }
      }
  }
}
</style>