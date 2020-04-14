<template>
    <div class="inner-bg goods-bg">
        
        <div class="inner goods">
            <div class="goods-left">
                
                <!-- 店铺信息 -->
                <div class="info">
                    <!-- 头部 -->
                    <div class="info-head">
                        <p class="title">
                            <img class="avatar" src="./images/tm.png">
                            <span>{{ goodsList.title }}</span>
                        </p>
                        <p class="description">热淘您值得信赖的店铺管家</p>
                        <ul class="tags">
                            <li>极速匹配</li>
                            <li>专属客服</li>
                            <li>交易随行</li>
                            <li>服务升级</li>
                            <li>实地付款</li>
                            <li>免过户费</li>
                            <li>极速退款</li>
                            <li>全额赔付</li>
                        </ul>
                    </div>
                    <!-- 内容 -->
                    <div class="info-content">
                        <div class="layer layer1">
                            <div class="item">
                                <p class="key">商城类型</p>
                                <p class="value">{{ goodsList.storeType==1?'专营店':'' || goodsList.storeType==2?'旗舰店':'' || goodsList.storeType==3?'专卖店':'' }}</p>
                            </div>
                            <div class="item">
                                <p class="key">主营类目</p>
                                <p class="value">{{ goodsList.mainProductName || 0 }}</p>
                            </div>
                            <div class="item">
                                <p class="key">商标类型</p>
                                <p class="value">{{ goodsList.trademarkCategory	 || 0 }}类</p>
                            </div>
                            <div class="item">
                                <p class="key">考核情况</p>
                                <p class="value">未通过{{ goodsList.kpi || 0 }}月</p>
                            </div>
                            <div class="item">
                                <p class="key">支持迁址</p>
                                <p class="value">{{ goodsList.relocation==1?'是':'否' }}</p>
                            </div>
                            <div class="item">
                                <p class="key">注册资金</p>
                                <p class="value">{{ goodsList.registMoney || 0 }}万</p>
                            </div>
                            <div class="item">
                                <p class="key">所在地区</p>
                                <p class="value">{{ goodsList.area }}地区</p>
                            </div>
                            <div class="item">
                                <p class="key">纳税类型</p>
                                <p class="value">{{ goodsList.taxIntelligence==1?'小规模纳税人':'一般纳税人' }}</p>
                            </div>
                            <div class="item">
                                <p class="key">一般扣分</p>
                                <p class="value">{{ goodsList.normalPunishment || 0 }}</p>
                            </div>
                            <div class="item">
                                <p class="key">严重扣分</p>
                                <p class="value">{{ goodsList.punishment || 0 }}</p>
                            </div>
                            <div class="item">
                                <p class="key">售假扣分</p>
                                <p class="value">{{ goodsList.fakePunishment || 0 }}</p>
                            </div>
                            <div class="item">
                                <p class="key">是否贷款</p>
                                <p class="value">{{ goodsList.hasLoan==1?'有':'无' }}</p>
                            </div>
                        </div>
                        <div class="layer layer2">
                            <p>
                                <span class="title">宝贝与描述：</span>
                                <span class="box">
                                    <span class="key">比同行平均水平</span>
                                    <span class="value" :class="goodsList.description==='高'?'good':'' || goodsList.description==='低'?'bad':'' ">{{ goodsList.description }}</span>
                                    <img v-if="goodsList.description==='高'" src="./images/good.png">
                                    <img v-if="goodsList.description==='低'" src="./images/bad.png">
                                </span>
                            </p>
                            <p>
                                <span class="title">卖家的服务：</span>
                                <span class="box">
                                    <span class="key">比同行平均水平</span>
                                    <span class="value" :class="goodsList.sellerService==='高'?'good':'' || goodsList.sellerService==='低'?'bad':'' ">{{ goodsList.sellerService }}</span>
                                    <img v-if="goodsList.sellerService==='高'" src="./images/good.png">
                                    <img v-if="goodsList.sellerService==='低'" src="./images/bad.png">
                                </span>
                            </p>
                            <p>
                                <span class="title">卖家发货速度：</span>
                                <span class="box">
                                    <span class="key">比同行平均水平</span>
                                    <span class="value" :class="goodsList.sellerSpeeder==='高'?'good':'' || goodsList.sellerSpeeder==='低'?'bad':'' ">{{ goodsList.sellerSpeeder }}</span>
                                    <img v-if="goodsList.sellerSpeeder==='高'" src="./images/good.png">
                                    <img v-if="goodsList.sellerSpeeder==='低'" src="./images/bad.png">
                                </span>
                            </p>
                        </div>
                        <div class="layer layer3">
                            <p class="title">一级类目：</p>
                            <ul>
                                <li :title="goodsList.firstCategory">{{ goodsList.firstCategory }}</li>
                            </ul>
                        </div>
                        <div class="layer layer4">
                            <p class="title">二级类目：</p>
                            <ul>
                                <li :title="goodsList.secondCategory">{{ goodsList.secondCategory }}</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 详情 -->
                    <ul class="info-detail">
                        <li>
                            <p class="key">商品编号</p>
                            <p class="value" :title="goodsList.productNo">{{ goodsList.productNo }}</p>
                        </li>
                        <li>
                            <p class="key">店铺状态</p>
                            <p class="value">{{ goodsList.isGrounding==1?'上架':'下架' }}</p>
                        </li>
                        <li>
                            <p class="key">发布时间</p>
                            <p v-if="goodsList.followTime" class="value">{{ goodsList.followTime.substring(0,10) }}</p>
                            <p v-if="goodsList.updateTime && !goodsList.followTime" class="value">{{ goodsList.updateTime.substring(0,10) }}</p>
                        </li>
                        <li>
                            <p class="key">交易方式</p>
                            <p class="value">热淘居间</p>
                        </li>
                    </ul>
                    <!-- 广告 -->
                    <img src="./images/advertising.png">
                    <!-- 价格 -->
                    <div class="info-price">
                        <div class="item item1">
                            <p>
                                <span class="symbol">￥</span>
                                <span class="price">{{ Number(goodsList.price*10000).toFixed(2) }}</span>
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
                                <span class="value">{{ Number(goodsList.skillFee*10000).toFixed(2) || 0 }}</span>
                                <span>（需退还）</span>
                            </p>
                            <p>
                                <span>技术年费：</span>
                                <span class="value">{{ Number(goodsList.yearFee*10000).toFixed(2) || 0 }}</span>
                                <span>（需退还）</span>
                            </p>
                        </div>
                    </div>
                    <!-- 按钮 -->
                    <div class="info-btn">
                        <button class="buy" type="button" @click='toDing'>立即预定</button>
                        <button @click="consult" class="consult" type="button">我要砍价</button>
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
                        <img :src="dropdownIndex === 0 ? serviceList[0].wxUrl : serviceList[0].imgUrl">
                    </div>
                    <p class="name">
                        <span>专业顾问：</span>
                        <span class="value">{{serviceList[0].name}}</span>
                    </p>
                    <p class="phone">
                        <span>联系电话：</span>
                        <span class="value">{{serviceList[0].phone}}</span>
                    </p>
                    <div class="btn">
                        <button @click="consult" @mouseenter="dropdownIndex = -1"  class="qq" type="button">QQ咨询</button>
                        <button @mouseenter="dropdownIndex = 0" class="wechat" type="button">微信咨询</button>
                    </div>
                </li>
                <li class="item">
                    <p class="title">咨询顾问</p>
                    <div class="avatar">
                        <img :src="dropdownIndex === 1 ? serviceList[1].wxUrl : serviceList[1].imgUrl">
                    </div>
                    <p class="name">
                        <span>专业顾问：</span>
                        <span class="value">{{serviceList[1].name}}</span>
                    </p>
                    <p class="phone">
                        <span>联系电话：</span>
                        <span class="value">{{serviceList[1].phone}}</span>
                    </p>
                    <div class="btn">
                        <button @click="consult" @mouseenter="dropdownIndex = -1" class="qq" type="button">QQ咨询</button>
                        <button @mouseenter="dropdownIndex = 1" class="wechat" type="button">微信咨询</button>
                    </div>
                </li>
                <li class="item">
                    <p class="title">咨询顾问</p>
                    <div class="avatar">
                        <img :src="dropdownIndex === 2 ? serviceList[2].wxUrl : serviceList[2].imgUrl">
                    </div>
                    <p class="name">
                        <span>专业顾问：</span>
                        <span class="value">{{serviceList[2].name}}</span>
                    </p>
                    <p class="phone">
                        <span>联系电话：</span>
                        <span class="value">{{serviceList[2].phone}}</span>
                    </p>
                    <div class="btn">
                        <button @click="consult" @mouseenter="dropdownIndex = -1" class="qq" type="button">QQ咨询</button>
                        <button @mouseenter="dropdownIndex = 2" class="wechat" type="button">微信咨询</button>
                    </div>
                </li>
                
                <!-- <div @mouseenter="showDropdown = true" @mouseleave="showDropdown = false" 
                    class="dropdown" :class="{'dropdown-open':showDropdown}" 
                    :style="{top: ((dropdownIndex * 430) + 56) + 'px'}"
                >
                    <img :src="serviceList[dropdownIndex].wxUrl">
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
    props: {
        goodsList: {
            type: Object
        }
    },
    data() {
        return {
            userInfo: ls.session.get("qbuserInfo"),
            infoForm: {},
            dropdownIndex: -1,
            serviceList: [
                {
                    imgUrl: require('./images/service4.png'),
                    name: '高奕豪',
                    description: '6年从业经验',
                    phone: 17705851730,
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service5.png'),
                    name: '郑梦琳',
                    description: '5年从业经验',
                    phone: 17705851671,
                    wxUrl: require('./images/wxcode.png')
                },
                {
                    imgUrl: require('./images/service7.png'),
                    name: '张凯莉',
                    description: '4年从业经验',
                    phone: 13858572923,
                    wxUrl: require('./images/wxcode.png')
                }
            ]
        }
    },
    methods: {
        clickCopy() { // 复制微信号
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
        },
        toDing() {
            if (this.userInfo && this.userInfo.account) this.$router.push("/recharge")
            else this.$router.push("/login?type=0")
        },
        consult() { // 联系客服
            window.open("https://url.cn/5FanN8i?_type=wpa&qidian=true");
        },
    }
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
                background-color: #fff;

                .info {
                    // 头部
                    .info-head {
                        padding: 28px 0 8px 105px;
                        margin-bottom: 10px;
                        background-color: #fffbf6;
                        border-radius: 8px;

                        .title {
                            display: flex;
                            align-items: center;

                            .avatar {
                                margin-right: 10px;
                            }

                            span {
                                font-size: 24px;
                                line-height: 24px;
                                font-weight: bold;
                                color: #020202;
                            }
                        }

                        .description {
                            font-size: 14px;
                            line-height: 14px;
                            text-indent: 35px;
                            color: #969696;
                            margin: 20px 0;
                        }

                        .tags {
                            width: 440px;
                            display: flex;
                            flex-wrap: wrap;
                            background: url('./images/info-head1.png') no-repeat 0 0;

                            li {
                                width: 25%;
                                height: 20px;
                                font-size: 12px;
                                line-height: 20px;
                                color: #020202;
                                text-align: center;
                                margin-bottom: 12px;
                            }
                        }
                    }

                    // 内容
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
                                margin-bottom: 40px;

                                .key {
                                    font-size: 14px;
                                    line-height: 14px;
                                    color: #999;
                                }

                                .value {
                                    font-size: 18px;
                                    line-height: 18px;
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

                                .box {
                                    height: 28px;
                                    line-height: 16px;
                                    display: flex;
                                    align-items: center;
                                    padding: 0 2px;
                                    border: solid 1px #d8d8d8;
                                    border-radius: 13px;
                                }

                                .title, .key {
                                    font-size: 16px;
                                    line-height: 16px;
                                }

                                .title {
                                    color: #999;
                                }
                                .key {
                                    line-height: 24px;
                                    font-weight: bold;
                                    color: #fff;
                                    padding: 0 5px;
                                    background-color: red;
                                    border-radius: 30px;
                                }
                                .value {
                                    font-size: 18px;
                                    font-weight: bold;
                                    line-height: 18px;
                                    margin: 0 10px;

                                    &.good {
                                        color: #ff0036;
                                    }
                                    &.bad {
                                        color: #00cc56;
                                    }
                                }
                                img {
                                    transform: rotate(180deg);
                                }
                            }
                        }

                        .layer3, .layer4 {
                            height: 90px;
                            display: flex;
                            align-items: center;

                            .title {
                                font-size: 16px;
                                line-height: 16px;
                                white-space: nowrap;
                                color: #999;
                                margin-right: 20px;
                            }

                            ul {
                                display: flex;
                                align-items: center;

                                li {
                                    max-width: 800px;
                                    font-size: 16px;
                                    font-weight: bold;
                                    line-height: 28px;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
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
                                width: 100%;
                                font-size: 18px;
                                font-weight: bold;
                                line-height: 18px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
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
                            background-color: rgba(255,0,54,.8);
                            transition: .4s;

                            &:hover {
                                background-color: rgba(255,0,54,1);
                            }
                        }

                        .consult {
                            background-color: rgba(255,138,0,.8);
                            transition: .4s;

                            &:hover {
                                background-color: rgba(255,138,0,1);
                            }
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

                        img {
                            width: 100%;
                        }
                    }

                    .name {
                        font-size: 14px;
                        line-height: 14px;

                        span {
                            line-height: 14px;
                            color: #333;
                            display: inline-block;
                        }
                    }

                    .phone {
                        font-size: 14px;
                        line-height: 14px;
                        margin: 20px 0;

                        span {
                            font-size: 14px;
                            line-height: 14px;
                            color: #333;
                            display: inline-block;
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

                .dropdown {
                    width: 100%;
                    max-height: 0;
                    background-color: #fff;
                    box-shadow: 0 10px 30px rgba(0,0,0,.1);
                    position: absolute;
                    left: 50%;
                    top: 50px;
                    transform: translate(-50%);
                    transition: .6s;
                    opacity: 0;
                    overflow: hidden;
                    z-index: 99;

                    img {
                        display: block;
                        margin: 18px auto;
                    }

                    &:after {
                        content: "";
                        width: 0;
                        height: 0;
                        border-top: 15px solid #f1f1f1;
                        border-bottom: 0;
                        border-left: 15px solid transparent;
                        border-right: 15px solid transparent;
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translate(-50%);
                    }
                }
                .dropdown-open {
                    max-height: 300px;
                    opacity: 1;
                }
            }
        }
    }
</style>