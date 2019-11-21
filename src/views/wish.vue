<template>
  <div>
    <div>
      <van-nav-bar
        title="生态公益林认养"
        style="font-sizi:20px"
        left-text=""
        left-arrow
      >
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>
    <div class="xiang_img">
      <img src="../assets/1.jpg" alt />
    </div>
    <h3>简洁</h3>
    <div class="wish_jian">
      <p>
        【开始】-【控制面板】-【管理工具】-【服务】-【Windows Audio】重新启动。
        2.控制面板 - 声音-喇叭/耳机 - 属性 - 高级
        ，取消勾选「允许应用程序独占该设备」。 3.设备管理器 -
        声音、视频和
        再次右键管用。最后用了第四个方法，一下子就好了，5分钟搞定。因为电脑声音问题浪费一早上时间去摸索，特此将此方法分享给大家，希望能帮到大家。
      </p>
    </div>
    <h3>我要认养</h3>
    <!-- 我要认养d的大盒子 里面有底部外边距撑着 不能去掉 -->
    <div class="wish_shao">
      <div>
        <van-card
          title="树名字"
          thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3089884447,738529359&fm=26&gp=0.jpg"
        >
          <div slot="footer">
            <van-button size="mini">我要认养</van-button>
          </div>
        </van-card>
      </div>

      <div class="wish_xia">
        <van-goods-action>
          <van-goods-action-icon icon="chat-o" />
          <van-goods-action-button
            color="rgb(7, 116, 131)"
            type="warning"
            text="立即下载"
          />
        </van-goods-action>
      </div>
      <div>
        <van-card
          title="树名字"
          thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3089884447,738529359&fm=26&gp=0.jpg"
        >
          <div slot="footer">
            <van-button size="mini">我要认养</van-button>
          </div>
        </van-card>
      </div>

      <div class="wish_xia">
        <van-goods-action>
          <van-goods-action-icon
            icon="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3089884447,738529359&fm=26&gp=0.jpg"
          />
          <van-goods-action-button
            color="rgb(7, 116, 131)"
            type="warning"
            text="立即下载"
          />
        </van-goods-action>
      </div>

      <div class="wish_xia">
        <van-goods-action>
          <van-goods-action-icon icon="chat-o" />
          <van-goods-action-button
            color="rgb(7, 116, 131)"
            type="warning"
            text="立即下载"
          />
        </van-goods-action>
      </div>
      <div>
        <van-card
          title="树名字"
          thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3089884447,738529359&fm=26&gp=0.jpg"
        >
          <div slot="footer">
            <van-button size="mini">我要认养</van-button>
          </div>
        </van-card>
      </div>

      <div class="wish_xia">
        <van-goods-action>
          <van-goods-action-icon
            icon="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3089884447,738529359&fm=26&gp=0.jpg"
          />
          <van-goods-action-button
            color="rgb(7, 116, 131)"
            type="warning"
            text="立即下载"
          />
        </van-goods-action>
      </div>
      <h3>简洁</h3>
      <div>
        <p>
          下载我爱我树APP，登录即可领养
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>



<style scoped>
body {
  background: rgb(37, 17, 17);
}
.van-nav-bar__title {
  font-size: 18px;
  font-weight: 550;
}
.xiang_img img {
  width: 100%;
  height: 200px;
  background: rgb(7, 116, 131);
  position: relative;
  z-index: 999;
}
h3 {
  motion: 0;
  text-align: left;
  text-indent: 25px;
}
.wish_jian {
  padding: 0 25px;
}
.wish_jian p {
  text-align: left;
}
.van-goods-action {
  background: rgb(199, 235, 240);
}

.wish_shao {
  margin-bottom: 60px;
}
/* .van-card {

} */
.van-card__content {
  text-align: left;
}
.van-card__title {
  max-height: 62px;
  font-weight: 600;
  line-height: 50px;
  margin-top: 20px;
  font-size: 20px;
}
.van-button--mini {
  position: relative;
  top: -70px;
  display: inline-block;
  min-width: 50px;
  height: 45px;
  font-size: 20px;
  margin-right: 15px;
  line-height: 50px;
}
/* .van-card{
height: 15px;
} */
.van-card__footer {
  height: 15px; 
}
.van-image__error,
.van-image__img,
.van-image__loading {
  border-radius: 15px;
}
.van-button::before {
  background: forestgreen;
}
.van-button--mini[data-v-61e65441] {
  padding: 5px;
  border-radius: 5px;
  background: rgb(136, 175, 221);
  border: 1px solid black;
  line-height: 5px;
}
</style>
