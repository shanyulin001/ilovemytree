<template>
  <div class="yuan-bakgrond">
    <!-- 头部 -->
    <div class="yuan-tou">
      <i  @click='ru'></i>
      <span>心愿</span>
    </div>
    <!-- 许下我的心愿 -->
    <div class="yuan-kuang">
      <van-icon name="label" />
      <h4>许下我的心愿</h4>
    </div>
    <div>
      <textarea
        class="yuan-wen"
        maxlength="90"
        placeholder="写下我的心愿，90字以内"
      ></textarea>
    </div>

    <div class="yuan-kuang">
      <van-icon name="label" />
      <h4>设置权限</h4>
    </div>
    <div class="box"> 
  
      <ul>
         <li v-for="select of selects" :key="select.id">
           <input type="radio" @click="selecter(select)" name='1'  :class="{biu:variates===select}"/>
          <span>{{select.routerlik}}</span>
         </li>
      </ul>
      <router-view/>
    </div>
    <!-- 可以切换的路由 -->
     <div class="yuan-an">
      <button>完成</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const selects = [
      { id: 1, routeName: "gong", routerlik: "公开" },
      { id: 2, routeName: "fu", routerlik: "付费可见" },
      { id: 3, routeName: "song", routerlik: "送能量可见" }
    ];
    return {
      variates:selects[0],
      // 上面的数组
      selects:selects
   
    }
  },
  methods: {
    // 写一个方法 参数是上面li遍历的每一项数据
     selecter(select ){
     this.variates=select 
     this.$router.push({name:select.routeName})
     },
     test() {
       alert('hello')
     },
     ru(){
       this.$router.push({name:'tree'})
     }
  }
}
</script>

<style scoped>



.yuan-bakgrond {
  width: 100%;
  height: 600px;
  background-image: url("../assets/3.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}
.yuan-tou{
  text-align:center;
}
.yuan-tou i {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 30px;
  top: 30px;
  border-right: 3px solid #999;
  border-top: 3px solid #999;
  -webkit-transform: translate(0, -50%) rotate(-135deg);
  transform: translate(0, -50%) rotate(-135deg);
}
.yuan-tou span {
  font-size: 25px;
  color: #ffffff;
  line-height: 60px;
  padding-top: 15px;
}
.van-nav-bar {
  opacity: 0.5;
}
/* 许下我的心愿 */
.yuan-kuang {
  width: 100%;
  height: 60px;
  text-align: left;
}
h4 {
  position: relative;
  display: inline;
  margin: 0;
  color: #ffffff;
  font-size: 20px;
  left: 10%;
  /* left: 80px; */
  top: 15px;
}

.van-icon-label:before {
  /* content: "\F078"; */
  /* height: 100%; */
  position: relative;
  left: 30px;
  /* left:60px; */
  top: 20px;
  text-align: left;
  display: inline;
  font-size: 25px;
  color: #e6c637;
}
.yuan-wen {
  width: 85%;
  height: 110px;
  font-size: 20px;
  line-height: 30px;
  padding: 10px;
  resize: none;
  background-image: url("http://img5.imgtn.bdimg.com/it/u=4039401266,317725171&fm=26&gp=0.jpg");
  margin-left:15px
}
/* 复选框 */
.box ul {
  overflow: hidden;
  /* height:126px; */
  /* background: darkblue; */
}
.box li {
  float: left;
  margin-left: 30px;
  text-align: left;
}
.box input {
  width: 10px;
  height: 10px;
  /* border: 1px solid #ec1313; */
  border-radius: 5px;
  background: #ffffff;
}
.box input.biu{
  background: blue;
}
.box span {
  color: #ffffff;
  font-size: 18px;
}
.yuan-an {
  
/* position: absolute; */
  bottom: 40px;
  left: 20px;;

  margin-top: 50px;
}
.yuan-an button {
  width: 70%;
  border-radius: 10px;
  height: 50px;
  margin-left:50px;
  background: url("../assets/5.jpg") no-repeat 50% 50%;
  font-size: 18px;
  color: black;
}
</style>

