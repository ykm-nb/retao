<template>
    <div class="inner-bg money-bg">
        
        <div class="inner money">
            <div class="title-box">
                <p class="title">费用估计</p>
                <p class="info">screenshot</p>
            </div>

            <ul class="money-bottom">
                <li v-for="(item, index) in list" :key="index">
                    <img :src="item.imgUrl">
                    <p class="text">{{ item.text }}</p>
                    <p class="price">{{ item.price.toFixed(2) }}</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: "help",
    data() {
        return {
            list: [
                {
                    imgUrl: require("./images/money1.png"),
                    text: '总计费用',
                    price: 302500
                },
                {
                    imgUrl: require("./images/money2.png"),
                    text: '网店销售',
                    price: 230000
                },
                {
                    imgUrl: require("./images/money3.png"),
                    text: '消保金',
                    price: 50000
                },
                {
                    imgUrl: require("./images/money4.png"),
                    text: '技术年费',
                    price: 22500
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .money-bg {
        background-color: #fff;
        box-shadow: 0 0 15px rgba(0,0,0,.1);

        .money {
            padding: 60px 0;

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

            .money-bottom {
                display: flex;
                justify-content: space-between;
                padding-top: 75px;
                margin: 0 105px;

                li {
                    p {
                        font-size: 18px;
                        line-height: 18px;
                    }

                    .text {
                        color: #333;
                        margin: 32px 0 12px;
                    }

                    .price {
                        font-weight: bold;
                        color: #ff2727;
                    }
                }
            }
        }
    }
</style>