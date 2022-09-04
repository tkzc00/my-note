// 给 btn 添加事件
let btn = document.querySelector('#btn') as HTMLButtonElement

// btn.addEventListener('click', function (event) {
//   event.target
// })
btn.addEventListener('click', handleClick)

function handleClick(event: MouseEvent) {
  console.log('点我，你再点下试试！ 666', event.target)
}

fn()
function fn() {
  console.log('函数可以先使用再声明')
}