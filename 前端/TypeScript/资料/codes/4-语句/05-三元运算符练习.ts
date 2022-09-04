let age: number = 16

// if...else 的实现：
if (age < 18) {
  console.log('回家看熊出没')
} else {
  console.log('玩吃鸡好爽啊')
}

// 需求：使用 三元运算符 实现以上功能
let result: string = age < 18 ? '回家看熊出没' : '玩吃鸡好爽啊'
console.log(result)