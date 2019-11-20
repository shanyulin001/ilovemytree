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
                target: ENV.DEV.BACK_END_URL,
                ws: true,
                changeOrigin: true
            },
            '/user/editcommit': {
                target: ENV.DEV.BACK_END_URL,
                ws: true,
                changeOrigin: true
            },
            '/myTree': {
                target: ENV.DEV.BACK_END_URL,
                ws: true,
                changeOrigin: true
            },
            '/user/uploadImage': {
                target: ENV.DEV.BACK_END_URL,
                ws: true,
                changeOrigin: true
            },
            '/myTreeList': {
                target: ENV.DEV.BACK_END_URL,
                ws: true,
                changeOrigin: true
            },
            '/info': {
                target: ENV.DEV.BACK_END_URL,
                ws: true,
                changeOrigin: true
            },
            '/user': {
                target: ENV.DEV.BACK_END_URL,
                ws: true,
                changeOrigin: true
            }
        }
    },

    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, './src'))
            .set('api', path.join(__dirname, './src/api'))
            .set('assets', path.join(__dirname, './src/assets'))
            .set('comp', path.join(__dirname, './src/components'))
            .set('config', path.join(__dirname, './src/config'))
            .set('router', path.join(__dirname, './src/router'))
            .set('store', path.join(__dirname, './src/store'))
            .set('utils', path.join(__dirname, './src/utils'))
            .set('views', path.join(__dirname, './src/views'))
    },

}