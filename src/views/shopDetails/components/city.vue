<template>
    <!-- 购买流程 -->
    <div class="inner-bg city-bg" :class="((tagIndex + 1) % 2) === 0 ? 'city-bg1' : 'city-bg2'">
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
            <div class="service">
                <p>
                    <span class="name">张文豪</span>
                    <span class="info">北京公司3年从业经验</span>
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
            list: ["北京", "上海", "广州", "南京", "深圳", "厦门", "上海", "广州", "南京", "深圳"]
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

        &.city-bg1 {
            background: url('./images/city-bg.png') no-repeat center;
        }
        &.city-bg2 {
            background: url('./images/city-bg1.png') no-repeat center;
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
                background: url("./images/city-service.png") no-repeat center;
                overflow: hidden;
                position: absolute;
                top: 59%;
                left: 72%;
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