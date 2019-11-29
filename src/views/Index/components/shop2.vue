<template>
    <div class="inner-bg shop2-bg">
        <div class="inner shop2">
            
            <!-- 天猫 -->
            <div class="layer layer1" @mousemove="$emit('author-index', 4)">
                <div class="layer-left">
                    <img src="./images/shop2-left1.png">
                </div>

                <div class="swiper-container layer-rightbg">
                    <ul class="swiper-wrapper layer-right">
                        <div class="swiper-slide" v-for="(item, index1) in tmList.slice(0,3)" :key="index1">
                            <li class="item" :class="`item${index}`" v-for="(item, index) in tmList.slice(index1 * 6, (index1 * 6) + 6)" :key="index" @click="gotoDetail(item.id)">
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
                                <ul class="tags">
                                    <li v-show="item.mainProductName">{{ item.mainProductName }}</li>
                                    <li v-show="item.storeType">{{ item.storeType==1?'专营店':'' || item.storeType==2?'旗舰店':'' || item.storeType==3?'专卖店':'' }}</li>
                                    <li>R标</li>
                                    <li>{{ `${item.province==null?'':item.province}${item.city}` }}</li>
                                </ul>
                                <div class="section2">
                                    <p class="new">{{ item.storeProperties==1?'特价':'' ||  item.storeProperties==2?'优质':'' || item.storeProperties==3?'稀缺':'' || item.storeProperties>=4?'可议':''}}</p>
                                    <p class="price">{{ item.price }}万</p>
                                </div>
                            </li>
                        </div>
                    </ul>

                    <!-- 分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <!-- 淘宝 -->
            <div class="layer layer2" @mousemove="$emit('author-index', 5)">
                <div class="layer-left">
                    <img src="./images/shop2-left2.png">
                </div>

                <div class="swiper-container layer-rightbg">
                    <ul class="swiper-wrapper layer-right">
                        <div class="swiper-slide" v-for="(item, index1) in tmList.slice(0,3)" :key="index1">
                            <p class="no-data" v-if="tbList.length < 1">暂无数据</p>
                            <li class="item" :class="`item${index}`" v-for="(item, index) in tbList.slice(index1 * 6, (index1 * 6) + 6)" :key="index">
                                <div class="section1">
                                    <img src="./images/tb.png">
                                    <div>
                                        <p class="name">{{ item.storeName }}</p>
                                        <p>
                                            <span>{{ item.mainProductName }}</span>
                                            <span>{{ item.trademarkCategory }}类</span>
                                            <span>R标</span>
                                        </p>
                                    </div>
                                </div>
                                <ul class="tags">
                                    <li v-show="item.mainProductName">{{ item.mainProductName }}</li>
                                    <li v-show="item.storeType">{{ item.storeType==1?'专营店':'' || item.storeType==2?'旗舰店':'' || item.storeType==3?'专卖店':'' }}</li>
                                    <li>R标</li>
                                    <li>{{ `${item.province==null?'':item.province}${item.city}` }}</li>
                                </ul>
                                <div class="section2">
                                    <p class="new">{{ item.storeProperties==1?'特价':'' ||  item.storeProperties==2?'优质':'' || item.storeProperties==3?'稀缺':'' || item.storeProperties>=4?'可议':''}}</p>
                                    <p class="price">{{ item.price }}万</p>
                                </div>
                            </li>
                        </div>
                    </ul>

                    <!-- 分页器 -->
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
    name: "index-shop2",
    props: {
        tmList: {
            type: Array
        },
        tbList: {
            type: Array
        }
    },
    data() {
        return {
            shopList1: [
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
            ]
        }
    },
    methods: {
        // 初始化 swiper 插件
        initSwiper() {
            var mySwiper = new Swiper (".swiper-container", {
                autoplay: {
                    delay: 4000,
                    // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
                    disableOnInteraction: false,
                },
                //使用分页器
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        },
        gotoDetail(id) { // 跳转详情
            let { href } = this.$router.resolve({
                path: 'shopdetails',
                query: { id: parseInt(id) }
            })
            window.open(href)
        },
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

                /deep/ .layer-rightbg {
                    width: calc(100% - 300px);

                    .layer-right {
                        width: 100%;
                        display: flex;
                        background-color: #fff;
                        box-sizing: border-box;
                        position: relative;

                        .swiper-slide {
                            display: flex;
                            flex-wrap: wrap;

                            .no-data {
                                font-size: 22px;
                                font-weight: bold;
                                line-height: 22px;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }

                            .item {
                                cursor: pointer;
                                width: 300px;
                                height: 200px;
                                padding: 32px 20px;
                                background-color: #fff;
                                border-right: 1px solid #f4f4f4;
                                border-bottom: 1px solid #f4f4f4;
                                transition: .4s;

                                &:hover {
                                    box-shadow: 0 1px 15px rgba(0,0,0,.5);
                                    transform: translate(0,-10px);
                                }

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
                                        white-space: nowrap;
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

                    .swiper-pagination {
                        .swiper-pagination-bullet {
                            outline: none;
                        }
                        .swiper-pagination-bullet-active {
                            background-color: #ff0036;
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