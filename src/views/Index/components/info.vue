<template>
    <div class="inner-bg info-bg">
        <div class="inner info">
            <ul class="top">
                <li v-for="(item, index) in list1" :key="index">
                    <img :src="item.imgUrl">
                </li>
            </ul>
            <ul class="bottom">
                <li v-for="(item, index) in list2" :key="index">
                    <img :src="item.imgUrl">
                    <p>
                        <span class="key">{{ item.key }}:</span>
                        <span class="value">{{ item.value1 }}</span>
                        <span>{{ item.unit }}</span>
                    </p>
                </li>
            </ul>
            <p class="border">有追求，有梦想</p>
            <div class="divide"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index-safe",
    data() {
        return {
            list1: [
                {
                    imgUrl: require('./images/info1.jpg'),
                    text: '资金保障'
                },
                {
                    imgUrl: require('./images/info2.jpg'),
                    text: '真实店源'
                },
                {
                    imgUrl: require('./images/info3.jpg'),
                    text: '丰富资源'
                }
            ],
            list2: [
                {
                    imgUrl: require('./images/info6.png'),
                    key: '累计服务用户',
                    value1: 0,
                    value2: 4976,
                    unit: "位"
                },
                {
                    imgUrl: require('./images/info4.png'),
                    key: '成交网店数量',
                    value1: 0,
                    value2: 2736,
                    unit: "家"
                },
                {
                    imgUrl: require('./images/info5.png'),
                    key: '成交店铺金额',
                    value1: 0,
                    value2: 27858,
                    unit: "万"
                }
                
            ]
        }
    },
    created() {
        let list = this.list2;

        for(let i in list) {
            let time = setInterval(() => {
                list[i].value1 += Math.ceil(list[i].value2 / 300);
                if(list[i].value1 >= list[i].value2) {
                    clearInterval(time)
                    list[i].value1 = list[i].value2
                }
            }, 1)   
        } 
    }
}
</script>

<style lang="less" scoped>
    .info-bg {
        background-color: #f5f5f5;

        .info {
            padding-top: 20px;
            position: relative;

            .top {
                display: flex;
                justify-content: space-between;
                margin-bottom: 15px;

                li {
                    height: 162px;
                    overflow: hidden;
                    transition: .4s;
                    cursor: pointer;

                    &:hover {
                        transform: translate(0,-10px);
                    }
                }
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                padding: 15px 30px;
                background-color: #fff;

                li {
                    display: flex;
                    padding: 0 ;

                    p {
                        color: #a7a7a7;
                        display: flex;
                        align-items: flex-end;
                        margin-left: 14px;
                        
                        span {
                            font-size: 18px;
                            line-height: 18px;
                        }

                        .value {
                            font-size: 30px;
                            line-height: 26px;
                            font-weight: bold;
                            color: #ff0036;
                            margin: 0 14px 0 20px;
                        }
                    }
                }
            }

            .border{
                width: 180px;
                font-size: 18px;
                font-weight: bold;
                line-height: 18px;
                color: #ff0036;
                margin: 40px auto 0;
                
                
                &:before, &:after {
                    content: "";
                    width: 43%;
                    height: 1px;
                    background-color: #ff0036;
                    position: absolute;
                    bottom: 8px;
                }

                &:before {
                    left: 0;
                }

                &:after {
                    right: 0;
                }
            }
        }
    }
</style>