<template>
    <div class="enter-box">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <!-- banner -->
        <div class="inner-bg banner-bg"></div>

        <div class="inner-bg layer-bg">
            <div class="inner">
                <!-- 店铺类型 -->
                <div class="shop">
                    <div class="title-box">
                        <p class="title">店铺类型</p>
                    </div>
                    <div class="content">
                        <input type="text" value="旗舰店">
                        <img class="xia" src="@/assets/images/xia.png">
                        <ul class="dropdown">
                            <li>旗舰店</li>
                            <li>专卖店</li>
                            <li>专营店</li>
                        </ul>
                    </div>
                </div>

                <!-- 选择商品类目 -->
                <div class="good">
                    <div class="title-box">
                        <p class="title">选择商品类目</p>
                    </div>
                    <div class="content">
                        <ul class="left">
                            <li @mouseover="goodIndex = index" v-for="(item, index) in goodList" :key="index">
                                <p>{{ item.title }}</p>
                                <img src="@/assets/images/right.png">
                            </li>
                            <div class="item-bottom">
                                <img src="@/assets/images/good-top.png">
                            </div>
                        </ul>
                        <ul class="right">
                            <li class="item" v-show="goodIndex === index1" v-for="(good, index1) in goodList" :key="index1">
                                <div class="item-content" :class="{'actived': radioIndex === index2}" v-for="(item, index2) in good.content" :key="index2">
                                    <div @click="radioIndex = index2" class="radio"></div>
                                    <p @click="radioIndex = index2">{{ item }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- 选择服务类型 -->
        <div class="inner-bg service-bg">
            <div class="inner service">
                <div class="title-box">
                    <p class="title">选择服务类型</p>
                </div>
                <ul class="content">
                    <li class="item" :class="`item${index1 + 1} ${serviceIndex===index1?'item-hover':''}`" 
                        v-for="(item, index1) in serviceList" :key="index1"
                        @mouseover="serviceIndex=index1" @mouseout="serviceIndex=-1"
                    >
                        <p class="title">{{ item.title }}</p>
                        <ul class="tag">
                            <li v-for="(tag, index2) in item.tags" :key="index2">
                                <img src="@/assets/images/gou.png">
                                <span>{{ tag }}</span>
                            </li>
                            <li>
                                <button class="btn" v-show="serviceIndex === index1" type="button">立即入驻</button>
                            </li>
                        </ul>
                        <div class="item-border"></div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 仟呗入驻教程 -->
        <div class="inner-bg enter-bg">
            <div class="inner enter">
                <div class="title-box">
                    <p class="title">仟呗入驻教程</p>
                </div>
                <div class="content">
                    <p class="title">专业一站式入驻服务</p>
                    <p class="title">品牌保证，快速开启电商梦想</p>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "enter",
    components: {
        Header, Nav,
        Footer
    },
    data() {
        return {
            // 商品类目
            goodIndex: 0,
            radioIndex: 0,
            goodList: [
                {
                    title: "服饰鞋包",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "美容护理",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "数码电器",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "运动户外",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "家装家饰",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "汽车配件",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "书籍音像",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "手机",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "母婴",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "生活服务",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "食品/保健",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "家用电器",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "游戏/话费",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "家具用品",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "珠宝配饰",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
                {
                    title: "乐器",
                    content: ["户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具", "运动鞋new", "运动鞋new", "运动鞋new","户外/登山/野营/旅行用品", "户外/登山/野营/", "户外/登山/野营/旅行用品", "电动车/配件/交通工具", "电动车/配件/交通工具", "电动车/配件/交通工具"]
                },
            ],
            // 服务类型
            serviceIndex: 0,
            serviceList: [
                {
                    title: "白银入驻服务",
                    tags: ["便捷易用，简单高效", "递交迅速，反馈及时", "全流程掌握，随时查看进度"]
                },
                {
                    title: "黄金入驻服务",
                    tags: ["便捷易用，简单高效", "递交迅速，反馈及时", "全流程掌握，随时查看进度"]
                },
                {
                    title: "铂金入驻服务",
                    tags: ["便捷易用，简单高效", "递交迅速，反馈及时", "全流程掌握，随时查看进度"]
                },
                {
                    title: "钻石入驻服务",
                    tags: ["便捷易用，简单高效", "递交迅速，反馈及时", "全流程掌握，随时查看进度"]
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .enter-box {
        .title-box {
            .title {
                font-size: 30px;
                line-height: 30px;
                font-weight: bold;
                text-align: center;
                color: #333;
                background: url("../assets/images/title-bg.png") no-repeat center;
            }
        }

        .banner-bg {
            height: 600px;
            background: url("../assets/images/enter-banner1.png") no-repeat center;
        }

        .layer-bg {
            height: 1095px;
            background: url("../assets/images/enter-banner2.png") no-repeat center;

            .shop {
                padding: 60px 0;

                .content {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin: 45px 290px 0;
                    position: relative;

                    input {
                        width: 100%;
                        height: 60px;
                        font-size: 16px;
                        text-indent: 55px;
                        color: #333;
                        background-color: transparent;
                        border: 1px solid #ff969e;
                    }

                    .xia {
                        cursor: pointer;
                        position: absolute;
                        right: 45px;
                        top: 50%;
                        transform: translate(0,-50%);
                    }

                    .xia:active ~ .dropdown{
                        display: block;
                    }

                    .dropdown {
                        width: 100%;
                        display: none;
                        position: absolute;
                        left: 0;
                        top: 100%;

                        &:hover {
                            display: block;
                        }

                        li {
                            font-size: 16px;
                            line-height: 40px;
                            transition: .4s;
                            cursor: pointer;

                            &:hover {
                                color: red;
                            }
                        }
                    }
                }
            }

            .good {
                .content {
                    display: flex;
                    margin-top: 55px;

                    .left {
                        width: 235px;
                        color: #fff;
                        padding: 18px 0 0 0;
                        background-color: #ffc9cd;

                        li {
                            height: 30px;
                            font-size: 16px;
                            line-height: 30px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 30px 0 20px;
                            cursor: pointer;
                            margin-bottom: 10px;
                            transition: .4s;

                            &:hover {
                                background-color: #ff2352;
                            }
                        }
                        
                        .item-bottom {
                            height: 32px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-top: 1px solid #fff;

                            img {
                                cursor: pointer;
                            }
                        }
                    }

                    .right {
                        width: calc(100% - 235px);
                        padding-top: 26px;
                        background-color: #fff;

                        .item {
                            display: flex;
                            flex-wrap:wrap;
                            justify-content: space-between;
                            
                            .item-content {
                                width: calc(100% / 3);
                                display: flex;
                                align-items: center;
                                padding-left: 60px;
                                margin-bottom: 65px;

                                // 点击
                                &.actived {
                                    .radio {
                                        &:after {
                                            content: "";
                                            width: 10px;
                                            height: 10px;
                                            background-color: #ff0036;
                                            border-radius: 50%;
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            transform: translate(-50%,-50%);
                                        }
                                    }

                                    p {
                                        color: #ff0036;
                                    }
                                }

                                .radio {
                                    width: 18px;
                                    height: 18px;
                                    margin-right: 20px;
                                    background-color: #fff;
                                    border: 1px solid #d0d0d0;
                                    border-radius: 100%;
                                    position: relative;
                                    cursor: pointer;
                                }

                                p {
                                    font-size: 16px;
                                    line-height: 16px;
                                    color: #333;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }

        .service-bg {
            background-color: #fff4f4;

            .service {
                padding: 85px 0 40px;

                .content {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 55px;

                    .item {
                        width: 290px;
                        height: 378px;
                        text-align: center;
                        padding: 0 35px;
                        transition: .5s;
                        position: relative;

                        .title {
                            height: 50%;
                            font-size: 24px;
                            color: #fff;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: .4s;
                        }

                        .tag {
                            width: 100%;
                            height: 50%;
                            padding: 35px 0 0 50px;
                            background-color: #fff;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            transition: .4s;

                            li {
                                font-size: 14px;
                                line-height: 14px;
                                color: #666;
                                display: flex;
                                align-items: center;
                                margin-bottom: 20px;

                                img {
                                    margin-right: 10px;
                                }
                            }

                            .btn {
                                width: 160px;
                                height: 40px;
                                font-size: 16px;
                                line-height: 40px;
                                background-color: transparent;
                                cursor: pointer;
                                z-index: 2;
                            }
                        }

                        .item-border {
                            width: calc(100% - 40px);
                            height: calc(100% - 40px);
                            background-color: transparent;
                            border: 2px solid #f1f1f1;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                        }
                    }

                    // hover
                    .item-hover {
                        box-shadow: 0 5px 10px rgba(0,0,0,.1);

                        .title {
                            height: 35%;
                        }

                        .tag {
                            height: 65%;
                        }
                    }

                    .item1 {
                        background: url("../assets/images/service1.png") no-repeat center;

                        .btn {
                            color: #ff0b3f;
                            border: 1px solid #ff0b3f;
                        }
                    }
                    .item2 {
                        background: url("../assets/images/service2.png") no-repeat center;

                        .btn {
                            color: #ffac5f;
                            border: 1px solid #ffac5f;
                        }
                    }
                    .item3 {
                        background: url("../assets/images/service3.png") no-repeat center;

                        .btn {
                            color: #f9d138;
                            border: 1px solid #f9d138;
                        }
                    }
                    .item4 {
                        background: url("../assets/images/service4.png") no-repeat center;

                        .btn {
                            color: #71d9e3;
                            border: 1px solid #71d9e3;
                        }
                    }
                }
            }
        }

        .enter-bg {
            height: 955px;
            background: #fff7f7 url("../assets/images/enter-bg1.png") no-repeat 45% -22%;

            .enter {
                height: 100%;
                padding: 160px 0 0 0;
                background: url("../assets/images/enter-bg2.png") no-repeat 50% 85%;

                .content {
                    height: 100%;
                    text-align: center;
                    padding-top: 600px;

                    .title {
                        font-size: 30px;
                        font-weight: bold;
                        line-height: 60px;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>