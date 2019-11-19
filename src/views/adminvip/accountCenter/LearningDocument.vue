<template>
    <!-- 实名认证 -->
    <div class="certification">
        <Form ref="formValidate" :model="form" :label-width="90">
            <FormItem label="编号：">
                <Input v-model="form.name1" :readonly=true></Input>
            </FormItem>
            <FormItem label="用户名：">
                <Input v-model="form.name2"></Input>
            </FormItem>
            <FormItem label="手机号：">
                <Input v-model="form.buyerIdNo" :readonly=true></Input>
            </FormItem>
            <FormItem label="QQ号：">
                <Input v-model="form.buyerPhone"></Input>
            </FormItem>
            <FormItem label="姓名：">
                <Input v-model="form.buyerPhone"></Input>
            </FormItem>
            <FormItem label="身份证号：">
                <Input v-model="form.buyerPhone"></Input>
            </FormItem>
            <FormItem label="性别：">
                <RadioGroup v-model="form.buyerPhone">
                    <Radio label="apple">
                        <Icon type="logo-apple"></Icon>
                        <span>先生</span>
                    </Radio>
                    <Radio label="android">
                        <Icon type="logo-android"></Icon>
                        <span>女士</span>
                    </Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="邮箱：">
                <Input v-model="form.buyerPhone"></Input>
            </FormItem>
            <FormItem class="btn">
                <Button type="primary" @click="handleSubmit">确定</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import api from "@/api";
export default {
    name: "certification",
    data() {
        return {
            form: {
                name1: '123',
                productNo: '',
                buyer: '',
                buyerIdNo: '',
                buyerPhone: '',
                seller: '',
                sellerIdNo: '',
                sellerPhone: '',
                contractUrl: ''
            },
            spinFile: false
        }
    },
    methods: {
        // 提交
        handleSubmit() {
            api.axs("post", "/contract/saveOrUpdate", this.form).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.$Message.success({content: "提交成功~"});
                    for(var i in this.form) this.form[i] = "";
                } else {
                    this.$Message.warning(data.remark);
                };
            });
        }
    },
    mounted() {
         
    }
}
</script>

<style lang="less" scoped>
    .certification {
        /deep/ form {
            width: 50%;

            .ivu-form-item {
                label, .ivu-input {
                    font-size: 14px;
                }
            }

            .btn .ivu-form-item-content {
                button {
                    width: 48%;
                    font-size: 14px;
                }
            }
        }
    }
</style>