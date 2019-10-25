<template>
    <div class="goods-bg">
        
        <div class="goods-top">
            <div class="goods">
                <p class="title">
                    <img class="avatar">
                    <span>{{ goodsList.title }}</span>
                </p>

                <p class="description">卖家描述：华南地区，女装+服饰配件类目旗舰店，一般纳税人，挂靠地址，无扣分贷款，卖家诚心出售，...</p>
                
                <div class="info">
                    <div class="info-layer info-top">
                        <div class="item">
                            <p>商城类型</p>
                            <p class="value">{{ goodsList.storeType | nullToStar() }}</p>
                        </div>
                        <div class="item">
                            <p>所属行业</p>
                            <p class="value">{{ goodsList.industry | nullToStar() }}</p>
                        </div>
                        <div class="item">
                            <p>所在地区</p>
                            <p class="value">{{ goodsList.area | nullToStar() }}</p>
                        </div>
                        <div class="item">
                            <p>商标类型</p>
                            <p class="value">{{ goodsList.trademarkType | nullToStar()	 }}</p>
                        </div>
                        <div class="item">
                            <p>商标类别</p>
                            <p class="value">{{ goodsList.trademarkCategory | nullToStar() }}</p>
                        </div>
                        <div class="item">
                            <p>有无贷款</p>
                            <p class="value">{{ goodsList.hasLoan ? '有贷款' : '无贷款' }}</p>
                        </div>
                    </div>
                    <div class="info-layer info-bottom">
                        <div class="item">
                            <p>严重违规</p>
                            <p class="value">{{ goodsList.punishment | nullToStar() }}</p>
                        </div>
                        <div class="item">
                            <p>售假违规</p>
                            <p class="value">{{ goodsList.fakePunishment | nullToStar() }}</p>
                        </div>
                        <div class="item">
                            <p>纳税资质</p>
                            <p class="value">{{ goodsList.taxIntelligence | nullToStar() }}</p>
                        </div>
                        <div class="item">
                            <p>支持拆迁</p>
                            <p class="value">{{ goodsList.relocation ? '支持' : '不支持' }}</p>
                        </div>
                        <div class="item">
                            <p>变更主体</p>
                            <p class="value">{{ goodsList.changeSubject | nullToStar() }}</p>
                        </div>
                        <div class="item">
                            <p>是否陪同</p>
                            <p class="value">{{ goodsList.isEscort ? '是' : '否' }}</p>
                        </div>
                    </div>
                </div>

                <p class="category">
                    <span>已开通类目</span>
                    <span class="value">{{ goodsList.industry | nullToStar() }}</span>
                </p>
            </div>

            <div class="contact">
                <p class="title">咨询在线客服</p>
                <img class="avatar" src="./images/service1.png">
                <p class="name">
                    <span>资深销售顾问-</span>
                    <span class="value">刘静</span>
                </p>
                <p class="phone">
                    <span>电话咨询：</span>
                    <span class="value">12352654853</span>
                </p>
                <div class="btn">
                    <button class="qq" type="button">
                        <img src="./images/qq.png">
                        <span>QQ联系</span>
                    </button>
                    <button 
                        @mouseenter="showDropdown = true" 
                        @mouseleave="showDropdown = false" 
                        class="wechat" 
                        type="button"
                    >
                        <img src="./images/wechat.png">
                        <span>微信联系</span>
                    </button>
                </div>
                <div class="div" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false"></div>
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
                </div>
            </div>
        </div>

        <div class="goods-bottom">
            <ul class="ul">
                <li>
                    <span>网店编号</span>
                    <span class="value">HCDJXNXJDSNXNXNLKDCH1254523</span>
                </li>
                <li class="status">
                    <span>状态</span>
                    <span class="value">在售</span>
                </li>
                <li>
                    <span>交易方式</span>
                    <span class="value">线下当面交易</span>
                </li>
                <li>
                    <span>发布时间</span>
                    <span class="value">一周内</span>
                </li>
            </ul>

            <!-- 佣金 -->
            <div class="commission">
                <img src="./images/goods1.png">
                <div class="content">
                    <p class="content-left">
                        <span>网店出售价格</span>
                        <span class="rmb">￥</span>
                        <span class="price">48000</span>
                        <span class="tag">佣金5折</span>
                    </p>
                    <div class="content-right">
                        <button class="handsel" type="button">支付定金</button>
                        <button class="annual" type="button">年费看店</button>
                    </div>
                </div>
            </div>
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
    filters: {
        // null或'' 转*
        nullToStar(value) {
            return (value == null || value == '') ? '*' : value;
        }
    },
    created() {}
}
</script>

<style lang="less" scoped>
    .goods-bg {
        .goods-top {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;

            .goods {
                width: 900px;
                text-align: left;
                padding: 25px 20px;
                background-color: #fff;
                border-radius: 5px;

                .title {
                    cursor: pointer;

                    .avatar {
                        width: 30px;
                        height: 30px;
                        vertical-align: bottom;
                        margin-right: 15px;
                        background-color: #a9a9a9;
                        border-radius: 6px;
                    }

                    span {
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: bold;
                        color: #e11d2a;
                        vertical-align: bottom;
                    }
                }

                .description {
                    font-size: 14px;
                    line-height: 14px;
                    color: #999999;
                    margin: 12px 0 15px
                }

                .info {
                    border: 1px solid #e1e1e1;
                    border-radius: 8px;
                    
                    .info-layer {
                        display: flex;
                        justify-content: space-between;
                        padding: 20px 35px 20px 42px;
                        border-bottom: 1px solid #e1e1e1;

                        .item {
                            text-align: center;

                            p {
                                font-size: 14px;
                                line-height: 14px;
                                color: #999999;
                            }

                            .value {
                                font-size: 16px;
                                line-height: 16px;
                                color: #000;
                                margin-top: 12px;
                            }
                        }
                    }

                    .info-bottom {
                        border-bottom: none;
                    }
                }

                .category {
                    margin-top: 22px;

                    span {
                        font-size: 14px;
                        line-height: 14px;
                        color: #d3d3d3;
                    }

                    .value {
                        color: #a7a7a7;
                        margin-left: 12px;
                    }
                }
            }

            .contact {
                width: 290px;
                padding: 35px 50px 0;
                background-color: #fff;
                border-radius: 5px;
                position: relative;

                .title {
                    font-size: 18px;
                    line-height: 18px;
                    font-weight: bold;
                    color: #333333;
                    display: inline-block;
                    padding: 0 10px;
                    background-color: #fff;
                    position: relative;

                    &:before, &:after {
                        content: "";
                        width: 48px;
                        height: 1px;
                        background-color: #e1e1e1;
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
                    display: block;
                    margin: 35px auto 20px;
                }

                .name span {
                    font-size: 14px;
                    line-height: 14px;
                    font-weight: bold;
                    color: #333333;
                }

                .phone {
                    margin: 12px 0 15px;

                    span {
                        font-size: 14px;
                        line-height: 14px;
                        color: #333333;
                    }
                }

                .btn {
                    display: flex;
                    justify-content: space-between;

                    button {
                        width: 78px;
                        height: 24px;
                        border-radius: 4px;
                        border: none;
                        cursor: pointer;

                        img {
                            vertical-align: middle;
                            margin-right: 4px;
                        }

                        span {
                            line-height: 12px;
                            vertical-align: middle;
                            color: #fff;
                        }
                    }

                    .qq {
                        background-color: #ff6600;
                    }

                    .wechat {
                        background-color: #49c019;
                    }
                }

                .div {
                    content: "";
                    width: 100%;
                    height: 32px;
                    background-color: transparent;
                    position: absolute;
                    bottom: -7px;
                    left: 0;
                }

                .dropdown {
                    width: 100%;
                    max-height: 0;
                    background-color: #fff;
                    box-shadow: 0 10px 30px rgba(0,0,0,.1);
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    transform: translate(0,102%);
                    transition: .6s;
                    opacity: 0;
                    overflow: hidden;
                    z-index: 99;

                    img {
                        display: block;
                        margin: 26px auto 0;
                    }

                    .title {
                        margin: 15px 0;
                    }

                    .phone {
                        font-size: 14px;
                        line-height: 14px;
                        font-weight: bold;
                        color: #333333;
                        margin: 0;
                    }

                    button {
                        width: 80px;
                        height: 24px;
                        color: #fff;
                        margin: 16px 0;
                        background-color: #49c019;
                        border-radius: 3px;
                        border: none;
                        cursor: pointer;
                    }

                    .tip {
                        font-size: 14px;
                        line-height: 14px;
                        color: #999999;
                        margin-bottom: 30px;
                    }

                    &:after {
                        content: "";
                        width: 0;
                        height: 0;
                        border-top: 15px solid #f1f1f1;
                        border-left: 15px solid transparent;
                        border-right: 15px solid transparent;
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translate(-50%);
                    }
                }
                .dropdown-open {
                    max-height: 100%;
                    opacity: 1;
                }
            }
        }

        .goods-bottom {
            padding: 18px 20px 32px 20px;
            background-color: #fff;
            border-radius: 5px;

            .ul {
                width: 800px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 25px;

                li {
                    span {
                        font-size: 14px;
                        line-height: 14px;
                        color: #999999;
                    }

                    .value {
                        margin-left: 15px;
                    }
                }

                .status .value {
                    color: #e55057;
                }
            }

            .commission {
                border-radius: 7px;
                border: 1px solid #e11d2a;

                .content {
                    display: flex;
                    justify-content: space-between;
                    padding: 30px 48px 32px 36px;

                    .content-left {
                        width: 350px;
                        text-align: left;
                        display: flex;
                        align-items: center;

                        span {
                            font-size: 14px;
                            line-height: 14px;
                            color: #e01523;
                        }

                        span:first-child {
                            color: #999999;
                            margin-right: 18px;
                        }

                        .rmb {
                            font-size: 16px;
                            line-height: 16px;
                        }

                        .price {
                            font-size: 36px;
                            line-height: 36px;
                            font-weight: bold;
                            margin: 0 20px 0 2px;
                        }

                        .tag {
                            width: 62px;
                            height: 28px;
                            line-height: 28px;
                            text-align: center;
                            color: #fff;
                            display: inline-block;
                            background-color: #e01523;
                            border-radius: 20px;
                            position: relative;

                            &:before {
                                content: "";
                                display: block;
                                border-right: 6px solid #e01523;
                                border-top: 5px solid transparent;
                                border-bottom: 5px solid transparent;
                                position: absolute;
                                top: 10%;
                                left: -7%;
                                transform: rotate(25deg);
                            }
                        }
                    }

                    .content-right {
                        width: 360px;
                        display: flex;
                        justify-content: space-between;

                        button {
                            height: 42px;
                            font-size: 16px;
                            line-height: 42px;
                            border: none;
                            border-radius: 20px;
                            cursor: pointer;
                        }

                        .handsel {
                            width: 180px;
                            color: #fff;
                            background-color: #e01523;
                        }

                        .annual {
                            width: 146px;
                            color: #e01523;
                            background-color: transparent;
                            border: 1px solid #e01523;
                        }
                    }
                }
            }
        }
    }
</style>