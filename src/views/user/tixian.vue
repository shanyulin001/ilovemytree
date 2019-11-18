<template>
    <div >
        <div class="myallheader">
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
            <div class="van-nav-bar__left">
                <router-link to="/remaining" tag="i">
                <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                </router-link>
                </div>
            <div class="van-nav-bar__title van-ellipsis">提现</div>
            <div class="van-nav-bar__right"></div>
            </div>
    </div>
    <div style="text-align:left">
        <van-cell title="支付宝" is-link value="15522708121" />
        <van-cell title="提现金额(￥)">
                <input type="text" placeholder="请输入提现金额" v-on:blur="shiqufocus" v-model="allrmb" value="allrmb" class="inputyue">
        </van-cell>
        <van-cell :title="'可提现金额：'+yuenum+'元'" :label="'提现手续费：'+yuenum*0.002+'元'">
            <div>
            <van-button round size="small" v-on:click="alltixian">全部提现</van-button>
            <p class="reallynum">实际到账金额：{{yuenum*0.998}}元</p>
            </div>
            </van-cell>
    </div>
    <p></p>
    <ul class="explain" style="margin-top:10px;">
        <li>1.周一至周五17：00前的提现当天到账，17：00后的提现次日到账，节假日提现顺延至工作日处理；</li>
        <li>2.每笔提现金额将收取手续费0.2%；</li>
        <li>3.若您提现过程中有任何问题，请与客服人员联系。</li>
    </ul>
    <van-button plain hairline v-on:click="alltixian2" type="info" size="large" round style="display:block;margin:50px auto;width:90%;background:green;color:#fff;">确认提现</van-button>
     <div><p class="phone">客服电话：110</p> </div>

    </div>
</template>
<style>
    .large{
        font-size: 20px;  
    }
    .explain li {
        line-height: 30px;
        font-size: 12px;
        text-align: left;
        width:90%;
        margin-left: 5%;
        color: #969799;
    }
    .inputyue{
        /* line-height: 30px;
        height: 30px; */
        width: 100px;
        /* font-size: 16px; */
        border: 0;
    }
    .reallynum{
        margin: 0;
        font-size: 12px;
        color: grey;
    }
</style>
<script>
import axios from 'axios';
export default {
    inject:['reload'],
    data(){
        return {
            allrmb:'',
            yuenum:''  
        }
    },
    mounted () {//渲染
        axios.post('/info/user/userinfo',{uId:111}).then((result) => {//余额
            this.yuenum=result.data.data.balance;//将数据存到yuenum中
            console.log(this.yuenum);
            // this.allrmb=this.yuenum;
        });          
    },
    
//   axios.get('/order/treeOrder',{params:{treeid:this.treeslist.treeId,treeName:this.treeslist.treeName,treeTypeId:this.treeslist.treeTypeId,orderAccount:this.treeslist.treePrice*this.value}}).then(result=>{
//         this.treeSurelt=result.data.message;
//         console.log(this.treeSurelt);
//       })


    methods: {
        alltixian:function(){
            this.allrmb=this.yuenum;
            console.log(this.allrmb);
        },
        shiqufocus:function(){
            console.log(this.allrmb);
        },
        alltixian2:function(){
            axios.post('/info/getAmt',{uId:111,balance:this.allrmb}).then(() => {//余额
            console.log(this.yuenum);  
            this.$dialog.alert({
            title: '提现',
            message: `账户提现${this.allrmb}元成功`
                }).then(() => {
                this.reload;
                console.log(123);//确定
                })
            });

        }
    }
}
</script>