<template>
    <div class="inner-bg service-bg">
        <div class="inner service">
            <div class="title-box">
                <p class="title">
                    <img src="./images/service.png">
                    <span>高级顾问</span>
                </p>
                <p class="info">我们一直致力于打造全网安全、高校、诚信的虚拟资产服务平台</p>
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
                    >
                        <img class="avatar" :src="item.avatar">
                        <p class="name">{{ item.name }}</p>
                        <p class="description">{{ item.description }}</p>
                        <button class="qq" type="button" @click="consultQQ">QQ咨询</button>
                        <button class="wechat" type="button">微信咨询</button>
                    </li>
                </ul>
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
            tagList: ["网店转让", "网店入驻", "商标转让", "电商服务", "企业服务"],
            serviceList: [
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟1',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟1',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟1',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟1',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟2',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟2',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟2',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟2',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟3',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟3',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟3',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟3',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟4',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟4',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟4',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟4',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟5',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟5',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟5',
                    description: '2年从业经验'
                },
                {
                    avatar: require('./images/service1.png'),
                    name: '缘粟5',
                    description: '2年从业经验'
                }
            ]
        }
    },
    methods: {
        changeIndex(index) {
            let service = this.$refs.service.style;

            Object.assign(service, {
                transform: "translate(-1200px)", 
                opacity: "0"
            })
            this.tagIndex = index
            
            setTimeout(() => {
                Object.assign(service, {
                    transform: "translate(0)", 
                    opacity: "1"
                })
            }, 500)
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
        background-color: #f5f5f5;

        .service {
            padding: 85px 0 40px;

            .title-box {
                margin-bottom: 62px;

                .title {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 22px;

                    span {
                        font-size: 48px;
                        font-weight: bold;
                        color: #000;
                        margin-left: 12px;
                    }
                }

                .info {
                    font-size: 24px;
                    line-height: 24px;
                    color: #000;
                }
            }

            .tag {
                width: 960px;
                .flex();
                margin: 0 auto 35px;

                li {
                    font-size: 20px;
                    line-height: 40px;
                    color: #aeaeae;
                    padding: 0 30px;
                    border: 1px solid #999999;
                    border-radius: 25px;
                    transition: .4s;
                    cursor: pointer;

                    &:hover {
                        color: #d71421;
                        border: 1px solid #d71421;
                    }

                    &.active {
                        color: #fff;
                        background-color: #d71421;
                        border: 1px solid #d71421;
                    }
                }
            }

            .content-bg {
                overflow: hidden;

                .content {
                    transition: .4s;
                    .flex();

                    li {
                        width: 250px;
                        padding: 28px 45px 50px;
                        background-color: #fff;
                        box-sizing: border-box;
                        border-radius: 5px;
                        transition: .4s;

                        &:hover {
                            transform: translate(0,-6px);
                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                        }

                        .name {
                            font-size: 24px;
                            line-height: 24px;
                            color: #333333;
                            margin: 15px 0 10px;
                        }

                        .description {
                            font-size: 16px;
                            line-height: 16px;
                            color: #999;
                            margin-bottom: 24px;
                        }

                        button {
                            width: 142px;
                            font-size: 16px;
                            line-height: 42px;
                            color: #fff;
                            margin-bottom: 20px;
                            background-color: #d71421;
                            border: none;
                            border-radius: 25px;
                            cursor: pointer;
                        }

                        .wechat {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
</style>