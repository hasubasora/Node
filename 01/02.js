/**
 * 字符画，引入文件
 */
var fs = require('fs');

var frames = [];
for (var i = 1; i < 2; i++) {
    frames[frames.length] = fs.readFileSync(`./text/${i}.txt`, `utf8`);

}

var fps = 5;
var current = 0;
var render = () => {
    //清空控制台
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

    //输出新内容
    if (current === frames.length) { current = 0; }
    process.stdout.write(frames[current++]);

}

setInterval(render, 1000 / fps)