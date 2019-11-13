<template>
    <!-- 帮助中心：过户流程 -->
    <div class="inner-bg transfer-bg">
        
        <div class="inner transfer">
            <h3>过户流程</h3>
            <p class="title">如果您是卖家：</p>
            <p class="text">1、买家支付全额购店金到平台，您提供旺旺子账号供买家核对网店信息。</p>
            <p class="text">2、买家验证网店没有问题后，买卖双方约定时间通过法大大实名签署合同。</p>
            <p class="text">3、合同签署完毕后，买卖双方沟通交流，确定好时间，一同前往工商局提交法人变更手续。</p>
            <p class="text">4、卖家将《受理通知书》上传到平台，平台合作律师审核通过后，将放款购店金的50%到买家账户；</p>
            <p class="text">5、买卖双方交接网店后台，等新的营业执照下来，买家上传新的《营业执照》到平台，平台合作律师审核通过后，将放款购店金的50%尾款到买家；</p>
            <p class="text">6、账户银行变更完毕之后，得到《开户许可证》，买家将许可证上传到平台，平台审核通过后，将解冻保证金回到卖家账户；</p>
            <p class="text">7、网店出售完成。</p>

            <p class="title">如果您是买家：</p>
            <p class="text">1、买家选择心仪网店后，支付全额购店金到平台，即可获得卖家联系方式直接与卖家沟通；</p>
            <p class="text">2、登录卖家提供的网店子账号，确认网店信息与平台信息是否一致；</p>
            <p class="text">3、买家验证网店没有问题后，买卖双方约定时间通过法大大实名签署合同；</p>
            <p class="text">4、合同签署完毕后，买卖双方沟通交流，确定好时间，一同前往工商局提交法人变更手续，卖家将《受理通知书》上传到平台，平台合作律师审核通过后，将放款购店金的50%到卖家账户；</p>
            <p class="text">5、买卖双方交接网店后台，等新的营业执照下来，买家上传新的《营业执照》到平台，平台合作律师审核通过后，将放款购店金的50%尾款到买家；</p>
            <p class="text">6、账户银行变更完毕之后，得到《开户许可证》，买家将许可证上传到平台，平台审核通过后，将解冻保证金回到卖家账户；</p>
            <p class="text">7、网店购买完成。</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "transfer",
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .transfer {
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
            color: red;
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