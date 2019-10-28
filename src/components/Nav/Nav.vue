<template>
    <div class="inner-bg">
        <div class="inner">
            <div class="search-wrap">
                <div class="wrap-left">
                    <div class="logo" @click="gotoIndex">
                        <img src="./logo.png" alt="logo">
                    </div>
                    <div class="divide"></div>
                    <div class="description">
                        <p>专注天猫新店交易</p>
                        <p>安全有保障交易快</p>
                    </div>
                </div>

                <div class="search">
                    <input v-model="searchText" @keyup.enter="handleSearch" type="text" placeholder="请输入店铺关键词进行查找">
                    <button class="btn1" @click="$router.push('tmlistpage')" type="button">查看网店</button>
                    <button class="btn2" @click="$router.push('tblistpage')" type="button">我要卖网店</button>
                    <img class="logo-search" src="./search.png">
                </div>
            </div>

            <ul class="nav">
                <li class="hot" v-show="isIndex">
                    <img src="./bar.png">
                    <span>热门店铺</span>
                </li>
                <li class="home">
                    <img src="./home.png">
                    <span class="text" @click="gotoIndex">首页</span>
                </li>
                <div class="divide"></div>
                <li>
                    <img src="./tm.png">
                    <span class="text">天猫新店</span>
                </li>
                <div class="divide"></div>
                <li>
                    <img src="./du.png">
                    <span class="text">独家店铺</span>
                </li>
                <div class="divide"></div>
                <li>
                    <img src="./tao.png">
                    <span class="text">淘宝店铺</span>
                </li>
                <div class="divide"></div>
                <li>
                    <img src="./mao.png">
                    <span class="text">天猫入驻</span>
                </li>
                <div class="divide"></div>
                <li>
                    <img src="./dai.png">
                    <span class="text">电商代运营</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import api from '@/api';
import ls from "store2";
import "@/assets/font/iconfont.css";
export default {
    name: "index-nav",
    data() {
        return {
            isIndex: true,
            searchText: ""
        }
    },
    methods: {
        gotoIndex() {
            const curPath = this.$route.path.substring(1);

            if(curPath === "index") return;
            this.$router.push('index')
        },
        handleSearch(text) {
            // this.$router.push('tmlistpage')
        }
    },
    created() {
        let route = this.$route.path;
        // 不是首页
        if(route.indexOf('/index') === -1) this.isIndex = false;

        let obj = ls.session.get("rtSearch");
        if(typeof obj === "object") {
            this.selectedText = obj.selectedText, this.searchText = obj.searchText;
        }
    },
    mounted() {}
}
</script>

<style lang="less" scoped>
    .inner-bg {
        background-color: #fff;
    }
    
    .inner {
        .search-wrap {
            display: flex;
            align-items: center;

            .wrap-left {
                display: flex;
                align-items: center;
                padding: 30px 0 30px 14px;
                margin-right: 145px;

                .logo {
                    cursor: pointer;
                }

                .divide {
                    width: 1px;
                    height: 32px;
                    margin: 0 30px;
                    background-color: #b3b3b3;
                }

                .description p {
                    font-size: 17px;
                    line-height: 22px;
                    color: #ff0036;
                }
            }

            .search {
                width: 700px;
                position: relative;

                input {
                    width: 440px;
                    height: 50px;
                    font-size: 16px;
                    text-indent: 45px;
                    color: #999999;
                    border: 1px solid #ff0036;
                    border-radius: 30px 0 0 30px;
                }

                input::placeholder {
                    color: #999999;
                }

                button {
                    height: 50px;
                    font-size: 16px;
                    line-height: 50px;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                }

                .btn1 {
                    width: 134px;
                    margin-right: 10px;
                    background-color: #ff0036;
                }

                .btn2 {
                    width: 115px;
                    background-color: #ff8a00;
                    border-radius: 0 30px 30px 0;
                    overflow: hidden;
                }

                .logo-search {
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translate(0,-50%);
                }
            }
        }

        .nav {
            display: flex;
            align-items: center;

            .divide {
                height: 24px;
                width: 1px;
                background-color: #ddd;
            }

            li {
                width: 150px;
                height: 42px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                .text {
                    font-size: 16px;
                    line-height: 42px;
                    margin-left: 10px;
                }
            }

            // 热门类目
            .hot {
                width: 262px;
                font-size: 18px;
                font-weight: bold;
                color: #fff;
                background-color: #ff0036;
                cursor: auto;

                span {
                    line-height: 42px;
                    margin-left: 6px;
                }
            }

            .home .text{
                font-weight: bold;
            }
        }
    }
</style>