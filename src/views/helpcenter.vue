<template>
    <div class="helpcenter">

        <!-- 头部 -->
        <Header id="header"></Header>

        <Nav></Nav>

        <div class="contentCenter">

            <div class="contentWrap">
                <p class="curNav">所在位置: 千呗 >> 新闻咨询</p>
                <ul class="leftNav" :class="isfixed ? 'navFixed' : ''">
                    <li class='tittt'>关于我们</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=taggsjj')">公司简介</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=tagyyzz')">营业执照</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=taglxwm')">联系我们</li>
                    <li class='tittt'>资讯中心</li>
                    <li class='lit' @click="$router.push('/newslists')">新闻资讯</li>
                    <li class="tittt">帮助中心</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=taggmwd')">购买网店</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=tagcswd')">出售网店</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=tagghlc')">过户流程</li>
                    <li class="tittt">充值提现</li>
                    <li class="lit" @click="$router.push('/recharge')">充值服务</li>
                    <li class="lit" @click="$router.push('/withdrawdeposit')">提现服务</li>
                    <li class="lit" @click="$router.push('/recharge')">服务费用</li>
                    <li class='tittt'>安全保障</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=tagzjaq')">资金安全</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=tagdbjy')">担保交易</li>
                    <li class="lit" @click="$router.push('/helpcenter?tag=tagyhxy')">用户协议</li>
                </ul>
            </div>

            <div class=WordSection1 style='layout-grid:15.6pt;font-size:12.0pt;'>

                <p id="taggmwd" class=MsoNormal align=center style='padding:40px 0 20px;text-align:center;mso-pagination:widow-orphan;
                mso-outline-level:1'><b><span style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:18.0pt;'>购买网店<span
                lang=EN-US></span></span></b></p>

                <p class=MsoNormal align=left style='text-align:center;padding:15px 0 20px;line-height:20pt;
                mso-pagination:widow-orphan'><span style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt'>第一步：登录仟呗账户，在网站首页导航条点击天猫转让，进入店铺列表页。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal align=center style='text-align:center;line-height:20pt;
                mso-pagination:widow-orphan'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shapetype
                id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t"
                path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f">
                <v:stroke joinstyle="miter"/>
                <v:formulas>
                <v:f eqn="if lineDrawn pixelLineWidth 0"/>
                <v:f eqn="sum @0 1 0"/>
                <v:f eqn="sum 0 0 @1"/>
                <v:f eqn="prod @2 1 2"/>
                <v:f eqn="prod @3 21600 pixelWidth"/>
                <v:f eqn="prod @3 21600 pixelHeight"/>
                <v:f eqn="sum @0 0 1"/>
                <v:f eqn="prod @6 1 2"/>
                <v:f eqn="prod @7 21600 pixelWidth"/>
                <v:f eqn="sum @8 21600 0"/>
                <v:f eqn="prod @7 21600 pixelHeight"/>
                <v:f eqn="sum @10 21600 0"/>
                </v:formulas>
                <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>
                <o:lock v:ext="edit" aspectratio="t"/>
                </v:shapetype><v:shape id="图片_x0020_5" o:spid="_x0000_i1036" type="#_x0000_t75"
                style='width:415pt;height:240pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image001.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=240
                src="@/assets/images/helpcenter/image001.png" v:shapes="图片_x0020_5"><![endif]></span><span
                lang=EN-US style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#333333;mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal align=left style='text-align:center;padding:15px 0 20px;line-height:20pt;
                mso-pagination:widow-orphan'><span style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt'>第二步：进入天猫商城列表页面后，点击筛选条件即可进一步筛选。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal align=center style='text-align:center;line-height:20pt;
                mso-pagination:widow-orphan'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_6" o:spid="_x0000_i1035" type="#_x0000_t75" style='width:415pt;
                height:329pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image002.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=329
                src="@/assets/images/helpcenter/image002.png" v:shapes="图片_x0020_6"><![endif]></span><span
                lang=EN-US style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#333333;mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal align=left style='text-align:center;padding:15px 0 20px;line-height:20pt;
                mso-pagination:widow-orphan'><span style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt'>第三步：根据您选择的筛选条件，符合您要求的网店会出现在下面的店铺列表里，点击您中意的网店，即可进入网店详情页面。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal align=center style='text-align:center;line-height:20pt;
                mso-pagination:widow-orphan'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_7" o:spid="_x0000_i1034" type="#_x0000_t75" style='width:415pt;
                height:284pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image003.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=284
                src="@/assets/images/helpcenter/image003.png" v:shapes="图片_x0020_7"><![endif]></span><span
                lang=EN-US style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#333333;mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal align=left style='text-align:center;padding:15px 0 20px;line-height:20pt;
                mso-pagination:widow-orphan'><span style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt'>第四步：进入详情页后，了解网店的全面信息。若您觉得该店铺符合您的要求，点击“<span
                lang=EN-US>QQ</span>联系”或直接拨打客服电话，让客服人员协助您完成购买。<span lang=EN-US></span></span></p>

                <p class=MsoNormal align=center style='text-align:center;line-height:20pt;
                mso-pagination:widow-orphan'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_1" o:spid="_x0000_i1033" type="#_x0000_t75" style='width:416pt;
                height:232pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image004.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=416 height=232
                src="@/assets/images/helpcenter/image004.png" v:shapes="图片_x0020_1"><![endif]></span><span
                lang=EN-US style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#333333;mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal align=left style='text-align:center;padding:15px 0 20px;line-height:20pt;
                mso-pagination:widow-orphan'><span style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#333333;mso-font-kerning:0pt'>第五步：三方签署合同盖章后，各持一份合同，办理网店过户，（过户流程）网店交接完成后，交易即完成。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <h1 id="tagcswd" align=center style='padding:40px 0 20px;margin:0cm;margin-bottom:.0001pt;text-align:center'><span
                style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;color:#333333'>出售网店<span
                lang=EN-US></span></span></h1>

                <p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第一步：登录仟呗账户，在网站首页点击“联系客服”。<span
                lang=EN-US></span></span></p>

                <p class=p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
                center;line-height:22.5pt'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_10" o:spid="_x0000_i1032" type="#_x0000_t75" style='width:415pt;
                height:254pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image005.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=254
                src="@/assets/images/helpcenter/image005.png" v:shapes="图片_x0020_10"><![endif]></span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第二步：根据提示，联系具体的工作人员，完成填写后，工作人员会及时给您出价格评估，同时第一时间挂售。<span
                lang=EN-US></span></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第三步：三方签署合同盖章后，各持一份合同，网店交接完成后，交易即完成，您将会收到转让所得费。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <h1 id="tagghlc" align=center style='padding:40px 0 20px;margin:0cm;margin-bottom:.0001pt;text-align:center'><span
                style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;color:#333333'>过户流程<span
                lang=EN-US></span></span></h1>

                <p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <div style="text-align:center">
                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#EB3731'>如果您是卖家</span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>1</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、买家付定金到仟呗平台，仟呗与卖家签署一份网店独家出售承诺书，或者缴纳网店转让费的<span
                lang=EN-US>10%</span>作为保证金到仟呗平台；<span lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>2</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、买家验证网店没有问题后，仟呗客服就与买卖双方约定时间和会面地点，签署正式转让合同；<span
                lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>3</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、合同签署完毕后，买家支付全款到仟呗平台，然后买卖双方在仟呗客服的陪同下，去工商局提交法人变更手续；<span
                lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>4</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、法人变更手续完成后，仟呗平台放款网店全款的<span
                lang=EN-US>50%</span>到卖家账户；<span lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>5</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、买卖双方交接网店后台，等新的营业执照下来，国税地税变更好后，仟呗平台将<span
                lang=EN-US>50%</span>的尾款转到卖家账户；<span lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>6</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、网店出售完成。<span lang=EN-US></span></span></p>

                <p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>
                

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#EB3731'>如果您是买家</span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>1</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、买家选择中意的网店后，付网店转让费的<span
                lang=EN-US>20%</span>作为定金到仟呗平台；<span lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>2</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、仟呗平台与卖家签署确认出售协议后，买家登陆网店子账号，确认网店各项信息与描述无误后，仟呗安排三方过户事宜。<span
                lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>3</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、仟呗平台与买卖双方约定过户时间及会面地点，三方见面，签署正式转让合同；买家将网店转让全款支付到仟呗平台。<span
                lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>4</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、合同签署后，买卖双方在仟呗客服的陪同下，去工商局提交法人变更手续，提交后仟呗平台放款网店总款的<span
                lang=EN-US>80%</span>给卖家；<span lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>5</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、买卖双方交接网店后台，更改后台手机绑定，等新的营业执照下来后，银行变更完毕之后，将网店的<span
                lang=EN-US>20%</span>尾款转到卖家账户；<span lang=EN-US></span></span></p>

                <p class=p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'>6</span><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>、网店购买完成。<span lang=EN-US></span></span></p>

                </div>


                <h1 align=center style='padding:40px 0 20px;margin:0cm;margin-bottom:.0001pt;text-align:center'><span
                style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;color:#333333'>充值服务<span
                lang=EN-US></span></span></h1>

                <p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第一步：登录仟呗账号进入“用户中心”。<span
                lang=EN-US></span></span></p>

                <p class=p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
                center;line-height:22.5pt'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_14" o:spid="_x0000_i1031" type="#_x0000_t75" style='width:415pt;
                height:23pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image006.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=23
                src="@/assets/images/helpcenter/image006.png" v:shapes="图片_x0020_14"><![endif]></span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第二步：点击“充值”。<span
                lang=EN-US></span></span></p>

                <p class=p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
                center;line-height:22.5pt'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_15" o:spid="_x0000_i1030" type="#_x0000_t75" style='width:415pt;
                height:208pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image007.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=208
                src="@/assets/images/helpcenter/image007.png" v:shapes="图片_x0020_15"><![endif]></span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第三步：扫码充值后，填写信息提交。<span
                lang=EN-US></span></span></p>

                <p class=p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
                center;line-height:22.5pt'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_16" o:spid="_x0000_i1029" type="#_x0000_t75" style='width:415pt;
                height:366pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image008.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=366
                src="@/assets/images/helpcenter/image008.png" v:shapes="图片_x0020_16"><![endif]></span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <h1 align=center style='padding:40px 0 20px;margin:0cm;margin-bottom:.0001pt;text-align:center'><span
                style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;color:#333333'>提现服务<span
                lang=EN-US></span></span></h1>

                <p style='margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第一步：登录仟呗账号进入“用户中心”。<span
                lang=EN-US></span></span></p>

                <p class=p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
                center;line-height:22.5pt'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_20" o:spid="_x0000_i1028" type="#_x0000_t75" style='width:415pt;
                height:52pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image009.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=52
                src="@/assets/images/helpcenter/image009.png" v:shapes="图片_x0020_20"><![endif]></span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第二步：点击“我要提现”。<span
                lang=EN-US></span></span></p>

                <p class=p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
                center;line-height:22.5pt'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_21" o:spid="_x0000_i1027" type="#_x0000_t75" style='width:415pt;
                height:229pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image010.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=229
                src="@/assets/images/helpcenter/image010.png" v:shapes="图片_x0020_21"><![endif]></span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=p style='font-size: 12pt;margin:0cm;margin-bottom:.0001pt;line-height:22.5pt'><span
                style='font-family:"微软雅黑",sans-serif;color:#333333'>第三步：输入提现金额及提现密码，点击确定。<span
                lang=EN-US></span></span></p>

                <p class=p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
                center;line-height:22.5pt'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_22" o:spid="_x0000_i1026" type="#_x0000_t75" style='width:415pt;
                height:204pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image011.png" o:title=""/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=204
                src="@/assets/images/helpcenter/image011.png" v:shapes="图片_x0020_22"><![endif]></span><span
                lang=EN-US style='font-family:"微软雅黑",sans-serif;color:#333333'></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <h1 id='tagdbjy' align=center style='padding:40px 0 20px;margin:0cm;margin-bottom:.0001pt;text-align:center'><span
                style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;color:#333333'>担保交易<span
                lang=EN-US></span></span></h1>

                <p class=MsoNormal align=left style='text-align:center;padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                lang=EN-US style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>&nbsp; </span><span style='font-size:
                12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#282828;
                mso-font-kerning:0pt'>担保交易是指卖家只需在仟呗网站上发布担保出售信息，无须填写出售帐号密码等资料，交易时由仟呗网站客服通知卖家登录帐号，与买家交易的一种全新安全模式。买家付款之后，费用暂时由本网站保管而并没有直接打给卖家，当买家确认交易帐号无误后，卖家才会收到相关款项，如果拿到的交易账户因卖家原因导致不能正常使用或者与仟呗网网站展示信息严重不符时，可以退款。就像支付宝一样，买家买商家的货物，付款之后资金是在支付宝中间环节担保着的，当买家收到商家的货物并确认签字无误之后，支付宝再把资金处理到商家的支付宝内！</span><span
                lang=EN-US style='font-size:9.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <h1 id='tagzjaq' align=center style='padding:40px 0 20px;margin:0cm;margin-bottom:.0001pt;text-align:center'><span
                style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;color:#333333'>资金安全<span
                lang=EN-US></span></span></h1>

                <p class=MsoNormal align=left style='text-align:center; line-height:20pt;
                mso-pagination:widow-orphan;background:white'><span style='font-size:12.0pt;
                font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#282828;mso-font-kerning:
                0pt'>尊敬的用户：</span><span lang=EN-US style='font-size:9.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#282828;mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal align=left style='text-align:center;padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>您好，您在我们网站购买产品并付款后，如果是卖家的原因导致交易失败，您可以向客服申请退款，平台将全额退款给您，申请提现后，<span
                lang=EN-US>2-72</span>小时内资金将会由财务处理到账。</span><span lang=EN-US style='font-size:
                9.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#282828;
                mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <h1 id="tagyhxy" align=center style='padding:40px 0 20px;margin:0cm;margin-bottom:.0001pt;text-align:center'><span
                style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;color:#333333'>用户协议<span
                lang=EN-US></span></span></h1>

                <p class=MsoNormal align=left style='text-align:center; line-height:20pt;
                mso-pagination:widow-orphan;background:white'><span style='font-size:12.0pt;
                font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#282828;mso-font-kerning:
                0pt'>尊敬的用户：</span><span lang=EN-US style='font-size:9.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#282828;mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal align=left style='text-align:center;padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>您好，您在我们网站购买产品并付款后，如果是卖家的原因导致交易失败，您可以向客服申请退款，平台将全额退款给您，申请提现后，<span
                lang=EN-US>2-72</span>小时内资金将会由财务处理到账。</span><span lang=EN-US style='font-size:
                9.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#282828;
                mso-font-kerning:0pt'></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <p class=MsoNormal><span lang=EN-US></span></p>

                <h1 id="taggsjj" align=center style='padding:40px 0 20px;margin:0cm;margin-bottom:.0001pt;text-align:center'><span
                style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;color:#333333'>公司简介<span
                lang=EN-US></span></span></h1>

                <div style='text-align:center'>

                <p class=MsoNormal align=left style='padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>在信息时代，谁掌握了信息资源，谁就掌握着巨大商机的可能。一个创业者，需要有敏锐的市场嗅觉与经营头脑。如果您什么都没有，又想作出合理的投资或推广，仟呗就是您的不二之选，一个以信息资源为核心的现代化服务管理平台。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal align=left style='padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                lang=EN-US style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'><span style='mso-spacerun:yes'>   
                </span></span><span style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#282828;mso-font-kerning:0pt'>仟呗，一家专业的集店铺、商标、专利、媒体账号等的转让、营销推广、代理工商注册、商铺商品广告设计等业务为一体的一站式信息服务管理平台。目前淘宝、天猫、京东、拼多多、蘑菇街、唯品会、腾讯、新浪、网易、今日头条等多家单位已经成为仟呗的合作伙伴，仟呗有最庞大的信息资源，成立一年多以来，仟呗已经帮助百万客户圆梦，成交额已经超过<span
                lang=EN-US>3370</span>万元，实现了零退款、零事故、零投诉的良好业绩。<span lang=EN-US></span></span></p>

                <p class=MsoNormal align=left style='padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>在仟呗，您可以实时了解商铺、专利、媒体账号的的售卖信息，从中找到属于自己的商机；您也可以把商品指标交给我们，由我们为您营造良好的营商环境；您若想注册，我们可以为您跑腿；您若想吸粉，我们可以为您效劳；您若想推广，我们可以为您解忧。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal align=left style='padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>在仟呗，我们有最高级的资质认证，您不用担心我们的服务资质；我们有最精悍的专家团队，您不用担心你的理财计划是否有道；我们有最权威的法律顾问，您不用担心售买权责、产品推广等方面产生经济纠纷；我们有最专业的人工客服，真诚为您转呈解决各种矛盾。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal align=left style='padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>在仟呗，我们有最精致的网页设计，您可以精确地定位到每一个功能的详细信息；我们有最翔实的产品说明，您可以知道买卖的产品的所有资料；我们有最安全的交易平台，若因交易双方对相关内容存在分歧，及时已经交易的也可以申请交易终止；我们有最方便的客户服务，在每一个交易或服务的界面中，都配置有至少一名专业老师和一名专业的客户人员，方便买卖双方的各类咨询。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal align=left style='padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>在仟呗，客户永远都是我们的上帝，促成买卖双方完成交易，是我们最终的目标追求；在仟呗，“品质第一、服务第一”是我们的工作理念，努力把产品或服务做到第一是我们的最大愿景；在仟呗，用心做好平台，安全服务每一次平台交易，让买卖双方都有好的买卖体验，是我们的最高的努力方向。<span
                lang=EN-US></span></span></p>

                <p class=MsoNormal align=left style='padding:15px 0 20px;text-indent:24.0pt;
                line-height:20pt;mso-pagination:widow-orphan;background:white'><span
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'>仟呗，我们关注您的关注，渴望您的功成名就。<span lang=EN-US></span></span></p>

                <p class=MsoNormal align=left style='padding:15px 0 20px;line-height:20pt;
                mso-pagination:widow-orphan;background:white'><span lang=EN-US
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'></span></p>

                </div>

                <p id="taglxwm" class=MsoNormal align=left style='text-align:center;padding:40px 0 20px;line-height:13.5pt;
                mso-pagination:widow-orphan'><b><span style='font-size:18.0pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#282828;mso-font-kerning:0pt'>联系我们<span
                lang=EN-US></span></span></b></p>

                <div style='text-align:center'>

                <p class=MsoNormal  style='padding:15px 0 20px;line-height:18.0pt;
                mso-pagination:widow-orphan'><span style='mso-bidi-font-size:10.5pt;font-family:
                "微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#424242;mso-font-kerning:0pt'>如果您有业务以外的问题咨询或提交建议<span
                lang=EN-US>, </span>可以采用以下任意一种方式联系我们。<span lang=EN-US><br>
                <br>
                </span><b>公司名称：仟呗（绍兴）信息科技有限公司</b><span lang=EN-US>&nbsp;<b>(</b></span><b>仟呗<span
                lang=EN-US>)</span></b><span lang=EN-US><br>
                <br>
                </span><b>官方微信：</b><span lang=EN-US>qianbei-51</span></span></p>

                <p class=MsoNormal  style='padding:15px 0 20px;line-height:18.0pt;
                mso-pagination:widow-orphan'><b><span style='mso-bidi-font-size:10.5pt;
                font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#424242;mso-font-kerning:
                0pt'>官方微信公众号：</span></b><span lang=EN-US style='mso-bidi-font-size:10.5pt;
                font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#424242;mso-font-kerning:
                0pt'>qianbei51com<br>
                <br>
                </span><b><span style='mso-bidi-font-size:10.5pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#424242;mso-font-kerning:0pt'>全国热线：</span></b><span
                lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#424242;mso-font-kerning:0pt'>177-8855-7963<br>
                <br>
                <b>QQ</b></span><b><span style='mso-bidi-font-size:10.5pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#424242;mso-font-kerning:0pt'>服务：</span></b><span
                lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#424242;mso-font-kerning:0pt'>800825871<br>
                <br>
                </span><b><span style='mso-bidi-font-size:10.5pt;font-family:"微软雅黑",sans-serif;
                mso-bidi-font-family:宋体;color:#424242;mso-font-kerning:0pt'>公司地址：</span></b><span
                style='mso-bidi-font-size:10.5pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#424242;mso-font-kerning:0pt'>浙江省绍兴市文化创意园<span lang=EN-US>6</span>幢<span
                lang=EN-US><br>
                <br>
                </span>
                <div id="tagyyzz" style='padding:50px 0 0'>
                    <b>营业执照：<span lang=EN-US></span></b>
                </div>
                </span></p>

                </div>

                <p class=MsoNormal  style='padding:15px 0 20px;line-height:18.0pt;
                mso-pagination:widow-orphan'><span lang=EN-US style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
                id="图片_x0020_2" o:spid="_x0000_i1025" type="#_x0000_t75" style='width:415pt;
                height:302pt;visibility:visible;mso-wrap-style:square'>
                <v:imagedata src="@/assets/images/helpcenter/image012.jpg" o:title="aaeae96a37a66956f62c2845eff1c1d"/>
                </v:shape><![endif]--><![if !vml]><img width=415 height=302
                src="@/assets/images/helpcenter/image012.jpg" v:shapes="图片_x0020_2"><![endif]></span></p>

                <p class=MsoNormal  style='text-align:center;padding:15px 0 20px;line-height:20pt;
                mso-pagination:widow-orphan;background:white'><span lang=EN-US
                style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
                宋体;color:#282828;mso-font-kerning:0pt'></span></p>

                </div>
            </div>
        <!-- 底部 -->
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
    name: "service",
    components: {
        Header, Nav,
        Footer
    },
    data() {
        return {
            tag: this.$route.query.tag,
            isfixed: false
        }
    },
    methods: {
        scrolling() {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
            if(scrollTop > 265) this.isfixed = true
            else this.isfixed = false
            console.log(scrollTop)
        },
    },
    mounted() {
        window.addEventListener('scroll', this.scrolling)

        const ele = document.getElementById(this.$route.query.tag);
        // ele.scrollIntoView({ behavior: 'smooth' })
        if (ele) ele.scrollIntoView()
        
    },
    watch: {
        $route() {
            const ele = document.getElementById(this.$route.query.tag);
            // ele.scrollIntoView({ behavior: 'smooth' })
            if (ele) ele.scrollIntoView()
        }
    }
}
</script>

<style lang="less" scoped>
    .helpcenter {
        background-color: #f5f5f5;
        .contentCenter {
            width: 1200px;
            margin: 0 auto;
            margin-bottom: 20px;

            .contentWrap {
                position: relative;
                width: 1200px;
                margin: 0 auto;
                .curNav {
                    font-size: 14px;
                    color: #888;
                    text-align: left;
                    padding: 15px 0;
                }
                .leftNav {
                    position: absolute;
                    top: 45px;
                    left: 0;
                    width: 130px;
                    min-height: 500px;
                    background-color: #fff;
                    font-size: 14px;
                    color: #666;

                    &.navFixed {
                        position: fixed;
                        top: 0px;
                        left: auto;
                        z-index: 999;
                    }
                    li {
                        padding: 10px 0;
                        border-bottom: 1px solid #f5f5f5;
                        &.tittt {
                            color: #444;
                            font-size: 16px;
                            font-weight: bold;
                        }
                        &.lit {
                            cursor: pointer;
                            &:hover {
                                color: #fff;
                                background-color: #ff0036;
                            }
                        }
                    }
                }
                
                .content {
                    width: 1000px;
                    min-height: 500px;
                    margin-left: 170px;
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

            .WordSection1 {
                margin-left: 170px;
                padding: 0 20px;
                background-color: #fff
            }
        }
    }
</style>