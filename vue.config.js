//webpack配置文件

const path = require('path')

const ENV = require('./src/api/config')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, './src'))
            .set('api',path.join(__dirname,'./src/api'))
            .set('assets',path.join(__dirname,'./src/assets'))
            .set('comp',path.join(__dirname,'./src/components'))
            .set('config',path.join(__dirname,'./src/config'))
            .set('router',path.join(__dirname,'./src/router'))
            .set('store',path.join(__dirname,'./src/store'))
            .set('utils',path.join(__dirname,'./src/utils'))
            .set('views',path.join(__dirname,'./src/views'))
    },
    devServer:{
   
        proxy:{
            '/user/userinfo': {
                target: `http://121.199.79.111:8093`,
                ws: true,
                changeOrigin: true
            },
            '/user/editcommit': {
                target: `${ENV.DEV.BACK_END_URL}:8093`,
                ws: true,
                changeOrigin: true
            },
            '/myTree': {
                target: `${ENV.DEV.BACK_END_URL}:8093`,
                ws: true,
                changeOrigin: true
            },
            '/user/uploadImage': {
                target: `${ENV.DEV.BACK_END_URL}:8093`,
                ws: true,
                changeOrigin: true
            },
            '/myTreeList': {
                target: `${ENV.DEV.BACK_END_URL}:8093`,
                ws: true,
                changeOrigin: true
            },
            '/user/registe': {
                target: `${ENV.DEV.BACK_END_URL}:8093`,
                ws: true,
                changeOrigin: true
            },
            '/info/scoreDetail': {
                target: `${ENV.DEV.BACK_END_URL}:8090`,
                ws: true,
                changeOrigin: true
            },
            '/info/queryInfo': {
                target: `${ENV.DEV.BACK_END_URL}:8090`,
                ws: true,
                changeOrigin: true
            },
            '/info/bdyhk': {
                target: `${ENV.DEV.BACK_END_URL}:8090`,
                ws: true,
                changeOrigin: true
            },
            '/info/getAmt': {
                target: `${ENV.DEV.BACK_END_URL}:8090`,
                ws: true,
                changeOrigin: true
            },
            '/tree':{
                target: `http://121.199.79.111:8092`,
                ws: true,
                changeOrigin: true,
              

            },
            '/treeType': {
                target: 'http://121.199.79.111:8095',
                ws: true,
                changeOrigin: true,
              
            },
            '/user':{
                target: `http://121.199.79.111:8093`,
                ws: true,
                changeOrigin: true,
              
            },
            '/tree/adoption':{
                target: `http://121.199.79.111:8092`,
                ws: true,
                changeOrigin: true,
              
            },
            '/send':{
                target: `http://123.57.48.173:8091`,
                ws: true,
                changeOrigin: true,
              
            },
            
            


           
            
        }
    },
}
