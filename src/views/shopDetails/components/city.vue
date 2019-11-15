<template>
    <!-- 购买流程 -->
    <div class="inner-bg city-bg" :class="`city-bg${tagIndex + 1}`">
        <div class="inner city">
            <div class="title-box">
                <p class="title">陪同过户城市</p>
                <p class="info">city</p>
            </div>

            <ul class="city-tag">
                <li class="prev" @click="switchIndex('prev')">
                    <img src="./images/prev.png">
                </li>
                <li class="item" :class="{'actived':index===tagIndex}" 
                    v-for="(item, index) in list" :key="index" 
                    @click="tagIndex = index"
                >{{ item }}</li>
                <li class="next" @click="switchIndex('next')">
                    <img src="./images/next.png">
                </li>
            </ul>

            <img class="position" src="./images/city-pos.png">
            <div class="service" :style="getBgUrl">
                <p>
                    <span class="name">{{ serviceList[tagIndex].name }}</span>
                    <span class="info">{{ serviceList[tagIndex].info }}</span>
                </p>
                <div class="btn">
                    <button class="qq" type="button">QQ咨询</button>
                    <button class="wechat" type="button">微信咨询</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "process",
    data() {
        return {
            tagIndex: 0,
            bgLists: [],
            list: ["杭州", "北京", "上海", "深圳", "广州", "金华", "绍兴", "温州", "嘉兴"],
            // list: ["杭州", "北京", "上海", "深圳", "广州", "金华", "绍兴", "温州", "嘉兴", "湖州", "苏州", "南京", "无锡", "连云港", "徐州", "石家庄", "天津", "青岛", "济南", "长春", "哈尔滨", "西宁", "成都", "重庆", "长沙", "拉萨", "乌鲁木齐", "沈阳", "贵阳", "昆明", "泉州", "福州", "厦门", "东莞", "珠海", "南宁", "海口", "南昌", "宁波", "大连", "郑州"]
            serviceList: [
                {
                    name: "竺金晶",
                    info: "杭州公司6年从业经验",
                    imgUrl: require("./images/service1.png")
                },
                {
                    name: "张文豪",
                    info: "北京公司5年从业经验",
                    imgUrl: require("./images/service2.png")
                },
                {
                    name: "张文豪",
                    info: "上海公司3年从业经验",
                    imgUrl: require("./images/service3.png")
                },
                {
                    name: "张文豪",
                    info: "深圳公司6年从业经验",
                    imgUrl: require("./images/service4.png")
                },
                {
                    name: "张文豪",
                    info: "广州公司5年从业经验",
                    imgUrl: require("./images/service5.png")
                },
                {
                    name: "张文豪",
                    info: "金华公司3年从业经验",
                    imgUrl: require("./images/service6.png")
                },
                {
                    name: "张文豪",
                    info: "绍兴公司4年从业经验",
                    imgUrl: require("./images/service7.png")
                },
                {
                    name: "张文豪",
                    info: "温州公司5年从业经验",
                    imgUrl: require("./images/service8.png")
                },
                {
                    name: "张文豪",
                    info: "嘉兴公司3年从业经验",
                    imgUrl: require("./images/service9.png")
                }
            ],
        }
    },
    computed: {
        getBgUrl () {
            return `background: url('${this.serviceList[this.tagIndex].imgUrl}') no-repeat 50% -25px`
        }
    },
    methods: {
        switchIndex (value) {
            if (value === 'prev') {
                this.tagIndex -= 1
                if(this.tagIndex < 0) this.tagIndex = this.list.length - 1
            } else {
                this.tagIndex += 1
                if(this.tagIndex === this.list.length) this.tagIndex = 0
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .city-bg {
        height: 655px;
        position: relative;

        &::before {
            content: "";
            width: 100%;
            height: 40%;
            background: linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.01));
            position: absolute;
            left: 0;
            top: 0;
        }

        &.city-bg1 {
            background: url('./images/city-bg1.png') no-repeat center;
        }
        &.city-bg2 {
            background: url('./images/city-bg2.png') no-repeat center;
        }
        &.city-bg3 {
            background: url('./images/city-bg3.png') no-repeat center;
        }
        &.city-bg4 {
            background: url('./images/city-bg4.png') no-repeat center;
        }
        &.city-bg5 {
            background: url('./images/city-bg5.png') no-repeat center;
        }
        &.city-bg6 {
            background: url('./images/city-bg6.png') no-repeat center;
        }
        &.city-bg7 {
            background: url('./images/city-bg7.png') no-repeat center;
        }
        &.city-bg8 {
            background: url('./images/city-bg8.png') no-repeat center;
        }
        &.city-bg9 {
            background: url('./images/city-bg9.png') no-repeat center;
        }

        .city {
            height: 100%;
            padding-top: 45px;
            position: relative;

            .title-box {
                height: 80px;
                text-align: center;
                padding-bottom: 35px;
                position: relative;

                .title {
                    font-size: 30px;
                    line-height: 30px;
                    font-weight: bold;
                    color: #fff;
                    margin-bottom: 8px;
                    background: url("./images/title-bg2.png") no-repeat center;
                }

                .info {
                    font-size: 16px;
                    line-height: 16px;
                    color: #fff;
                }
            }

            .city-tag {
                display: flex;
                justify-content: space-between;

                li {
                    height: 48px;
                    font-size: 22px;
                    line-height: 48px;
                    color: #fff;
                    padding: 0 20px;
                    background-color: rgba(0,0,0,.3);
                    border-radius: 30px;
                    cursor: pointer;

                    &.actived {
                        background-color: #ff0c31;
                    }
                }

                .prev, .next {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            .position {
                position: absolute;
                top: 55%;
                left: 70%;
            }

            .service {
                width: 280px;
                height: 350px;
                padding-top: 230px;
                overflow: hidden;
                position: absolute;
                top: 58%;
                left: 73%;
                transform: translate(0,-50%);

                p {
                    color: #fff;
                    padding-bottom: 10px;
                    margin: 0 10px 12px;
                    border-bottom: 1px solid #fff;

                    .name {
                        font-size: 22px;
                        line-height: 22px;
                        margin-right: 10px;
                    }

                    .info {
                        font-size: 14px;
                        line-height: 14px;
                    }
                }

                .btn {
                    display: flex;
                    justify-content: center;

                    button {
                        width: 100px;
                        height: 30px;
                        font-size: 12px;
                        line-height: 30px;
                        color: #fff;
                        border: none;
                        border-radius: 30px;
                        cursor: pointer;
                    }

                    .qq {
                        margin-right: 12px;
                        background-color: #00c1ff;
                    }

                    .wechat {
                        background-color: #00c337;
                    }
                }
            }
        }
    }
</style>