<template>
    <!-- 店铺截图 -->
    <div class="inner-bg screenshot-bg">
        <div class="inner screenshot">
            <div class="title-box">
                <p class="title">店铺截图</p>
                <p class="info">screenshot</p>
            </div>

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in list" :key="index">
                        <img :src="item+syin">
                    </div>
                </div>
                <!-- 前进后退按钮 -->
                <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->

                <!-- 分页器 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api';
// Swiper
import Swiper from 'swiper';
export default {
    name: "screenshot",
    props: {
        picture: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            // list: [require('./images/screen1.png'), require('./images/screen1.png'), require('./images/screen1.png')]
            list: [],
            syin: '?x-oss-process=image/resize,h_1000/watermark,image_MTU3NTE5NTMzNzQzMTl0NG04OS5wbmc=,t_90,g_center'
        }
    },
    methods: {
        initSwiper() {
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                // 切换效果
                effect : 'coverflow',
                // slidesPerView: 3,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 60,
                    modifier: 5,
                    slideShadows : true
                },

                // 前进后退
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
                // 分页器
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },
        getPicture () {
            
        },
    },
    created () {
        if (this.picture.length > 70) this.list = this.picture.split(',')
        else this.list = [this.picture]
    },
    mounted() {
        // console.log(this.list)
        this.initSwiper()
    },
}
</script>

<style lang="less" scoped>
    .screenshot-bg {
        background-color: #f8f8f8;

        .screenshot {
            padding: 75px 0 20px;
            border-radius: 4px;

            .title-box {
                height: 80px;
                text-align: center;
                padding-bottom: 25px;
                
                border-bottom: 1px solid #eee;
                position: relative;

                .title {
                    font-size: 30px;
                    line-height: 30px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 8px;
                    background: url("./images/title-bg.png") no-repeat center;
                }

                .info {
                    font-size: 16px;
                    line-height: 16px;
                    color: #ccc;
                }
            }

            /deep/.swiper-container {
                height: 100%;
                width: 100%;
                padding-top: 36px;
                
                .swiper-wrapper {
                    width: 100%;
                    height: 410px;

                    .swiper-slide {
                        width: 100%;
                        height: 410px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .swiper-slide-shadow-left, .swiper-slide-shadow-right {
                            background: none;
                        }

                        img {
                            max-width: 690px;
                            max-height: 410px;
                            display: block;
                            overflow: hidden;
                        }
                    }
                }

                .swiper-button-prev, .swiper-button-next {
                    width: 78px;
                    height: 78px;
                    color: #fff;
                    background-color: rgba(0,0,0,.3);
                    border-radius: 50%;
                    outline: none;

                    &:after {
                        font-size: 30px;
                    }
                }

                .swiper-pagination {
                    .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                        margin: 0 8px;
                        background-color: #fc7c97;
                    }

                    .swiper-pagination-bullet-active {
                        background-color: #ff0036;
                    }
                }
            }
        }
    }
</style>