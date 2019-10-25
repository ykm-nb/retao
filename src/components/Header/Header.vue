<template>
    <div class="inner-bg header-bg">
        <header class="inner">
            <p class="header-left">欢迎来到仟呗</p>
            <ul class="header-right">
                <li>我的消息</li>
                <li>帮助中心</li>
                <li>投诉建议</li>
                <li>联系客服</li>
            </ul>
        </header>
    </div>
</template>

<script>
export default {
    name: "common-header",
    computed: {
        time() {
            let now = new Date().getHours()
            if(now >=6 && now < 10) {
                return "早上"
            } else if(now >= 10 && now < 13) {
                return "中午"
            } else if(now >=13 && now < 18) {
                return "下午"
            } else {
                return "晚上"
            }
        }
    }
}
</script>

<style lang="less" scoped>
.header-bg {
    background-color: #ddd;

    header {
        font-size: 16px;
        line-height: 36px;
        color: #323232;
        display: flex;
        justify-content: space-between;

        .header-right {
            width: 300px;
            display: flex;
            justify-content: space-between;
            
            li {
                cursor: pointer;

                &:hover {
                    color: #e61716;
                }
            }
        }
    }
}  
</style>