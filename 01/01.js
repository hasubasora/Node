console.log(process.arch) //打印系统 x64
console.log(process.argv.slice(2))

var arg = process.argv.slice(2);

switch (arg[0]) {
    case 'init':
        console.log('初始化安装');
        break;
    case 'install':
        console.log('你要安装什么');
        break;
    case 'uninstall':
        console.log('你要删除什么');
        break;
}

process.stdout.write('打印控制台') //操作控制台

// console.log = (msg) => {
//     process.stdout.write('${msg}\n');
// }
// ${msg} 模板字符串
//  反引号 ``


/**
 * 表情帧
 */

var frames = [];
frames[frames.length] = `
<(￣ˇ￣)/         []~(￣▽￣)~*
`;
frames[frames.length] = `
<(￣ˇ￣)/      []~(￣▽￣)~*
`;
frames[frames.length] = `
<(￣ˇ￣)/  []~(￣▽￣)~*
`;
frames[frames.length] = `
o(￣▽￣)d []~(￣▽￣)~*
`;
frames[frames.length] = `
o(￣▽￣)d d=====(￣▽￣*)b
`;
frames[frames.length] = `
(～￣▽￣)～      ╰(￣▽￣)╭
`;
frames[frames.length] = `
(～￣▽￣)～  ╰(￣▽￣)╭
`;
frames[frames.length] = `
～(￣▽￣～)(～￣▽￣)～
`;
frames[frames.length] = `
 ～(￣▽￣～)(～￣▽￣)～
`;
frames[frames.length] = `
～(￣▽￣～)(～￣▽￣)～
`;
frames[frames.length] = `
 ～(￣▽￣～)(～￣▽￣)～
`;
var fps = 5;
var current = 0;
var render = () => {
    //清空控制台
    // var size = process.stdout.getWindowSize(); //cmd 宽高
    // console.log(size);
    // var h = process.stdout.getWindowSize()[0];
    // for (var i = 0; i < h; i++) {
    //     process.stdout.write('\n');
    // }
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

    //输出新内容
    if (current === frames.length) { current = 0; }
    process.stdout.write(frames[current++]);

}

setInterval(render, 1000 / fps)

/**
 * 表情帧
 */