<template>
  <div id="app">
    <router-view/>
 <van-tabbar v-model="active" active-color='#3bc698'>
 <router-link class='change' to="/" > <van-tabbar-item icon="flag-o">生态林 </van-tabbar-item></router-link> 
  <router-link class='change'   to="/oldtree"><van-tabbar-item icon="brush-o"> 古木名树</van-tabbar-item></router-link> 
 <router-link class='change'  to="/feature" > <van-tabbar-item icon="diamond-o">特色认养</van-tabbar-item></router-link> 
 <router-link class='change' to='/forest ' > <van-tabbar-item icon="manager-o">生态林 </van-tabbar-item></router-link> 
  
</van-tabbar>
  </div>
</template>
<script>
export default {
data() {
  return {
    btall:[
      {id:1,name:'生态林',pathname:'/'},
       {id:2,name:'古木名树',pathname:'/oldtree'},
        {id:3,name:'特色认养',pathname:'/'},
        {id:4,我的:'生态林',pathname:'/'},
    ],
    active: 0
  }
},

}
</script>
<style scoped>
#app {
  position:relative;
}
.change{
  display:block;
}
.van-tabbar{
  justify-content: space-around;
      align-items: center;
}



</style>
