<template>
    <!-- 出售的产品 -->
    <div class="products-for-sale">

        <div v-if="productDatas.length" class="common-main">
            <!-- 列表 -->
            <div class="common-list">
                <Table border :columns="productColumns" :data="productDatas"></Table>
            </div>
            <!-- 分页器 -->
            <div class="common-page">
                <Page :total="pageForm.total" :current="pageForm.pageNum" :page-size="pageForm.pageSize" @on-change='getMyProductDatas' />
            </div>
        </div>

        <!-- 暂无数据 -->
        <div v-else class="common-nodatas">暂无数据</div>

        <!-- 编辑 -->
        <Edit ref="edit"></Edit>
        
        <!-- 释放 -->
        <Modal
            v-model="showRemovePop"
            title="释放我的产品"
            @on-ok="remove"
            ok-text="释放">
            <p>确认释放当前产品吗？</p>
        </Modal>
    </div>
</template>

<script>
import api from "@/api";
import Edit from "@/views/adminvip/dealManagement/edit.vue";
export default {
    name: "productsforsale",
    components: {
        Edit
    },
    data() {
        return {
            pageForm: {
                total: 0,
                pageNum: 1,
                pageSize: 10
            },
            showRemovePop: false,
            removeId: 0,
            productColumns: [
                {
                    title: '售出总金额',
                    key: 'name1',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '预期资金收入',
                    key: 'name2',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '售出总数',
                    key: 'name3',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '代售个数',
                    key: 'name4',
                    // width: 100,
                    align: "center"
                }
            ],
            productDatas: [
                {
                    name1: "500",
                    name2: "1000",
                    name3: "10",
                    name4: "2"
                },
                {
                    name1: "500",
                    name2: "1000",
                    name3: "10",
                    name4: "2"
                },
                {
                    name1: "500",
                    name2: "1000",
                    name3: "10",
                    name4: "2"
                }
            ]
        }
    },
    methods: {
        // 获取我的产品数据
        getMyProductDatas(page) {
            this.$store.state.spinShow = true; // 开启加载动画
            this.pageForm.pageNum = page || 1;

            api.axs("post", "/tmStore/queryMyProducts", this.pageForm).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.pageForm.total = data.data.total;
                    // this.productDatas = data.data.list;
                    
                } else {
                    this.$Message.error(data.remark);
                }
            });
        },
        update(obj) {
            var _obj = JSON.stringify(obj),
                // eslint-disable-next-line no-redeclare
                obj = JSON.parse(_obj);
            this.$refs.edit.isShow = true;
            this.$refs.edit.form = obj;
        },
        remove() {
            api.axs("post", "/tmStore/release", {id: this.removeId}).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.$Message.success({content: "释放成功~"});
                    this.getMyProductDatas(1);
                } else {
                    this.$Message.error(data.remark);
                }
            });
        }
    },
    mounted() {
        this.getMyProductDatas(1);
    }
}
</script>

<style lang="less" scoped>
    .products-for-sale {
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