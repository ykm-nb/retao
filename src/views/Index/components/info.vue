<template>
    <div class="inner-bg info-bg">
        <div class="inner info">
            <ul class="top">
                <li @click="$router.push('message')" v-for="(item, index) in list1" :key="index">
                    <img :src="item">
                </li>
            </ul>
            <ul class="bottom">
                <li v-for="(item, index) in list2" :key="index">
                    <img :src="item.imgUrl">
                    <div>
                        <p class="value">{{ item.value1 }}</p>
                        <p class="text">{{ item.text }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "index-safe",
    data() {
        return {
            list1: [
                require('./images/info1.png'),
                require('./images/info2.png'),
                require('./images/info3.png')
            ],
            list2: [
                {
                    imgUrl: require('./images/info4.png'),
                    text: '成交网店数量/个',
                    value1: 0,
                    value2: 1895
                },
                {
                    imgUrl: require('./images/info5.png'),
                    text: '成交店铺金额/万',
                    value1: 0,
                    value2: 19568
                },
                {
                    imgUrl: require('./images/info6.png'),
                    text: '累计服务用户/位',
                    value1: 0,
                    value2: 3260
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
        background-color: #f8f8f8;

        .info {
            padding: 16px 0;
            position: relative;

            .top {
                display: flex;
                justify-content: space-between;
                margin-bottom: 16px;

                li {
                    height: 130px;
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
                padding: 24px 0;
                background-color: #fff;

                li {
                    width: 33%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-right: 1px solid #ddd;

                    div {
                        text-align: left;
                        margin-left: 24px;
                        
                        .value {
                            font-size: 34px;
                            line-height: 34px;
                            font-weight: bold;
                            font-family:'[ShiShangZhongHei]';
                            color: #333333;
                            margin-bottom: 10px;
                        }

                        .text {
                            font-size: 16px;
                            line-height: 16px;
                            color: #333333;
                        }
                    }
                }

                li:last-child {
                    border: none;
                }
            }
        }
    }
</style>