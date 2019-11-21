<template>
<div >
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
  <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
  <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
  <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
    <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
</van-swipe>
        <div class='bott'>
<div class='tell'>
 <span style="font-size:14px; font-weight: bolder;">古树古木认养</span>
  <span style="font-size:12px;color:#dcdcdc" @click='go'>项目介绍<van-icon name="arrow" /></span>
</div>
<div class='area' is-link> <span ref='qy'  @click="showPopup"  style="font-size:12px;color:#ececec;margin-right:10px;">区域<van-icon name="arrow-down" /></span>
<span  style="font-size:12px;color:#ececec;">综合排序<van-icon name="arrow-down" /></span>
</div>
<ul>
    <li v-for="item of arr" :key="item.id" >
        <div class='introduce'>
            <img :src='item.treePictrue'>
            <div class='tree'> 
                <span>{{item.treeName}}</span> 
                 <span>累计认养5000颗</span> 
                 <span>{{item.treePrice}}元/颗</span>  
            </div>
        </div>
        <div class='choose'>
            我要认养
        </div>
    </li>
</ul>
            </div>
<van-popup v-model="show" position='top'><van-area :area-list="areaList"  @confirm='onconfirm'
  @cancel='cancel'
  title="城市"/></van-popup>
<div class='top'>
<svg t="1573521173993" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1343" width="200" height="200"><path d="M802.102929 677.692338c-53.570061 0-100.865316 25.20218-132.398897 63.762558L380.342857 573.282618c7.456074-19.251289 11.957173-39.951166 11.957173-61.774512 0-21.934729-4.501099-42.738765-12.064342-62.043638l287.05403-167.364898c31.476987 38.448994 78.721667 63.544005 132.19058 63.544005 94.703097 0 171.705243-77.003952 171.705243-171.707049 0-94.646502-77.058741-171.654067-171.705243-171.654067-94.652523 0-171.604095 77.007565-171.604095 171.654067 0 21.934729 4.505313 42.739969 12.012564 62.045445l-287.054632 167.364295c-31.477589-38.448392-78.721065-63.548219-132.189978-63.548219-94.69828 0-171.705845 77.007565-171.705845 171.654669 0 94.652523 77.058741 171.654067 171.705845 171.654066 53.518885 0 100.82016-25.151004 132.348323-63.705962l289.361777 168.222851c-7.451257 19.249483-11.956571 39.95237-11.956571 61.778727 0 94.69828 77.059343 171.706447 171.654668 171.706447 94.595928 0 171.655271-77.058741 171.655271-171.706447 0-94.650716-77.008769-171.710059-171.604696-171.71006z m-2.572057-621.784427c65.102772 0 118.08521 52.926445 118.08521 118.028013 0 65.103374-52.982438 118.085812-118.08521 118.085812-65.046177 0-117.97202-52.982438-117.97202-118.085812 0-65.101568 52.925843-118.028013 117.97202-118.028013z m-578.886715 573.628208c-65.096752 0-118.079189-52.929455-118.079189-118.028013 0-65.103374 52.982438-118.028013 118.079189-118.028013 65.051596 0 118.034636 52.924639 118.034636 118.028013 0 65.098558-52.931863 118.028013-118.034636 118.028013z m581.458772 338.002063c-65.097354 0-118.028013-52.981835-118.028013-118.083404 0-65.103976 52.930659-118.08521 118.028013-118.08521 65.103374 0 118.034034 52.981233 118.034033 118.08521 0 65.101568-52.930659 118.083404-118.034033 118.083404z m0 0" p-id="1344"></path></svg>
 分享</div>
</div>
</template>
<script>
import  axios from 'axios'
export default {
    data() {
        return {
       show: false,   
       arr:[],
 areaList:
{
  province_list: {
    110000: '安徽省',
    330000: '浙江省'
  },
  city_list: {
    110100: '池州',
    110101:'黄山',
    110102: '芜湖',
    110103: '蚌埠',
    330100: '杭州',
  },
  county_list: {
    110101: '九华山',
    
    330105: '杭州',
    330106: '嘉兴',
    // ....
  }
}
// show-toolbar:false,

    }
},
methods: {
    onconfirm(e){
        this.show=false;
        this.$refs.qy.innerHTML=`${e[2].name}<i data-v-23667890="" class="van-icon van-icon-arrow-down"><!----></i>`
     
    },
      showPopup() {
      this.show = true;
    },
    cancel(){
         this.show=false
    },
       go(){
        console.log(1)
        this.$router.push({name:'renyang'})
    }
},
mounted() {
      axios.get('/tree/all').then((result)=>{
      // console.log(result)
       this.arr=result.data.data
       console.log(this.tree)
       
   })
},
}
</script>

<style  scoped>
.tell{
    display:flex;
    justify-content: space-between;
    margin-bottom:10px
}
.van-swipe__indicators{
     left:95%;
}
.van-icon{
    top:2px
}
.bott{
    padding:20px
} 
.introduce img{
    width:70px;
    height:70px;
    border-radius:3px;
}
li{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.introduce{
    display:flex;
}
.tree{ margin-left:10px}
.tree span{
    display:block;
}
.tree span:nth-child(1){
font-size:14px;
    font-weight: bolder;
}
.tree span:nth-child(2){
    
    color:#c1c1c1;
}
.tree span:nth-child(3){
    color:#ff8d86
}     
     
.tree span:nth-child(2),.tree span:nth-child(3){
    font-size:12px;
    margin-top:10px
}
.area{
    margin-bottom:20px
}
.choose{
    width:70px;
    height:30px;
    background:#0fa87d;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    font-size:12px;
    color:white;
}
svg{
    width:10px;
    height:10px;
    position: relative;
    top:1px;
    color:#d5e4e1
}
.top{
   position: absolute;
   width:58px;
   height:22px;
   font-size:12px;
   background:#91b6ae;
   border-radius:12px;
   line-height:22px;
   text-align:center;
   color:#d5e4e1;
   right:15px;
   top:15px;
}
</style>