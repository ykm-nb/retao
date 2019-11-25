<template>
    <!-- 提现记录 -->
    <div class="signature">
        
        <div class="record-top">
            <p class="title">签署列表</p>
        </div>
        <div class="record-bottom">
            <div v-if="signDatas.length" class="common-main">
                <!-- 列表 -->
                <div class="common-list">
                    <Table border :columns="signColumns" :data="signDatas"></Table>
                </div>
                <!-- 分页器 -->
                <!-- <div class="common-page">
                    <Page :total="pageForm.total" :current="pageForm.pageNum" :page-size="pageForm.pageSize" @on-change='getMyProductDatas' />
                </div> -->
            </div>

            <!-- 暂无数据 -->
            <div v-else class="common-nodatas">暂无数据</div>
        </div>

    </div>
</template>

<script>
import api from "@/api";
export default {
    name: "changepassword",
    data() {
        return {
            signDatas: [],
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
            signColumns: [
                {
                    title: '合同名称',
                    key: 'fileName',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '合同ID',
                    key: 'fileId',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '操作',
                    // width: 100,
                    align: "center",
                    render: (h, params) => {
                        return h('a', {
                            attrs: {
                                href: params.row.fileUrl
                            }
                        }, "下载")
                    }
                }
            ]
        }
    },
    methods: {
        getSignDatas() {
            api.axs("post", "/user/queryFlowPages",{pageSize: 30}).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.signDatas = data.data
                } else {
                    this.$Message.warning(data.remark);
                }
            });
        }
    },
    mounted() {
         this.getSignDatas()
    }
}
</script>

<style lang="less" scoped>
    .signature {
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