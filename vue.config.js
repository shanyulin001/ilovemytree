module.exports = {
    publicPath: './',

    devServer: {
        proxy: {
            '/user': {
                target: 'http://10.31.167.59:8093',
                ws: true,
                changeOrigin: true
            }
        }
    }
};
