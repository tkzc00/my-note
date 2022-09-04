// 需求：判断数组中是否包含大于10的数字。

let nums: number[] = [1, 1, 9, 8, 6]

// 1 使用 forEach
// let has: boolean = false
// nums.forEach(function (num) {
//   console.log(num)
//   if (num > 10) {
//     has = true
//   }
// })
// console.log(has)

// 2 使用 some
let has: boolean = nums.some(function (num) {
  console.log(num)
  if (num > 10) {
    // 说明已经找到满足条件的元素，通过返回true来停止后续的循环
    return true
  }

  // 说明没有找到满足条件的元素，通过返回false来继续后面的循环
  return false
})
console.log(has)