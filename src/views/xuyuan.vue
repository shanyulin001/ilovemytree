<template>
    <div class="box">
        <div class="box1">
            <div class="bgboxs">
                <span class="bgbox"><img src="../assets/8.jpg" class="bgbox1"></span>
                <p>世界好大</p>
                <p>178*******70</p>
            </div>
            <div class="bgboxs2">
                <p>羊年大喜幸福耀，驼来好运吉祥照。羊啸扬威创大业，扬鞭崔羊热情高。
                    美满生活喜言笑，健康身体乐陶陶。祝你羊年财运享，愿君开心起舞跳。羊年快乐!发送</p>
            </div>
        </div>
        <div class="box2"></div>
        <div class="box3">
            我也要许愿
        </div>
        <div class="box4"></div>
    </div>
</template>
<script>
export default {
    mounted() {
         this.$store.commit('wenst')
    },
}
</script>
<style scoped>
   .box{
       width: 100%;
       
       background:#322878;
       background-size: 100% 100%;
       color: #ffffff
   }
   .box1{
       width: 90%;
       height: 540px;
       margin: 0 auto;
       background: url(../assets/7.png) no-repeat;
       background-size: 100% 100%
   }
   .bgboxs{
       padding-top: 170px
   }
   .bgboxs p{
       line-height: 30px;
       text-align: center;
   }
   .bgbox{
       display: block;
       width: 60px;
       height: 60px;
       margin: 0 auto
   }
   .bgbox1{
       display: block;
       width: 60px;
       height: 60px;
       border-radius: 50%
   }
   .bgboxs2{
       width: 85%;
       margin: 0 auto;
       padding-top: 15px
   }
   .box2{
       width: 100%;
       height: 200px;
       background: url(../assets/9.png) no-repeat;
       background-size: 100% 100%;
       margin-top: 30px
   }
   .box3{
       width: 200px;
       height: 55px;
       border-radius: 20px;
       background:#22af87;
       font-size: 24px;
       line-height: 55px;
       margin: 0 auto;
       text-align: center;
   }
   .box4{
       width: 100%;
       height: 50px;
   }
</style>