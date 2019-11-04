<template>
    <div class="inner-bg header-bg">
        <header class="inner">
            <div class="header-left">
                <p>Hi您好，欢迎来到仟呗！</p>
                <div class="userinfo" v-if="userInfo">
                    <Dropdown>
                        <img class="head-portrait" src="@/assets/images/user.png" alt="头像">
                        <DropdownMenu slot="list">
                            <a href="javascript:;" @click="loginOut">
                                <DropdownItem>注销</DropdownItem>
                            </a>
                        </DropdownMenu>
                    </Dropdown>
                    <span>{{ userInfo.account }}</span>
                </div>
                <p v-else>
                    <span @click="gotoPage('login', 0)" class="login">登录</span>
                    <span class="divide">/</span>
                    <span @click="gotoPage('login', 1)" class="regist">注册</span>
                </p>
            </div>
            <ul class="header-right">
                <!-- <li>
                    <i class="iconfont iconxiaoxi"></i>
                    <span>我的消息</span>
                </li> -->
                <li>
                    <i class="iconfont iconbangzhu"></i>
                    <span>帮助中心</span>
                </li>
                <!-- <li>
                    <i class="iconfont iconsaoma"></i>
                    <span>投诉建议</span>
                </li> -->
                <li class="service">
                    <i class="iconfont icontel-fill"></i>
                    <span>联系客服</span>
                    <p class="phone">热线：+086-177 8855 7963</p>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
import ls from "store2";
import api from "@/api";
import "@/assets/font/iconfont.css";
export default {
    name: "common-header",
    props: {
        userInfo: {
            type: Object
        }
    },
    data () {
        return {
            showAccount: false
        }
    },
    methods: {
        // 跳转页面
        gotoPage(page, type) {
            const curPath = this.$route.path.substring(1);

            if(curPath === page) return; // 页面相同
            this.$router.push(`${page}?type=${type}`)
        },
        // 注销
        loginOut() {
            api.axs('post', '/loginOut', {}).then(({ data }) => {
                if(data.code === "SUCCESS") {
                    this.$Message.success({content: "注销成功~"});
                    ls.session.remove("qbuserInfo");
                    setTimeout(() => {
                        this.$router.push("login?type=0");
                    }, 500);
                }
            });
        },
    },
    created () {

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
            width: 320px;
            height: 36px;
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

            .userinfo {
                height: 36px;
                display: flex;
                align-items: center;

                .head-portrait {
                    width: 30px;
                    height: 30px;
                    border: 1px solid #ccc;
                    border-radius: 50%;
                    overflow: hidden;
                    transform: translate(0,5px);
                    cursor: pointer;
                }

                /deep/ .ivu-dropdown-menu {
                    display: block;

                    .ivu-dropdown-item {
                        line-height: 24px;
                        margin: 0;
                    }
                }

                span {
                    font-size: 14px;
                    line-height: 36px;
                    margin-left: 8px;
                }
            }
        }

        .header-right {
            width: 320px;
            font-size: 14px;
            display: flex;
            
            li {
                display: flex;
                align-items: center;
                margin-right: 10px;
                cursor: pointer;
                transition: .4s;
                position: relative;

                span {
                    line-height: 36px;
                    margin-left: 4px;
                }

                &:hover {
                    color: #e61716;
                }

                &.service {
                    .phone {
                        font-size: 14px;
                        opacity: 0;
                        white-space: nowrap;
                        color: #e61716;
                        transition: .5s;
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translate(105%,-50%);
                    }

                    &:hover .phone {
                        opacity: 1;
                    }
                }
            }
        }
    }
}  
</style>