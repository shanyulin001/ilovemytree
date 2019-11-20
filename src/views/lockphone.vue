<template>
  <div class="login">
    <div class="login-1">
      <p class="logintitle">绑定手机号</p>
      <p class="welcome">绑定会让你的账号更安全，还可以直接使用手机登录</p>
    </div>
    <form>
      <div class='phone'>
     
          <span class="mui-icon mui-icon-phone phonepic"></span>
        
        <input type="text" placeholder="输入手机号" />
      </div>
      

      <div>
        <label class='lock'>
          <van-icon name="bag-o" />
        </label>
        <input type="password" placeholder=" 输入密码" />
      </div>
    </form>
    <div>
      <input class="radio" name="radio1" type="radio" />
      <p class="check">
        确定即代表您同意
        <span>《用户注册协议》</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "login"
};
</script>
<style scoped>
*{
  box-sizing: border-box
}
.login {
  padding: 20px;
  
}
.login-1 {
  padding-top: 30px;height:120px
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
</style>