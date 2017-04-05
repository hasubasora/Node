/**
 * debug
 * $ node debug name
 * n 下一步
 */

/**
 * 模仿退出C
 */

setInterval(function() {
    console.log(1);
}, 1000)


//标识 按下C
var exiting = false;
process.on('SIGINT', () => {
    if (exiting) {
        //终止进程
        console.log('退出了');
        process.exit();
    } else {
        console.log('再按下一次退出！')
        exiting = true;
        setTimeout(() => {
            exiting = false;
        }, 1000);
    }
})