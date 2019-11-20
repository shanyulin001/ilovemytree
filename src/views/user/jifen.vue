<template>
    <div>
        <!-- 积分页面首页 -->
        <div class="jifenbg" style="background: #0fa87d;">   
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;background: #0fa87d;">
                <div class="van-nav-bar__left">
                     <router-link to="/userhome" tag="i">
                    <i style="color:#fff" class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i>
                    </router-link>
                    </div>
                <div class="van-nav-bar__title van-ellipsis" style="color:#fff">积分</div>
                <router-link to="/jifenuse" tag="div">
                <div class="van-nav-bar__right" style="color:#fff">？</div>
                </router-link>
            </div>
            <div>
                <p class="integral">{{jifennum}}</p>
                <div class="jifenbutton">
                    <van-button round plain to="/jifendetails" type="info" style="border-color:#fff;color:#fff;background:rgba(255,255,255,0)">积分明细</van-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .integral{
        color: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        margin: 10px 0;
    }
    .jifenbutton{
        padding:20px;
       
    }
    .jifenbutton button{
        display: block;
         margin: 0 auto;
    }
</style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
           jifennum:''
            }
        },
    mounted () {//渲染
        this.$store.commit('change')
        axios.get('/info/scoreDetail',{uId:500}).then((result) => {//积分
            this.jifennum=result.data.data.oTreeNum*5;//将积分数据存到jifennum中
            console.log(result.data.data.oTreeNum);
        });            
    }
}
</script>