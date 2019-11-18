<template>
    <div>
        <van-cell-group>
            <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                    <router-link to="userhome" tag="div" class="fa fa-angle-left fa-2x back"></router-link>
                </div>
                <div class="van-nav-bar__title van-ellipsis">我的生态公益林</div>
                <div class="van-nav-bar__right"></div>
            </div>
        </van-cell-group>
        <div style="background:#fff;padding:10px 0;margin-top:10px">
            <div class="stgyl_user_left">
                <img :src="imgurl" alt="" height="80px">
            </div>
            <div class="stgyl_user_right">
                <p style="color:#009494;font-size:20px">{{nickname}}</p>
                <span>已经累计认养{{ trees.length }}棵，消耗碳{{trees.length*10}}吨</span>
            </div>
        </div>
        <van-tabs>
            <van-tab title="我的树木">
                <div class="treeList_box">
                    <van-row class="treeList_top one">
                        <van-col span='5'>树名</van-col>
                        <van-col span='7'>编号</van-col>
                        <van-col span='7'>到期时间</van-col>
                        <van-col span='5'>导航</van-col>
                    </van-row>
                    <van-row class="treeList_top" v-for="(item,index) in trees" :key="index">
                        <van-col span='5'>{{ item.name }}</van-col>
                        <van-col span='7'>{{ item.key }}</van-col>
                        <van-col span='7'>到期时间</van-col>
                        <van-col span='5'>
                            <van-button type="primary" round style="height: 28px;line-height:28px;" to="guide">导航</van-button>
                        </van-col>
                    </van-row>
                </div>
            </van-tab>
            <van-tab title="认养记录">暂无</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import API from 'api'
    export default {
        data() {
            return {
                nickname:'',
                userNumber:'',
                imgurl:'',
                trees:[{
                    name:'常青藤',
                    key:'0',
                },{
                    name:'常青藤1',
                    key:'1',
                }]
            }
        },
        mounted() {
            this.userNumber = sessionStorage.getItem('uID');
            this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            const params = new URLSearchParams()
            params.append('userNumber',this.userNumber)
            //获取头像用户名
            this.$http({
                url: API.user_info,
                method: 'post',
                data:params
            })
            .then( res => {
                console.log( res.data )
                if(res.data.message == 'success'){
                    this.imgurl = res.data.data.headPortrait
                    this.nickname = res.data.data.uNickname
                }
            })
            .catch( err => console.log( err ));
            //获取订单详情
            this.$http({
                url: API.user_info,
                method: 'git',
                data:{
                    uId:this.userNumber
                }
            })
            .then( res => {
                console.log( res.data )
                if(res.data.message == '查询成功'){
                    this.trees = res.data.data.trees
                }
            })
            .catch( err => console.log( err ));
        },
    }
</script>

<style>
    .treeList_box{
        font-size: 14px;
        padding-top: 10px;
        background: #fff;
    }
    .stgyl_user_left{
        float: left;
        width: 80px;
        height: 80px;
        margin: 0 10px;
        margin-top: 8px;
        border-radius:50%;
        border: 1px solid rgba(200, 200, 200, 0.5);
        overflow: hidden;
    }
    .stgyl_user_right{
        height: 70px
    }
    .treeList_top{
        padding: 0 10px;
        background: #fff;
        height: 40px;
        text-align: center;
    }
</style>