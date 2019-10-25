<template>
    <div class="help">
        
        <p class="help-title">帮助中心</p>

        <ul>
            <li v-for="(item, index) in queList" :key="index">
                <p class="question">
                    <img src="./images/help1.png">
                    <span>{{ item.question }}</span>
                </p>
                <p class="answer">
                    <img src="./images/help2.png">
                    <span>{{ item.answer }}</span>
                    <span><详情></span>
                </p>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "help",
    data() {
        return {
            queList: [
                {
                    question: '天猫商城转让要多久？买家准备什么？',
                    answer: '亲，您好，公司过户整个过程所需时间快的话十五天就可以完成了，在易店无忧在易店无忧'
                },
                {
                    question: '天猫商城转让要多久？买家准备什么？',
                    answer: '亲，您好，公司过户整个过程所需时间快的话十五天就可以完成了，在易店无忧在易店无忧'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .help {
        padding: 32px 40px 35px 50px;
        margin: 10px 0 15px;
        background-color: #fff;
        border-radius: 4px;

        .help-title {
            font-size: 22px;
            line-height: 22px;
            font-weight: bold;
            text-align: left;
            color: #333333;
            padding-bottom: 15px;
            margin-bottom: 38px;
            border-bottom: 1px solid #e1e1e1;
            position: relative;

            &:after {
                content: "";
                width: 88px;
                height: 4px;
                background-color: #fc324c;
                position: absolute;
                left: 0;
                bottom: 0;
                transform: translate(0,50%);
            }
        }

        ul {
            li {
                margin-bottom: 40px;

                p {
                    display: flex;
                    cursor: pointer;

                    img {
                        margin-right: 10px;
                    }

                    span {
                        color: #333;
                    }
                }

                .question {
                    margin-bottom: 12px;

                    span {
                        font-size: 16px;
                        line-height: 16px;
                        font-weight: bold;
                    }
                }

                .answer span {
                    max-width: 505px;
                    font-size: 14px;
                    line-height: 14px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    display: inline-block;
                    overflow: hidden;
                }
            }

            li:last-child {
                margin: 0;
            }
        }
    }
</style>