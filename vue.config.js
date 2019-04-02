const path = require('path')

const addStyleResource = rule => {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/stylus/variable.styl')
            ]
        })
}

module.exports = {
    chainWebpack: config => {
        // 添加全局变量
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))

        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.dev.xiaomingsport.com',
                pathRewrite: {'^/api': ''},
                changeOrigin: true,
                secure: false
            }
        }
    }
}