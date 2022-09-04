// 获取 h1 元素：
let title = document.querySelector('#title') as HTMLHeadingElement
// title.id
console.log(title)
console.dir(title)

// 获取 img 元素：
let img = document.querySelector('#image') as HTMLImageElement
img.src = './2.jpg'
// img.id
console.dir(img)