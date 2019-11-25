<template>
    <div class="adminvip">

        <Header></Header>

        <div class="inner-bg nav-bg">
            <Nav @navSearch="navSearch"></Nav>
        </div>

        <p class="curNav">所在位置: 千呗 >> 个人中心</p>

        <div class="adminWrap">

            <Menu></Menu>

            <div class="content-bg">
                <div class="content">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>

        </div>

        <!-- 底部 -->
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Menu from "@/views/adminvip/components/Menu.vue";
// import Footer from "@/components/Footer/Footer";
export default {
    name: "tmlistpage",
    components: {
        Header, Nav, Menu
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

    .adminvip {
        background-color: #f5f5f5;
        padding-bottom: 20px;
        position: relative;
        height: auto;
        .curNav {
            width: 1200px;
            margin: 0 auto;
            font-size: 14px;
            color: #888;
            text-align: left;
            padding: 15px 0;
        }
    }
    .adminWrap {
        display: flex;
        width: 1200px;
        margin: 0 auto;

        .content-bg {
            width: calc(100% - 200px);
            padding: 20px;
            background-color: #fff;
            box-sizing: border-box;
            position: relative;
            margin-left: 20px;

            .content {
                padding: 20px;
                background-color: #fff;
                border-radius: 6px;
                box-sizing: border-box;
            }
        }
    }
</style>