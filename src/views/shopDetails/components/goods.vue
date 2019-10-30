<template>
    <div class="inner-bg goods-bg">
        
        <div class="inner goods">
            <div class="goods-left">
                <p class="title">
                    <img class="avatar" src="./images/tm.png">
                    <span>{{ goodsList.title }}</span>
                </p>
                <p class="description">仟呗您值得信赖的店铺管家</p>
                
                <!-- 店铺信息 -->
                <div class="info">
                    <p class="info-title">网店店铺信息</p>
                    <!-- 内容 -->
                    <div class="info-content">
                        <div class="layer layer1">
                            <div class="item">
                                <p>商城类型</p>
                                <p class="value">{{ goodsList.storeType || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>主营类目</p>
                                <p class="value">{{ goodsList.category || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>商标类型</p>
                                <p class="value">{{ goodsList.trademarkCategory	 || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>考核情况</p>
                                <p class="value">{{ goodsList.kpi || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>支持迁址</p>
                                <p class="value">{{ goodsList.relocation || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>注册资金</p>
                                <p class="value">{{ goodsList.price || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>所在地区</p>
                                <p class="value">{{ goodsList.area || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>纳税类型</p>
                                <p class="value">{{ goodsList.taxIntelligence || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>一般扣分</p>
                                <p class="value">{{ goodsList.punishment1 || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>严重扣分</p>
                                <p class="value">{{ goodsList.punishment || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>售假扣分</p>
                                <p class="value">{{ goodsList.fakePunishment || '*' }}</p>
                            </div>
                            <div class="item">
                                <p>是否贷款</p>
                                <p class="value">{{ goodsList.hasLoan || '*' }}</p>
                            </div>
                        </div>
                        <div class="layer layer2">
                            <p>
                                <span class="title">宝贝与描述：</span>
                                <span class="key">比同行平均水平</span>
                                <span class="value" :class="goodsList.description == '高' ? 'good' : 'bad'">{{ goodsList.description }}</span>
                                <img :src="goodsList.description == '高' ? require('./images/good.png') : require('./images/bad.png')">
                            </p>
                            <p>
                                <span class="title">卖家的服务：</span>
                                <span class="key">比同行平均水平</span>
                                <span class="value" :class="goodsList.service == '高' ? 'good' : 'bad'">{{ goodsList.service }}</span>
                                <img :src="goodsList.service == '高' ? require('./images/good.png') : require('./images/bad.png')">
                            </p>
                            <p>
                                <span class="title">卖家发货速度：</span>
                                <span class="key">比同行平均水平</span>
                                <span class="value" :class="goodsList.speed == '高' ? 'good' : 'bad'">{{ goodsList.speed }}</span>
                                <img :src="goodsList.speed == '高' ? require('./images/good.png') : require('./images/bad.png')">
                            </p>
                        </div>
                        <div class="layer layer3">
                            <p class="title">一级类目：</p>
                            <ul>
                                <li v-for="(item, index) in goodsList.firstCategory" :key="index">{{ item }}</li>
                            </ul>
                        </div>
                        <div class="layer layer4">
                            <p class="title">二级类目：</p>
                            <ul>
                                <li v-for="(item, index) in goodsList.secondCategory" :key="index">{{ item }}</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 详情 -->
                    <ul class="info-detail">
                        <li>
                            <p class="key">商品编号</p>
                            <p class="value">{{ goodsList.productNo }}</p>
                        </li>
                        <li>
                            <p class="key">店铺状态</p>
                            <p class="value">{{ goodsList.status }}</p>
                        </li>
                        <li>
                            <p class="key">发布时间</p>
                            <p class="value">{{ goodsList.time }}</p>
                        </li>
                        <li>
                            <p class="key">交易方式</p>
                            <p class="value">{{ goodsList.deal }}</p>
                        </li>
                    </ul>
                    <!-- 广告 -->
                    <img src="./images/advertising.png">
                    <!-- 价格 -->
                    <div class="info-price">
                        <div class="item item1">
                            <p>
                                <span class="symbol">￥</span>
                                <span class="price">{{ goodsList.price1.toFixed(2) }}</span>
                            </p>
                            <button>
                                <span>今日超值</span>
                                <img src="./images/zan.png">
                            </button>
                        </div>
                        <p class="item2">网店出售价格</p>
                        <div class="item3">
                            <p>
                                <span>消费者保证金：</span>
                                <span class="value">{{ goodsList.deposit.toFixed(2) }}</span>
                                <span>（需退还）</span>
                            </p>
                            <p>
                                <span>消费者保证金：</span>
                                <span class="value">{{ goodsList.skill.toFixed(2) }}</span>
                                <span>（需退还）</span>
                            </p>
                        </div>
                    </div>
                    <!-- 按钮 -->
                    <div class="info-btn">
                        <button class="buy" type="button">立即购买</button>
                        <button class="consult" type="button">咨询顾问</button>
                    </div>
                    <!-- 底部 -->
                    <ul class="info-bottom">
                        <li>
                            <img src="./images/info1.png">
                            <p>签署合同</p>
                        </li>
                        <li>
                            <img src="./images/info2.png">
                            <p>承担交易</p>
                        </li>
                        <li>
                            <img src="./images/info3.png">
                            <p>提供证件</p>
                        </li>
                        <li>
                            <img src="./images/info4.png">
                            <p>极速放款</p>
                        </li>
                        <li>
                            <img src="./images/info5.png">
                            <p>支持线下</p>
                        </li>
                        <li>
                            <img src="./images/info6.png">
                            <p>确认后放款</p>
                        </li>
                    </ul>
                </div>
            </div>

            <ul class="contact">
                <li class="item">
                    <p class="title">咨询顾问</p>
                    <div class="avatar">
                        <img src="./images/service1.png">
                    </div>
                    <p class="name">
                        <span>专业顾问：</span>
                        <span class="value">张文豪</span>
                    </p>
                    <p class="phone">
                        <span>联系电话：</span>
                        <span class="value">18164584012</span>
                    </p>
                    <div class="btn">
                        <button class="qq" type="button">QQ咨询</button>
                        <button 
                            @mouseenter="showDropdown = true" 
                            @mouseleave="showDropdown = false" 
                            class="wechat" 
                            type="button"
                        >微信咨询</button>
                    </div>
                </li>
                <li class="item">
                    <p class="title">咨询顾问</p>
                    <div class="avatar">
                        <img src="./images/service1.png">
                    </div>
                    <p class="name">
                        <span>专业顾问：</span>
                        <span class="value">张文豪</span>
                    </p>
                    <p class="phone">
                        <span>联系电话：</span>
                        <span class="value">18164584012</span>
                    </p>
                    <div class="btn">
                        <button class="qq" type="button">QQ咨询</button>
                        <button 
                            @mouseenter="showDropdown = true" 
                            @mouseleave="showDropdown = false" 
                            class="wechat" 
                            type="button"
                        >微信咨询</button>
                    </div>
                </li>
                <li class="item">
                    <p class="title">咨询顾问</p>
                    <div class="avatar">
                        <img src="./images/service1.png">
                    </div>
                    <p class="name">
                        <span>专业顾问：</span>
                        <span class="value">张文豪</span>
                    </p>
                    <p class="phone">
                        <span>联系电话：</span>
                        <span class="value">18164584012</span>
                    </p>
                    <div class="btn">
                        <button class="qq" type="button">QQ咨询</button>
                        <button 
                            @mouseenter="showDropdown = true" 
                            @mouseleave="showDropdown = false" 
                            class="wechat" 
                            type="button"
                        >微信咨询</button>
                    </div>
                </li>
                
                
                <!-- <div class="div" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false"></div>
                <div 
                    @mouseenter="showDropdown = true" 
                    @mouseleave="showDropdown = false" 
                    class="dropdown" 
                    :class="{'dropdown-open':showDropdown}"
                >
                    <img src="./images/code.png">
                    <p class="title">微信号</p>
                    <p class="phone" ref="wechatNum">15242325462313</p>
                    <button @click="clickCopy" type="button">复制微信号</button>
                    <p class="tip">扫一扫或复制微信号，添加好友咨询</p>
                </div> -->
            </ul>
        </div>

    </div>
</template>

<script>
import api from '@/api';
import ls from "store2";
export default {
    name: "goods",
    // props: {
    //     goodsList: {
    //         type: Object
    //     }
    // },
    data() {
        return {
            goodsList: {
                title: "华南车品外饰旗舰店 半新店 无扣分 动态全红 名字好听",
                storeType: "旗舰店",
                category: "汽车及配件",
                trademarkCategory: "11类",
                kpi: "123",
                relocation: "6000",
                price: "500万",
                area: "华南地区",
                taxIntelligence: "一般纳税人",
                punishment1: "0分",
                punishment: "0分",
                fakePunishment: "0分",
                hasLoan: "否",
                description: "高",
                service: "高",
                speed: "低",
                firstCategory: ["汽车用品", "电子", "清洗", "改装"],
                secondCategory: ["汽车用品", "电子", "清洗"],
                productNo: "1907061552476529",
                status: "在售",
                time: "2019-09-23",
                deal: "仟呗居间",
                price1: 230000,
                deposit: 50000, // 保证金
                skill: 22500, // 技术年费
            },
            infoForm: {},
            showDropdown: false
        }
    },
    methods: {
        // 复制微信号
        clickCopy() {
            const num = this.$refs.wechatNum,
                  input = document.createElement('input');

            input.setAttribute('readonly', 'readonly'), input.setAttribute('value', num.innerHTML);
            document.body.appendChild(input);
            input.select();
            input.setSelectionRange(0, 9999);
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                this.$Message.success({content: "复制成功~"})
            }
            document.body.removeChild(input);
        }
    },
    created() {}
}
</script>

<style lang="less" scoped>
    .goods-bg {
        background-color: #fff;
        box-shadow: 0 2px 15px rgba(0,0,0,.1);

        .goods {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            .goods-left {
                width: 970px;
                text-align: left;
                padding: 25px 0 0 20px;
                background: #fff url('./images/goods-bg.png') no-repeat 0 0;

                .title {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                    .avatar {
                        margin-right: 10px;
                    }

                    span {
                        font-size: 24px;
                        line-height: 24px;
                        font-weight: bold;
                        color: #fff;
                        vertical-align: bottom;
                    }
                }

                .description {
                    font-size: 16px;
                    line-height: 16px;
                    text-align: center;
                    color: #fff;
                    margin: 18px 0 70px;
                }

                .info {
                    .info-title {
                        font-size: 24px;
                        font-weight: bold;
                        line-height: 24px;
                        text-align: center;
                        color: #333;
                        margin-bottom: 20px;
                    }

                    .info-content {
                        padding: 45px 20px 0;
                        background-color: #fffbf6;
                        border-radius: 8px;

                        .layer {
                            border-bottom: 1px solid #e1e1e1;
                        }

                        .layer1 {
                            display: flex;
                            flex-wrap: wrap;
                            
                            .item {
                                width: 25%;
                                text-align: center;
                                margin-bottom: 44px;

                                p {
                                    font-size: 18px;
                                    line-height: 18px;
                                    color: #999;
                                }

                                .value {
                                    font-size: 24px;
                                    font-weight: bold;
                                    line-height: 24px;
                                    color: #333;
                                    margin-top: 10px;
                                }
                            }
                        }

                        .layer2 {
                            height: 90px;
                            line-height: 90px;
                            display: flex;
                            justify-content: space-between;

                            p {
                                width: 33%;
                                display: flex;
                                align-items: center;

                                .title, .key {
                                    font-size: 16px;
                                    line-height: 16px;
                                }

                                .title {
                                    color: #999;
                                }
                                .key {
                                    font-weight: bold;
                                    color: #333;
                                }
                                .value {
                                    font-size: 18px;
                                    font-weight: bold;
                                    line-height: 18px;
                                    margin: 0 10px 0 25px;

                                    &.good {
                                        color: #00cc56;
                                    }
                                    &.bad {
                                        color: #ff0036;
                                    }
                                }
                            }
                        }

                        .layer3, .layer4 {
                            height: 90px;
                            display: flex;

                            .title {
                                font-size: 16px;
                                line-height: 16px;
                                color: #999;
                                margin-right: 20px;
                            }

                            ul {
                                display: flex;
                                align-items: center;

                                li {
                                    font-size: 16px;
                                    font-weight: bold;
                                    line-height: 28px;
                                    color: #ff0733;
                                    padding: 0 10px;
                                    margin-right: 5px;
                                    background-color: #ffcdcd;
                                    border-radius: 4px;
                                }
                            }
                        }

                        .layer4 {
                            border: none;
                        }
                    }
                    
                    .info-detail {
                        display: flex;
                        padding: 26px 0 30px;

                        li {
                            width: 25%;
                            text-align: center;
                            border-right: 1px solid #e8e2dc;

                            .key {
                                font-size: 18px;
                                line-height: 18px;
                                color: #999;
                                margin-bottom: 20px;
                            }

                            .value {
                                font-size: 18px;
                                font-weight: bold;
                                line-height: 18px;
                                color: #333;
                            }
                        }

                        li:last-child {
                            border: none;
                        }
                    }

                    .info-price {
                        padding: 40px 50px 35px 32px;
                        background-color: #fffaf5;

                        .item1 {
                            display: flex;
                            justify-content: space-between;

                            p {
                                font-weight: bold;
                                color: #ff0036;
                                display: flex;
                                align-items: flex-end;

                                .symbol {
                                    font-size: 28px;
                                    line-height: 28px;
                                }

                                .price {
                                    font-size: 48px;
                                    line-height: 44px;
                                }
                            }

                            button {
                                width: 200px;
                                height: 50px;
                                font-size: 22px;
                                line-height: 50px;
                                color: #ff0833;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background-color: #ffe8d6;
                                border-radius: 4px;
                                border: none;
                                cursor: pointer;

                                span {
                                    margin-right: 12px;
                                }
                            }
                        }

                        .item2 {
                            font-size: 22px;
                            line-height: 22px;
                            color: #999;
                            margin: 22px 0 32px;
                        }

                        .item3 {
                            display: flex;

                            p {
                                font-size: 20px;
                                line-height: 20px;
                                color: #999;
                                margin-right: 30px;

                                .value {
                                    font-weight: bold;
                                    color: #ff8a00;
                                }
                            }
                        }
                    }

                    .info-btn {
                        display: flex;
                        justify-content: center;
                        margin: 30px 0 35px;

                        button {
                            width: 200px;
                            height: 50px;
                            line-height: 50px;
                            font-size: 18px;
                            color: #fff;
                            border-radius: 30px;
                            border: none;
                            cursor: pointer;
                        }

                        .buy {
                            font-weight: bold;
                            margin-right: 15px;
                            background-color: #ff0036;
                        }

                        .consult {
                            background-color: #ff8a00;
                        }
                    }

                    .info-bottom {
                        height: 70px;
                        font-size: 14px;
                        line-height: 70px;
                        color: #999;
                        display: flex;
                        justify-content: space-around;
                        border-top: 1px solid #eee;

                        li {
                            display: flex;
                            align-items: center;

                            img {
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }

            .contact {
                width: 215px;
                margin-top: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 1px 1px 15px rgba(0,0,0,.1);
                position: relative;

                .item {
                    padding: 28px 0 45px;
                    border-bottom: 1px solid #eee;

                    .title {
                        font-size: 16px;
                        line-height: 16px;
                        font-weight: bold;
                        color: #333;
                        display: inline-block;
                        padding: 0 10px;
                        background-color: #fff;
                        position: relative;

                        &:before, &:after {
                            content: "";
                            width: 30px;
                            height: 1px;
                            background-color: #ff8a00;
                            position: absolute;
                            top: 50%;
                        }

                        &:before {
                            left: 0;
                            top: 50%;
                            transform: translate(-100%,-50%);
                        }

                        &:after {
                            right: 0;
                            transform: translate(100%,-50%);
                        }
                    }

                    .avatar {
                        height: 205px;
                        margin: 15px 15px 25px;
                        border-radius: 5px;
                        overflow: hidden;
                    }

                    .name span {
                        font-size: 14px;
                        line-height: 14px;
                        color: #333;
                    }

                    .phone {
                        margin: 20px 0;

                        span {
                            font-size: 14px;
                            line-height: 14px;
                            color: #333;
                        }

                        .value {
                            font-weight: bold;
                            color: #ff8a00;
                        }
                    }

                    .btn {
                        display: flex;
                        justify-content: space-between;
                        margin: 0 10px;

                        button {
                            width: 90px;
                            height: 25px;
                            font-size: 12px;
                            line-height: 24px;
                            color: #fff;
                            border-radius: 20px;
                            border: none;
                            cursor: pointer;
                        }

                        .qq {
                            background-color: #3bcfff;
                        }

                        .wechat {
                            background-color: #22af17;
                        }
                    }
                }


                // .div {
                //     content: "";
                //     width: 100%;
                //     height: 32px;
                //     background-color: transparent;
                //     position: absolute;
                //     bottom: -7px;
                //     left: 0;
                // }

                // .dropdown {
                //     width: 100%;
                //     max-height: 0;
                //     background-color: #fff;
                //     box-shadow: 0 10px 30px rgba(0,0,0,.1);
                //     position: absolute;
                //     left: 0;
                //     bottom: 0;
                //     transform: translate(0,102%);
                //     transition: .6s;
                //     opacity: 0;
                //     overflow: hidden;
                //     z-index: 99;

                //     img {
                //         display: block;
                //         margin: 26px auto 0;
                //     }

                //     .title {
                //         margin: 15px 0;
                //     }

                //     .phone {
                //         font-size: 14px;
                //         line-height: 14px;
                //         font-weight: bold;
                //         color: #333333;
                //         margin: 0;
                //     }

                //     button {
                //         width: 80px;
                //         height: 24px;
                //         color: #fff;
                //         margin: 16px 0;
                //         background-color: #49c019;
                //         border-radius: 3px;
                //         border: none;
                //         cursor: pointer;
                //     }

                //     .tip {
                //         font-size: 14px;
                //         line-height: 14px;
                //         color: #999999;
                //         margin-bottom: 30px;
                //     }

                //     &:after {
                //         content: "";
                //         width: 0;
                //         height: 0;
                //         border-top: 15px solid #f1f1f1;
                //         border-left: 15px solid transparent;
                //         border-right: 15px solid transparent;
                //         position: absolute;
                //         top: 0;
                //         left: 50%;
                //         transform: translate(-50%);
                //     }
                // }
                // .dropdown-open {
                //     max-height: 100%;
                //     opacity: 1;
                // }
            }
        }
    }
</style>