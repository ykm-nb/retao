<template>
    <!-- 猜您喜欢 -->
    <div class="inner-bg more-bg">
        <div class="inner more">
            <div class="title-box">
                <p class="title">猜您喜欢</p>
                <p class="info">Recommend</p>
            </div>

            <ul class="imgs">
                <li class="item" v-for="(item, index) in lists" :key="index">
                    <div class="goods-img">
                        <img :src="item.mainProductUrl">
                    </div>
                    <div class="section1">
                        <span class="name">{{ item.mainProductName }}</span>
                        <span class="price">{{ item.price }}万</span>
                    </div>
                    <div class="section2">
                        <span>{{ item.mainProductName }}</span>
                        <span>{{ item.trademarkCategory }}类</span>
                        <span>R标</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ls from "store2";
export default {
    name: "more",
    data() {
        return {
            lists: ls.session.get('firstLists') //首页特价/优质/稀缺模块第一条
        }
    }
}
</script>

<style lang="less" scoped>
    .more-bg {
        background-color: #fff;

        .more {
            padding: 58px 0;

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

            .imgs {
                display: flex;
                justify-content: space-between;
                margin: 34px 45px 0;

                .item {
                    width: 350px;
                    padding: 32px 28px;
                    box-shadow: 0 0 15px rgba(0,0,0,.1);

                    .time-limit {
                        width: 150px;
                        height: 38px;
                        display: flex;
                        align-items: center;
                        padding-left: 10px;
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
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            max-width: 260px;
                            max-height: 260px;
                        }
                    }

                    .section1 {
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

                    .section2 {
                        text-align: left;
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
        }
    }
</style>