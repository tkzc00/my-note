// 需求1：计算数组中所有数字的和。

let nums1: number[] = [1, 3, 5]

let sum1: number = 0
for (let i: number = 0; i < nums1.length; i++) {
  sum1 += nums1[i]
}
console.log(sum1)

// 需求2：计算另外一个数组的所有数字的和。

function sum(nums1) {
  let sum1: number = 0
  for (let i: number = 0; i < nums1.length; i++) {
    sum1 += nums1[i]
  }
  console.log(sum1)
}

sum(nums1)

let nums2: number[] = [2, 4, 6]

sum(nums2)
