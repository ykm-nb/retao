<template>
    <!-- 充值记录 -->
    <div class="recharge-record">
        
        <div class="record-top">
            <p class="title">充值记录</p>
        </div>
        <div class="record-bottom">
            <div v-if="recordDatas.length" class="common-main">
                <!-- 列表 -->
                <div class="common-list">
                    <Table border :columns="recordColumns" :data="recordDatas"></Table>
                </div>
                <!-- 分页器 -->
                <div class="common-page">
                    <Page :total="pageForm.total" :current="pageForm.pageNum" :page-size="pageForm.pageSize" @on-change='getMyProductDatas' />
                </div>
            </div>

            <!-- 暂无数据 -->
            <div v-else class="common-nodatas">
                <span v-if='loading'>加载中...</span>
                <span v-else>暂无数据</span>
            </div>
        </div>

    </div>
</template>

<script>
import api from "@/api";
export default {
    name: "changepassword",
    data() {
        return {
            loading: true,
            form: {
                name1: '',
                name2: '',
                name3: ''
            },
            pageForm: {
                total: 0,
                pageNum: 1,
                pageSize: 10
            },
            recordColumns: [
                {
                    title: '充值金额',
                    key: 'amount',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '充值方式',
                    key: 'typename',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '充值时间',
                    key: 'createTime',
                    // width: 100,
                    align: "center"
                }
            ],
            recordDatas: []
        }
    },
    methods: {
        getMyProductDatas() {
            api.axs('post', "/payRecord/queryPayRecordPages", {pageNum: 20}).then(({ data }) => {
                if(data.code === "SUCCESS") {
                    this.recordDatas = data.data.list
                    this.recordDatas.forEach((v,i)=>{
                        if(v.type == 1) this.$set(this.recordDatas[i], 'typename', '支付宝')
                        else this.$set(this.recordDatas[i], 'typename', '线下转账')
                    })
                    this.loading = false
                }
            });
        },
    },
    mounted() {
         this.getMyProductDatas()
    }
}
</script>

<style lang="less" scoped>
    .recharge-record {
        .record-top {
            padding: 0 10px 25px;
            border-bottom: 1px solid #ddd;

            .title {
                font-size: 18px;
                line-height: 18px;
                font-weight: bold;
            }

            .recharge-record {
                font-size: 14px;
                color: #ff6700;
            }
        }

        .record-content {
            padding: 15px 0;
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid #ddd;

            b {
                color: #ff6700;
            }

            .content-left {
                .title {
                    font-size: 16px;
                    line-height: 16px;
                    margin-bottom: 20px;
                }

                .money {
                    font-size: 18px;

                    b {
                        font-size: 36px;
                        line-height: 36px;
                        font-weight: bold;
                    }
                }
            }

            ul {
                width: 400px;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;

                .item {
                    text-align: center;
                    padding: 0 50px;

                    .title {
                        font-size: 14px;
                        line-height: 14px;
                        margin-bottom: 8px;
                    }

                    .money {
                        font-size: 16px;
                        line-height: 16px;
                    }
                }

                .item1 {
                    margin-bottom: 12px;
                }
            }

            .content-right {
                width: 120px;

                button {
                    display: block;
                    margin-bottom: 10px;
                }
            }
        }

        .record-bottom {
            padding-top: 20px;
        }
    }
</style>