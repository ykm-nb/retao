<template>
    <!-- 仟呗头条 -->
    <div class="inner-bg headline-bg">
        <div class="inner headline">
            <div class="title-box">
                <p class="title">仟呗头条</p>
                <p class="info">NEWS</p>
            </div>

            <ul class="imgs">
                <li v-for="(item, index) in imgsList" 
                    :key="index" 
                    @mouseover="imgIndex = index" 
                    @mouseout="imgIndex = -1" 
                    :class="{'img-hover': imgIndex === index}">
                    <div class="img">
                        <img :src="item.imgUrl">
                    </div>
                    <div class="text">
                        <p class="title">{{ item.title }}</p>
                        <p class="more">
                            <span>了解更多</span>
                            <img :src="imgIndex === index ? item.arrow2 : item.arrow1">
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "headline",
    data() {
        return {
            imgIndex: -1,
            imgsList: [
                {
                    imgUrl: require('./images/msg1.png'),
                    title: "国家扶贫日交答卷,社交电商扣开扶贫新大门",
                    arrow1: require('./images/msg-arrow1.png'),
                    arrow2: require('./images/msg-arrow2.png'),
                },
                {
                    imgUrl: require('./images/msg2.png'),
                    title: "月薪4万招不到人,曾经电商的巨型风口将在这里重现?",
                    arrow1: require('./images/msg-arrow1.png'),
                    arrow2: require('./images/msg-arrow2.png'),
                },
                {
                    imgUrl: require('./images/msg3.png'),
                    title: "汪向东:对农村电商扶贫与乡村振兴的新思考",
                    arrow1: require('./images/msg-arrow1.png'),
                    arrow2: require('./images/msg-arrow2.png'),
                }
            ],
        }
    }
}
</script>

<style lang="less" scoped>
    .headline-bg {
        background-color: #f8f8f8;

        .headline {
            padding: 58px 0;

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

            .imgs {
                display: flex;
                justify-content: space-between;
                margin: 34px 45px 0;

                li {
                    width: 350px;
                    height: 440px;
                    background-color: #fff;
                    overflow: hidden;
                    transition: .4s;
                    box-shadow: 1px 1px 15px rgba(0,0,0,.1);
                    cursor: pointer;

                    .img {
                        width: 100%;
                        height: 255px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                    }

                    .text {
                        padding: 18px 10px;
                        margin: 0 18px;
                        border-bottom: 1px solid #999;

                        .title {
                            font-size: 22px;
                            line-height: 36px;
                            text-align: left;
                            letter-spacing: 1px;
                            color: #999;
                            margin-bottom: 30px;
                        }

                        .more {
                            text-align: left;

                            span {
                                font-size: 18px;
                                line-height: 18px;
                                color: #999;
                                display: inline-block;
                                margin-right: 14px;
                            }
                        }
                    }

                    // hover 状态
                    &.img-hover {
                        .text {
                            color: #ff0036;
                            border-bottom: 1px solid #ff0036;

                            .title {
                                color: #ff0036;
                            }

                            .more span {
                                color: #ff0036;
                            }
                        }
                    }
                }
            }
        }
    }
</style>