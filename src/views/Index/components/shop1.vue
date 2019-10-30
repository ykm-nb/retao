<template>
    <div class="inner-bg shop1-bg">
        <div class="inner shop1">
            <!-- 特价 -->
            <div class="layer layer1">
                <div class="layer-left">
                    <div class="top">
                        <p class="title">特价店铺</p>
                        <p class="info">活动店铺限时购</p>
                    </div>
                    <div class="first-shop">
                        <img :src="shopList1[0].imgUrl">
                        <p class="item1">
                            <span class="name">{{ shopList1[0].storeName }}</span>
                            <span class="price">{{ shopList1[0].price }}万</span>
                        </p>
                        <p class="item2">
                            <span>{{ shopList1[0].firstCategory }}</span>
                            <span>{{ shopList1[0].trademarkCategory }}</span>
                            <span>{{ shopList1[0].brand }}</span>
                        </p>
                    </div>
                </div>

                <ul class="layer-right">
                    <li class="item" v-for="(item, index) in shopList1.slice(1)" :key="index">
                        <div class="time-limit">
                            <img src="./images/shop1-limit.png">
                            <span>{{ item.time }}</span>
                        </div>
                        <div class="goods-img">
                            <img :src="item.imgUrl">
                        </div>
                        <div class="section1">
                            <img src="./images/tm.png">
                            <div>
                                <p class="name">{{ item.storeName }}</p>
                                <p>
                                    <span>{{ item.firstCategory }}</span>
                                    <span>{{ item.trademarkCategory }}</span>
                                    <span>{{ item.brand }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="section2">
                            <div class="left">
                                <p class="store-type">{{ item.storeType }}</p>
                                <p>
                                    <span>{{ item.brand }}</span>
                                    <span>{{ item.city }}</span>
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
            <div class="layer layer2">
                <div class="layer-left">
                    <div class="top">
                        <p class="title">优质店铺</p>
                        <p class="info">品牌商标任您挑</p>
                    </div>
                    <div class="first-shop">
                        <img :src="shopList2[0].imgUrl">
                        <p class="item1">
                            <span class="name">{{ shopList2[0].storeName }}</span>
                            <span class="price">{{ shopList2[0].price }}万</span>
                        </p>
                        <p class="item2">
                            <span>{{ shopList2[0].firstCategory }}</span>
                            <span>{{ shopList2[0].trademarkCategory }}</span>
                            <span>{{ shopList2[0].brand }}</span>
                        </p>
                    </div>
                </div>

                <ul class="layer-right">
                    <li class="item" v-for="(item, index) in shopList2.slice(1)" :key="index">
                        <div class="time-limit">
                            <span>商标 :</span>
                            <span>{{ item.sb }}</span>
                        </div>
                        <div class="goods-img">
                            <img :src="item.imgUrl">
                        </div>
                        <div class="section1">
                            <img src="./images/tm.png">
                            <div>
                                <p class="name">{{ item.storeName }}</p>
                                <p>
                                    <span>{{ item.firstCategory }}</span>
                                    <span>{{ item.trademarkCategory }}</span>
                                    <span>{{ item.brand }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="section2">
                            <div class="left">
                                <p class="store-type">{{ item.storeType }}</p>
                                <p>
                                    <span>{{ item.brand }}</span>
                                    <span>{{ item.city }}</span>
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
            <div class="layer layer3">
                <div class="layer-left">
                    <div class="top">
                        <p class="title">稀缺店铺</p>
                        <p class="info">稀缺类目高价值</p>
                    </div>
                    <div class="first-shop">
                        <img :src="shopList3[0].imgUrl">
                        <p class="item1">
                            <span class="name">{{ shopList3[0].storeName }}</span>
                            <span class="price">{{ shopList3[0].price }}万</span>
                        </p>
                        <p class="item2">
                            <span>{{ shopList3[0].firstCategory }}</span>
                            <span>{{ shopList3[0].trademarkCategory }}</span>
                            <span>{{ shopList3[0].brand }}</span>
                        </p>
                    </div>
                </div>

                <ul class="layer-right">
                    <li class="item" v-for="(item, index) in shopList3.slice(1)" :key="index">
                        <div class="time-limit">
                            <span>一级类目 :</span>
                            <span>{{ item.category }}</span>
                        </div>
                        <div class="goods-img">
                            <img :src="item.imgUrl">
                        </div>
                        <div class="section1">
                            <img src="./images/tm.png">
                            <div>
                                <p class="name">{{ item.storeName }}</p>
                                <p>
                                    <span>{{ item.firstCategory }}</span>
                                    <span>{{ item.trademarkCategory }}</span>
                                    <span>{{ item.brand }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="section2">
                            <div class="left">
                                <p class="store-type">{{ item.storeType }}</p>
                                <p>
                                    <span>{{ item.brand }}</span>
                                    <span>{{ item.city }}</span>
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
import api from '@/api';
export default {
    name: "index-shop",
    data() {
        return {
            // 特价店铺
            shopList1: [
                {
                    imgUrl: require('./images/shop1-goods1.png'),
                    storeName: '倍纯旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    price: 9.5
                },
                {
                    time: '02天01时58分24秒',
                    imgUrl: require('./images/shop1-goods2.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                },
                {
                    time: '02天01时58分24秒',
                    imgUrl: require('./images/shop1-goods3.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                },
                {
                    time: '02天01时58分24秒',
                    imgUrl: require('./images/shop1-goods4.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                }
            ],
            // 优质店铺
            shopList2: [
                {
                    imgUrl: require('./images/shop1-goods1.png'),
                    storeName: '倍纯旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    price: 9.5
                },
                {
                    sb: '2字中文',
                    imgUrl: require('./images/shop1-goods6.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                },
                {
                    sb: '英文',
                    imgUrl: require('./images/shop1-goods7.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                },
                {
                    sb: '中英文',
                    imgUrl: require('./images/shop1-goods8.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                }
            ],
            // 稀缺店铺
            shopList3: [
                {
                    imgUrl: require('./images/shop1-goods1.png'),
                    storeName: '倍纯旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    price: 9.5
                },
                {
                    category: '节庆用品/礼品',
                    imgUrl: require('./images/shop1-goods2.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                },
                {
                    category: '节庆用品/礼品',
                    imgUrl: require('./images/shop1-goods3.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                },
                {
                    category: '节庆用品/礼品',
                    imgUrl: require('./images/shop1-goods4.png'),
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    storeType: '居家日用旗舰店',
                    city: '浙江省宁波市',
                    price: 10.80
                }
            ],
        }
    },
    methods: {
        
    },
    created() {},
    mounted() {}
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
                        padding: 15px 18px 0 15px;
                        margin: 0 auto;
                        background-color: #fff;
                        border-radius: 8px;

                        img {
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

                        .item2 span {
                            font-size: 14px;
                            line-height: 14px;
                            color: #999999;
                            display: inline-block;
                            margin-right: 4px;
                        }
                    }
                }

                .layer-right {
                    width: calc(100% - 300px);
                    display: flex;
                    background-color: #fff;
                    box-sizing: border-box;

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
                        }

                        .section1 {
                            display: flex;
                            align-items: center;
                            padding-left: 20px;
                            margin-bottom: 14px;

                            div {
                                text-align: left;
                                margin-left: 10px;

                                .name {
                                    font-size: 20px;
                                    line-height: 20px;
                                    font-weight: bold;
                                    color: #000;
                                    margin-bottom: 5px;
                                }

                                p span {
                                    font-size: 14px;
                                    line-height: 14px;
                                    color: #999999;
                                    display: inline-block;
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