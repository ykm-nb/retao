<template>
    <!-- 修改密码 -->
    <div class="change-password">
        <!-- <Form ref="formValidate" :model="form">
            <FormItem label="原密码：">
                <Input v-model="form.name1"></Input>
            </FormItem>
            <FormItem label="新密码：">
                <Input v-model="form.name2"></Input>
            </FormItem>
            <FormItem label="新密码：">
                <Input v-model="form.name3"></Input>
            </FormItem>
            <FormItem>
                <Button @click="handleSubmit" type="primary" long>提交</Button>
            </FormItem>
        </Form> -->
        <Form :label-width="110">
            <FormItem label="提现金额(元)：">
                <Input v-model="form.amount" readonly/>
            </FormItem>
            <FormItem >
                <Button type='info' @click='toCash' v-if='tocash'>提现</Button>
                <Button type='warning' v-else>提现审核中...</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import api from "@/api";
export default {
    name: "changepassword",
    data() {
        return {
            form: {
                amount: 0,
            },
            tocash: true
        }
    },
    methods: {
        toCash() {
            if (this.form.amount < 1) {
                this.$Message.warning('无法提现!');
                return
            } 
            api.axs("post", "/cashOut/save", this.form).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.tocash = false
                    this.$Message.success('提交成功, 请耐心等待审核!');
                } else {
                    this.$Message.error(data.remark);
                }
            });
        },
        getCash() {
            api.axs("post", "/cashOut/queryAmount").then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.form.amount = data.data.amount || 999
                } else {
                    this.$Message.error(data.remark);
                }
            });
        }
    },
    mounted() {
        this.getCash()
    }
}
</script>

<style lang="less" scoped>
    .change-password {
        /deep/ form {
            width: 30%;
            margin-left: 30%;

            .ivu-form-item {
                label, .ivu-input, button {
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                }

                .ivu-select-selection span {
                    font-size: 14px;
                }

                textarea {
                    resize: none;
                }
            }
        }
    }
</style>