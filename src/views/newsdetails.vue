<template>
    <div class="newsdetails">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <div class="contentWrap">
            <p class="curNav">所在位置: 热淘 >> 新闻咨询</p>
            <ul class="leftNav">
                <li class='tittt'>关于我们</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=taggsjj')">公司简介</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=tagyyzz')">营业执照</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=taglxwm')">联系我们</li>
                <li class='tittt'>资讯中心</li>
                <li class='lit' @click="$router.push('/newslists')">新闻资讯</li>
                <li class="tittt">帮助中心</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=taggmwd')">购买网店</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=tagcswd')">出售网店</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=tagghlc')">过户流程</li>
                <li class="tittt">充值提现</li>
                <li class="lit" @click="$router.push('/recharge')">充值服务</li>
                <li class="lit" @click="$router.push('/withdrawdeposit')">提现服务</li>
                <li class="lit" @click="$router.push('/recharge')">服务费用</li>
                <li class='tittt'>安全保障</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=tagzjaq')">资金安全</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=tagdbjy')">担保交易</li>
                <li class="lit" @click="$router.push('/helpcenter?tag=tagyhxy')">用户协议</li>
            </ul>
            <div class="content">
                <h3 class="tit">{{contents.title}}</h3>
                <p class="time">时间: {{contents.createTime && contents.createTime.substring(0,10)}} &nbsp;&nbsp;&nbsp;&nbsp;来源: 热淘官方</p>
                <div class="desc" v-html="contents.content"></div>
            </div>
        </div>

    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import api from "@/api";

export default {
    name: "msg",
    components: {
        Header, Nav
    },
    data() {
        return {
            id: this.$route.query.id,
            contents: {}
        }
    },
    mounted() {
        api.axs("post", "/news/anon/queryById", {id: this.id}).then(({ data })=>{
            if (data.code === "SUCCESS") {
                this.contents = data.data
                
            } else {
                this.$Message.error(data.remark);
            }
        });
    }
}
</script>

<style lang="less" scoped>
    .newsdetails {
        position: relative;
        width: 100%;
        height: auto;
        background-color: #f5f5f5;
        padding-bottom: 20px;
        .contentWrap {
            position: relative;
            width: 1200px;
            margin: 0 auto;
            .curNav {
                font-size: 14px;
                color: #888;
                text-align: left;
                padding: 15px 0;
            }
            .leftNav {
                position: absolute;
                top: 51px;
                left: 0;
                width: 130px;
                min-height: 500px;
                background-color: #fff;
                font-size: 14px;
                color: #666;
                li {
                    padding: 10px 0;
                    border-bottom: 1px solid #f5f5f5;
                    &.tittt {
                        color: #444;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    &.lit {
                        cursor: pointer;
                        &:hover {
                            color: #fff;
                            background-color: #ff0036;
                        }
                    }
                }
            }
            .content {
                width: 1000px;
                min-height: 770px;
                margin-left: 170px;
                background-color: #fff;
                .tit {
                    font-size: 16px;
                    font-weight: bold;
                    padding: 20px 0;
                }
                .time {
                    color: #888;
                    font-size: 12px;
                    text-align: left;
                    padding: 10px 20px;
                    border-bottom: 1px dashed #ccc;
                }
                .desc {
                    padding: 20px;
                    text-align: left;
                    font-size: 14px;
                    color: #444;

                    p {
                        line-height: 18px;
                    } 
                }
            }
        }
    }
</style>