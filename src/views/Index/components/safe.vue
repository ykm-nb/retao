<template>
    <div class="inner-bg safe-bg">
        <div class="inner safe">
            <div class="title-box">我们的服务</div>

            <ul class="content">
                <li v-for="(item, index) in list" 
                    :key="index" 
                    @click="$router.push('service')"
                >
                    <img :src="item.imgUrl">
                    <p class="title">{{ item.title }}</p>
                    <p class="description">{{ item.description }}</p>
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
                    title: '资金保障',
                    description: "FUNDS SAFEGUARD"
                },
                {
                    imgUrl: require('./images/safe2.png'),
                    title: '真实店源',
                    description: "REAL STORE SOURCE"
                },
                {
                    imgUrl: require('./images/safe3.png'),
                    title: '资源丰富',
                    description: "ABUNDANT RESOURCES"
                },
                {
                    imgUrl: require('./images/safe4.png'),
                    title: '优质服务',
                    description: "FIRST-RATE SERVICE"
                },
                {
                    imgUrl: require('./images/safe5.png'),
                    title: '法律资源',
                    description: "LEGAL RESOURCES"
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .safe-bg {
        .safe {
            padding: 55px 0 50px;
            background-color: #fff;

            .title-box {
                font-size: 32px;
                font-weight: bold;
                color: #333;
                margin-bottom: 38px;
                background: url("./images/msg-title.png") no-repeat center;
            }

            .content {
                height: 246px;
                display: flex;
                justify-content: space-between;

                li {
                    width: 225px;
                    padding-top: 58px;
                    box-shadow: 1px 5px 10px rgba(0,0,0,.1);
                    cursor: pointer;
                    transition: .4s;

                    .title {
                        font-size: 20px;
                        font-weight: bold;
                        line-height: 20px;
                        color: #333;
                        margin: 28px 0 10px;
                    }

                    .description {
                        font-size: 16px;
                        line-height: 16px;
                        color: #666;
                    }

                    &:hover {
                        transform: translate(0,-6px);
                    }
                }
            }
        }
    }
</style>