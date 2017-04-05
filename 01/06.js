var fs = require('fs');
// readFile(path,cherset||callback)

/**
 * 先把整个读取文件的任务和回调函数下达操作系统（function,callback）添加到事件队列
 * 把读取文件的任务扔给操作系统的进程处理，会有专门的线程处理
 * 任务执行完后执行回调函数
 */
fs.readFile('text/01.txt', utf8, (error, data) => {
    if (error) throw error;
    console.log(data);
})