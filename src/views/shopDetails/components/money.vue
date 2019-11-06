<template>
    <div class="inner-bg money-bg">
        
        <div class="inner money">
            <div class="title-box">
                <p class="title">费用估计</p>
                <p class="info">screenshot</p>
            </div>

            <ul class="money-bottom" v-if='goodsList'>
                <li v-for="(item, index) in list" :key="index">
                    <!-- <img :src="item.imgUrl"> -->
                    <template v-if='index===0'>
                        <i-circle :size="150" :trail-width="10" :stroke-width="10" :percent="100" stroke-color="#ff3b1f">
                            <strong class="demo-Circle-inner" style="font-size:28px;color:#ff3b1f">100%</strong>
                        </i-circle>
                    </template>
                    <template v-else-if='index===1'>
                        <i-circle :size="150" :trail-width="10" :stroke-width="10" :percent=item.perc stroke-color="#fcd72b">
                            <strong class="demo-Circle-inner" style="font-size:28px;color:#fcd72b">{{item.percents + '%'}}</strong>
                        </i-circle>
                    </template>
                    <template v-else-if='index===2'>
                        <i-circle :size="150" :trail-width="10" :stroke-width="10" :percent=item.perc stroke-color="#24b3fc">
                            <strong class="demo-Circle-inner" style="font-size:28px;color:#24b3fc">{{item.percents + '%'}}</strong>
                        </i-circle>
                    </template>
                    <template v-else-if='index===3'>
                        <i-circle :size="150" :trail-width="10" :stroke-width="10" :percent=item.perc stroke-color="#2ae2df">
                            <strong class="demo-Circle-inner" style="font-size:28px;color:#2ae2df">{{item.percents + '%'}}</strong>
                        </i-circle>
                    </template>
                    <p class="text">{{ item.text }}</p>
                    <p class="price">{{ (item.price*10000).toFixed(2) }}</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: "help",
    props: {
        goodsList: {
            type: Object
        },
        allPrice: {}
    },
    data() {
        return {
            list: [
                {
                    imgUrl: require("./images/money1.png"),
                    text: '总计费用',
                    price: this.allPrice
                },
                {
                    imgUrl: require("./images/money2.png"),
                    text: '网店销售',
                    price: this.goodsList.price,
                    perc: JSON.parse(((this.goodsList.price*100/this.allPrice)).toFixed(0)),
                    percents: ((this.goodsList.price/this.allPrice)*100).toFixed(2)
                },
                {
                    imgUrl: require("./images/money3.png"),
                    text: '消保金',
                    price: this.goodsList.yearFee,
                    perc: JSON.parse(((this.goodsList.yearFee*100/this.allPrice)).toFixed(0)),
                    percents: ((this.goodsList.yearFee/this.allPrice)*100).toFixed(2)
                },
                {
                    imgUrl: require("./images/money4.png"),
                    text: '技术年费',
                    price: this.goodsList.skillFee,
                    perc: JSON.parse(((this.goodsList.skillFee*100/this.allPrice)).toFixed(0)),
                    percents: ((this.goodsList.skillFee/this.allPrice)*100).toFixed(2)
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