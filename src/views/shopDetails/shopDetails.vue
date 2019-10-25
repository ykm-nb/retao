<template>
    <div class="shop-details">
        
    <Header></Header>

    <div class="inner-bg nav-bg">
        <Nav></Nav>
        <div class="inner bread-crumb">
            <span>当前位置：</span>
            <span class="page page-index">热淘网</span>
            <span class="arrow">></span>
            <span class="page page-transfer">天猫转让</span>
            <span class="arrow">></span>
            <span class="page page-type">服装</span>
            <span class="arrow">></span>
            <span class="page page-cur">华南地区 2字名字中文 店铺名字好听  诚心出售</span>
        </div>
    </div>
    
    <div class="inner-bg">
        <div class="inner">
            <Goods :goodsList="goodsList"></Goods>
            <Process :processIndex="0"></Process>
            <Recommend></Recommend>
            <Help></Help>
            <MoreShop :showHelp="false"></MoreShop>
        </div>
    </div>

    <Footer></Footer>

    </div>
</template>

<script>
import api from '@/api';
import ls from "store2";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import Goods from "./components/goods";
import Process from "./components/process";
import Recommend from "./components/recommend";
import Help from "./components/help";
import MoreShop from "@/components/MoreShop/MoreShop.vue";
import Footer from "@/components/Footer/Footer";
export default {
    name: 'shop-details',
    components: {
        Header, Nav,
        Goods, Process,
        Recommend, Help,
        MoreShop, Footer
    },
    data() {
        return {
            goodsList: {}
        }
    },
    created() {
        this.id = parseInt(this.$route.query.id);

        let obj = ls.session.get('rtSearch'),
            url = "";

        switch (obj.selectedText) {
            case '天猫': url = "/tmStore/queryForPage";
                break;
            case '抖音': url = "/dyStore/queryForPage";
                break;
            case '公众号': url = "/gzhStore/queryForPage";
                break;
        }

        api.axs('post', url, {}).then(({ data }) => {
            if(data.code === "SUCCESS") {
                data.data.list.forEach((item, index) => {
                    if(item.id === this.id) this.goodsList = item;
                })
            }
        });
    }
}
</script>

<style lang="less" scoped>
    .shop-details {
        background-color: #f1f1f1;

        .nav-bg {
            background-color: #fff;

            .bread-crumb {
                height: 60px;
                line-height: 60px;
                text-align: left;
                padding-left: 22px;
                border-top: 1px solid #e1e1e1;
                box-sizing: border-box;

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