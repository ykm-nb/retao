<template>
  <div class="index">
    
    <!-- 头部 -->
    <div class="inner-bg header-bg">
        <div class="inner header">
            <div class="header-left">
                <p>欢迎来到风向区！</p>
                <p>
                    <span>登录</span>
                    <span> / </span>
                    <span>注册</span>
                </p>
            </div>

            <ul class="header-right">
                <li>个人中心</li>
                <li>关注风向区</li>
                <li>免费咨询热线：400-168-1019</li>
                <li>网站地图</li>
            </ul>
        </div>
    </div>

    <!-- 导航 -->
    <div class="inner-bg nav-bg">
        <div class="inner nav">
            <img src="./components/images/logo.png" alt="logo">

            <ul>
                <li>首页</li>
                <li>天猫转让</li>
                <li>网店代入驻</li>
                <li>商标转让</li>
                <li>网店代运营</li>
                <li>网店服务</li>
                <li>
                    <span>知识产权</span>
                    <i class="iconfont iconxia"></i>
                </li>
                <li>
                    <span>企业服务</span>
                    <i class="iconfont iconxia"></i>
                </li>
                <li>
                    <span>网站建设</span>
                    <i class="iconfont iconxia"></i>
                </li>
                <button type="button">咨询顾问</button>
            </ul>
        </div>
    </div>

    <div class="inner-bg banner"></div>

    <div class="inner-bg main-bg">
        <div class="inner main">
            <div class="layer1">
                <div class="top">
                    <input type="text" placeholder="请输入关键词进行搜索，如：3c数码">
                    <button type="button">搜索</button>
                    <div class="type">
                        <span class="text">{{ selectedText }}</span>
                        <i class="iconfont iconxia"></i>
                        <ul class="dropdown">
                            <li 
                                v-for="(item, index) in dropdownList" 
                                :key="index" 
                                @click="selectedType(dropdownList[index])"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="type">
                    <div class="item item0">
                        <p class="title">网店交易</p>
                        <ul>
                            <li class="actived">天猫老店</li>
                            <li>天猫新店</li>
                            <li>京东商城</li>
                            <li>企业淘宝</li>
                        </ul>
                    </div>
                    <div class="item item1">
                        <p class="title">知识产权</p>
                        <ul>
                            <li>商标转让</li>
                            <li>专利服务</li>
                            <li>商标设计</li>
                            <li>版权服务</li>
                            <li>商标注册</li>
                            <li>专利申请</li>
                        </ul>
                    </div>
                    <div class="item item1">
                        <p class="title">企业服务</p>
                        <ul>
                            <li>公司注册</li>
                            <li>代理记账</li>
                            <li>商标设计</li>
                            <li>公司转让</li>
                            <li>财税服务</li>
                            <li>专利申请</li>
                        </ul>
                    </div>
                    <div class="item item2">
                        <p class="title">电商服务</p>
                        <ul>
                            <li>天猫代入驻</li>
                            <li>天猫代运营</li>
                            <li>客服外包</li>
                            <li>店铺装修</li>
                        </ul>
                    </div>
                    <div class="item item3">
                        <p class="title">网站建设</p>
                        <ul>
                            <li>网站开发</li>
                            <li>APP开发</li>
                            <li>软件ui设计</li>
                            <li>微信开发</li>
                        </ul>
                    </div>
                </div>
                <div class="imgs">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div class="layer2">
                <div class="top">
                    <p class="title">网店交易</p>
                    <p class="info">海量店铺，给你好看</p>
                </div>
                <div class="content">
                    <img src="./components/images/shop1.png">
                    <div class="div1"></div>
                    <div class="div2"></div>
                    <div class="div3"></div>
                </div>
            </div>

            <div class="layer2 layer3">
                <div class="top">
                    <p class="title">商标交易</p>
                    <p class="info">百万优质商标、价格实惠、即买即用</p>
                </div>
                <div class="content">
                    <img src="./components/images/shop2.png">
                    <div class="div1"></div>
                    <div class="div2"></div>
                    <div class="div3"></div>
                    <div class="div4"></div>
                    <div class="div5"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="inner-bg zy-bg">
        <div class="inner zy">
            <div class="top">
                <p class="title">自营服务</p>
                <p class="info">以信息满足客户，以服务赢得客户</p>
            </div>
            <ul>
                <li>
                    <img src="./components/images/zy1.png">
                </li>
                <li>
                    <img src="./components/images/zy2.png">
                </li>
                <li>
                    <img src="./components/images/zy3.png">
                </li>
                <li>
                    <img src="./components/images/zy4.png">
                </li>
                <li class="li5">
                    <img src="./components/images/zy5.png">
                </li>
            </ul>
        </div>
    </div>

    <div class="inner-bg activity-bg">
        <div class="inner activity">
            <div class="top">
                <p class="title">活动入口</p>
                <p class="info">超高性价比 一条龙服务</p>
            </div>
            <ul>
                <li>
                    <img src="./components/images/activity1.png">
                </li>
                <li>
                    <img src="./components/images/activity2.png">
                </li>
                <li>
                    <img src="./components/images/activity3.png">
                </li>
            </ul>
        </div>
    </div>

    <div class="inner-bg service-bg">
        <div class="inner service">
            <div class="top">
                <p class="title">客服团队</p>
                <p class="info">优质服务，一对一免费咨询/专业顾问，准确高效解决问题</p>
            </div>
            <ul>
                <li>
                    <img class="avatar" src="./components/images/service.png">
                    <p class="name">缘粟</p>
                    <p class="description">2年从业经验</p>
                    <button class="qq" type="button">QQ咨询</button>
                    <button class="wechat" type="button">微信咨询</button>
                </li>
                <li>
                    <img class="avatar" src="./components/images/service.png">
                    <p class="name">缘粟</p>
                    <p class="description">2年从业经验</p>
                    <button class="qq" type="button">QQ咨询</button>
                    <button class="wechat" type="button">微信咨询</button>
                </li>
                <li>
                    <img class="avatar" src="./components/images/service.png">
                    <p class="name">缘粟</p>
                    <p class="description">2年从业经验</p>
                    <button class="qq" type="button">QQ咨询</button>
                    <button class="wechat" type="button">微信咨询</button>
                </li>
                <li>
                    <img class="avatar" src="./components/images/service.png">
                    <p class="name">缘粟</p>
                    <p class="description">2年从业经验</p>
                    <button class="qq" type="button">QQ咨询</button>
                    <button class="wechat" type="button">微信咨询</button>
                </li>
            </ul>
        </div>
    </div>

    <div class="inner-bg help-bg">
        <div class="inner help">
            <p class="help-title">帮助中心</p>
            <ul>
                <li>
                    <p class="question">
                        <img src="./components/images/help1.png">
                        <span>天猫商城转让要多久？买家准备什么？</span>
                    </p>
                    <p class="answer">
                        <img src="./components/images/help2.png">
                        <span>亲，您好，公司过户整个过程所需时间快的话十五天就可以完成了，在易店无忧在易店无忧</span>
                        <span><详情></span>
                    </p>
                </li>
                <li>
                    <p class="question">
                        <img src="./components/images/help1.png">
                        <span>天猫商城转让要多久？买家准备什么？</span>
                    </p>
                    <p class="answer">
                        <img src="./components/images/help2.png">
                        <span>亲，您好，公司过户整个过程所需时间快的话十五天就可以完成了，在易店无忧在易店无忧</span>
                        <span><详情></span>
                    </p>
                </li>
            </ul>
        </div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: 'index',
  components: {
    Footer
  },
  data() {
    return {
      selectedText: "网店交易",
      dropdownList: ['网店交易', '知识产权', '企业服务', '电商服务', '网站建设']
    }
  },
  methods: {
    
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.index {
    
    .header-bg {
        background-color: #f5f5f5;

        .header {
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .header-left {
                    width: 160px;
                    display: flex;
                    justify-content: space-between;

                    p span {
                        cursor: pointer;
                    }
                }

                .header-right {
                    width: 460px;
                    display: flex;
                    justify-content: space-between;

                    li {
                        color: #a599b1;
                        padding-right: 18px;
                        position: relative;
                        cursor: pointer;

                        &:after {
                            content: "";
                            height: 14px;
                            width: 2px;
                            display: block;
                            background-color: #a599b1;
                            position: absolute;
                            right: 0;
                            top: 50%;
                            transform: translate(0,-50%);
                        }
                    }

                    li:last-child {
                        padding-right: 0;

                        &:after {
                            display: none;
                        }
                    }
                }
        }
    }

    .nav {
        display: flex;
        align-items: center;
        padding: 22px 0;

        img {
            margin-right: 22px;
        }

        ul {
            width: 970px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            li {
                font-size: 16px;
                line-height: 30px;

                &:hover {
                    color: #b81a1a;
                }
            }

            button {
                color: #fff;
                display: inline-block;
                padding: 4px 10px;
                background-color: #ff7000;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }

    .banner {
        height: 900px;
        //   background: url('./components/images/banner1.jpg') no-repeat center;
    }

    .main-bg {
        background-color: #f5f5f5;

        .main {
            padding-bottom: 42px;

            .layer1 {
                padding: 25px 24px 45px;
                background-color: #fff;
                border-radius: 15px;
                position: relative;
                top: -30px;

                .top {
                    margin-bottom: 50px;
                    position: relative;

                    input {
                        width: calc(100% - 80px);
                        height: 40px;
                        font-size: 14px;
                        text-indent: 150px;
                        background-color: #f5f5f5;
                        border: none;
                        border-radius: 30px;
                    }

                    button {
                        width: 80px;
                        font-size: 16px;
                        line-height: 40px;
                        color: #fff;
                        background-color: #ff6600;
                        border: none;
                        border-radius: 30px;
                        position: absolute;
                        right: 0;
                        top: 0;
                        cursor: pointer;
                    }

                    .type {
                        height: 26px;
                        font-size: 14px;
                        line-height: 26px;
                        color: #d3d3d3;
                        padding-left: 10px;
                        border-right: 1px solid #e8e8e8;
                        position: absolute;
                        left: 5%;
                        top: 50%;
                        transform: translate(0, -50%);
                        cursor: pointer;

                        .text {
                            color: #000;
                        }

                        .iconxia {
                            display: inline-block;
                            margin: 0 15px 0 5px;
                            transform: translate(0, 1px);
                        }

                        .dropdown {
                            height: 0;
                            text-align: center;
                            margin-top: 4px;
                            background-color: #fff;
                            position: absolute;
                            left: 20px;
                            top: 72%;
                            transition: .6s;
                            transform: translate(-10px);
                            overflow: hidden;
                            z-index: 99;

                            li {
                                line-height: 20px;
                                transition: .4s;

                                &:hover {
                                    color: #b81a1a;
                                }
                            }
                        }

                        &:hover .dropdown {
                            height: 78px;
                        }
                    }
                }

                .type {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 22px;

                    .item {
                        .title {
                            font-size: 24px;
                            font-weight: bold;
                            margin-bottom: 6px;
                        }

                        ul {
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;

                            li {
                                font-size: 14px;
                                padding: 4px 6px;
                                margin-bottom: 8px;
                                border: 1px dashed #000;
                                cursor: pointer;

                                &.actived {
                                    color: #ff6600;
                                    border: 1px dashed #ff6600;
                                }
                            }
                        }
                    }

                    .item0 {
                        width: 150px;
                    }
                    .item1 {
                        width: 225px;
                    }
                    .item2 {
                        width: 175px;

                        li {
                            width: 84px;
                        }
                    }
                    .item3 {
                        width: 175px;

                        li {
                            width: 83px;
                        }
                    }
                }

                .imgs {
                    display: flex;
                    justify-content: space-between;

                    div {
                        width: 182px;
                        height: 240px;
                        border: 1px solid red;
                    }
                }
            }

            .layer2 {
                margin: 0 20px 50px;

                .top {
                    display: flex;
                    align-items: center;
                    margin-bottom: 18px;
                    
                    .title {
                        font-size: 24px;
                        font-weight: bold;
                        color: #000;
                        margin-right: 10px;
                    }

                    .info {
                        font-size: 14px;
                        color: #000;
                    }
                }

                .content {
                    position: relative;

                    div {
                        width:85px;
                        height: 20px;
                        background-color: transparent;
                        position: absolute;
                        top: 36%;
                        cursor: pointer;
                    }
                    .div1 {
                        left: 17%;
                    }
                    .div2 {
                        left: 45%;
                    }
                    .div3 {
                        left: 73%;
                    }
                }
            }

            .layer3 {
                margin-bottom: 0;

                .content {
                    .div4 {
                        top: 84%;
                        left: 32%;
                    }
                    .div5 {
                        top: 84%;
                        left: 74%;
                    }
                }
            }
        }
    }

    .zy {
        padding: 70px 0 90px;

        .top {
            margin-bottom: 60px;

            .title {
                font-size: 46px;
                line-height: 46px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .info {
                font-size: 18px;
                margin-bottom: 10px;
            }
        }

        ul {
            margin: 0 20px;

            li {
                margin-bottom: 16px;
            }

            .li5 {
                margin: 0;
            }
        }
    }

    .activity-bg {
        background-color: #f5f5f5;

        .activity {
            padding: 110px 0 125px;

            .top {
                margin-bottom: 50px;

                .title {
                    font-size: 46px;
                    line-height: 46px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .info {
                    font-size: 18px;
                    margin-bottom: 10px;
                }
            }

            ul {
                display: flex;
                justify-content: space-between;
                margin: 0 20px;
            }
        }
    }

    .service-bg {
        background-color: #000;

        .service {
            padding: 75px 0 95px;

            .top {
                color: #fff;
                margin-bottom: 65px;

                .title {
                    font-size: 46px;
                    line-height: 46px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .info {
                    font-size: 18px;
                    margin-bottom: 10px;
                }
            }

            ul {
                display: flex;
                justify-content: space-between;
                margin: 0 20px;

                li {
                    width: 250px;
                    padding: 28px 45px 50px;
                    background-color: #fff;
                    box-sizing: border-box;
                    border-radius: 5px;

                    .name {
                        font-size: 24px;
                        line-height: 24px;
                        color: #333333;
                        margin: 15px 0 10px;
                    }

                    .description {
                        font-size: 16px;
                        line-height: 16px;
                        color: #999;
                        margin-bottom: 24px;
                    }

                    button {
                        width: 142px;
                        font-size: 16px;
                        line-height: 42px;
                        color: #fff;
                        margin-bottom: 20px;
                        background-color: #d71421;
                        border: none;
                        border-radius: 25px;
                        cursor: pointer;
                    }

                    .wechat {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    .help-bg {
        .help {
            padding: 90px 0 95px;

            .help-title {
                font-size: 46px;
                line-height: 46px;
                font-weight: bold;
                color: #000;
                margin-bottom: 100px;
            }

            ul {
                margin: 0 20px;

                li {
                    margin-bottom: 35px;

                    p {
                        display: flex;
                        cursor: pointer;

                        img {
                            margin-right: 10px;
                        }

                        span {
                            color: #333;
                        }
                    }

                    .question {
                        margin-bottom: 12px;

                        span {
                            font-size: 16px;
                            line-height: 16px;
                            font-weight: bold;
                        }
                    }

                    .answer span {
                        max-width: 505px;
                        font-size: 14px;
                        line-height: 14px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        display: inline-block;
                        overflow: hidden;
                    }
                }

                li:last-child {
                    margin: 0;
                }
            }
        }
    }
    
}
</style>
