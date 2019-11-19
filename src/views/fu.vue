
<template>
  <div>
    <div class="box1">
      <p>
        *分享后好友需要支付设置的金币才能查看愿望，支付的金额将返至您的余额。
      </p>
    </div>
    <div class="yuan-money">
      <p>￥</p>
      <input type="text" placeholder="输入对应的金额" />
    </div>
   
  </div>
</template>
  <script>
  export default {
      name:'gong'
  }
  </script>
  <style scoped>
  .box1 p {
  display: block;
  font-size: 12px;
  color: #989c9e;
  margin: 10px 25px;
  /* text-indent: 25px; */
  text-align: left;
}
.yuan-money {
  /* color: #ffffff; */
  font-size: 16px;
  height: 50px;
}
.yuan-money input {
  opacity: 0.6;
  width: 85%;
  height: 40px;
  margin: auto;
  text-indent: 40px;
  font-size: 20px;
  color: black;
}

.yuan-money p {
  position: relative;
  display: inline;
  left: 8%;
  /* top:55px;  */
  color: #ffffff;
  font-size: 20px;
}
  </style>
