<template>
    <!-- 实名认证 -->
    <div class="certification">
        <Form ref="formValidate" :model="form">
            <FormItem>
                <span class='tip'>真实姓名：</span><Input v-model="form.name" placeholder="请输入姓名"  style='width:400px'></Input>
            </FormItem>
            <FormItem>
                <span class='tip'>身份证号：</span><Input v-model="form.idNumber" placeholder="请输入身份证号码" style='width:400px'></Input>
            </FormItem>
            <FormItem>
                <span class='tip'>手持身份证正面照：</span>
                <div class="wrapUpload">
                    <label for="up_file" class="up_label">
                        <input @change="uploadFunc" type="file" name="file" accept="images/*" id="up_file" class="up-files">
                    </label>
                    <Upload class='up-oth' action=''>
                        <Button style='opacity:0'>
                            <span>选择图片</span>
                        </Button>
                    </Upload>
                    <template v-if='form.ossPath'>
                        <img :src="form.ossPath" class="upimgg">
                        <span class='delimg' @click='form.ossPath=""'>×</span>
                    </template>
                </div>
            </FormItem>
            
            <div style='text-align:center'>
                <Button type="primary" @click="handleSubmit" style='width:150px'>提交实名认证</Button>
            </div>
        </Form>
    </div>
</template>

<script>
import api from "@/api";
import axios from 'axios'
// import sfcard from "@/assets/images/sf_card.png"
export default {
    name: "certification",
    data() {
        return {
            
            form: {
                name: '',
                idNumber: '',
                ossPath: ''
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
        
        // 提交
        handleSubmit() {
            if(this.form.name && this.form.idNumber && this.form.ossPath) {
                api.axs("post", "/user/saveIdNumber", this.form).then(({ data })=>{
                    if (data.code === "SUCCESS") {
                        this.$Message.success({content: "合同上传成功~"});
                    } else {
                        this.$Message.warning(data.remark);
                    }
                });
            } else {
                this.$Message.warning({content: "请填写完整~"});
            }
        },
        handleReset () {
            for(var i in this.form) this.form[i] = "";
            this.$Message.success({content: "已重置~"});
        },
        randomChar: function(length) {
            var x = "0123456789qwertyuioplkjhgfdsazxcvbnm";
            var tmp = "";
            var timestamp = new Date().getTime();
            for (var i = 0; i < length; i++) {
                tmp += x.charAt(
                    Math.ceil(Math.random() * 100000000) % x.length
                );
            }
            return timestamp + tmp;
        },
        uploadimg: function(files, tag, id) {
            var vm = this;

            var oMyForm = new FormData();
            var upFile = null;
            var fileSize = 0;
            var upType = "1";
            try {
                const rst = lrz(files, {
                    width: 1200,
                    height: 1200,
                    quality: 0.8
                });
                upFile = rst.file;
                fileSize = rst.fileLen;
                upType = "2";
            } catch (error) {
                upFile = files;
                fileSize = files.size;
            }
            try {
                axios({
                    method: "post",
                    url: "/retao-web/queryOssdomian"
                }).then(function(data) {
                    var data = data.data.data;
                    const name = files.name;
                    const arr_name = name.split(".");
                    let ext = arr_name[arr_name.length - 1].toLowerCase();
                    // if (!['jpg', 'png', 'gif', 'jpeg'].includes(ext)) ext = 'png'
                    const key = vm.randomChar(6) + "." + ext;
                    const url = data.url + "/" + key;
                    console.log("url:::::" + url);
                    oMyForm.append("name", files.name);
                    oMyForm.append("key", key);
                    oMyForm.append("success_action_status", "200");
                    Object.keys(data).forEach(item => {
                        if (item === "accessid")
                            oMyForm.append("OSSAccessKeyId", data[item]);
                        else oMyForm.append(item, data[item]);
                    });
                    oMyForm.append("file", upFile);
                    console.log(
                        data.url + "?fileSize=" + fileSize + "&upType=" + upType
                    );
                    axios({
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        method: "post",
                        data: oMyForm,
                        url: data.url +
                            "?fileSize=" +
                            fileSize +
                            "&upType=" +
                            upType
                    }).then(function(data) {
                        vm.form.ossPath = url;
                        // vm.$Message.success({content: "上传成功!"});
                        api.asxUpFile("post", "/user/queryIdNumberOrc", oMyForm).then(({data}) => {
                            if (data.code === "SUCCESS") {
                                vm.$Message.success("上传成功!");
                            } else {
                                vm.form.ossPath = ''
                                vm.$Message.error("请上传正确的手持证件照!");
                            }
                        })
                        // axios({
                        //     method: "post",
                        //     url: "/retao-web/user/queryIdNumberOrc",
                        //     datas: oMyForm
                        // })
                        
                        // vm.form.contractUrl = url;
                        return Promise.resolve(url);
                    });
                });
            } catch (error) {
                return Promise.reject("上传失败, 请重试");
            }
        },
        uploadFunc() {
            var vm = this;
            var myfile;
            myfile = document.getElementById("up_file");
            this.uploadimg(myfile.files[0]);
        },
    },
    mounted() {
         
    }
}
</script>

<style lang="less" scoped>
    .certification {
        width: 800px;
        margin: 20px auto;
        /deep/ form {
            width: 100%;
            margin: 20px auto;

            .tip {
                display: inline-block;
                width: 150px;
                text-align: right;
                font-size: 14px;
            }

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

                .wrapUpload {
                    position: relative;
                    background: url('http://retao.oss-cn-hangzhou.aliyuncs.com/1574578579262oyhb4k.jpg') no-repeat;
                    background-size: 100%;
                    border-radius: 10px;
                    .upimgg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                        border: 1px solid #ddd;
                    }
                    .delimg {
                        position: absolute;
                        top: -15px;
                        right: -20px;
                        font-size: 26px;
                        cursor: pointer;
                    }
                    
                }
                .up_label,.ivu-upload,.ivu-btn-ghost {
                    width: 404px;
                    height: 208px;
                    left: 0;
                    cursor: pointer;
                    border: none;

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