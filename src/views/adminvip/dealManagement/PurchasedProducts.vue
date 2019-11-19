<template>
    <!-- 购买的产品 -->
    <div class="purchased-products">
        
        <div v-if="productDatas.length" class="common-main">
            <!-- 列表 -->
            <div class="common-list">
                <Table border :columns="productColumns" :data="productDatas"></Table>
            </div>
            <!-- 分页器 -->
            <div class="common-page">
                <Page :total="pageForm.total" :current="pageForm.pageNum" :page-size=10 />
            </div>
        </div>

        <!-- 暂无数据 -->
        <div v-else class="common-nodatas">暂无数据</div>

    </div>
</template>

<script>
import api from "@/api";
export default {
    name: "purchasedproducts",
    data() {
        return {
            pageForm: {
                total: 0,
                pageNum: 1,
                pageSize: 10
            },
            productColumns: [
                {
                    title: '购买总金额',
                    key: 'name1',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '产品总估值',
                    key: 'name2',
                    // width: 100,
                    align: "center"
                },
                {
                    title: '购买总数',
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
        // 获取所有产品数据
        getAllProductDatas(page) {
            this.$store.state.spinShow = true;
            this.pageForm.pageNum = page || 1;

            api.axs("post", "/tmStore/queryAllProducts", {}).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.pageForm.total = data.data.navigatePages;
                    this.productDatas = data.data.list;
                     
                } else {
                    this.$Message.warning(data.remark);
                     
                };
            });
        }
    },
    mounted() {
        this.getAllProductDatas(1);
    }
}
</script>

<style lang="less" scoped>
    .purchased-products {
        width: 100%;
    }
</style>