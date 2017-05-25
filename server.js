const express = require('express')
const app = express()
const fs = require('fs-extra');
const path = require('path');
const template = `
<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <meta content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="renderer" content="webkit" />
    <meta name="360-fullscreen" content="true" />
    <meta name="x5-fullscreen" content="true" />
    <meta name="full-screen" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="http-equiv=X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
    <link type="image/x-icon" href="//static1.mtime.cn/favicon.ico" rel="shortcut icon" />
    <link type="image/x-icon" href="//static1.mtime.cn/favicon.ico" rel="bookmark" />
    <link rel="apple-touch-icon" href="//static1.mtime.cn/favicon.ico" />
    <title>时光片方管理平台</title>
<link href="client/css/main.css" rel="stylesheet"></head>

<body>
    <div id="app"></div>
    <!--vue-ssr-outlet-->
<script type="text/javascript" src="client/script/vendors.js"></script><script type="text/javascript" src="client/script/main.js"></script></body>

</html>
`
const vueServerRenderer = require('vue-server-renderer');
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});
app.use(express.static('./build'))
app.use('/data', (req, res, next) => {
    res.send({
        "code": 1,
        "data": {
            "livePreList": [],
            "liveWodList": [{
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/05/05/183558.90013339.jpg",
                "liveId": 634,
                "liveStatus": 4,
                "startTime": 1494313262000,
                "statistic": 64783,
                "title": "《超凡战队》首映礼发布会",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/05/08/175130.84730904.jpg",
                "liveId": 635,
                "liveStatus": 4,
                "startTime": 1494307635000,
                "statistic": 60474,
                "title": "《毒。诫》首映礼发布会",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/05/04/105659.96592879.jpg",
                "liveId": 632,
                "liveStatus": 4,
                "startTime": 1493974792000,
                "statistic": 95528,
                "title": "《时光玩家说》漫威周边大搜罗",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/24/145810.69089438.jpg",
                "liveId": 628,
                "liveStatus": 4,
                "startTime": 1493369978000,
                "statistic": 309495,
                "title": "《时光玩家说》银河护卫队特辑",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/25/094952.69977973.jpg",
                "liveId": 630,
                "liveStatus": 4,
                "startTime": 1493186515000,
                "statistic": 298599,
                "title": "《拆弹专家》首映礼",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/21/182516.74965602.jpg",
                "liveId": 626,
                "liveStatus": 4,
                "startTime": 1493009461000,
                "statistic": 766879,
                "title": "《记忆大师》全球首映礼",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/21/111007.73905844.jpg",
                "liveId": 623,
                "liveStatus": 4,
                "startTime": 1492929029000,
                "statistic": 229640,
                "title": "《喜欢你》“甜蜜蜜”首映礼发布会",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/19/101417.14887129.jpg",
                "liveId": 622,
                "liveStatus": 4,
                "startTime": 1492837672000,
                "statistic": 524955,
                "title": "《记忆大师》丰台万达广场“记忆迷宫”启动式",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/17/174133.40415342.jpg",
                "liveId": 620,
                "liveStatus": 4,
                "startTime": 1492765191000,
                "statistic": 98698,
                "title": "《时光玩家说》蓝精灵与蓝胖子萌物特辑",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/13/120129.35487357.jpg",
                "liveId": 618,
                "liveStatus": 4,
                "startTime": 1492257715000,
                "statistic": 239993,
                "title": "《西游记：女儿国》“秀之夜”发布会",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/11/152835.27620379.jpg",
                "liveId": 617,
                "liveStatus": 4,
                "startTime": 1492181998000,
                "statistic": 197493,
                "title": "星球大战庆典：星战八专场活动",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/13/153319.67664501.jpg",
                "liveId": 619,
                "liveStatus": 4,
                "startTime": 1492146498000,
                "statistic": 87973,
                "title": "《青禾男高》“校门口见”新闻发布会",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/10/170953.85552490.jpg",
                "liveId": 614,
                "liveStatus": 4,
                "startTime": 1491987581000,
                "statistic": 235831,
                "title": "《时光玩家说》“速激”车库探秘 人气车模炫酷登场",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/11/162902.42940538.jpg",
                "liveId": 613,
                "liveStatus": 4,
                "startTime": 1491901200000,
                "statistic": 166910,
                "title": "周冬雨 张孝全《指甲刀人魔》首映礼现场直击",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/07/102003.53869632.jpg",
                "liveId": 612,
                "liveStatus": 4,
                "startTime": 1491719232000,
                "statistic": 88904,
                "title": "《反转人生》有求必应发布会",
                "videoId": 0
            }],
            "livingList": [],
            "myAppointLiveList": []
        },
        "msg": "",
        "showMsg": ""
    })
})
app.get('/', function (req, resp) {
    const filePath = path.join(__dirname, './build/vue-ssr-bundle.json')
    const code = fs.readJsonSync(filePath);
    const bundleRenderer = vueServerRenderer.createBundleRenderer(code, {
        template: template
    });
    bundleRenderer.renderToString((err, html) => {
        if (err) {
            console.log(err.message);
            console.log(err.stack);
        }
        console.log(html);
        resp.send(html)
    });
})
app.listen(5000, () => {
    console.log('Listen 5000')
})