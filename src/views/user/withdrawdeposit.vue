<template>
<div>
    <div>
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;"><div class="van-nav-bar__left">
            <router-link to="/shezhi" tag="i">
                    <i style="color:grey" class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
            </div><div class="van-nav-bar__title van-ellipsis">提现资料</div><div class="van-nav-bar__right">+</div></div>
    </div>
    <div class="withpic">
        <div class="withpic1">
        <div class="withpic2"><img src="" alt=""></div>
        <div class="withpic3">
            <p>当前还没有账号信息哦……</p>
            <p>点击右上角添加</p>
        </div>
        </div>
    </div>
    
</div>
</template>
<style>
.withpic{
    width: 100%;
    height: 500px;
    overflow: hidden;
}
.withpic1{
    margin:80px auto; 
    text-align: center;
}
.withpic2{
    width: 80px;
    height: 80px;
    border: 1px solid #aaa;
    margin: 0 auto;
}
.withpic3{
    margin-top: 10px;
}
.withpic3 p{
    line-height: 20px;
    font-size: 14px;
    color: #aaa;
    margin: 0;
}
</style>