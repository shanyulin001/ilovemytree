<template>
<div>
    <div class="aboutme">
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;"><div class="van-nav-bar__left">
            <router-link to="/shezhi" tag="i">
            <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
             </router-link>
            </div><div class="van-nav-bar__title van-ellipsis">关于我们</div><div class="van-nav-bar__right"></div></div>
    </div>
    <div>
        <!-- 图标 -->
        <div>
            <!-- 图片 -->
            <div class="aboutmepic"><img src="" alt=""></div>
            <!-- 版本号 -->
            <p class="version">我爱我树v1.0.3</p>
        </div>
        <!-- 注释文字 -->
        <div>
            <p class="zhishiword">我爱我的树网络技术有限公司是国内专注于数字林业服务平台,基于中国的“生态优先、绿色发展”的社会理念,安徽省池州市林业局成立两个项目“生态森林”和“古树收养”,通过网络模型来提高林业综合效益。</p>
        </div>
    </div>
    </div>
</template>
<style>
.aboutme{
    border-bottom: 1px solid #ddd;
}
.aboutmepic{
    width: 120px;
    height: 120px;
    margin: 0 auto;
    margin-top: 50px;
    border: 1px solid #ddd;
    border-radius: 50%;
    overflow: hidden;
}
.aboutmepic img{
    width: 100%;
    height: 100%;
}
.version{
    font-size:12px;
    color: grey;
    text-align: center; 
}
.zhishiword{
    line-height: 20px;
    font-size: 14px;
    margin-left: 20px;
    margin-right: 20px;
    color:#888888;
}
</style>