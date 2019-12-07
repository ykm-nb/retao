<template>
    <!-- 热淘头条 -->
    <div class="inner-bg headline-bg">
        <div class="inner headline" v-if='newAllDatas.length'>
            <div class="title-box">
                <p class="title">热淘头条</p>
                <p class="info">NEWS</p>
            </div>

            <ul class="imgs">
                <li v-for="(item, index) in newAllDatas" 
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
        </div>
    </div>
</template>

<script>
import api from '@/api';
import ls from "store2";
export default {
    name: "headline",
    data() {
        return {
            imgIndex: -1,
            newsLists: [],
            newAllDatas: ls.session.get('newAllDatas')
        }
    },
    methods: {
        getNewsLists() {
            api.axs("post", "/news/anon/queryForPage").then(({ data })=>{
                if (data.code === "SUCCESS") {
                    // this.newsLists = data.data.list.slice(0,3);
                    this.newsLists[0] = data.data[0].list[0]
                    this.newsLists[1] = data.data[1].list[0]
                    this.newsLists[2] = data.data[2].list[0]
                    console.log(this.newsLists)
                } else {
                    this.$Message.error(data.remark);
                }
            })
        },
        gotoDetail(id) { // 跳转详情
            let { href } = this.$router.resolve({
                path: 'newsdetails',
                query: { id: parseInt(id) }
            })
            window.open(href)
        },
    },
    mounted() {
        // this.getNewsLists()
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
                        border-bottom: 1px solid #f2f2f2;
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
                            word-break: break-all;
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