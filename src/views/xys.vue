<template>
<div style='position: relative;height:2000px;'>
        <div class="top" @click='signin'>
            <span style="display: block;"><img src="" alt=""> <span>世界好大</span></span>
             <span style="display: block;"><img src="" alt=""> <span>300</span></span> 
        </div>
    <img src='../assets/111.jpg' style="width:100%;height:450px" />
    <van-popup v-model="fell" style=' overflow: unset;width:220px;height:260px;padding-left:10px;border-radius:5px;'>
        <p style='color:green;text-align:center;'>-许愿规则说明-</p>
        <p style='font-size:10px;font-weight: normal;'>1.每个注册用户享有1次免费许愿的机会。</p>
        <p style='font-size:12px;font-weight: normal;'>2.每个许愿消耗2能量， 每日最多许愿3次。</p>
        <p style='font-size:12px;font-weight: normal;'>3.愿望可设置公开、赠送金额可见、能量与金额将放入个人账户。</p>
        <p style='font-size:12px;font-weight: normal;'>4.账户余额可以提现至支付宝与银行卡，平台收取2%的手续费。</p>
        <div style="width:140px;height:30px;color:white;border-radius:5px;background:green;position: absolute;left:43px;bottom:13px;line-height:30px;text-align: center; ">我已阅读相关规则</div>
     <van-icon @click='abrogate'  class='xx' name="cross" style='position: absolute;left:45%;top:105%;color:white;' />
</van-popup>
    <div ref='qd' class='cc' style="border:1px solid white;font-size:8px;width:42px;border-radius:10px;
    color:white;position:relative;left:38px;top:-87px;z-index:10;" @click='check'>
    点击签到
    </div>
    <div class='mf'   style="border:1px solid white;font-size:8px;width:42px;border-radius:10px;
    color:white;position:relative;left:98px;top:-101px;background:#f75757;z-index:10;">
    免费许愿
    </div>
    <img src='../assets/stl.jpg' class='stl'>
    <div class='logo'>
        <img src='../assets/qd.jpg' class='g'>
        <img src='../assets/xy.jpg' class='g' @click='mf'>
        <img src='../assets/xrj.jpg' class='g' @click='toword'>
    </div>
    <div class="list">
        <span>排行榜</span>
        <div class='search'>
        <van-icon class="fdj" name="search" />
        <input type="text" placeholder="好友查找">
        </div>
    </div>
    <ul>
        <li style="padding:0 10px;" class="lili">
           <span style="margin-right:10px;color:#ccd7d4">20</span>
           <img src='../assets/xrj.jpg' class='g' style="border-radius:50%">
           <span style="display:inline-block;margin-right:20px;">
           <span style="display:block;font-size:14px;">世界好大</span>
           <span style="display:block;color:#999999;font-size:14px;" >认领2棵树</span>
           </span>
           <span style="color:#19ac83;font-size:14px;">300能量</span>
        </li>
    </ul>
</div>
</template>
<script>
export default {
   data() {
       return {
          fell:true
       }
   },
   mounted() {
   
      if(localStorage.getItem("lastname")){
           this.$refs.qd.innerHTML="已领取";
           this.$refs.qd.style.background='#9c9c9c';
      }
     if(new Date().getHours()==23&&new Date().getMinutes()==59&&new Date().getSeconds()==59){
      localStorage.removeItem("lastname");
        this.$refs.qd.innerHTML="点击签到";
           this.$refs.qd.style.background='';
        }
    
        
    
   },
   methods: {
       abrogate(){
           this.fell=false
       },
       check(){
           
           this.$refs.qd.innerHTML="已领取"
           this.$refs.qd.style.background='#9c9c9c'
            localStorage.setItem("lastname", "1");
            return
     
       },
       toword(){
           this.$router.push({name:'rj'})
        this.$store.commit('toxys')
       },
       mf(){
           this.$router.push({name:'make'})
       },
       signin(){
           this.$router.push({name:'signin'})
       }
   },
}
</script>
<style scoped>

.xx{
    font-size:25px;
     color:white;
}
.stl{
    
    position: absolute;
    right:10px;
    top:26px;
    width:50px;
    height:40px;
}
.g{
    width:40px;
    height:40px;
    margin-right:20px;
}
.g:nth-child(1){
    margin-left:20px;
}
.g:nth-child(2){
      position: relative;
      top:-2px;
}
.logo{
    position: relative;
    top:-110px;
}
.list{
    display:flex;
    justify-content:space-between;
    padding:0 10px;
    position: relative;
    top:-30px;
}
.search{
    width:90px;
    border:2px solid #1aa176;
    border-radius:10px;
   
}
.search input{
    border:none;
    width:70px;
    height:79%;
  
}
.fdj{
    color:#1aa176;
    position:relative;
    top:3px;
}
input::-webkit-input-placeholder{
  color:#1aa176;
}
.lili{
    display:flex;
    align-items: center;
    
}
.cc,.mf{
    text-align:center;
}
.top{
    position: absolute;
    top:1rem;
    left: -1rem;
    border: 1px solid white;
    border-radius: 30px;
    height: 3rem;
    width:7rem;
    text-align: center;
}
</style>