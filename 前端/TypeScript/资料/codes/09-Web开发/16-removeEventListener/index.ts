// 给 btn 添加事件
let btn = document.querySelector('#btn') as HTMLButtonElement
function handleClick() {
  console.log('点我，你再点下试试！')
}
// btn.addEventListener('click', handleClick)

// 演示事件只触发一次
btn.addEventListener('click', handleClick, { once: true })

// 点击移除事件按钮，移除 btn 的点击事件
let removeBtn = document.querySelector('#remove') as HTMLButtonElement
removeBtn.addEventListener('click', function () {
  // 移除 btn 按钮的点击事件
  btn.removeEventListener('click', handleClick)
})

// 错误演示：
// // 给 btn 添加事件
// let btn = document.querySelector('#btn') as HTMLButtonElement
// btn.addEventListener('click', function () {
//   console.log('点我，你再点下试试！')
// })

// // 点击移除事件按钮，移除 btn 的点击事件
// let removeBtn = document.querySelector('#remove') as HTMLButtonElement
// removeBtn.addEventListener('click', function () {
//   // 移除 btn 按钮的点击事件
//   btn.removeEventListener('click', function () {
//     console.log('点我，你再点下试试！')
//   })
// })// 10:08