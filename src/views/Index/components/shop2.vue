<template>
    <div class="inner-bg shop2-bg">
        <div class="inner shop2">

            <div class="layer layer1">
                <div class="layer-left">
                    <img src="./images/shop2-left1.png">
                </div>

                <ul class="layer-right">
                    <li class="item" :class="`item${index}`" v-for="(item, index) in shopList1.slice(1)" :key="index">
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
                        <ul class="tags">
                            <li v-for="(tag, index1) in item.tagList" :key="index1">{{ tag }}</li>
                        </ul>
                        <div class="section2">
                            <p class="new">新品</p>
                            <p class="price">{{ item.price }}万</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="layer layer2">
                <div class="layer-left">
                    <img src="./images/shop2-left2.png">
                </div>

                <ul class="layer-right">
                    <li class="item" :class="`item${index}`" v-for="(item, index) in shopList1.slice(1)" :key="index">
                        <div class="section1">
                            <img src="./images/tb.png">
                            <div>
                                <p class="name">{{ item.storeName }}</p>
                                <p>
                                    <span>{{ item.firstCategory }}</span>
                                    <span>{{ item.trademarkCategory }}</span>
                                    <span>{{ item.brand }}</span>
                                </p>
                            </div>
                        </div>
                        <ul class="tags">
                            <li v-for="(tag, index1) in item.tagList" :key="index1">{{ tag }}</li>
                        </ul>
                        <div class="section2">
                            <p class="new">新品</p>
                            <p class="price">{{ item.price }}万</p>
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
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    tagList: ["居家日用", "旗舰店", "R标", "浙江省宁波市"],
                    price: 10.80
                },
                {
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    tagList: ["居家日用", "旗舰店", "R标", "浙江省宁波市"],
                    price: 10.80
                },
                {
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    tagList: ["居家日用", "旗舰店", "R标", "浙江省宁波市"],
                    price: 10.80
                },
                {
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    tagList: ["居家日用", "旗舰店", "R标", "浙江省宁波市"],
                    price: 10.80
                },
                {
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    tagList: ["居家日用", "旗舰店", "R标", "浙江省宁波市"],
                    price: 10.80
                },
                {
                    storeName: '质邦旗舰店',
                    firstCategory: '餐饮具类目',
                    trademarkCategory: '21类',
                    brand: 'R标',
                    tagList: ["居家日用", "旗舰店", "R标", "浙江省宁波市"],
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
                    justify-content: center;
                    align-items: center;
                    border-right: 1px solid #f4f4f4;
                }

                .layer-right {
                    width: calc(100% - 300px);
                    display: flex;
                    flex-wrap: wrap;
                    background-color: #fff;
                    box-sizing: border-box;

                    .item {
                        width: 300px;
                        height: 200px;
                        padding: 32px 20px;
                        border-right: 1px solid #f4f4f4;
                        border-bottom: 1px solid #f4f4f4;

                        .section1 {
                            display: flex;
                            align-items: center;

                            div {
                                text-align: left;
                                margin-left: 10px;

                                .name {
                                    font-size: 18px;
                                    line-height: 18px;
                                    font-weight: bold;
                                    color: #000;
                                    margin-bottom: 5px;
                                }

                                p {
                                    font-size: 14px;
                                    line-height: 14px;

                                    span {
                                        color: #999999;
                                        display: inline-block;
                                        margin-right: 5px;
                                    }
                                }
                            }
                        }

                        .tags {
                            display: flex;
                            justify-content: space-between;
                            margin: 16px 0 24px;

                            li {
                                font-size: 12px;
                                line-height: 26px;
                                color: #666666;
                                padding: 0 9px;
                                background-color: #f8f8f8;
                                border-radius: 20px;
                            }
                        }

                        .section2 {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .new {
                                width: 78px;
                                font-size: 14px;
                                font-weight: bold;
                                line-height: 32px;
                                color: #ff0036;
                                background-color: #fff3f3;
                                border-radius: 20px;
                            }

                            .price {
                                font-size: 24px;
                                font-weight: bold;
                                line-height: 24px;
                                text-align: center;
                                color: #ff5050;
                            }
                        }
                    }

                    .item2, .item5 {
                        border-right: none;
                    }

                    .item3, .item4, .item5 {
                        border-bottom: none;
                    }
                }
            }
        }
    }
</style>