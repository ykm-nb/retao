<template>
    <div class="tm-transfer">

        <Header></Header>

        <div class="inner-bg nav-bg">
            <Nav></Nav>
            <div class="inner bread-crumb">
                <span>当前位置：</span>
                <span class="par-page">天猫商城转让</span>
                <span class="arrow">></span>
                <span class="cur-page">天猫转让</span>
            </div>
        </div>

        <Goods ref="good"></Goods>

        <MoreShop></MoreShop>

        <!-- 底部 -->
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Goods from "./components/goods.vue";
import MoreShop from "@/components/MoreShop/MoreShop.vue";
import Footer from "@/components/Footer/Footer";
export default {
    name: "tmtransfer",
    components: {
        Header, Nav,
        Goods, MoreShop,
        Footer
    },
    mounted() {
        this.$refs.good.getGoodsList();
    }
}
</script>

<style lang="less" scoped>
    .tm-transfer {
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

                .par-page, .cur-page {
                    cursor: pointer;
                }

                .arrow {
                    margin: 0 6px;
                }

                .cur-page {
                    color: #e2343e;
                }
            }
        }
        
    }
</style>