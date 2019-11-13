<template>
    <div class="message-box">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <!-- banner1 -->
        <div class="inner-bg banner1-bg">
            <div class="inner banner1">
                <p class="title1">海量真店源</p>
                <p class="title2">省钱买好店</p>
                <p class="description">仟呗 陪你发现最好的店</p>
            </div>
        </div>

        <!-- 店铺信息透明 -->
        <div class="inner-bg shopinfo-bg">
            <div class="inner shopinfo">
                <div class="title-box">
                    <p class="title">店铺信息透明</p>
                    <p class="info">网店信息全面公开</p>
                </div>
                <ul class="content">
                    <li class="item" v-for="(item, index) in shopInfoList" :key="index">
                        <img :src="item.imgUrl">                        
                        <p class="title">{{ item.title }}</p>
                        <p class="text">{{ item.text }}</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- banner2 -->
        <div class="inner-bg banner2-bg">
            <div class="inner banner2">
                <p class="title1">卖家资源信息丰富</p>
                <p class="title2">品类齐全选择多样化</p>
                <p class="description">仟呗平台专注做天猫新店，天猫店，淘宝企业店铺，在店铺入驻，店铺装让领域长达5年多，掌握市面上几乎 所有店铺来源，让各个电商圈大牛达成长久的合作，在新电猫平台找到的店铺，我们承诺只会比其他右上更实惠，</p>
                <p class="description">信息展示更全面，在其他平台有的网店，仟呗90%都有，而仟呗有的网店其他平台掌握的不到60%。</p>
            </div>
        </div>

        <!-- 全新订单模式 -->
        <div class="inner-bg order-bg">
            <div class="inner order">
                <div class="title-box">
                    <p class="title">全新订单模式</p>
                    <p class="info">最快三天可交接完成</p>
                </div>
                <ul class="content">
                    <li class="item" :class="`item${index + 1}`" v-for="(item, index) in orderList" :key="index">
                        <p class="num">{{ item.num }}</p>
                        <p class="text">{{ item.text }}</p>
                        <div class="item-border"></div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- banner3 -->
        <div class="inner-bg banner3-bg">
            <div class="inner banner3">
                <p class="title1">全新入驻模式</p>
                <p class="title2">最快七天可交接完成</p>
                <p class="description">仟呗平台旨在为电商人创造安全便捷的网店交易平台 目前市面上所有的平台网店交易过于缓慢，切不能做 到全面保障。</p>
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
    name: "msg",
    components: {
        Header, Nav,
        Footer
    },
    data() {
        return {
            shopInfoList: [
                {
                    imgUrl: require("@/assets/images/shopinfo1.png"),
                    title: "真实店铺信息",
                    text: "仟呗平台只展示店铺真实状态, 专人合适违规扣分，商标信息，店铺贷款情况"
                },
                {
                    imgUrl: require("@/assets/images/shopinfo2.png"),
                    title: "分平台筛选",
                    text: "我们根据不同的平台店铺特点对 点朋友状态进行审查"
                },
                {
                    imgUrl: require("@/assets/images/shopinfo3.png"),
                    title: "全方位信息审核",
                    text: "对主营类目、续签考核、店铺贷款活动资质、开店时间、动态评分等全方面考察拒绝违规店铺、对客户产生损害"
                },
                {
                    imgUrl: require("@/assets/images/shopinfo4.png"),
                    title: "公司信息考察",
                    text: "我们也会对公司主体信息、商标信息、诉讼信息、企业信用信息等进行全面考察"
                },
                {
                    imgUrl: require("@/assets/images/shopinfo5.png"),
                    title: "严格的筛选原则",
                    text: "店源审核团队严谨的工作态度和精益求精的服务精神，认真执行上百条审核规范，有效拒绝问题店铺"
                },
                {
                    imgUrl: require("@/assets/images/shopinfo6.png"),
                    title: "商标信息审核",
                    text: "重点审核公司旗下商标名称商标小类，商标持有人，商标类型商标期限和商标状态"
                }
            ],
            orderList: [
                {
                    num: "1",
                    text: "全新订单模式，网上交接订单， 省时省力"
                },
                {
                    num: "2",
                    text: "替卖家承担全部交易风险， 批评他收款卖家上传资料后 逐步放款"
                },
                {
                    num: "3",
                    text: "专业律师撰写三方合同卖家 上传资料专人实时审核，及时反馈"
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .message-box {
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
            background: url("../assets/images/msg-banner1.png") no-repeat 70% 75%;

            .banner1 {
                font-weight: bold;
                text-align: right;
                color: #fff;
                padding-top: 170px;

                .title1 {
                    font-size: 70px;
                    line-height: 70px;
                }

                .title2 {
                    font-size: 70px;
                    line-height: 70px;
                    margin: 15px 0 45px;
                }

                .description {
                    font-size: 50px;
                    line-height: 50px;
                }
            }
        }

        .shopinfo-bg {
            background-color: #f8f8f8;

            .shopinfo {
                padding: 60px 0 80px;

                .content {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin-top: 45px;

                    .item {
                        width: 390px;
                        height: 340px;
                        text-align: center;
                        padding: 60px 35px 0;
                        margin-bottom: 20px;
                        background-color: #fff;
                        border-top: 2px solid #ff0537;
                        cursor: pointer;
                        transition: .5s;

                        &:hover {
                            transform: translate(0,-10px);
                            box-shadow: 0 5px 10px rgba(0,0,0,.1);
                        }

                        .title {
                            font-size: 26px;
                            font-weight: bold;
                            line-height: 26px;
                            color: #333;
                            margin: 38px 0 26px;
                        }

                        .text {
                            font-size: 18px;
                            line-height: 26px;
                            color: #999;
                        }
                    }
                }
            }
        }

        .banner2-bg {
            height: 672px;
            background: url("../assets/images/msg-banner2.png") no-repeat center;

            .banner2 {
                text-align: left;
                color: #fff;
                padding-top: 125px;

                .title1 {
                    font-size: 40px;
                    font-weight: bold;
                    line-height: 40px;
                }

                .title2 {
                    font-size: 28px;
                    line-height: 28px;
                    margin: 18px 0 60px;
                }

                .description {
                    width: 595px;
                    font-size: 24px;
                    line-height: 44px;
                }
            }
        }

        .order-bg {
            background-color: #f8f8f8;

            .order {
                padding: 100px 0 52px;

                .content {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 55px;

                    .item {
                        width: 370px;
                        height: 378px;
                        text-align: center;
                        padding: 60px 35px 0;
                        cursor: pointer;
                        transition: .5s;
                        position: relative;

                        &:hover {
                            transform: translate(0,-10px);
                            box-shadow: 0 5px 10px rgba(0,0,0,.1);
                        }

                        .num {
                            width: 64px;
                            font-size: 36px;
                            font-weight: bold;
                            line-height: 60px;
                            color: #fff;
                            margin: 0 auto;
                            border-radius: 50%;
                            border: 2px solid #fff;
                        }

                        .text {
                            width: 100%;
                            height: 195px;
                            font-size: 22px;
                            line-height: 36px;
                            color: #333;
                            display: flex;
                            align-items: center;
                            padding: 0 32px;
                            background-color: #fff;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                        }

                        .item-border {
                            width: calc(100% - 40px);
                            height: calc(100% - 40px);
                            border: 2px solid #f1f1f1;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                        }

                        
                    }

                    .item1 {
                        background: url("../assets/images/order1.png") no-repeat center;
                    }
                    .item2 {
                        background: url("../assets/images/order2.png") no-repeat center;
                    }
                    .item3 {
                        background: url("../assets/images/order3.png") no-repeat center;
                    }
                }
            }
        }

        .banner3-bg {
            height: 678px;
            background: url("../assets/images/msg-banner3.png") no-repeat center;

            .banner3 {
                text-align: left;
                color: #fff;
                padding: 185px 0 0 40px;

                .title1 {
                    font-size: 40px;
                    font-weight: bold;
                    line-height: 40px;
                }

                .title2 {
                    font-size: 28px;
                    line-height: 28px;
                    margin: 15px 0 70px;
                }

                .description {
                    width: 580px;
                    font-size: 24px;
                    line-height: 42px;
                }
            }
        }
    }
</style>