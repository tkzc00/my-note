/* 
  数组的练习
*/

// 三：找出数组中所有不为0的元素，放到一个新的数组中
//     [1, 3, 0, 10, 33, 0, 0, 6]
let nums2: number[] = [1, 3, 0, 25, 33, 0, 0, 6, 0, 9]

// 思路：
// 1 创建一个新数组（newArr），存储不为0的元素
let newArr: number[] = []
// 2 使用for循环遍历数组，拿到数组中的每一个元素
for (let i: number = 0; i < nums2.length; i++) {
  // 3 在for循环中判断每一个元素是否为0
  if (nums2[i] !== 0) {
    // 4 如果不为0，那么，将该元素存储到新数组中
    newArr[newArr.length] = nums2[i]
  }
  // 5 如果为0，就不做任何处理
}
console.log(newArr)