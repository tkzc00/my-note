// function fn() {
//   // 变量 num 是局部变量
//   let num: number = 1
//   console.log(num) // 此处能访问到变量 num
// }
// fn()
// console.log(num) // 问题：此处能访问到变量 num 吗？


// 变量 num 是全局变量
let num: number = 1

function fn() {
  console.log(num) // 此处能访问到变量 num
}
fn()
console.log(num) // 问题：此处能访问到变量 num 吗？
