<template>
    <div>
         <!-- 积分明细页面 -->
        <div>   
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                
                 <router-link to="/jifen" tag="div">
                 <div class="van-nav-bar__left"><i class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i></div>
                 </router-link>
                 
                <div class="van-nav-bar__title van-ellipsis">积分明细</div>
                
                <div class="van-nav-bar__right"></div>
            </div>
            <div class="section">
               <van-panel title="购买古树古木奖励" desc="2019-11-11" status="+5" style="text-align:left"></van-panel>
               <van-panel title="购买古树古木奖励" desc="2019-11-12" status="+5" style="text-align:left"></van-panel>
               <van-panel title="购买古树古木奖励" desc="2019-11-13" status="+5" style="text-align:left"></van-panel>
            </div>
               <!-- 列表渲染 -->
            <!-- <div v-for="item in jifenall" :key="item.index">
                 <van-panel title="购买古树古木奖励" desc="jifenall.treeTime" status="+5" style="text-align:left"></van-panel>
            </div> -->

        </div>
    </div>
</template>
<style>
    .section{
        margin-top: 10px;
    }
</style>
<script>
// import axios from 'axios';
export default {
    data() {
        return {
           jifenall:''//积分明细
            }
        }
    // mounted () {//渲染,请求参数uId
    //     axios.get('',{uId:111}).then((result) => {//积分
    //         this.jifenall=result.data.data;//将积分数据存到jifenall中
    //     });            
    // }
}
</script>