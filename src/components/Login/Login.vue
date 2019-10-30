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
                    <div class="form-content" v-show="type==0">
                        <div class="form-item">
                            <input v-model="form.account" type="text" placeholder="请输入您的账号或者手机号">
                        </div>
                        <div class="form-item">
                            <input v-model="form.pwd" type="text" placeholder="请输入您的密码">
                        </div>
                        <div class="form-item form-captch">
                            <input v-model="form.captch" type="text" placeholder="输入验证码">
                            <button type="button">
                                <img src="./captch.png">
                            </button>
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
                            <p>免费注册</p>
                        </div>
                    </div>
                    <!-- 注册 -->
                    <div class="form-content" v-show="type==1">
                        <div class="form-item">
                            <input v-model="form.account" type="text" placeholder="请输入您的账号或者手机号">
                        </div>
                        <div class="form-item">
                            <input v-model="form.pwd" type="text" placeholder="请输入您的密码">
                        </div>
                        <div class="form-item form-captch">
                            <input v-model="form.captch" type="text" placeholder="输入验证码">
                            <button type="button">
                                <img src="./captch.png">
                            </button>
                        </div>
                        <div class="form-item form-check">
                            <i @click="isCheck = !isCheck">
                                <img v-show="isCheck" src="./check.png">
                            </i>
                            <span>同意并遵守</span>
                            <a href="#">《XXX条款》</a>
                        </div>
                        <div class="form-item form-btn">
                            <button @click="handleLogin(detectionMobile(), detectionPwd())" type="button">注册</button>
                        </div>
                        <div class="form-item form-forget">
                            <a href="#">忘记密码？</a>
                            <p>免费注册</p>
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
            form: {
                account: '',
                pwd: '',
                captch: ''
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
    },
    created () {
        this.type = this.$route.query.type;
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
                        padding: 65px 45px 42px;

                        .form-item {
                            margin-bottom: 20px;

                            input {
                                width: 100%;
                                height: 50px;
                                font-size: 14px;
                                text-indent: 20px;
                                color: #b8b8b8;
                                border: 1px solid #e5e5e5;
                            }
                        }

                        .form-captch {
                            display: flex;
                            justify-content: space-between;

                            input {
                                width: 310px;
                            }

                            button {
                                height: 50px;
                                border: none;
                                cursor: pointer;

                                img {
                                    height: 50px;
                                }
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