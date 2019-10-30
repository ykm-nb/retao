<template>
    <div class="inner-bg header-bg">
        <header class="inner">
            <div class="header-left">
                <p>Hi您好，欢迎来到仟呗！</p>
                <p>
                    <span @click="gotoPage('login', 0)" class="login">登录</span>
                    <span class="divide">/</span>
                    <span @click="gotoPage('login', 1)" class="regist">注册</span>
                </p>
            </div>
            <ul class="header-right">
                <li>
                    <i class="iconfont iconxiaoxi"></i>
                    <span>我的消息</span>
                </li>
                <li>
                    <i class="iconfont iconbangzhu"></i>
                    <span>帮助中心</span>
                </li>
                <li>
                    <i class="iconfont iconsaoma"></i>
                    <span>投诉建议</span>
                </li>
                <li>
                    <i class="iconfont icontel-fill"></i>
                    <span>联系客服</span>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
import "@/assets/font/iconfont.css";
export default {
    name: "common-header",
    methods: {
        // 跳转页面
        gotoPage(page, type) {
            const curPath = this.$route.path.substring(1);

            if(curPath === page) return; // 页面相同
            this.$router.push(`${page}?type=${type}`)
        },
    }
}
</script>

<style lang="less" scoped>
.header-bg {
    background-color: #f6f6f6;

    header {
        line-height: 36px;
        color: #b6b6b6;
        display: flex;
        justify-content: space-between;

        .header-left {
            width: 250px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;

            .login, .regist {
                line-height: 36px;
                cursor: pointer;
            }

            .login {
                color: #fb8796;
            }

            .divide {
                margin: 0 5px;
            }
        }

        .header-right {
            width: 350px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            
            li {
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: .4s;

                span {
                    margin-left: 4px;
                }

                &:hover {
                    color: #e61716;
                }
            }
        }
    }
}  
</style>