<template>
    <!-- 帮助中心：出售流程 -->
    <div class="inner-bg sell-bg">
        
        <div class="inner sell">
            <h3>出售流程</h3>
            <p class="title">第一步：打开网站点击任意客服，提交所需资料。</p>
            <p class="title">第二步：客服审核完毕后，将显示于网站首页。</p>
            <p class="title">第三步：即可在出售的网店中查看成功发布的网店。</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "sell",
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .sell {
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