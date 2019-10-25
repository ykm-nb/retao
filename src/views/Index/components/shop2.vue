<template>
    <div class="inner-bg shop2-bg">
        <div class="inner shop2">

            <div class="layer layer1">
                <div class="layer-left">
                    <img src="./images/shop2-left1.png">
                </div>

                <ul class="layer-right">
                    <li class="item" v-for="(item, index) in shopList1.slice(1)" :key="index">
                        <div class="time-limit">
                            <img src="./images/shop1-limit.png">
                            <span>{{ item.time }}</span>
                        </div>
                        <img class="goods-img" :src="item.imgUrl">
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
import Swiper from 'swiper';
export default {
    name: "index-shop",
    data() {
        return {
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
                    imgUrl: require('./images/shop1-goods2.png'),
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
        // 初始化 swiper 插件
        initSwiper() {
            var mySwiper = new Swiper (".swiper-container", {
                direction: 'horizontal',
                loopFillGroupWithBlank: true,  
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
            　　 observeParents:true,//修改swiper的父元素时，自动初始化swiper
                //使用分页器
                paginationClickable :true,
            　　 pagination: {
                　　el: '.swiper-pagination'
            　　 }
            });
        }
    },
    created() {
        // api.axs('post', "/tmStore/queryForPage", {industry: "住宅家具"}).then(({ data }) => {
        //     if(data.code === "SUCCESS") {
        //         this.furnitureList1 = data.data.list;
        //     } else {
                
        //     }
        // });
        // api.axs('post', "/tmStore/queryForPage", {industry: "服饰鞋包"}).then(({ data }) => {
        //     if(data.code === "SUCCESS") {
        //         this.furnitureList2 = data.data.list;
        //     } else {
                
        //     }
        // });
    },
    mounted() {
        this.initSwiper();
    }
}
</script>

<style lang="less" scoped>
    .shop2-bg {
        background-color: #f8f8f8;

        .shop2 {
            padding-top: 20px;

            .layer {
                height: 400px;
                display: flex;
                margin-bottom: 16px;
                background-color: #fff;

                .layer-left {
                    width: 300px;
                    display: flex;
                    
                    border-right: 1px solid #f4f4f4;
                    

                    img {

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
                            display: block;
                            margin: 12px auto 24px;
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
                                    font-weight: 44px;
                                    color: #ff5050;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>