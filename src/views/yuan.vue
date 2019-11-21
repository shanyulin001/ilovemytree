<template>
  <div class="yuan-bakgrond">
    <!-- 头部 -->
    <div class="yuan-tou">
      <i></i>
      <span style="margin-left:40%">我的心愿</span>
    </div>
    <!-- 许下我的心愿 -->
   <div class="xin_b"  >
       <p>
          {{this.$store.state.xx}}
       </p>
       <span>
           0人查看了我的心愿
       </span>

       <i>
           公开
       </i>
   </div>
  
   
    <!-- 可以切换的路由 -->
  
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
      variates: selects[0],
      // 上面的数组
      selects: selects,
      momo: ""
    };
  },
  methods: {
    // 写一个方法 参数是上面li遍历的每一项数据
    selecter(select) {
      this.variates = select;
      this.$router.push({ name: select.routeName });
      this.select = this.selects.id === select.id;
    },
    acquire() {
      // 心愿的内容 push到数据库
      // if(this.momo!=''){

      // }

      console.log(this.momo);
    }
  }
};
</script>

<style scoped>
.xin_b{
    position: relative;
    width: 85%;
    height: 100px;
    background: rgb(247, 222, 201);
    margin: auto;
    border-radius: 10px;
}
.xin_b p{
padding:10px;
    text-align: left;
    font-size: 18px;
    color: black;
}
.xin_b span{
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-size: 14px;
}
.xin_b i{
    width: 70px;
    height: 20px;
    border: 1px solid  rgb(224, 161, 115);
  font-style: normal;
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 12px;
}


.yuan-bakgrond {
  width: 100%;
  height: 600px;
  background-image: url("../assets/3.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
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

/* 许下我的心愿 */




/* 复选框 */


</style>
