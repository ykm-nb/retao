<template>
    <!-- 安全保障：担保交易 -->
    <div class="inner-bg transfer-bg">
        
        <div class="inner transfer">
            <h3>担保交易</h3>
            <p class="text">1、担保交易是指针对电子商务中，卖家与买家的交易安全问题，这也是首先由支付宝率先提出的交易模式。它有效的解决了电子商务交易中的信用问题，即买家担心付款后，收不到货物，而同时卖家也担心发出货物后，收不到钱。</p>
            <p class="text">2、阿里巴巴的支付宝采用的正是“居间担保”这样的方式，买家先将钱放在支付宝进行存储，等到交易完成后，由中间方支付宝将钱打到卖家账号上。这样在交易过程中资金没有直接在交易双方手中流动，最大化保障了交易的稳定性与安全性。</p>
            <p class="text">3、而三方居间交易的原理，正是和支付宝完全一样的，买家看中网店后，全款购买网店，购店款冻结在平台，由平台进行账户担保。等买卖双方交接店铺、签署网店转让合同完毕无误后。平台和买卖双方确认后，再由平台将购店款放款给予卖家，确保转让费用的安全。</p>
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