<template>
    <!-- 帮助中心：购买流程 -->
    <div class="inner-bg buy-bg">
        
        <div class="inner buy">
            <h3>购买流程</h3>
            <p class="title">第一步：进入网站，选择中意的网店，寻找任意客服了解详情。</p>
            <p class="title">第二步：确定购买店铺，提交订金，如暂时没有中意店铺，提交意向金，业务员一有合适店铺直接可以购买。</p>
            <p class="title">第三步：验店完成，签署三方区间合同，准备过户，交互买家店铺。</p>
            <p class="text">详细图解请参照以下图片</p>
            <img src="./buy.png">
        </div>

    </div>
</template>

<script>
export default {
    name: "buy",
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .buy {
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