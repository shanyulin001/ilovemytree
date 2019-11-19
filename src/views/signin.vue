<template>
    <div>
        <van-nav-bar
  title="许愿树"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <div class='head'>
        
             <div class='headportrait'>
                 <div class='username'>用户名</div>
             </div>
             <div class="detail">
                 <div>
                     <div class='myenergy'>我的能量</div>
                     <div class='number'>300</div>
                 </div>
                 <div>
                     <div class='mytree'>我的树</div>
                     <div class='number'>20</div>
                 </div>
             </div>
      
    </div>
    <div class='signin'>
        <div>
            <div class='icon1'>
                <div class='icon'>
                <van-icon name="send-gift" />
                </div> 
                
                     累计签到 <span class='number'>21</span>  天
                
                
            </div>
           
            
          
        </div>
        
        <div class='energy'> 获得21个能量</div>
    </div>
    </div>
</template>
<script>
export default {
    methods:{
        onClickLeft(){
            history.go(-1)
        }
    }
}
</script>
<style  scoped>
    .head{
        height: 130px;
        background: #0fa87d;
        position:relative;
    }
    .headportrait{
        height: 55px;
        width: 55px;
        border-radius: 50%;
        background: white;
        position: absolute;
        left: 20px;
        top:20px
    }
    .username{
        position: relative;
        left: 75px;
        top:20px;
    }
    .detail{
        width:90%;
        height: 90px;
        background: white;
        position: relative;
        top:85px;
        margin:0 auto;
        border-radius: 5px;
        box-shadow: 0px 1px 3px 1px rgb(185, 185, 185);
        display: flex
    }
    .detail > div{
        width: 50%;
        text-align: center
    }
    .myenergy,.mytree{
        margin:20px 0 10px 0;
        font-size: 16px;
        color: rgb(150, 150, 150)
    }
    .number{
        color:#75ad9d;
        font-size: 20px;
    }
    .signin{
        margin:60px 10px 0 10px;
        display: flex;
         justify-content: space-between;
         font-size:14px;
        
    }
    .icon{
        color:orange
    }
   .icon{
       display: inline-block;
       
   }
   .energy{
       color:lightgray
   }
    
</style>