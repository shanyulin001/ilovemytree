<template>
    <div>
        <!-- 添加银行卡，支付宝页面 -->
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
                        <van-field v-model="where" clearable label="开户支行"  placeholder="请输入开户支行"/>
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
                        <van-field v-model="cardnumber" clearable label="账号" placeholder="请输入支付宝账号"/>
                        <van-cell-group title="请填写支付宝账号信息">
                        <van-field v-model="username" clearable label="姓名" placeholder="实名认证姓名"/>
                        <van-field v-model="userphone" clearable label="手机号" placeholder="手机号"/>
                        </van-cell-group> 
                    </div>
                </div>             
            </van-cell-group> 
            <div class="jifenbutton">
                <van-button  round plain @click="tianjiacard" type="info" style="display:block;width:90%;margin:25px auto;">添加</van-button>
                <van-dialog v-model="show1" title="添加账户成功">
                <div v-if="value1==1">
                    <p style=" padding: 15px;color: grey;">
                    添加账户类型：支付宝<br>
                    账号：{{cardnumber}}<br>
                    姓名：{{username}}<br>
                    手机号:{{userphone}}<br>
                    </p>
                </div>
                <div v-if="value1==0">
                    <p style=" padding: 15px;color: grey;">
                       添加账户类型：银行卡<br>
                 银行卡：{{whichbank}}<br>
                 开户支行：{{where}}<br>
                 银行卡号：{{cardnumber}}<br>
                 持卡人姓名：{{username}}<br>
                 银行预留手机号:{{userphone}}<br> 
                    </p>
                </div>
                </van-dialog>
                </div>          
        </div>
    </div>
</template>
<style>
.affirmcon{
    text-indent: 10px;
    padding: 5px;
    color: grey;
}
</style>

<script>
import API from 'api'
import axios from 'axios';
export default {
    inject:['reload'],
     data() {
    return {
        value1: 0,
        value2: 'a',
        show: true,
        show1: false,
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
        alipayuserphone:'',
        submitcon:'',
        whichbank:''
    }
  },
  methods:{
      tianjiacard:function(){
            switch(this.value2){
                case 'a':
                    this.whichbank='中国农业银行';break;
                case 'b':
                    this.whichbank='中国工商银行';break;
                case 'c':
                    this.whichbank='中国银行';break;
                case 'd':
                    this.whichbank='中国建设银行';break;
                case 'e':
                    this.whichbank='中国交通银行';break;
                case 'f':
                    this.whichbank='中国邮政储蓄银行';break;
                case 'g':
                    this.whichbank='其他银行';break;
            }

            this.show1=true; 
            console.log(this.value2); 
            // axios.post('/info/insertInfo',{uId:500,infotype:this.value1,bankname:this.whichbank,
            //     Openbranch:this.where,Bankaccount:this.cardnumber,cardholder:this.username,phoneNum:this.userphone,})

            this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
            const params = new URLSearchParams()
            params.append('uId',500)
            params.append('infotype',this.value1)
            params.append('bankname',this.whichbank)
            params.append('Openbranch',this.where)
            params.append('Bankaccount',this.cardnumber)
            params.append('cardholder',this.username)
            params.append('phoneNum',this.userphone)
            axios({
            url: API.bdyhk,
            method: 'post',
            params
            })
            .then(() => {//余额
            console.log(this.yuenum); 
            });
            this.reload;
      } 
           
           
//         this.$Dialog.confirm({ 
//             title: '确定账号信息',      
//         }).then(() => {
//                 console.log(123)//确定
//             }).catch(() => {
//             console.log(321)//取消
// });
       //    if(this.value==0){ 
        //          this.submitcon=`添加账户类型：银行卡<br>
        //          银行卡：${this.value2}<br>
        //          开户支行：${this.where}<br>
        //          银行卡号：${this.cardnumber}<br>
        //          持卡人姓名：${this.username}<br>
        //          银行预留手机号:${this.userphone}<br>
        //          ` 
        //     }
        //     else if(this.value==1){
        //          this.submitcon= `添加账户类型：支付宝<br>
        //             账号：${this.alipaynumber}<br>
        //             姓名：${this.alipayusername}<br>
        //             手机号:${this.alipayuserphone}<br>
        //          `
        //     }
  

      }
}
</script>
