<template>
    <div>
        <!-- 余额页面 -->
        <div class="remaininghead">
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                    <router-link to="/userhome" tag="i">
                    <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
                    </div>
                    <div class="van-nav-bar__title van-ellipsis">我的余额</div>
                    <router-link to="/remainingdetail" tag="div">
                    <div class="van-nav-bar__right">明细</div>
                    </router-link>
                    </div>
        </div>
        <div>
            <div class="myyue">
                <p class="rmb">账户余额（元）</p>
                <p class="yuenum">2000.00</p>
            </div>

        </div>
        
        <van-button plain hairline type="info" size="large" to="/tixian" round style="display:block;width:90%;margin:25px auto;">提现</van-button>

    </div>
</template>
<style>
    .remaininghead{
    border-bottom: 1px solid #bbb;
    }
    .myyue{
        background: green;
        border-radius: 10px;
        margin: 5px 10px;
        height: 150px;
        overflow: hidden;
    }
    .rmb{
        margin-top: 50px;
        text-align: center;
        color: white;
    }
   .yuenum{
       text-align: center;
        color: white;
   }
</style>