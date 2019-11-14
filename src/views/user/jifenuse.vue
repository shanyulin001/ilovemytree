<template>
    <div>
        <!-- 积分用途页面 -->
        <!-- 头部 -->
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                     <router-link to="/jifen" tag="i">
                    <i style="color:grey" class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
                    </div>
                <div class="van-nav-bar__title van-ellipsis">积分用途</div>
                <div class="van-nav-bar__right"></div>
            </div>
            <!-- 内容区域 -->
        <div class="jifenusesection">
            <!-- 认养积分用途 -->
            <div class="jifenusedo">
                <van-divider :style="{ color: '#888', borderColor: '#888'}">认养积分用途</van-divider>
            </div>
            <!-- 第一个框 -->
            <div class="jifenusefirst">
                <p>收养点是对您支持森林绿色环保事业的奖励。如果您在平台上采用任何一棵树，我们将给予您相应采用值的5%(取整点，最低值为1点)。</p>
            </div>
            <!-- 图片 -->
            <div class="jifenusepic">
                <div  class="jifenusepic1">
                    <img src="" alt=""> 
                </div>
               <p class="publicuse">公益积分的用途</p>
            </div>
            <!-- 第二个框 -->
            <div class="jifenusefirst">
                <p>1.采用积分可以换大点的形式或分+现金,和5个旅游景点的门票可以购买</p>
                <p>2.采用点可以在扶贫商城的形式完整点或点+现金交易,购买商城的农副产品</p>
                <p>3.平台不定期采用推活动,将双加分,更用采用点正在开发,请期待</p>
            </div>
        </div>
    </div>
</template>
<style>
    .jifenusesection{
        width: 100%;
        padding: 10px;
        overflow: hidden;
    }
    .jifenusedo{
        width: 40%;
        color: grey;
        font-size: 12px;
        line-height: 20px;
        margin: 0 auto;
        /* margin-top: 20px; */
    }
    .jifenusefirst{
        width: 92%;
        padding: 5px;
        border-radius: 8px;
        border: 1px solid #777;
    }
    .jifenusefirst p{
        line-height: 20px;
        font-size: 12px;
        margin: 0;
    }
    .jifenusepic{
        width: 92%;
    }
    .jifenusepic1{
        width: 100%;
        height: 250px;
    }
    .jifenusepic1 img{
        width: 100%;
        height: 250px;
    }
    .publicuse{
        line-height: 20px;
        color: #bbb;
        text-align: center;
        margin: 0;
        font-size: 12px;
    }
</style>