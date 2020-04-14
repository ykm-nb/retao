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
        </div>

        <div class="amap-wrapper">
            <el-amap class="amap-box" :zoom="zoom" :plugin="plugin" :events="events" :center="markers[tagIndex].position" :vid="'amap-vue'" :zoomEnable="false">
                <el-amap-marker :position="markers[tagIndex].position" :visible="markers[tagIndex].visible"></el-amap-marker>

                <el-amap-info-window
                    :isCustom="true" 
                    :offset="[160, 200]" 
                    :showShadow="true" 
                    :position="windows[tagIndex].position"
                    :visible="windows[tagIndex].visible"
                    :content="windows[tagIndex].content">
                </el-amap-info-window>
            </el-amap>
        </div>
    </div>
</template>

<script>
import VueAMap from 'vue-amap';
VueAMap.initAMapApiLoader({
    key: 'e8496e8ac4b0f01100b98da5bde96597',
    plugin: ['AMap.ToolBar'],
        // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
})
// const exampleComponents = {
//     props: ['text'],
//     template: `<div>text from  parent: {{text}}</div>`
// }
export default {
    name: "city",
    data() {
        return {
            tagIndex: 0,
            bgLists: [],
            list: ["杭州", "北京", "上海", "深圳", "广州", "金华", "绍兴", "温州", "嘉兴"],
            serviceList: [
                {
                    name: "竺金晶",
                    info: "杭州公司6年从业经验",
                    imgUrl: require("./images/service8.png")
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

            address: null,
            zoom: 12,
            events: {
                init: (o) => {
                console.log(o.getCenter())
                // console.log(this.$refs.map.$$getInstance())
                o.getCity(result => {
                    // console.log(result)
                })
                },
                'moveend': () => {
                },
                'zoomchange': () => {
                },
                'click': (e) => {
                    console.log(e)
                }
            },
            plugin: [
                {
                    // 工具栏
                    pName: 'ToolBar',
                },
            ],
            markers: [
                {
                    position: [120.200748, 30.242131],
                    visible: true,
                },
                {
                    position: [116.397705, 39.914627],
                    visible: true,
                },
                {
                    position: [121.464176, 31.243009],
                    visible: true,
                },
                {
                    position: [114.075871, 22.555333],
                    visible: true,
                },
                {
                    position: [113.254643, 23.134959],
                    visible: true,
                },
                {
                    position: [119.643192, 29.099045],
                    visible: true,
                },
                {
                    position: [120.571537, 30.002188],
                    visible: true,
                },
                {
                    position: [120.664921, 28.008617],
                    visible: true,
                },
                {
                    position: [120.752811, 30.774553],
                    visible: true,
                }
            ],
            windows: [
                {
                    position: [120.200748, 30.242131],
                    content: `
                    <div class="service service1">
                        <p>
                            <span class="name">竺金晶</span>
                            <span class="info">杭州公司6年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                }, 
                {
                    position: [116.397705, 39.914627],
                    content: `
                    <div class="service service2">
                        <p>
                            <span class="name">赵峰</span>
                            <span class="info">北京公司5年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                },
                {
                    position: [121.464176, 31.243009],
                    content: `
                    <div class="service service3">
                        <p>
                            <span class="name">傅心玉</span>
                            <span class="info">上海公司3年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                },
                {
                    position: [114.075871, 22.555333],
                    content: `
                    <div class="service service4">
                        <p>
                            <span class="name">高奕豪</span>
                            <span class="info">深圳公司6年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                },
                {
                    position: [113.254643, 23.134959],
                    content: `
                    <div class="service service5">
                        <p>
                            <span class="name">郑梦琳</span>
                            <span class="info">广州公司5年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                },
                {
                    position: [119.643192, 29.099045],
                    content: `
                    <div class="service service6">
                        <p>
                            <span class="name">史媛</span>
                            <span class="info">金华公司3年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                },
                {
                    position: [120.571537, 30.002188],
                    content: `
                    <div class="service service7">
                        <p>
                            <span class="name">张凯莉</span>
                            <span class="info">绍兴公司4年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                },
                {
                    position: [120.664921, 28.008617],
                    content: `
                    <div class="service service8">
                        <p>
                            <span class="name">盛炎明</span>
                            <span class="info">温州公司5年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                },
                {
                    position: [120.752811, 30.774553],
                    content: `
                    <div class="service service9">
                        <p>
                            <span class="name">张杭峰</span>
                            <span class="info">嘉兴公司3年从业经验</span>
                        </p>
                        <div class="btn">
                            <button @click="consult" class="qq" type="button">QQ咨询</button>
                            <button class="wechat" type="button">微信咨询</button>
                        </div>
                    </div>`,
                    visible: true,
                },
            ],
        }
    },
    computed: {
        getBgUrl () {
            return `background: url('${this.serviceList[this.tagIndex].imgUrl}') 50% 112% no-repeat`
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

            this.currentWindow.visible = false;
            this.$nextTick(() => {
                this.currentWindow = this.windows[this.tagIndex];
                this.currentWindow.visible = true;
            });
        },
        consult () { // 联系客服
            window.open("https://url.cn/5FanN8i?_type=wpa&qidian=true");
        },
    },
    mounted() {
        this.currentWindow = this.windows[0];
    },
}
</script>

<style lang="less" scoped>
    .city-bg {
        height: 655px;
        position: relative;

        &::before {
            content: "";
            width: 100%;
            height: 30%;
            background: linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.01));
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
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
                z-index: 2;

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
                position: relative;
                z-index: 2;

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
        }

        // 地图
        /deep/ .amap-wrapper {
            width: 100%;
            height: 655px;
            position: absolute;
            left: 0;
            top: 0;

            .service {
                width: 280px;
                height: 350px;
                padding-top: 255px;
                overflow: hidden;
                background-color: red;

                p {
                    color: #fff;
                    height: 22px;
                    display: block;
                    padding-bottom: 10px;
                    margin: 0 10px 12px;
                    box-sizing: initial;
                    border-bottom: 1px solid #fff;

                    .name {
                        font-size: 22px;
                        line-height: 22px;
                        display: inline-block;
                        margin-right: 10px;
                    }

                    .info {
                        font-size: 14px;
                        line-height: 14px;
                        display: inline-block;
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

            .service1 {
                background: url('./images/service8.png') 50% 0 no-repeat;
                background-size: cover;
            }
            .service2 {
                background: url('./images/service2.png') 50% 0 no-repeat;
                background-size: cover;
            }
            .service3 {
                background: url('./images/service3.png') 50% 0 no-repeat;
                background-size: cover;
            }
            .service4 {
                background: url('./images/service4.png') 50% 0 no-repeat;
                background-size: cover;
            }
            .service5 {
                background: url('./images/service5.png') 50% 0 no-repeat;
                background-size: cover;
            }
            .service6 {
                background: url('./images/service6.png') 50% 0 no-repeat;
                background-size: cover;
            }
            .service7 {
                background: url('./images/service7.png') 50% 0 no-repeat;
                background-size: cover;
            }
            .service8 {
                background: url('./images/service8.png') 50% 0 no-repeat;
                background-size: cover;
            }
            .service9 {
                background: url('./images/service9.png') 50% 0 no-repeat;
                background-size: cover;
            }
        }
    }
</style>