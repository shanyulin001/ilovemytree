<template>
    <div>
        <div class="header">
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;"><div class="van-nav-bar__left"><i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i></div><div class="van-nav-bar__title van-ellipsis">提现</div><div class="van-nav-bar__right"></div></div>
    </div>
    <div style="text-align:left">
        <van-cell title="支付宝" is-link value="15522708121" />
        <van-cell title="提现金额" label-class="large" border label="￥300" />
        <van-cell title="可提现金额：500元" value="全部提现" label="提现手续费：0.5元" />
    </div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <van-button plain hairline type="info"  size="large" round style="width:90%;margin-top:15px;">确认提现</van-button>
     <div><p class="phone">客服电话：110</p> </div>
    </div>
</template>
<style>
    .large{
        font-size: 20px;
        
    }
</style>