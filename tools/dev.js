const webpack = require('webpack')
const wpCfg = require('./webpack.js')
const wpServerCfg = require('./webpack.server.js')
const compiler = webpack(wpCfg.getConfig())
const serverCompiler = webpack(wpServerCfg)
const server = require('./server')

function packClient() {
    return new Promise((resolve, reject) => {
        webpack(wpCfg.getConfig(), (err, stats) => {
            if (err === null && stats.compilation.errors.length === 0) {
                console.log('编译成功')
                resolve(true)
            } else {
                console.log('编译出现错误...')
                console.log(stats.compilation.errors[0].message)
                reject(false)
            }
        })
    })
}

function packServer() {
    return new Promise((resolve, reject) => {
        webpack(wpServerCfg, (err, stats) => {
            if (err === null && stats.compilation.errors.length === 0) {
                console.log('编译成功')
                resolve(true)
            } else {
                console.log('编译出现错误...')
                console.log(stats.compilation.errors[0].message)
                reject(false)
            }
        })
    })
}

Promise.all([packClient(), packServer()])
    .then(() => {
        console.log('Client/Server全部编译成功！')
        server()
    })
    .catch(e => {
        console.log(e)
    })
