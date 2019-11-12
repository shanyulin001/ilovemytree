<template>
    <div>
        <!-- 积分页面首页 -->
        <div class="jifenbg" style="background: #0fa87d;">   
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;background: #0fa87d;">
                <div class="van-nav-bar__left">
                     <router-link to="/userhome" tag="i">
                    <i style="color:#fff" class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
                    </div>
                <div class="van-nav-bar__title van-ellipsis" style="color:#fff">积分</div>
                <div class="van-nav-bar__right" style="color:#fff">？</div>
            </div>
            <div>
                <p class="integral">188</p>
                <div class="jifenbutton">
                    <router-link to="/jifendetails" tag="div">
                    <van-button round plain type="info" style="border-color:#fff;color:#fff;background:rgba(255,255,255,0)">积分明细</van-button>
                 </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .integral{
        color: #fff;
        line-height: 50px;
        font-size: 20px;
    }
    .jifenbutton{
        padding:20px;
    }
</style>