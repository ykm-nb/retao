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
              <li class="more">更多</li>
            </ul>
          </div>
          <div class="industry">
            <p class="title">热门类目</p>
            <ul>
              <li @click="hotStore({title: item})" v-for="(item, index) in hotCategory" :key="index">{{ item }}</li>
              <li class="more">更多</li>
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

    <Shop1 id="shop1" ref="shop1" :tjList="tjList" :yzList="yzList" :xqList="xqList"></Shop1>

    <Service id="service"></Service>

    <Shop2 id="shop2" :tmList="tmList" :tbList="tbList"></Shop2>
    
    <Message id="msg"></Message>

    <Safe></Safe>

    <!-- 底部 -->
    <Footer id="footer"></Footer>

    <!-- 锚点 -->
    <ul class="anchor" :class="{'show-anchor': showAnchor}">
      <li @click="goto('service')" class="item service">客服中心</li>
      <li @click="goto('shop1', 'start')" class="item">特惠店铺</li>
      <li @click="goto('shop1')" class="item">优质店铺</li>
      <li @click="goto('shop1', 'end')" class="item">稀缺店铺</li>
      <li @click="goto('shop2')" class="item">天猫转让</li>
      <li @click="goto('shop2')" class="item">淘宝过户</li>
      <li @click="goto('msg', 'start')" class="item no-border">行业资讯</li>
      <li class="top" @click="goto('header')">
        <p>返回</p>
      </li>
    </ul>

  </div>
</template>

<script>
import ls from "store2";
import api from "@/api";
const Header = () => import ('@/components/Header/Header')
const Nav = () => import ('@/components/Nav/Nav')
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
    Nav, Shop1, Shop2,
    Safe, Service,
    Message, Info
  },
  data() {
    return {
      userInfo: ls.session('qbuserInfo'),
      showAnchor: false,
      // 热门城市，热门类目
      hotCity: ["北京", "上海", "深圳", "广州", "杭州", "金华", "绍兴", "温州", "嘉兴", "湖州", "苏州", "南京", "武汉", "长沙", "成都", "南昌", "泉州", "厦门"],
      hotCategory: ["住宅", "家居", "办公", "收纳", "清洁", "宠物", "服饰", "箱包", "鞋帽", "五金", "建材", "数码", "汽车", "珠宝", "配饰", "户外", "电器", "美妆", "母婴", "图书", "影音"],
      // 店铺
      tjList: [],
      yzList: [],
      xqList: [],
      tmList: [],
      tbList: [],
    }
  },
  methods: {
    initSwiper() { // swiper
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 200000,
            // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination"
        },
      })
    },
    goto(value, block = 'center') { // 锚点跳转
      const ele = document.getElementById(value);
      ele.scrollIntoView({
        behavior: 'smooth',
        block
      })
    },
    gotoPage(page, type) { // 跳转页面
      const curPath = this.$route.path.substring(1);

      if(curPath === page) return; // 页面相同
      this.$router.push(`${page}?type=${type}`)
    },
    keyupEnter() { // 监听滚动
      let a = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      (a > 400) ? this.showAnchor = true : this.showAnchor = false
    },
    hotStore (obj) {
      ls.session("tbList", obj)
      this.$router.push("tmlistpage")
    },
  },
  created() {
    ls.session.set("rtSearch", "") // 清空搜索
    ls.session.set("tbList", null)
    
    // 获取首页五个店铺信息
    api.axs('post', "/tmStore/queryHomeStorePages", {}).then(({ data }) => {
        if(data.code === "SUCCESS") {
            data.data.tjList.list.forEach((item,index) => {
              if(item.pictureUrl.length > 70) {
                data.data.tjList.list[index].pictureUrl = item.pictureUrl.split(',')[0]
              }
            })
            this.tjList = data.data.tjList.list
            this.yzList = data.data.yzList.list
            this.xqList = data.data.xqList.list
            this.tmList = data.data.tmList.list
            this.tbList = data.data.tbList.list
        }
    });
  },
  mounted() {
    this.initSwiper() // swiper初始化必须在mounted，因为此时dom元素已经渲染完
    window.addEventListener('scroll', this.keyupEnter)
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

        &.service { // 客服中心
          color: rgba(255,255,255,.9);
          background-color: #ff0036;
        }

        &.no-border {
          border: none;
        }

        // &:hover {
          // color: #fff;
          // background-color: #ff0036;
        // }
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
            margin: 20px 0 55px;

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
            width: 100%;
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
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
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
