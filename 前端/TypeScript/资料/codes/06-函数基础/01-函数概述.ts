// 需求：计算数组num中所有数字的和。
// let nums: number[] = [1, 3, 5]

// let sum: number = 0
// for (let i: number = 0; i < nums.length; i++) {
//   sum += nums[i]
// }
// console.log(sum)


// let nums2: number[] = [2, 4, 6]

// let sum2: number = 0
// for (let i: number = 0; i < nums2.length; i++) {
//   sum2 += nums2[i]
// }
// console.log(sum2)

// 演示函数的使用
function getSum(nums: number[]) {
  let sum: number = 0
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  console.log(sum)
}

let nums: number[] = [1, 3, 5]
getSum(nums)
let nums2: number[] = [2, 4, 6]
getSum(nums2)