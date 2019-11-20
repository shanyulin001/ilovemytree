<template>
    <div class="amap-wrapper">
        <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1;">
                <div class="van-nav-bar__left">
                    <router-link to="user_stgyl" tag="div" class="fa fa-angle-left fa-2x back"></router-link>
                </div>
                <div class="van-nav-bar__title van-ellipsis">导航</div>
                <div class="van-nav-bar__right"></div>
            </div>
        <el-amap class="amap-box" vid="map" 
            :zoom="zoom"
            :center="center" 
            :plugin="plugin">
            <el-amap-marker vid="marker" 
            :position="center" 
            :label="label"
            >
            </el-amap-marker>
            <el-amap-circle  vid="circle"
            :center="center" 
            :radius="radius" 
            fill-opacity="0.2"
            strokeColor="#38f"
            strokeOpacity="0.8"
            strokeWeight="1"
            fillColor="#38f"
            >
            </el-amap-circle>
            <div class="guide_userinfo">
                <van-cell :title="tree_name" :label="tree_date" class="tree_title"/>
                <van-cell title="编号" :value="tree_index" />
                <van-cell title="经度" :value="center[0]" />
                <van-cell title="纬度" :value="center[1]" />
                <van-cell title="生长地" :value="label.content" />
            </div>
        </el-amap>
    </div>
</template>
<script>
import API from 'api'
export default {
    name:'home',
    data(){
        return{
            tree_name:'',
            tree_index:999999999,
            tree_date:Date(),
            zoom:12,
            center:[120.2643084526,30.3054195279],
            label:{
                content:'千峰教育',
                offset:[-15,-25]
            },
            radius:100,
            plugin: [{
                    pName: 'ToolBar',//工具条插件
                    position:'LB',
                },{
                    pName: 'MapType',//卫星与地图切换
                    defaultType: 0,
                    showTraffic:true,//实时交通图层
                },{
                    pName:'Scale'
            }]
        }
    },
    created() {
            this.tree_index=this.$route.query.oId
            this.$http({
                url: API.myTree,
                method: 'get',
                data:{
                    uId:this.$route.query.oId
                }
            })
            .then( res => {
                if(res.data.message == '查询成功'){
                    this.tree_index = res.data.data.treeId
                    this.tree_name = res.data.data.treeName
                    this.tree_date = res.data.data.claimTime
                }
            })
            .catch( err => console.log( err ));
    },
}
</script>
<style scoped>
    hr{
        border-color: red;
        border-style: dashed;
    }
    .amap-wrapper{
        width: 100vw;
        height: 100vh;
    }
    .guide_userinfo{
        width: 80vw;
        height: 40vh;
        position: fixed;
        bottom: 15px;
        right: 0;
        background: #ffffff;
    }
    .tree_title{
        color:rgb(39, 247, 39);
        font-weight: 900
    }
</style>