<template>
    <div>
        <div>
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                    <router-link to="/withdrawdeposit" tag="i">
                    <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
                </div>
                <div class="van-nav-bar__title van-ellipsis">添加账号</div>
                <div class="van-nav-bar__right"></div>
            </div>
        </div>
        <!-- 内容区域 -->
        <div>
            <van-cell-group>
                <van-cell title="类型">
                    <van-dropdown-menu>
                        <van-dropdown-item v-model="value1" :options="option1" />
                    </van-dropdown-menu>
                </van-cell>
                <!-- 银行卡时显示的页面 -->
                <div v-if="value1==0">
                    <div class="withbankcard">
                        <van-cell title="银行卡">
                            <van-dropdown-menu>
                                <van-dropdown-item v-model="value2" :options="option2" />
                            </van-dropdown-menu>
                        </van-cell>
                        <van-field v-model="where" clearable label="开户支行" placeholder="请输入开户支行"/>
                        <van-field v-model="cardnumber" clearable label="银行卡号" placeholder="请输入银行卡号"/>
                        <van-field v-model="cardnumber1" clearable label="确认账号" placeholder="请确认开户支行"/>
                        <van-cell-group title="请填写银行预留信息">
                        <van-field v-model="username" clearable label="持卡人" placeholder="持卡人姓名"/>
                        <van-field v-model="userphone" clearable label="手机号" placeholder="银行预留手机号"/>
                        </van-cell-group>
                    </div>
                </div>
                <div v-else>
                        <!-- 支付宝时显示的页面 -->
                    <div class="withalipay">
                        <van-field v-model="alipaynumber" clearable label="账号" placeholder="请输入支付宝账号"/>
                        <van-cell-group title="请填写支付宝账号信息">
                        <van-field v-model="alipayusername" clearable label="姓名" placeholder="实名认证姓名"/>
                        <van-field v-model="alipayuserphone" clearable label="手机号" placeholder="手机号"/>
                        </van-cell-group> 
                    </div>
                </div>             
            </van-cell-group> 
            <div class="jifenbutton">
                    <van-button v-on:click="tianjiacard" round plain type="info" style="display:block;width:90%;margin:25px auto;">添加</van-button>  
                </div>          
        </div>
    </div>
</template>
<script>

export default {
     data() {
    return {
      value1: 0,
      value2: 'a',
      show: true,
      option1: [
        { text: '银行卡', value: 0 },
        { text: '支付宝', value: 1 },
      ],
      option2: [
        { text: '中国农业银行', value: 'a' },
        { text: '中国工商银行', value: 'b' },
        { text: '中国银行', value: 'c' },
        { text: '中国建设银行', value: 'd' },
        { text: '中国交通银行', value: 'e' },
        { text: '中国邮政储蓄银行', value: 'f' },
        { text: '其他银行', value: 'g' },
      ],
        where:'',
        cardnumber:'',
        cardnumber1:'',
        username:'',
        userphone:'',
        alipaynumber:'',
        alipayusername:'',
        alipayuserphone:''
    }
  },
  methods:{
      tianjiacard:function(){
          this.$dialog.confirm({
            title: '确定账号',
            message: '请确认添加账号的信息'
        }).then(() => {
                console.log(123)//确定
            }).catch(() => {
            console.log(321)//取消
});
          }
      

      }
}
</script>
