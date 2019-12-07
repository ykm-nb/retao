<template>
    <div class="inner-bg footer-bg">
        <footer class="inner">
            <div class="footer-top">
                <ul>
                    <li v-for="(li, index) in list" :key="index">
                        <p class="title" >{{ li[0].text }}</p>
                        <p @click="gotoExplain(p.path)" class="item" v-for="(p, index2) in li.slice(1)" :key="index2">{{ p.text }}</p>
                    </li>
                </ul>
                <div class="wx-code">
                    <div class="code1">
                        <img src="./code1.png">
                        <p>关注我们</p>
                    </div>
                    <div class="code2">
                        <img src="./code2.png">
                        <p>客服咨询</p>
                    </div>
                </div>
            </div>

            <div class="imgs">
                <img @click="go(0)" class="img1" src="./img1-1.png">
                <img @click="go(1)" src="./img1-2.png">
                <img @click="go(2)" src="./img1-3.png">
                <img @click="go(3)" src="./img2.png">
                <img @click="go(4)" src="./img3.png">
            </div>

            <p class="footer-bottom">浙ICP备19040911号 版权所有 | 热淘（绍兴）信息科技有限公司 浙江绍兴文化创意产业园6幢</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "common-footer",
    data() {
        return {
            list: [
                [
                    {
                        text: "帮助"
                    },
                    {
                        text: "购买网店",
                        path: "/helpcenter?tag=taggmwd"
                    },
                    {
                        text: "出售网店",
                        path: "/helpcenter?tag=tagcswd"
                    },
                    {
                        text: "过户流程",
                        path: "/helpcenter?tag=tagghlc"
                    }
                ],
                [
                    {
                        text: "资金"
                    },
                    {
                        text: "充值服务",
                        path: "/recharge"
                    },
                    {
                        text: "提现服务",
                        path: "/withdrawdeposit"
                    },
                    {
                        text: "服务费用",
                        path: "/recharge"
                    },
                ],
                [
                    {
                        text: "保障"
                    },
                    {
                        text: "资金安全",
                        path: "/helpcenter?tag=tagzjaq"
                    },
                    {
                        text: "担保交易",
                        path: "/helpcenter?tag=tagdbjy"
                    },
                    {
                        text: "用户协议",
                        path: "/helpcenter?tag=tagyhxy"
                    }
                ],
                [
                    {
                        text: "客服"
                    },
                    {
                        text: "在线客服",
                        path: "index"
                    },
                    {
                        text: "投诉建议",
                        path: "index"
                    },
                    {
                        text: "售后客服",
                        path: "index"
                    }
                ],
                [
                    {
                        text: "我们"
                    },
                    {
                        text: "公司简介",
                        path: "/helpcenter?tag=taggsjj"
                    },
                    {
                        text: "营业执照",
                        path: "/helpcenter?tag=tagyyzz"
                    },
                    {
                        text: "联系我们",
                        path: "/helpcenter?tag=taglxwm"
                    }
                ]
            ]
        }
    },
    methods: {
        gotoExplain(path) {
            if (path) this.$router.push(path)
        },
        go (index) {
            switch (index) {
                case 0: window.open('https://baike.shuidi.cn/companywiki-fdd0d827c8f6bf4bfbe8c3e4f151ca01.html', '_blank')
                break;
                case 2: window.open('http://www.beian.gov.cn/portal/registerSystemInfo', '_blank')
                break;
                case 4: window.open('http://www.cyberpolice.cn/wfjb/', '_blank')
                break;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.footer-bg {
    background-color: #e5e5e5;

    .flex {
        display: flex;
        justify-content: space-between;
    }

    footer {
        padding: 58px 115px 32px;
        position: relative;

        .footer-top {
            width: 100%;
            .flex();

            ul {
                width: 700px;
                .flex();

                li {
                    p {
                        font-size: 14px;
                        line-height: 14px;
                        text-align: center;
                        color: #495167;
                        margin-bottom: 10px;
                        cursor: pointer;
                    }

                    .title {
                        font-size: 18px;
                        line-height: 18px;
                        color: #333;
                        margin-bottom: 15px;
                    }

                    .item {
                        transition: .4s;

                        &:hover {
                            text-decoration: underline;
                            color: #d71421;
                        }
                    }

                    p:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            .wx-code {
                width: 220px;
                .flex();

                div p {
                    font-size: 14px;
                    line-height: 14px;
                    color: #868fac;
                    margin-top: 5px;
                }
            }
        }

        .imgs {
            width: 575px;
            height: 38px;
            .flex();
            margin: 10px 0 20px;

            img {
                cursor: pointer;
            }

            .img1 {
                border-radius: 5px;
                overflow: hidden;
            }
        }

        .footer-bottom {
            font-size: 14px;
            font-weight: bold;
            line-height: 14px;
            text-align: left;
            color: #333;
        }
    }
}  
</style>