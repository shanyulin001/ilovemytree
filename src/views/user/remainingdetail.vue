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
    
    <!-- 列表渲染 -->
     <!-- <van-cell-group>
    <div v-for="item in numbers" :key="item.index">
  <van-cell :title="item.desc" :label="'余额:'+item.balance">
      <div>
          <p class="remaingtime">{{item.createTime}}</p>
          <p class="changenum">{{item.orderAmt}}</p>
      </div>
  </van-cell>
    </div>
    </van-cell-group> -->
     <div>
        <van-cell-group>
  <van-cell title="平台充值" label="余额：800.00">
      <div>
          <p class="remaingtime">2019-11-12</p>
          <p class="changenum">+400</p>
      </div>
  </van-cell>
  <van-cell title="平台提现" label="余额：400.00">
      <div>
          <p class="remaingtime">2019-11-11</p>
          <p class="changenum">-100</p>
      </div>
  </van-cell>
  <van-cell title="平台充值" label="余额：500.00">
      <div>
          <p class="remaingtime">2019-11-10</p>
          <p class="changenum">+100</p>
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
// <script>
// import axios from 'axios';
// export default {
//     data(){
//         return{
//             numbers:''
//         }
//     },
//     mounted () {//渲染
//         axios.post('/info/queryBalanceDetail',{uid:111}).then((result) => {//余额
//             this.numbers=result.data.data.list;//将数据存到numbers中
//             console.log(this.numbers[1].desc)
//         });            
//     }
// }
// </script>