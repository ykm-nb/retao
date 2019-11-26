<template>
    <!-- 实名认证 -->
    <div class="certification">
        <h3 class="title">设置登录密码</h3>
        <Form ref="formValidate" :model="form" :label-width="100">
            
            <FormItem label="输入旧密码：">
                <Input type='password' v-model="form.oldPassword"></Input>
            </FormItem>
            <FormItem label="输入新密码：">
                <Input type='password' v-model="form.newPassword"></Input>
            </FormItem>
            <FormItem label="确认新密码：">
                <Input type='password' v-model="form.newPassword2"></Input>
            </FormItem>
            <FormItem class="btn">
                <Button type="primary" @click="handleSubmit">提交</Button>
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
                oldPassword: '',
                newPassword: '',
                newPassword2: ''
            },
            spinFile: false,
            isStartCountDown: false,
            num: 60,
            // 错误提示
            errorTipForm: {
                telcode: false
            }
        }
    },
    methods: {
        // 提交
        handleSubmit() {
            if (!this.form.oldPassword || !this.form.newPassword) {
                this.$Message.warning('请填写完整!');
                return
            } else if (this.form.newPassword != this.form.newPassword2) {
                this.$Message.warning('两次密码不一致!');
                return
            }

            api.axs("post", "/user/updatePassword", this.form).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.$Message.success({content: "设置成功~"});
                } else {
                    this.$Message.warning(data.remark);
                }
            });
        }
    },
    mounted() {
         
    }
}
</script>

<style lang="less" scoped>
    .certification {
        .title {
            font-size: 16px;
            padding-bottom: 30px;
            text-align: left;
        }
        /deep/ form {
            width: 40%;

            .ivu-form-item {
                label, .ivu-input {
                    font-size: 14px;
                }

                .telcode-btn {
                    padding: 6px 15px;
                    border: none;
                    border-left: 1px solid #dddee1;
                    border-radius: 0 4px 4px 0;
                    position: absolute;
                    bottom: 1px;
                    right: 1px;

                    &:focus {
                        box-shadow: none;
                    }
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