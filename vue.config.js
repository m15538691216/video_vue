const webpack = require("webpack");
const path = require("path");

// 是否为生产环境
const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
    publicPath: isProduction ? './' : '/',
    outputDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    runtimeCompiler: true,
    devServer: {
        disableHostCheck: true,
        open: false,
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import "${path.resolve(__dirname, './src/assets/less/index.less')}";`
                },
            },
        },
    }
}
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/styles/index.styl'),
            ],
        })
}

