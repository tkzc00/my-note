/*
console.log('-- 代码开始执行 --')

function work() {
  console.log('早上9点开始工作')
  console.log('晚上6点结束工作')
}

let count: number = 0
count++
work()

console.log('-- 代码结束执行 --')
*/

function work() {
  console.log('早上9点开始工作')
  play()
  console.log('晚上6点结束工作')
}
function play() {
  console.log('早上9:30开始吃鸡')
  console.log('晚上5:30结束吃鸡')
}

work()
