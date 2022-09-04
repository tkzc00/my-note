// p元素
let p = document.querySelector('#txt') as HTMLParagraphElement

// 读取：
console.log(p.style.fontSize)

// 设置：
p.style.fontSize = '30px'
p.style.color = 'red'
// 隐藏当前元素
p.style.display = 'none'
// 展示p元素
p.style.display = 'block'

console.log(p.style.fontSize)