<template>
    <!-- 联系客服 -->
    <div class="inner-bg consult-bg" :class="{'consult-99':!showConsult}">
        <div class="inner consult">
            <img @click="showConsult = true" v-show="!showConsult" class="consult-side" src="./consult.png">
            <div v-show="showConsult" class="consult-box">
                <img class="img-bg" src="./consult-box.png">
                <ul>
                    <li class="item" :class="`item${index + 1}`"
                        v-for="(item, index) in list" :key="index"
                    >
                        <div class="avatar" :style="{background: `url('${item.imgUrl}') no-repeat 50% -4px`,backgroundSize: '130%'}"></div>    
                        <p class="position">{{ item.position }}</p>
                        <p class="name">{{ item.name }}</p>
                        <button @click="consult" type="button">联系TA</button>
                    </li>
                </ul>
                <button class="btn" type="button">网店限时免佣金</button>
                <img @click="close" class="close" src="./close.png">
            </div>
        </div>
        <div @click="close" class="meng-layer" v-show="showConsult"></div>
    </div>
</template>

<script>
export default {
    name: "consult",
    data () {
        return {
            showConsult: false,
            list: [
                {
                    imgUrl: require('./service1.png'),
                    position: '销售顾问',
                    name: '竺金晶'
                },
                {
                    imgUrl: require('./service2.png'),
                    position: '销售顾问',
                    name: '盛炎明'
                },
                {
                    imgUrl: require('./service3.png'),
                    position: '销售顾问',
                    name: '傅心玉'
                },
                {
                    imgUrl: require('./service4.png'),
                    position: '销售顾问',
                    name: '高奕豪'
                },
                {
                    imgUrl: require('./service5.png'),
                    position: '销售顾问',
                    name: '郑梦琳'
                },
                {
                    imgUrl: require('./service6.png'),
                    position: '销售顾问',
                    name: '史媛'
                },
                {
                    imgUrl: require('./service7.png'),
                    position: '销售顾问',
                    name: '张凯莉'
                },
                {
                    imgUrl: require('./service8.png'),
                    position: '销售顾问',
                    name: '张杭峰'
                },
            ]
        }
    },
    methods: {
        consult () { // 联系客服
            window.open("https://url.cn/5FanN8i?_type=wpa&qidian=true");
        },
        close () {
            this.showConsult = false
            // setTimeout(() => {
            //     this.showConsult = true
            // }, 20000);
        }
    },
    mounted() {
        setTimeout(() => {
            this.showConsult = true
        }, 10000);
    }
}
</script>

<style lang="less" scoped>
    .consult-side {
        width: 100px;
        position: fixed;
        left: 5%;
        bottom: 5%;
        animation: side 3s infinite;
        cursor: pointer;
        z-index: 1002;
    }
    @keyframes side {
        0% {transform: scale(1)}
        50% {transform: scale(0.8)}
        100% {transform: scale(1)}
    }


    .consult-bg {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;

        &.consult-99 {
            width: 0;
            height: 0;
        }

        .consult-side {
            position: fixed;
            left: 5%;
            bottom: 5%;
            cursor: pointer;
            z-index: 1002;
        }

        .consult-box {
            width: 620px;
            // min-height: 760px;
            // height: 80%;
            padding: 70px 80px 0;
            opacity: 1;
            position: absolute;
            left: 50%;
            top: 5%;
            transform: translate(-50%);
            animation: show 1.2s;
            z-index: 1002;

            @keyframes show {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                position: relative;
                top: -6px;
                z-index: 1003;

                .item {
                    width: 25%;
                    margin-bottom: 25px;

                    .avatar {
                        width: 60px;
                        height: 60px;
                        display: block;
                        margin: 0 auto;
                        border-radius: 50%;
                        overflow: hidden;
                    }

                    .position {
                        font-size: 12px;
                        line-height: 12px;
                        align-items: center;
                        color: #ff0036;
                        margin: 10px 0;
                    }

                    .name {
                        font-size: 14px;
                        font-weight: bold;
                        line-height: 14px;
                        align-items: center;
                        color: #ff0036;
                        // margin: 8px 0 10px;
                        // margin-bottom: 10px;
                    }

                    button {
                        position: relative;
                        top: 8px;
                        width: 80px;
                        height: 24px;
                        font-size: 12px;
                        line-height: 24px;
                        align-items: center;
                        color: #fff;
                        background-color: #ff0036;
                        border: none;
                        border-radius: 30px;
                        cursor: pointer;
                    }
                }
            }

            .img-bg {
                width: 100%;
                // height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }

            .btn {
                width: 320px;
                height: 50px;
                font-size: 28px;
                font-weight: bold;
                line-height: 50px;
                text-align: center;
                text-shadow: 1px 1px 15px rgba(0,0,0,.2);
                color: #fff;
                background-color: #fecb00;
                border-radius: 30px;
                border: none;
                position: absolute;
                left: 50%;
                bottom: -230px;
                transform: translate(-50%, -50%);
                cursor: pointer;
            }

            .close {
                width: 50px;
                height: 50px;
                position: absolute;
                left: 50%;
                bottom: -230px;
                transform: translate(-50%, 48px);
                cursor: pointer;
            }
        }
        .meng-layer {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5);
            z-index: 1001;
        }
    }
</style>