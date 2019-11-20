<template>
    <div>
         <div class="agreement">
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;"><div class="van-nav-bar__left">
            <router-link to="/shezhi" tag="i">
            <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
             </router-link>
            </div><div class="van-nav-bar__title van-ellipsis">平台协议</div><div class="van-nav-bar__right"></div></div>
    </div>
    <van-cell-group class="protocol">
        
    <van-cell title="用户注册协议" is-link  to='/registration-agreement' />
    <van-cell title="生态林认养协议" is-link to='/claim-argreement'/>
    <van-cell title="古树名木认养协议" is-link to='/tree-agreement'/>
    </van-cell-group>
    </div>
</template>
<style>
 .protocol{
     text-align: left
 }

</style>