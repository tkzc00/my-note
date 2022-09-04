// 1 改造函数（getSum），计算数组中所有元素的和并返回
// function getSum(nums: number[]): number {
//   let sum: number = 0
//   for (let i: number = 0; i < nums.length; i++) {
//     sum += nums[i]
//   }
//   // console.log(sum)
//   return sum
// }

// let res: number = getSum([1, 3, 5])
// console.log(res)
// console.log(res * 100)
// console.log(res - 100)


// 2 封装函数（calcArea），计算任意三角形面积并返回
//   公式： 1/2 * 底 * 高
// function calcArea(a: number, h: number): number {
//   // let area: number = 1/2 * a * h
//   // return area
//   return 1/2 * a * h
// }

// console.log(calcArea(10, 10))
// console.log(calcArea(10, 8))


// 3 封装函数（getMax），得到任意两个数中的最大值并返回
function getMax(num1: number, num2: number): number {
  // if (num1 > num2) {
  //   return num1
  // } else {
  //   return num2
  // }
  return num1 > num2 ? num1 : num2
}

console.log(getMax(1, 3))
console.log(getMax(3, 3))
console.log(getMax(10, 3))