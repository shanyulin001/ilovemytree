<template>
  <div>
    <div title="古树名木认养">
      <router-link to="/" slot="left">
        <div class='back' icon="back">返回</div>
      </router-link>
    </div>
    <div>
      <img :src="assets" />
    </div>
    <div class="div">
      <div class="siv">
        <h5 class="hh">项目简介</h5>
        <span class="sp">
          大树，我为什么爱您？因为您为我们付出了一切……“一切”包括您的生命，
          “生命”多么宝贵的东西，您都能为了我们付出，您说这比山还高比海还深的情谊，
          我们怎能忘怀？所以我崇敬您——大树。
        </span>
        <h5 class="he">认养权益</h5>
        <ul>
          <li v-for="sic of lic" :key="sic.id">
            <p >{{sic.name}}</p> 
            <span>{{sic.list}}</span></li>
        </ul>
        <h5 class="hz">认养依据</h5>
        <p class="pd">点击这里了解详情</p>
      </div>
    </div>
  </div>
</template>
<script>
import img from "@/assets/03744.png";
export default {
  data() {
    return {
      assets: img,
      lic: [
        { id: 1, name: "实施专业养护", list: "被认养的树都会得到最权威的认养" },
        { id: 2, name: "优先续认养权", list: "养护期一年，认养期满认养人有优先续认养权" },
        { id: 3, name: "颁发认养证书", list: "古树名木行政部门建立认养档案，并在养护地区的古树名木信息监管平台上颁布信息" },
        { id: 4, name: "拥有监护权", list: "在我的【古树名木】可查看树木认养情况，数目精准位置" },
      
      ]
    };
  }
};
</script>
<style scoped>
.mint-header {
  background-color: #fff;
  color: #26a2ff;
  font-family: "微软雅黑";
}
img {
  width: 100%;
  height: 100%;
}
.div {
  background: #fff;
  position: absolute;
  width: 100%;
  top: 199px;
  border-radius: 10px 10px 0 0;
}
.siv {
  overflow-y: scroll;
  width: 100%;
  height: 312px;
 }
.div .sp {
  font-size: 12px;
  color: rgba(182, 182, 182, 0.883);
  padding: 0 10px;
  box-sizing: border-box;
  display: inline-block;
}
.hh,
.he,
.hz {
  font-weight: 600;
}
.he,.hh {
  margin-top: 23px;
}
li{
  list-style: none;
  text-align: left;
  box-sizing: border-box;
  padding: 0 30px;
  font-size: 12px;
  color:rgb(161, 161, 161);
  height:50px;
  margin-bottom:30px
  
}
li p{
  color: #333;
  margin-bottom: 4px 
}
.hz{
   margin-bottom: 16px 
}
.pd{
  
  border:1px solid rgb(199, 197, 197);
  height:28px;
  width:280px;
  line-height:28px;
  text-align: center;
  margin:0 20px;
  border-radius: 25px;
  background:green;
  color:#fff; 
  
}
.back{
  color:black;
}
</style>
