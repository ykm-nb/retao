<template>
    <div class="newsdetails">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>
        <div class="bcWrap">
            <div class="contentWrap">
                <p class="curNav">所在位置: 热淘 >> 新闻咨询列表</p>

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
                    <ul class='lists' v-if='newLists.length'>
                        <li v-for="item in newLists" :key="item.id" @click='toDetails(item.id)'>
                            <div class="nimg">
                                <img :src="item.pictureUrl" style='width:100%;'>
                            </div>
                            <strong>{{item.title | shortWr}} <em>【热淘官方】</em></strong>
                            <time>{{item.createTime}}</time>
                        </li>
                    </ul>

                    <div v-else style='background:#fff;color:#ff6600;font-size:16px;padding:100px 0'>
                        <span v-if='isLoading'>加载中...</span>
                        <span v-else>暂无数据</span>
                    </div>  

                    <!-- 分页器 -->
                    <div class="common-page" v-if='newsForm.total' style='margin-left:170px;'>
                        <Page :total="newsForm.total" :current="newsForm.pageNum" :page-size="newsForm.pageSize" @on-change='getLists' />
                    </div>
                    
                </div>
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
            isLoading: true,
            newsForm: {
                total: 0,
                pageNum: 1,
                pageSize: 10
            },
            newLists: [],
            isfixed: false
        }
    },
    methods: {
        getLists(page) {
            this.newsForm.pageNum = page || 1
            api.axs("post", "/news/anon/queryAllPage", this.newsForm).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.newsForm.total = data.data.total
                    this.newLists = data.data.list
                    this.isLoading = false
                } else {
                    this.$Message.error(data.remark);
                }
            });
        },
        toDetails(id) {
            let { href } = this.$router.push({
                path: '/newsdetails',
                query: {id: id}
            })
            // window.open(href)
        }
    },
    mounted() {
        this.getLists(1)
    },
    filters: {
        'shortWr'(val) {
            if (val && val.length > 50) return val.substr(0,50) + '...'
            else  return val
        }
    }
}
</script>

<style lang="less" scoped>
    .newsdetails {
        position: relative;
        width: 100%;
        height: auto;
        padding-bottom: 20px;
        .bcWrap {
            background-color: #f5f5f5;
        }
        .contentWrap {
            position: relative;
            width: 1200px;
            margin: 0 auto;
            .curNav {
                width: 1200px;
                margin: 0 auto;
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

                &.navFixed {
                    position: fixed;
                    top: 0px;
                    left: auto;
                    z-index: 999;
                }
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
            

            .lists{
                margin-left: 170px;
                font-size: 14px;
                background-color: #fff;
                border-radius: 4px;
                li {
                    display: flex;
                    padding: 14px 4px;
                    border-bottom: 1px solid #f8f8f8;
                    align-items: center;
                    cursor: pointer;
                    border-radius: 10px;
                    &:hover{
                        box-shadow: 1px 1px 2px 0px #eee;
                        transform: scale(1.002);
                        color: #ff6600;
                    }

                    strong {
                        font-size: 16px;
                        em {
                            padding: 0 20px;
                            color: #999;
                            font-weight: normal;
                        }
                    }
                    
                    time {
                        margin-left: auto;
                        color: #666;
                    }
                    
                    .nimg {
                        width: 100px;
                        height: 50px;
                        overflow: hidden;
                        border: 1px solid #f5f5f5;
                        box-shadow: 0 0 4px #f5f5f5;
                        vertical-align: middle;
                        margin-right: 20px;
                        border-radius: 6px;
                        img {
                            border-radius: 6px;
                        }
                    }
                }
            }
            
        }
        
    }
</style>
<style lang="less">
    .newsdetails .ivu-page-item-active {
        border-color: #ff6600;
        a {
            color: #ff6600;
        }
    }
</style>