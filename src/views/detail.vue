<template>
  <div class="xiang">
    <div class="xiang_shu" @click="back">
      <van-nav-bar :title="this.$route.query.name"   left-arrow >
            
      </van-nav-bar>
      <div class="xiang_img">
        <img src="../assets/1.jpg" alt />
      </div>
      <div class="xiang_ming">
        <ul>
          <li>{{this.$route.query.name}}</li>
          <li>树龄{{this.$route.query.old}}</li>
          <li>园区</li>
        </ul>
        <span>价格:{{this.$route.query.price}}</span>
      </div>
    </div>
    <!-- 历史典故 -->
    <div class="xiang_text">
      <h3>历史典故</h3>
      <p>
        最近有一一个谣言,说我喜欢你。啊?其实那不是谣言。
        我最近想买一块地。 哪里的地?你的死心塌地。
        你知道我为什么感冒了吗?因为着凉了?不,因为我对你完全没
        有抵抗力。
        你猜我想吃什么?不知道啊。痴痴地望着你。
      </p>
    </div>
    <div class="xiang_yi">
      <img src="../assets/2.jpg" alt />
    </div>
    <div class="xiang_xie">
      <van-radio-group v-model="radio">
        <van-radio name="1" >您已阅读生态林认养协议</van-radio>
      </van-radio-group>
    </div>
    <div class="xiang_buttom">
      <van-goods-action>
        <van-goods-action-icon class="xiang_chat" icon="chat-o" text="客服" />
      
        <van-goods-action-button color="rgb(7, 116, 131)" type="warning" text="立即领养" />
      
      </van-goods-action>
    </div>
  </div>
  
</template>

<script>
//import axios from 'axios';

export default {
    // 获取线上数据
    data() {
     return {
      movies:'',
   
      radio: "1"
     } 
    },
    mounted() {
      //console.log(this.$route.query)
      this.$store.commit('wenst')
   },
   updated() {
   
   },
   methods: {
     back(){
       console.log(1)
      // this.$router.push('/tree')
    window.history.go(-1)
    this.$store.commit('tree')
     }
   },
  

   }

</script>



<style scoped>
.xing {
  width: 100%;
  height: 100%;
  position: relative;
  background: rgb(99, 93, 93);
}

.xiang_shu {
  width: 100%;
  height: 30px;
  position: relative;
}
.xiang_titrl {
  font-size: 20px;
  font-weight: 800;
}

.xiang_img img {
  width: 100%;
  height: 200px;
  background: rgb(7, 116, 131);
  position: relative;
  z-index: 999;
}
.xiang_ming {
  width: 85%;
  height: 100px;
  margin: auto;
  background: violet;
  position: relative;
  top: -50px;
  z-index: 1000;
  border-radius: 5px;
}
.xiang_ming li {
  /* left: -30%; */
  top: 10px;
  margin: 7px 0;
  text-align: left;
  position: relative;
  left: 10px;
}
.xiang_ming li:nth-child(1) {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}
.xiang_ming span {
  /* text-align: right; */
  position: relative;
  top: -50px;
  right: -100px;
  font-size: 20px;
  color: rgb(2, 36, 13);
  font-weight: 500;
}
.xiang_buttom {
  width: 100%;
  height: 80px;
  position: relative;
  bottom: 0;
  left: 0;
}
.xiang_chat {
  width: 30%;
}
.xiang_text {
  width: 90%;
  height: 100%;
  margin: auto;
  position: relative;
  top: 280px;
  background: rgb(221, 215, 215);
}
.xiang_text h3 {
  margin: 15px;
  text-align: left;
  margin-left: 25px;
  font-weight: 700;
}
.xiang_text p {
  height: 100%;
  margin: 25px;
  font-size: 18px;
}
.xiang_yi {
  position: relative;
  top: 300px;
  margin: 0 25px;
}
.xiang_yi img {
  width: 100%;
  height: 200px;
}
.xiang_xie {
    width: 90%;
    height: 30px;
    margin: auto;
  position: relative;
  top: 300px;
  /* background: forestgreen; */
  margin-bottom: 60px;
}
</style>

