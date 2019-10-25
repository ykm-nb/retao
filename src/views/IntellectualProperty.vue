<template>
    <div class="intellectuall-property">
        
        <!-- 头部 -->
        <div class="inner-bg header-bg">
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

        <!-- 限时秒杀 -->
        <div class="inner-bg limit-bg">
            <div class="inner limit">
                <img src="@/assets/images/intell1.png">
            </div>
        </div>

        <!-- 注册商标理由 -->
        <div class="inner-bg reason-bg">
            <div class="inner reason"></div>
        </div>

        <!-- 展示 -->
        <div class="inner-bg show-bg">
            <div class="inner show"></div>
        </div>

        <!-- 设计需求 -->
        <div class="inner-bg require-bg">
            <div class="inner require"></div>
        </div>

        <!-- 底部 -->
        <Footer></Footer>

    </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "intellectuallproperty",
    components: {
        Footer
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
    .intellectuall-property {
        // 头部
        .header-bg {
            height: 801px;
            padding-top: 40px;
            background: url("../assets/images/intellectuall-index2.png") no-repeat center;
            box-sizing: border-box;
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

        // 限时秒杀
        .limit-bg {
            background-color: #fff;

            .limit {
                padding: 80px 0 55px;
            }
        }

        // 注册商标理由
        .reason-bg {
            height: 1120px;
            background: url("../assets/images/intell2.png") no-repeat center;
        }

        // 展示
        .show-bg {
            height: 836px;
            background: url("../assets/images/intell3.png") no-repeat center;
        }

        // 设计需求
        .require-bg {
            height: 1032px;
            background: url("../assets/images/intell4.png") no-repeat center;
        }
    }
</style>