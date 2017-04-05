/**
 * 输入输出
 */

var json = {
    'kong': '123',
    'ye': '321'
};
//保存用户
var name = '';
//接收用户输入
// var res = process.stdin.readline();
process.stdout.write('输入账户\n');
//data事件，检测输入数据流
process.stdin.on('data', (input) => {
    // process.stdout.write(typeof input); //Object 实际上是一个流(二进制数组)
    input = input.toString().trim();
    if (!name) {
        //获取一个键值对集合中的所有建
        if (Object.keys(json).indexOf(input) === -1) {
            //用户名不存在
            process.stdout.write('不存在\n');
            process.stdout.write('输入账户\n');
            name = '';
        } else {
            process.stdout.write('输入密码');
            name = input;
        }
    } else {
        //对比键的值就是密码
        if (input === json[name]) {
            console.log(input)
            console.log(json[name])
            process.stdout.write('登陆成功');

        } else {
            process.stdout.write('输入密码');
        }
    }
})
console.log(Object.keys(json))