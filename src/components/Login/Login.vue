<template>
    <div class="login">
        <Header></Header>

        <div class="nav">
            <img @click="$router.push('index')" src="./logo.png">
            <button type="button" @click="$router.push('index')">返回仟呗首页</button>
        </div>

        <div class="inner-bg form-bg">
            <div class="inner">
                <form class="form">
                    <div class="form-head">
                        <p @click="type = 0" :class="{'actived': type == 0}">用户登录</p>
                        <p @click="type = 1" :class="{'actived': type == 1}">手机号注册</p>
                    </div>
                    <!-- 登录 -->
                    <div class="form-content" v-show="!type">
                        <div class="form-item">
                            <input v-model="loginForm.account" type="text" placeholder="请输入您的账号或者手机号">
                            <Alert v-show="showForm.account" type="error">账号不正确</Alert>
                        </div>
                        <div class="form-item">
                            <input @keyup="handleEnter" v-model="loginForm.pwd" type="password" placeholder="请输入您的密码">
                            <Alert v-show="showForm.pwd" type="error">密码长度不正确</Alert>
                        </div>
                        <div class="form-item form-check">
                            <i @click="isCheck = !isCheck">
                                <img v-show="isCheck" src="./check.png">
                            </i>
                            <span>同意并遵守</span>
                            <a href="#">《XXX条款》</a>
                        </div>
                        <div class="form-item form-btn">
                            <button @click="handleLogin(detectionMobile(), detectionPwd())" type="button">登录</button>
                        </div>
                        <div class="form-item form-forget">
                            <a href="#">忘记密码？</a>
                            <p @click="type = 1">免费注册</p>
                        </div>
                    </div>
                    <!-- 注册 -->
                    <div class="form-content" v-show="type">
                        <div class="form-item">
                            <input v-model="registForm.realName" type="text" placeholder="请输入您的昵称">
                            <Alert v-show="showForm.realName" type="error">昵称未填写</Alert>
                        </div>
                        <div class="form-item">
                            <input v-model="registForm.account" type="text" placeholder="请输入您的账号或者手机号">
                            <Alert v-show="showForm.account" type="error">账号不正确</Alert>
                        </div>
                        <div class="form-item">
                            <input v-model="registForm.password" type="text" placeholder="请输入您的密码">
                            <Alert v-show="showForm.pwd" type="error">密码不正确</Alert>
                        </div>
                        <div class="form-item form-captch" :class="{'captch-error': showForm.telCode}">
                            <input v-model="registForm.telCode" type="text" placeholder="输入验证码">
                            <button @click="getCaptch(detectionMobile())" type="button" :class="{'disabled': disabled}" :disabled=disabled>{{ disabled ? `${time}秒后重新发送` : '获取验证码' }}</button>
                            <Alert v-show="showForm.telCode" type="error">验证码未填写</Alert>
                        </div>
                        <div class="form-item form-btn">
                            <button @click="handleLogin(detectionName(), detectionMobile(), detectionPwd(), detectionCaptch())" type="button">注册</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="inner-bg">
            <div class="inner">
                <p class="login-footer">浙ICP备19040911号 版权所有 | 仟呗（绍兴）信息科技有限公司 浙江绍兴文化创意产业园6幢</p>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api";
import ls from "store2";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "regist",
    components: {
        Header, Footer
    },
    data() {
        return {
            type: 0, // 类型 => 0：登录，1：注册
            isCheck: true,
            // 登录
            loginForm: {
                account: '',
                pwd: ''
            },
            // 注册
            time: 60,
            disabled: false,
            registForm: {
                account: '',
                password: '',
                realName: '',
                telCode: '',
            },
            showForm: {
                account: false,
                pwd: false,
                realName: false,
                telCode: false
            }
        }
    },
    methods: {
        // 获取验证码
        getCaptch (value) {
            if(value) {
                this.disabled = true; // 禁用按钮
                var time = setInterval(() => {
                    this.time -= 1;
                    if(this.time <= 0) {
                        this.disabled = false
                        this.time = 60
                        clearInterval(time)
                    }
                }, 1000)

                api.axs('post', "/phoneValidate", {phone: this.registForm.account, type: 'regist'}).then(({ data }) => {
                    if(data.code === "SUCCESS") {
                        this.$Message.success({content: '验证码已发送~'})
                    } else {
                        this.$Message.error(data.remark)
                    }
                })
            }
        },
        // 检测手机号
        detectionMobile () {
            let value = "", showForm = this.showForm,
                reg = /^1(3|4|5|6|7|8|9)\d{9}$/;

            this.type === 0 ? (value = this.loginForm.account) : (value = this.registForm.account);

            reg.test(value) ? showForm.account = false : showForm.account = true;
            return reg.test(value);
        },
        // 检测密码是否为空
        detectionPwd () {
            let value = "", showForm = this.showForm;

            this.type === 0 ? value = this.loginForm.pwd : value = this.registForm.password;

            value.length ? showForm.pwd = false : showForm.pwd = true;
            return value.length;
        },
        // 检测昵称
        detectionName () {
            let value = this.registForm.realName, showForm = this.showForm;

            value.length ? showForm.realName = false : showForm.realName = true;
            return value.length;
        },
        // 检测验证码
        detectionCaptch () {
            let value = this.registForm.telCode, showForm = this.showForm;

            value.length ? showForm.telCode = false : showForm.telCode = true;
            return value.length;
        },
        // 登录
        handleLogin (...arr) {
            let url = "", form = {};
            if (this.type === 0) { // 登录
                url = "/login"
                form = this.loginForm
            } else {               // 注册
                url = "/regist"
                form = this.registForm
            }

            const result = arr.every(item => item !== false);
            if(result) {
                if(this.type === 0) { // 未阅读条款
                    if(!this.isCheck) {
                        this.$Message.warning({content: "请阅读条款"})
                        return
                    }
                }

                api.axs('post', url, form).then(({ data }) => {
                    if(data.code === "SUCCESS") {
                        if (this.type === 0) { // 登录
                            this.$Message.success({content: '登录成功~'})
                            ls.session("qbuserInfo", data.data.userInfo)
                            this.$router.push('index')
                        } else {               // 注册
                            this.$Message.success({content: '注册成功，赶快登录吧~'})
                            this.type = 1;
                        }
                    } else {
                        this.$Message.error(data.remark)
                    }
                })
            }
        },
        // input 监听回车
        handleEnter (e) {
            if(e.keyCode === 13) this.handleLogin(this.detectionMobile(), this.detectionPwd())
        }
    },
    created () {
        this.type = Number(this.$route.query.type)
    }
}
</script>

<style lang="less" scoped>
    .login {
        .nav {
            width: 1200px;
            max-width: 1200px;
            min-width: 1200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 34px 0;
            margin: 0 auto;
            background-color: #fff;

            img {
                cursor: pointer;
            }

            button {
                width: 200px;
                height: 42px;
                font-size: 18px;
                line-height: 42px;
                color: #fff;
                background-color: #ff0136;
                border-radius: 30px;
                border: none;
                cursor: pointer;
            }
        }

        .form-bg {
            height: 700px;
            background: url("./bg.jpg") no-repeat 50% 100%;

            .inner {
                height: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                .form {
                    width: 510px;
                    background-color: #fff;
                    border-radius: 12px;
                    overflow: hidden;

                    .form-head {
                        display: flex;
                        border-bottom: 1px solid #e5e5e5;

                        p {
                            width: 50%;
                            font-size: 24px;
                            line-height: 75px;
                            text-align: center;
                            color: #fff;
                            background-color: #ff6161;
                            cursor: pointer;

                            &.actived {
                                font-weight: bold;
                                color: #ff6161;
                                background-color: #fff;
                            }
                        }
                    }

                    .form-content {
                        height: 100%;
                        max-height: 580px;
                        padding: 60px 45px 40px;

                        .form-item {
                            margin-bottom: 20px;

                            input {
                                width: 100%;
                                height: 50px;
                                font-size: 14px;
                                text-indent: 20px;
                                color: #000;
                                border: 1px solid #e5e5e5;
                            }
                        }

                        .form-captch {
                            display: flex;
                            justify-content: space-between;
                            position: relative;

                            input {
                                width: 310px;
                            }

                            button {
                                width: 110px;
                                height: 50px;
                                font-size: 14px;
                                background-color: transparent;
                                border: 1px solid #e5e5e5;
                                border-left: none;
                                cursor: pointer;

                                &.disabled {
                                    cursor: not-allowed;
                                }
                            }

                            .ivu-alert {
                                width: 100%;
                                position: absolute;
                                top: 100%;
                                left: 0;
                            }

                            &.captch-error {
                                margin-bottom: 50px;
                            }
                        }

                        .form-check {
                            display: flex;
                            align-items: center;

                            i {
                                width: 12px;
                                height: 12px;
                                margin-right: 6px;
                                border: 1px solid #b8b8b8;
                                cursor: pointer;
                                
                                img {
                                    display: block;
                                    margin: -1px 0 0 -1px;
                                }
                            }

                            span {
                                font-size: 12px;
                                line-height: 12px;
                                color: #000;
                            }
                            a {
                                font-size: 12px;
                                line-height: 12px;
                            }
                        }

                        .form-btn {
                            button {
                                width: 100%;
                                font-size: 22px;
                                line-height: 50px;
                                color: #fff;
                                background: url("./btn-bg.png") no-repeat center;
                                border: none;
                                cursor: pointer;
                            }
                        }

                        .form-forget {
                            font-size: 14px;
                            line-height: 14px;
                            display: flex;
                            justify-content: space-between;

                            p {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }

        .login-footer {
            font-size: 14px;
            font-weight: bold;
            line-height: 100px;
            color: 333;
            background-color: #fff;
        }
    }
</style>