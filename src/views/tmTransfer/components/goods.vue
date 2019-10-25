<template>
    <div class="inner-bg">
        <div class="inner">
            
            <!-- 筛选 -->
            <div class="inner-layer filter">
                <div class="layer goodsType">
                    <span>类目：</span>
                    <p 
                        v-for="(item, index) in goodsList" 
                        :key="index" 
                        :class="`${index === 0 ? 'all' : 'value'} ${goodsIndex === index ? 'active' : ''}`" 
                        @click="handleType('goodsIndex', index)" 
                    >
                        {{ item | spaceToAll() }}
                    </p>
                </div>
                <div class="layer shopType">
                    <span>类型：</span>
                    <p 
                        v-for="(item, index) in shopList" 
                        :key="index" 
                        :class="`${index === 0 ? 'all' : 'value'} ${shopIndex == index ? 'active' : ''}`" 
                        @click="handleType('shopIndex', index)"
                    >
                        {{ item | spaceToAll() }}
                    </p>
                </div>
                <div class="layer brand">
                    <span>商标：</span>
                    <p 
                        v-for="(item, index) in brandList" 
                        :key="index" 
                        :class="`${index === 0 ? 'all' : 'value'} ${brandIndex == index ? 'active' : ''}`" 
                        @click="handleType('brandIndex', index)"
                    >
                        {{ item | spaceToAll() }}
                    </p>
                </div>
                <div class="layer price">
                    <span>价格：</span>
                    <p 
                        v-for="(item, index) in priceList" 
                        :key="index" 
                        :class="`${index === 0 ? 'all' : 'value'} ${priceIndex == index ? 'active' : ''}`" 
                        @click="handleType('priceIndex', index)"
                    >
                        {{ item | spaceToAll() }}
                    </p>
                </div>
                <div class="layer more">
                    <span>其他：</span>
                    <p>
                        <span>{{ regionIndex === -1 ? '地域选择' : regionList[regionIndex] }}</span>
                        <i class="iconfont iconxia"></i>
                        <ul class="dropdown">
                            <li 
                                v-for="(item, index) in regionList" 
                                :key="index" 
                                @click="regionIndex = index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </p>
                    <p>
                        <span>{{ regionIndex === -1 ? '商标分类' : regionList[regionIndex] }}</span>
                        <i class="iconfont iconxia"></i>
                        <ul class="dropdown">
                            <li 
                                v-for="(item, index) in regionList" 
                                :key="index" 
                                @click="regionIndex = index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </p>
                    <p>
                        <span>{{ regionIndex === -1 ? '是否带货' : regionList[regionIndex] }}</span>
                        <i class="iconfont iconxia"></i>
                        <ul class="dropdown">
                            <li 
                                v-for="(item, index) in regionList" 
                                :key="index" 
                                @click="regionIndex = index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </p>
                    <p>
                        <span>{{ regionIndex === -1 ? '提供货源' : regionList[regionIndex] }}</span>
                        <i class="iconfont iconxia"></i>
                        <ul class="dropdown">
                            <li 
                                v-for="(item, index) in regionList" 
                                :key="index" 
                                @click="regionIndex = index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </p>
                    <p>
                        <span>{{ regionIndex === -1 ? '动态评分' : regionList[regionIndex] }}</span>
                        <i class="iconfont iconxia"></i>
                        <ul class="dropdown">
                            <li 
                                v-for="(item, index) in regionList" 
                                :key="index" 
                                @click="regionIndex = index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </p>
                    <p>
                        <span>{{ regionIndex === -1 ? '当面交易' : regionList[regionIndex] }}</span>
                        <i class="iconfont iconxia"></i>
                        <ul class="dropdown">
                            <li 
                                v-for="(item, index) in regionList" 
                                :key="index" 
                                @click="regionIndex = index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </p>
                    <p>
                        <span>{{ regionIndex === -1 ? '扣分情况' : regionList[regionIndex] }}</span>
                        <i class="iconfont iconxia"></i>
                        <ul class="dropdown">
                            <li 
                                v-for="(item, index) in regionList" 
                                :key="index" 
                                @click="regionIndex = index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            <!-- 排序 -->
            <div class="inner-layer sort">
                <div class="sort-left">
                    <div class="item">
                        <p class="title">默认排序</p>
                        <p class="btn">
                            <i 
                                @click="form.defaultSort = 0" 
                                class="goup" 
                                :class="{'active': form.defaultSort === 0}"
                            ></i>
                            <i
                                @click="form.defaultSort = 1" 
                                class="drop" 
                                :class="{'active': form.defaultSort === 1}"
                            ></i>
                        </p>
                    </div>
                    <div class="item">
                        <p class="title">出售价格</p>
                        <p class="btn">
                            <i 
                                @click="form.priceSort = 0" 
                                class="goup" 
                                :class="{'active': form.priceSort === 0}"
                            ></i>
                            <i
                                @click="form.priceSort = 1" 
                                class="drop" 
                                :class="{'active': form.priceSort === 1}"
                            ></i>
                        </p>
                    </div>
                    <div class="item">
                        <p class="title">收藏人气</p>
                        <p class="btn">
                            <i 
                                @click="form.collectSort = 0" 
                                class="goup" 
                                :class="{'active': form.collectSort === 0}"
                            ></i>
                            <i
                                @click="form.collectSort = 1" 
                                class="drop" 
                                :class="{'active': form.collectSort === 1}"
                            ></i>
                        </p>
                    </div>
                    <div class="item optimization">
                        <img src="./you.png">
                        <p class="title">优选新店</p>
                    </div>
                    <div class="item giftware">
                        <img src="./jing.png">
                        <p class="title">精品老店</p>
                    </div>
                </div>
                <div class="sort-right">
                    <Page 
                        :current="form.pageNum" 
                        :total="form.total" 
                        simple 
                        @on-change="changePageNum"
                    />
                </div>
            </div>

            <!-- 商品 -->
            <div class="goods-bg">
                <div class="goods"
                    v-for="(item, index) in goodsLists" 
                    :key="index" 
                >
                    <div class="goods-left">
                        <div class="layer1">
                            <div class="avatar">
                                <img :src="item.avatar">
                            </div>
                            <div class="layer1-right">
                                <p class="title" @click="gotoDetail(item.id)">{{ item.title }}</p>
                                <p class="type">
                                    <span>开通类目：{{ item.industry | nullToStar() }}</span>
                                </p>
                            </div>
                        </div>
                        <ul class="layer2">
                            <li>
                                <p>所属行业</p>
                                <p class="value">{{ item.industry | nullToStar() }}</p>
                            </li>
                            <li>
                                <p>所属地区</p>
                                <p class="value">{{ item.area | nullToStar() }}</p>
                            </li>
                            <li>
                                <p>商城类型</p>
                                <p class="value">{{ item.storeType | nullToStar() }}</p>
                            </li>
                            <li>
                                <p>纳税资质</p>
                                <p class="value">{{ item.taxIntelligence | nullToStar() }}</p>
                            </li>
                            <li>
                                <p>支持迁址</p>
                                <p class="value">{{ item.relocation ? '支持' : '不支持' }}</p>
                            </li>
                            <li>
                                <p>是否贷款</p>
                                <p class="value">{{ item.hasLoan ? '有贷款' : '无贷款' }}</p>
                            </li>
                            <li>
                                <p>商标类型</p>
                                <p class="value">{{ item.trademarkCategory | nullToStar() }}</p>
                            </li>
                            <li>
                                <p>严重违规</p>
                                <p class="value">{{ item.punishment | nullToStar() }}分</p>
                            </li>
                        </ul>
                        <p class="layer3">一级类目：{{ item.firstCategory | nullToStar() }}</p>
                    </div>

                    <div class="goods-right">
                        <p>
                            <span>￥</span>
                            <span class="price" :title="item.price">{{ item.price }}</span>
                            <span class="tag">可议价</span>
                        </p>
                        <button type="button">
                            <img src="./wechat.png">
                            <span>联系客服</span>
                        </button>
                    </div>
                </div>
                <div v-show="goodsLists.length === 0" class="no-data">暂无数据</div>
            </div>

            <!-- 分页 -->
            <div class="page">
                <Page 
                    :current="form.pageNum" 
                    :total="form.total" 
                    show-elevator 
                    @on-change="changePageNum"
                />
                <p class="msg">
                    <span>当前第<b>{{ form.pageNum }}</b>页</span>
                    <span class="divide">/</span>
                    <span>共{{ Math.ceil(form.total / 10) }}页</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api';
import ls from "store2";
export default {
    name: "tmtransfer-goods",
    data() {
        return {
            form: {
                industry: '',
                storeType: '',
                trademarkCategory: '', // 商标
                cellPriceType: '',
                // 排序
                defaultSort: -1,
                priceSort: -1,
                collectSort: -1,
                // 分页
                pageNum: 1, // 当前页数
                total: 1
            },
            goodsIndex: 0,
            goodsList: ['', '服饰鞋包', '住宅家具'],
            shopIndex: 0,
            shopList: ['', '旗舰店', '专营店', '专卖店', '供销平台'],
            brandIndex: 0,
            brandList: ['', 'R标', 'TM标', '授权商标', '自有商标', '可贴牌'],
            priceIndex: 0,
            priceList: ['', '5万以下', '5-10万', '10-30万', '30-50万', '50万以上'],
            // 其他
            regionIndex: -1,
            regionList: ['北京', '上海', '广州'],
            // 商品
            goodsLists: []
        }
    },
    methods: {
        getGoodsList(pageNum = 1) {
            let obj = ls.session.get("rtSearch"),
                form = this.form;

            form.pageNum = pageNum;
            
            if(obj.url) {
                api.axs('post', obj.url, {keywords: obj.searchText, ...form}).then(({ data }) => {
                    if(data.code === "SUCCESS") {
                        this.goodsLists = data.data.list;
                        form.total = data.data.total;
                    }
                });
            }
        },
        handleType(type, index) {
            let form = this.form;

            this[type] = index;
            switch (type) {
                case 'goodsIndex': form.industry = this.goodsList[index];
                    break;
                case 'shopIndex': form.storeType = this.shopList[index];
                    break;
                case 'brandIndex': form.trademarkCategory = this.brandList[index];
                    break;
                case 'priceIndex': form.cellPriceType = index;
                    break;
            }

            this.getGoodsList();
        },
        // 跳转详情
        gotoDetail(id) {
            this.$router.push({
                path: 'shopdetails',
                query: { 
                    id: parseInt(id)
                }
            })
        },
        changePageNum(pageNum) {
            this.form.pageNum = pageNum;
        }
    },
    filters: {
        // 空格转全部
        spaceToAll(value) {
            return (value == '') ? '全部' : value;
        },
        // null或'' 转*
        nullToStar(value) {
            return (value == null || value == '') ? '*' : value;
        }
    },
    created() {}
}
</script>

<style lang="less" scoped>
    .inner {
        margin-top: 10px;
        box-sizing: border-box;

        .inner-layer {
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 5px;
        }

        // 筛选
        .filter {
            padding: 0 20px;

            .layer {
                height: 60px;
                font-size: 14px;
                display: flex;
                align-items: center;
                padding-left: 35px;
                border-bottom: 1px solid #e1e1e1;

                p {
                    padding: 0 12px;
                    cursor: pointer;

                    &.active {
                        height: 26px;
                        line-height: 26px;
                        color: #fff;
                        background-color: #e01523;
                        border-radius: 20px;
                    }
                }

                .all {
                    margin-right: 32px;
                }

                .value {
                    margin-right: 6px;
                }

                .value:last-child {
                    margin: 0;
                }
            }

            .more {
                border-bottom: 0;

                p {
                    width: 100px;
                    margin-right: 10px;
                    box-sizing: border-box;
                    position: relative;

                    span {
                        margin-right: 4px;
                    }

                    &:hover .dropdown {
                        max-height: 150px;
                    }

                    .dropdown {
                        max-height: 0;
                        width: calc(100% - 24px);
                        background-color: #fff;
                        position: absolute;
                        top: 20px;
                        left: 50%;
                        transform: translate(-50%);
                        transition: .4s;
                        overflow: hidden;
                        z-index: 99;

                        li {
                            font-size: 14px;
                            line-height: 30px;
                            transition: .4s;

                            &:hover {
                                color: #fff;
                                background-color: #e01523;
                            }
                        }
                    }
                }
            }
        }

        // 排序
        .sort {
            height: 65px;
            display: flex;
            justify-content: space-between;
            padding: 0 28px 0 56px;

            .sort-left {
                width: 610px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .item {
                    display: flex;
                    justify-content: space-between;
                    margin-right: 50px;

                    .title {
                        font-size: 14px;
                        line-height: 14px;
                        margin-right: 5px;
                    }

                    .btn {
                        width: 10px;
                        display: flex;
                        flex-wrap: wrap;
                        transform: translate(0,1px);

                        i {
                            width: 0;
                            height: 0;
                            cursor: pointer;
                        }

                        .goup {
                            border-left: 5px solid transparent;
                            border-right: 5px solid transparent;
                            border-bottom: 5px solid #8a8a8a;

                            &.active {
                                border-bottom: 5px solid #e01523;
                            }
                        }

                        .drop {
                            border-left: 5px solid transparent;
                            border-right: 5px solid transparent;
                            border-top: 5px solid #8a8a8a;

                            &.active {
                                border-top: 5px solid #e01523;
                            }
                        }
                    }
                }

                .item:last-child {
                    margin: 0;
                }

                .optimization, .giftware {
                    cursor: pointer;

                    .title {
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 18px;
                        color: #6cbc1d;
                        margin: 0 0 0 5px;
                        transform: translate(0,1px);
                    }
                } 

                .giftware .title {
                    color: #eb404c;
                }
            }

            .sort-right {
                width: 250px;
                display: flex;
                align-items: center;

                /deep/ .ivu-page {

                    .ivu-page-next, .ivu-page-prev {
                        &:hover i:before {
                            color: #e01523;
                        }
                    }

                    i {
                        &:before {
                            width: 42px;
                            height: 20px;
                            font-size: 12px;
                            line-height: 18px;
                            display: block;
                            background-color: #f0f0f0;
                            border: 1px solid #e1d5d5;
                            border-radius: 5px;
                        }
                    }

                    .ivu-icon-ios-arrow-back {
                        &:before {
                            content: "上页";
                        }
                    }

                    .ivu-icon-ios-arrow-forward {
                        &:before {
                            content: "下页";
                        }
                    }

                    .ivu-page-simple-pager input {
                        color: #ec3337;
                        padding: 0;
                        margin: 0 5px;
                        border: none;
                    }
                }
            }
        }

        // 商品
        .goods-bg {
            margin-bottom: 24px;

            .goods {
                display: flex;
                justify-content: space-between;
                padding: 25px 30px 32px 20px;
                margin-bottom: 10px;
                background-color: #fff;
                border-radius: 5px;
                transition: .4s;

                &:hover {
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                }

                .goods-left {
                    width: 900px;

                    .layer1 {
                        display: flex;
                        align-items: flex-end;
                        margin-bottom: 26px;

                        .avatar {
                            width: 64px;
                            height: 64px;
                            margin-right: 20px;
                            background-color: #a9a9a9;
                            border-radius: 10px;
                        }

                        .layer1-right {
                            .title {
                                font-size: 16px;
                                font-weight: bold;
                                line-height: 16px;
                                margin-bottom: 8px;
                                cursor: pointer;
                            }

                            .type {
                                text-align: left;

                                span {
                                    font-size: 14px;
                                    line-height: 30px;
                                    color: #ec3337;
                                    padding: 7px 10px;
                                    background-color: #f5f5f5;
                                }
                            }
                        }
                    }

                    .layer2 {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 26px;

                        p {
                            font-size: 12px;
                            line-height: 12px;
                            color: #999999;
                            margin-bottom: 12px;
                        }

                        .value {
                            font-size: 16px;
                            line-height: 16px;
                            color: #333333;
                            margin-bottom: 0;
                        }
                    }

                    .layer3 {
                        font-size: 14px;
                        line-height: 14px;
                        text-align: left;
                        color: #ff6600;
                    }
                }

                .goods-right {
                    width: 195px;
                    display: flex;
                    flex-wrap: wrap;                    

                    p {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;

                        span {
                            font-size: 12px;
                            line-height: 12px;
                            color: #e01523;
                        }

                        .tag {
                            width: 52px;
                            font-size: 14px;
                            line-height: 28px;
                            color: #fff;
                            display: inline-block;
                            margin-right: 12px;
                            background-color: #e01523;
                            border-radius: 13px;
                            position: relative;

                            &:before {
                                content: '';
                                width: 0;
                                height: 0;
                                border-top: 7px solid #e01523;
                                border-left: 5px solid transparent;
                                border-right: 5px solid transparent;
                                position: absolute;
                                left: -5px;
                                bottom: 1px;
                                transform: rotate(55deg);
                            }
                        }

                        .price {
                            max-width: 105px;
                            font-size: 30px;
                            line-height: 26px;
                            display: inline-block;
                            margin-right: 15px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }

                    button {
                        width: 100%;
                        height: 42px;
                        text-align: center;
                        background-color: #e01523;
                        border-radius: 20px;
                        border: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 10px;
                        cursor: pointer;

                        img {
                            margin-right: 4px;
                        }

                        span {
                            font-size: 16px;
                            color: #fff;
                        }
                    }
                }
            }

            .no-data {
                font-size: 16px;
                font-weight: bold;
                padding: 8px 0;
                background-color: #fff;
                border-radius: 5px;
            }
        }

        // 分页
        .page {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 35px 140px 45px 142px;
            margin-bottom: 30px;
            background-color: #fff;
            border-radius: 5px;

            /deep/ .ivu-page {
                margin-right: 24px;

                .ivu-page-item {
                    &:hover {
                        border: 1px solid #ec3337;

                        a {
                            color: #ec3337;
                        }
                    }

                    &.ivu-page-item-active {
                        background-color: #ec3337;
                        border: none;

                        a {
                            color: #fff;
                        }
                    }
                }

                .ivu-page-next, .ivu-page-prev {
                    &:hover {
                        border: 1px solid #ec3337;

                        a {
                            color: #ec3337;
                        }
                    }
                }

                .ivu-page-options-elevator input {
                    &:hover {
                        border: 1px solid #ec3337;
                    }

                    &:focus {
                        border: 1px solid #ec3337;
                        box-shadow: none;
                    }
                }
            }

            .msg {
                font-size: 14px;

                .divide {
                    margin: 0 4px;
                }

                span b {
                    color: #ec3337;
                }
            }
        }
    }
</style>