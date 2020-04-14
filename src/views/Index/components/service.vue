<template>
    <div class="inner-bg service-bg" @mousemove="$emit('author-index', 0)">
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
                    <li v-for="(item, index) in serviceList" :key="index" 
                        v-show="(index >= tagIndex * 4) && (index < (tagIndex * 4) + 4)" 
                        :style="getBackground(item.imgUrl)"
                    >
                        <div class="info">
                            <span class="name">{{ item.name }}</span>
                            <span class="description">{{ item.description }}</span>
                            <img src="./images/wechat.png">
                        </div>
                        <div class="btn">
                            <button class="qq" type="button" @click="consultQQ">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                            <img class="img-wx" :src="item.wxUrl">
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
                    imgUrl: require('./images/service8.png'),
                    name: '竺金晶',
                    description: '6年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service2.png'),
                    name: '赵峰',
                    description: '5年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service3.png'),
                    name: '傅心玉',
                    description: '3年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service4.png'),
                    name: '高奕豪',
                    description: '6年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service5.png'),
                    name: '郑梦琳',
                    description: '5年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service6.png'),
                    name: '史媛',
                    description: '3年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service7.png'),
                    name: '张凯莉',
                    description: '4年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service8.png'),
                    name: '盛炎明',
                    description: '5年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service9.png'),
                    name: '张杭峰',
                    description: '3年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service8.png'),
                    name: '竺金晶',
                    description: '6年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service2.png'),
                    name: '赵峰',
                    description: '5年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service3.png'),
                    name: '傅心玉',
                    description: '3年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service4.png'),
                    name: '高奕豪',
                    description: '6年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service5.png'),
                    name: '郑梦琳',
                    description: '5年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service6.png'),
                    name: '史媛',
                    description: '3年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service7.png'),
                    name: '张凯莉',
                    description: '4年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service8.png'),
                    name: '盛炎明',
                    description: '5年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service9.png'),
                    name: '张杭峰',
                    description: '3年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service8.png'),
                    name: '竺金晶',
                    description: '6年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service2.png'),
                    name: '赵峰',
                    description: '5年从业经验',
                    wxUrl: require('./images/wxcode.png')
                },
            ]
        }
    },
    methods: {
        changeIndex(index) { // 点击切换客户
            const service = this.$refs.service.style,
                tagIndex = this.tagIndex,
                length = this.tagList.length;

            if(index === tagIndex) return;
            this.tagIndex = index;
            (index < 0) && (this.tagIndex = length - 1);
            (index > length - 1) && (this.tagIndex = 0);
        },
        consultQQ() { // qq咨询
            // let arr = ['3007628391', '3007628389'], qq = '';
            // Math.random() > 0.5 ? qq = arr[0] : qq = arr[1];
            // window.open("http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes",'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
            
            window.open("https://url.cn/5FanN8i?_type=wpa&qidian=true");
        },
        getBackground (imgUrl) { // 获取背景图
            return `background: url(${imgUrl}) no-repeat 50% 0; background-size: cover`
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
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-top: 18px;
                            position: relative;

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
                            .wechat:hover ~ .img-wx {
                                // max-height: 100px;
                                opacity: 1;
                            }

                            .img-wx {
                                width: 100px;
                                height: auto;
                                opacity: 0;
                                transition: .6s;
                                position: absolute;
                                right: 18px;
                                bottom: 100%;
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