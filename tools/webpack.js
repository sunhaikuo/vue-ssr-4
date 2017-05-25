const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const fs = require('fs-extra')
const rootPath = path.resolve(__dirname, '../')
var HtmlWebpackPlugin = require('html-webpack-plugin')
/*eslint-disable indent */
const vueLoader = {
    loaders: {
        'less': [{
                'loader': path.join(rootPath, 'node_modules/extract-text-webpack-plugin/loader.js'),
                'options': {
                    'omit': 1,
                    'remove': true
                }
            },
            {
                'loader': 'vue-style-loader'
            },
            {
                'loader': 'css-loader',
                'options': {
                    'minimize': true,
                    'sourceMap': true
                }
            },
            {
                'loader': 'less-loader',
                'options': {
                    'sourceMap': true
                }
            }
        ]
    }
}

function getConfig() {
    const config = {
        // 定义应用入口
        entry: path.resolve(rootPath, 'src/index.js'),
        // 定义输出
        output: {
            path: path.join(rootPath, 'build/client'),
            publicPath: 'client/',
            filename: 'script/[name].js'
        },
        devtool: '#eval-source-map', // 开始source-map. 具体的不同配置信息见webpack文档
        module: {
            rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoader
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(swf)$/,
                loader: `url-loader?limit=10000&name=/script/[name].[ext]`
            }, {
                test: /\.(png|jpg|jpeg|gif|woff|svg|eot|ttf)$/,
                loader: `url-loader?limit=10000&name=/images/[name].[ext]`
            }, {
                test: /\.less/,
                use: [{
                    loader: 'less-loader'
                }]
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }]
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.common.js',
                'components': path.join(rootPath, '/src/client/components'), // 定义文件路径， 加速打包过程中webpack路径查找过程
                'lib': path.join(rootPath, '/src/lib'),
                'less': path.join(rootPath, '/src/less'),
                '@': path.join(rootPath)
            },
            extensions: ['.js', '.less', '.vue', '*', '.json'] // 可以不加后缀, 直接使用 import xx from 'xx' 的语法
        },
        plugins: [
            new ExtractTextPlugin('css/[name].css'),
            // 将vue等框架/库进行单独打包, 并输入到vendors.js文件当中
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendors']
            }),
            new HtmlWebpackPlugin({
                template: 'index.html',
                filename: 'index.html'
            })
        ]
    }
    return config
}

module.exports = {
    getConfig
}