<template>
    <div class="inner-bg" style="background-color: #f1f1f1">
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
                                <p :class="{'active': goodsIndex === index}">{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="layer shopType">
                        <div class="left">
                            <img src="./type.png">
                            <p>类型：</p>
                            <button @click="sliderIndex = 0, form.secondCategory = '', getGoodsList()" 
                                    class="all" :class="{'all-actived': sliderIndex === 0}" type="button">全部</button>
                        </div>
                        <div class="right">
                            <div class="right-left">
                                <ul class="slider">
                                    <button class="btn-left" :style="{'left': (sliderIndex * 42) + 'px'}">{{ sliderList[sliderIndex] }}</button>
                                    <li @click="handleType('sliderIndex', index)" v-for="(item, index) in sliderList" :key="index"></li>
                                </ul>
                                <img src="./type2.png">
                            </div>
                            <button @click="getGoodsList(1)" class="sure" type="button">确认</button>
                        </div>
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
                                <input type="text" v-model="form.startPrice" maxlength=7>
                                <div class="divide"></div>
                                <input type="text" v-model="form.endPrice" maxlength=7>
                                <button type="button" @click="getGoodsList(1)">筛选</button>
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
                                <span>{{ regionList[regionIndex] || '地域选择' }}</span>
                                <i class="iconfont iconxia"></i>
                                <ul class="dropdown">
                                    <li v-for="(item, index) in regionList" :key="index" 
                                        @click="handleMore('regionIndex', index, 'area')"
                                    >
                                        {{ item || '不限' }}
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <span>{{ brandList[brandIndex] || '商标分类' }}</span>
                                <i class="iconfont iconxia"></i>
                                <ul class="trademark">
                                    <li v-for="(item, index) in brandList" :key="index" 
                                        @click="handleMore('brandIndex', index, 'trademarkCategory')"
                                    >
                                        <span class="key">{{ item ? `${item}类` : '不限' }}</span>
                                        <span class="value">{{ item || '不限' }}</span>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <span>{{ dealList[dealIndex] || '当面交易' }}</span>
                                <i class="iconfont iconxia"></i>
                                <ul class="dropdown">
                                    <li v-for="(item, index) in dealList" :key="index" 
                                        @click="handleMore('dealIndex', index, 'isEscort')"
                                    >
                                        {{ item || '不限' }}
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <span>{{ pointList[pointIndex]===1?'扣分情况':'无扣分' }}</span>
                                <i class="iconfont iconxia"></i>
                                <ul class="dropdown">
                                    <li v-for="(item, index) in pointList" :key="index" 
                                        @click="handleMore('pointIndex', index, 'deductPoints')"
                                    >
                                        {{ item===1?'不限':'无扣分' }}
                                    </li>
                                </ul>
                            </li>
                            <li class="reset" @click="handleReset(), getGoodsList()">
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
                                <i @click="form.defaultOrderBy = 1, getGoodsList()" 
                                    class="goup" :class="{'active': form.defaultOrderBy === 1}"
                                ></i>
                                <i @click="form.defaultOrderBy = 2, getGoodsList()" 
                                    class="drop" :class="{'active': form.defaultOrderBy === 2}"
                                ></i>
                            </p>
                        </div>
                        <div class="item">
                            <p class="title">出售价格</p>
                            <p class="btn">
                                <i @click="form.priceOrderBy = 1, getGoodsList()" 
                                    class="goup" :class="{'active': form.priceOrderBy === 1}"
                                ></i>
                                <i @click="form.priceOrderBy = 2, getGoodsList()" 
                                    class="drop" :class="{'active': form.priceOrderBy === 2}"
                                ></i>
                            </p>
                        </div>
                        <div class="item">
                            <p class="title">上传时间</p>
                            <p class="btn">
                                <i @click="form.followTimeOrderBy = 1, getGoodsList()" 
                                    class="goup" :class="{'active': form.followTimeOrderBy === 1}"
                                ></i>
                                <i @click="form.followTimeOrderBy = 2, getGoodsList()" 
                                    class="drop" :class="{'active': form.followTimeOrderBy === 2}"
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
                            <img :src="item.mainProductUrl">
                            <p v-if="item.mainProductUrl === null">暂无图片</p>
                            <!-- 主营字段 -->
                            <div class="goods-tag">{{ item.mainProductName }}</div>
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
                                    <span class="value">{{ item.storeType==1?'专营店':'' || item.storeType==2?'旗舰店':'' || item.storeType==3?'专卖店':'' }}</span>
                                </li>
                                <li>
                                    <span>纳税资质：</span>
                                    <span class="value">{{ item.taxIntelligence==0?'一般纳税人':'' || item.taxIntelligence==1?'小规模纳税人':'' }}</span>
                                </li>
                                <li>
                                    <span>商标类型：</span>
                                    <span class="value">{{ item.trademarkCategory || '*' }}</span>
                                </li>
                            </ul>
                            <div class="layer3">
                                <p class="title">店铺标签：</p>
                                <ul v-if="item.storeMark">
                                    <li v-for="(tag, index) in item.storeMark.split(',')" :key="index" 
                                        class="tag" :class="`tag${index}`">{{ tag }}</li>
                                </ul>
                            </div>
                            <div class="layer4">
                                <p :title="item.firstCategory">一级类目：{{ item.firstCategory || '*' }}</p>
                                <p :title="item.secondCategory">二级类目：{{ item.secondCategory || '*' }}</p>
                            </div>
                        </div>

                        <!-- 右侧 -->
                        <div class="goods-right">
                            <div class="price-line">
                                <span class="symbol">￥</span>
                                <span class="price" :title="item.price">{{ item.price }}</span>
                                <span class="unit">万</span>
                                <div class="tag" v-if="item.storeProperties">
                                    <p>{{ item.storeProperties==1?'特价':'' || item.storeProperties==2?'优质':'' || item.storeProperties==3?'稀缺':'' || item.storeProperties>=4?'普通':'' }}</p>
                                </div>
                            </div>
                            <button type="button">
                                <img src="./phone.png">
                                <span>联系客服</span>
                            </button>
                            <p class="number" :title="item.productNo">编号：{{ item.productNo }}</p>
                            <p class="time" :title="item.updateTime">更新时间：{{ item.updateTime }}</p>
                        </div>
                    </div>
                    <div v-show="goodsLists.length === 0" class="no-data">暂无数据</div>
                </div>

                <!-- 分页 -->
                <div class="page">
                    <Page 
                        :current="pageForm.pageNum" 
                        :total="pageForm.total" 
                        show-elevator 
                        @on-change="getGoodsList"
                    />
                    <p class="msg">
                        <span>当前第<b>{{ pageForm.pageNum }}</b>页</span>
                        <span class="divide">/</span>
                        <span>共{{ Math.ceil(pageForm.total / 10) }}页</span>
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
    name: "goods",
    data() {
        return {
            storeName: '',
            // 分页
            pageForm: {
                pageNum: 1,
                total: 1
            },
            form: {
                mainProducts: '', // 主营
                secondCategory: '',
                // 价格
                startPrice: '',
                endPrice: '',
                area: '',
                trademarkCategory: '',
                isEscort: '',
                deductPoints: '',
                // 排序
                defaultOrderBy: 2,
                priceOrderBy: 2,
                followTimeOrderBy: 2
            },
            goodsIndex: -1,
            goodsList: ['服饰', '鞋类箱包', '居家日用', '家装家具家纺', '化妆品', '母婴', '3C数码', '运动户外', '保健/医药', '食品', '乐器', '网游及QQ', '话费通信', '其他行业', '汽车及配件', '图书音像', '珠宝配饰', '服务大类', '家用电器'],
            sliderList: ['1钻', '2钻', '3钻', '4钻', '5钻', '1皇冠', '2皇冠', '3皇冠', '4皇冠', '5皇冠', '1金冠', '2金冠', '3金冠', '4金冠', '5金冠'],
            sliderIndex: 0,
            priceIndex: -1,
            priceList: ['5万以下', '5-10万', '10-30万', '30-50万', '50万以上'],
            // === 其他 ===
            // 地域
            regionIndex: 0,
            regionList: ['', '华东', '华南', '华北', '东北', '华中', '西南', '西北'],
            // 商标
            brandIndex: 0,
            brandList: [
                {
                    key: '不限',
                    value: '',
                    text: ''
                },
                {
                    key: '01类',
                    value: '1',
                    text: '化工原料'
                },
                {
                    key: '02类',
                    value: '2',
                    text: '颜料油漆'
                },
                {
                    key: '03类',
                    value: '3',
                    text: '日化用品'
                },
                {
                    key: '04类',
                    value: '4',
                    text: '燃料油脂'
                },
                {
                    key: '05类',
                    value: '5',
                    text: ''
                },
            ],
            // 当面交易
            dealIndex: 0,
            dealList: ['', '是', '否'],
            // 扣分情况
            pointIndex: 0,
            pointList: [1, 2],
            // 商品
            goodsLists: []
        }
    },
    methods: {
        getGoodsList(pageNum = 1) { // 获取列表数据
            let obj = ls.session.get("rtSearch"), // 暂时没用到
                pageForm = this.pageForm, form = this.form;

            pageForm.pageNum = pageNum;
            
            api.axs('post', "/tmStore/queryCommonStorePages", {...form, ...pageForm, storeName: this.storeName}).then(({ data }) => {
                if(data.code === "SUCCESS") {
                    pageForm.total = data.data.total;
                    this.goodsLists = data.data.list;

                    this.goodsLists.forEach((item, index) => {
                        if(item.pictureUrl != null) {
                            this.goodsLists[index].pictureUrl = (item.pictureUrl.split(','))[0]
                        }
                        if(item.pictureUrl != null && item.pictureUrl.length > 70) {
                            this.goodsLists[index].pictureUrl = (item.pictureUrl.split('png'))[0] + 'png'
                        }
                    })
                }
            });
        },
        handleReset () { // 重新筛选
            const form = this.form;
            for(let i in form) {
                form[i] = '';
                form['defaultOrderBy'] = form['priceOrderBy'] = form['followTimeOrderBy'] = 2;
                this.goodsIndex = this.priceIndex = -1;
                this.sliderIndex = this.regionIndex = this.brandIndex = this.dealIndex = this.pointIndex = 0;
            }
        },
        handleType (type, index) { // 点击 类目、类型、价格
            const form = this.form;

            this[type] = index;
            switch (type) {
                case 'goodsIndex': (index === -1) ?
                    form.mainProducts = '' : form.mainProducts = this.goodsList[index];
                    break;
                case 'sliderIndex': form.secondCategory = this.sliderList[index]
                    break;
                case 'priceIndex': 
                    if(index === -1) form.startPrice = '', form.endPrice = ''
                    if(index === 0) form.startPrice = '', form.endPrice = 5
                    if(index === 1) form.startPrice = 5, form.endPrice = 10
                    if(index === 2) form.startPrice = 10, form.endPrice = 30
                    if(index === 3) form.startPrice = 30, form.endPrice = 50
                    if(index === 4) form.startPrice = 50, form.endPrice = ''
                    break;
            }

            this.getGoodsList();
        },
        handleMore (type, index, key) { // 点击 其他
            const form = this.form;

            this[type] = index;
            switch (type) {
                case 'regionIndex': form[key] = this.regionList[index]
                    break;
                case 'brandIndex': form[key] = this.brandList[index]
                    break;
                case 'dealIndex': form[key] = this.dealList[index]
                    break;
                case 'pointIndex': form[key] = this.pointList[index]
                    break;
            }

            this.getGoodsList();
        },
        gotoDetail(id) { // 跳转详情
            this.$router.push({ 
                path: 'shopdetails',
                query: { 
                    id: parseInt(id),
                    pageNum: this.pageForm.pageNum
                }
            })
        }
    },
    created() {
        const tbList = ls.session("tbList"),
              rtSearch = ls.session("rtSearch");

        this.storeName = rtSearch.storeName;

        if(tbList != null) Object.assign(this.form, tbList)

        this.getGoodsList()
    }
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
            position: sticky;
            top: 0;
            left: 0;
            z-index: 99;

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

            // 类型
            .shopType .right {
                padding-top: 10px;
                position: relative;

                .right-left {
                    width: 630px;

                    .slider {
                        width: 100%;
                        height: 5px;
                        display: flex;
                        justify-content: space-around;
                        margin-bottom: 15px;
                        background-color: #f74549;
                        position: relative;

                        button {
                            height: 20px;
                            line-height: 20px;
                            white-space: nowrap;
                            color: #fff;
                            padding: 0 10px;
                            background-color: #f74549;
                            border-radius: 20px;
                            border: none;
                            position: absolute;
                            top: 50%;
                            transform: translate(0,-50%);
                            cursor: pointer;
                        }
                        
                        li {
                            width: 30px;
                            height: 20px;
                            background-color: transparent;
                            transform: translate(0,100%);
                            cursor: pointer;
                        }
                    }
                }

                .sure {
                    height: 20px;
                    line-height: 20px;
                    color: #fff;
                    padding: 0 10px;
                    margin-top: 3px;
                    background-color: #f74549;
                    border-radius: 20px;
                    border: none;
                    position: absolute;
                    right: 0;
                    top: 10px;
                    transform: translate(0,-50%);
                    cursor: pointer;
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
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        cursor: pointer;

                        span {
                            margin-right: 4px;
                        }

                        &:hover .dropdown {
                            max-height: 550px;
                        }

                        // 下拉
                        .dropdown {
                            max-height: 0;
                            width: 80%;
                            background-color: #fff;
                            position: absolute;
                            top: 25px;
                            left: 50%;
                            transform: translate(-50%);
                            transition: 1s;
                            overflow: hidden;
                            z-index: 99;

                            li {
                                width: 100%;
                                height: 30px;
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
                        // 商标下拉
                        .trademark {
                            max-height: 500px;
                            width: 700px;
                            display: flex;
                            flex-wrap: wrap;
                            padding: 10px 0;
                            background-color: #fff;
                            box-shadow: 0 3px 6px 0 rgba(202, 202, 202, 0.8);
                            position: absolute;
                            top: 20px;
                            left: 18%;
                            transition: 1s;
                            overflow: hidden;
                            z-index: 99;

                            li {
                                width: 100px;
                                height: 30px;
                                font-size: 14px;
                                line-height: 30px;
                                transition: .4s;

                                .key {
                                    width: 40%;
                                    text-align: right;
                                    color: #c1c1c1;
                                    display: inline-block;
                                }
                                .value {
                                    color: #333;
                                }

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
                    height: 164px;
                    display: flex;
                    align-items: center;
                    position: relative;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    p {
                        font-size: 12px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                    }

                    .goods-tag {
                        font-size: 14px;
                        line-height: 20px;
                        white-space: nowrap;
                        color: #fff;
                        padding: 0 6px;
                        background-color: #f84549;
                        border-radius: 0 0 10px 10px;
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translate(-50%,-22px);
                    }
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
                        overflow: hidden;

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
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
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
                            width: 41px;
                            height: 27px;
                            background: url("./tag.png") no-repeat center;
                            position: absolute;
                            right: -5px;
                            top: 1px;

                            p {
                                font-size: 14px;
                                line-height: 25px;
                                text-align: center;
                                color: #fff;
                            }
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
                        width: 100%;
                        font-size: 14px;
                        line-height: 14px;
                        text-align: left;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        color: #d3d3d3;
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
                font-size: 12px;
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
            position: sticky;
            top: 0;
            right: 0;
            z-index: 99;

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