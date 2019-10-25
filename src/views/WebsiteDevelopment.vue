<template>
    <div class="website-development">
        
        <!-- 头部 -->
        <header class="inner-bg header-bg">
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

        <div class="inner-bg publish-bg">
            <form class="inner publish">
                <div class="publish-top">
                    <div class="title">发布需求</div>
                    <div class="info">专业客服一对一为您解决问题</div>
                </div>
                <div class="publish-bottom">
                    <div class="layer">
                        <div class="item">
                            <input type="text" placeholder="请填写您的姓名">
                        </div>
                        <div class="item">
                            <input type="text" placeholder="请填写您的联系电话">
                        </div>
                    </div>
                    <div class="layer layer2">
                        <div class="item1">
                            <select>
                                <option value="">请选择开发项目</option>
                                <option value="web端">web端</option>
                                <option value="移动端">移动端</option>
                                <option value="微信端">微信端</option>
                                <option value="平板端">平板端</option>
                            </select>
                        </div>
                        <div class="item">
                            <input type="text" placeholder="请告诉我们您的需求预算金额">
                        </div>
                    </div>
                    <div class="layer layer3">
                        <textarea placeholder="请您简要描述您的需求，实现的功能、效果等 如：做一个类似于滴滴打车的APP,做个像淘宝一样的购物网站"></textarea>
                    </div>
                    <button>立即发布</button>
                </div>
            </form>
        </div>

        <!-- 服务专区 -->
        <div class="inner-bg service-bg">
            <div class="inner service">
                <div class="service-top">
                    <p class="title">服务专区</p>
                    <p class="info">精选服务类目，精品定制，随时随地，随心随性</p>
                </div>
                <ul class="service-bottom">
                    <li class="item" v-for="(service, index) in serviceLists" :key="index" :class="'item' + index">
                        <img :src="service.imgUrl">
                        <div class="item-right">
                            <p class="title">
                                <span>{{ service.title }}</span>
                                <span v-if="service.showHot" class="hot">HOT</span>
                            </p>
                            <p class="info">{{ service.info }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 合作流程 -->
        <div class="inner-bg process-bg">
            <div class="inner process"></div>
        </div>

        <!-- 优势 -->
        <div class="inner-bg advantage-bg">
            <div class="inner advantage"></div>
        </div>

        <!-- 底部 -->
        <Footer></Footer>

    </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "websitedevelopment",
    components: {
        Footer
    },
    data() {
        return {
            serviceLists: [
                {
                    imgUrl: require("@/assets/images/website-service1.png"),
                    title: "网站开发",
                    info: "企业网站、金融网站、电商网站",
                    showHot: true
                },
                {
                    imgUrl: require("@/assets/images/website-service2.png"),
                    title: "微信小程序开发",
                    info: "购物、游戏、休闲",
                    showHot: false
                },
                {
                    imgUrl: require("@/assets/images/website-service3.png"),
                    title: "APP开发",
                    info: "培训教育、健身运动、综合商城",
                    showHot: false
                },
                {
                    imgUrl: require("@/assets/images/website-service4.png"),
                    title: "软件UI设计",
                    info: "整套设计、启动封面、面板设计",
                    showHot: false
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

<style lang="less">
    .website-development {
        // 头部
        .header-bg {
            height: 500px;
            background: url("../assets/images/website-header.png") no-repeat center;
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

        // 发布需求
        .publish-bg {
            height: 600px;
            background-color: #f5f5f5;

            .publish {
                padding: 72px 155px 65px;
                margin: 0 auto;
                background-color: #fff;
                border-radius: 8px;
                box-sizing: border-box;
                transform: translate(0,-178px);

                .publish-top {
                    margin-bottom: 30px;

                    .title {
                        font-size: 46px;
                        line-height: 46px;
                        font-weight: bold;
                        color: #000;
                        margin-bottom: 10px;
                    }

                    .info {
                        font-size: 16px;
                        line-height: 16px;
                        color: #000;
                    }
                }

                .publish-bottom {
                    .layer {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 18px;

                        .item1 {
                            position: relative;

                            &:after {
                                content: "";
                                width: 0;
                                height: 0;
                                border-top: 8px solid #cccccc;
                                border-left: 8px solid transparent;
                                border-right: 8px solid transparent;
                                position: absolute;
                                right: 25px;
                                top: 50%;
                                transform: translate(0,-50%);
                            }
                        }

                        input::placeholder,
                        select::placeholder {
                            color: #b8b8b8;
                        }

                        input, select {
                            height: 50px;
                            width: 400px;
                            font-size: 16px;
                            text-indent: 20px;
                            color: #b8b8b8;
                            background-color: #f5f5f5;
                            border: 1px solid #eee;
                        }

                        select {
                            // 去除默认的三角形图标
                            -moz-appearance: none;
                            appearance: none;
                        }

                        textarea {
                            width: 100%;
                            height: 132px;
                            font-size: 16px;
                            text-indent: 20px;
                            color: #b8b8b8;
                            padding-top: 30px;
                            background-color: #f5f5f5;
                            box-sizing: border-box;
                            border: 1px solid #eee;
                            resize: none;
                        }
                    }

                    .layer2 {
                        margin-bottom: 32px;
                    }
                    .layer3 {
                        margin-bottom: 40px;
                    }

                    button {
                        width: 290px;
                        height: 86px;
                        font-size: 36px;
                        color: #fff;
                        margin: 0 auto;
                        background-color: #ee163a;
                        border-radius: 50px;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }

        // 服务专区
        .service-bg {
            background-color: #000;

            .service {
                padding: 95px 0 105px;

                .service-top {
                    color: #fff;
                    margin-bottom: 112px;

                    .title {
                        font-size: 46px;
                        line-height: 46px;
                        font-weight: bold;
                        margin-bottom: 16px;
                    }

                    .info {
                        font-size: 16px;
                        line-height: 16px;
                    }
                }

                .service-bottom {
                    width: 1064px;
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    margin: 0 auto;

                    .item {
                        height: 231px;
                        width: 580px;
                        margin-bottom: 20px;
                        padding: 70px 60px 70px 20px;
                        display: flex;
                        background-color: #fff;
                        box-sizing: border-box;

                        img {
                            margin-right: 45px;
                        }

                        .item-right {
                            text-align: left;
                            padding-top: 3px;

                            .title {
                                font-size: 39px;
                                line-height: 39px;
                                font-weight: 400;
                                color: #000;
                                margin-bottom: 18px;
                                position: relative;

                                .hot {
                                    height: 30px;
                                    font-size: 25px;
                                    line-height: 30px;
                                    font-weight: bold;
                                    color: #fff;
                                    padding: 0 10px;
                                    background-color: #f75130;
                                    border-radius: 10px;
                                    position: absolute;
                                    right: 85px;
                                    top: 50%;
                                    transform: translate(0,-50%);
                                }
                            }

                            .info {
                                font-size: 26px;
                                line-height: 26px;
                                font-weight: 400;
                                color: #000;
                            }
                        }
                    }

                    .item0 {
                        .item-right .info {
                            color: #74b63b;
                        }
                    }

                    .item2, item3 {
                        margin-bottom: 0;
                    }
                }
            }
        }

        // 合作流程
        .process-bg {
            height: 934px;
            background: url("../assets/images/website-process.png") no-repeat center;

        }

        // 优势
        .advantage-bg {
            height: 706px;
            background: url("../assets/images/website-advantage.png") no-repeat center;
        }
    }
</style>