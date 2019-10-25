<template>
    <!-- 代运营 -->
    <div class="operation">

        <header class="inner-bg header-bg">
            <!-- 导航 -->
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
        </header>

        <main>
            <!-- 店铺诊断 -->
            <div class="inner-bg shop-bg">
                <div class="inner shop">
                    <div class="title-box">
                        <p class="title">店铺诊断</p>
                    </div>
                    <form>
                        <div class="layer">
                            <div class="item iteml">
                                <p class="title">姓名（必填）</p>
                                <input type="text">
                            </div>
                            <div class="item itemr">
                                <p class="title">店铺主页链接（必填）</p>
                                <input type="text">
                            </div>
                        </div>
                        <div class="layer">
                            <div class="item iteml">
                                <p class="title">电话（必填）</p>
                                <input type="text">
                            </div>
                            <div class="item itemr">
                                <p class="title">邮箱（非必填）</p>
                                <input type="text">
                            </div>
                        </div>
                        <div class="layer layer1">
                            <ul>
                                <li>选择所需服务（可多选）：</li>
                                <li>
                                    <input type="checkbox">
                                    <span>代运营</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>客服外包</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>直通车</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>店铺装修</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>其他</span>
                                </li>
                            </ul>
                        </div>
                        <button type="button">立即提交</button>
                    </form>
                </div>
            </div>

            <!-- 服务项目 -->
            <div class="inner-bg project-bg">
                <div class="inner project">
                    <div class="title-box">
                        <p class="title">服务项目</p>
                    </div>
                    <ul class="project-bottom">
                        <li>
                            <img src="@/assets/images/operation-project1.png">
                        </li>
                        <li>
                            <img src="@/assets/images/operation-project2.png">
                        </li>
                        <li>
                            <img src="@/assets/images/operation-project3.png">
                        </li>
                        <li>
                            <img src="@/assets/images/operation-project4.png">
                        </li>
                        <li>
                            <img src="@/assets/images/operation-project5.png">
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 营销推广 -->
            <div class="inner-bg marketing-bg">
                <div class="inner marketing">
                    <div class="title-box">
                        <p class="title">营销推广</p>
                    </div>
                    <div class="marketing-bottom">
                        <ul class="aside">
                            <li class="actived">营销策划</li>
                            <li>直通车投放</li>
                            <li>钻展推广</li>
                            <li>引流加推</li>
                            <li>淘客宝</li>
                        </ul>
                        <div class="content">
                            <img src="@/assets/images/marketing1.png">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 视觉优化 -->
            <div class="inner-bg optimization-bg">
                <div class="inner optimization">
                    <div class="title-box">
                        <p class="title">视觉优化</p>
                    </div>
                    <ul class="optimization-bottom">
                        <li class="item-top">
                            <img src="@/assets/images/operation-optimization4.png">
                        </li>
                        <li class="item-top">
                            <img class="img1" src="@/assets/images/operation-optimization5.png">
                        </li>
                        <li>
                            <img src="@/assets/images/operation-optimization6.png">
                        </li>
                        <li>
                            <img class="img2" src="@/assets/images/operation-optimization7.png">
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 优势展示 -->
            <div class="inner-bg show-bg">
                <div class="inner show">
                    <div class="title-box">
                        <p class="title">优势展示</p>
                    </div>
                    <div class="show-bottom">
                        <img src="@/assets/images/show.png">
                    </div>
                </div>
            </div>
        </main>
        
        <!-- 底部 -->
        <Footer></Footer>

    </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "operation",
    components: {
        Footer
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
    .operation {
        // 头部
        .header-bg {
            height: 702px;
            background: url("../assets/images/operation-headbg.png") no-repeat center;
            position: relative;

            // 导航栏
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

        // 内容
        main {
            // 标题
            .title-box {
                text-align: center;
                color: #000;
                margin: 0 auto 52px;
                
                .title {
                    font-size: 50px;
                    font-weight: bold;
                    line-height: 50px;
                }
            }

            .shop-bg {
                background-color: #dacdeb;
            }
            // 店铺诊断
            .shop {
                padding: 78px 0 110px;

                form {
                    width: 950px;
                    margin: 0 auto;

                    .layer {
                        margin-bottom: 28px;
                        display: flex;
                        justify-content: space-between;

                        .item {
                            .title {
                                font-size: 18px;
                                line-height: 18px;
                                text-align: left;
                                text-indent: 10px;
                                color: #000;
                                margin-bottom: 10px;
                            }

                            input {
                                width: 100%;
                                height: 48px;
                                font-size: 18px;
                                text-indent: 20px;
                                color: #9a9899;
                                border: 1px solid #eeeeee;
                                border-radius: 2px;
                            }
                        }

                        .iteml {
                            width: 350px;
                        }
                        .itemr {
                            width: 470px;
                        }

                        ul {
                            display: flex;

                            li {
                                display: flex;
                                align-items: center;
                                font-size: 20px;
                                line-height: 20px;
                                color: #000;
                                margin-right: 35px;
                            }

                            li:first-child {
                                margin-right: 15px;
                            }
                        }
                    }

                    .layer1 {
                        margin-bottom: 85px;

                        li input {
                            width: 20px;
                            height: 20px;
                            margin-right: 8px;
                            border: 1px solid #eee;
                        }
                    }

                    button {
                        width: 290px;
                        height: 85px;
                        font-size: 34px;
                        text-align: center;
                        color: #fff;
                        background-color: #ff6600;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                    }
                }
            }

            .project-bg {
                background: #f5f5f5;

                .project {
                    padding: 88px 0 96px;

                    .project-bottom {
                        display: flex;
                        justify-content: space-between;
                        padding: 0 5px;
                        box-sizing: border-box;

                        li {
                            width: 224px;
                            border-radius: 12px;
                            overflow: hidden;
                        }
                    }
                }
            }

            .marketing-bg {
                background: #000;

                .marketing {
                    padding: 105px 0 98px;

                    .title-box {
                        margin-bottom: 95px;

                        .title {
                            color: #fff;
                        }
                    }

                    .marketing-bottom {
                        width: 1158px;
                        height: 900px;
                        display: flex;
                        margin: 0 auto;

                        .aside {
                            width: 250px;
                            height: 100%;

                            li {
                                height: calc(900px / 5);
                                font-size: 30px;
                                line-height: calc(900px / 5);
                                font-weight: 400;
                                color: #fff;
                                background-color: #ff812d;
                                cursor: pointer;

                                &.actived {
                                    background-color: #ff592d;
                                }
                            }
                        }

                        .content {
                            width: calc(1158px - 250px);
                            height: 100%;
                            background-color: #fff;
                        }
                    }
                }
            }

            .optimization-bg {
                background-color: #f5f5f5;

                .optimization {
                    padding: 100px 0 85px;

                    // 标题
                    .title-box {
                        margin-bottom: 75px;
                    }

                    .optimization-bottom {
                        width: 1160px;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        margin: 0 auto;

                        li {
                            &.item-top {
                                margin-bottom: 35px;
                            }
                        }
                    }
                }
            }

            .show-bg {
                // background: url("../assets/images/operation-show1.png") center;
                background: #000;

                .show {
                    padding: 120px 0 160px;

                    .title-box {
                        margin-bottom: 100px;

                        .title {
                            color: #fff;
                        }
                    }

                    .show-bottom {
                        // height: 410px;
                        // background: url("../assets/images/operation-show2.png") center;
                        border-radius: 8px;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>