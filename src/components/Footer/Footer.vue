<template>
    <div class="inner-bg footer-bg">
        <footer class="inner">
            <div class="footer-top">
                <ul>
                    <li v-for="(li, index) in list" :key="index">
                        <p class="title" >{{ li[0].text }}</p>
                        <p @click="gotoExplain" class="item" v-for="(p, index2) in li.slice(1)" :key="index2">{{ p.text }}</p>
                    </li>
                </ul>
            </div>

            <div class="footer-bottom">
                <p>Copyright@2013-2019  热淘retao.com 版权所有  蜀ICP备12352365号  ########科技有限公司</p>
            </div>
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
                        text: "帮助中心"
                    },
                    {
                        text: "购买流程",
                        path: "index"
                    },
                    {
                        text: "出售流程",
                        path: "index"
                    },
                    {
                        text: "过户流程",
                        path: "index"
                    }
                ],
                [
                    {
                        text: "安全保障"
                    },
                    {
                        text: "担保交易",
                        path: "index"
                    },
                    {
                        text: "隐私保护",
                        path: "index"
                    },
                    {
                        text: "合同法律效力",
                        path: "index"
                    }
                ],
                [
                    {
                        text: "客服中心"
                    },
                    {
                        text: "投诉建议",
                        path: "index"
                    },
                    {
                        text: "在线客服",
                        path: "index"
                    },
                    {
                        text: "常见问题",
                        path: "index"
                    }
                ],
                [
                    {
                        text: "关于我们"
                    },
                    {
                        text: "公司简介",
                        path: "index"
                    },
                    {
                        text: "联系我们",
                        path: "index"
                    },
                    {
                        text: "营业执照",
                        path: "index"
                    },
                    {
                        text: "加入我们",
                        path: "index"
                    }
                ]
            ]
        }
    },
    methods: {
        gotoExplain() {
            let curPath = this.$route.path.substring(1);
            if(curPath != "explain") this.$router.push("explain")
        }
    }
}
</script>

<style lang="less" scoped>
.footer-bg {
    background-color: #fff;

    .flex {
        display: flex;
        justify-content: space-between;
    }

    footer {
        padding-top: 50px;
        position: relative;

        .footer-top {
            width: 100%;
            padding-bottom: 10px;
            border-bottom: 1px solid #f5f5f5;

            ul {
                .flex();
                margin: 0 120px;

                li {
                    p {
                        font-size: 14px;
                        line-height: 14px;
                        text-align: center;
                        color: #a0a3a8;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }

                    .title {
                        font-size: 16px;
                        line-height: 16px;
                        color: #5c6066;
                        margin-bottom: 25px;
                    }

                    .item {
                        transition: .4s;

                        &:hover {
                            color: #d71421;
                        }
                    }

                    p:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .footer-bottom {
            p {
                font-size: 16px;
                line-height: 45px;
                text-align: center;
                color: #a0a3a8;
            }
        }
    }
}  
</style>