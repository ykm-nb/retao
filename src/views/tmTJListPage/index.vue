<template>
    <div class="tm-listpage">

        <Header></Header>

        <div class="inner-bg nav-bg">
            <Nav @navSearch="navSearch"></Nav>
        </div>

        <Goods ref="good"></Goods>

        <!-- 底部 -->
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Goods from "./components/goods.vue";
import Footer from "@/components/Footer/Footer";
export default {
    name: "tmlistpage",
    components: {
        Header, Nav,
        Goods, Footer
    },
    methods: {
        navSearch (text) {
            this.$refs.good.form.title = text;
            this.$refs.good.getGoodsList(1)
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="less" scoped>
    .tm-listpage {
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