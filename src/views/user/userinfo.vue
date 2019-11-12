<template>
    <div>
        <van-cell-group>
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                    <router-link to="userhome" tag="div" class="fa fa-angle-left fa-2x back"></router-link>
                </div>
                <div class="van-nav-bar__title van-ellipsis">个人信息</div>
                <div class="van-nav-bar__right"></div>
            </div>
        </van-cell-group>
        <van-cell-group>
            <div class="headPortrait msc">
                <span>头像</span>
                <div class="hp_box">
                    <img src="" alt="">
                </div>
            </div>
            <van-cell title="ID" value="123456789" />
            <van-cell title="昵称" value="内容" />
            <van-cell title="手机号" value="内容" />
            <van-cell title="实名认证" value="内容" />
            <van-cell title="性别" value="内容" />
            <van-cell title="生日" value="内容" />
            <van-cell title="收货地址" value="内容" />
        </van-cell-group>
        <div class="btn" >
            <van-button type="info" size="large" to="userchange">修改信息</van-button>
        </div>
        <div class="btn">
            <van-button type="warning" size="large">退出登录</van-button>
        </div>
    </div>
</template>

<style>
    .hp_box{
        width: 80px;
        height: 80px;
        border-radius:50%;
        border: 1px solid rgba(200, 200, 200, 0.5);
        overflow: hidden;
    }
    .msc{
        height: 80px;
        margin: 10px 10px 0;
        display: flex;
        align-items:center;
        justify-content:space-between;
    }
    .btn{
        margin-top: 10px
    }
    .van-nav-bar__left{
        height: 40px
    }
</style>