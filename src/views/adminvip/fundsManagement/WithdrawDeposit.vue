<template>
    <!-- 修改密码 -->
    <div class="change-password">
        <Form ref="formValidate" :model="form">
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
                name1: '',
                name2: '',
                name3: ''
            }
        }
    },
    methods: {
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
    .change-password {
        /deep/ form {
            width: 50%;

            .ivu-form-item {
                label, .ivu-input, button {
                    font-size: 14px;
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