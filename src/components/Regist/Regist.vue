<template>
    <div class="regist">
        <Header></Header>

        <div class="inner-bg regist-form-bg">
            <div class="inner">
                <form class="regist-form">
                    <p class="form-title">用户注册</p>
                    <div class="form-item">
                        <input type="text" placeholder="请输入账户名">
                    </div>
                    <div class="form-item">
                        <input type="text" placeholder="请输入QQ号">
                    </div>
                    <div class="form-item">
                        <input type="text" placeholder="请设置密码">
                    </div>
                    <div class="form-item">
                        <input type="text" placeholder="请确认密码">
                    </div>
                    <div class="form-item">
                        <input type="text" placeholder="请输入手机号">
                    </div>
                    <div class="form-item form-captcha">
                        <input type="text" placeholder="请输入验证码">
                        <button type="button">获取验证码</button>
                    </div>
                    <div class="form-item form-regist">
                        <button @click="handleRegist" type="button">注册</button>
                    </div>
                </form>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import api from "@/api";
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "regist",
    components: {
        Header, Nav,
        Footer
    },
    data() {
        return {

        }
    },
    methods: {
        // 注册
        handleRegist() {
            api.axs('post', "/regist", {}).then(({ data }) => {
                if(data.code === "SUCCESS") {
                    
                } else {
                    this.$Message.error(data.remark)
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
    .regist-form-bg {
        background-color: #f2f2f2;
    }
    .regist-form {
        width: 410px;
        margin: 0 auto;

        .form-title {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .form-item {
            margin-bottom: 12px;
            position: relative;

            input {
                height: 40px;
                width: 100%;
                font-size: 14px;
                text-indent: 1em;
                border: none;
            }
        }

        // 验证码
        .form-captcha {
            button {
                height: 100%;
                font-size: 14px;
                padding: 0 10px;
                background-color: transparent;
                border: 1px solid #ccc;
                border-left: 1px solid #ccc;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0,-50%);
                cursor: pointer;
            }
        }

        .form-regist button{
            width: 100%;
            height: 40px;
            cursor: pointer;
        }
    }
</style>