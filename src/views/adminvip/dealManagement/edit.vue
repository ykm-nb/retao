<template>
    <div class="edit">
        
        <div v-show="isShow" class="wrap-bg">
            <div class="wrap">
                <div class="wrap-top">
                    <p class="title">编辑我的产品</p>
                    <img @click="isShow = false" class="close" src="../images/close.png">
                </div>
                <Form :model="form" label-position="right" :label-width="90">
                    <FormItem label="产品编号">
                        <Input v-model="form.id" disabled="disabled"></Input>
                    </FormItem>
                    <FormItem label="属性">
                        <Input v-model="form.input2"></Input>
                    </FormItem>
                    <FormItem label="跟进记录">
                        <Input v-model="form.input3"></Input>
                    </FormItem>
                    <FormItem label="是否上架">
                        <Select v-model="form.isGrounding" :clearable=true>
                            <Option value="1">是</Option>
                            <Option value="0">否</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="是否已出售">
                        <Select v-model="form.isSelled" :clearable=true>
                            <Option value="1">是</Option>
                            <Option value="0">否</Option>
                        </Select>
                    </FormItem>
                    <FormItem class="btn">
                        <Button @click="sureUpdate" type="primary">确定</Button>
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
                id: "",
                input1: "",
                input2: "",
                input3: "",
                isGrounding: "",
                isSelled: ""
            },
            isShow: false
        }
    },
    methods: {
        sureUpdate() {
            api.axs("post", "/tmStore/saveOrUpdate", this.form).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.$parent.getMyProductDatas(1);
                    this.$Message.success({content: "编辑成功~"});
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
            width: 400px;
            padding: 30px 30px 0 10px;
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