<template>
    <div class="message-box">
        <div class="inner-bg layer1-bg">
            <div class="inner layer1">
                <div class="logo">
                    <img src="../assets/images/logo.png">
                </div>
                <p class="title">
                    <span class="text">线上置业</span>
                    <span class="divide"></span>
                    <span class="text">上热淘就够了</span>
                </p>
                <p class="info">因为专注，所以专业</p>
            </div>
        </div>

        <div class="inner-bg layer2-bg"></div>

        <div class="inner-bg layer3-bg">
            <div class="inner layer3">
                <p>
                    <span class="title1">热淘资金3大保障</span>
                    <span>让您掌握主动权</span>
                </p>
            </div>
        </div>

        <div class="inner-bg layer4-bg"></div>

        <div class="inner-bg layer5-bg"></div>

        <div class="inner-bg layer6-bg"></div>

        <div class="inner-bg layer7-bg"></div>
    </div>
</template>

<script>
export default {
    name: "msg",
    data() {
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
    .message-box {
        .layer1-bg {
            height: 490px;
            background: url("../assets/images/msg1.jpg") no-repeat center;

            .layer1 {
                color: #fff;

                .logo {
                    width: 320px;
                    height: 100px;
                    padding: 16px 12px;
                    margin-left: 10px;
                    background-color: #fff;
                    border-radius: 0 0 15px 15px;
                }

                .title {
                    margin: 105px 0 35px;

                    .text {
                        font-size: 72px;
                        font-weight: bold;
                        line-height: 72px;
                        letter-spacing: 2px;
                        text-shadow: 2px 1px 2px #000;
                    }

                    .divide {
                        width: 1px;
                        height: 40px;
                        line-height: 72px;
                        display: inline-block;
                        vertical-align: text-bottom;
                        margin: 0 22px 0 28px;
                        background-color: #fff;
                    }
                }

                .info {
                    font-size: 24px;
                    line-height: 24px;
                }
            }
        }

        .layer2-bg {
            height: 575px;
            background: url("../assets/images/msg2.png") no-repeat center;
        }

        .layer3-bg {
            height: 570px;
            padding: 35px 0;
            box-sizing: content-box;
            
            .layer3 {
                height: 100%;
                background: url("../assets/images/msg3.png") no-repeat center;

                p {
                    span {
                        font-size: 30px;
                        line-height: 145px;
                        color: #020202;
                    }

                    .title1 {
                        font-weight: bold;
                        margin-right: 20px;
                    }
                }
            }
        }

        .layer4-bg {
            height: 595px;
            background: url("../assets/images/msg4.png") no-repeat center;
        }

        .layer5-bg {
            height: 655px;
            background: url("../assets/images/msg5.png") no-repeat center;
        }

        .layer6-bg {
            height: 595px;
            background: url("../assets/images/msg6.png") no-repeat center;
        }

        .layer7-bg {
            height: 870px;
            background: url("../assets/images/msg7.png") no-repeat center;
        }
    }
</style>