//node 开发服务器 的阻塞状况
'use strict';
// V8对ES6支持状况分三个级别，根本不支持，直接支持，严格模式let
const http = require('http');

//创建个服务器
let count = 0;
const server = http.createServer((req, res) => { //请求，响应
    //此回调会再 任何用户请求的时候粗发
    // 响应里面写东西
    res.write(`你死第${count++}个用户`);
    // 死循环
    if (count === 10) {
        while (true) {}
    }
    res.end(); //一定要把程序结束，促发发送事件。不然会阻塞你执行

})

//  监听服务器端口 端口被占用的时候粗发错误
server.listen(2046, (err) => {
    if (err)
        throw error;
    console.log('2046')
})