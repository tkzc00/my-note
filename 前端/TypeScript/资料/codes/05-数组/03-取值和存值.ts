// 取值和存值

let foods: string[] = ['煎饼', '馒头', '米饭']

// 取值
// console.log(foods[0])
// console.log(foods[1])
// console.log(foods[2])

// 存值 - 修改
// 技巧：先获取再存值
// foods[1] = '包子'
// foods[2] = '油条'
// console.log(foods)

// 存值 - 添加
// foods[3] = '油泼面'
// 注意：给数组添加一个元素，数组长度也会加1
foods[foods.length] = '油泼面'
console.log(foods.length)
foods[foods.length] = '烤山药片'
console.log(foods)