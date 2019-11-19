//webpack配置文件

const path = require('path')

const ENV = require('./src/api/config')

module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/info': {
                target: 'http://10.31.167.59:8090',
                ws: true,
                changeOrigin: true
            },
            '/user': {
                target: 'http://10.31.167.59:8093',
                ws: true,
                changeOrigin: true
            }
            // '/store': {
            //     target: ENV.DEV.BACK_END_URL,
            //     ws: true,
            //     changeOrigin: true
            // }
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