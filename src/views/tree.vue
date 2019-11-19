
<template>
<div>
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
  <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
  <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
  <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
    <van-swipe-item><img src='../assets/logo.png'></van-swipe-item>
</van-swipe>
        <div class='bott'>
<div class='tell'>
 <span style="font-size:14px; font-weight: bolder;">生态林认养</span>
  <span style="font-size:12px;color:#dcdcdc" @click='go' >项目介绍<van-icon name="arrow"  /></span>
</div>
<div class='area' is-link @click="showPopup"> <span ref='qy' style="font-size:12px;color:#ececec">区域<van-icon name="arrow-down" /></span>

</div>
<ul>
    <!-- <li v-for="item of tree" :key='item.id'  class="lili"  @click="wantto(item)">
        <div class='introduce' >
            <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573465955543&di=b10a780d769c4a8ae3c55edaa23b42c7&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F6d397c313fb63e1577691a796723825a4f68135d.jpg'>
            <div class='tree'> 
                 <span>{{item.name}}</span> 
                 <span>累计认养{{item.num}}颗</span> 
                 <span>{{item.price}}元/颗</span>  
            </div>
        </div>
        <div class='choose'>
            我要认养
        </div>
    </li> -->
        <li v-for="item of tree" :key='item.treeId'  class="lili"  @click="wantto(item)">
        <div class='introduce' >
            <img :src='item.treePictrue'>
            <div class='tree'> 
                 <span>{{item.treeName}}</span> 
                 <span>累计认养{{item.treeDesc}}颗</span> 
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
<div class='top' @click='want'>
<svg t="1573521173993" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1343" width="200" height="200"><path d="M802.102929 677.692338c-53.570061 0-100.865316 25.20218-132.398897 63.762558L380.342857 573.282618c7.456074-19.251289 11.957173-39.951166 11.957173-61.774512 0-21.934729-4.501099-42.738765-12.064342-62.043638l287.05403-167.364898c31.476987 38.448994 78.721667 63.544005 132.19058 63.544005 94.703097 0 171.705243-77.003952 171.705243-171.707049 0-94.646502-77.058741-171.654067-171.705243-171.654067-94.652523 0-171.604095 77.007565-171.604095 171.654067 0 21.934729 4.505313 42.739969 12.012564 62.045445l-287.054632 167.364295c-31.477589-38.448392-78.721065-63.548219-132.189978-63.548219-94.69828 0-171.705845 77.007565-171.705845 171.654669 0 94.652523 77.058741 171.654067 171.705845 171.654066 53.518885 0 100.82016-25.151004 132.348323-63.705962l289.361777 168.222851c-7.451257 19.249483-11.956571 39.95237-11.956571 61.778727 0 94.69828 77.059343 171.706447 171.654668 171.706447 94.595928 0 171.655271-77.058741 171.655271-171.706447 0-94.650716-77.008769-171.710059-171.604696-171.71006z m-2.572057-621.784427c65.102772 0 118.08521 52.926445 118.08521 118.028013 0 65.103374-52.982438 118.085812-118.08521 118.085812-65.046177 0-117.97202-52.982438-117.97202-118.085812 0-65.101568 52.925843-118.028013 117.97202-118.028013z m-578.886715 573.628208c-65.096752 0-118.079189-52.929455-118.079189-118.028013 0-65.103374 52.982438-118.028013 118.079189-118.028013 65.051596 0 118.034636 52.924639 118.034636 118.028013 0 65.098558-52.931863 118.028013-118.034636 118.028013z m581.458772 338.002063c-65.097354 0-118.028013-52.981835-118.028013-118.083404 0-65.103976 52.930659-118.08521 118.028013-118.08521 65.103374 0 118.034034 52.981233 118.034033 118.08521 0 65.101568-52.930659 118.083404-118.034033 118.083404z m0 0" p-id="1344"></path></svg>
 分享</div>
    <div class='flex' >
        <div class="mid" @click='zhuan'>
    <svg  t="1573547003510" class="icon nini" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3469" width="200" height="200"><path d="M512 971.5C257.9 971.5 51.9 765.8 51.9 512S257.9 52.5 512 52.5 972.1 258.2 972.1 512 766.1 971.5 512 971.5m0-970.4C229.4 1.1 0.4 229.8 0.4 512s229.1 510.9 511.6 510.9c282.6 0 511.6-228.8 511.6-510.9S794.6 1.1 512 1.1" p-id="3470"></path><path d="M726.3 381.4c-6.9 30.3-16.2 58.8-27.9 85.5l-27.9-10.3c10.1-21.4 19.2-48.9 27.3-82.4l28.5 7.2z m-73.4 104.8h91.7V350.4h-91.7v135.8z m-99 241.9h166.4V679H553.9v49.1z m0-81.8h166.4V596H553.9v50.3z m18.8-269.8c9.7 25.1 18 52.3 24.9 81.8l-26.1 6.7c-6.5-27.9-15-54.6-25.5-80l26.7-8.5z m-45.5 109.7H617V350.4h-89.9v135.8z m233.7 73.4v231h-40.7v-26.7H553.9v26.7h-40.7v-231h247.7z m-185.8-325c8.9 22.2 17.4 48.5 25.5 78.8h69.2c10.5-26.7 18.2-53.8 23.1-81.2l41.9 6.1c-5.3 27.1-13.2 52.1-23.7 75.2h71v209.8H489.5V313.5h71c-8.5-25.5-18.2-49.3-29.1-71.5l43.7-7.4zM400.3 663.3c30.4 28.3 56.7 57.4 78.9 87.3l-30.4 29.7c-17-27.5-42.1-58-75.3-91.5l26.8-25.5zM458 263.1v371.6h-38.2V301.9H305v335.3h-38.2V263.1H458z m-111.7 74.6h34.6v196.4c-1.2 69.1-10.7 124.9-28.5 167.3-18.2 38.4-47.6 68.5-88 90.3l-22.5-35.2c38.9-20.6 66-48.3 81.4-83.1 14.2-36.4 21.9-82.9 23.1-139.4V337.7z" p-id="3471"></path></svg>
    <span style="display:block;font-size:10px;">转赠</span>
        </div>
        <p style="border:1px solid #e1e1e1;width:16px;position:relative;left:5px;"></p>
        <div class='mid'  @click='goto'>
        <svg  t="1573547458010" class="icon nini" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4274" width="200" height="200"><path d="M864.256 658.09066667c-36.864 12.288-71.168 31.744-104.448 53.76-48.128 32.768-88.576 76.8-138.752 106.496-58.368 34.304-134.144 37.376-200.192 35.84-61.44-1.536-120.832-23.04-182.272-24.576 48.128-103.424 153.6-184.832 265.728-202.24 69.12-10.752 139.264-4.096 208.384 5.632 50.688 7.168 101.376 15.36 151.552 25.088zM960.512 202.41066667c-51.2 92.16-129.536 174.08-210.944 239.104-42.496 33.792-90.624 62.464-143.36 76.8-57.344 15.872-119.296 17.92-178.688 23.552 5.12-59.392 48.128-109.568 88.064-150.528 44.032-45.056 93.696-88.064 150.528-115.2 46.08-22.016 91.136-38.912 141.312-49.664 50.176-10.24 101.888-16.896 153.088-24.064zM431.616 84.65066667c-7.68 73.728-17.92 146.944-35.328 219.136-16.896 71.168-31.744 145.408-66.048 210.944-60.416 115.712-159.232 204.288-266.24 276.992-25.6-139.264 2.56-279.552 71.68-402.432 69.632-123.904 168.448-237.568 295.936-304.64z" fill="#B9DD80" p-id="4275"></path><path d="M978.432 174.76266667c10.24-1.536 16.896 8.192 15.872 15.872 0 2.048-0.512 3.584-1.536 5.632-52.736 104.448-141.824 199.68-234.496 270.848-44.544 34.304-94.208 62.976-149.504 77.312-62.464 16.384-129.536 17.92-193.536 24.576-3.584 0.512-6.144-0.512-8.192-2.048-3.584-2.048-6.144-5.632-6.144-10.752-0.512-60.928 34.816-115.2 73.728-158.72 45.056-50.176 98.816-100.352 158.72-133.12 108.032-58.88 225.28-73.216 345.088-89.6zM749.568 442.02666667c81.408-65.024 160.256-146.944 210.944-239.104-51.2 6.656-102.912 13.312-153.6 24.576-50.176 10.752-94.72 27.648-141.312 49.664-56.832 27.136-106.496 70.144-150.528 115.2-39.936 40.96-82.432 91.136-88.064 150.528 59.392-5.632 121.344-7.68 178.688-23.552 53.248-15.36 101.376-43.52 143.872-77.312zM925.184 644.26666667c13.312 2.56 10.752 19.968 0.512 24.064-1.536 1.024-3.584 2.048-6.144 2.56-65.536 8.192-125.44 44.544-176.128 84.992-44.032 35.328-84.992 76.288-137.216 98.816-55.808 24.064-125.44 26.624-185.344 25.6-68.096-1.536-133.632-27.648-201.728-24.576-4.096 0-7.68-1.536-9.728-4.096-3.072-2.56-4.608-6.656-2.56-12.288 45.056-113.664 153.088-208.384 273.408-233.472 71.168-14.848 144.384-10.24 216.064-1.024 76.8 10.24 153.088 23.552 228.864 39.424z m-165.376 68.096c32.768-22.528 67.072-41.472 104.448-53.76-50.176-9.728-100.864-18.432-151.552-25.088-68.608-9.216-139.264-16.384-208.384-5.632-112.128 17.408-217.6 98.304-265.728 202.24 61.44 1.536 120.32 23.552 182.272 24.576 66.048 1.536 141.824-2.048 200.192-35.84 50.176-30.208 90.624-73.728 138.752-106.496zM453.632 55.97866667c3.584 2.048 5.632 5.632 5.12 10.752-8.192 83.456-19.456 166.912-38.912 248.32-17.408 72.192-32.768 145.92-67.584 212.48-65.024 124.928-174.592 219.648-290.304 296.448-4.096 2.56-8.192 2.56-11.264 1.024-3.584-1.024-6.144-4.096-7.168-8.704-31.744-147.968-7.168-301.568 66.56-432.64 76.8-136.704 184.32-261.632 328.192-331.264 5.632-2.56 11.776-0.512 15.36 3.584z m-57.344 247.808c16.896-72.192 27.136-145.408 35.328-219.136-126.976 67.072-225.792 180.736-295.424 304.64-69.12 123.392-97.28 263.168-71.68 402.432 106.496-72.704 205.824-161.28 266.24-276.992 33.792-65.536 48.64-139.776 65.536-210.944z" fill="#77AD3A" p-id="4276"></path></svg>
         <span style="display:block;font-size:10px;">许愿树</span>

        </div>
    </div>
 
    
</div>
</template>
<script>
import  axios from 'axios'
export default {
    data() {
        return {
       show: false, 
        tree:[],
      
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
    }
},
computed: {
    
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
      
        this.$router.push({name:'renyang'})
    },
    goto(){
               
     this.$router.push({name:'xys'})

     this.$store.commit('change')
       
    },
    want(){
        this.$router.push('/tree/xys/fx')
    },
    wantto(item){
          this.$store.commit('wenst')
      //  this.$router.push({name:'detail', params: {id: item.id,},query:{name:item.name,price:item.price,old:item.odl}})
      this.$router.push({name:'detail', params: {id: item.treeId,},query:{name:item.treeName,price:item.treePrice,old:item.odl}})
    },
    zhuan(){
        this.$router.push('zhuan');
        this.$store.commit('wenst')
    }

   
},
mounted() {

    this.$store.commit('tree');
//      axios.get('/hello/nn').then((result)=>{
//       // console.log(result)
//        this.tree=result.data.list
//        console.log(this.tree)
       
//    
     axios.get('/tree/all').then((result)=>{
      // console.log(result)
       this.tree=result.data.data
       console.log(this.tree.data)
       
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
 .va-swipe__indicators{
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
.nini{
    width:20px;
    height:20px;
}
.flex{
    position:fixed;
    box-shadow:0px 1px 2px #e0f1f0;
    right:4px;
    bottom:67px;
    border-radius:2px;
   
}
.mid{
    display:flex;
    flex-direction:column;
    align-items: center;
}
.lili{
    margin-top:5px;
    border: 1px solid #9999;
    padding: 10px;
}
.lili:last-child{
    margin-bottom: 20px;
}
</style>