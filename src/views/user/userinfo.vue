<template>
    <div>
        <van-cell-group>
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                    <router-link to="userhome" tag="div" class="fa fa-angle-left fa-2x back"></router-link>
                </div>
                <div class="van-nav-bar__title van-ellipsis">个人信息</div>
                <div class="van-nav-bar__right"></div>
            </div>
        </van-cell-group>
        <van-cell-group>
            <div class="headPortrait msc">
                <span>头像</span>
                <div class="hp_box">
                    <img :src="imgurl" alt="" height='80px'>
                </div>
            </div>
            <van-cell title="ID" :value="username" />
            <van-cell title="昵称" :value="nickname" />
            <van-cell title="手机号" :value="phone" />
            <van-cell title="实名认证" :value="identity?'已实名':'未实名'" />
            <van-cell title="性别" :value="radio?'男':'女'" />
            <van-cell title="生日" :value="birthday" />
        </van-cell-group>
        <div class="btn" >
            <van-button type="info" size="large" to="userchange">修改信息</van-button>
        </div>
    </div>
</template>

<script>
    import API from 'api'
    export default {
        data(){
            return{
                imgurl:'',
                username:'',
                nickname:'',
                phone:'',
                identity:'',
                radio:'',
                birthday:''
            }
        },
        mounted() {
            this.$store.commit('change')
            this.userNumber = sessionStorage.getItem('uID');
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
                        this.username = res.data.data.uId
                        this.nickname = res.data.data.uNickname
                        this.phone = res.data.data.userNumber
                        this.identity = res.data.data.idCard
                        this.radio = res.data.data.sex
                        this.birthday = res.data.data.birthday
                    }
                })
                .catch( err => console.log( err ));
        },
    }
</script>

<style>
    .hp_box{
        width: 80px;
        height: 80px;
        border-radius:50%;
        border: 1px solid rgba(200, 200, 200, 0.5);
        overflow: hidden;
    }
    .msc{
        height: 80px;
        margin: 10px 10px 0;
        display: flex;
        align-items:center;
        justify-content:space-between;
    }
    .btn{
        margin-top: 10px
    }
    .van-nav-bar__left{
        height: 40px
    }
</style>