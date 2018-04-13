const path = require('path')
const projectRoot = path.resolve(__dirname, '..')
const VueSSRPlugin = require('vue-ssr-webpack-plugin')
var nodeExternals = require('webpack-node-externals')
module.exports = {
    target: 'node', // !different
    entry: path.join(projectRoot, 'src/server-index.js'),
    output: {
        libraryTarget: 'commonjs2' // !different
    },
    // externals: Object.keys(require('../package.json').dependencies),
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    },
    externals: [
        nodeExternals({
            modulesDir: path.resolve('../node_modules')
        })
    ],
    plugins: [
        new VueSSRPlugin({
            filename: './build/vue-ssr-bundle.json'
        })
    ]
}
