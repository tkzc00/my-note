// 需求：
// 交换变量 num1 和 num2 的值（提示：借助于第三个变量）。

// 目标：
//  num1 => 2
//  num2 => 33

// 变量1：
let num1: number = 33
// 变量2：
let num2: number = 2

// 思路：
// 1 准备空杯子
let temp: number
// 2 把你的枸杞倒入空杯子
temp = num1 // 33
// 3 把老王的当归倒入你的保温杯
num1 = num2 // num1 => 2
// 4 把空杯子里的枸杞倒入老王的保温杯
num2 = temp // num2 => 33

console.log(num1)
console.log(num2)