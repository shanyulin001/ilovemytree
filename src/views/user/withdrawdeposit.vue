<template>
<div>
    <!-- 提现资料页面 -->
    <div>
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;"><div class="van-nav-bar__left">
            <router-link to="/shezhi" tag="i">
                    <i style="color:grey" class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
            </div><div class="van-nav-bar__title van-ellipsis">提现资料</div>
            <router-link to="/addaccount" tag="div">
            <div class="van-nav-bar__right" style="font-size:18px;"> + </div>
              </router-link>  
            </div>
    </div>
    <!-- 当没有绑定银行卡时显示页面 -->
    <div class="withoutpic">
        <div class="withoutpic1">
        <div class="withoutpic2"><img src="" alt=""></div>
        <div class="withoutpic3">
            <p>当前还没有账号信息哦……</p>
            <p>点击右上角添加</p>
        </div>
        </div>
    </div>
    <!-- 当绑定银行卡时显示页面 -->
    <div class="bankcardpage">
        <!-- 银行卡 -->
        <div class="bankcard">
            <!-- 第一行 -->
            <div class="bankcardfirst">
                <p class="bankcardfirst1">中国农业银行</p>
                <p class="bankcardfirst2">天津</p>
            </div>
            <!-- 银行卡号 -->
            <p class="bankcardnum">6228 4800 2819 1880 971</p>
            <!-- 用户名 -->
            <p class="bankcarduser">曹志超</p>
        </div>
        <!-- 支付宝 -->
        <div class="bankcard alipay">
            <!-- 第一行 -->
            <div class="bankcardfirst">
                <p class="bankcardfirst1">支付宝</p>
                <p class="bankcardfirst2"></p>
            </div>
            <!-- 银行卡号 -->
            <p class="bankcardnum">15522708121</p>
            <!-- 用户名 -->
            <p class="bankcarduser">曹志超</p>
        </div>
    </div>
    
</div>
</template>
<style>
/* 当没有绑定银行卡时显示页面 */
.withoutpic{
    width: 100%;
    height: 500px;
    overflow: hidden;
}
.withoutpic1{
    margin:80px auto; 
    text-align: center;
}
.withoutpic2{
    width: 80px;
    height: 80px;
    border: 1px solid #aaa;
    margin: 0 auto;
}
.withoutpic3{
    margin-top: 10px;
}
.withoutpic3 p{
    line-height: 20px;
    font-size: 14px;
    color: #aaa;
    margin: 0;
}
/* 当绑定银行卡时显示页面 */
.bankcardpage{
     width: 90%;
     padding: 5%;
    overflow: hidden;
}
/* 单个银行卡框 */
.bankcard{
    width: 94%;
    padding: 3%;
    border-radius: 10px;
    background: #fd837b;
    margin-top: 10px;
    color: white;
}
.bankcard p{
    margin: 0;
    padding: 0;
}
/* 单个银行卡框第一行 */
.bankcardfirst{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px; 
}
.bankcardfirst1{
    width: 80%;
    float: left;
}
.bankcardfirst2{
    width: 20%;
    float: right;
    text-align: right;
}
/* 银行卡号 */
.bankcardnum{
    widows: 100%;
    line-height: 40px;
    font-size: 20px;
}
/* 用户名 */
.bankcarduser{
    text-align: right;
}
/* 支付宝框 */
.alipay{
    background: #6f8cec;
}
</style>