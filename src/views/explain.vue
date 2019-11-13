<template>
    <div class="explain">
        
        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <div class="content">
            <!-- <Buy></Buy> -->
            <!-- <Sell></Sell> -->
            <!-- <Transfer></Transfer> -->
            <!-- <Guarantee></Guarantee> -->
            <!-- <Privacy></Privacy> -->
            <!-- <Info></Info> -->
            <!-- <License></License> -->
            <Contact></Contact>
        </div>

        <!-- 底部 -->
        <Footer id="footer"></Footer>

    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";

// 帮助中心
import Buy from "./footer/buy.vue"; // 出售
import Sell from "./footer/sell.vue"; // 购买
import Transfer from "./footer/transfer.vue"; // 过户
// 安全保障
import Guarantee from "./footer/guarantee.vue"; // 担保
import Privacy from "./footer/privacy.vue"; // 隐私
import ContractLaw from "./footer/contractlaw.vue"; // 合同法律
// 客服中心
import Advice from "./footer/advice.vue"; // 投诉建议
import Service from "./footer/service.vue"; // 在线客服
import Problem from "./footer/problem.vue"; // 常见问题
// 关于我们
import Info from "./footer/info.vue"; // 公司简介
import Contact from "./footer/contact.vue"; // 联系我们
import License from "./footer/license.vue"; // 营业执照
import Join from "./footer/join.vue"; // 加入我们
export default {
    name: "explain",
    components: {
        Footer, Header, Nav,
        Buy, Sell, Transfer,
        Guarantee, Privacy, ContractLaw,
        Advice, Service, Problem,
        Info, Contact, License, Join
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .explain {

        .content {
            padding-bottom: 20px;
            background-color: #f2f2f2;
        }
    }
</style>