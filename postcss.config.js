/**
 * 这个文件必须存在, 而且必须安装postcss-smart-import这个包
 * 这样在webpack中不用再配置postcss就可以实现css加前缀功能
 */
module.exports = {
    plugins: [
        require('postcss-smart-import')({ /* ...options */ }),
        require('autoprefixer')({ /* ...options */ })
    ]
}