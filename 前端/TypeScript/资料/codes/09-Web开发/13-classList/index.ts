// p元素
let p = document.querySelector('#txt') as HTMLParagraphElement

// 添加类
p.classList.add('b', 'c')

// 移除类
p.classList.remove('b', 'c')

// 判断类是否存在
let has = p.classList.contains('b')
console.log(has)