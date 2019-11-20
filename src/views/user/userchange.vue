<template>
    <div>
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
              <div class="van-nav-bar__left">
                <router-link to="userinfo" tag="div" class="fa fa-angle-left fa-2x back"></router-link>
              </div>
              <div class="van-nav-bar__title van-ellipsis">修改资料</div>
              <div class="van-nav-bar__right"></div>
            </div>
        <van-cell-group class="change_hp_box">
          上传头像
          <van-uploader
            v-model="fileList"
            multiple
            :max-count="1"
            :after-read='himgchange'
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="username"
            rows="1"
            autosize
            label="ID"
            type="textarea"
            disabled
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
              <van-cell title="男" clickable @click="radio='1'">
                <van-radio slot="right-icon" name="1" />
              </van-cell>
              <van-cell title="女" clickable @click="radio='0'">
                <van-radio slot="right-icon" name="0" />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <van-cell is-link @click="showPopup">生日： {{birthday}}</van-cell>
          <van-popup v-model="show" position="bottom" :style="{ height:'40%' }">
            <van-datetime-picker
            title="生日"
            :max-date="currentTime"
            type="date"
            confirm-button-text=" "
            cancel-button-text=" "
            @change="getColumnValue"
            />
          </van-popup>
          <div class="btn savemsc" >
            <van-button type="info" size="large" @click="userinfo_change">保存信息</van-button>
          </div>
        </van-cell-group>
    </div>
</template>

<script>
  import API from 'api'
  export default {
    data() {
      return {
        fileList: [{
          url: 'https://img.yzcdn.cn/vant/leaf.jpg' 
        }],
        username: '',
        nickname:'',
        phone:'',
        identity:'',
        radio:1,
        currentTime: new Date(),
        birthday: null,
        show: false
      }
    },
    methods: {
      showPopup(){
        this.show = true
      },
      getColumnValue(e){
        let endTimeArr = e.getValues();
          this.birthday = `${endTimeArr[0]}/${endTimeArr[1]}/${endTimeArr[2]}`
      },
      himgchange: function(e){
        // console.log(this.fileList[0].content)
        let formData = new FormData()
          if (e && e.length) {
            e.forEach(item => {
              formData.append("dropzFile", item.file)
            })
          } else {
            formData.append("dropzFile", e.file)
          }
        this.$http({
          url: API.user_img,
          method: 'POST',
          data: formData
        }).then( res =>{
          console.log( res )
        }).catch( err => console.log( err ));
      },
      userinfo_change:function (){
        this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
        const params = new URLSearchParams()
        params.append('uId',this.username)
        params.append('headPortrait',this.fileList[0].url.toString())
        params.append('uNickname',this.nickname)
        params.append('userNumber',this.phone)
        params.append('sex',Number(this.radio))
        params.append('idCard',this.identity)
        params.append('birthday',this.birthday)
        this.$http({
            url: API.user_info_change,
            method: 'post',
            data:params
        })
        .then( res => {
            if(res.data.message == '修改成功'){
                this.$dialog.alert({
                  title: '修改个人信息',
                  message: '个人信息修改成功'
                }).then(() => {
                  this.$router.push('/userinfo')
                });
            } else{
              this.$dialog.alert({
                  title: '修改个人信息',
                  message: '修改失败'
                })
            }
        })
        .catch( err => console.log( err ));
      }
    },
    mounted(){
      this.userNumber = sessionStorage.getItem('uID');
      this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      const params = new URLSearchParams()
      params.append('userNumber',this.userNumber)
      this.$http({
          url: API.user_info,
          method: 'post',
          data:params
      })
      .then( res => {
            console.log(this.fileList[0].url.toString())
            // this.fileList[0].url = res.data.data.headPortrait
            this.username = res.data.data.uId
            this.nickname = res.data.data.uNickname
            this.phone = res.data.data.userNumber
            this.identity = res.data.data.idCard
            this.radio = res.data.data.sex.toString()
            this.birthday = res.data.data.birthday
      })
      .catch( err => console.log( err ));
      //如果传过来是完整时间对象，用下方法格式化
      // let birthday = new Date();
      // this.birthday = birthday.toLocaleDateString()
    }
  }
</script>

<style>
  .back{
    margin-left: 10px;
  }
  .change_hp_box{
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding-left: 10px;
    margin-bottom: 10px;
    margin-top: 15px
  }
  .savemsc{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
