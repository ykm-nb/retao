<template>
    <!-- 代入驻 -->
    <div class="enter">
        
        <div class="inner-bg header-bg">
            <div class="inner header">
                <p class="title1">热淘带你开启电商创业之路</p>
                <p class="title2">天猫高效入驻</p>
                <p class="info">入驻成功再收费/成功率高/丰富代办经验/不限类目</p>
                <div class="btn">
                    <button type="button">
                        <div>
                            <img src="@/assets/images/consult1.png">
                            <span>我要咨询</span>
                        </div>
                    </button>
                    <button type="button" @click="toIndexPage('index')">
                        <div>
                            <img src="@/assets/images/enter.png">
                            <span>我要入驻</span>
                        </div>
                    </button>
                </div>
            </div>

            <!-- 导航 -->
            <div class="inner nav">
                <img src="@/assets/images/logo.png" alt="logo">

                <ul>
                    <li>首页</li>
                    <li>天猫转让</li>
                    <li>网店代入驻</li>
                    <li>商标转让</li>
                    <li>网店代运营</li>
                    <li>网店服务</li>
                    <li>
                        <span>知识产权</span>
                        <i class="iconfont iconxia"></i>
                    </li>
                    <li>
                        <span>企业服务</span>
                        <i class="iconfont iconxia"></i>
                    </li>
                    <li>
                        <span>网站建设</span>
                        <i class="iconfont iconxia"></i>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 加入 -->
        <div class="inner-bg join-bg">
            <div class="inner join">
                <p class="join-title">不成功不收费 你还在等什么？</p>
                <form>
                    <div class="item item0">
                        <input type="text" placeholder="请填写您的姓名">
                        <input type="text" placeholder="请填写您的联系电话">
                        <input class="xq" type="text" placeholder="请填写您的需求类目">
                    </div>
                    <div class="item item1">
                        <input type="text" placeholder="请填写您的QQ号">
                        <input type="text" placeholder="请输入验证码">
                        <button class="verify" type="button">获取验证码</button>
                    </div>
                    <div class="item item2">
                        <textarea name="" placeholder="请填写您的需求描述"></textarea>
                    </div>
                    <button class="submit" type="button">立即提交</button>
                </form>
            </div>
        </div>

        <!-- 困惑 -->
        <div class="inner-bg puzzled-bg">
            <div class="inner puzzled">
                <p class="puzzled-title">您的困惑我们帮您解决</p>
                <div>
                    <img src="@/assets/images/puzzled.png">
                </div>
            </div>
        </div>

        <!-- 类目 -->
        <div class="inner-bg type-bg">
            <div class="inner type">
                <div class="type-top">
                    <p class="title">各大类目强势入驻</p>
                    <ul>
                        <li class="item line-right-bottom line-bottom-right">
                            <img src="@/assets/images/enter-type1.png">
                            <p>住宅家具</p>
                        </li>
                        <li class="item item2 line-right-bottom">
                            <img src="@/assets/images/enter-type2.png">
                            <p>服饰鞋包</p>
                        </li>
                        <li class="item item3 line-right-bottom">
                            <img src="@/assets/images/enter-type3.png">
                            <p>母婴用品</p>
                        </li>
                        <li class="item line-bottom-left">
                            <img src="@/assets/images/enter-type4.png">
                            <p>3c数码</p>
                        </li>
                        <li class="item line-right-top">
                            <img src="@/assets/images/enter-type5.png">
                            <p>车品配件</p>
                        </li>
                        <li class="item line-right-top">
                            <img src="@/assets/images/enter-type6.png">
                            <p>家装家纺</p>
                        </li>
                        <li class="item line-right-top">
                            <img src="@/assets/images/enter-type7.png">
                            <p>生活电器</p>
                        </li>
                        <li class="item">
                            <img src="@/assets/images/enter-type8.png">
                            <p>书籍音像</p>
                        </li>
                    </ul>
                </div>
                <div class="type-bottom">
                    <p class="title">网店代入驻需要的条件</p>
                    <p class="info">
                        相关资料需要符合天猫商城“商家入驻” 的基本要求。
                        <span>更多详情可咨询天猫入驻客服顾问</span>
                    </p>
                    <p class="layer">
                        <span>1.公司营业执照</span>
                        <span>2.商标注册证</span>
                    </p>
                    <p class="layer">
                        <span>3.产品资质报告</span>
                        <span>4.入驻所需要相关签字文件</span>
                    </p>
                    <p class="layer">5.根据不同类目提交不同资源</p>
                </div>
            </div>
        </div>

        <!-- 顾问 -->
        <div class="inner-bg counselor-bg">
            <div class="inner counselor">
                <p class="counselor-title">专业入驻顾问打造专属方案</p>
                <div>
                    <img src="@/assets/images/counselor.png">
                </div>
            </div>
        </div>
        
        <!-- 服务流程 -->
        <div class="inner-bg process-bg">
            <div class="inner process">
                <p class="process-title">入驻服务流程</p>
                <ul class="process-bottom">
                    <li class="layer">
                        <div class="item">
                            <p class="left">01</p>
                            <p class="right">意向沟通</p>
                        </div>
                        <img src="@/assets/images/enter-right.png">
                        <div class="item">
                            <p class="left">02</p>
                            <p class="right">制定方案</p>
                        </div>
                        <img src="@/assets/images/enter-right.png">
                        <div class="item">
                            <p class="left">03</p>
                            <p class="right">入驻提交</p>
                        </div>
                    </li>
                    <li class="layer layer1">
                        <div class="item">
                            <img src="@/assets/images/enter-right.png">
                        </div>
                    </li>
                    <li class="layer">
                        <div class="item">
                            <p class="left">06</p>
                            <p class="right">服务付款</p>
                        </div>
                        <img class="img-left" src="@/assets/images/enter-right.png">
                        <div class="item">
                            <p class="left">05</p>
                            <p class="right">入驻通过</p>
                        </div>
                        <img class="img-left" src="@/assets/images/enter-right.png">
                        <div class="item">
                            <p class="left">04</p>
                            <p class="right">等待通知</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 常见问题 -->
        <div class="inner-bg question-bg">
            <div class="inner question">
                <p class="question-title">入驻常见问题</p>
                <ul class="question-bottom">
                    <li class="layer">
                        <div class="item">01入驻需要什么条件</div>
                        <div class="item">02入驻需要多久时间</div>
                        <div class="item">03入驻成功率有多大</div>
                    </li>
                    <li class="layer">
                        <div class="item">04不是热招品牌 入驻有机会吗？</div>
                        <div class="item">05需要多少费用</div>
                        <div class="item">06怎么付款？</div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 底部 -->
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue"
export default {
    name: "enter",
    components: {
        Footer
    },
    data() {
        return {
            
        }
    },
    methods: {
        toIndexPage(page) {
            const { href } = this.$router.resolve({
                path: "/" + page,
            });
            window.open(href, "_blank");
        }
    }
}
</script>

<style lang="less" scoped>
    .enter {
        .header-bg {
            background: url("../assets/images/enter-headbg.png") no-repeat center;
            position: relative;

            .header {
                padding: 115px 0 200px;

                .title1 {
                    font-size: 30px;
                    line-height: 30px;
                    color: #fff;
                    margin-bottom: 25px;
                }

                .title2 {
                    font-size: 90px;
                    line-height: 90px;
                    color: #fff;
                    margin-bottom: 25px;
                }

                .info {
                    font-size: 20px;
                    line-height: 20px;
                    color: #fff;
                    text-shadow: 0 1px 1px #000;
                    margin-bottom: 75px;
                }

                .btn {
                    width: 340px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;

                    button {
                        height: 40px;
                        display: inline-block;
                        vertical-align: middle;
                        padding: 0 18px;
                        background-color: #fe0036;
                        border-radius: 10px;
                        border: none;
                        cursor: pointer;

                        div {
                            width: 115px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin: 0 auto;

                            span {
                                font-size: 18px;
                                line-height: 18px;
                                text-shadow: 0 1px 1px #000;
                                color: #fff;
                            }
                        }
                    }
                }
            }

            .nav {
                display: flex;
                align-items: center;
                position: absolute;
                left: 50%;
                top: 60px;
                transform: translate(-50%);

                img {
                    margin-right: 22px;
                }

                ul {
                    width: 970px;
                    display: flex;
                    justify-content: space-between;
                    cursor: pointer;

                    li {
                        font-size: 16px;
                        line-height: 30px;
                        color: #fff;

                        &:hover {
                            color: #b81a1a;
                        }
                    }
                }
            }
        }

        // 加入
        .join-bg {
            background-color: #f5f5f5;

            .join {
                padding: 65px 140px;
                background-color: #fefefe;
                border-radius: 10px;
                box-sizing: border-box;
                position: relative;
                top: -55px;

                .join-title {
                    width: 765px;
                    font-size: 48px;
                    line-height: 48px;
                    font-weight: bold;
                    text-indent: 20px;
                    letter-spacing: 0.4px;
                    color: #161616;
                    margin: 0 auto 60px;
                }

                form {
                    .item {
                        display: flex;
                        margin-bottom: 15px;

                        input ,textarea {
                            height: 50px;
                            font-size: 18px;
                            text-indent: 20px;
                            font-weight: 400;
                            color: #a0a0a0;
                            background-color: #f5f5f5;
                            border: 1px solid #eee;
                            outline: none;
                        }

                        input {
                            width: 280px;
                        }

                        .xq {
                            width: 210px;
                        }

                        textarea {
                            width: 100%;
                            height: 175px;
                            padding-top: 30px;
                            margin-top: 20px;
                            box-sizing: border-box;
                            resize: none;
                        }

                        // placeholder
                        input::-webkit-input-placeholder,
                        input::-moz-input-placeholder,
                        input::-ms-input-placeholder {
                            color: #a0a0a0;
                        }
                    }

                    .item0 {
                        justify-content: space-between;
                    }

                    .item1 {
                        input {
                            margin-right: 75px;
                        }

                        .verify {
                            height: 50px;
                            width: 125px;
                            font-size: 18px;
                            color: #999;
                            margin-left: -65px;
                            background-color: transparent;
                            border: 1px solid #eee;
                            cursor: pointer;
                        }
                    }

                    .item2 {
                        margin-bottom: 42px;
                    }

                    .submit {
                        width: 290px;
                        font-size: 34px;
                        line-height: 86px;
                        color: #fff;
                        background-color: #ee163a;
                        border-radius: 50px;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }

        // 困惑
        .puzzled-bg {
            background-color: #f5f5f5;

            .puzzled {
                padding: 40px 0 88px;

                .puzzled-title {
                    font-size: 46px;
                    line-height: 46px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    color: #000;
                    margin-bottom: 70px;
                }

                ul {
                    display: flex;
                    justify-content: space-between;

                    .item {
                        width: 245px;
                        padding: 35px 10px 80px;
                        box-sizing: border-box;

                        .item-title {
                            font-size: 46px;
                            line-height: 46px;
                            font-weight: 400;
                            white-space: nowrap;
                            text-shadow: 0 3px 5px #000;
                            text-align: left;
                            letter-spacing: 3px;
                            color: #fff;
                            margin-bottom: 35px;
                        }

                        .item-info {
                            font-size: 18px;
                            line-height: 30px;
                            text-align: left;
                            text-shadow: 0 2px 3px #000;
                            color: rgba(255,255,255,.95);
                        }
                    }

                    .item1 {
                        background-color: #be8af8;
                    }
                    .item2 {
                        background-color: #9475fc;
                    }
                    .item3 {
                        background-color: #fc8586;
                    }
                    .item4 {
                        background-color: #f89262;
                    }
                }
            }
        }

        // 各大类目
        .type-bg {
            padding: 15px 0 25px;
            background: url("../assets/images/enter-puzzledbg.png") no-repeat center;
            background-size: cover;

            .type {
                background-color: #fff;

                .type-top {
                    padding-top: 50px;
                    border-bottom: 1px dashed #000;

                    .title {
                        font-size: 54px;
                        line-height: 54px;
                        font-weight: bold;
                        letter-spacing: 3px;
                        color: #000;
                    }

                    ul {
                        width: 730px;
                        margin: 0 auto;
                        display: flex;
                        flex-wrap: wrap;

                        .item {
                            width: 182px;
                            padding: 35px 40px 40px;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            align-items: flex-end;
                            box-sizing: border-box;
                            position: relative;

                            img {
                                margin-bottom: 10px;
                            }

                            p {
                                font-size: 18px;
                                line-height: 18px;
                                font-weight: 400;
                                color: #000;
                            }
                        }

                        .item2, .item3 {
                            border-bottom: 1px solid #000;
                        }

                        .line-right-bottom {
                            &:after {
                                content: "";
                                width: 1px;
                                height: 110px;
                                background-color: #000;
                                position: absolute;
                                right: 0;
                                bottom: 0;
                            }
                        }

                        .line-right-top {
                            &:after {
                                content: "";
                                width: 1px;
                                height: 110px;
                                background-color: #000;
                                position: absolute;
                                right: 0;
                                top: 0;
                            }
                        }

                        .line-bottom-right {
                            &:before {
                                content: "";
                                width: 110px;
                                height: 1px;
                                background-color: #000;
                                position: absolute;
                                right: 0;
                                bottom: 0;
                            }
                        }

                        .line-bottom-left {
                            &:after {
                                content: "";
                                width: 110px;
                                height: 1px;
                                background-color: #000;
                                position: absolute;
                                left: 0;
                                bottom: 0;
                            }
                        }
                    }
                }

                .type-bottom {
                    padding: 26px 0;

                    .title {
                        font-size: 30px;
                        line-height: 30px;
                        font-weight: bold;
                        letter-spacing: 3px;
                        color: #000;
                        margin-bottom: 25px;
                    }

                    .info {
                        font-size: 14px;
                        line-height: 14px;
                        font-weight: bold;
                        color: #222222;
                        margin-bottom: 25px;

                        span {
                            border-bottom: 1px solid #222222;
                        }
                    }

                    .layer {
                        width: 312px;
                        font-size: 14px;
                        line-height: 14px;
                        font-weight: 400;
                        text-align: left;
                        color: #222222;
                        margin: 0 auto 12px;

                        span:first-child {
                            margin-right: 50px;
                        }
                    }
                }
            }
        }

        // 入驻顾问
        .counselor-bg {
            background-color: #f5f5f5;

            .counselor {
                padding: 90px 0 105px;

                .counselor-title {
                    font-size: 44px;
                    line-height: 44px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    color: #000;
                    margin-bottom: 70px;
                }
            }
        }

        // 服务流程
        .process-bg {
            background-color: #faf8f9;

            .process {
                padding: 75px 0 85px;

                .process-title {
                    font-size: 54px;
                    line-height: 54px;
                    font-weight: bold;
                    letter-spacing: 3px;
                    color: #000;
                    margin-bottom: 125px;
                    position: relative;

                    &:after {
                        content: "";
                        width: 145px;
                        height: 3px;
                        background-color: #fd3132;
                        position: absolute;
                        bottom: -25px;
                        left: 50%;
                        transform: translate(-50%,0);
                    }
                }

                .process-bottom {
                    .layer {
                        height: 130px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 60px;

                        .item {
                            display: flex;

                            .left {
                                width: 100px;
                                font-size: 66px;
                                font-weight: bold;
                                line-height: 130px;
                                color: #000;
                                background-color: #ffa92e;
                                border-radius: 0 0 0 20px;
                            }

                            .right {
                                width: 175px;
                                font-size: 34px;
                                line-height: 130px;
                                text-align: left;
                                text-indent: 12px;
                                color: #000;
                                background-color: #fff;
                                border-radius: 0 0 0 10px;
                            }
                        }

                        .img-left {
                            transform: rotate(180deg);
                        }
                    }

                    .layer1 {
                        flex-direction: row-reverse;

                        .item {
                            width: 275px;

                            img {
                                display: block;
                                margin: 0 auto;
                                transform: rotate(90deg);
                            }
                        }
                    }
                }
            }
        }

        //  常见问题
        .question-bg {
            background-color: #f5f5f5;

            .question {
                padding: 95px 0 130px;

                .question-title {
                    font-size: 48px;
                    line-height: 48px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    color: #000;
                    margin-bottom: 68px;
                }

                .question-bottom {
                    .layer {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 30px;

                        .item {
                            width: 370px;
                            height: 100px;
                            font-size: 22px;
                            line-height: 22px;
                            font-weight: bold;
                            text-align: center;
                            letter-spacing: 2px;
                            color: #000;
                            padding-top: 40px;
                            background-color: #fff;
                            transition: .4s;
                            cursor: pointer;

                            &:hover {
                                color: #fff;
                                background-color: #ee163a;
                            }
                        }
                    }

                    .layer:last-child {
                        margin: 0;
                    }
                }
            }
        }
    }
</style>