/* 
  数组的练习
*/

// 一：求数组中所有元素的和
//     [200, 30, 3]
let nums: number[] = [200, 30, 3, 100, 1000]

// 思路：
// 1 准备一个变量来存储和（sum）
let sum: number = 0
// 2 使用 for 循环遍历数组，拿到数组中的每一个元素
for (let i: number = 0; i < nums.length; i++) {
  // 3 在 for 循环中让 sum += 数组的每一个元素
  sum += nums[i]
}
console.log(sum)