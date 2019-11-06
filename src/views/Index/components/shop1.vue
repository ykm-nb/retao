<template>
    <div class="inner-bg shop1-bg">
        <div class="inner shop1">
            <!-- 特价 -->
            <div class="layer layer1" v-if="tjList.length">
                <div class="layer-left">
                    <div class="top">
                        <p class="title">特价店铺</p>
                        <p class="info">活动店铺限时购</p>
                    </div>
                    <div class="first-shop">
                        <img :src="tjList[0].mainProductUrl">
                        <p class="item1">
                            <span class="name">{{ tjList[0].mainProductName }}</span>
                            <span class="price">{{ tjList[0].price }}万</span>
                        </p>
                        <p class="item2">
                            <span>{{ tjList[0].mainProductName }}</span>
                            <span>{{ tjList[0].trademarkCategory }}类</span>
                            <span>R标</span>
                        </p>
                    </div>
                </div>

                <ul class="layer-right">
                    <li class="item" v-for="(item, index) in tjList.slice(1,4)" :key="index">
                        <div class="time-limit">
                            <img src="./images/shop1-limit.png">
                            <span>{{ index==0?`${day1}天${hour1}时${minute1}分${second1}秒`:'' || index==1?`${day2}天${hour2}时${minute2}分${second2}秒`:'' || index==2?`${day3}天${hour3}时${minute3}分${second3}秒`:'' }}</span>
                        </div>
                        <div class="goods-img">
                            <img :src="item.mainProductUrl">
                        </div>
                        <div class="section1">
                            <img src="./images/tm.png">
                            <div>
                                <p class="name">{{ item.storeName }}</p>
                                <p>
                                    <span>{{ item.mainProductName }}</span>
                                    <span style="margin: 0 4px">{{ item.trademarkCategory }}类</span>
                                    <span>R标</span>
                                </p>
                            </div>
                        </div>
                        <div class="section2">
                            <div class="left">
                                <p class="store-type">{{ item.mainProductName }} {{ item.storeType==1?'专营店':'' || item.storeType==2?'旗舰店':'' || item.storeType==3?'专卖店':'' }}</p>
                                <p>
                                    <span>R标</span>
                                    <span>{{ `${item.province}${item.city}` }}</span>
                                </p>
                            </div>
                            <div class="right">
                                <p>{{ item.price }}万</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- 优质 -->
            <div class="layer layer2" v-if="yzList.length">
                <div class="layer-left">
                    <div class="top">
                        <p class="title">优质店铺</p>
                        <p class="info">品牌商标任您挑</p>
                    </div>
                    <div class="first-shop">
                        <img :src="yzList[0].mainProductUrl">
                        <p class="item1">
                            <span class="name">{{ yzList[0].mainProductName }}</span>
                            <span class="price">{{ yzList[0].price }}万</span>
                        </p>
                        <p class="item2">
                            <span>{{ yzList[0].mainProductName }}</span>
                            <span>{{ yzList[0].trademarkCategory }}类</span>
                            <span>R标</span>
                        </p>
                    </div>
                </div>

                <ul class="layer-right">
                    <p class="no-data" v-if="yzList.length < 2">暂无数据</p>
                    <li class="item" v-for="(item, index) in yzList.slice(1,4)" :key="index">
                        <div class="time-limit">
                            <span>商标 :</span>
                            <span>{{ item.trademark }}</span>
                        </div>
                        <div class="goods-img">
                            <img :src="item.mainProductUrl">
                        </div>
                        <div class="section1">
                            <img src="./images/tm.png">
                            <div>
                                <p class="name">{{ item.storeName }}</p>
                                <p>
                                    <span>{{ item.mainProductName }}</span>
                                    <span>{{ item.trademarkCategory }}类</span>
                                    <span>R标</span>
                                </p>
                            </div>
                        </div>
                        <div class="section2">
                            <div class="left">
                                <p class="store-type">{{ item.mainProductName }} {{ item.storeType==1?'专营店':'' || item.storeType==2?'旗舰店':'' || item.storeType==3?'专卖店':'' }}</p>
                                <p>
                                    <span>R标</span>
                                    <span>{{ `${item.province}${item.city}` }}</span>
                                </p>
                            </div>
                            <div class="right">
                                <p>{{ item.price }}万</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- 稀缺 -->
            <div class="layer layer3" v-if="xqList.length">
                <div class="layer-left">
                    <div class="top">
                        <p class="title">稀缺店铺</p>
                        <p class="info">稀缺类目高价值</p>
                    </div>
                    <div class="first-shop">
                        <img :src="xqList[0].mainProductUrl">
                        <p class="item1">
                            <span class="name">{{ xqList[0].mainProductName }}</span>
                            <span class="price">{{ xqList[0].price }}万</span>
                        </p>
                        <p class="item2">
                            <span>{{ xqList[0].mainProductName }}</span>
                            <span>{{ xqList[0].trademarkCategory }}类</span>
                            <span>R标</span>
                        </p>
                    </div>
                </div>

                <ul class="layer-right">
                    <p class="no-data" v-if="xqList.length < 2">暂无数据</p>
                    <li class="item" v-for="(item, index) in xqList.slice(1,4)" :key="index">
                        <div class="time-limit">
                            <span>一级类目 :</span>
                            <span>{{ item.firstCategory }}</span>
                        </div>
                        <div class="goods-img">
                            <img :src="item.mainProductUrl">
                        </div>
                        <div class="section1">
                            <img src="./images/tm.png">
                            <div>
                                <p class="name">{{ item.storeName }}</p>
                                <p>
                                    <span>{{ item.mainProductName }}</span>
                                    <span>{{ item.trademarkCategory }}类</span>
                                    <span>R标</span>
                                </p>
                            </div>
                        </div>
                        <div class="section2">
                            <div class="left">
                                <p class="store-type">{{ item.mainProductName }} {{ item.storeType==1?'专营店':'' || item.storeType==2?'旗舰店':'' || item.storeType==3?'专卖店':'' }}</p>
                                <p>
                                    <span>R标</span>
                                    <span>{{ `${item.province}${item.city}` }}</span>
                                </p>
                            </div>
                            <div class="right">
                                <p>{{ item.price }}万</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ls from "store2";
import api from '@/api';
export default {
    name: "index-shop1",
    props: {
        tjList: { // 特价店铺
            type: Array
        },
        yzList: { // 优质店铺
            type: Array
        },
        xqList: { // 稀缺店铺
            type: Array
        }
    },
    data() {
        return {
            // 倒计时
            day1: 0,
            hour1: 0,
            minute1: 0,
            second1: 0,

            day2: 0,
            hour2: 0,
            minute2: 0,
            second2: 0,

            day3: 0,
            hour3: 0,
            minute3: 0,
            second3: 0,
        }
    },
    methods: {
        countDown (bargainPriceTime, index) { // 倒计时
            const stopTime = new Date(bargainPriceTime); // 结束的时间

            var interval = setInterval(() => {
                let today = new Date(), // 开始时间
                    shenyu = stopTime.getTime() - today.getTime(), //倒计时毫秒数
                    shenyuDay = parseInt(shenyu / 1000 / 3600 / 24), // 剩余天数
                    D = parseInt(shenyu) - parseInt(shenyuDay * 3600 * 24 * 1000), //除去天的毫秒数
                    shenyuH = parseInt(D / 1000 / 3600), // 剩余小时
                    H = parseInt(D) - parseInt(shenyuH * 3600 * 1000), //除去天、小时的毫秒数
                    shenyuM = parseInt(H / 1000 / 60), // 剩余分钟
                    M = parseInt(H) - parseInt(shenyuM * 60 * 1000), //除去天、小时、分钟的毫秒数
                    shenyuS = parseInt(M / 1000); // 剩余秒
                if(shenyu <= 0) { // 超过三天清除定时器
                    clearInterval(interval) 
                    return
                }
                
                if(shenyuDay > 0) this['day'+index] = '0' + shenyuDay;
                (shenyuH < 10) ? (this['hour'+index] = '0' + shenyuH) : (this['hour'+index] = shenyuH);
                (shenyuM < 10) ? (this['minute'+index] = '0' + shenyuM) : (this['minute'+index] = shenyuM);
                (shenyuS < 10) ? (this['second'+index] = '0' + shenyuS) : (this['second'+index] = shenyuS);
            }, 1000)
        }
    },
    updated () {
        this.tjList.slice(1,4).forEach((item, index) => {
            this.countDown(item.bargainPriceTime, index+1)
        })
    }
}
</script>

<style lang="less" scoped>
    .shop1-bg {
        background-color: #f8f8f8;

        .shop1 {
            padding-bottom: 16px;

            .layer {
                height: 400px;
                display: flex;
                margin-bottom: 16px;

                .layer-left {
                    width: 300px;
                    text-align: left;
                    padding: 50px 32px 0;
                    background: url('./images/shop1-bg.png') no-repeat 50% 156px;

                    .top {
                        .title {
                            font-size: 32px;
                            font-weight: 700;
                            line-height: 32px;
                            color: #fff;
                        }

                        .info {
                            font-size: 22px;
                            line-height: 32px;
                            color: #fff;
                            margin-bottom: 30px;
                        }
                    }

                    .first-shop {
                        width: 210px;
                        height: 226px;
                        padding: 0 18px 0 15px;
                        margin: 0 auto;
                        background-color: #fff;
                        border-radius: 8px;
                        overflow: hidden;

                        img {
                            max-width: 165px;
                            max-height: 165px;
                            display: block;
                            margin: 0 auto 10px;
                        }

                        .item1 {
                            font-size: 16px;
                            line-height: 16px;
                            font-weight: bold;
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 6px;

                            .name {
                                color: #222222;
                            }

                            .price {
                                color: #ff0036;
                            }
                        }

                        .item2 {
                            line-height: 14px;

                            span {
                                font-size: 14px;
                                line-height: 14px;
                                color: #999999;
                                display: inline-block;
                                margin-right: 4px;
                            }
                        }
                    }
                }

                .layer-right {
                    width: calc(100% - 300px);
                    display: flex;
                    background-color: #fff;
                    box-sizing: border-box;
                    position: relative;

                    .item {
                        width: 300px;
                        padding-top: 12px;
                        border-right: 1px solid #f4f4f4;

                        .time-limit {
                            width: 225px;
                            height: 38px;
                            display: flex;
                            align-items: center;
                            padding-left: 15px;
                            background-color: #fff3f3;
                            border-radius: 0 30px 30px 0;

                            span {
                                font-size: 14px;
                                line-height: 38px;
                                color: #ff0036;
                                margin-left: 8px;
                            }
                        }

                        .goods-img {
                            width: 100%;
                            height: 230px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            img {
                                max-width: 230px;
                                max-height: 230px;
                            }
                        }

                        .section1 {
                            display: flex;
                            align-items: center;
                            padding-left: 20px;
                            margin-bottom: 14px;

                            div {
                                text-align: left;
                                margin-left: 10px;

                                p {
                                    line-height: 14px;

                                    span {
                                        font-size: 14px;
                                        line-height: 14px;
                                        color: #999999;
                                        display: inline-block;
                                    }
                                }

                                .name {
                                    font-size: 18px;
                                    line-height: 18px;
                                    font-weight: bold;
                                    color: #000;
                                    margin-bottom: 5px;
                                }
                            }
                        }

                        .section2 {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding-left: 20px;

                            .left {
                                p {
                                    font-size: 14px;
                                    line-height: 14px;
                                    text-align: left;
                                    color: #999;
                                }
                                .store-type {
                                    margin-bottom: 4px;
                                }

                                p span {
                                    display: inline-block;
                                    margin-right: 4px;
                                }
                            }

                            .right {
                                width: 130px;
                                text-align: center;
                                background-color: #fff3f3;
                                border-radius: 30px 0 0 30px;
                                
                                p {
                                    font-size: 24px;
                                    font-weight: bold;
                                    line-height: 44px;
                                    color: #ff5050;
                                }
                            }
                        }
                    }

                    .no-data {
                        font-size: 22px;
                        font-weight: bold;
                        line-height: 22px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }

            .layer1 {
                background-color: #ff0036;
            }

            .layer2 {
                background-color: #ff711b;

                .layer-right {
                    .item {
                        .time-limit {
                            width: 150px;
                        }
                    }
                }
            }

            .layer3 {
                margin-bottom: 0;
                background-color: #ffa70d;

                .layer-right {
                    .item {
                        .time-limit {
                            width: 200px;
                        }
                    }
                }
            }
        }
    }
</style>