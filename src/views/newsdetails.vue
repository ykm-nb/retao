<template>
    <div class="newsdetails">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <div class="contentWrap">
            <p class="curNav">所在位置: 千呗 >> 新闻咨询</p>
            <div class="content">
                <h3 class="tit">{{contents.title}}</h3>
                <p class="time">时间: {{contents.createTime && contents.createTime.substring(0,10)}} &nbsp;&nbsp;&nbsp;&nbsp;来源: 仟呗官方</p>
                <div class="desc" v-html="contents.content"></div>
            </div>
        </div>

    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import api from "@/api";

export default {
    name: "msg",
    components: {
        Header, Nav
    },
    data() {
        return {
            id: this.$route.query.id,
            contents: {}
        }
    },
    mounted() {
        api.axs("post", "/news/anon/queryById", {id: this.id}).then(({ data })=>{
            if (data.code === "SUCCESS") {
                this.contents = data.data
                
            } else {
                this.$Message.error(data.remark);
            }
        });
    }
}
</script>

<style lang="less" scoped>
    .newsdetails {
        position: relative;
        width: 100%;
        height: auto;
        background-color: #f5f5f5;
        padding-bottom: 20px;
        .contentWrap {
            .curNav {
                width: 1200px;
                margin: 0 auto;
                font-size: 14px;
                color: #888;
                text-align: left;
                padding: 15px 0;
            }
            .content {
                width: 1000px;
                min-height: 500px;
                margin: 0 auto;
                background-color: #fff;
                .tit {
                    font-size: 16px;
                    font-weight: bold;
                    padding: 20px 0;
                }
                .time {
                    color: #888;
                    font-size: 12px;
                    text-align: left;
                    padding: 10px 20px;
                    border-bottom: 1px dashed #ccc;
                }
                .desc {
                    padding: 20px;
                    text-align: left;
                    font-size: 14px;
                    color: #444;
                }
            }
        }
    }
</style>