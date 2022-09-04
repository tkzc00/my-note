/* 
  数组的练习
*/

// 二：找出数组中的最大值
//     [1, 9, 3]
let nums1: number[] = [1, 9, 3, 12, 8, 33, 16]

// 思路：
// 1 创建变量max，来存储最大值
// 2 假设数组中的第一个元素为最大值，作为max的默认值
let max: number = nums1[0]
// 3 使用for循环遍历数组，获取到数组中的每一个元素
for (let i: number = 1; i < nums1.length; i++) {
  // 4 在for循环中，判断每一个元素是否大于max
  // 5 如果大于，就把该元素存储到max中（max一直都是最大值）
  //   如果小于或等于，不做任何处理（ 因为找的是最大值 ）
  if (nums1[0] > max) {
    max = nums1[i]
  }
}
console.log(max)