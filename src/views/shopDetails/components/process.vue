<template>
    <div class="process">
        
        <p class="process-title">网店购买流程</p>

        <ul>
            <template v-for="(item, index) in processList">
                <li>
                    <img :src="item.url">
                    <p class="title" :class="{'cur-title': processIndex === index}">{{ item.title }}</p>
                    <p class="info">{{ item.info }}</p>
                </li>
                <div class="arrow" v-if="index != 5">
                    <img src="./images/arrow.png">
                </div>
            </template>
        </ul>

    </div>
</template>

<script>
export default {
    name: "process",
    props: {
        processIndex: {
            type: Number
        }
    },
    data() {
        return {
            processList: [
                {
                    url: require('./images/shop1.png'),
                    title: '选择网店',
                    info: '选择合适自己的网店'
                },
                {
                    url: require('./images/shop2.png'),
                    title: '支付网店定金',
                    info: '选择自己的支付方式'
                },
                {
                    url: require('./images/shop3.png'),
                    title: '核对信息',
                    info: '签署协议并核对信息'
                },
                {
                    url: require('./images/shop4.png'),
                    title: '签署购点合同',
                    info: '交接网店资料并过户公司'
                },
                {
                    url: require('./images/shop5.png'),
                    title: '交接及过户',
                    info: '交接网店资料并过户公司'
                },
                {
                    url: require('./images/shop6.png'),
                    title: '购买成功',
                    info: '购买成功预祝生意兴隆'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .process {
        padding: 40px 0 30px 48px;
        margin: 15px 0 10px;
        background-color: #fff;
        border-radius: 4px;

        .process-title {
            font-size: 22px;
            line-height: 22px;
            font-weight: bold;
            text-align: left;
            color: #333333;
            padding-bottom: 15px;
            margin: 0 40px 30px 0;
            border-bottom: 1px solid #e1e1e1;
            position: relative;

            &:after {
                content: "";
                width: 130px;
                height: 4px;
                background-color: #fc324c;
                position: absolute;
                left: 0;
                bottom: 0;
                transform: translate(0,50%);
            }
        }

        ul {
            display: flex;
            justify-content: space-between;
            padding-right: 28px;

            li {
                width: 165px;
                padding: 24px 0;
                border-radius: 6px;
                border: 1px dashed #e1e1e1;

                .title {
                    font-size: 18px;
                    line-height: 18px;
                    font-weight: bold;
                    color: #333333;
                    margin: 10px 0;

                    &.cur-title {
                        color: #fc324c;
                    }
                }

                .info {
                    font-size: 12px;
                    line-height: 12px;
                    color: #666;
                }
            }

            .arrow {
                display: flex;
                align-items: center;
            }
        }
    }
</style>