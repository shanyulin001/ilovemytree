<template>
  <div>
    <div>
      <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
        <div class="van-nav-bar__left">
          <router-link to="/shezhi" tag="i">
          <i class="van-icon van-icon-arrow-left van-nav-bar__arrow">
            <!---->
          </i>
          </router-link>
        </div>
        <div class="van-nav-bar__title van-ellipsis">设置</div>
        <div class="van-nav-bar__right"></div>
      </div>
    </div>
    <van-cell-group title="当前登录账号" class="account">
      <van-cell title="手机号" :label="usernum" is-link/>
    </van-cell-group>
    <van-cell-group title="其他登录方式" class="account">
      <van-cell title="微信" value="已绑定" label="ID：110" is-link />
      <van-cell title="QQ" value="绑定" is-link />
      <van-cell title="新浪" value="绑定" is-link />
    </van-cell-group>
    <div class="button1">
    <!-- <van-button round type="info">退出账号</van-button> -->

    <van-button plain round hairline type="info" size="large" to="about" style="display:block;margin:0 auto;width:90%;text-align:center;">退出账号</van-button>
    </div>
  </div>
</template>
<style>
    .account{
        text-align: left;
    }
    .button1{
        margin-top: 140px;
        background: #fff;
    }
</style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
           usernum:''
            }
        },
    mounted () {//渲染
        axios.post('/user/userinfo',{userNumber:15258469872}).then((result) => {//用户
            this.usernum=result.data.data.userNumber;//将用户手机号存到usernnum中
            console.log(result.data.data.userNumber);
        });            
    }
}
</script>