<template>

    <div>
        <div>
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                    <router-link to="/userhome" tag="i">
                    <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
                    </div>
                    <div class="van-nav-bar__title van-ellipsis">设置</div>
                    <div class="van-nav-bar__right"></div>
                    </div>
        </div>
        <van-cell title="账号与安全"  is-link to="account" />
        <van-cell title="提现资料" is-link to="withdrawdeposit" />
        <van-cell title="交易密码" is-link/>
        <van-cell title="关于我们" is-link to="aboutme" />
        <van-cell title="平台协议" is-link to="agreement" />
        <van-cell title="意见反馈" is-link />
    </div>
</template>
<style scoped>
.tall{
    height:20px;
    background: #555;
}
</style>