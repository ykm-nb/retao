<template>
    <!-- 我要充值 -->
    <div class="recharge">
        <div class="infowrap">
            <h3>个人信息</h3>
            <div class="info">
                <div class="avatar">
                    <img src="@/assets/images/icon_header.jpg" alt="">
                </div>
                <div class="desc">
                    <p class="tip">
                        <span>登录账号: {{userInfo.account || '--'}}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>会员状态: {{userInfo.hasRealAccount ? '已审核' : '待审核' }}</span>
                    </p>
                    <p class="tip">
                        <span>登录时间: {{getTime()}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="recharge-content">
            <div class="content-left">
                <p class="title">账户总额</p>
                <p class="money"><b>{{cashes.allRemainMoney}}</b>元</p>
            </div>
            <div class="content-left">
                <p class="title">充值总额</p>
                <p class="money"><b>{{cashes.payMoney}}</b>元</p>
            </div>
            <div class="content-left">
                <p class="title">提现总额</p>
                <p class="money"><b>{{cashes.cashOutMoney}}</b>元</p>
            </div>
            <ul>
                <!-- <div class="item item1">
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
                </div> -->
            </ul>
            <div class="content-right">
                <Button long type="primary" @click='$router.push("/recharge")'>我要充值</Button>
                <Button long type="success" @click='$router.push("/withdrawdeposit")'>我要提现</Button>
            </div>
        </div>

    </div>
</template>

<script>
import api from "@/api";
import ls from "store2"
export default {
    name: "recharge",
    data() {
        return {
            userInfo: ls.session.get("qbuserInfo"),
            cashes: {}
        }
    },
    methods: {
        getTime() {
            Date.prototype.format = function (fmt) { //author: meizz
                var o = {
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "H+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
            return new Date().format("yyyy-MM-dd HH:mm:ss");
        }
    },
    mounted() {
         api.axs("post", "/user/queryRemainMoney").then(({ data })=>{
            if (data.code === "SUCCESS") {
                this.cashes = data.data
            } else {
                this.$Message.warning(data.remark);
            }
        });
    }
}
</script>

<style lang="less" scoped>
    .recharge {
        .infowrap {
            h3 {
                font-size: 16px;
                text-align: left;
                padding: 0 0 30px;
            }
            .info {
                display: flex;
                margin: 0 0 20px;
                .avatar {
                    flex: 0 0 100px;
                    height: 100px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .desc {
                    text-align: left;
                    font-size: 14px;
                    font-weight: bold;
                    color: #444;
                    padding: 15px 30px;
                    .tip {
                        padding: 6px 0;
                    }
                }
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
                width: 200px;
                margin-right: 120px;
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
    }
</style>