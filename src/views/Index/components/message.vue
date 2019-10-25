<template>
    <div class="inner-bg message-bg">
        <div class="inner message">
            <div class="title-box">
                <p class="title">资讯中心</p>
                <p class="info">聚焦行业动态</p>
                <div class="btn">
                    <button type="button">行业资讯</button>
                    <button type="button">帮助中心</button>
                    <div class="more">
                        <p class="top">MORE</p>
                        <p class="bottom">点击查看更多</p>
                    </div>
                </div>
            </div>

            <div class="content">
                <ul v-for="(item, index) in list" :key="index">
                    <li class="top">
                        <div class="top-left">
                            <p class="day">{{ item[0].date.substring(8) }}</p>
                            <p class="date">{{ item[0].date.substring(0,7) }}</p>
                        </div>
                        <div class="top-right">
                            <p class="title">{{ item[0].title }}</p>
                            <p class="answer">{{ item[0].answer }}</p>
                        </div>
                    </li>
                    <li class="item" v-for="(li, index2) in item" :key="index2">
                        <span class="title">{{ li.title }}</span>
                        <span class="date">{{ li.date }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index-safe",
    data() {
        return {
            list: [
                [
                    {
                        title: "开淘宝网店为什么要选择淘宝网店转让？",
                        answer: "我相信好多好多的运营店铺的人常有这样的感触，开淘宝网店愈来愈难，问题是为啥大家都知道开淘宝网店难",
                        date: "2019-10-10"
                    },
                    {
                        title: "购买网店转让的网店有没有风险？",
                        date: "2019-06-18"
                    },
                    {
                        title: "天猫店铺转让如何选择第三方店铺转让平台？",
                        date: "2019-10-10"
                    },
                    {
                        title: "购买网店转让前需要做哪些“功课？",
                        date: "2019-10-10"
                    },
                    {
                        title: "第三方网店转让平台到底安不安全？",
                        date: "2019-10-10"
                    }
                ],
                [
                    {
                        title: "淘宝网店怎么降低店铺的跳出率?",
                        answer: "我听了很多朋友说，很多人开淘宝网店，今天参加天天特价的活动，明天就是直通车推广，大家每天都是在很辛苦的为自己的店铺引流",
                        date: "2019-10-10"
                    },
                    {
                        title: "注册淘宝店铺和购买淘宝店铺转让，哪个比较划算?",
                        date: "2019-10-10"
                    },
                    {
                        title: "淘宝开网店留住老客户的方法有哪些？",
                        date: "2019-10-10"
                    },
                    {
                        title: "淘宝开网店常常会碰到的误区有哪些？",
                        date: "2019-10-10"
                    },
                    {
                        title: "新手开淘宝网店大多数都做不起来是怎么回事?",
                        date: "2019-10-10"
                    }
                ],
                [
                    {
                        title: "淘宝店铺转让需要注意哪些问题?",
                        answer: "我相信好多好多的运营店铺的人常有这样的感觉，我相信好多好多的运营店铺的人常有这样的感觉",
                        date: "2019-10-10"
                    },
                    {
                        title: "购买网店转让如何防止店铺被找回?",
                        date: "2019-10-10"
                    },
                    {
                        title: "淘宝网店转让签订合同有没有用?",
                        date: "2019-10-10"
                    },
                    {
                        title: "网店转让行业为什么发展得如此快速?",
                        date: "2019-10-10"
                    },
                    {
                        title: "天猫网店转让为什么要选择网店转让平台交易？",
                        date: "2019-10-10"
                    }
                ],
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .message-bg {
        background-color: #f5f5f5;

        .message {
            padding: 50px 0 30px;

            .title-box {
                .title {
                    color: #333;
                    font-size: 33px;
                    line-height: 44px;
                    display: inline-block;
                    position: relative;

                    &:before, &:after {
                        content: "";
                        width: 20px;
                        height: 5px;
                        background-color: #C6302F;
                        position: absolute;
                        top: 50%;
                    }

                    &:before {
                        left: 0px;
                        transform: translate(-140%,-50%);
                    }

                    &:after {
                        right: 0px;
                        transform: translate(140%,-50%);
                    }
                }

                .info {
                    color: #7f7e7e;
                    font-size: 22px;
                    line-height: 44px;
                    margin-top: 4px;
                }

                .btn {
                    margin: 25px 0 40px;
                    position: relative;

                    button {
                        width: 100px;
                        height: 28px;
                        line-height: 28px;
                        font-size: 14px;
                        color: #000;
                        margin: 0 10px;
                        background-color: transparent;
                        border: 1px solid #000;
                        border-radius: 50px;
                        cursor: pointer;

                        &:hover {
                            color: #fff;
                            background-color: #fc4747;
                            border: 1px solid #fc4747;
                        }
                    }

                    .more {
                        padding-right: 8px;
                        border-right: 1px dashed #DBDBDB;
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translate(0,-50%);
                        cursor: pointer;

                        p {
                            font-size: 14px;
                            line-height: 20px;
                            text-align: left;
                        }

                        .top {
                            color: #C7C7C7;
                        }

                        .bottom {
                            color: #CD5554;
                        }
                    }
                }
            }

            .content {
                display: flex;
                justify-content: space-between;

                ul {
                    width: 380px;
                    background-color: #fff;
                    border-radius: 6px;

                    li {
                        border-bottom: 1px solid #E6E6E6;
                    }

                    .top {
                        display: flex;
                        padding: 8px 20px 8px 0;
                        overflow: hidden;

                        .top-left {
                            color: #fff;
                            padding: 6px 18px;
                            background-color: #fc4747;

                            .day {
                                font-size: 55px;
                                line-height: 55px;
                            }

                            .date {
                                font-size: 16px;
                                line-height: 16px;
                            }
                        }

                        .top-right {
                            width: 68%;
                            text-align: left;
                            margin-left: 15px;

                            .title {
                                width: 100%;
                                font-size: 18px;
                                line-height: 32px;
                                color: #333;
                                margin-bottom: 8px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                cursor: pointer;
                            }

                            .answer {
                                width: 100%;
                                font-size: 12px;
                                line-height: 20px;
                                color: #999;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                            }
                        }
                    }

                    .item {
                        height: 65px;
                        display: flex;
                        align-items: center;
                        padding: 0 20px;
                        cursor: pointer;

                        &:hover .title {
                            color: #fc4747;
                        }

                        .title {
                            width: 210px;
                            font-size: 14px;
                            color: #000;
                            text-align: left;
                            display: inline-block;
                            margin-right: 15px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }

                        .date {
                            font-size: 12px;
                            color: #999;
                        }
                    }
                }
            }
        }
    }
</style>