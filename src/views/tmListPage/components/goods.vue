<template>
    <div class="inner-bg">
        <div class="inner">
            
            <div class="inner-left">
                <!-- 筛选 -->
                <div class="inner-layer filter">
                    <div class="layer goodsType">
                        <div class="left">
                            <img src="./category.png">
                            <p>类目：</p>
                            <button @click="handleType('goodsIndex', -1)"  class="all" :class="{'all-actived': goodsIndex === -1}" type="button">全部</button>
                        </div>
                        <ul class="right">
                            <li v-for="(item, index) in goodsList" 
                                :key="index" 
                                @click="handleType('goodsIndex', index)" 
                            >
                                <p :class="{'active': goodsIndex === index}" >{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="layer shopType">
                        <div class="left">
                            <img src="./type.png">
                            <p>类型：</p>
                            <button @click="handleType('shopIndex', -1)"  class="all" :class="{'all-actived': shopIndex === -1}" type="button">全部</button>
                        </div>
                        <ul class="right">
                            <li v-for="(item, index) in shopList" 
                                :key="index" 
                                @click="handleType('shopIndex', index)" 
                            >
                                <p :class="{'active': shopIndex === index}" >{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="layer price">
                        <div class="left">
                            <img src="./price.png">
                            <p>价格：</p>
                            <button @click="handleType('priceIndex', -1)"  class="all" :class="{'all-actived': priceIndex === -1}" type="button">全部</button>
                        </div>
                        <ul class="right">
                            <li v-for="(item, index) in priceList" 
                                :key="index" 
                                @click="handleType('priceIndex', index)" 
                            >
                                <p :class="{'active': priceIndex === index}" >{{ item }}</p>
                            </li>
                            <li>
                                <input type="text" maxlength=7>
                                <div class="divide"></div>
                                <input type="text" maxlength=7>
                                <button type="button">筛选</button>
                            </li>
                        </ul>
                    </div>
                    <div class="layer more">
                        <div class="left">
                            <img src="./more.png">
                            <p>其他：</p>
                        </div>
                        <ul class="right">
                            <li class="item">
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
                            </li>
                            <li class="item">
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
                            </li>
                            <li class="item">
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
                            </li>
                            <li class="item">
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
                            </li>
                            <li class="reset">
                                <img src="./del.png">
                                <p>重置筛选</p>
                            </li>
                        </ul>
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
                            <p class="title">上传时间</p>
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
                    </div>
                    <div class="sort-right">
                        <img src="./shop1.png">
                        <img src="./shop2.png">
                        <img src="./shop3.png">
                    </div>
                </div>

                <!-- 商品 -->
                <div class="inner-layer goods-bg">
                    <div class="goods" 
                        v-for="(item, index) in goodsLists" 
                        :key="index" 
                    >
                        <!-- 左侧 -->
                        <div class="goods-left">
                            <div class="avatar">
                                <img :src="item.avatar">
                            </div>
                        </div>

                        <!-- 中 -->
                        <div class="goods-middle">
                            <div class="layer1" @click="gotoDetail(item.id)">
                                <img src="./tm.png">
                                <p class="title">{{ item.title }}</p>
                            </div>
                            <ul class="layer2">
                                <li>
                                    <span>商城类型：</span>
                                    <span class="value">{{ item.storeType || '*' }}</span>
                                </li>
                                <li>
                                    <span>纳税资质：</span>
                                    <span class="value">{{ item.taxIntelligence || '*' }}</span>
                                </li>
                                <li>
                                    <span>商标类型：</span>
                                    <span class="value">{{ item.trademarkCategory || '*' }}</span>
                                </li>
                            </ul>
                            <div class="layer3">
                                <p class="title">店铺标签：</p>
                                <ul>
                                    <li class="tag" :class="`tag${index}`" v-for="(tag, index) in item.tag" :key="index">{{ tag }}</li>
                                </ul>
                            </div>
                            <div class="layer4">
                                <p>一级类目：{{ item.firstCategory || '*' }}</p>
                                <p>二级类目：{{ item.secondCategory || '*' }}</p>
                            </div>
                        </div>

                        <!-- 右侧 -->
                        <div class="goods-right">
                            <div class="price-line">
                                <span class="symbol">￥</span>
                                <span class="price" :title="item.price">{{ item.price }}</span>
                                <span class="unit">万</span>
                                <img class="tag" src="./tag.png">
                            </div>
                            <button type="button">
                                <img src="./phone.png">
                                <span>联系客服</span>
                            </button>
                            <p class="number">编号：{{ item.productNo }}</p>
                            <p class="time">更新时间：{{ item.updateTime }}</p>
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

            <div class="inner-right">
                <p class="title">专注网店转让，助推企业成长</p>
                <div class="item">
                    <input type="text" placeholder="请填写店铺类型">
                </div>
                <div class="item">
                    <input type="text" placeholder="请输入您的手机号">
                </div>
                <div class="item">
                    <textarea placeholder="请简单描述您的需求"></textarea>
                </div>
                <button class="btn" type="button">
                    <img src="./search.png">
                    <span>免费看店</span>
                </button>
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
            goodsIndex: -1,
            goodsList: ['服饰', '鞋类箱包', '居家日用', '家装家具家纺', '化妆品', '母婴', '3C数码', '运动户外', '保健/医药', '食品', '乐器', '网游及QQ', '话费通信', '其他行业', '汽车及配件', '图书音像', '珠宝配饰', '服务大类', '家用电器'],
            shopIndex: -1,
            shopList: ['旗舰店', '专营店', '专卖店'],
            priceIndex: -1,
            priceList: ['5万以下', '5-10万', '10-30万', '30-50万', '50万以上'],
            // 其他
            regionIndex: -1,
            regionList: ['北京', '上海', '广州'],
            // 商品
            goodsLists: [
                {
                    avatar: require("./avatar.png"),
                    title: "华南车品外饰旗舰店 半新店 无扣分 动态全红 名字好听",
                    storeType: "旗舰店",
                    taxIntelligence: "一般纳税人",
                    trademarkCategory: "R商标",
                    tag: ["无贷款", "无扣分", "盈利中", "独家资源"],
                    firstCategory: "汽车用品/电子/清洗/改装",
                    secondCategory: "汽车用品/电子/清洗/改装",
                    price: "23.5",
                    productNo: "xd_20191024105751",
                    updateTime: "2019-10-28",
                },
                {
                    avatar: require("./avatar.png"),
                    title: "华南车品外饰旗舰店 半新店 无扣分 动态全红 名字好听",
                    storeType: "旗舰店",
                    taxIntelligence: "一般纳税人",
                    trademarkCategory: "R商标",
                    tag: ["无贷款", "无扣分", "盈利中", "独家资源"],
                    firstCategory: "汽车用品/电子/清洗/改装",
                    secondCategory: "汽车用品/电子/清洗/改装",
                    price: "23.5",
                    productNo: "xd_20191024105751",
                    updateTime: "2019-10-28",
                },
                {
                    avatar: require("./avatar.png"),
                    title: "华南车品外饰旗舰店 半新店 无扣分 动态全红 名字好听",
                    storeType: "旗舰店",
                    taxIntelligence: "一般纳税人",
                    trademarkCategory: "R商标",
                    tag: ["无贷款", "无扣分", "盈利中", "独家资源"],
                    firstCategory: "汽车用品/电子/清洗/改装",
                    secondCategory: "汽车用品/电子/清洗/改装",
                    price: "23.5",
                    productNo: "xd_20191024105751",
                    updateTime: "2019-10-28",
                }
            ]
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
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        box-sizing: border-box;

        .inner-layer {
            width: 930px;
            margin-bottom: 28px;
            background-color: #fff;
            border-radius: 5px;
        }

        // 筛选
        .filter {
            padding: 0 10px;

            .layer {
                font-size: 14px;
                display: flex;
                padding: 15px 10px;
                border-bottom: 1px solid #e1e1e1;

                .left {
                    width: 125px;
                    height: 26px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-right: 25px;

                    p {
                        font-size: 14px;
                        line-height: 26px;
                    }

                    // 按钮:全部
                    .all {
                        height: 26px;
                        font-size: 14px;
                        line-height: 26px;
                        color: #000;
                        padding: 0 12px;
                        background-color: transparent;
                        border: none;
                        border-radius: 20px;
                        cursor: pointer;

                        // 点击
                        &.all-actived {
                            color: #fff;
                            background-color: #f74549;
                        }
                    }
                }

                .right {
                    width: calc(100% - 125px);
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;

                    li {
                        width: 110px;
                        text-align: left;
                        margin-bottom: 6px;

                        p {
                            font-size: 14px;
                            line-height: 26px;
                            color: #000;
                            display: inline-block;
                            padding: 0 12px;
                            border-radius: 20px;
                            cursor: pointer;

                            &.active {
                                color: #fff;
                                background-color: #f74549;
                                
                            }
                        }

                        
                    }
                }
            }

            // 价格
            .price .right {
                li:last-child {
                    width: 190px;
                    display: flex;
                    align-items: center;

                    input {
                        width: 62px;
                        height: 26px;
                        text-indent: 10px;
                        border: 1px solid #949494;
                        border-radius: 4px;
                    }

                    .divide {
                        width: 10px;
                        height: 2px;
                        margin: 0 2px;
                        background-color: #949494;
                    }

                    button {
                        width: 40px;
                        line-height: 26px;
                        color: #fff;
                        margin-left: 10px;
                        background-color: #ff5256;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                }
            }

            .more {
                border-bottom: 0;

                .left {
                    width: 63px;
                }

                .right {
                    width: calc(100% - 65px);
                    position: relative;

                    .item {
                        width: 120px;
                        position: relative;
                        cursor: pointer;

                        span {
                            margin-right: 4px;
                        }

                        &:hover .dropdown {
                            max-height: 150px;
                        }

                        .dropdown {
                            max-height: 0;
                            width: 60%;
                            background-color: #fff;
                            position: absolute;
                            top: 20px;
                            left: -50%;
                            transform: translate(75%);
                            transition: .4s;
                            overflow: hidden;
                            z-index: 99;

                            li {
                                width: 100%;
                                font-size: 14px;
                                line-height: 30px;
                                text-align: center;
                                transition: .4s;

                                &:hover {
                                    color: #fff;
                                    background-color: #f74549;
                                }
                            }
                        }
                    }

                    .reset {
                        width: auto;
                        display: flex;
                        align-items: center;
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translate(0,-50%);

                        p {
                            padding: 0 2px;
                        }
                    }
                }
            }
        }

        // 排序
        .sort {
            height: 75px;
            display: flex;
            justify-content: space-between;
            padding: 0 90px 0 20px;

            .flex {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .sort-left {
                width: 380px;
                .flex();

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
            }

            .sort-right {
                width: 380px;
                .flex();
            }
        }

        // 商品
        .goods-bg {
            margin-bottom: 24px;
            background-color: #f2f2f2;

            .goods {
                display: flex;
                padding: 22px 10px 15px 15px;
                margin-bottom: 15px;
                background-color: #fff;
                transition: .4s;

                &:hover {
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                }

                .goods-left {
                    width: 110px;
                    display: flex;
                    align-items: center;
                }

                .goods-middle {
                    width: 470px;
                    margin: 0 52px 0 25px;

                    .layer1 {
                        display: flex;
                        align-items: center;
                        margin-bottom: 20px;

                        .title {
                            font-size: 18px;
                            font-weight: bold;
                            line-height: 18px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            color: #f66060;
                            margin-left: 5px;
                            cursor: pointer;
                        }
                    }

                    .layer2 {
                        display: flex;
                        margin-bottom: 20px;

                        li {
                            margin-right: 25px;

                            span {
                                font-size: 14px;
                                line-height: 14px;
                                color: #999999;
                                margin-bottom: 12px;
                            }

                            .value {
                                color: #333333;
                                margin-bottom: 0;
                            }
                        }
                    }

                    .layer3 {
                        display: flex;
                        margin-bottom: 20px;

                        .title {
                            font-size: 14px;
                            line-height: 20px;
                            color: #999999; 
                        }

                        ul {
                            display: flex;

                            .tag {
                                font-size: 14px;
                                line-height: 20px;
                                padding: 0 20px;
                                margin-right: 10px;
                                border-radius: 6px 6px 2px 2px;
                            }
                            .tag0 {
                                color: #f44b52;
                                background-color: #fff0f1;
                            }
                            .tag1 {
                                color: #ffaf63;
                                background-color: #fff7ec;
                            }
                            .tag2 {
                                color: #9dbce2;
                                background-color: #ecf2ff;
                            }.tag3 {
                                color: #ad8ec7;
                                background-color: #f8f0ff;
                            }
                        }
                    }

                    .layer4 {
                        p {
                            font-size: 14px;
                            line-height: 20px;
                            text-align: left;
                            color: #b8b8b8;
                        }
                    }
                }

                .goods-right {
                    width: 215px;
                    display: flex;
                    flex-wrap: wrap;
                    
                    .price-line {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                        position: relative;

                        span {
                            font-size: 14px;
                            line-height: 14px;
                            color: #eb3632;
                        }

                        .unit {
                            font-size: 18px;
                            line-height: 18px;
                        }

                        .tag {
                            display: inline-block;
                            position: absolute;
                            right: -5px;
                            top: 1px;
                        }

                        .price {
                            max-width: 105px;
                            font-size: 36px;
                            line-height: 32px;
                            display: inline-block;
                            margin: 0 3px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }

                    button {
                        width: 100%;
                        height: 42px;
                        background-color: #f74549;
                        border: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 5px;
                        cursor: pointer;

                        img {
                            margin-right: 12px;
                        }

                        span {
                            font-size: 14px;
                            color: #fff;
                        }
                    }

                    .number, .time {
                        font-size: 14px;
                        line-height: 0;
                        color: #efefef;
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
            width: 930px;
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
        
        //  右侧表单
        .inner-right {
            width: 250px;
            height: 428px;
            padding-top: 120px;
            background: #fff url("./right-bg.png") no-repeat 0 0;
            border-radius: 8px;

            .title {
                font-size: 16px;
                line-height: 16px;
                font-weight: bold;
                color: #f63e30;
                margin-bottom: 35px;
            }

            .item {
                width: 172px;
                margin: 0 auto 15px;

                input {
                    height: 42px;
                    width: 100%;
                    font-size: 14px;
                    line-height: 42px;
                    text-align: center;
                    color: #000;
                    border: 1px solid #e6e6e6;
                }

                textarea {
                    width: 100%;
                    height: 65px;
                    font-size: 14px;
                    line-height: 42px;
                    text-align: center;
                    border: 1px solid #e6e6e6;
                    resize: none;
                }
            }

            .btn {
                width: 172px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                margin: 0 auto;
                background-color: #fa3324;
                border-radius: 20px;
                border: none;
                cursor: pointer;

                span {
                    font-size: 14px;
                    margin-left: 10px;
                }
            }
        }
    }
</style>