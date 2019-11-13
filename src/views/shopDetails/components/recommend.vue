<template>
    <div class="recommend">
        
        <p class="recommend-title">相关推荐</p>

        <div class="recommend-info">
            <p class="bold">专属陪同过户，交易路上您不孤单</p>
            <p>全国 <b>299</b>城，交易金额满8万即享专属陪同过户</p>
            <button class="subscribe" type="button">预约陪同专员</button>
            <button class="search" type="button">陪同城市查询</button>
        </div>

        <ul>
            <li class="item">
                <img src="./images/service2.png">
                <div class="item-bottom">
                    <p class="name">陈艳桃</p>
                    <div class="info">
                        <p class="type">服饰鞋包</p>
                        <button type="button">预约TA</button>
                    </div>
                </div>
            </li>
            <li class="item">
                <img src="./images/service2.png">
                <div class="item-bottom">
                    <p class="name">陈艳桃</p>
                    <div class="info">
                        <p class="type">服饰鞋包</p>
                        <button type="button">预约TA</button>
                    </div>
                </div>
            </li>
            <li class="item">
                <img src="./images/service2.png">
                <div class="item-bottom">
                    <p class="name">陈艳桃</p>
                    <div class="info">
                        <p class="type">服饰鞋包</p>
                        <button type="button">预约TA</button>
                    </div>
                </div>
            </li>
            <li class="item">
                <img src="./images/service2.png">
                <div class="item-bottom">
                    <p class="name">陈艳桃</p>
                    <div class="info">
                        <p class="type">服饰鞋包</p>
                        <button type="button">预约TA</button>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "recommend",
    props: {
        processIndex: {
            type: Number
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
    .recommend {
        padding: 32px 40px 42px 50px;
        background-color: #fff;
        border-radius: 4px;

        .recommend-title {
            font-size: 22px;
            line-height: 22px;
            font-weight: bold;
            text-align: left;
            color: #333333;
            padding-bottom: 15px;
            margin-bottom: 20px;
            border-bottom: 1px solid #e1e1e1;
            position: relative;

            &:after {
                content: "";
                width: 88px;
                height: 4px;
                background-color: #fc324c;
                position: absolute;
                left: 0;
                bottom: 0;
                transform: translate(0,50%);
            }
        }

        .recommend-info {
            display: flex;
            align-items: center;
            margin-bottom: 45px;

            p {
                height: 18px;
                font-size: 16px;
                line-height: 16px;
                color: #333333;
                margin-right: 32px;

                b {
                    font-size: 25px;
                    font-weight: bold;
                    color: #fc324c;
                }
            }

            .bold {
                height: 18px;
                font-size: 18px;
                line-height: 18px;
                font-weight: bold;
                margin-right: 20px;
            }

            button {
                width: 110px;
                height: 28px;
                font-size: 14px;
                background-color: transparent;
                border-radius: 4px;
                cursor: pointer;
            }

            .subscribe {
                margin-right: 16px;
                color: #fc324c;
                border: 1px solid #fc324c;
            }

            .search {
                color: #333333;
                border: 1px solid #333333;
            }
        }

        ul {
            width: 870px;
            font-size: 0;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            .item {
                transition: .4s;

                &:hover {
                    transform: translate(0,-8px);
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                }

                .item-bottom {
                    display: flex;
                    padding: 12px 15px;
                    background-color: #fc324c;

                    .name {
                        font-size: 16px;
                        line-height: 48px;
                        font-weight: bold;
                        color: #fff;
                        padding-right: 14px;
                        border-right: 1px solid #999;
                    }

                    .info {
                        padding-left: 20px;

                        .type {
                            font-size: 14px;
                            line-height: 14px;
                            color: #fff;
                            margin-bottom: 8px;
                        }

                        button {
                            width: 65px;
                            font-size: 12px;
                            line-height: 24px;
                            font-weight: bold;
                            color: #fc324c;
                            background-color: #ffeec9;
                            border: none;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>