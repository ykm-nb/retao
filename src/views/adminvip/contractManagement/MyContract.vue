<template>
    <!-- 我的合同 -->
    <div class="my-contract">
        
        <div v-if="contractDatas.length" class="common-main">
            <!-- 列表 -->
            <div class="common-list">
                <Table border :columns="contractColumns" :data="contractDatas"></Table>
            </div>
            <!-- 分页器 -->
            <div class="common-page">
                <Page :total="pageForm.total" :current="pageForm.pageNum" :page-size="pageForm.pageSize" @on-change='getMyContractDatas' />
            </div>
        </div>

        <!-- 暂无数据 -->
        <div v-else class="common-nodatas">暂无数据</div>

        <!-- 编辑 -->
        <Edit ref="edit"></Edit>

        <!-- 撤销 -->
        <Modal
            v-model="showRemovePop"
            title="撤销我的合同"
            @on-ok="remove"
            ok-text="撤销">
            <p>确认撤销当前合同吗？</p>
        </Modal>

    </div>
</template>

<script>
import api from "@/api";
import Edit from "@/views/adminvip/contractManagement/edit.vue";
export default {
    name: "mycontract",
    components: {
        Edit
    },
    data() {
        return {
            pageForm: {
                total: 1,
                pageNum: 0,
                pageSize: 10
            },
            showRemovePop: false,
            removeId: 0,
            contractColumns: [
                {
                    title: '合同标题',
                    key: 'productNo',
                    align: "center"
                },
                {
                    title: '合同编号',
                    key: 'productNo',
                    align: "center"
                },
                {
                    title: '创建时间',
                    key: 'buyerPhone',
                    align: "center"
                },
                {
                    title: '是否签署',
                    key: 'sellerPhone',
                    align: "center"
                },
                {
                    title: '签署时间',
                    key: 'sellerPhone',
                    align: "center"
                },
                {
                    title: '操作',
                    key: 'name6',
                    align: "center",
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.update(params.row)
                                    }
                                }
                            }, '详情'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.showRemovePop = true;
                                        this.removeId = params.row.id;
                                    }
                                }
                            }, '撤销')
                        ]);
                    }
                }
            ],
            contractDatas: []
        }
    },
    methods: {
        // 获取我的合同数据
        getMyContractDatas(page) {
            this.$store.state.spinShow = true; // 开启加载动画
            this.pageForm.pageNum = page || 1;

            api.axs("post", "/contract/queryMyContractList", this.pageForm).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.pageForm.total = data.data.total;
                    this.contractDatas = data.data.list;
                      // 关闭加载动画
                } else {
                    this.$Message.error(data.remark);
                      // 关闭加载动画
                }
            });
        },
        update(obj) {
            var _obj = JSON.stringify(obj),
                obj = JSON.parse(_obj);
            this.$refs.edit.isShow = true;
            this.$refs.edit.form = obj;
        },
        remove() {
            api.axs("post", "/contract/remove", {id: this.removeId}).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.$Message.success({content: "撤销成功~"});
                    this.getMyContractDatas(1);
                } else {
                    this.$Message.error(data.remark);
                }
            });
        }
    },
    mounted() {
        this.getMyContractDatas(1);
    }
}
</script>

<style lang="less" scoped>
    .my-contract {
        /deep/ table .ivu-table-cell{
            font-size: 14px;
        }
    }
</style>

<style lang="less" scoped>
    /deep/ .ivu-modal .ivu-btn-primary {
        background-color: #ed4014;
        border: 1px solid #ed4014;
    }
</style>