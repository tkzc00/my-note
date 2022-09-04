// 1 创建一个函数（sum），用来计算任意两个数字的和
// function sum(num1: number, num2: number) {
//   let result: number = num1 + num2
//   console.log(result)
// }

// sum(10, 20)
// sum(1, 9)

// 2 创建一个函数，求数组中所有元素的和
function getSum(arr: number[]) {
  let result: number = 0
  for (let i: number = 0; i < arr.length; i++) {
    result += arr[i]
  }
  console.log(result)
}

getSum([3, 5, 7])
getSum([2, 4, 6])
