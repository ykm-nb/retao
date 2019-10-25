<template>
    <div class="container">
        <!-- 导航栏 -->
        <div class="inner-bg nav-bg">
            <div class="inner nav">
                <img src="@/assets/images/logo.png" alt="logo">

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
                </ul>
            </div>
        </div>

        <!-- 层2 -->
        <div class="inner-bg banner-bg">
            <div class="inner banner">
                <p class="title1">专注专业</p>
                <p class="title2">为企业加速</p>
                <button type="button">一站式工商代理与注册</button>
            </div>
        </div>
        
        <!-- 主营业务 -->
        <div class="inner-bg business-bg">
            <div class="inner business">
                <div class="title-box">
                    <p class="title">主营业务</p>
                </div>
                <div class="business-bottom">
                    <ul>
                        <li class="item" v-for="(business, index) in businessLists" :key="index">
                            <img :src="business.imgUrl">
                            <p>{{ business.text }}</p>
                            <button type="button">咨询客服</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 健康财税 -->
        <div class="inner-bg health-bg">
            <div class="inner health">
                <div class="title-box">
                    <p class="title">健康财税</p>
                </div>
                <div class="health-bottom">
                    <img src="@/assets/images/post-health1.png">
                </div>
            </div>
        </div>
        
        <!-- 代记账流程 -->
        <div class="inner-bg process-bg">
            <div class="inner process">
                <div class="title-box">
                    <p class="title">代记账流程</p>
                </div>
                <div class="process-bottom">
                    <img src="@/assets/images/post-process.png">
                </div>
                <div class="btn">
                    <button class="consult" type="button">在线咨询</button>
                    <button class="handle" type="button">立即办理</button>
                </div>
            </div>
        </div>

        <!-- 点击注册 -->
        <div class="inner-bg login-bg">
            <div class="login">
                <button type="button">点击注册</button>
            </div>
        </div>

        <!-- 注册流程 -->
        <div class="inner-bg process-bg loginprocess-bg">
            <div class="inner process loginprocess">
                <div class="title-box">
                    <p class="title">公司注册流程</p>
                </div>
                <div class="process-bottom loginprocess-bottom">
                    <img src="@/assets/images/post-loginprocess.png">
                </div>
                <div class="btn">
                    <button class="consult" type="button">在线咨询</button>
                    <button class="handle" type="button">立即办理</button>
                </div>
            </div>
        </div>

        <!-- 优势 -->
        <div class="inner-bg advantage-bg">
            <div class="inner advantage">
                <div class="title-box">
                    <p class="title">仟呗网优势</p>
                </div>
                <ul>
                    <img src="@/assets/images/post-process.png">
                </ul>
            </div>
        </div>

        <!-- 拿证 -->
        <div class="inner-bg cards-bg">
            <div class="inner cards">
                <button type="button">咨询客服</button>
            </div>
        </div>

        <!-- 底部 -->
        <Footer></Footer>

    </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "enterpriseservice",
    components: {
        Footer
    },
    data() {
        return {
            businessLists: [
                {
                    imgUrl: require("@/assets/images/post-business1.png"),
                    text: "代理记账"
                },
                {
                    imgUrl: require("@/assets/images/post-business2.png"),
                    text: "公司注册"
                },
                {
                    imgUrl: require("@/assets/images/post-business3.png"),
                    text: "公司转让"
                },
                {
                    imgUrl: require("@/assets/images/post-business4.png"),
                    text: "资质代办"
                }
            ]
        }
    },
    methods: {
        toIndexPage(page) {
            const { href } = this.$router.resolve({
                path: "/" + page,
            });
            window.open(href, "_blank");
        }
    }
}
</script>

<style lang="less" scoped>
    .container {
        // 导航栏
        .nav-bg {
            position: relative;
            
            .nav {
                display: flex;
                align-items: center;
                position: absolute;
                left: 50%;
                top: 60px;
                transform: translate(-50%);

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
                        color: #fff;

                        &:hover {
                            color: #b81a1a;
                        }
                    }
                }
            }
        }

        .banner-bg {
            background: url("../assets/images/post-banner.png") no-repeat center;

            .banner {
                height: 678px;
                position: relative;

                p {
                    font-size: 90px;
                    line-height: 90px;
                    font-weight: 400;
                    letter-spacing: 4px;
                    color: #fff;
                    text-shadow: 3px 3px 5px #000;
                    position: absolute;
                }

                .title1 {
                    top: 145px;
                    left: 68px;
                }

                .title2 {
                    top: 275px;
                    left: 28px;
                }

                button {
                    width: 298px;
                    font-size: 25px;
                    line-height: 54px;
                    font-weight: 400;
                    text-align: center;
                    color: #fff;
                    text-shadow: 3px 3px 5px #000;
                    background-color: transparent;
                    border: 1px solid #fff;
                    position: absolute;
                    top: 400px;
                    left: 68px;
                }
            }
        }

        .title-box {
            margin-bottom: 60px;

            .title {
                font-size: 36px;
                line-height: 36px;
                font-weight: bold;
                color: #000;
            }
        }

        // 主营业务
        .business-bg {
            .business {
                padding: 70px 0 95px;

                .business-bottom {
                    ul {
                        width:1160px;
                        display: flex;
                        justify-content: space-around;
                        margin: 0 auto;

                        .item {
                            position: relative;

                            p {
                                font-size: 36px;
                                line-height: 36px;
                                color: #000;
                                margin: 50px 0 24px;
                            }

                            button {
                                width: 120px;
                                font-size: 16px;
                                line-height: 40px;
                                text-align: center;
                                color: #fff;
                                background: #ee163a;
                                border: none;
                                border-radius: 50px;
                                position: absolute;
                                bottom: 42px;
                                left: 50%;
                                transform: translate(-50%);
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }

        // 健康财税
        .health-bg {
            background: url("../assets/images/post-healthbg.png") no-repeat center;

            .health {
                padding: 75px 0 100px;

                .title-box {
                    margin-bottom: 80px;
                }
            }
        }

        // 服务流程
        .process-bg {
            background-color: #fff;

            .title-box {
                margin-bottom: 85px;
            }

            .process {
                padding: 110px 0 65px;

                .process-bottom {
                    width: 1160px;
                    margin: 0 auto 108px;
                }

                .btn {
                    button {
                        width: 156px;
                        height: 60px;
                        line-height: 60px;
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        border-radius: 50px;
                        cursor: pointer;
                    }

                    .consult {
                        margin-right: 65px;
                        color: #ee163a;
                        background: #fff;
                        border: 1px solid #ee163a;
                    }

                    .handle {
                        color: #fff;
                        background: #ee163a;
                        border: none;
                    }
                }
            }
        }

        // 点击注册
        .login-bg {
            padding-top: 42px;
            background: #fafafa url("../assets/images/post-login.png") no-repeat 50% 100%;

            .login {
                height: 1072px;
                position: relative;

                button {
                    width: 195px;
                    font-size: 24px;
                    line-height: 60px;
                    font-weight: bold;
                    color: #fff;
                    background-color: #ee163a;
                    border: none;
                    border-radius: 50px;
                    position: absolute;
                    top: 55%;
                    left: 50%;
                    transform: translate(-50%,0);
                    cursor: pointer;
                }
            }
        }

        // 注册流程
        .loginprocess-bg {
            .loginprocess {
                padding: 95px 0 60px;

                .title-box {
                    margin-bottom: 85px;
                }

                .loginprocess-bottom {
                    margin-bottom: 68px;
                }

                .btn {
                    button {
                        width: 156px;
                        height: 60px;
                        line-height: 60px;
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        border-radius: 50px;
                        cursor: pointer;
                    }

                    .consult {
                        margin-right: 65px;
                        color: #ee163a;
                        background: #fff;
                        border: 1px solid #ee163a;
                    }

                    .handle {
                        color: #fff;
                        background: #ee163a;
                        border: none;
                    }
                }
            }
        }
        
        // 优势
        .advantage-bg {
            background-color: #1b1b1b;

            .advantage {
                padding: 120px 0 140px;

                .title-box {
                    margin-bottom: 90px;

                    .title {
                        color: #fff
                    }
                }

                ul {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

        .cards-bg {
            height: 570px;
            background: url("../assets/images/post-cards.png") no-repeat center;

            .cards {
                height: 100%;
                position: relative;

                button {
                    width: 192px;
                    font-size: 16px;
                    line-height: 43px;
                    text-align: center;
                    color: #fff;
                    background-color: #ff734d;
                    border: none;
                    position: absolute;
                    left: 50%;
                    bottom: 48px;
                    transform: translate(-50%,0);
                    cursor: pointer;
                }
            }
        }
    }
</style>