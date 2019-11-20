<template>
  <div id="bgbox">
    <div class="cnbox1">
      <div class="smbox1">
        <div class="smbox1-box1">
          <router-link to="/tree/xys">
            <svg
              t="1573628616612"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2933"
              width="16"
              height="16"
            >
              <path
                d="M263.031 510.109l458.561-458.861c7.865-8.069 7.7-21.094-0.369-28.959s-21.094-7.7-28.959 0.369c0 0-472.774 473.184-472.883 473.279-7.865 8.069-7.7 21.094 0.369 28.959l472.446 467.285c8.069 7.865 21.094 7.7 28.959-0.369s7.7-21.094-0.369-28.959l-457.756-452.745z"
                p-id="2934"
                fill="#ffffff"
              />
            </svg>
          </router-link>>
        </div>
        <div class="smbox1-box2">许愿</div>
        <div class="smbox1-box3">我的心愿</div>
      </div>
    </div>
    <div class="cnbox2">
      <div class="smbox2">
        <a href="#">
          <img src="../assets/111.png" />
        </a>
      </div>
      <div class="smbox3">
          <p>能量不足，无法许愿~</p>
      </div>
      <div class="smbox4"></div>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    
  },

};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

#bgbox {
  width: 100%;
  height: 590px;
}
.cnbox1 {
  width: 100%;
  height: 50%;
  background: url(../assets/121.png) no-repeat;
  background-size: 100% 100%;
}
.smbox1 {
  width: 100%;
  height: 40px;
}
.smbox1-box1 {
  width: 30%;
  height: 100%;
  float: left;
  line-height: 40px;
  text-align: left;
  padding-left: 15px;
  box-sizing: border-box;
}
.smbox1-box2 {
  width: 40%;
  height: 100%;
  float: left;
  line-height: 40px;
  color: #ffffff;
}
.smbox1-box3 {
  width: 30%;
  height: 100%;
  float: left;
  line-height: 40px;
  color: #ffffff;
}
.cnbox2 {
  width: 100%;
  height: 50%;
  background: #ffffff;
}
.smbox2{
    width: 100%;
    height: 60px;
    text-align: center;
    margin-top: 25px
}
.smbox2 img{
    width: 140px;
    height: 50px;
}
.smbox3 p{
     color: #f75e00
}
.smbox4{
    width: 100%;
    height: 200px;
    background: url(../assets/122.png) no-repeat;
    background-size: 100% 100%
}
</style>