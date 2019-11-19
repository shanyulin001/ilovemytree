<template>
<div class="wrap">
    <van-icon class='back' @click='back' name="arrow-left" />
    时间的记忆
    <div class="md">
    人生的酸甜苦辣，都在你的笔下
    </div>
    <textarea name="" id="" cols="40" rows="18" ref="area" v-model='num' maxlength='300'></textarea>
    <span style="position:absolute;right:20px;top:510px;">{{num.length}}/300</span>
    <div class="write">
        保存
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            num:'',
        }
    },
   mounted() {
      this.$store.commit('eee');
     
   },
    methods: {
        back(){
            this.$router.push({name:'rj'})
        }
    },
}
</script>
<style scoped>
    .wrap{
        position: relative;
        width:100%;
        height:640px;
        text-align:center;
        padding-top:10px;
        color:white;
        background:url(../assets/rj.png) no-repeat;
    }
    .back{
        position: absolute;
        left:10px;
        top:10px;
        color:white
    }
    .md{
        text-align:left;
        margin-top:80px;
        margin-left:10px
    }
    textarea{
         opacity:0.5 ;
         background:none;
         margin-top:20px;
         padding:10px;
        border-radius:10px
    }
     .write{
     position:absolute;
     width:220px;
     height:50px;
     background:#0fa87d;
     bottom:5%;
     left:22%;
     line-height:50px;
     text-align:center;
     color:white;
     font-size:20px;
     border-radius:40px;
 }
</style>