<template>
    <!-- 实名认证 -->
    <div class="certification">
        <h3 class="title">设置支付密码</h3>
        <Form ref="formValidate" :model="form" :label-width="100">
            <FormItem label="设置密码：">
                <Input type='password' v-model="form.payPassword"></Input>
            </FormItem>
            <FormItem label="确认密码：">
                <Input type='password' v-model="form.payPassword2"></Input>
            </FormItem>
            <FormItem label="手机号：">
                <Input v-model="form.phone" readonly></Input>
            </FormItem>
            <FormItem label="验证码：">
                <Input v-model="form.telCode"></Input>
                <Button class="telcode-btn" :disabled="isStartCountDown ? 'disabled' : false" @click="getTelCode">{{ isStartCountDown ? num + '秒后重新发送' : '获取验证码' }}</Button>
                <p class="error-tip" v-show="errorTipForm.telcode">验证码不正确~</p>
            </FormItem>
            <FormItem class="btn">
                <Button type="primary" @click="handleSubmit">提交</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import api from "@/api";
import ls from "store2";
export default {
    name: "certification",
    data() {
        return {
            form: {
                payPassword: '',
                payPassword2: '',
                phone: ls.session.get('qbuserInfo').account,
                telCode: ''
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
        // 获取验证码
        getTelCode() {

            if (this.form.payPassword != this.form.payPassword2) {
                this.$Message.warning('两次密码不一致!');
                return
            }

            this.isStartCountDown = true;

            api.axs("post", "/phoneValidate", {phone: this.form.phone, type: "payPassword"}).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.$Message.success({content: "验证码已发送，请查收~"});
                } else {
                    this.$Message.warning(data.remark);
                }
            });
        
            var time = null;
            time = setInterval(() => {
                if(this.num === 0) {
                    clearInterval(time);
                    this.isStartCountDown = false;
                    this.num = 60;
                }

                this.num -= 1;
            }, 1000);
        },
        // 提交
        handleSubmit() {
            if (!this.form.telCode) {
                this.$Message.warning('请填写验证码!');
                return
            }
            api.axs("post", "/user/updatePayPassword", this.form).then(({ data })=>{
                if (data.code === "SUCCESS") {
                    this.$Message.success({content: "设置成功~"})
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
                    padding: 5px 15px;
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