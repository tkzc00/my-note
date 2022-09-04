function getSum(nums: number[]): number {
  let sum: number = 0
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  // console.log(sum)
  return sum
}

let result: number = getSum([1, 3, 5]) + getSum([10, 100, 1000])
console.log(result)
