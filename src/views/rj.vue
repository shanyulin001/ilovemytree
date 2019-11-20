<template>
<div>
    <div class="rj">
    <van-icon class='back' @click='back' name="arrow-left" />
    <span class='time'>时间的记忆</span>
    <div class='text'>{{msg[num]}}</div>
    </div>
    <div class='im' @click='add'  @touchend='can' ref='bj' >
    </div>
    <div class="write" @click='toeee'>
        写日记
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            msg:['说的在大声点，我也不会告诉别人','我想你一点很忙，所以看前三个自就好',
            '有什么不开心的，说出来让我开心开心','你的秘密我包场了','记录是一段故事，记下是一种人生',
            '种下是回忆，酿出的是美酒','点滴生活，就在此刻，快来与我一起分享把','我的胸那么大，仓下秘密不怕难','你来或者不来，我都在这里等你'],
            num:0,
            
        }
    },
    methods: {
        add(){
          
           let that = this
       
         this.gg= setInterval(()=>{
         
            let top= that.$refs.bj.offsetTop-10+"px";
             if(that.$refs.bj.offsetTop<260){
                  top= that.$refs.bj.offsetTop+10+"px";
              }
                      that.$refs.bj.style.top=top
            },1)
           setTimeout(()=>{
                clearInterval(that.gg)
            },200)
     
            clearTimeout(this.loop)
          
            this.num++;
            if(this.num>this.msg.length-1){
                this.num=0;
            }
        },

        can(){
            clearTimeout(this.loop)
             this.loop=  setTimeout(()=>{
               
              this.num++;
              if(this.num>this.msg.length-1){
                this.num=0;
            }
            },500)
        },
        back(){
            this.$router.push({name:'xys'})
        },
        toeee(){
            this.$router.push({name:'eee'})
        }

    },
    mounted() {
        this.num++
    },
}
</script>
<style scoped>
.rj{
    box-sizing:border-box;
    padding-top:10px;
    padding-left:10px;
    height:650px;
    width:100%;
    background:url(../assets/rj.png) no-repeat;
    background-size:100% 100%;
     position: relative;
}
.back{
    color:white;
    font-size:20px;
}
.time{
    margin-left:30%;
    color:white
}
 .text{
     position:absolute;
     top:30%;
     width:100%;
     text-align:center;
     color:white;
 } 
 .im{
     width:170px;
     height:240px;
     position:absolute;
     top:280px;
     left:27%;
     background:url(../assets/xiao.png) no-repeat;
 }  
 .write{
     position:absolute;
     width:220px;
     height:50px;
     background:#0fa87d;
     top:75%;
     left:22%;
     line-height:50px;
     text-align:center;
     color:white;
     font-size:20px;
     border-radius:40px;
 }
</style>