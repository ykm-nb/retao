<template>
    <!-- 代运营 -->
    <div class="operation-box">

        <div class="swiper-container">

            <div class="swiper-wrapper">
                <div class="swiper-slide">

                    <!-- 网店托管 -->
                    <div class="inner-bg trusteeship-bg">
                        <div class="inner trusteeship" v-if="activeIndex === 0">
                            <div class="title-box">
                                <p class="num">01</p>
                                <p class="title">网店托管</p>
                                <p class="description">百人顾问团队，为您提供专业的服务</p>
                                <p class="translate">TRUSTEESHIP</p>
                            </div>
                            <ul class="content">
                                <li v-for="(item, index) in trusteeshipList" :key="index" 
                                    :class="['item', `item${index}`]"
                                    :style="`background: url(${item.imgUrl}) no-repeat center`" 
                                >
                                    <p class="title">{{ item.title }}</p>
                                    <p class="info">{{ item.info }}</p>
                                </li>
                            </ul>
                            <button @click="consult" class="btn" type="button">联系客服</button>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">

                    <!-- 营销推广 -->
                    <div class="inner-bg popularize-bg">
                        <div class="inner popularize" v-if="activeIndex === 1">
                            <div class="title-box">
                                <p class="num">02</p>
                                <p class="title">营销推广</p>
                                <p class="description">专业多渠道推广，开拓市场</p>
                                <p class="translate">TRUSTEESHIP</p>
                            </div>
                            <div class="content">
                                <!-- 首个展示的 -->
                                <div class="first-ul-bg">
                                    <ul :class="['first-ul', {'first-ul1': switchUl}]" :style="getLeft">
                                        <li class="first-item">
                                            <p class="title">{{ popularList1[3].title }}</p>
                                            <p class="info">{{ popularList1[3].info }}</p>
                                            <div class="divide"></div>
                                            <ul class="tag tag1">
                                                <li v-for="(item1, index) in popularList1[3].tagLists.slice(0,2)" :key="index">
                                                    <img src="@/assets/images/operation-2-2.png">
                                                    <p>{{ item1 }}</p>
                                                </li>
                                            </ul>
                                            <ul class="tag tag2">
                                                <li v-for="(item2, index) in popularList1[3].tagLists.slice(2)" :key="index">
                                                    <img src="@/assets/images/operation-2-2.png">
                                                    <p>{{ item2 }}</p>
                                                </li>
                                            </ul>
                                            <div @click="consult" class="btn"></div>
                                        </li>
                                        <li class="first-item" v-for="(item, index) in popularList1" :key="index">
                                            <p class="title">{{ item.title }}</p>
                                            <p class="info">{{ item.info }}</p>
                                            <div class="divide"></div>
                                            <ul class="tag tag1">
                                                <li v-for="(item1, index) in item.tagLists.slice(0,2)" :key="index">
                                                    <img src="@/assets/images/operation-2-2.png">
                                                    <p>{{ item1 }}</p>
                                                </li>
                                            </ul>
                                            <ul class="tag tag2">
                                                <li v-for="(item2, index) in item.tagLists.slice(2)" :key="index">
                                                    <img src="@/assets/images/operation-2-2.png">
                                                    <p>{{ item2 }}</p>
                                                </li>
                                            </ul>
                                            <div @click="consult" class="btn"></div>
                                        </li>
                                        <li class="first-item">
                                            <p class="title">{{ popularList1[0].title }}</p>
                                            <p class="info">{{ popularList1[0].info }}</p>
                                            <div class="divide"></div>
                                            <ul class="tag tag1">
                                                <li v-for="(item1, index) in popularList1[0].tagLists.slice(0,2)" :key="index">
                                                    <img src="@/assets/images/operation-2-2.png">
                                                    <p>{{ item1 }}</p>
                                                </li>
                                            </ul>
                                            <ul class="tag tag2">
                                                <li v-for="(item2, index) in popularList1[0].tagLists.slice(2)" :key="index">
                                                    <img src="@/assets/images/operation-2-2.png">
                                                    <p>{{ item2 }}</p>
                                                </li>
                                            </ul>
                                            <div @click="consult" class="btn"></div>
                                        </li>
                                    </ul>

                                    <div class="right-index">
                                        <p class="cur-page">{{ returnPopIndex }}</p>
                                        <em>/</em>
                                        <p class="all-page">04</p>
                                    </div>
                                </div>

                                <transition-group name="fade" class="item-bg" tag="div">
                                    <div :class="['item', `item${item.id}`, {'last-item': index === 3 && clickRight}]" 
                                        v-for="(item, index) in popularList2" :key="item.id"
                                    >
                                        <p class="title">{{ item.title }}</p>
                                        <p class="refer">查看详情></p>
                                        <div>
                                            <p class="number">0{{ item.id }}</p>
                                            <p class="part">PART</p>
                                        </div>
                                    </div>
                                </transition-group>

                                <!-- 前进后退 -->
                                <div class="prev" @click="switchPopIndex('prev')"></div>
                                <div class="next" @click="switchPopIndex('next')"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">

                    <!-- 视觉设计 -->
                    <div class="inner-bg vision-bg">
                        <div class="inner vision" v-if="activeIndex === 2">
                            <div class="title-box">
                                <p class="num">03</p>
                                <p class="title">视觉设计</p>
                                <p class="description">注重原创，打造视觉冲击</p>
                                <p class="translate">POPULARIZE</p>
                            </div>
                            <ul class="content">
                                <img class="item item0" src="@/assets/images/operation-3-2-1.png">
                                <img class="item item1 item-bottom" src="@/assets/images/operation-3-2-2.png">
                                <img class="item item2" src="@/assets/images/operation-3-2-3.png">
                                <img class="item item3 item-bottom" src="@/assets/images/operation-3-2-4.png">
                                <img class="item item4" src="@/assets/images/operation-3-2-5.png">
                                <img class="item item5 item-bottom" src="@/assets/images/operation-3-2-6.png">
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">

                    <!-- 客服外包 -->
                    <div class="inner-bg epiboly-bg">
                        <div class="inner epiboly" v-if="activeIndex === 3">
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
                        <div class="inner advantage" v-if="activeIndex === 4">
                            <div class="title-box">
                                <p class="num">05</p>
                                <p class="title">仟呗优势</p>
                                <p class="description">为您提供专业解决方案</p>
                                <p class="translate">OUR SUPERIORITY</p>
                            </div>
                            <ul class="content">
                                <i class="sprite"></i>
                                <img class="item item0" src="@/assets/images/operation-5-2-1.png">
                                <img class="item item1" src="@/assets/images/operation-5-2-2.png">
                                <img class="item item2" src="@/assets/images/operation-5-2-3.png">
                                <img class="item item3" src="@/assets/images/operation-5-2-4.png">
                                <img class="text" src="@/assets/images/operation-5-2-5.png">
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">
                    
                    <!-- 合作伙伴 -->
                    <div class="inner-bg partner-bg">
                        <div class="inner partner" v-if="activeIndex === 5">
                            <div class="title-box">
                                <p class="num">06</p>
                                <p class="title">合作伙伴</p>
                                <p class="description">我们已经帮助100 企业实现销售目标</p>
                                <p class="translate">OUR SUPERIORITY</p>
                            </div>
                            <ul class="content">
                                <div class="img-box">
                                    <div>
                                        <img class="item item0" src="@/assets/images/operation-6-2-1.png">
                                        <ul class="ul0">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img class="item item1" src="@/assets/images/operation-6-2-2.png">
                                        <ul class="ul1">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img class="item item2" src="@/assets/images/operation-6-2-3.png">
                                        <ul class="ul2">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div class="common-boxbm">
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <i class="sprite"></i>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="circle6"></span>
            </div>

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
            activeIndex: 0, // 当前页面索引
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
            popIndex: 1,
            switchUl: false, // 首个展示索引4切换1 或 1切换4
            clickRight: false, // 点击的是否为next按钮
            popularList1: [
                {
                    id: 1,
                    title: '01营销策划',
                    info: '我们通过店铺全面分析，帮助店铺快速获取精准客户流量，解决客户不匹配、转化率低等问题，制定个性化推广营销策略，针对店铺产品进行合理化选择，快速成单，提高店铺运作效率，实现店铺销量和品牌双重提升。',
                    tagLists: ['客户管理', '活动提报', '文案策划', '促销策划']
                },
                {
                    id: 2,
                    title: "02直通车投放",
                    info: "针对客户对产品不够了解、需求不匹配、犹豫购买等情况。我们将通过一系列的优化手段，针对关键词、落地页、店铺整体视觉等进行优化和提升，让客户更精准，降低跳失率，提高转化率。",
                    tagLists: ['关键词优化', '人群优化', '地域优化', '创意优化']
                },
                {
                    id: 3,
                    title: "03钻展推广",
                    info: "我们将提供详细的店铺推广和创意文案，为店铺量身定制钻展推广方案，多年丰富的钻展投放经验、精心的主推产品分析，实现更精准的定向投放和新老客户的精准营销，完美配合店铺各类活动！",
                    tagLists: ['创意优化', '精准投放', '精确人群', '提高ROI']
                },
                {
                    id: 4,
                    title: "04淘宝客",
                    info: "我们将用丰富的经验呈现出每个行业产品的佣金模式，合理降低所需成本，提高利润率，为店铺提供更多流量，增加店铺知名度，帮助店铺更快更好的了解市场环境以及市场动态。",
                    tagLists: ['产品定位', '招募淘客', '佣金优化', '整体策划']
                }
            ],
            popularList2: [
                {
                    id: 1,
                    imgUrl: require("@/assets/images/operation-2-4.png"),
                    title: '01营销策划',
                },
                {
                    id: 2,
                    imgUrl: require("@/assets/images/operation-2-5.png"),
                    title: "02直通车投放",
                },
                {
                    id: 3,
                    imgUrl: require("@/assets/images/operation-2-6.png"),
                    title: "03钻展推广",
                },
                {
                    id: 4,
                    imgUrl: require("@/assets/images/operation-2-7.png"),
                    title: "04淘宝客",
                }
            ]
        }
    },
    computed: {
        getLeft () {
            return `left: -${this.popIndex * 460}px`
        },
        returnPopIndex () {
            const index = this.popIndex;
            if(index > 4) return `01`;
            if(index < 1) return `04`;
            return `0${index}`
        }
    },
    methods: {
        // swiper
        initSwiper() {
            const that = this;
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'vertical',
                speed: 800,
                mousewheel: true,
                on: {
                    slideChangeTransitionStart: function () {
                        that.activeIndex = this.activeIndex;
                        // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                    }
                },
            })
        },
        switchPopIndex (value) {
            value === 'next' ? this.popIndex += 1 : this.popIndex -= 1;
            this.switchUl = this.clickRight = false

            // 索引大于或小于
            if (this.popIndex === this.popularList1.length + 1) { // 大于
                setTimeout(() => {
                    this.popIndex = 1
                    this.switchUl = true
                }, 401)
            }
            if (this.popIndex === 0) { // 小于
                setTimeout(() => {
                    this.popIndex = this.popularList1.length
                    this.switchUl = true
                }, 401)
            }

            if (value === 'next') { // 切换小div
                this.clickRight = true
                let arr = this.popularList2.shift()
                this.popularList2.push(arr)
            } else {
                let arr = this.popularList2.pop()
                this.popularList2.unshift(arr)
            }
        },
        // 联系客服
        consult() {
            window.open("https://url.cn/5iD2Ua8?_type=wpa&qidian=true", '_blank');
        },
    },
    mounted () {
        this.initSwiper()
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

            .common-boxbm {
                width: 85px;
                height: 32px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: absolute;
                left: 50%;
                bottom: 18px;
                transform: translate(-50%);
                z-index: 99;

                span {
                    width: 5px;
                    height: 5px;
                    background-color: rgba(255,255,255,.5);
                    border-radius: 50%;
                }
                .circle1 {
                    animation: goWhite 1s 0.5s forwards infinite alternate;
                }
                .circle2 {
                    animation: goWhite 1s 1s forwards infinite alternate;
                }
                .circle3 {
                    animation: goWhite 1s 1.5s forwards infinite alternate;
                }
                .circle4 {
                    animation: goWhite 1s 2s forwards infinite alternate;
                }
                .circle5 {
                    animation: goWhite 1s 2.5s forwards infinite alternate;
                }
                .circle6 {
                    animation: goWhite 1s 3s forwards infinite alternate;
                }

                .sprite {
                    width: 22px;
                    height: 33px;
                    background: url("../assets/images/pull_down_fff.png") no-repeat center;
                    animation: goDown .6s linear forwards infinite alternate;
                    position: relative;
                }

                @keyframes goWhite {
                    100% {background-color: #fff}
                }
                @keyframes goDown {
                    100% {top: 2px}
                }
            }
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
                opacity: 1;
                animation: fadeInDown 1s;
                animation-delay: .4s;
                animation-fill-mode: both;
            }

            .title {
                font-size: 48px;
                font-weight: 400;
                line-height: 48px;
                margin: 20px 0 12px;
                opacity: 1;
                animation: fadeInDown 1s;
                animation-delay: .6s;
                animation-fill-mode: both;
            }

            .description {
                font-size: 18px;
                line-height: 18px;
                opacity: 1;
                animation: fadeInDown 1s;
                animation-delay: .8s;
                animation-fill-mode: both;
            }

            .translate {
                font-size: 18px;
                line-height: 18px;
                color: #fda55d;
                margin-top: 38px;
                opacity: 1;
                animation: fadeInDown 1s;
                animation-delay: 1s;
                animation-fill-mode: both;
            }
        }

        // 网店托管
        .trusteeship-bg {
            height: 100%;
            background: url("../assets/images/operation-trusteeship1.png") no-repeat 50% 0;

            .trusteeship {
                padding: 48px 0 60px;

                .content {
                    display: flex;
                    justify-content: space-between;
                    margin: 150px 0 100px;

                    .item {
                        width: 215px;
                        height: 266px;
                        text-align: left;
                        color: #fff;
                        opacity: 0;
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

                        &.item0 {
                            animation: fadeInLeft 1s forwards;
                            animation-delay: .6s;
                        }
                        &.item1 {
                            animation: fadeInLeft 1s forwards;
                            animation-delay: .4s;
                        }
                        &.item2 {
                            animation: fadeInUp 1s forwards;
                            animation-delay: .2s;
                        }
                        &.item3 {
                            animation: fadeInRight 1s forwards;
                            animation-delay: .4s;
                        }
                        &.item4 {
                            animation: fadeInRight 1s forwards;
                            animation-delay: .6s;
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

        // 营销推广
        .popularize-bg {
            height: 100%;
            background: #fc4bae url("../assets/images/operation-popularize1.png") no-repeat 50% 0;

            .popularize {
                padding: 36px 0 80px;

                .content {
                    width: 1102px;
                    height: 422px;
                    padding: 0 30px 0 260px;
                    margin: 50px auto 0;
                    background: url("../assets/images/operation-2-bg.png") no-repeat center;
                    position: relative;

                    // 首个展示的
                    .first-ul-bg {
                        width: 460px;
                        height: 450px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 32px rgba(46, 72, 242, 0.2);
                        overflow: hidden;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        z-index: 2;
                        animation: fadeInLeft 1s;
                        animation-delay: .4s;
                        animation-fill-mode: both;

                        .first-ul {
                            width: calc(460 * 4px);
                            display: flex;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            transition: .4s;

                            &.first-ul1 {
                                transition: 0s;
                            }

                            .first-item {
                                width: 460px;
                                height: 450px;
                                text-align: left;
                                flex-shrink: 0;
                                padding: 60px 0 0 50px;

                                .title {
                                    font-size: 28px;
                                    font-weight: bold;
                                    line-height: 28px;
                                    color: #9e5fef;
                                    margin-bottom: 20px;
                                }

                                .info {
                                    width: 370px;
                                    font-size: 14px;
                                    font-weight: bold;
                                    line-height: 25px;
                                    color: #808080;
                                }

                                .divide {
                                    width: 46px;
                                    height: 1px;
                                    margin: 20px 0;
                                    background: url("../assets/images/operation-2-1.png") no-repeat center;
                                }

                                .tag {
                                    width: 322px;
                                    height: 40px;
                                    line-height: 40px;
                                    display: flex;
                                    justify-content: space-around;
                                    padding: 0 12px;
                                    margin-bottom: 20px;
                                    background-color: #fff;
                                    border-radius: 40px;
                                    box-shadow: 0 0 21px rgba(0, 0, 0, 0.06);

                                    li {
                                        display: flex;
                                        align-items: center;

                                        p {
                                            font-size: 12px;
                                            line-height: 40px;
                                            color: #333;
                                            margin-left: 6px;
                                        }
                                    }

                                    &.tag2 {
                                        margin-bottom: 0;
                                    }
                                }

                                .btn {
                                    width: 160px;
                                    height: 40px;
                                    display: block;
                                    margin-top: 40px;
                                    background: url("../assets/images/operation-2-3.png") no-repeat center;
                                    transition: .4s;
                                    cursor: pointer;

                                    &:hover {
                                        background: url("../assets/images/operation-2-31.png") no-repeat center;
                                    }
                                }
                            }
                        }

                        .right-index {
                            width: 75px;
                            height: 24px;
                            display: flex;
                            align-items: flex-end;
                            position: absolute;
                            right: 30px;
                            bottom: 26px;

                            .cur-page {
                                font-size: 22px;
                                line-height: 22px;
                                color: #1e70f8;
                            }

                            em, .all-page {
                                font-size: 14px;
                                line-height: 14px;
                                color: #999;
                            }
                            em {
                                margin: 0 6px;
                            }
                        }
                    }

                    .item-bg {
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .fade-enter-active, .fade-leave-active {
                            transition: opacity .4s;
                        }
                        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                            opacity: 0;
                        }

                        .item {
                            width: 200px;
                            height: 256px;
                            text-align: left;
                            opacity: 0;
                            padding: 50px 0 0 25px;
                            overflow: hidden;
                            animation: fadeInRight 1s forwards;
                            transition: .4s;
                            position: relative;
                            z-index: 1;

                            // 最后一个item
                            &.last-item {
                                transition: 0s;
                                animation: lastItem .4s;
                            }
                            @keyframes lastItem {
                                0% {
                                    width: 0;
                                }
                                100% {
                                    width: 200px;
                                }
                            }

                            .title {
                                width: 100%;
                                height: 18px;
                                font-size: 18px;
                                line-height: 18px;
                                color: #fff;
                                margin-bottom: 18px;
                            }

                            .refer {
                                height: 12px;
                                font-size: 12px;
                                line-height: 12px;
                                color: #63bbf0;
                                cursor: pointer;
                            }

                            div {
                                width: 34px;
                                height: 42px;
                                text-align: center;
                                position: absolute;
                                bottom: 20px;
                                right: 20px;

                                .number {
                                    font-size: 22px;
                                    line-height: 22px;
                                    color: rgba(255, 255, 255, 0.4);
                                    margin-bottom: 6px;
                                }

                                .part {
                                    font-size: 12px;
                                    line-height: 12px;
                                    color: rgba(255, 255, 255, 0.4);
                                }
                            }
                        }

                        .item1 {
                            background: url("../assets/images/operation-2-4.png") no-repeat center;
                            animation-delay: .2s;
                        }
                        .item2 {
                            background: url("../assets/images/operation-2-5.png") no-repeat center;
                            animation-delay: .3s;
                        }
                        .item3 {
                            background: url("../assets/images/operation-2-6.png") no-repeat center;
                            animation-delay: .4s;
                        }
                        .item4 {
                            background: url("../assets/images/operation-2-7.png") no-repeat center;
                            animation-delay: .5s;
                        }
                    }

                    // 前进后退
                    .prev, .next {
                        width: 46px;
                        height: 46px;
                        border-radius: 50%;
                        box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
                        position: absolute;
                        top: 50%;
                        transition: .4s;
                        z-index: 3;
                        cursor: pointer;
                    }

                    .prev {
                        background: url("../assets/images/operation-2-left.png") no-repeat center;
                        left: 0;
                        transform: translate(-50%,-50%);

                        &:hover {
                            background: url("../assets/images/operation-2-left1.png") no-repeat center;
                        }
                    }

                    .next {
                        background: url("../assets/images/operation-2-right.png") no-repeat center;
                        right: 0;
                        transform: translate(50%,-50%);

                        &:hover {
                            background: url("../assets/images/operation-2-right1.png") no-repeat center;
                        }
                    }
                }
            }
        }

        // 视觉设计
        .vision-bg {
            height: 100%;
            background: #2e3b97 url("../assets/images/operation-3-1.png") no-repeat center;
            background-size: cover;

            .title-box .translate {
                color: #fda55d;
            }

            .vision {
                padding: 45px 0 160px;

                .content {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-top: 65px;

                    .item {
                        opacity: 0;
                        transition: all 0.3s linear;

                        &.item-bottom {
                            margin-top: 66px;
                        }

                        &.item0 {
                            animation: fadeInDown 1s forwards;
                            animation-delay: .1s;
                        }
                        &.item1 {
                            animation: fadeInUp 1s forwards;
                            animation-delay: .2s;
                        }
                        &.item2 {
                            animation: fadeInDown 1s forwards;
                            animation-delay: .3s;
                        }
                        &.item3 {
                            animation: fadeInUp 1s forwards;
                            animation-delay: .4s;
                        }
                        &.item4 {
                            animation: fadeInDown 1s forwards;
                            animation-delay: .5s;
                        }
                        &.item5 {
                            animation: fadeInUp 1s forwards;
                            animation-delay: .6s;
                        }
                    }
                }
            }
        }

        // 客服外包
        .epiboly-bg {
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
                    overflow: hidden;
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
                        animation: fadeInLeft 1s;
                        animation-delay: .4s;
                        animation-fill-mode: both;

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
                            opacity: 0;
                            animation: fadeInUp 1s forwards;

                            img {
                                width: 50%;
                            }
                        }

                        .custom {
                            animation-delay: .6s;

                            .text-box {
                                background-color: #05ccb6;
                            }
                        }

                        .after-sales {
                            animation-delay: .8s;

                            .text-box {
                                background-color: #7483ff;
                            }
                        }
                    }
                }
            }
        }

        // 仟呗优势
        .advantage-bg {
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
                    overflow: hidden;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: 5px;
                    margin-top: 105px;
                    background-color: #fafafa;
                    border-radius: 8px;
                    position: relative;

                    .sprite {
                        width: 37px;
                        height: 37px;
                        opacity: 0;
                        background: url("../assets/images/sprite2.png") no-repeat -303px -102px;
                        position: absolute;
                        left: 49%;
                        top: 38%;
                        transform: translate(-3px, 0) rotate(0);
                        animation: rollIn 1s forwards;
                        animation-delay: 1s;
                        z-index: 2;
                    }
                    @keyframes rollIn {
                        0% {
                            opacity: 0;
                            transform: translate(-100%, 0) rotate(-120deg);
                        }
                        100% {
                            opacity: 1;
                            transform: translate(-3px, 0) rotate(0);
                        }
                    }

                    .item {
                        width: 590px;
                        opacity: 0;
                        margin-bottom: 10px;

                        &.item0 {
                            animation: fadeInLeft 1s forwards;
                            animation-delay: .4s;
                        }
                        &.item1 {
                            animation: fadeInRight 1s forwards;
                            animation-delay: .6s;
                        }
                        &.item2 {
                            animation: fadeInLeft 1s forwards;
                            animation-delay: .8s;
                        }
                        &.item3 {
                            animation: fadeInRight 1s forwards;
                            animation-delay: 1s;
                        }
                    }

                    .text {
                        margin: 14px auto 10px;
                        animation: fadeInUp 1s;
                        animation-delay: 1s;
                        animation-fill-mode: both;
                    }
                }
            }
        }

        // 合作伙伴
        .partner-bg {
            height: 100%;
            background: #af30c5 url('../assets/images/operation-6-1.png') no-repeat 50% 100%;
            background-size: cover;

            .title-box .translate {
                font-size: 13px;
                line-height: 13px;
                color: #fda55d;
            }

            .partner {
                padding-top: 25px;

                .content {
                    margin-top: 60px;

                    .img-box {
                        width: 996px;
                        display: inline-block;
                        padding: 40px 20px;
                        margin: 0 auto;
                        background: url('../assets/images/operation-6-2-4.png') no-repeat center;
                        border-radius: 18px;

                        div {
                            width: 100%;
                            height: 107px;
                            margin-bottom: 10px;
                            position: relative;

                            .item {
                                opacity: 0;
                                animation: flipInX 1s forwards;

                                &.item0 {
                                    animation-delay: .4s;
                                }
                                &.item1 {
                                    animation-delay: .8s;
                                }
                                &.item2 {
                                    animation-delay: 1.2s;
                                }
                            }

                            ul {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: space-between;
                                position: absolute;
                                left: 0;
                                top: 0;
                                opacity: 0;
                                animation: flipInX 1s forwards;

                                li {
                                    width: 24%;
                                    height: 100%;
                                    box-shadow: 0px 1px 21px 0px rgba(0, 0, 0, 0.07);
                                }

                                &.ul0 {
                                    animation-delay: .4s;
                                }
                                &.ul1 {
                                    animation-delay: .8s;
                                }
                                &.ul2 {
                                    animation-delay: 1.2s;
                                }
                            }

                            @keyframes flipInX {
                                0% {
                                    opacity: 0;
                                    transform: perspective(400px) rotate3d(1,0,0,90deg);
                                    transition-timing-function: ease-in;
                                }
                                40% {
                                    opacity: 0;
                                    transform: perspective(400px) rotate3d(1,0,0,-20deg);
                                    transition-timing-function: ease-in;
                                }
                                60% {
                                    opacity: 1;
                                    transform: perspective(400px) rotate3d(1,0,0,10deg);
                                    transition-timing-function: ease-in;
                                }
                                80% {
                                    opacity: 1;
                                    transform: perspective(400px) rotate3d(1,0,0,-5deg);
                                }
                                100% {
                                    opacity: 1;
                                    transform: perspective(400px);
                                }
                            }
                        }
                    }
                }
            }
        }

        @keyframes fadeInDown {
            0% {
                opacity: 0;
                transform: translate(0, -100%);
            }
            100% {
                opacity: 1;
                transform: translate(0, 0);
            }
        }

        @keyframes fadeInLeft {
            0% {
                opacity: 0;
                transform: translate(-100%, 0);
            }
            100% {
                opacity: 1;
                transform: translate(0, 0);
            }
        }

        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translate(0, 100%);
            }
            100% {
                opacity: 1;
                transform: translate(0, 0);
            }
        }
        
        @keyframes fadeInRight {
            0% {
                opacity: 0;
                transform: translate(100%, 0);
            }
            100% {
                opacity: 1;
                transform: translate(0, 0);
            }
        }
    }
</style>