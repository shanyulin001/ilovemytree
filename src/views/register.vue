<template>
  <div class="login">
    <div class="login-1">
      <p class="logintitle">
        <router-link to="/about">注册</router-link>
        /
        <router-link to="/login">登录</router-link>
        
        </p>
      <p class="welcome">欢迎来到我爱我树</p>
    </div>
    <form>
      <div class='phone'>
          <span class="mui-icon mui-icon-phone phonepic"></span>       
        <input type="text" v-model='phone' placeholder="输入手机号" />
        <div class='delect' v-if='empty'>
          <van-icon @click='clearphone' name="clear" />
        </div>
      </div>
      <div>
        <label class='lock'>
          <van-icon name="bag-o" />
        </label>
        <input type="password" v-model='password' placeholder=" 输入密码" />
        <!-- <div class='delect' v-if='empty1'>
          <van-icon @click='clearpassword' name="clear" />
        </div> -->
        <!-- <span style='width:200px;margin-top:20px;color:#ccc'>
            获取验证码
        </span> -->
        
      </div>
    </form>
    <div class='check'>
      <!-- <input class="radio_type" type="radio" name="type" id="radio1" checked/>  -->
      <input class="radio_type" type="radio" name="type" id="radio2" @click='radio' /> 
      <p class="argee"> 
         确定即代表您同意
        <span @click='agreement'>《用户注册协议》</span>
      </p>
    </div>
    <button type="button" class="button" @click='zhuce'>注册</button>
    <img src="../assets/disanfang.png" alt="">
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import axios from 'axios';
export default {
  name: "login",
  data(){
    return{
      phone:'',
      password:'',
      empty:false,
      empty1:false,
      check:false,
    }
   
  },
   methods:{
      clearphone(){
        this.phone=''
         
        
      },
      clearpassword(){
        this.password=''
      },
      radio(){
        this.check=true
      },
      zhuce(){
        if(!(/^1[3456789]\d{9}$/.test(this.phone))){ 
       Toast("手机号码有误，请重填！");
       
         }else if(this.check==false){
         Toast("用户注册协议");
       }else if(this.password==''){
         Toast("密码不能为空");
       } else{
            // var ajax = new XMLHttpRequest()
            // ajax.open('post','http://10.31.167.59:8093/user/registe',true)
            // ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
            // ajax.send('userNumber='+this.phone+'&pwd='+this.password)
            // ajax.onreadystatechange=function(){
            //   if(ajax.readyState==4){
            //     console.log(ajax.responseText)
            //   }
            // }
        //         if(ajax.readyState==4){
          // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          // const params = new URLSearchParams()
          //   params.append('userNumber',this.phone)
          //    params.append('pwd',this.password)
              axios.post('/user/registe',{
             userNumber:this.phone,
             pwd:this.password
            // params
           }) .then(function(response){
             console.log(response)
             if(response.message=='注册成功'){
                alert('注册成功')
                 this.$router.push('login')
             }
           })
        
            
           
        //  }
       }
      },
      agreement(){
        this.$router.push('registration-agreement')
      }
    },
    updated(){
      if(this.phone==''){
        this.empty=false
      }else{
        this.empty=true
      }
      if(this.password==''){
        this.empty1=false
      }else{
        this.empty1=true
      }
    }
};
</script>
<style scoped>
*{
  box-sizing: border-box
}
.login {
  padding: 20px;
  background:white;
}
.login-1 {
  padding-top: 30px;height:120px
}
img{
  margin-left:0px!important;
}
.logintitle {
  font-size: 20px;
  color: black;
  font-weight: 600;
}
.welcome {
  font-size: 16px;
}

form > div{
  
  display: flex;
  border-bottom:1px solid lightgray
   /* align-items:flex-end; */
}
form input{
  margin: 14px 0 6px 0;
  border: none
}
.phonepic{
  padding-top:20px;
  color:#0fa87d

}
.lock{
  padding:22px 0 0 2px;
  color:#0fa87d
}
 input::-webkit-input-placeholder {
        color: #ccc;
      }
      input::-moz-input-placeholder {
        color: #ccc;
      }
      input::-ms-input-placeholder {
        color: #ccc;
      }
.radio_type{
    width: 20px;
    height: 20px;
    /* appearance: none; */
    position: relative;
}
.radio_type:before{
    content: '';
    width: 17px;
    height: 17px;
    border: 1px solid #7d7d7d;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
}
.radio_type:checked:before{
    content: '';
    width: 17px;
    height: 17px;
    border: 1px solid #0fa87d;
    background:#0fa87d;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
}
.radio_type:checked:after{
    content: '';
    width: 10px;
    height:5px;
    border: 2px solid white;
    border-top: transparent;
    border-right: transparent;
    text-align: center;
    display: block;
    position: absolute;
    top: 6px;
    left:4px;
    vertical-align: middle;
    transform: rotate(-45deg);
}
.radio_type:checked+label{
    color: #0fa87d;
}
.check{
  display: flex;
  margin-top:15px
}
.argee{
  margin-left: 10px;
  color:#777676;
}
.argee span{
  color: #0fa87d;
}
.button{
  margin-top:20px;
  width: 100%;
  border-radius: 22px;
  height:45px;
  background: #0fa87d;
  color:white;
}
img{
  margin-left: -22px;
  margin-top:80px
}
.delect{
  margin:22px 25px 10px 0
}
</style>