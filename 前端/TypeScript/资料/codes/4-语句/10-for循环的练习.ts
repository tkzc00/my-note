/* 
  for 循环的练习：

  1 在终端中打印出1-5
  2 买了5个包子，吃包子
    要求：打印出 '正在吃第n个包子'（比如，'正在吃第3个包子'）
  3 计算1-100之间所有数字的和
*/

// 3 计算1-100之间所有数字（整数）的和
//   1 + 2 + 3 + 4 + .... + 98 + 99 + 100 => 5050
// 思路分析：
// 假设和为 sum = 0
// 1. sum = sum + 1
// 2. sum = sum + 2
// 3. sum = sum + 3
// ...
// n. sum = sum + n
// ...
// 100. sum = sum + 100
let sum: number = 0
for (let i: number = 1; i <= 100; i++) {
  // sum = sum + i
  // 简化形式
  sum += i
}
console.log(sum)





// 2 买了5个包子，吃包子
//   要求：打印出 '正在吃第n个包子'（比如，'正在吃第3个包子'）
// for (let i: number = 1; i <= 5; i++) {
//   // console.log('正在吃第' + i + '个包子')
//   console.log('正在吃第' + i + '个包子')
//   // console.log('i') // 字符串i
//   // console.log(i) // 计数器变量i
// }

// 1 在终端中打印出1-5
// for (let i: number = 1; i <= 5; i++) {
//   console.log(i)
// }