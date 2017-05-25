'use strict';

// 接受参数
const args = process.argv.slice(2);
// ['node执行程序的所在路径'，'当前脚本所在路径',。。。。]

// 分析参数
// p1 op p2
let par1 = args[0];
let op = args[1];
let par2 = args[2];

// 运算参数
// let result =eval(`${par1} ${op} ${par2}`);
// console.log(result);

let result;
switch (op) {
    case '+':
        result = parseFloat(par1) + parseFloat(par2);
        break;
    case '-':
        result = parseFloat(par1) - parseFloat(par2);
        break;
    case '*':
    case '×':
        result = parseFloat(par1) * parseFloat(par2);
        break;
    case '/':
    case '÷':
        result = parseFloat(par1) / parseFloat(par2);
        break;
    default:
        throw new Error('不支持此操作' + op);
}
console.log(result);