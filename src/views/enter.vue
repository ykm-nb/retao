<template>
    <div class="enter-box">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <!-- banner -->
        <div class="inner-bg banner-bg"></div>

        <div class="inner-bg layer-bg" @click="showDropdown = false">
            <div class="inner">
                <!-- 店铺类型 -->
                <div class="shop">
                    <div class="title-box">
                        <p class="title">店铺类型</p>
                    </div>
                    <div class="content">
                        <input v-model="selectedText" type="text">
                        <img @click.stop="showDropdown = !showDropdown" class="xia" src="@/assets/images/xia.png">
                        <ul class="dropdown" :class="{'dropdown-show': showDropdown}">
                            <li @click="selectedText = '旗舰店'">旗舰店</li>
                            <li @click="selectedText = '专卖店'">专卖店</li>
                            <li @click="selectedText = '专营店'">专营店</li>
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
                            <li @click="goodIndex = index" v-for="(item, index) in goodList" :key="index">
                                <p>{{ item.title }}</p>
                                <img src="@/assets/images/right.png">
                            </li>
                            <div class="item-bottom">
                                <img src="@/assets/images/good-top.png">
                            </div>
                        </ul>
                        <ul class="middle">
                            <li class="item" v-show="goodIndex === index1" v-for="(good, index1) in goodList" :key="index1">
                                <div class="item-content" :class="{'actived': item.isCheck}" 
                                    v-for="(item, index2) in good.content" :key="index2" 
                                    @click="checkThis(index1, index2)"
                                >
                                    <div class="radio"></div>
                                    <p>{{ item.text }}</p>
                                </div>
                            </li>
                        </ul>
                        <div class="right">
                            <p class="title">已选类目</p>
                            <ul>
                                <li class="item" v-for="(item, index) in checkList" :key="index">
                                    <p class="item-title">{{ item.title }}：</p>
                                    <p class="item-text">{{ item.obj.text }}</p>
                                </li>
                            </ul>
                            <button class="clear" @click="checkList = []" type="button">全部清除</button>
                        </div>
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
            // 店铺类型
            selectedText: '旗舰店',
            showDropdown: false, // 显示下拉
            // 商品类目
            goodIndex: 0,
            goodList: [
                {
                    title: "服饰鞋包",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品1"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "美容护理",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品1"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "数码电器",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品2"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "运动户外",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品3"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "家装家饰",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品4"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "汽车配件",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品5"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "书籍音像",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品6"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "手机",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品7"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "母婴",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品8"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "生活服务",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品9"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "食品/保健",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品10"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "家用电器",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品11"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "游戏/话费",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品12"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "家具用品",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品13"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "珠宝配饰",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品14"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
                {
                    title: "乐器",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品15"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/"
                        },
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        }
                    ]
                },
            ],
            checkList: [], // 已选类目列表
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
            ],
            
        }
    },
    methods: {
        checkThis (index1, index2) {
            const obj = this.goodList[index1].content[index2];
            obj.isCheck = !obj.isCheck;

            if(obj.isCheck) {
                if (!obj.id) {
                    obj.id = `${index1}${obj.text}${index2}`;
                    this.checkList.push({
                        title: this.goodList[index1].title,
                        obj: obj
                    })
                }
            } else {
                this.checkList.filter(item => {
                    return item.obj.id != `${index1}${obj.text}${index2}`
                })
                obj.id = ''
            }
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

                    .dropdown {
                        width: 100%;
                        display: none;
                        background-color: #fff;
                        box-shadow: 0 3px 6px 0 rgba(202, 202, 202, 0.8);
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
                    .dropdown-show {
                        display: block;
                    }
                }
            }

            .good {
                .content {
                    display: flex;
                    margin-top: 55px;
                    box-shadow: 0 3px 6px 0 rgba(202, 202, 202, 0.8);

                    .left {
                        width: 160px;
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

                    .middle {
                        width: calc((100% - 160px) * 0.75);
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
                                padding-left: 20px;
                                margin-bottom: 65px;
                                cursor: pointer;

                                .radio {
                                    width: 18px;
                                    height: 18px;
                                    margin-right: 20px;
                                    background-color: #fff;
                                    border: 1px solid #d0d0d0;
                                    border-radius: 100%;
                                    position: relative;
                                }

                                p {
                                    font-size: 16px;
                                    line-height: 16px;
                                    color: #333;
                                }

                                // 选中状态的类名
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
                            }
                        }
                    }

                    .right {
                        width: calc((100% - 160px) * 0.25);
                        background-color: #fff;
                        border-left: 1px solid #333;

                        .title {
                            font-size: 16px;
                            line-height: 60px;
                            color: #333;
                            border-bottom: 1px solid #333;
                        }

                        ul {
                            height: calc(100% - 120px);
                            padding: 10px;

                            .item {
                                line-height: 14px;
                                display: flex;
                                margin-bottom: 10px;

                                .item-title {
                                    font-size: 14px;
                                    font-weight: bold;
                                    line-height: 14px;
                                    white-space: nowrap;
                                    color: #333;
                                    margin-right: 5px;
                                }

                                .item-text {
                                    font-size: 14px;
                                    line-height: 14px;
                                    white-space: nowrap;
                                    color: #333;
                                }
                            }
                        }

                        .clear {
                            height: 60px;
                            width: 100%;
                            font-size: 16px;
                            line-height: 60px;
                            color: #333;
                            background-color: transparent;
                            border: none;
                            border-top: 1px solid #333;
                            cursor: pointer;
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