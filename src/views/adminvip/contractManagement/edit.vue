<template>
    <div class="edit">
        
        <div v-show="isShow" class="wrap-bg">
            <div class="wrap">
                <div class="wrap-top">
                    <p class="title">我的合同-详情</p>
                    <img @click="isShow = false" class="close" src="../images/close.png">
                </div>
                <Form :model="form" label-position="right" :label-width="100">
                    <FormItem label="产品编号">
                        <Input v-model="form.productNo"></Input>
                    </FormItem>
                    <FormItem label="买家">
                        <Input v-model="form.buyer"></Input>
                    </FormItem>
                    <FormItem label="买家身份证">
                        <Input v-model="form.buyerIdNo"></Input>
                    </FormItem>
                    <FormItem label="买家电话">
                        <Input v-model="form.buyerPhone"></Input>
                    </FormItem>
                    <FormItem label="卖家">
                        <Input v-model="form.seller"></Input>
                    </FormItem>
                    <FormItem label="卖家身份证">
                        <Input v-model="form.sellerIdNo"></Input>
                    </FormItem>
                    <FormItem label="卖家电话">
                        <Input v-model="form.sellerPhone"></Input>
                    </FormItem>
                    <FormItem label="合同上传地址">
                        <Input v-model="form.contractUrl"></Input>
                    </FormItem>
                    <FormItem class="btn">
                        <Button @click="sureUpdate" type="primary">修改</Button>
                        <Button @click="isShow = false">取消</Button>
                    </FormItem>
                </Form>
            </div>
            
            <!-- 朦层 -->
            <div v-show="isShow" @click="isShow = false" class="meng-layer"></div>
        </div>

    </div>
</template>

<script>
import api from "@/api";
export default {
    name: "edit",
    data() {
        return {
            form: {
                productNo: '',
                buyer: '',
                buyerIdNo: '',
                buyerPhone: '',
                seller: '',
                sellerIdNo: '',
                sellerPhone: '',
                contractUrl: ''
            },
            isShow: false
        }
    },
    methods: {
        sureUpdate() {
            api.axs("post", "/contract/saveOrUpdate", this.form).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.$Message.success({content: "修改成功~"});
                    this.isShow = false;
                } else {
                    this.$Message.error(data.remark);
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
    .wrap-bg {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;

        .wrap {
            width: 450px;
            padding: 30px 40px 0 10px;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 11;

            .wrap-top {
                margin-bottom: 20px;

                .title {
                    font-size: 18px;
                    text-align: center;
                }

                .close {
                    cursor: pointer;
                    position: absolute;
                    top: -1px;
                    right: -1px;
                }
            }

            /deep/ .ivu-form-item label {
                font-size: 14px;
            }

            /deep/ .btn .ivu-form-item-content {
                display: flex;
                justify-content: space-between;

                button {
                    width: 49%;
                    font-size: 14px;
                }
            }
        }
    }
</style>