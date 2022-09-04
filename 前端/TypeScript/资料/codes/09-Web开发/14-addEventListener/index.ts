// button 元素
let btn = document.querySelector('#btn') as HTMLButtonElement

// 添加事件：
btn.addEventListener('click', function () {
  console.log('鼠标点击事件触发了')
})
btn.addEventListener('mouseenter', function () {
  console.log('鼠标移入了。。。')
})