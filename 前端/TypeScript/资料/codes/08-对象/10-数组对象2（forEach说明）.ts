// 声明函数时的参数，称为形参
function sum(num1: number, num2: number): number {
  return num1 + num2
}
// 调用函数时的参数，称为实参
sum(1, 3)




// 模拟 forEach 方法的声明：
function forEach1(callbackfn: (value: boolean, index: string) => void) {
}

// 模拟 forEach 方法的调用：
// 此处的函数是实参！
forEach1(function (a) {})




let songs: string[] = ['五环之歌', '探清水河', '晴天']
songs.forEach(function (a, b) {
  console.log('索引', b, '元素', a)
})
// let nums: number[] = [1, 12, 9, 8, 6]
// nums.forEach(function (a) {})