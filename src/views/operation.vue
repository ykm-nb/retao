<template>
    <!-- 代运营 -->
    <div class="operation-box">

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">

                    <!-- 网店托管 -->
                    <div class="inner-bg trusteeship-bg">
                        <div class="inner trusteeship">
                            <div class="title-box">
                                <p class="num">01</p>
                                <p class="title">网店托管</p>
                                <p class="description">百人顾问团队，为您提供专业的服务</p>
                                <p class="translate">TRUSTEESHIP</p>
                            </div>
                            <ul class="content">
                                <li v-for="(item, index) in trusteeshipList" :key="index"
                                    :style="`background: url(${item.imgUrl}) no-repeat center`"
                                >
                                    <p class="title">{{ item.title }}</p>
                                    <p class="info">{{ item.info }}</p>
                                </li>
                            </ul>
                            <button class="btn" type="button">联系客服</button>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">

                    <!-- 营销推广 -->
                    <div class="inner-bg popularize-bg">
                        <div class="inner popularize">
                            <div class="title-box">
                                <p class="num">02</p>
                                <p class="title">营销推广</p>
                                <p class="description">专业多渠道推广，开拓市场</p>
                                <p class="translate">TRUSTEESHIP</p>
                            </div>
                            <ul class="content">
                                <li class="item" v-for="(item, index) in trusteeshipList.slice(0,3)" :key="index">
                                    <img :src="item.imgUrl">                        
                                    <p class="title">{{ item.title }}</p>
                                    <p class="text">{{ item.text }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">

                    <!-- 视觉设计 -->
                    <div class="inner-bg vision-bg">
                        <div class="inner vision">
                            <div class="title-box">
                                <p class="num">03</p>
                                <p class="title">视觉设计</p>
                                <p class="description">注重原创，打造视觉冲击</p>
                                <p class="translate">POPULARIZE</p>
                            </div>
                            <ul class="content">
                                <img src="@/assets/images/operation-3-2.png">
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">

                    <!-- 客服外包 -->
                    <div class="inner-bg epiboly-bg">
                        <div class="inner epiboly">
                            <div class="title-box">
                                <p class="num">04</p>
                                <p class="title">客服外包</p>
                                <p class="description">专业团队，有效提升转化率</p>
                                <p class="translate">CUSTOME SERVICE</p>
                            </div>
                            <ul class="content">
                                <!-- 售前 -->
                                <div class="pre-sales">
                                    <div class="text-box">
                                        <p class="title">售前客服</p>
                                        <p class="info">从业经验：2年以上</p>
                                        <p class="info">相关类目：服饰鞋包、住宅家具、3C数码、 母婴用品等20多个类目</p>
                                        <p class="info">主要职责：问候、答疑、导购、关联销售、催单、合核实订单、客户回访等服务</p>
                                    </div>
                                </div>
                                <div class="right">
                                    <!-- 定制 -->
                                    <div class="custom">
                                        <img src="@/assets/images/operation-4-3.png">
                                        <div class="text-box">
                                            <p class="title">售前客服</p>
                                            <p class="info">从业经验：2年以上</p>
                                            <p class="info">相关类目：服饰鞋包、住宅家具、3C数码、 母婴用品等20多个类目</p>
                                            <p class="info">主要职责：问候、答疑、导购、关联销售、催单、合核实订单、客户回访等服务</p>
                                        </div>
                                    </div>
                                    <!-- 售后 -->
                                    <div class="after-sales">
                                        <div class="text-box">
                                            <p class="title">售前客服</p>
                                            <p class="info">从业经验：2年以上</p>
                                            <p class="info">相关类目：服饰鞋包、住宅家具、3C数码、 母婴用品等20多个类目</p>
                                            <p class="info">主要职责：问候、答疑、导购、关联销售、催单、合核实订单、客户回访等服务</p>
                                        </div>
                                        <img src="@/assets/images/operation-4-4.png">
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">

                    <!-- 仟呗优势 -->
                    <div class="inner-bg advantage-bg">
                        <div class="inner advantage">
                            <div class="title-box">
                                <p class="num">05</p>
                                <p class="title">仟呗优势</p>
                                <p class="description">为您提供专业解决方案</p>
                                <p class="translate">OUR SUPERIORITY</p>
                            </div>
                            <ul class="content">
                                <img src="@/assets/images/operation-5-2.png">
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">
                    
                    <!-- 合作伙伴 -->
                    <div class="inner-bg partner-bg">
                        <div class="inner partner">
                            <div class="title-box">
                                <p class="num">06</p>
                                <p class="title">合作伙伴</p>
                                <p class="description">我们已经帮助100 企业实现销售目标</p>
                                <p class="translate">OUR SUPERIORITY</p>
                            </div>
                            <ul class="content">
                                <div class="img-box">
                                    <img src="@/assets/images/operation-6-2.png">
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>

    </div>
</template>

<script>
// Swiper
import Swiper from 'swiper';
export default {
    name: "operation",
    data () {
        return {
            trusteeshipList: [
                {
                    imgUrl: require("@/assets/images/operation-trusteeship3.png"),
                    title: "基本服务",
                    info: "店铺定位分析 行业整体分析"
                },
                {
                    imgUrl: require("@/assets/images/operation-trusteeship4.png"),
                    title: "营销策划",
                    info: "整合营销资源 制定策划方案"
                },
                {
                    imgUrl: require("@/assets/images/operation-trusteeship5.png"),
                    title: "视觉设计",
                    info: "增强店铺格调 产品视觉优化"
                },
                {
                    imgUrl: require("@/assets/images/operation-trusteeship6.png"),
                    title: "流量推广",
                    info: "精确投放引流 提升转化率"
                },
                {
                    imgUrl: require("@/assets/images/operation-trusteeship7.png"),
                    title: "客服团队",
                    info: "专业团队主导 成熟管理体系"
                }
            ],
        }
    },
    methods: {
        scroll () {
            
        },
        initSwiper() { // swiper
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'vertical',
                speed: 800,
                mousewheel: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'fraction',
                },
                // on:{
                //     init: function(){
                //         swiperAnimateCache(this);
                //         swiperAnimate(this);
                //     },
                //     slideChangeTransitionEnd: function(){
                //         swiperAnimate(this);
                //     }
                // }
            })
        },
    },
    created () {
        
    },
    mounted () {
        this.initSwiper();
    }
}
</script>

<style lang="less" scoped>
    .operation-box {
        width: 100%;
        height: 100%;

        .swiper-container {
            width: 100%;
            height: 100%;
        }

        .title-box {
            height: 260px;
            text-align: center;
            color: #fff;
            padding-top: 44px;
            background: url("../assets/images/operation-titlebg.png") no-repeat center;

            .num {
                font-size: 48px;
                font-weight: bold;
                line-height: 48px;
            }

            .title {
                font-size: 48px;
                font-weight: 400;
                line-height: 48px;
                margin: 20px 0 12px;
            }

            .description {
                font-size: 18px;
                line-height: 18px;
            }

            .translate {
                font-size: 18px;
                line-height: 18px;
                color: #fda55d;
                margin-top: 38px;
            }
        }

        .trusteeship-bg {
            // height: 1000px;
            height: 100%;
            background: url("../assets/images/operation-trusteeship1.png") no-repeat 50% 0;

            .trusteeship {
                padding: 48px 0 60px;

                .content {
                    display: flex;
                    justify-content: space-between;
                    margin: 170px 0 145px;
                    
                    li {
                        width: 215px;
                        height: 266px;
                        text-align: left;
                        color: white;
                        padding-left: 20px;

                        .title {
                            font-size: 30px;
                            font-weight: 400;
                            line-height: 30px;
                            margin: 95px 0 25px;
                        }

                        .info {
                            width: 110px;
                            font-size: 18px;
                            line-height: 26px;
                        }
                    }
                }

                .btn {
                    width: 180px;
                    height: 50px;
                    font-size: 24px;
                    line-height: 50px;
                    color: white;
                    background: linear-gradient(to right, #f4ca48, #fcab55);
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                }
            }
        }

        .popularize-bg {
            // height: 890px;
            height: 100%;
            background: #fc4bae url("../assets/images/operation-popularize1.png") no-repeat 50% 0;

            .popularize {
                padding: 36px 0 80px;

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

        .vision-bg {
            // height: 898px;
            height: 100%;
            background: #2e3b97 url("../assets/images/operation-3-1.png") no-repeat center;
            background-size: cover;

            .title-box .translate {
                color: #fda55d;
            }

            .vision {
                padding: 45px 0 160px;

                .content {
                    margin-top: 65px;
                }
            }
        }

        .epiboly-bg {
            // height: 964px;
            height: 100%;
            background: url("../assets/images/operation-4-1.png") no-repeat 50% 100%;

            .title-box .translate {
                font-size: 13px;
                line-height: 13px;
                color: #fa7126;
            }

            .epiboly {
                padding-top: 35px;

                .content {
                    height: 440px;
                    display: flex;
                    margin-top: 96px;
                    z-index: 2;

                    .text-box {
                        width: 300px;
                        height: 220px;
                        text-align: left;
                        color: #fff;
                        padding: 22px 20px 0;

                        .title {
                            font-size: 24px;
                            line-height: 24px;
                            padding-bottom: 12px;
                            margin-bottom: 25px;
                            position: relative;
                            
                            &:after {
                                content: "";
                                width: 36px;
                                height: 1px;
                                background-color: #fff;
                                position: absolute;
                                left: 0;
                                bottom: 0;
                            }
                        }

                        .info {
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }

                    .pre-sales {
                        width: 50%;
                        background: url("../assets/images/operation-4-2.png") no-repeat center;
                        position: relative;

                        .text-box {
                            background-color: rgba(107,71,157,.8);
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }

                    .right {
                        width: 50%;
                        display: flex;
                        flex-wrap: wrap;

                        .custom, .after-sales {
                            height: 220px;
                            display: flex;
                            overflow: hidden;

                            img {
                                width: 50%;
                            }
                        }

                        .custom .text-box {
                            background-color: #05ccb6;
                        }

                        .after-sales .text-box {
                            background-color: #7483ff;
                        }
                    }
                }
            }
        }

        .advantage-bg {
            // height: 1018px;
            height: 100%;
            background: url("../assets/images/operation-5-1.png") no-repeat center;

            .title-box .translate {
                font-size: 13px;
                line-height: 13px;
                color: #fda55d;
            }

            .advantage {
                padding-top: 62px;

                .content {
                    margin-top: 105px;
                }
            }
        }

        .partner-bg {
            // height: 780px;
            height: 100%;
            background: #af30c5 url("../assets/images/operation-6-1.png") no-repeat 50% 100%;
            background-size: cover;

            .title-box .translate {
                font-size: 13px;
                line-height: 13px;
                color: #fda55d;
            }

            .partner {
                padding-top: 25px;

                .content {
                    margin-top: 22px;

                    .img-box {
                        display: inline-block;
                        padding: 40px 20px;
                        margin: 0 auto;
                        background-color: #fff;
                        border-radius: 18px;
                    }
                }
            }
        }
    }
</style>