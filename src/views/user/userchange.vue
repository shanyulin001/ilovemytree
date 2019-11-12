<template>
    <div>
      <div class="title">
        <router-link to="userinfo" tag="div" class="fa fa-angle-left fa-2x back"></router-link>
        修改资料
        <div></div>
      </div>
        <van-cell-group class="change_hp_box">
          上传头像
          <van-uploader
            v-model="fileList"
            multiple
            :max-count="1"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="username"
            rows="1"
            autosize
            label="ID"
            type="textarea"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="nickname"
            rows="1"
            autosize
            label="昵称"
            type="textarea"
            placeholder="请输入昵称"
          />
          <van-field
            v-model="phone"
            rows="1"
            autosize
            label="手机号"
            type="number"
            placeholder="手机号"
          />
          <van-field
            v-model="identity"
            rows="1"
            autosize
            label="身份证号"
            type="number"
            placeholder="请输入身份证号"
          />
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell title="男" clickable @click="radio = '1'">
                <van-radio slot="right-icon" name="1" />
              </van-cell>
              <van-cell title="女" clickable @click="radio = '0'">
                <van-radio slot="right-icon" name="0" />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <van-datetime-picker
            title="生日"
            v-model="birthday"
            type="date"
            :min-date="minDate"
            visible-item-count='1'
          />
          <div class="btn savemsc" >
            <van-button type="info" size="large" to="userchange">保存信息</van-button>
          </div>
        </van-cell-group>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      username: '',
      nickname:'',
      phone:'',
      identity:'',
      radio:'1',
      currentDate: new Date(),
    }
  },
}
</script>

<style>
  .back{
    margin-left: 10px;
  }
  .title{
    display: flex;
    justify-content:space-between;
    line-height: 24px;
    margin: 10px 0;
    text-align: center;
  }
  .change_hp_box{
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding-left: 10px;
    margin-bottom: 10px;
  }
  .savemsc{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
