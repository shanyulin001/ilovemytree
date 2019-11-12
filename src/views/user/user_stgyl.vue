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
                <img src="" alt="">
            </div>
            <div class="stgyl_user_right">
                <p>用户id</p>
                <span>已经累计认养{{ 30 }}棵，消耗碳20吨</span>
            </div>
        </div>
        <van-tabs v-model="active">
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
                            <van-button type="primary" round style="height: 28px;line-height:28px;">导航</van-button>
                        </van-col>
                    </van-row>
                </div>
            </van-tab>
            <van-tab title="认养记录">暂无</van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:0,
            trees:[{
                name:'常青藤',
                key:'0',
            },{
                name:'常青藤1',
                key:'1',
            }]
        }
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