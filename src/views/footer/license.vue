<template>
    <!-- 关于我们：营业执照 -->
    <div class="inner-bg">
        
        <div class="inner box">
            <h3>营业执照</h3>
            <img src="./license.png">
        </div>

    </div>
</template>

<script>
export default {
    name: "license",
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

        img {
            width: 600px;
            height: 950px;
            display: block;
            margin: -120px auto 0;
            transform: rotate(90deg);
        }
    }
</style>