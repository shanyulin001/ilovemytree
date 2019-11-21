<template>
    <div>
        <!-- 余额页面 -->
        <div class="remaininghead">
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                    <router-link to="/userhome" tag="i">
                    <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
                    </div>
                    <div class="van-nav-bar__title van-ellipsis">我的余额</div>
                    <router-link to="/remainingdetail" tag="div">
                    <div class="van-nav-bar__right">明细</div>
                    </router-link>
                    </div>
        </div>
        <div>
            <div class="myyue">
                <p class="rmb">账户余额（元）</p>
                <p class="yuenum">{{yuenum}}</p>
            </div>
            <!-- {{movieList}}测试用 -->

        </div>
        <van-button plain hairline type="info" size="large" to="/tixian" round style="display:block;width:90%;margin:25px auto;">提现</van-button>
    </div>
    

</template>
<style>
    .remaininghead{
    border-bottom: 1px solid #bbb;
    }
    .myyue{
        background: green;
        border-radius: 10px;
        margin: 5px 10px;
        height: 150px;
        overflow: hidden;
    }
    .rmb{
        margin-top: 50px;
        text-align: center;
        color: white;
    }
   .yuenum{
       text-align: center;
        color: white;
   }
</style>
<script>
import API from 'api'
import axios from 'axios';
export default {
    data() {
        return {
            show: false,
            ser:''//余额,
            }
        },
    mounted () {//渲染
    //  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
    //         const params = new URLSearchParams()
    //         params.append('userNumber',this.userNumber)

        this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
        const params = new URLSearchParams()
        params.append('userNumber',15258469872)
        axios({
            url: API.user_info,
            method: 'post',
            params
        })
        // axios.get('http://192.168.63.128/user/userinfo',{userNumber:13738739598})
        .then((result) => {//余额
            this.yuenum=result.data.data.balance;//将数据存到yuenum中
            this.numphone=result.data.data.userNumber;
            console.log(this.yuenum);
            // this.allrmb=this.yuenum;
        });          
    },            
    }

</script>