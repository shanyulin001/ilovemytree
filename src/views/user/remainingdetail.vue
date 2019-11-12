<template>
    <div>
        <!-- 余额明细页面 -->
         <div class="header">
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
            <div class="van-nav-bar__left">
                <router-link to="/remaining" tag="i">
                <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                </router-link>
            </div>
            <div class="van-nav-bar__title van-ellipsis">余额明细</div>
            <div class="van-nav-bar__right"></div>
            </div>
    </div>
    <div>
        <van-cell-group>
  <van-cell title="平台充值" label="余额：500.00">
      <div>
          <p class="remaingtime">2019-11-11</p>
          <p class="changenum">-100</p>
      </div>
  </van-cell>
  <van-cell title="平台充值" label="余额：500.00">
      <div>
          <p class="remaingtime">2019-11-11</p>
          <p class="changenum">+100</p>
      </div>
  </van-cell>
  <van-cell title="平台充值" label="余额：500.00">
      <div>
          <p class="remaingtime">2019-11-11</p>
          <p class="changenum">-100</p>
      </div>
  </van-cell>
</van-cell-group>
    </div>
    <div><p class="phone">客服电话：110</p> </div>
    </div>
</template>
<style>
    .phone{
        font-size:12px;
        color: #bbb;
        margin-top: 100px;
        text-align: center;
    }
    .remaingtime, .changenum{
        margin: 0;
    }

</style>