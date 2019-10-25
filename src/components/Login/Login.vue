<template>
    <div class="login">
        <Header></Header>

        <div class="inner-bg login-form-bg">
            <div class="inner">
                <form class="login-form">
                    <p class="form-title">用户登录</p>
                    <div class="form-item">
                        <input v-model="form.account" type="text" placeholder="请输入账号">
                    </div>
                    <!-- 手机号提示 -->
                    <div class="form-item">
                        <Alert v-show="showForm.mobile" class="error" type="error" show-icon>账号不正确</Alert>
                    </div>
                    <div class="form-item form-captcha">
                        <input v-model="form.pwd" type="text" placeholder="请输入密码">
                    </div>
                    <!-- 密码提示 -->
                    <div class="form-item">
                        <Alert v-show="showForm.pwd" class="error" type="error" show-icon>密码不能为空</Alert>
                    </div>
                    <div class="form-item form-login">
                        <button @click="handleLogin(detectionMobile(), detectionPwd())" type="button">登录</button>
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
            form: {
                account: '',
                pwd: ''
            },
            showForm: {
                mobile: false,
                pwd: false
            }
        }
    },
    methods: {
        // 检测手机号
        detectionMobile() {
            let value = this.form.account, showForm = this.showForm,
                reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
                
            reg.test(value) ? showForm.mobile = false : showForm.mobile = true;
            return reg.test(value);
        },
        // 检测密码是否为空
        detectionPwd() {
            let value = this.form.pwd, showForm = this.showForm;

            value.length ? showForm.pwd = false : showForm.pwd = true;
            return value.length;
        },
        // 登录
        handleLogin(value1, value2) {
            
            value1 && value2 &&
            api.axs('post', "/login", this.form).then(({ data }) => {
                if(data.code === "SUCCESS") {
                    this.$Message.success({content: '登录成功~'})
                    this.$router.push('index')
                } else {
                    this.$Message.error(data.remark)
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
    .login-form-bg {
        background-color: #f2f2f2;
    }
    .login-form {
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

        .form-login {
            margin-bottom: 0;
            
            button {
                width: 100%;
                height: 40px;
                font-size: 14px;
                cursor: pointer;
            }
        }
    }
</style>