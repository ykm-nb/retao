<template>
    <div class="inner-bg">
        <div class="inner">
            <div class="search-wrap">
                <div class="wrap-left">
                    <div class="logo" @click="gotoPage('index')">
                        <img src="./logo2.png" alt="logo">
                    </div>
                </div>

                <div class="search">
                    <input v-model="searchText" @keyup.enter="handleSearch(searchText)" type="text" placeholder="请输入店铺标题进行查找">
                    <button @click="handleSearch(searchText)" class="btn1" type="button">查看网店</button>
                    <button @click="consult" class="btn2" type="button">我要卖网店</button>
                    <img class="logo-search" src="./search.png">
                </div>
            </div>

            <ul class="nav">
                <li class="hot">
                    <img src="./bar.png">
                    <span>热门店铺</span>
                </li>
                <li @click="gotoPage('index')" class="home">
                    <img src="./home.png">
                    <span class="text">首页</span>
                </li>
                <div class="divide"></div>
                <li @click="gotoPage('tmlistpage')" class="item">
                    <img src="./tm.png">
                    <span class="text">天猫店铺</span>
                    <i class="hot"></i>
                </li>
                <div class="divide"></div>
                <li @click="gotoPage('tmtjlistpage')" class="item">
                    <img src="./du.png">
                    <span class="text">特价新店</span>
                    <i class="new"></i>
                </li>
                <div class="divide"></div>
                <li @click="consult()" class="item">
                    <img src="./tao.png">
                    <span class="text">淘宝店铺</span>
                    <i class="hot"></i>
                </li>
                <div class="divide"></div>
                <li @click="gotoPage('enter')" class="item">
                    <img src="./mao.png">
                    <span class="text">天猫入驻</span>
                </li>
                <div class="divide"></div>
                <li @click="gotoPage('operation')" class="item">
                    <img src="./dai.png">
                    <span class="text">电商运营</span>
                    <i class="hot"></i>
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
            searchText: ""
        }
    },
    methods: {
        // 跳转页面
        gotoPage(page) {
            const curPath = this.$route.path.substring(1);

            if(curPath === page) return; // 页面相同
            if(curPath === 'index') {
                let { href } = this.$router.resolve({
                    path: page
                })
                window.open(href)
            } else 
                this.$router.push(page)
        },
        handleSearch(text) {
            const curPath = this.$route.path.substring(1);

            ls.session("rtSearch", {title: text})
            this.$emit("navSearch", text)
            if(curPath === "tmlistpage") return; // 页面相同
            if(curPath === "tmtjlistpage") return; // 页面相同
            
            this.$router.push('tmlistpage')
        },
        consult () { // 联系客服
            window.open("https://url.cn/5FanN8i?_type=wpa&qidian=true");
        },
    },
    created() {
        let route = this.$route.path,
            text = ls.session.get("rtSearch");

        if(text) this.searchText = text.storeName;
    }
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
                padding: 30px 0 30px 32px;
                margin-right: 180px;

                .logo {
                    width: 200px;
                    cursor: pointer;
                    img {
                        width: 100%;
                    }
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
                width: 156px;
                height: 42px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                position: relative;

                .text {
                    font-size: 16px;
                    line-height: 42px;
                    margin-left: 10px;
                }

                .hot, .new {
                    width: 28px;
                    height: 20px;
                    animation: hot 2s infinite;
                    position: absolute;
                    left: 50%;
                    bottom: 90%;
                }

                .new {
                    background: url("./new.png") no-repeat center;
                }
                .hot {
                    background: url("./hot.png") no-repeat center;
                }

                @keyframes hot {
                    0% { bottom: 90%; }
                    50% { bottom: 80%; }
                    100% { bottom: 90%; }
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
                color: #ff0036;
            }

            .item {
                transition: .4s;

                &:hover span {
                    color: #ff0036;
                }
            }
        }
    }
</style>