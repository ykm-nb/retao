<template>
    <div class="menu">
        <Menu @on-open-change="selectMenuGroup" @on-select="selectMenuItem" theme="dark" :accordion=true width="200px">
            <Submenu name="交易管理">
                <template slot="title">
                    <Icon type="ios-cart"></Icon>个人中心
                </template>
                <router-link to="/userinfo">
                    <MenuItem name="个人信息">◎ 个人信息</MenuItem>
                </router-link>
                <!-- <router-link to="/productsforsale">
                    <MenuItem name="出售的产品">◎ 出售的产品</MenuItem>
                </router-link>
                <router-link to="/purchasedproducts">
                    <MenuItem name="购买的产品">◎ 购买的产品</MenuItem>
                </router-link> -->
            </Submenu>
            <Submenu name="合同签署">
                <template slot="title">
                    <Icon type="ios-paper-outline"></Icon>合同签署
                </template>
                <router-link to="/signature">
                    <MenuItem name="签署列表">◎ 签署列表</MenuItem>
                </router-link>
                <!-- <router-link to="/mycontract">
                    <MenuItem name="我的合同">◎ 我的合同</MenuItem>
                </router-link> -->
            </Submenu>
            <Submenu name="资金管理">
                <template slot="title">
                    <Icon type="logo-bitcoin"></Icon>资金管理
                </template>
                <router-link to="/recharge">
                    <MenuItem name="我要充值">◎ 我要充值</MenuItem>
                </router-link>
                <router-link to="/rechargerecord">
                    <MenuItem name="充值记录">◎ 充值记录</MenuItem>
                </router-link>
                <router-link to="/withdrawdeposit">
                    <MenuItem name="我要提现">◎ 我要提现</MenuItem>
                </router-link>
                <router-link to="/withdrawalrecord">
                    <MenuItem name="提现记录">◎ 提现记录</MenuItem>
                </router-link>
                <!-- <router-link to="/settingcashaccount">
                    <MenuItem name="设置提现账号">◎ 设置提现账号</MenuItem>
                </router-link> -->
            </Submenu>
            <Submenu name="账号中心">
                <template slot="title">
                    <Icon type="ios-settings"></Icon>账户管理
                </template>
                <router-link to="/certification">
                    <MenuItem name="实名认证">◎ 实名认证</MenuItem>
                </router-link>
                <!-- <router-link to="/learningdocument">
                    <MenuItem name="完善资料">◎ 完善资料</MenuItem>
                </router-link> -->
                <router-link to="/companyprofile">
                    <MenuItem name="设置支付密码">◎ 设置支付密码</MenuItem>
                </router-link>
                <router-link to="/applyforreimbursement">
                    <MenuItem name="设置登录密码">◎ 设置登录密码</MenuItem>
                </router-link>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
import api from "@/api";
import ls from "store2";
export default {
    name: "allmenu",
    props: {
        msg: String
    },
    data() {
        return {
            menuGroupName: ""
        }
    },
    activated() {},
    methods: {
        // 选择菜单组
        selectMenuGroup(name) {
            if(name.length) {
                this.menuGroupName = name[0];
            }
        },
        // 选择菜单
        selectMenuItem(name) {
            this.$parent.menuGroupName = this.menuGroupName;
            this.$parent.menuItemName = name;
            ls.session("menu", {menuGroupName: this.menuGroupName, menuItemName: name});
        }
    }
};
</script>

<style lang="less">
.menu {
    width: 200px;
    height: 100%;
    min-height: 480px;
    background-color: #515a6e;
    text-align: left;
}
</style>
