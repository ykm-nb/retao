<template>
    <!-- 购买流程 -->
    <div class="inner-bg process-bg">
        <div class="inner process">
            <div class="title-box">
                <p class="title">购买流程</p>
                <p class="info">Purchase process</p>
            </div>

            <ul class="process-bottom">
                <li v-for="(item, index) in processList" :key="index">
                    <img :src="item.url">
                    <p class="title">{{ item.title }}</p>
                    <p class="info">{{ item.info }}</p>
                    <div class="number">{{ item.number }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "process",
    data() {
        return {
            processList: [
                {
                    url: require('./images/process1.png'),
                    title: '注册',
                    info: '一分钟快速注册仟呗账号',
                    number: "1"
                },
                {
                    url: require('./images/process2.png'),
                    title: '选择网店',
                    info: '仟呗100万资源供您选择',
                    number: "2"
                },
                {
                    url: require('./images/process3.png'),
                    title: '联系客服',
                    info: '网站客服专属陪同只为梦想护航',
                    number: "3"
                },
                {
                    url: require('./images/process4.png'),
                    title: '交接过户',
                    info: '优质的店铺转让资源',
                    number: "4"
                },
                {
                    url: require('./images/process5.png'),
                    title: '签署合同',
                    info: '专业合同受法律保障',
                    number: "5"
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .process-bg {
        margin-top: 10px;
        background-color: #f8f8f8;

        .process {
            padding: 70px 0 88px;

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

            .process-bottom {
                display: flex;
                justify-content: space-between;
                padding: 22px 32px 0;

                li {
                    width: 200px;
                    padding: 42px 0 20px;
                    background-color: #ff0c31;
                    border-radius: 6px;

                    .title {
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: bold;
                        color: #fff;
                        margin: 26px 0 10px;
                    }

                    .info {
                        font-size: 12px;
                        line-height: 12px;
                        color: #fff;
                        margin-bottom: 16px;
                    }

                    .number {
                        width: 60px;
                        height: 60px;
                        font-size: 30px;
                        font-weight: bold;
                        line-height: 60px;
                        color: #ff0c31;
                        margin: 0 auto;
                        background-color: #fff;
                        border-radius: 50%;
                    }
                }

                .arrow {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
</style>