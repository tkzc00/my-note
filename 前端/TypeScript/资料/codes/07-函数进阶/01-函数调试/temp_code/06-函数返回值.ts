// 创建一个函数，求数组中所有元素的和
function getSum(arr: number[]) {
  let sum: number = 0
  for (let i: number = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  // console.log(sum)
}

// getSum([3, 5, 7])
// getSum([2, 4, 6])

// 需求：计算以上两个数组和的和
// getSum([3, 5, 7]) -> 第一个数组的和 15
// getSum([2, 4, 6]) -> 第二个数组的和 12

let result = getSum([3, 5, 7])
console.log(result)
