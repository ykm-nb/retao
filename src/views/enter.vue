<template>
    <div class="enter-box">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <!-- banner -->
        <div class="inner-bg banner-bg"></div>

        <div class="inner-bg layer-bg" @click="showDropdown = false">
            <div class="inner">
                <!-- 店铺类型 -->
                <div class="shop">
                    <div class="title-box">
                        <p class="title">店铺类型</p>
                    </div>
                    <div class="content">
                        <input v-model="selectedText" type="text">
                        <img @click.stop="showDropdown = !showDropdown" class="xia" src="@/assets/images/xia.png">
                        <ul class="dropdown" :class="{'dropdown-show': showDropdown}">
                            <li @click="selectedText = '旗舰店'">旗舰店</li>
                            <li @click="selectedText = '专卖店'">专卖店</li>
                            <li @click="selectedText = '专营店'">专营店</li>
                        </ul>
                    </div>
                </div>

                <!-- 选择商品类目 -->
                <div class="good">
                    <div class="title-box">
                        <p class="title">选择商品类目</p>
                    </div>
                    <div class="content">
                        <ul class="left">
                            <li @click="goodIndex = index" :class="{'actived': goodIndex === index}"
                                v-for="(item, index) in goodList" :key="index">
                                <p>{{ item.title }}</p>
                                <img src="@/assets/images/right.png">
                            </li>
                            <div class="item-bottom">
                                <img src="@/assets/images/good-top.png">
                            </div>
                        </ul>
                        <ul class="middle">
                            <li class="item" v-show="goodIndex === index1" v-for="(good, index1) in goodList" :key="index1">
                                <div :class="['item-content', {'actived': item.isCheck}]" 
                                    v-for="(item, index2) in good.content" :key="index2" 
                                    @click="checkThis(index1, index2)"
                                >
                                    <div class="radio"></div>
                                    <p :title="item.text">{{ item.text }}</p>
                                </div>
                            </li>
                        </ul>
                        <div class="right">
                            <p class="title">已选类目</p>
                            <ul>
                                <li class="item" v-for="(item, index) in checkList" :key="index">
                                    <p class="item-title">{{ item.title }}：</p>
                                    <p class="item-text" :title="item.obj.text">{{ item.obj.text }}</p>
                                </li>
                            </ul>
                            <button class="clear" @click="clear" type="button">全部清除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 选择服务类型 -->
        <div class="inner-bg service-bg">
            <div class="inner service">
                <div class="title-box">
                    <p class="title">选择服务类型</p>
                </div>
                <ul class="content">
                    <li class="item" :class="`item${index1 + 1} ${serviceIndex===index1?'item-hover':''}`" 
                        v-for="(item, index1) in serviceList" :key="index1"
                        @mouseover="serviceIndex=index1" @mouseout="serviceIndex=-1"
                    >
                        <p class="title">{{ item.title }}</p>
                        <ul class="tag">
                            <li v-for="(tag, index2) in item.tags" :key="index2">
                                <img src="@/assets/images/gou.png">
                                <span>{{ tag }}</span>
                            </li>
                            <li>
                                <button @click="consult" class="btn" v-show="serviceIndex === index1" type="button">立即入驻</button>
                            </li>
                        </ul>
                        <div class="item-border"></div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 仟呗入驻教程 -->
        <div class="inner-bg enter-bg">
            <div class="inner enter">
                <div class="crr cr1"></div>
                <div class="crr cr2"></div>
                <div class="crr cr3"></div>
                <div class="crr cr4"></div>
                <div class="crr cr5"></div>
                <div class="crr cr6"></div>
                <div class="title-box">
                    <p class="title">仟呗入驻教程</p>
                </div>
                <div class="content">
                    <p class="title">专业一站式入驻服务</p>
                    <p class="title">品牌保证，快速开启电商梦想</p>
                </div>
            </div>
        </div>

        <img src="/static/xx.jpg" alt="">

        <!-- 底部 -->
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "enter",
    components: {
        Header, Nav,
        Footer
    },
    data() {
        return {
            // 店铺类型
            selectedText: '旗舰店',
            showDropdown: false, // 显示下拉
            // 商品类目
            goodIndex: 0,
            goodList: [
                {
                    title: "服饰鞋包",
                    content: [
                        {
                            isCheck: false,
                            text: "男装"
                        },
                        {
                            isCheck: false,
                            text: "流行男鞋"
                        },
                        {
                            isCheck: false,
                            text: "女装/女士精品"
                        },
                        {
                            isCheck: false,
                            text: "女鞋"
                        },
                        {
                            isCheck: false,
                            text: "女士内衣/男士内衣/家居服"
                        },
                        {
                            isCheck: false,
                            text: "箱包皮具/热销女包/男包"
                        },
                        {
                            isCheck: false,
                            text: "服饰配件/皮带/帽子/围巾"
                        },
                    ]
                },
                {
                    title: "美容护理",
                    content: [
                        {
                            isCheck: false,
                            text: "彩妆/香水/美妆工具"
                        },
                        {
                            isCheck: false,
                            text: "美容护肤/美体/精油"
                        },
                        {
                            isCheck: false,
                            text: "美发护发/假发"
                        },
                        {
                            isCheck: false,
                            text: "美容美体仪器"
                        },
                    ]
                },
                {
                    title: "数码电器",
                    content: [
                        {
                            isCheck: false,
                            text: "办公设备/耗材/相关服务"
                        },
                        {
                            isCheck: false,
                            text: "3C数码配件"
                        },
                        {
                            isCheck: false,
                            text: "DIY电脑"
                        },
                        {
                            isCheck: false,
                            text: "品牌台机/品牌一体机/服务器"
                        },
                        {
                            isCheck: false,
                            text: "电子元器件市场"
                        },
                        {
                            isCheck: false,
                            text: "数码相机/单反相机/摄像机"
                        },
                        {
                            isCheck: false,
                            text: "闪存卡/U盘/存储/移动硬盘"
                        },
                        {
                            isCheck: false,
                            text: "智能设备"
                        },
                        {
                            isCheck: false,
                            text: "电脑硬件/显示器/电脑周边"
                        },
                        {
                            isCheck: false,
                            text: "电玩/配件/游戏攻略"
                        },
                        {
                            isCheck: false,
                            text: "平板电脑/MID"
                        },
                        {
                            isCheck: false,
                            text: "MP3/MP4/iPod/录音笔"
                        },
                        {
                            isCheck: false,
                            text: "笔记本电脑"
                        },
                        {
                            isCheck: false,
                            text: "文具电教/文化用品/行政商务用品"
                        },
                        {
                            isCheck: false,
                            text: "包装"
                        },
                        {
                            isCheck: false,
                            text: "国货精品数码"
                        },
                    ]
                },
                {
                    title: "运动户外",
                    content: [
                        {
                            isCheck: false,
                            text: "户外/登山/野营/旅行用品"
                        },
                        {
                            isCheck: false,
                            text: "电动车/配件/交通工具"
                        },
                        {
                            isCheck: false,
                            text: "运动鞋new"
                        },
                        {
                            isCheck: false,
                            text: "运动/瑜伽/健身/球迷用品"
                        },
                        {
                            isCheck: false,
                            text: "运动包/户外包/配件"
                        },
                        {
                            isCheck: false,
                            text: "运动服/休闲服装"
                        },
                        {
                            isCheck: false,
                            text: "自行车/骑行装备/零配件"
                        },
                    ]
                },
                {
                    title: "家装家饰",
                    content: [
                        {
                            isCheck: false,
                            text: "家居饰品"
                        },
                        {
                            isCheck: false,
                            text: "电子/电工"
                        },
                        {
                            isCheck: false,
                            text: "鲜花速递/花卉仿真/绿植园艺"
                        },
                        {
                            isCheck: false,
                            text: "床上用品"
                        },
                        {
                            isCheck: false,
                            text: "特色手工艺"
                        },
                        {
                            isCheck: false,
                            text: "商业/办公家具"
                        },
                        {
                            isCheck: false,
                            text: "住宅家具"
                        },
                        {
                            isCheck: false,
                            text: "五金/工具"
                        },
                        {
                            isCheck: false,
                            text: "居家布艺"
                        },
                        {
                            isCheck: false,
                            text: "全屋定制"
                        },
                        {
                            isCheck: false,
                            text: "基础建材"
                        },
                        {
                            isCheck: false,
                            text: "家装主材"
                        },
                        {
                            isCheck: false,
                            text: "家装灯饰光源"
                        },
                    ]
                },
                {
                    title: "汽车配件",
                    content: [
                        {
                            isCheck: false,
                            text: "汽车用品/电子/清洗/改装"
                        },
                        {
                            isCheck: false,
                            text: "车用清洗用品/清洗工具"
                        },
                        {
                            isCheck: false,
                            text: "汽车用品/内饰品"
                        },
                        {
                            isCheck: false,
                            text: "汽车儿童安全座椅"
                        },
                        {
                            isCheck: false,
                            text: "汽车外饰品/加装装潢/防护"
                        },
                        {
                            isCheck: false,
                            text: "汽车影音/车用电子/电器"
                        },
                        {
                            isCheck: false,
                            text: "汽车GPS导航仪及配件"
                        },
                        {
                            isCheck: false,
                            text: "汽车美容/保养/维修"
                        },
                        {
                            isCheck: false,
                            text: "摩托车/装备/配件"
                        },
                        {
                            isCheck: false,
                            text: "整车(经销商)"
                        },
                    ]
                },
                {
                    title: "书籍音像",
                    content: [
                        {
                            isCheck: false,
                            text: "书籍/杂志/报纸"
                        },
                        {
                            isCheck: false,
                            text: "音乐/影视/明星/音像"
                        },
                        {
                            isCheck: false,
                            text: "古董/邮币/字画/收藏"
                        },
                    ]
                },
                {
                    title: "手机",
                    content: [
                        {
                            isCheck: false,
                            text: "合约机"
                        },
                    ]
                },
                {
                    title: "母婴",
                    content: [
                        {
                            isCheck: false,
                            text: "奶粉辅食营养品零食"
                        },
                        {
                            isCheck: false,
                            text: "玩具/童车/益智/积木/模型"
                        },
                        {
                            isCheck: false,
                            text: "童装/婴儿装/亲子装"
                        },
                        {
                            isCheck: false,
                            text: "童鞋/婴儿鞋/亲子鞋"
                        },
                        {
                            isCheck: false,
                            text: "尿片/洗护/喂哺/推车床"
                        },
                        {
                            isCheck: false,
                            text: "模玩/动漫/周边/cos/桌游"
                        },
                        {
                            isCheck: false,
                            text: "孕妇装/孕产妇用品/营养"
                        },
                    ]
                },
                {
                    title: "生活服务",
                    content: [
                        {
                            isCheck: false,
                            text: "餐饮美食卡券"
                        },
                        {
                            isCheck: false,
                            text: "室内设计师"
                        },
                        {
                            isCheck: false,
                            text: "电子凭证"
                        },
                        {
                            isCheck: false,
                            text: "婚庆/摄像/摄像服务"
                        },
                        {
                            isCheck: false,
                            text: "景点门票/演艺演出/周边游"
                        },
                        {
                            isCheck: false,
                            text: "个性定制/设计服务DIY"
                        },
                        {
                            isCheck: false,
                            text: "电影/演出/体育赛事"
                        },
                        {
                            isCheck: false,
                            text: "医疗及健康服务"
                        },
                        {
                            isCheck: false,
                            text: "网店/网络服务/软件"
                        },
                        {
                            isCheck: false,
                            text: "消费卡"
                        },
                        {
                            isCheck: false,
                            text: "度假线路/签证送关/旅游服务"
                        },
                        {
                            isCheck: false,
                            text: "外卖/外送/订餐"
                        },
                        {
                            isCheck: false,
                            text: "本地化生活服务"
                        },
                        {
                            isCheck: false,
                            text: "生活娱乐充值"
                        },
                        {
                            isCheck: false,
                            text: "装修设计/施工/监理"
                        },
                        {
                            isCheck: false,
                            text: "特价酒店"
                        },
                        {
                            isCheck: false,
                            text: "网络店铺代金/优惠券"
                        },
                        {
                            isCheck: false,
                            text: "交通票"
                        },
                        {
                            isCheck: false,
                            text: "购物提货券"
                        },
                        {
                            isCheck: false,
                            text: "超市卡/商场购物卡"
                        },
                        {
                            isCheck: false,
                            text: "教育特训"
                        },
                        {
                            isCheck: false,
                            text: "特价酒店/特色客栈/公寓旅馆"
                        },
                        {
                            isCheck: false,
                            text: "房产/租房/新房/二手房/委托服务"
                        },
                    ]
                },
                {
                    title: "食品/保健",
                    content: [
                        {
                            isCheck: false,
                            text: "零食/坚果/特产"
                        },
                        {
                            isCheck: false,
                            text: "酒类"
                        },
                        {
                            isCheck: false,
                            text: "保健食品/膳食营养补充食品"
                        },
                        {
                            isCheck: false,
                            text: "粮油米面/南北干货/调味品"
                        },
                        {
                            isCheck: false,
                            text: "茶"
                        },
                        {
                            isCheck: false,
                            text: "隐形眼镜/护理液"
                        },
                        {
                            isCheck: false,
                            text: "咖啡/麦片/冲饮"
                        },
                        {
                            isCheck: false,
                            text: "OTC药品/医疗器械/计生用品"
                        },
                        {
                            isCheck: false,
                            text: "传统滋补营养品"
                        },
                        {
                            isCheck: false,
                            text: "水产肉类/新鲜蔬果/熟食"
                        },
                        {
                            isCheck: false,
                            text: "成人用品/情趣用品"
                        },
                        {
                            isCheck: false,
                            text: "精致中药材"
                        },
                    ]
                },
                {
                    title: "家用电器",
                    content: [
                        {
                            isCheck: false,
                            text: "影音电器"
                        },
                        {
                            isCheck: false,
                            text: "大家电"
                        },
                        {
                            isCheck: false,
                            text: "厨房电器"
                        },
                        {
                            isCheck: false,
                            text: "家庭保健"
                        },
                        {
                            isCheck: false,
                            text: "生活电器"
                        },
                        {
                            isCheck: false,
                            text: "个人护理/保健/按摩器材"
                        },
                    ]
                },
                {
                    title: "游戏/话费",
                    content: [
                        {
                            isCheck: false,
                            text: "网游装备/游戏币/账号/代练"
                        },
                        {
                            isCheck: false,
                            text: "手机号码/套餐/增值业务"
                        },
                        {
                            isCheck: false,
                            text: "网络游戏点卡"
                        },
                        {
                            isCheck: false,
                            text: "游戏物品交易平台"
                        },
                        {
                            isCheck: false,
                            text: "腾讯QQ专区"
                        },
                        {
                            isCheck: false,
                            text: "移动/联通/电信充值中心"
                        },
                    ]
                },
                {
                    title: "家具用品",
                    content: [
                        {
                            isCheck: false,
                            text: "居家日用"
                        },
                        {
                            isCheck: false,
                            text: "洗护清洁剂/卫生巾/纸/香薰"
                        },
                        {
                            isCheck: false,
                            text: "宠物/宠物食品及用品"
                        },
                        {
                            isCheck: false,
                            text: "节庆用品/礼品"
                        },
                        {
                            isCheck: false,
                            text: "厨房/烹饪用具"
                        },
                        {
                            isCheck: false,
                            text: "餐饮具"
                        },
                        {
                            isCheck: false,
                            text: "家庭/个人清洁工具"
                        },
                        {
                            isCheck: false,
                            text: "收纳整理"
                        },
                    ]
                },
                {
                    title: "珠宝配饰",
                    content: [
                        {
                            isCheck: false,
                            text: "ZIPPO/瑞士军刀/眼镜"
                        },
                        {
                            isCheck: false,
                            text: "饰品/流行首饰/时尚饰品新"
                        },
                        {
                            isCheck: false,
                            text: "珠宝/钻石/翡翠/黄金"
                        },
                        {
                            isCheck: false,
                            text: "手表"
                        },
                    ]
                },
                {
                    title: "乐器",
                    content: [
                        {
                            isCheck: false,
                            text: "乐器/吉他/钢琴/配件"
                        },
                    ]
                },
            ],
            checkList: [], // 已选类目列表
            map: new Map(),
            // 服务类型
            serviceIndex: 0,
            serviceList: [
                {
                    title: "白银入驻服务",
                    tags: ["便捷易用，简单高效", "递交迅速，反馈及时", "全流程掌握，随时查看进度"]
                },
                {
                    title: "黄金入驻服务",
                    tags: ["便捷易用，简单高效", "递交迅速，反馈及时", "全流程掌握，随时查看进度"]
                },
                {
                    title: "铂金入驻服务",
                    tags: ["便捷易用，简单高效", "递交迅速，反馈及时", "全流程掌握，随时查看进度"]
                },
                {
                    title: "钻石入驻服务",
                    tags: ["便捷易用，简单高效", "递交迅速，反馈及时", "全流程掌握，随时查看进度"]
                }
            ],
        }
    },
    methods: {
        checkThis (index1, index2) {
            const obj = this.goodList[index1].content[index2], map = this.map;
            obj.isCheck = !obj.isCheck;

            if (obj.isCheck) {
                map.set(index1 + '' + index2, index1 + '' + index2)
                this.checkList.push({
                    id: index1 + '' + index2,
                    title: this.goodList[index1].title,
                    obj
                })
            } else {
                map.delete(index1 + '' + index2)
                this.checkList.forEach((item, index) => {
                    if (item.id === index1 + '' + index2) this.checkList.splice(index, 1)
                })
            }
        },
        clear () {
            this.checkList.forEach((item, index) => {
                this.checkList[index].obj.isCheck = false;
            })
            this.checkList = []
        },
        consult () { // 联系客服
            window.open("https://url.cn/5iD2Ua8?_type=wpa&qidian=true");
        },
    }
}
</script>

<style lang="less" scoped>
    .enter-box {
        .title-box {
            .title {
                font-size: 30px;
                line-height: 30px;
                font-weight: bold;
                text-align: center;
                color: #333;
                background: url("../assets/images/title-bg.png") no-repeat center;
            }
        }

        .banner-bg {
            height: 600px;
            background: url("../assets/images/enter-banner1.png") no-repeat center;
        }

        .layer-bg {
            height: 1095px;
            background: url("../assets/images/enter-banner2.png") no-repeat center;

            .shop {
                padding: 60px 0;

                .content {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin: 45px 290px 0;
                    position: relative;

                    input {
                        width: 100%;
                        height: 60px;
                        font-size: 16px;
                        text-indent: 55px;
                        color: #333;
                        background-color: transparent;
                        border: 1px solid #ff969e;
                    }

                    .xia {
                        cursor: pointer;
                        position: absolute;
                        right: 45px;
                        top: 50%;
                        transform: translate(0,-50%);
                    }

                    .dropdown {
                        width: 100%;
                        display: none;
                        background-color: #fff;
                        box-shadow: 0 3px 6px 0 rgba(202, 202, 202, 0.8);
                        position: absolute;
                        left: 0;
                        top: 100%;

                        &:hover {
                            display: block;
                        }

                        li {
                            font-size: 16px;
                            line-height: 40px;
                            transition: .4s;
                            cursor: pointer;

                            &:hover {
                                color: red;
                            }
                        }
                    }
                    .dropdown-show {
                        display: block;
                    }
                }
            }

            .good {
                .content {
                    display: flex;
                    margin-top: 55px;
                    box-shadow: 0 3px 6px 0 rgba(202, 202, 202, 0.8);

                    .left {
                        width: 160px;
                        color: #fff;
                        padding: 18px 0 0 0;
                        background-color: #ffc9cd;

                        li {
                            height: 30px;
                            font-size: 16px;
                            line-height: 30px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 30px 0 20px;
                            cursor: pointer;
                            margin-bottom: 10px;
                            transition: .4s;

                            &.actived {
                                background-color: #ff2352;
                            }

                            &:hover {
                                background-color: #ff2352;
                            }
                        }
                        
                        .item-bottom {
                            height: 32px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-top: 1px solid #fff;

                            img {
                                cursor: pointer;
                            }
                        }
                    }

                    .middle {
                        width: calc((100% - 160px) * 0.75);
                        padding-top: 26px;
                        background-color: #fff;

                        .item {
                            display: flex;
                            flex-wrap:wrap;
                            
                            .item-content {
                                width: calc(100% / 3);
                                display: flex;
                                align-items: center;
                                padding-left: 20px;
                                margin-bottom: 65px;
                                cursor: pointer;

                                .radio {
                                    width: 18px;
                                    height: 18px;
                                    margin-right: 20px;
                                    background-color: #fff;
                                    border: 1px solid #d0d0d0;
                                    border-radius: 100%;
                                    position: relative;
                                }

                                p {
                                    width: calc(100% - 30px);
                                    font-size: 16px;
                                    line-height: 16px;
                                    text-align: left;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    color: #333;
                                }

                                // 选中状态的类名
                                &.actived {
                                    .radio {
                                        &:after {
                                            content: "";
                                            width: 10px;
                                            height: 10px;
                                            background-color: #ff0036;
                                            border-radius: 50%;
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            transform: translate(-50%,-50%);
                                        }
                                    }

                                    p {
                                        color: #ff0036;
                                    }
                                }
                            }
                        }
                    }

                    .right {
                        width: calc((100% - 160px) * 0.25);
                        background-color: #fff;
                        border-left: 1px solid #333;

                        .title {
                            font-size: 16px;
                            line-height: 60px;
                            color: #333;
                            border-bottom: 1px solid #333;
                        }

                        ul {
                            height: calc(100% - 120px);
                            padding: 10px;

                            .item {
                                line-height: 14px;
                                display: flex;
                                margin-bottom: 10px;

                                .item-title {
                                    font-size: 14px;
                                    font-weight: bold;
                                    line-height: 14px;
                                    white-space: nowrap;
                                    color: #333;
                                    margin-right: 5px;
                                }

                                .item-text {
                                    width: calc(100% - 75px);
                                    font-size: 14px;
                                    line-height: 14px;
                                    text-align: left;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    color: #333;
                                }
                            }
                        }

                        .clear {
                            height: 60px;
                            width: 100%;
                            font-size: 16px;
                            line-height: 60px;
                            color: #333;
                            background-color: transparent;
                            border: none;
                            border-top: 1px solid #333;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .service-bg {
            background-color: #fff4f4;

            .service {
                padding: 85px 0 40px;

                .content {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 55px;

                    .item {
                        width: 290px;
                        height: 378px;
                        text-align: center;
                        padding: 0 35px;
                        transition: .5s;
                        position: relative;

                        .title {
                            height: 50%;
                            font-size: 24px;
                            color: #fff;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: .4s;
                        }

                        .tag {
                            width: 100%;
                            height: 50%;
                            padding: 35px 0 0 50px;
                            background-color: #fff;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            transition: .4s;

                            li {
                                font-size: 14px;
                                line-height: 14px;
                                color: #666;
                                display: flex;
                                align-items: center;
                                margin-bottom: 20px;

                                img {
                                    margin-right: 10px;
                                }
                            }

                            .btn {
                                width: 160px;
                                height: 40px;
                                font-size: 16px;
                                line-height: 40px;
                                background-color: transparent;
                                cursor: pointer;
                                z-index: 2;
                            }
                        }

                        .item-border {
                            width: calc(100% - 40px);
                            height: calc(100% - 40px);
                            background-color: transparent;
                            border: 2px solid #f1f1f1;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                        }
                    }

                    // hover
                    .item-hover {
                        box-shadow: 0 5px 10px rgba(0,0,0,.1);

                        .title {
                            height: 35%;
                        }

                        .tag {
                            height: 65%;
                        }
                    }

                    .item1 {
                        background: url("../assets/images/service1.png") no-repeat center;

                        .btn {
                            color: #ff0b3f;
                            border: 1px solid #ff0b3f;
                        }
                    }
                    .item2 {
                        background: url("../assets/images/service2.png") no-repeat center;

                        .btn {
                            color: #ffac5f;
                            border: 1px solid #ffac5f;
                        }
                    }
                    .item3 {
                        background: url("../assets/images/service3.png") no-repeat center;

                        .btn {
                            color: #f9d138;
                            border: 1px solid #f9d138;
                        }
                    }
                    .item4 {
                        background: url("../assets/images/service4.png") no-repeat center;

                        .btn {
                            color: #71d9e3;
                            border: 1px solid #71d9e3;
                        }
                    }
                }
            }
        }

        .enter-bg {
            height: 955px;
            background: #fff7f7 url("../assets/images/enter-bg1.png") no-repeat 45% -22%;

            .enter {
                position: relative;
                height: 100%;
                padding: 160px 0 0 0;
                background: url("../assets/images/enter-bg2.png") no-repeat 50% 85%;

                .crr {
                    position: absolute;
                    border-radius: 50%;
                    width: 146px;
                    height: 146px;
                }
                .cr1 {
                    top: 542px;
                    left: -2px;
                    &:hover {
                        box-shadow: 0 0 50px #be2121;
                    }
                }
                .cr2 {
                    top: 379px;
                    left: 211px;
                    &:hover {
                        box-shadow: 0 0 50px #da7f36;
                    }
                }
                .cr3 {
                    top: 234px;
                    left: 424px;
                    &:hover {
                        box-shadow: 0 0 50px #c7c42d;
                    }
                }
                .cr4 {
                    top: 215px;
                    left: 638px;
                    &:hover {
                        box-shadow: 0 0 50px #be2121;
                    }
                }
                .cr5 {
                    top: 368px;
                    left: 851px;
                    &:hover {
                        box-shadow: 0 0 50px #da7f36;
                    }
                }
                .cr6 {
                    top: 552px;
                    left: 1064px;
                    &:hover {
                        box-shadow: 0 0 50px #c7c42d;
                    }
                }

                .content {
                    height: 100%;
                    text-align: center;
                    padding-top: 600px;

                    .title {
                        font-size: 30px;
                        font-weight: bold;
                        line-height: 60px;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>