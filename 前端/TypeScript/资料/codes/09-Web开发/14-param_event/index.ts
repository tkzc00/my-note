// button 元素
let btn = document.querySelector('#btn') as HTMLButtonElement

// 添加事件，让当前按钮的文字大小变为 30px
btn.addEventListener('click', function (event) {
  // console.log(event.type)
  // console.log(event.target)
  // console.log(event)

  let target = event.target as HTMLButtonElement
  target.style.fontSize = '30px'
})