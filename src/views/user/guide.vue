<template>
    <div class="amap-wrapper">
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
        </el-amap>
    </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return{
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
    }
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
</style>