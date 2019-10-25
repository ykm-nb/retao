<template>
    <div class="inner-bg">
        <div class="inner more-shop">

            <div v-if="showHelp" class="help">
                <p class="title">没找到您心仪的店铺？</p>
                <div class="btn">
                    <button class="contact" type="button">联系客服帮您找</button>
                    <span>或</span>
                    <button class="publish" type="button">发布求购需求</button>
                </div>
            </div>

            <span class="divide">猜你喜欢</span>

            <ul class="more">
                <li 
                    class="more-item" 
                    v-for="(item, index) in moreList" 
                    :key="index" 
                >
                    <p class="title">{{ item.title }}</p>
                    <div class="type">
                        <ul class="type-left">
                            <li class="type-item1">
                                <p>所属行业</p>
                                <p class="value">{{ item.type }}</p>
                            </li>
                            <li class="type-item2">
                                <p>所在地区</p>
                                <p class="value">{{ item.region }}</p>
                            </li>
                        </ul>
                        <div class="type-right">
                            <span>￥</span>
                            <span class="value">{{ item.price }}</span>
                        </div>
                    </div>
                    <p class="goods-type">
                        <span>开通类目：</span>
                        <span>{{ item.goodsType }}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "tmtransfer-more",
    props: {
        showHelp: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            moreList: [
                {
                    title: '华东地区家具专营店，无贷款，一般纳税，销量稳定，接受接受接受接受接受接受接受接受受接受',
                    type: '服饰',
                    region: '华东',
                    price: 75000,
                    goodsType: '住宅家具,办公家具,商业/办公家具,住宅家具,商业/办公家具'
                },
                {
                    title: '华东地区家具专营店，无贷款，一般纳税，销量稳定，接受接受接受接受接受接受接受接受受接受',
                    type: '服饰',
                    region: '华东',
                    price: 75000,
                    goodsType: '住宅家具,办公家具,商业/办公家具,住宅家具,商业/办公家具'
                },
                {
                    title: '华东地区家具专营店，无贷款，一般纳税，销量稳定，接受接受接受接受接受接受接受接受受接受',
                    type: '服饰',
                    region: '华东',
                    price: 75000,
                    goodsType: '住宅家具,办公家具,商业/办公家具,住宅家具,商业/办公家具'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .more-shop {
        padding: 45px 25px 35px;
        margin-bottom: 58px;
        background-color: #fff;
        border-radius: 5px;

        .help {
            font-size: 16px;
            margin-bottom: 42px;

            .title {
                font-size: 18px;
                line-height: 18px;
                margin-bottom: 25px;
            }

            .btn {
                span {
                    margin: 0 14px;
                }

                button {
                    line-height: 38px;
                    padding: 0 25px;
                    border: 1px solid #ed2b2f;
                    border-radius: 6px;
                    cursor: pointer;
                }

                .contact {
                    color: #ed2b2f;
                    background-color: transparent;
                }

                .publish {
                    color: #fff;
                    background-color: #ed2b2f;
                }
            }
        }

        .divide {
            font-size: 14px;
            line-height: 14px;
            color: #bfbfbf;
            display: inline-block;
            padding: 0 12px;
            margin-bottom: 24px;
            position: relative;

            &:before, &:after {
                content: '';
                width: 52px;
                height: 1px;
                background-color: #bfbfbf;
                position: absolute;
                top: 50%;
            }

            &:before {
                left: 0;
                transform: translate(-100%,-50%) scaleY(0.6);
            }

            &:after {
                right: 0;
                transform: translate(100%,-50%) scaleY(0.6);
            }
        }

        .more {
            display: flex;
            justify-content: space-between;

            .more-item {
                width: 375px;
                padding: 25px 30px 35px 20px;
                background-color: #f0f0f0;
                transition: .4s;

                &:hover {
                    transform: translate(0,-8px);
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                }

                .title {
                    font-size: 16px;
                    line-height: 24px;
                    text-align: left;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    text-overflow: ellipsis;
                    color: #333;
                    margin-bottom: 18px;
                    overflow: hidden;
                    cursor: pointer;
                }

                .type {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;

                    .type-left {
                        display: flex;
                        
                        li {
                            p {
                                font-size: 12px;
                                line-height: 12px;
                                color: #a1a1a1;
                                margin-bottom: 6px;
                            }

                            .value {
                                font-size: 16px;
                                line-height: 16px;
                                color: #4b4b4b;
                                margin-bottom: 0;
                            }
                        }

                        .type-item1 {
                            padding-right: 22px;
                            border-right: 1px solid #e1e1e1;
                        }

                        .type-item2 {
                            padding-left: 22px;
                        }
                    }

                    .type-right {
                        color: #e01523;

                        span {
                            font-size: 14px;
                            line-height: 14px;
                        }

                        .value {
                            font-size: 26px;
                            line-height: 26px;
                        }
                    }
                }

                .goods-type {
                    font-size: 12px;
                    line-height: 36px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #999999;
                    overflow: hidden;
                    padding: 0 12px;
                    background-color: #fff;
                    border-radius: 25px;
                }
            }
        }
    }
</style>