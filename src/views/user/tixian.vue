<template>
    <div >
        <div class="header">
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
            <div class="van-nav-bar__left">
                <router-link to="/remaining" tag="i">
                <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                </router-link>
                </div>
            <div class="van-nav-bar__title van-ellipsis">提现</div>
            <div class="van-nav-bar__right"></div>
            </div>
    </div>
    <div style="text-align:left">
        <van-cell title="支付宝" is-link value="15522708121" />
        <van-cell title="提现金额" label-class="large" border label="￥300" />
        <van-cell title="可提现金额：500元" value="全部提现" label="提现手续费：0.5元" />
    </div>
    <ul class="explain" style="margin-top:10px;">
        <li>1.周一至周五17：00前的提现当天到账，17：00后的提现次日到账，节假日提现顺延至工作日处理；</li>
        <li>2.每笔提现金额将收取手续费0.2%；</li>
        <li>3.若您提现过程中有任何问题，请与客服人员联系。</li>
    </ul>
    <van-button plain hairline type="info"  size="large" round style="margin-top:50px;width:90%;background:green;color:#fff;">确认提现</van-button>
     <div><p class="phone">客服电话：110</p> </div>
    </div>
</template>
<style>
    .large{
        font-size: 20px;  
    }
    .explain li {
        line-height: 30px;
        font-size: 12px;
        text-align: left;
        width:90%;
        margin-left: 5%;
        color: #969799;
    }
</style>