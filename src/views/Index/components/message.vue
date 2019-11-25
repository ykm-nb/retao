<template>
    <div class="inner-bg message-bg" @mousemove="$emit('author-index', 6)">
        <div class="inner message">
            <div class="title-box">
                <p class="title">仟呗头条</p>
                <p class="info">NEWS</p>
            </div>
            <ul class="imgs" v-if='newAllDatas.newsLists.length'>
                <li v-for="(item, index) in newAllDatas.newsLists" 
                    :key="index" 
                    @click="gotoDetail(item.id)"
                    @mouseover="imgIndex = index" 
                    @mouseout="imgIndex = -1" 
                    :class="{'img-hover': imgIndex === index}">
                    <div class="img">
                        <img :src="item.pictureUrl" style='width:100%;'>
                    </div>
                    <div class="text">
                        <p class="title">{{ item.title | shortWr }}</p>
                        <p class="more">
                            <span>了解更多</span>
                            <img :src="imgIndex === index ? item.arrow2 : item.arrow1">
                        </p>
                    </div>
                </li>
            </ul>

            <ul class="content">
                <li v-for="(item, index) in newAllDatas.datas" :key="index">
                    <div class="time">
                        <p class="day">{{ item.list[0].newDate.substring(8,10) }}</p>
                        <p class="date">{{ item.list[0].newDate.substring(0,9) }}</p>
                    </div>
                    <p class="text" v-for="(list,inxx) in item.list" :key='inxx'>
                        <span class="title">{{list.title | shortWr}}</span>
                        <span class="date">{{list.newDate.substring(5,10)}}</span>
                    </p>
                </li>
            </ul>

            <!-- <button class="btn-more" type="button">查看更多</button> -->
        </div>
    </div>
</template>

<script>
import api from "@/api";

export default {
    name: "index-msg",
    props: ['newAllDatas'],
    data() {
        return {
            imgIndex: -1
        }
    },
    methods: {
        gotoDetail(id) { // 跳转详情
            let { href } = this.$router.resolve({
                path: 'newsdetails',
                query: { id: parseInt(id) }
            })
            window.open(href)
        },
    },
    created() {
        // api.axs("post", "/news/anon/queryForPage").then(({ data })=>{
        //     if (data.code === "SUCCESS") {
        //         this.newsLists[0] = data.data[0].list[0]
        //         this.newsLists[1] = data.data[1].list[0]
        //         this.newsLists[2] = data.data[2].list[0]
        //     } else {
        //         this.$Message.error(data.remark);
        //     }
        // })
    },
    filters: {
        'shortWr'(val) {
            if (val && val.length > 12) return val.substr(0,12) + '...'
            else  return val
        }
    }
}
</script>

<style lang="less" scoped>
    .message-bg {
        background-color: #f8f8f8;

        .message {
            padding: 44px 0 46px;

            .title-box {
                background: url('./images/msg-title.png') no-repeat center;

                .title {
                    font-size: 30px;
                    font-weight: bold;
                    line-height: 30px;
                    color: #333;
                }

                .info {
                    font-size: 16px;
                    line-height: 16px;
                    color: #ccc;
                    margin-top: 6px;
                }
            }

            .imgs {
                display: flex;
                justify-content: space-between;
                margin: 34px 0 74px;

                li {
                    width: 382px;
                    height: 465px;
                    background-color: #fff;
                    overflow: hidden;
                    transition: .4s;
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
                        padding: 32px 10px;
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
                        box-shadow: 1px 1px 15px rgba(0,0,0,.1);

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

            .content {
                height: 368px;
                display: flex;
                justify-content: space-between;
                padding-top: 42px;
                overflow: hidden;

                li {
                    width: 382px;
                    padding: 70px 30px 0;
                    background-color: #fff;
                    border-bottom: 1px solid #E6E6E6;
                    border-radius: 4x;
                    box-shadow: 1px 1px 15px rgba(0,0,0,.1);
                    position: relative;

                    .time {
                        width: 148px;
                        border-radius: 6px;
                        position: absolute;
                        left: 50%;
                        top: 0;
                        transform: translate(-50%,-50%);
                        overflow: hidden;

                        p {
                            line-height: 42px;
                            color: #fff;
                        }

                        .day {
                            font-size: 28px;
                            background-color: #ff0036;
                        }

                        .date {
                            font-size: 20px;
                            background-color: #e20030;
                        }
                    }

                    .text {
                        font-size: 18px;
                        line-height: 18px;
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 20px;
                        cursor: pointer;

                        .title {
                            color: #333;
                        }

                        .date {
                            color: #999;
                        }
                    }
                }
            }

            .btn-more {
                width: 145px;
                font-size: 16px;
                line-height: 40px;
                color: #fff;
                margin-top: 48px;
                background-color: #ff0036;
                border: none;
                border-radius: 30px;
            }
        }
    }
</style>