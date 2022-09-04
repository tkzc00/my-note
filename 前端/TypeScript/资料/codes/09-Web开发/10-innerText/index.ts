// 读取 h1 的文本内容：
let title = document.querySelector('#title') as HTMLHeadingElement
console.log(title.innerText)

// 设置 h1 的文本内容：
// title.innerText = '等你下课'
// console.log(title.innerText)

// title.innerText = title.innerText + ' - 周杰伦'
title.innerText += ' - 周杰伦'