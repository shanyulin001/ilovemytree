<template>
  <div class="xuan_bady">
    <div class="jiao">
      <i> <img src="../assets/返回按钮.png" alt="" /> </i>
      <h3 style="text-align:center">确认订单</h3>
    </div>
    <div class="xuan_tou">
      <div class="xuan_img">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618756997,2657215607&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="xuan_text">
        <h4>树明</h4>
        <ul>
          <li>800年</li>
          <li>安徽人民政府发布</li>
        </ul>
      </div>
    </div>
    <!-- 下面的数据 -->
    <div class="xuan_jia">
      <div>
        <p>单价</p>
        <span>40000.00元/棵</span>
      </div>
      <div class="ran_ku">
        <p>认养数量</p>
        <input type="text" placeholder="输入数量" /><span>棵</span>
      </div>
      <div>
        <p>期限</p>
        <span>1年</span>
      </div>
      <div>
        <p>代付金额</p>
        <span>40000.00元</span>
      </div>
      <div class="ran_an">
        <p>支付方式</p>
        <button>微信</button>
        <span> > </span>
      </div>
      <!-- <van-panel title="单价" status="400000.00元/猪"> </van-panel> -->
    </div>
    <div class="butto" >
      <button  style="margin: auto;display:block">提交</button>
    </div>
  </div>
</template>


<style scoped>
#nav{
  background: rgb(192, 189, 189);
}
.jiao {
  position: relative;
  width: 100%;
  height: 60px;
  border: 1px solid rgb(230, 225, 225);
  /* background: blueviolet; */
}
.jiao i img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 5%;
  top: 15px;
}
.jiao h3 {
  margin: 0;
  line-height: 60px;
}
.xuan_tou {
  width: 90%;
  height: 130px;
  margin: auto;
  margin-top: 20px;
  /* background: darkgray; */
}
.xuan_img img {
  width: 100px;
  height: 100px;
  /* position: relative; */
  /* text-align: left; */
  position: absolute;
  top: 95px;
  left: 10%;
}

.xuan_text h4 {
  /* text-align: left; */
  position: absolute;
  top: 70px;
  left: 45%;
}
.xuan_text ul {
  margin-top: 15px;
  text-align: left;
  position: absolute;
  top: 110px;
  left: 45%;
}
.xuan_jia {
  width: 90%;
  height: 300px;
  margin: auto;
  margin-top: 40px;
  /* background: chartreuse; */
}
.xuan_jia div {
  position: relative;
  border: 1px solid rgb(252, 250, 248);
  height: 50px;
  display: block;
}
.xuan_jia p {
  text-align: left;
  font-size: 16px;
}
.xuan_jia span {
  position: absolute;
  right: 10px;
  top: 15px;
  font-size: 14px;
  color: red;
}
.ran_ku input {
  width: 85px;
  height: 20px;
  position: absolute;
  right: 25px;
  top: 15px;
  outline: none;
  border: none;
  text-align: right;
}
.ran_ku span {
  color: black;
}
.ran_an button {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 14px;
  border: none;
  background: #ffffff;
}
.ran_an span {
  position: absolute;
  right: 10px;
  top: 18px;
  color: #000;
}
.butto button{
  width: 80%;
  margin: auto;
  height: 50px;
  border-radius: 10px;
  background:rgb(105, 105, 218);
line-height: 50px;
font-size: 20px;
color: #ffffff;
}
</style>
<script>
export default {
  name: "verify",
  mounted() {
    this.$store.commit('wenst')
  },
  
};
</script>
