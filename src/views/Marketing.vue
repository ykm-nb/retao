<template>
    <div class="marketing">
        
        <!-- 头部 -->
        <div class="inner-bg header-bg">
            <div class="inner header"></div>
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
        </div>

        <!-- 发布任务 -->
        <div class="inner-bg publish-bg">
            <div class="inner publish">
                <div class="title-box">
                    <p class="title">发布任务</p>
                </div>
                <form>
                    <div class="layer">
                        <div class="item">
                            <p class="title">姓名（必填）</p>
                            <input type="text">
                        </div>
                        <div class="item">
                            <p class="title">QQ（非必填）</p>
                            <input type="text">
                        </div>
                    </div>
                    <div class="layer layer2">
                        <div class="item">
                            <p class="title">电话（必填）</p>
                            <input type="text">
                        </div>
                        <div class="item">
                            <p class="title">微信（非必填）</p>
                            <input type="text">
                        </div>
                        
                    </div>
                    <button type="button">立即提交</button>
                </form>
            </div>
        </div>

        <!-- 优质资源 -->
        <div class="inner-bg resource-bg">
            <div class="inner resource"></div>
        </div>

        <!-- 软文撰写 -->
        <div class="inner-bg write-bg">
            <div class="inner write">
                <!-- <button>购买服务 &gt;</button> -->
            </div>
        </div>

        <!-- 权威资源 -->
        <div class="inner-bg authority-bg">
            <div class="inner authority">
                <!-- <button>联系营销顾问 &gt;</button> -->
            </div>
        </div>

        <!-- 合作步骤 -->
        <div class="inner-bg step-bg">
            <div class="inner step"></div>
        </div>

        <!-- 合作品牌 -->
        <div class="inner-bg brand-bg">
            <div class="inner brand"></div>
        </div>

        <!-- 底部 -->
        <Footer></Footer>

    </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "marketing",
    components: {
        Footer
    }
}
</script>

<style lang="less">
    .marketing {
        // 头部
        .header-bg {
            background: url("../assets/images/marketing-header.png") no-repeat center;
            position: relative;

            .header {
                height: 786px;
            }

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

        // 标题
        .title-box {
            text-align: center;
            color: #000;
            margin: 0 auto 30px;
            
            .title {
                font-size: 36px;
                font-weight: bold;
                line-height: 36px;
            }
        }

        // 发布任务
        .publish-bg {
            background-color: #f5f5f5;
            height: 520px;

            .publish {
                padding: 72px 185px 50px;
                background-color: #fff;
                border-radius: 6px;
                box-sizing: border-box;
                transform: translate(0,-100px);

                form {
                    .layer {
                        margin-bottom: 25px;
                        display: flex;
                        justify-content: space-between;

                        .item {
                            width: 350px;

                            .title {
                                font-size: 20px;
                                line-height: 20px;
                                text-indent: 20px;
                                text-align: left;
                                color: #9a9899;
                                margin-bottom: 10px;
                            }

                            input {
                                width: 100%;
                                height: 48px;
                                font-size: 18px;
                                text-indent: 20px;
                                color: #9a9899;
                                background-color: #f5f5f5;
                                border: 1px solid #eee;
                            }
                        }

                        ul {
                            display: flex;

                            li {
                                display: flex;
                                align-items: center;
                                font-size: 20px;
                                line-height: 20px;
                                color: #9a9899;
                                margin-right: 20px;
                            }
                        }
                    }

                    .layer2 {
                        margin-bottom: 70px;
                    }

                    button {
                        width: 290px;
                        height: 86px;
                        font-size: 34px;
                        text-align: center;
                        color: #fff;
                        background-color: #ee163a;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                    }
                }
            }
        }
        
        // 优质资源
        .resource-bg {
            background: url("../assets/images/marketing-resource.png") no-repeat center;
            height: 1130px;
        }

        // 软文撰写
        .write-bg {
            background: url("../assets/images/marketing-write.png") no-repeat center;
            height: 952px;
        }

        // 权威资源
        .authority-bg {
            background: url("../assets/images/marketing-authority.png") no-repeat center;
            height: 740px;
        }

        // 合作步骤
        .step-bg {
            background: url("../assets/images/marketing-step.png") no-repeat center;
            height: 575px;
        }

        // 合作品牌
        .brand-bg {
            background: url("../assets/images/marketing-brand.png") no-repeat center;
            height: 622px;
        }
    }
</style>