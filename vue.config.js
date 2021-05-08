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

        const svgRule = config.module.rule('svg')
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()
        // 添加要替换的 loader
        svgRule
            .use('raw-loader')
            .loader('raw-loader')
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import "${path.resolve(__dirname, './src/assets/less/index.less')}";`
                },
            },
        },
    },

    configureWebpack: config => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        )
    },
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

