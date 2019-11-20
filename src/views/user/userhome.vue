<template>
    <div>
        <div class="header">
            我的
        </div>
        <van-cell-group>
            <router-link class="userinfo" to="/userinfo" tag="div">
                <div class="headPortrait_box">
                    <img :src="imgurl" alt="" style="height:80px;box-shadow: 50%">
                </div>
                <span id="nickname"></span>
                <i class="fa fa-angle-right fa-2x" style="display:inline-block;margin-right:10px"></i>
            </router-link>
        </van-cell-group>
        <div class="usermain">
            <van-cell is-link to="user_stgyl" ><i class="fa fa-tree"></i> 我的生态公益林</van-cell>
            <van-cell is-link to="userhome" ><i class="fa fa-tree"></i> 我的古树名木</van-cell>
            <van-cell is-link to="remaining" ><i class="fa fa-cny"></i> 余额</van-cell>
            <van-cell is-link to="jifen" ><i class="fa fa-align-center"></i> 积分</van-cell>
            <van-cell is-link to="shezhi" ><i class="fa fa-cog"></i> 设置</van-cell>
            <van-cell is-link to="userhome" ><i class="fa fa-volume-control-phone"></i> 在线客服</van-cell>
        </div>
    </div>
</template>

<script>
    import API from 'api'
    export default {
        data() {
            return {
                imgurl:'',
                userNumber:'15258469872'
            }
        },
        mounted() {
            this.userNumber = sessionStorage.getItem('uID');
            if(!this.userNumber){
                this.$router.push('login')
            }
            this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
            const params = new URLSearchParams()
            params.append('userNumber',this.userNumber)
            this.$http({
                url: API.user_info,
                method: 'post',
                data:params
            })
            .then( res => {
                if(res.data.message == 'success'){
                    this.imgurl = res.data.data.headPortrait
                    document.querySelector('#nickname').innerHTML = res.data.data.uNickname
                }
            })
            .catch( err => console.log( err ));
        },
    }
</script>

<style>
body{
    background: #f9f9f9
}
    .header{
        line-height: 40px;
        text-align: center;
        background: #fff;
        font-weight: 800
    }
    .userinfo{
        height: 100px;
        display: flex;
        align-items:center;
        justify-content:space-around;
        background: #fff;
        font-weight: 800
    }
    .usermain{
        margin-top:10px;
    }
    .headPortrait_box{
        height: 80px;
        border-radius:50%;
        border: 1px solid rgba(200, 200, 200, 0.5);
        overflow: hidden;
    }
</style>