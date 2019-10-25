<template>
    <div class="inner-bg shop-bg">
        <div class="inner shop">
            <div class="title-box">
                <img src="./images/shop.png">
                <span class="title">优质店铺推荐</span>
            </div>

            <div class="layer">
                <div class="layer-left">
                    <img src="./images/shop1.png">
                </div>

                <div class="swiper-container layer-right">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in furnitureList1" :key="index" v-if="index < (furnitureList1.length / 4)">
                            <div 
                                class="item" 
                                v-for="(item, index1) in furnitureList1" 
                                :key="index1" 
                                v-if="index1 >= (index * 4) && index1 < ((index + 1) * 4)" 
                                :class="'item' + index1 % 4"
                            >
                                <p class="title">{{ item.title }}</p>
                                <ul>
                                    <li class="li1">
                                        <span>商城类型：</span>
                                        <span class="value">{{ item.type }}</span>
                                    </li>
                                    <li class="li2">
                                        <span>主营类目：</span>
                                        <span class="value">{{ item.category }}</span>
                                    </li>
                                    <li class="li3">
                                        <span>商标类型：</span>
                                        <span class="value">{{ item.brand }}</span>
                                    </li>
                                    <li>
                                        <span>所在地区：</span>
                                        <span class="value">{{ item.region }}</span>
                                    </li>
                                </ul>
                                <div class="item-bottom">
                                    <p class="price">
                                        <span>￥</span>
                                        <span class="num">{{ item.price.toFixed(2) }}</span>万
                                    </p>
                                    <button type="button">联系客服</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <div class="layer layer2">
                <div class="layer-left">
                    <img src="./images/shop2.png">
                </div>
                 <!-- && index1 < ((index1 + 1) * 4) -->
                <div class="swiper-container layer-right">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in furnitureList2" :key="index" v-if="index < (furnitureList2.length / 4)">
                            <div 
                                class="item" 
                                v-for="(item, index1) in furnitureList2" 
                                :key="index1" 
                                v-if="index1 >= (index * 4) && index1 < ((index + 1) * 4)"
                                :class="'item' + index1 % 4"
                            >
                                <p class="title">{{ item.title }}</p>
                                <ul>
                                    <li class="li1">
                                        <span>商城类型：</span>
                                        <span class="value">{{ item.type }}</span>
                                    </li>
                                    <li class="li2">
                                        <span>主营类目：</span>
                                        <span class="value">{{ item.category }}</span>
                                    </li>
                                    <li class="li3">
                                        <span>商标类型：</span>
                                        <span class="value">{{ item.brand }}</span>
                                    </li>
                                    <li>
                                        <span>所在地区：</span>
                                        <span class="value">{{ item.region }}</span>
                                    </li>
                                </ul>
                                <div class="item-bottom">
                                    <p class="price">
                                        <span>￥</span>
                                        <span class="num">{{ item.price.toFixed(2) }}</span>万
                                    </p>
                                    <button type="button">联系客服</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
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
            furnitureList1: [
                {
                    title: '1【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '2【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '3【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '4【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '1【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '2【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '3【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '4【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                }
            ],
            furnitureList2: [
                {
                    title: '1【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '2【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '3【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '4【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '1【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '2【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '3【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                },
                {
                    title: '4【华南地区】【女装+服饰配件类目旗舰店...',
                    type: '旗舰店',
                    category: '家装家具家访',
                    brand: 'R标',
                    region: '东北地区',
                    price: 32
                }
            ]
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
    .shop-bg {
        background-color: #f5f5f5;

        .shop {
            padding-top: 80px;

            .title-box {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 92px;

                img {
                    margin-right: 12px;
                }

                .title {
                    color: #000;
                    font-size: 48px;
                    font-weight: bold;
                }
            }

            .layer {
                display: flex;
                margin-bottom: 25px;

                .layer-left {
                    height: 545px;
                    transition: .4s;

                    &:hover {
                        transform: translate(0,-6px);
                        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
                    }
                }

                .layer-right {
                    width: calc(100% - 300px);
                    height: 545px;
                    padding-top: 12px;
                    background-color: #fff;
                    box-sizing: border-box;

                    .swiper-wrapper {
                        height: calc(100% - 40px);

                        .swiper-slide {
                            display: flex;
                            flex-wrap: wrap;
                            border-bottom: 1px solid #e4e4e4;

                            .item {
                                width: 450px;
                                max-height: 247px;
                                padding: 28px 26px 0;

                                .title {
                                    font-size: 16px;
                                    line-height: 16px;
                                    text-align: left;
                                    color: #333333;
                                    margin-bottom: 20px;
                                    cursor: pointer;
                                }

                                ul {
                                    display: flex;
                                    flex-wrap: wrap;
                                    border: 1px solid #e4e4e4;

                                    li {
                                        width: calc(100% / 2);
                                        height: 48px;
                                        display: flex;
                                        align-items: center;
                                        padding-left: 15px;
                                        box-sizing: border-box;

                                        span {
                                            color: #c1c1c1;
                                        }

                                        .value {
                                            font-size: 16px;
                                            color: #484848;
                                            margin-left: 12px;
                                        }
                                    }

                                    .li1 {
                                        border-right: 1px solid #e4e4e4;
                                        border-bottom: 1px solid #e4e4e4;
                                    }

                                    .li2 {
                                        border-bottom: 1px solid #e4e4e4;
                                    }

                                    .li3 {
                                        border-right: 1px solid #e4e4e4;
                                    }
                                }

                                .item-bottom {
                                    display: flex;
                                    justify-content: space-between;
                                    padding: 22px 0 24px 18px;

                                    .price {
                                        color: #999999;

                                        span {
                                            font-weight: bold;
                                            color: #e93c48;
                                        }

                                        .num {
                                            font-size: 20px;
                                        }
                                    }

                                    button {
                                        width: 128px;
                                        font-size: 18px;
                                        line-height: 36px;
                                        color: #d71421;
                                        background-color: transparent;
                                        border: 1px solid #d71421;
                                        border-radius: 20px;
                                        transition: .4s;
                                        cursor: pointer;
                                    }
                                }

                                &:hover button {
                                    color: #fff;
                                    background-color: #d71421;
                                }
                            }

                            .item0 {
                                border-right: 1px solid #e4e4e4;
                                border-bottom: 1px solid #e4e4e4;
                            }

                            .item1 {
                                border-bottom: 1px solid #e4e4e4;
                            }

                            .item2 {
                                border-right: 1px solid #e4e4e4;
                            }
                        }
                    }

                    /deep/ .swiper-pagination {
                        .swiper-pagination-bullet {
                            width: 40px;
                            height: 6px;
                            border-radius: 10px;
                            background-color: #776f6f;
                        }

                        .swiper-pagination-bullet-active {
                            background-color: #e93c48;
                        }
                    }
                }
            }

            .layer2 {
                margin-bottom: 0;
            }
        }
    }
</style>