<template>
  <div class="acti">
   
      <span class="mui-icon mui-icon-arrowleft" @click.prevent="kkkk"></span>
    
    <div> </div>
    <h1>转增选择</h1>
    <div class="content">
      <ul>
        <li v-for="go of list" :key="go.id" >
          <input type="radio" name='go.name' ref='list' v-bind:checked='cc'  />
          <img :src=assets>

          <h2>{{go.name}}</h2>
          <i>{{go.pic}}/棵</i>

          <p>
            <em>类型：{{go.typ}}</em>
            <span>
              <button @click="add(go,-1)">-</button>
               {{go.sh}}
              <button @click="add(go,1)">+</button>
            </span>
          </p>
        </li>
      </ul>
    </div>
    <!-- <div class='content'>
      <ul>
        <li v-for="go of list" :key="go.treeID" >
          <input type="radio" name='go.treeName' ref='list' v-bind:checked='cc' />
          <img :src="assets" />

          <h2>{{go.name}}</h2>
          <i>{{go.treePrice}}/棵</i>

          <p>
            <em>类型：生态林</em>
            <span>
              <button @click="add(go,-1)">-</button>
              {{num}}
              <button @click="add(go,1)">+</button>
            </span>
          </p>
        </li>
      </ul>
    </div> -->
    <div class="foot" v-show="a">
      <!-- <router-link to="/home/zhuan/queren"> -->
        <button @click="aaa">我要转增</button>
      <!-- </router-link> -->
    </div>
    <div class="foot1" ref='aa'>
      <p>转赠给</p>
      <span>用户手机号：</span>
      <input type="text" v-model='phone' />
      <button @click="bbb">确认</button>
    </div>
    <div class='box' v-if='qw' ref='ddd'>
      <h4>确认转赠</h4>
      <ul>
         <li>生态林：{{this.list1.name}}</li>
        <li>单价：{{this.list1.pic}}元</li>
        <li>数目：{{this.list1.sh}}课</li>
        <li>赠与用户：{{phone}}</li>
        <!-- <li>生态林：{{this.list1.name}}</li>
        <li>单价：{{this.list1.pic}}元</li>
        <li>数目：{{num}}课</li>
        <li>赠与用户：{{phone}}</li> -->
      </ul>
      <div class='button'>
        <button class="button1" @click="clearbox">取消</button>
      <button class="button2" @click='ok'>确定</button>
      </div>
      <div class="box1"  v-if=ee>
        <img src="../assets/03744.png" alt="">
        <div class='box2' @click='done'>确定</div>
      </div>
     
    </div>
     <div class='zhezhaoceng' v-if='ccc'>

     </div>
  </div>
  
</template>
<script>
//import img from "@/assets/03744.png";
// import axios from 'axios';
export default {
  data() {
    return {
      
      a:true,
      assets: '../../assets/03744.png',
      qw:'',
      ccc:false,
      ddd:'',
      cc:false,
      // num:1,
      phone:'',
      ee:false,
      list: [
        { id: "1", name: "安徽松树", typ: "生态林", pic: 30, sh: 1 },
        { id: "2", name: "安徽松", typ: "生态", pic: 30, sh: 1 },
        { id: "3", name: "安树", typ: "生林", pic: 30, sh: 1 }
      ],
      list1:''
    };
  },
  methods: {
    add(go, n) {
      if (go.sh + n > 0) {
        go.sh += n;
      }else if(go.num +n>10){
        return
      }
    },
    kkkk(){
     this.$store.commit('tree');
     this.$router.push('/')
    },
    aaa(){
      this.a=false
      this.$refs.aa.style.display='block'
    },
    bbb(){// 点击确定
      this.qw=true
      this.ccc=true
      // this.$refs.ddd.style.zIndex='1000000'
      // console.log(this.list)
   let r=   this.$refs.list.findIndex((result)=>{
        
        return result.checked == true
      })
      console.log(r)
      this.list1=this.list[r]
      //console.log(z)
     
    },
    clearbox(){
      this.qw=false 
       this.ccc=false
    },
    ok(){
      this.ee=true
      console.log(this.assets)
    // let data = sessionStorage.getItem('uID');//获取session 数据
      // axios.post('',{
      //   uID:data,
      //   userNumber:this.phone,
      //   treeID:this.list1.treeID,
      //   sendtreenumber:this.num,
      //   usertreenumber:this.list1.treeNum
      // })
    },
    done(){
      this.ee=false
      this.clearbox()
    }
  },
  mounted(){
    // let data = sessionStorage.getItem('uID');//获取session 数据
    // if(data){  // 如果是登录状态 获取转赠信息
    //   axios.get().then((result)=>{
    //     this.list=result.data
    //   })
    // }
    this.$store.commit('wenst')
  }
};
</script>
<style scoped>

.acti{
  height: 100%;
}
.acti h1 {
  /* display: inline-block; */
  font-size: 18px;
  line-height: 21px;
  text-align: center
  /* margin-left: -32px; */
}
.mui-active {
  float: left;
  margin-left: 6px;
}
.mui-active .mui-icon {
  font-size: 25px;
  color: #333;
}
.content ul li {
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
  margin-bottom: 10px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 12px;
  position: relative;
  height: 95px;
}
.content ul li i {
  display: inline-block;
  font-style: normal;
  margin-top: 5px;
  font-size: 14px;
  color: rgb(255, 99, 51);
}
.content ul li img {
  float: left;
  width: 19.53%;
  height: 53px;
  margin-left: 11px;
}
.content ul li input {
  float: left;
  margin-top: 20px;
}

.content ul li h2 {
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
  font-size: 14px;
  margin-right: 35%;
}
.content ul li p em {
  font-style: normal;
  position: absolute;
  left: 33%;
  bottom: 20px;
}
.content ul li p {
  display: inline-block;
  font-size: 13px;
}
.content ul li p span {
  position: absolute;
  right: 0;
  bottom: 20px;
  display: inline-block;
  border: 1px solid #cacaca;
  height: 20px;
  line-height: 20px;
  margin-right: 10px;
}
.content ul li p span button {
  border: none;
  background: none;
  line-height: 6px;
  width: 32px;
}
.content ul li p span button:nth-child(2) {
  border-left: 1px solid #cacaca;
  margin-left: 5px;
}
.content ul li p span button:nth-child(1) {
  border-right: 1px solid #cacaca;
  margin-right: 5px;
}
.foot {
  /* margin-top: 32%; */
  position: absolute;
  bottom: 50px;
  width:100%;
}
.foot button {
  width: 90%;

  /* margin: 0 5%; */
  background: green;
  padding: 10px 0;
  font-size: 18px;
  color: #fff;
  border-radius: 30px;
  
}
.foot1 {
  display: inline-block;
  /* margin-top: 49px; */
  position: absolute;
  display: none;
  bottom:50px;
  width:100%;
}
.foot1 p {
  text-align: left;
  margin-left: 15px;
  color: #333;
}
.foot1 span {
  font-size: 12px;
}
.foot1 input {
  width: 69%;
  height: 27px;
}
.foot1 button {
  width: 100%;


  background: green;
  padding: 10px 0;
  font-size: 18px;
  color: #fff;
}
.box{
  width:220px;
  height: 250px;
  background: white;
 
  position: absolute;
  top:125px;
  left:77px;
  border-radius: 10px;
  padding:10px;
  z-index: 1000000  
}
.box1{
  width:220px;
  height: 250px;
  background: white;
 border-radius: 10px;
  position: absolute;
   top:0px;
  left:0px;
  overflow: hidden;
  
}
.box2{
  height: 50px;
  background: #0fa87d;
  color:white;
  position:absolute;
  bottom: 0;
  width:100%;
  padding-top: 15px;
}
.box ul{
  margin-top:15px
}
.box ul li{
  line-height: 30px;
  text-align: left;
  font-size: 15px;
}
.button{
  margin-top:20px;
}
.button1{
  border-radius: 10px;
  background-color: #d2d2d2;
  color: white;
  margin-right: 20px;
}
.button2{
  background-color: #0fa87d;
  color: white;
  border-radius: 10px;
}
.zhezhaoceng{
  width: 375px;
  height: 100%;
  background: #3f3f3f;
  opacity: 0.6;
  position: absolute;
  top: 0;
  z-index: 100;
  
}

</style>