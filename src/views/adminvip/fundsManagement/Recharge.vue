<template>
    <!-- 我要充值 -->
    <div class="recharge">
        
        <div class="recharge-top">
            <p class="title">我要充值</p>
            <!-- <p class="recharge-record">充值记录</p> -->
        </div>
        <!-- <div class="recharge-content">
            <div class="content-left">
                <p class="title">账户总额</p>
                <p class="money"><b>0</b>元</p>
            </div>
            <ul>
                <div class="item item1">
                    <p class="title">可用资金</p>
                    <p class="money"><b>0</b>元</p>
                </div>
                <div class="item item1">
                    <p class="title">已充值金额</p>
                    <p class="money"><b>0</b>元</p>
                </div>
                <div class="item">
                    <p class="title">冻结资金</p>
                    <p class="money"><b>0</b>元</p>
                </div>
                <div class="item">
                    <p class="title">已提现总额</p>
                    <p class="money"><b>0</b>元</p>
                </div>
            </ul>
            <div class="content-right">
                <Button long type="primary">我要充值</Button>
                <Button long>我要提现</Button>
            </div>
        </div> -->
        <div class="recharge-bottom">
            <Tabs value="name1">
                <TabPane label="支付宝扫码充值" name="name1" class="tab1">
                    <div class="zfb-title"></div>
                    <div class="zfb-payoption">
                        <img src="../images/code.png">
                    </div>
                    <div class="zfb-info">
                        <p>1.支付宝账号：163382005@qq.ocm</p>
                        <p>2.打开支付宝，扫一扫上面二维码进行付款充值</p>
                        <p>3.付款成功后，请填写以下充值表单并提交</p>
                    </div>
                    <div class="formWrap">
                        <h4 class='cztable'>充值表单</h4>
                        <Form class="zfb-form" :model="formPay">
                            <FormItem>
                                <span><strong>•</strong> 转账金额</span>
                                <Input v-model="formPay.amount" style="width:310px;" />
                            </FormItem>
                            <FormItem>
                                <span><strong>•</strong> 支付宝名称</span>
                                <Input v-model="formPay.payerName" style="width:310px" />
                            </FormItem>
                            <FormItem>
                                <span><strong>•</strong> 支付宝账号</span>
                                <Input v-model="formPay.payerAccount" style="width:310px" />
                            </FormItem>
                            
                            <Button type="primary" @click='toPay' v-if='isCz'>立即提交</Button>
                            <Button type="warning" v-else>提交审批中...</Button>
                        </Form>
                    </div>
                </TabPane>
                <!-- <TabPane label="网银充值" name="name2" class="tab2">
                    <div class="wy-title">网银支付平台</div>
                    <div class="wy-payoption">
                        <input type="radio" checked="checked">
                        <img src="../images/bank_zx.gif.png">
                    </div>
                    <Form class="wy-form" :model="form2" :label-width="130" label-position="left">
                        <FormItem label="请输入支付金额(元)：">
                            <Input v-model="form2.name1" style="width: 200px" />
                            <p v-if="errorTipForm2.name1" class="error-tip">未输入支付金额</p>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">去网银支付</Button>
                        </FormItem>
                    </Form>
                    <div class="wy-info">温馨提示：选择网上银行充值成功的客户，系统会扣除0.5%手续费，该费用由银行收取，封顶50元。使用其它充值方式免收服务费。</div>
                </TabPane> -->
                <TabPane label="线下转账充值" name="name3" class="tab3">
                    <div class="xx-title">
                        <img src="../images/zhifuliucheng.png">
                    </div>
                    <div class="xx-info">您当前选择的是 “<b>线下转款充值</b>” 方式，使用网银转款、线下汇款请填写确认单提交！</div>
                    <ul>
                        <li class="layer1">
                            <p class="layer-title">1、转款帐号信息</p>
                            <div class="layer-content">
                                <img src="../images/tlbank.png">
                                <div>
                                    <p>帐号 ：3308 0240 2010 0000 1732</p>
                                    <p>户名 ：浙江春风十里网络科技有限公司</p>
                                    <p>开户行：浙江泰隆商业银行股份有限公司金华东阳支行</p>
                                </div>
                            </div>
                        </li>
                        <li class="layer2">
                            <p class="layer-title">2、去银行汇款</p>
                            <div class="layer-content">
                                <p>带好您的身份证和款项去银行营业厅柜台汇款！</p>
                                <p>请勿使用ATM机汇款，ATM汇款时以款到为准。</p>
                            </div>
                        </li>
                        <li class="layer3">
                            <p class="layer-title">3、提交汇款确认单</p>
                            <Form class="xx-form" :model="form3" :label-width="110" label-position="right">
                                <FormItem label="收款账户：">
                                    <Input v-model="form3.name1" style="width: 300px" :readonly=true />
                                </FormItem>
                                <FormItem label="汇款银行：">
                                    <Input v-model="form3.name2" style="width: 300px" />
                                </FormItem>
                                <FormItem label="汇款金额(元)：">
                                    <Input v-model="form3.name3" style="width: 300px" />
                                </FormItem>
                                <FormItem label="汇款姓名：">
                                    <Input v-model="form3.name4" style="width: 300px" />
                                </FormItem>
                                <FormItem label="备注：">
                                    <Input v-model="form3.name5" type="textarea" :autosize="{minRows: 4,maxRows: 5}"></Input>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary">提交</Button>
                                </FormItem>
                            </Form>
                        </li>
                    </ul>
                </TabPane>
            </Tabs>
            <div class="tip disNone">
                <p>温馨提示</p>
                <p>1.为了您的账户安全，请在充值前进行实名认证、手机绑定以及支付密码设置。</p>
                <p>2.您的账户资金将通过第三方平台进行充值。</p>
                <p>3.请注意您的银行卡充值限制，以免造成不便。</p>
                <p>4.禁止洗钱、信用卡套现、虚假交易等行为、一经发现并确认，将终止该账户的使用。</p>
                <p>5.如果充值金额没有及时到账，请联系客服，400-000-5445</p>
            </div>
        </div>

    </div>
</template>

<script>
import api from "@/api";
export default {
    name: "recharge",
    data() {
        return {
            formPay: {
                type: 1
            },
            formPay2: {
                type: 2
            },
            form2: {
                name1: ''
            },
            isCz: true,
            errorTipForm2: {
                name1: false
            },
            form3: {
                name1: '3308 0240 2010 0000 1732 泰隆银行)',
                name2: '',
                name3: '',
                name4: '',
                name5: ''
            }
        }
    },
    methods: {
        toPay() {
            api.axs('post', "/payRecord/saveOrUpdate", this.formPay).then(({ data }) => {
                if(data.code === "SUCCESS") {
                    this.isCz = false
                    this.$Message.success('提交成功!')
                }
            });
        },
        handleSubmit() {
            var arr = [];
            for(var i in this.form) {
                arr.push(this.form[i]);
            }
            var result1 = arr.every((item, index) => {
                return item != "";
            });
            var result2 = (this.form.name2 == this.form.name3) ? true : false;
            
            if(result1 && result2) {
                // api.axs("post", "/contract/saveOrUpdate", this.form).then(({ data })=>{
                //     if (data.code === "SUCCESS") {
                        this.$Message.success({content: "合同上传成功~"});
                //         for(var i in this.form) this.form[i] = "";
                //     } else {
                //         this.$Message.warning(data.remark);
                //     };
                // });
            } else if(!result1) {
                this.$Message.warning({content: "未全部填写，有遗漏~"});
            } else if(!result2) {
                this.$Message.warning({content: "新密码不统一"});
            }
        }
    },
    mounted() {
         
    }
}
</script>

<style lang="less" scoped>
    .recharge {
        .recharge-top {
            padding: 0 0 30px;
            display: flex;
            justify-content: space-between;
            // border-bottom: 1px solid #ddd;

            .title {
                font-size: 18px;
                line-height: 18px;
                font-weight: bold;
            }

            .recharge-record {
                font-size: 14px;
                color: #ff6700;
            }
        }

        .recharge-content {
            padding: 15px 0;
            display: flex;
            justify-content: space-around;

            b {
                color: #ff6700;
            }

            .content-left {
                .title {
                    font-size: 16px;
                    line-height: 16px;
                    margin-bottom: 20px;
                }

                .money {
                    font-size: 18px;

                    b {
                        font-size: 36px;
                        line-height: 36px;
                        font-weight: bold;
                    }
                }
            }

            ul {
                width: 400px;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;

                .item {
                    text-align: center;
                    padding: 0 50px;

                    .title {
                        font-size: 14px;
                        line-height: 14px;
                        margin-bottom: 8px;
                    }

                    .money {
                        font-size: 16px;
                        line-height: 16px;
                    }
                }

                .item1 {
                    margin-bottom: 12px;
                }
            }

            .content-right {
                width: 120px;

                button {
                    display: block;
                    margin-bottom: 10px;
                }
            }
        }

        .recharge-bottom {
            /deep/ .ivu-tabs {
                font-size: 14px;
                padding-bottom: 10px;
                border-bottom: 1px solid #ddd;

                .tab1 {
                    .zfb-title {
                        width: 210px;
                        height: 37px;
                        margin: 30px auto 20px;
                        background: url(..//images/user_icon.png) no-repeat 0 -147px;
                    }

                    .zfb-payoption {
                        height: 210px;
                        width: 210px;
                        text-align: center;
                        margin: 0 auto;
                        overflow: hidden;
                        // background-color:#fffcea;
                        // border: 1px solid #ffc36e;

                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }

                    .zfb-info {
                        color: #000;
                        font-size: 18px;
                        width: 500px;
                        text-align: left;
                        padding: 20px 28px;
                        margin: 20px auto;
                        box-sizing: border-box;
                        border: 1px solid #1a93c9;
                        border-radius: 4px;
                        p {
                            line-height: 35px;
                        }
                    }
                }

                .tab2 {
                    .wy-title {
                        font-size: 16px;
                        line-height: 16px;
                        font-weight: bold;
                        color: #ff6700;
                        padding: 10px 15px 10px;
                        border-bottom: 1px solid #ddd;
                    }

                    .wy-payoption {
                        display: flex;
                        align-items: center;
                        padding: 10px 0;
                        border-bottom : 1px solid #ddd;

                        input {
                            cursor: pointer;
                        }

                        img {
                            height: 36px;
                            width: 140px;
                            cursor: pointer;
                        }
                    }

                    .wy-form {
                        width: 430px;
                        margin: 60px auto 50px;

                        .ivu-form-item {
                            margin-bottom: 12px;

                            .error-tip {
                                color: #ed4014;
                            }
                        }
                    }

                    .wy-info {
                        font-size: 16px;
                        line-height: 30px;
                        font-weight: 400;
                        text-align: center;
                        color: #2494FA;
                        padding: 10px 200px;
                        box-sizing: border-box;
                    }
                }

                .tab3 {
                    .xx-title {
                        width: 100%;
                        height: 36px;
                        margin-bottom: 55px;
                    }

                    .xx-info {
                        font-size: 12px;

                        b {
                            font-weight: normal;
                            color: #ff6700;
                        }
                    }

                    ul {
                        li {
                            .layer-title {
                                font-size: 16px;
                                line-height: 21px;
                                font-weight: 700;
                                margin: 30px 0 15px;
                            }
                        }

                        .layer1 .layer-content {
                            display: flex;
                            text-align: left;
                            justify-content: center;

                            img {
                                margin-right: 20px;
                            }

                            div {
                                margin-top: 15px;

                                p {
                                    font-size: 16px;
                                    line-height: 30px;
                                    font-weight: bold;
                                }
                            }
                        }

                        .layer2 .layer-content {
                            p {
                                font-size: 12px;
                                line-height: 20px;
                                font-weight: bold;
                                color: #5F5F5F;
                            }
                        }

                        .layer3 form {
                            width: 500px;
                            margin: 10px auto;

                            label, input, textarea {
                                font-size: 14px;
                            }

                            textarea {
                                resize: none;
                            }
                        }
                    }
                }
            }
            
            .tip {
                font-size: 14px;
                line-height: 24px;
                color: #888;
                padding: 30px 20px 0;
            }
        }
    }
</style>
<style lang="less">
.formWrap {
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    width: 500px;
    margin: 60px auto 0;
    padding: 20px 0;
    .cztable {
        width: 75px;
        font-size: 14px;
        margin: 0 auto;
        margin-top: -31px;
        background-color: #fff;
    }
}
    .zfb-form {
        // width: 430px;
        margin: 0 auto;
        font-size: 16px;
        padding-top: 20px;
        .ivu-form-item {
            margin-bottom: 12px;
            span {
                display: inline-block;
                width: 128px;
                text-align: right;
                font-size: 14px;
                margin-right: 15px;
                strong {
                    color: #ff5722;
                    font-size: 20px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>