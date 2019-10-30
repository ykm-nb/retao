<template>
  <div class="index">

    <!-- 头部 -->
    <Header id="header"></Header>

    <Nav></Nav>

    <div class="inner-bg banner-bg">
      <div class="inner banner">
        <div class="banner-left">
          <div class="city">
            <p class="title">热门城市</p>
            <ul>
              <li>北京</li>
              <li>上海</li>
              <li>深圳</li>
              <li>广州</li>
              <li>杭州</li>
              <li>金华</li>
              <li>绍兴</li>
              <li>温州</li>
              <li>嘉兴</li>
              <li>湖州</li>
              <li>苏州</li>
              <li>南京</li>
              <li>武汉</li>
              <li>长沙</li>
              <li>成都</li>
              <li>南昌</li>
              <li>泉州</li>
              <li>厦门</li>
              <li class="more">更多</li>
            </ul>
          </div>
          <div class="industry">
            <p class="title">热门类目</p>
            <ul>
              <li>住宅</li>
              <li>家居</li>
              <li>办公</li>
              <li>收纳</li>
              <li>清洁</li>
              <li>宠物</li>
              <li>服饰</li>
              <li>箱包</li>
              <li>鞋帽</li>
              <li>五金</li>
              <li>建材</li>
              <li>数码</li>
              <li>汽车</li>
              <li>珠宝</li>
              <li>配饰</li>
              <li>户外</li>
              <li>电器</li>
              <li>美妆</li>
              <li>母婴</li>
              <li>图书</li>
              <li>影音</li>
              <li class="more">更多</li>
            </ul>
          </div>
        </div>

        <div class="banner-right">
          <div class="avatar">
            <img src="./components/images/avatar.png">
            <p>专注电商，助推企业成长</p>
          </div>
          <div class="btn">
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
          <div class="swiper-slide slide1">
          </div>
          <div class="swiper-slide slide2">
          </div>
          <div class="swiper-slide slide3">
          </div>
        </div>

        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <Info></Info>

    <Shop1 id="shop1"></Shop1>

    <Service id="service"></Service>

    <Shop2 id="shop2"></Shop2>
    
    <Message id="msg"></Message>

    <Safe></Safe>

    <!-- 底部 -->
    <Footer id="footer"></Footer>

    <!-- 锚点 -->
    <ul class="anchor" :class="{'show-anchor': showAnchor}">
      <li @click="goto('service')" class="item">客服中心</li>
      <li @click="goto('shop1', 'start')" class="item">特惠店铺</li>
      <li @click="goto('shop1')" class="item">优质店铺</li>
      <li @click="goto('shop1', 'end')" class="item">稀缺店铺</li>
      <li @click="goto('shop2')" class="item">天猫转让</li>
      <li @click="goto('shop2')" class="item">淘宝过户</li>
      <li @click="goto('msg', 'start')" class="item">行业资讯</li>
      <li class="top" @click="goto('header')">
        <p>返回</p>
      </li>
    </ul>

  </div>
</template>

<script>
import ls from "store2";
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Info from "./components/info.vue";
import Shop1 from "./components/shop1.vue";
import Shop2 from "./components/shop2.vue";
import Safe from "./components/safe.vue";
import Service from "./components/service.vue";
import Message from "./components/message.vue";
import Footer from "@/components/Footer/Footer.vue";
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
      showAnchor: false
    }
  },
  methods: {
    initSwiper() { // swiper
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        
        // 分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
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
    // 跳转页面
    gotoPage(page, type) {
      const curPath = this.$route.path.substring(1);

      if(curPath === page) return; // 页面相同
      this.$router.push(`${page}?type=${type}`)
    },
    keyupEnter() {
      let a = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      (a > 400) ? this.showAnchor = true : this.showAnchor = false
    }
  },
  created() {
    ls.session.set("rtSearch", "")
    this.initSwiper()
  },
  mounted() {
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

        &:hover {
          color: #fff;
          background-color: #ff0036;
        }
      }

      .top {
        height: 36px;
        padding-top: 15px;
        background: url("./components/images/author.png") no-repeat center;

        p {
          font-size: 14px;
          color: #fff;
        }
      }
  }

  .banner-bg {
      height: 515px;
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
              margin-bottom: 20px;
              background: url("./components/images/banner-title.png") no-repeat center;
            }

            ul {
              display: flex;
              flex-wrap: wrap;
              margin: 0 22px;

              li {
                width: 43px;
                font-size: 15px;
                line-height: 20px;
                text-align: center;
                margin-bottom: 20px;
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
            margin-bottom: 28px;
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
          width: 100%;

          .slide1 {
            background: url('./components/images/banner2.jpg') no-repeat center;
          }
          .slide2 {
            background: url('./components/images/banner3.jpg') no-repeat center;
          }
          .slide3 {
            background: url('./components/images/banner4.jpg') no-repeat center;
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
            border-radius: 20px;
          }
        }
      }
  }
}
</style>
