<template>
    <div class="inner-bg integral-bg">
        <!-- 积分商城 -->
        <div class="integral" v-if="showForm.integral">
            <img @click="showForm.integralPop = true" class="content" src="./images/integral.png">
            <img @click="showForm.integral = false" class="close" src="./images/close.png">
        </div>

        <!-- 弹窗 -->
        <div class="integral-pop" v-if="showForm.integralPop">
            <div class="head">
                <img @click="showForm.integralPop = false" class="close" src="./images/close1.png">
                <p class="title">
                    <img src="./images/integral1.png">
                    <span>热淘-客服为您服务</span>
                </p>
                <div class="divide"></div>
                <p class="time">服务时间：9:00-23:00</p>
            </div>

            <div class="content">
                <ul>
                    <li v-for="(item, index) in serviceList" :key="index">
                        <img :src="item.url">
                        <p class="position">天猫转让客服</p>
                        <p class="name">{{ item.name }}</p>
                        <button type="button" @click="consultQQ">联系TA</button>
                    </li>
                </ul>
                <p class="more">想获得更多优质信息，请拨打咨询热线：<b>400-800-8888</b></p>
            </div>
        </div>

        <!-- 朦层 -->
        <div v-if="showForm.integralPop" class="meng-layer"></div>
    </div>
</template>

<script>
export default {
    name: "integral",
    data() {
        return {
            showForm: {
                integral: true,
                integralPop: false
            },
            serviceList: [
                {
                    url: require('./images/service1.png'),
                    name: '贝贝'
                },
                {
                    url: require('./images/service1.png'),
                    name: '贝贝2'
                },
                {
                    url: require('./images/service1.png'),
                    name: '贝贝3'
                }
            ]
        }
    },
    methods: {
        consultQQ() {
            var qq = '243910661';
            window.open("http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes",'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
        }
    }
}
</script>

<style lang="less" scoped>
    .integral-bg {
        // 积分商城
        .integral {
            position: absolute;
            left: 2%;
            top: 42%;
            z-index: 99;
            cursor: pointer;

            .content {
                width: 145px;
                height: 145px;
            }

            .close {
                position: absolute;
                right: 0;
                top: -10%;
            }
        }

        .integral-pop {
            width: 1085px;
            background-color: #fff;
            border-radius: 18px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            overflow: hidden;
            z-index: 101;

            .head {
                color: #fff;
                display: flex;
                align-items: flex-end;
                padding: 58px 0 50px 65px;
                background-color: #d71421;
                position: relative;

                .title {
                    img {
                        vertical-align: bottom;
                    }
                    
                    span {
                        font-size: 45px;
                        line-height: 45px;
                        margin-left: 12px;
                        vertical-align: bottom;
                    }
                }

                .divide {
                    width: 2px;
                    height: 26px;
                    background-color: #fff;
                    margin: 0 30px;
                }

                .time {
                    font-size: 30px;
                    line-height: 30px;
                    vertical-align: bottom;
                }

                .close {
                    position: absolute;
                    right: 4%;
                    top: 50%;
                    transform: translate(0,-50%);
                    cursor: pointer;
                }
            }

            .content {
                padding: 62px 0 35px;

                ul {
                    width: 825px;
                    display: flex;
                    justify-content: space-between;
                    margin: 0 auto 60px;

                    li {
                        .position {
                            font-size: 24px;
                            line-height: 24px;
                            font-weight: bold;
                            color: #333333;
                            margin: 25px 0 16px;
                        }

                        .name {
                            font-size: 20px;
                            line-height: 20px;
                            font-weight: bold;
                            color: #333333;
                            margin-bottom: 20px;
                        }

                        button {
                            font-size: 16px;
                            line-height: 42px;
                            color: #fff;
                            padding: 0 45px;
                            background-color: #d71421;
                            border-radius: 20px;
                            border: none;
                            cursor: pointer;
                        }
                    }
                }

                .more {
                    font-size: 20px;
                    font-weight: bold;
                    line-height: 20px;
                    color: #999999;

                    b {
                        color: #d71421;
                    }
                }
            }
        }

        .meng-layer {
            background-color: rgba(0,0,0,.2);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
        }
    }
</style>