<template>
    <!-- 客服中心：投诉建议 -->
    <div class="inner-bg">
        
        <div class="inner box">
            <h3>投诉建议</h3>
        </div>

    </div>
</template>

<script>
export default {
    name: "advice",
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .box {
        text-align: left;

        h3 {
            font-size: 30px;
            line-height: 100px;
            text-align: center;
        }

        .title {
            font-size: 16px;
            font-weight: bold;
            line-height: 30px;
            color: #333;
            margin-bottom: 15px;
        }

        .text {
            font-size: 14px;
            line-height: 20px;
            text-indent: 2em;
            color: #333;
            margin: 15px 0;
        }
    }
</style>