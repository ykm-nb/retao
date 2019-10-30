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
                        <img :src="item">
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
// Swiper
import Swiper from 'swiper';
export default {
    name: "screenshot",
    data() {
        return {
            list: [require('./images/screen1.png'), require('./images/screen1.png'), require('./images/screen1.png')]
        }
    },
    methods: {
        initSwiper() {
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                // autoplay: {
                //     delay: 1000,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: true,
                // },
                // 切换效果
                effect : 'coverflow',
                slidesPerView: 3,
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
    },
    mounted() {
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

                    .swiper-slide {
                        img {
                            width: 690px;
                            height: 410px;
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