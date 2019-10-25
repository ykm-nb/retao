<template>
    <div class="inner-bg safe-bg">
        <div class="inner safe">
            <div class="title-box">
                <img src="./images/safe.png">
                <span class="title">买的放心 用的安心</span>
            </div>

            <ul class="content">
                <li v-for="(item, index) in list" 
                    :key="index" 
                    @click="$router.push('message')"
                >
                    <img :src="item.imgUrl">
                    <p class="text">{{ item.text }}</p>
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
            list: [
                {
                    imgUrl: require('./images/safe1.png'),
                    text: '资金保障'
                },
                {
                    imgUrl: require('./images/safe2.png'),
                    text: '真实店源'
                },
                {
                    imgUrl: require('./images/safe3.png'),
                    text: '丰富资源'
                },
                {
                    imgUrl: require('./images/safe4.png'),
                    text: '优质服务'
                },
                {
                    imgUrl: require('./images/safe5.png'),
                    text: '法务支援'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .safe-bg {
        .safe {
            padding: 75px 0 80px 0;
            border-bottom: 3px solid #f5f5f5;

            .title-box {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 65px;

                img {
                    margin-right: 12px;
                }

                .title {
                    color: #000;
                    font-size: 48px;
                    font-weight: bold;
                }
            }

            .content {
                display: flex;
                justify-content: space-between;
                padding: 0 25px;

                li {
                    cursor: pointer;
                    transition: .4s;

                    img {
                        width: 90px;
                        height: 90px;
                    }

                    .text {
                        font-size: 28px;
                        line-height: 28px;
                        color: #000;
                        margin-top: 20px;
                    }

                    &:hover {
                        transform: translate(0,-6px);
                    }
                }
            }
        }
    }
</style>