<template>
    <div class="shop-details">
        
    <Header></Header>

    <Nav></Nav>

    <div class="inner-bg nav-bg">
        <div class="inner bread-crumb">
            <span>所在位置：</span>
            <span class="page page-index">猫元素</span>
            <span class="arrow">>></span>
            <span class="page page-transfer">天猫店转让</span>
            <span class="arrow">>></span>
            <span class="page page-cur">店铺详情</span>
        </div>
    </div>

    <Goods :goodsList="goodsList"></Goods>

    <!-- 店铺截图 -->
    <ScreenShot></ScreenShot>

    <!-- 费用估计 -->
    <Money></Money>

    <!-- 购买流程 -->
    <Process></Process>

    <City></City>
    
    <!-- 仟呗头条 -->
    <HeadLine></HeadLine>

    <More></More>

    <Footer></Footer>

    </div>
</template>

<script>
import api from '@/api';
import ls from "store2";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import Goods from "./components/goods";
import ScreenShot from "./components/screenshot";
import Process from "./components/process";
import City from "./components/city";
import HeadLine from "./components/headline";
import Money from "./components/money";
import More from "./components/more.vue";
import Footer from "@/components/Footer/Footer";
export default {
    name: 'shop-details',
    components: {
        Header, Nav,
        Goods, ScreenShot,
        Money, Process,
        City, HeadLine,
        More, Footer
    },
    data() {
        return {
            id: 0,
            pageNum: 1,
            goodsList: {}
        }
    },
    methods: {
        getStoreDetail (id, pageNum) {
            api.axs('post', "/tmStore/queryAllProducts", { id, pageNum }).then(({ data }) => {
                if(data.code === "SUCCESS") {
                    data.data.list.forEach((item, index) => {
                        if(item.id === id) this.goodsList = item;
                    })
                    console.log(this.goodsList)
                }
            });
        }
    },
    created() {
        Object.assign(this, {
            id: parseInt(this.$route.query.id),
            pageNum: this.$route.query.pageNum
        })
        this.getStoreDetail(this.id, this.pageNum)

        // let obj = ls.session.get('rtSearch'),
        //     url = "";
    }
}
</script>

<style lang="less" scoped>
    .shop-details {
        background-color: #f8f8f8;

        .nav-bg {
            .bread-crumb {
                height: 30px;
                line-height: 30px;
                text-align: left;

                span {
                    font-size: 14px;
                    color: #999;
                }

                .page {
                    cursor: pointer;
                }

                .arrow {
                    margin: 0 6px;
                }

                .page-index {
                    margin-left: 10px;
                }
            }
        }
    }
</style>