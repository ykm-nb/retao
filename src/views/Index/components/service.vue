<template>
    <div class="inner-bg service-bg">
        <div class="inner service">
            <div class="title-box">
                <p class="title">高级顾问</p>
                <p class="info">senior advisor</p>
            </div>

            <ul class="tag">
                <li 
                    v-for="(item, index) in tagList" 
                    :key="index"
                    :class="{'active': tagIndex === index}"
                    @click="changeIndex(index)"
                >
                    {{ item }}
                </li>
            </ul>

            <div class="content-bg">
                <ul ref="service" class="content">
                    <li 
                        v-for="(item, index) in serviceList" 
                        :key="index"
                        v-show="(index >= tagIndex * 4) && (index < (tagIndex * 4) + 4)"
                        :style="`background: url(${item.imgUrl}) no-repeat 50% -4px`"
                    >
                        <div class="info">
                            <span class="name">{{ item.name }}</span>
                            <span class="description">{{ item.description }}</span>
                            <img src="./images/wechat.png">
                        </div>
                        <div class="btn">
                            <button class="qq" type="button" @click="consultQQ">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </li>
                </ul>
                <img @click="changeIndex(tagIndex - 1)" class="go prev" src="./images/service-left.png">
                <img @click="changeIndex(tagIndex + 1)" class="go next" src="./images/service-right.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index-service",
    data() {
        return {
            tagIndex: 0,
            tagList: ["天猫转让", "淘宝转让", "天猫入驻", "电商运营", "企业服务"],
            serviceList: [
                {
                    imgUrl: require('./images/service1.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service2.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service3.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service4.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service1.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service2.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service3.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service4.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service1.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service2.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service3.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service4.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service1.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service2.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service3.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service4.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service1.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service2.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service3.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
                {
                    imgUrl: require('./images/service4.png'),
                    name: '张文豪',
                    description: '3年从业经验'
                },
            ]
        }
    },
    methods: {
        changeIndex(index) {
            const service = this.$refs.service.style,
                  tagIndex = this.tagIndex,
                  length = this.tagList.length;

            if(index === tagIndex) return;

            let obj = {
                transform: "translate(-1200px)", 
                opacity: "0"
            }

            if(index > tagIndex) { // next
                Object.assign(service, obj)
                setTimeout(() => {
                    obj.transform = "translate(1200px)"
                    Object.assign(service, obj)
                }, 400)
                setTimeout(() => {
                    obj = {transform: "translate(0)", opacity: "1"}
                    Object.assign(service, obj)
                }, 800)
            } else { // prev
                obj.transform = "translate(1200px)";
                Object.assign(service, obj)
                setTimeout(() => {
                    obj.transform = "translate(-1200px)"
                    Object.assign(service, obj)
                }, 400)
                setTimeout(() => {
                    obj = {transform: "translate(0)", opacity: "1"}
                    Object.assign(service, obj)
                }, 800)
            }
            
            this.tagIndex = index;
            (index < 0) && (this.tagIndex = length - 1);
            (index > length - 1) && (this.tagIndex = 0);
        },
        consultQQ() {
            var qq = '243910661';
            window.open("http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes",'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
        }
    }
}
</script>

<style lang="less" scoped>
    .flex {
        display: flex;
        justify-content: space-between;
    }

    .service-bg {
        background: url("./images/service-bg.jpg") no-repeat center;
        overflow: hidden;

        .service {
            height: 561px;
            padding-top: 65px;

            .title-box {
                width: 298px;
                color: #fff;
                margin: 0 auto 12px;
                background: url("./images/service-title.png") no-repeat center;

                .title {
                    font-size: 30px;
                    font-weight: bold;
                    line-height: 30px;
                    margin-bottom: 5px;
                }

                .info {
                    font-size: 16px;
                    line-height: 16px;
                }
            }

            .tag {
                width: 960px;
                .flex();
                margin: 0 auto 15px;

                li {
                    width: 104px;
                    height: 35px;
                    font-size: 16px;
                    line-height: 35px;
                    color: #fff;
                    border: 1px solid transparent;
                    border-radius: 4px;
                    transition: .4s;
                    cursor: pointer;

                    &:hover, &.active {
                        background-color: #ff0537;
                        border: 1px solid #fff;
                    }
                }
            }

            .content-bg {
                height: 327px;
                position: relative;

                .content {
                    width: 100%;
                    .flex();
                    transition: .4s;

                    li {
                        width: 280px;
                        height: 327px;
                        padding: 230px 18px 0;
                        transition: .4s;

                        &:hover {
                            transform: translate(0,-6px);
                        }

                        .info {
                            color: #fff;
                            display: flex;
                            align-items: flex-end;
                            padding-bottom: 12px;
                            border-bottom: 1px solid #959ba9;

                            .name {
                                font-size: 22px;
                                line-height: 22px;
                            }

                            .description {
                                font-size: 14px;
                                line-height: 14px;
                                margin: 0 5px 0 10px;
                            }
                        }

                        .btn {
                            margin-top: 18px;

                            button {
                                width: 100px;
                                height: 25px;
                                font-size: 12px;
                                line-height: 25px;
                                color: #fff;
                                background-color: transparent;
                                border: 1px solid #fff;
                                border-radius: 25px;
                                transition: .4s;
                                cursor: pointer;
                            }

                            .qq {
                                margin-right: 12px;

                                &:hover {
                                    background-color: #3bcfff;
                                    border: 1px solid #3bcfff;
                                }
                            }

                            .wechat:hover {
                                background-color: #22af17;
                                border: 1px solid #22af17;
                            }
                        }
                    }
                }

                .go {
                    position: absolute;
                    top: 50%;
                    cursor: pointer;
                }

                .prev {
                    left: -18px;
                    transform: translate(-100%,-50%);
                }

                .next {
                    right: -18px;
                    transform: translate(100%,-50%);
                }
            }
        }
    }
</style>