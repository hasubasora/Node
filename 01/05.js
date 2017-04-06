// 1.如果函数需要回调参数,一定是在参数的后面出现
// function getFileAsync(path, callback) {
//     if ('错误') {
//         callback(new Error('xxx 错误'))
//     } else {
//         // 先传一个空，在传你数据
//         callback(null, data);
//     }
// }

// 回调函数设计

/**
 * 2.错误优先的回调函数
 * @param {*} number 传入的数字
 * @param {*} callback 回调函数参数的最后一个，错误优先
 */

function isEvenOdd(number, callback) {
    // 先判断是不是数字
    if (typeof number === 'number') {
        // 奇数
        if (number % 2) {
            callback(null, '是奇数');
        } else {
            callback(null, '是偶数');
        }
    } else {
        // throw new Error('不是数字')//字符串的话这里会报错
        callback(new Error('不是数字'));
        // 文件操作里面是不可以的，因为文件操作整体是异步的，由操作系统去处理帮你触发回调，会有个错误优先的概念
    }
}
/**
 * 回调函数第一个默认接收错误信息，第二个才是真正回调数据，方便外界获取调用的错误状况
 */
// 调用,约定将错误信息作为回调的第一个参数 
isEvenOdd(10, (error, data) => {
    // throw 语句创建自定义错误。回到主线程可以用throw，和return差不多,异步无法通过try catch捕获异常
    if (error) throw error;
    console.log(data);
})

isEvenOdd(11, (error, data) => {
    if (error) throw error;
    console.log(data);
})

// 05.js:47 if (error) throw error; 会报错
// isEvenOdd('11', (error, data) => {
//     if (error) throw error;
//     console.log(data)
// })