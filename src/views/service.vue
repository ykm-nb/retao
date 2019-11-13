<template>
    <div class="service-box">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <!-- banner1 -->
        <div class="inner-bg banner1-bg">
            <div class="inner banner1">
                <p class="title1">我们的服务通过专业</p>
                <p class="title2">提升客户价值</p>
                <p class="description">专业一站式入驻服务</p>
                <p class="description">品牌保证，快速开启电商梦想</p>
            </div>
        </div>

        <!-- banner2 -->
        <div class="inner-bg banner2-bg">
            <div class="inner banner2">
                <div class="layer" :class="`layer${index + 1}`"
                     v-for="(item, index) in list" :key="index"
                >
                    <img :src="item.imgUrl">
                    <div class="content">
                        <p class="title">{{ item.title }}</p>
                        <p class="description">{{ item.description }}</p>
                        <p class="text">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "service",
    components: {
        Header, Nav,
        Footer
    },
    data() {
        return {
            list: [
                {
                    imgUrl: require('@/assets/images/service-img1.png'),
                    title: "资金保障",
                    description: "提供资金担保 交易更放心",
                    text: "仟呗网交易模式全网领先，买家支付的购店款，全额冻结在自己平台账户内，交易时会分两次转至卖家账户；待交易完成平台确认交易成功无误后会把资金解冻到卖家账户，可进行提现。资金担保交易更放心。"
                },
                {
                    imgUrl: require('@/assets/images/service-img2.png'),
                    title: "真实店源",
                    description: "人工筛选确保店铺信息真实可靠无虚假",
                    text: "仟呗网交易模式全网领先，买家支付的购店款，全额冻结在自己平台账户内，交易时会分两次转至卖家账户；待交易完成平台确认交易成功无误后会把资金解冻到卖家账户，可进行提现。资金担保交易更放心。"
                },
                {
                    imgUrl: require('@/assets/images/service-img3.png'),
                    title: "资源丰富",
                    description: "更多平台合作买卖更便捷",
                    text: "仟呗网交易模式全网领先，买家支付的购店款，全额冻结在自己平台账户内，交易时会分两次转至卖家账户；待交易完成平台确认交易成功无误后会把资金解冻到卖家账户，可进行提现。资金担保交易更放心。"
                },
                {
                    imgUrl: require('@/assets/images/service-img4.png'),
                    title: "优质服务",
                    description: "专业团队全程为您提供一对一VIP服务",
                    text: "仟呗网交易模式全网领先，买家支付的购店款，全额冻结在自己平台账户内，交易时会分两次转至卖家账户；待交易完成平台确认交易成功无误后会把资金解冻到卖家账户，可进行提现。资金担保交易更放心。"
                },
                {
                    imgUrl: require('@/assets/images/service-img5.png'),
                    title: "法律资源",
                    description: "合同签订具有法律效益必要时提供法律支持",
                    text: "仟呗网交易模式全网领先，买家支付的购店款，全额冻结在自己平台账户内，交易时会分两次转至卖家账户；待交易完成平台确认交易成功无误后会把资金解冻到卖家账户，可进行提现。资金担保交易更放心。"
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .service-box {
        .title-box {
            text-align: center;
            position: relative;

            .title {
                font-size: 30px;
                line-height: 30px;
                font-weight: bold;
                color: #333;
                margin-bottom: 8px;
                background: url("../assets/images/title-bg.png") no-repeat center;
            }

            .info {
                font-size: 16px;
                line-height: 16px;
                color: #ccc;
            }
        }

        .banner1-bg {
            height: 600px;
            background: url("../assets/images/service-banner.png") no-repeat center;

            .banner1 {
                text-align: left;
                color: #fff;
                padding-top: 170px;

                .title1, .title2 {
                    font-size: 60px;
                    line-height: 60px;
                    font-weight: bold;
                }

                .title2 {
                    margin: 30px 0 35px;
                }

                .description {
                    font-size: 28px;
                    line-height: 28px;
                    margin-bottom: 20px;
                }
            }
        }

        .banner2-bg {
            height: 2385px;
            background: url("../assets/images/service-banner2.png") no-repeat center;

            .banner2 {
                text-align: left;
                color: #fff;
                padding: 95px 30px 0;

                .layer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 90px;

                    .content {
                        width: 520px;

                        .title {
                            font-size: 36px;
                            font-weight: bold;
                            line-height: 36px;
                        }

                        .description {
                            font-size: 24px;
                            font-weight: bold;
                            line-height: 24px;
                            margin: 12px 0;
                        }

                        .text {
                            font-size: 16px;
                            line-height: 24px;
                            color: #333;
                        }
                    }
                }

                .layer1 .content {
                    .title, .description {
                        color: #ff083c;
                    }
                }
                .layer2 {
                    flex-direction: row-reverse;

                    .content {
                        .title, .description {
                            color: #fc7f17;
                        }
                    }
                }
                .layer3 .content {
                    .title, .description {
                        color: #fead13;
                    }
                }
                .layer4 {
                    flex-direction: row-reverse;

                    .content {
                        .title, .description {
                            color: #fc7f17;
                        }
                    }
                }
                .layer5 .content {
                    .title, .description {
                        color: #fc7f17;
                    }
                }
            }
        }
    }
</style>