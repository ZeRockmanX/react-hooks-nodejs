var express = require('express');
var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// 全局 中间件  解决所有路由的 跨域问题
// app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

let server = app.listen(4002, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

app.post('/testApi', async function (request, response) {
    console.log(request.body);
    response.send(JSON.stringify({ infoReturn: 'Here is return test data' }));
});
