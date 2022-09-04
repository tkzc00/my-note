interface IUser {
  name: string
}

// 发生类型推论的场景：
let age = 18
let songName = '雅俗共赏'
let person = {
  name: 'jack'
}

// 说明：如果先声明变量后赋值，此时应该在声明变量时指定类型注解
// let num: number
// num = 12
// num = ''
// num = false

function sum(num1: number, num2: number) {
  return num1 + num2
}
sum(1, 3)
