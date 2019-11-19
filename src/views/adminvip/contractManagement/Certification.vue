<template>
    <!-- 实名认证 -->
    <div class="certification">
        <Form ref="formValidate" :model="form">
            <FormItem label="真实姓名：">
                <Input v-model="form.name1"></Input>
            </FormItem>
            <FormItem label="手机号：">
                <Input v-model="form.name2"></Input>
            </FormItem>
            <FormItem label="验证码：">
                <Input v-model="form.buyerIdNo"></Input>
                <Button class="telcode-btn" :disabled="isStartCountDown ? 'disabled' : false" @click="getTelCode">{{ isStartCountDown ? num + '秒后重新发送' : '获取验证码' }}</Button>
                <p class="error-tip" v-show="errorTipForm.telcode">验证码不正确~</p>
            </FormItem>
            <FormItem label="身份证号：">
                <Input v-model="form.buyerPhone"></Input>
            </FormItem>
            <FormItem label="身份证正面：">
                <div class="wrapUpload">
                    <label for="up_file" class="up_label">
                        <input @change="uploadFile" type="file" name="file" accept="application/msword,.docx,.xlsx,text/html,text/html,application/vnd.ms-excel,application/pdf" id="up_file" class="up-files">
                    </label>
                    <Upload class='up-oth' action=''>
                        <Button type="ghost">
                            <Icon type="link"></Icon>
                            <span>选择图片</span>
                        </Button>
                    </Upload>
                    <p v-if="form.contractUrl" style="margin-left:5px;white-space:nowrap">
                        合同地址：
                        <a :href="form.contractUrl" target="_blank">123</a>
                    </p>
                    <div v-if="!form.contractUrl && spinFile">
                        <Spin size="large"></Spin>
                    </div>
                </div>
            </FormItem>
            <FormItem label="身份证反面：">
                <div class="wrapUpload">
                    <label for="up_file" class="up_label">
                        <input @change="uploadFile" type="file" name="file" accept="application/msword,.docx,.xlsx,text/html,text/html,application/vnd.ms-excel,application/pdf" id="up_file" class="up-files">
                    </label>
                    <Upload class='up-oth' action=''>
                        <Button type="ghost">
                            <Icon type="link"></Icon>
                            <span>选择图片</span>
                        </Button>
                    </Upload>
                    <p v-if="form.contractUrl" style="margin-left:5px;white-space:nowrap">
                        合同地址：
                        <a :href="form.contractUrl" target="_blank">123</a>
                    </p>
                    <div v-if="!form.contractUrl && spinFile">
                        <Spin size="large"></Spin>
                    </div>
                </div>
            </FormItem>
            <FormItem class="btn">
                <Button type="primary" @click="handleSubmit">提交实名认证</Button>
                <Button @click="handleReset" style="margin-left: 8px">重置</Button>
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
                productNo: '',
                buyer: '',
                buyerIdNo: '',
                buyerPhone: '',
                seller: '',
                sellerIdNo: '',
                sellerPhone: '',
                contractUrl: ''
            },
            spinFile: false,
            isStartCountDown: false,
            num: 60,
            // 错误提示
            errorTipForm: {
                telcode: false
            },
        }
    },
    methods: {
        // 获取验证码
        getTelCode() {
            if(this.detectionMobile()) {
                this.isStartCountDown = true;

                api.axs("post", "/phoneValidate", {phone: this.form.account, type: "regist"}).then(({ data })=>{
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
                    };

                    this.num -= 1;
                }, 1000);
            };
        },
        uploadFile() {
            this.spinFile = true;
            var myfile = document.getElementById("up_file").files[0];
            if(myfile) {
                var a = (myfile.name.split('.'))[0];
                this.form.contractUrl = a;
                
                var oMyForm = new FormData();
                oMyForm.append("file", myfile);
                
                api.asxUpFile("post", "/oss/fileUpload", oMyForm).then(({data}) => {
                    if (data.code === "SUCCESS") {
                        this.form.contractUrl = data.data;
                        this.$Message.success({content: "文件上传成功!"});
                    };
                });
            };
            console.log(this.form)
        },
        // 提交
        handleSubmit() {
            var arr = [];
            for(var i in this.form) {
                arr.push(this.form[i]);
            };
            var result = arr.every((item, index) => {
                return item != "";
            });
            
            if(result) {
                api.axs("post", "/contract/saveOrUpdate", this.form).then(({ data })=>{
                    if (data.code === "SUCCESS") {
                        this.$Message.success({content: "合同上传成功~"});
                        for(var i in this.form) this.form[i] = "";
                    } else {
                        this.$Message.warning(data.remark);
                    };
                });
            } else {
                this.$Message.warning({content: "未全部填写，有遗漏~"});
            };
        },
        handleReset () {
            for(var i in this.form) this.form[i] = "";
            this.$Message.success({content: "已重置~"});
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

                .ivu-select-selection span {
                    font-size: 14px;
                }

                textarea {
                    resize: none;
                }

                .up_label {
                    width: 90px;

                    input {
                        width: 100%;
                    }
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
                display: flex;
                justify-content: space-between;

                button {
                    width: 48%;
                    font-size: 14px;
                }
            }
        }
    }
</style>