/**
 * 非阻塞和事件驱动 读文件I/O操作
 */

const fs = require('fs');
/**
 * 先判断文件是否存在
 * 存在就删除
 * 不存在就创建
 */

// fs.exists 废弃,用下面的方法
// 判断存在文件
fs.stat('README.md', (err, state) => {
    // 不存在 错误 undefined
    // if (err) console.error(err);
    if (err) {
        console.log('文件不存在');
        //创建文件
        fs.writeFile('README.md', new Date(), (err) => {
            if (err) { console.error(err); return false; }
            console.log('创建成功');
        });
        return false;
    }
    //存在就删除 fs.unlink删除文件的
    fs.unlink('README.md', (err) => {
        console.log('文件存在');
        if (err) { console.error(err); return false; }
        //创建文件
        fs.writeFile('README.md', new Date(), (err) => {
            if (err) { console.error(err); return false; }
            console.log('删除又创建了');
        })
    })
})

 
//  事件队列
fs.stat('README.md', (err, state) => {//先执行 全部到底 ①
    if (err) {
        console.log('文件不存在');
        fs.writeFile('README.md', new Date(), (err) => {//事件队列 ② 执行后再执行一次 ① 
            if (err) { console.error(err); return false; }
            console.log('创建成功');
        });
        return false;
    }
    fs.unlink('README.md', (err) => {// 事件队列③ ，存在就执行这个事件
        console.log('文件存在');
        if (err) { console.error(err); return false; }
        fs.writeFile('README.md', new Date(), (err) => {
            if (err) { console.error(err); return false; }
            console.log('删除又创建了');
        })
    })
})