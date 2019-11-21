<template>
    <!-- 提现记录 -->
    <div class="with-drawal-record">
        
        <div class="record-top">
            <p class="title">提现记录</p>
        </div>
        <!-- <div class="record-content">
            <div class="content-left">
                <p class="title">账户总额</p>
                <p class="money"><b>0</b>元</p>
            </div>
            <ul>
                <div class="item item1">
                    <p class="title">可用资金</p>
                    <p class="money"><b>0</b>元</p>
                </div>
                <div class="item item1">
                    <p class="title">已充值金额</p>
                    <p class="money"><b>0</b>元</p>
                </div>
                <div class="item">
                    <p class="title">冻结资金</p>
                    <p class="money"><b>0</b>元</p>
                </div>
                <div class="item">
                    <p class="title">已提现总额</p>
                    <p class="money"><b>0</b>元</p>
                </div>
            </ul>
            <div class="content-right">
                <Button long type="primary">我要充值</Button>
                <Button long>我要提现</Button>
            </div>
        </div> -->
        <div class="record-bottom">
            <div v-if="recordDatas.length" class="common-main">
                <!-- 列表 -->
                <div class="common-list">
                    <Table border :columns="recordColumns" :data="recordDatas"></Table>
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
                    title: '提现时间',
                    key: 'name1',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '提现金额',
                    key: 'name2',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '处理人',
                    key: 'name3',
                    // width: 100,
                    align: "center"
                }
            ],
            recordDatas: [
                {
                    name1: "500",
                    name2: "1000",
                    name3: "10",
                    name4: "2",
                    name5: "good"
                },
                {
                    name1: "500",
                    name2: "1000",
                    name3: "10",
                    name4: "2",
                    name5: "good"
                },
                {
                    name1: "500",
                    name2: "1000",
                    name3: "10",
                    name4: "2",
                    name5: "good"
                }
            ]
        }
    },
    methods: {
        getMyProductDatas() {

        },
        handleSubmit() {
            var arr = [];
            for(var i in this.form) {
                arr.push(this.form[i]);
            };
            var result1 = arr.every((item, index) => {
                return item != "";
            });
            var result2 = (this.form.name2 == this.form.name3) ? true : false;
            
            if(result1 && result2) {
                // api.axs("post", "/contract/saveOrUpdate", this.form).then(({ data })=>{
                //     if (data.code === "SUCCESS") {
                        this.$Message.success({content: "合同上传成功~"});
                //         for(var i in this.form) this.form[i] = "";
                //     } else {
                //         this.$Message.warning(data.remark);
                //     };
                // });
            } else if(!result1) {
                this.$Message.warning({content: "未全部填写，有遗漏~"});
            } else if(!result2) {
                this.$Message.warning({content: "新密码不统一"});
            }
        }
    },
    mounted() {
         
    }
}
</script>

<style lang="less" scoped>
    .with-drawal-record {
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