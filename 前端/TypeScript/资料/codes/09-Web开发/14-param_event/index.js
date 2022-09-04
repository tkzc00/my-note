// button 元素
var btn = document.querySelector('#btn');
// 添加事件，让当前按钮的文字大小变为 30px
btn.addEventListener('click', function (event) {
    // console.log(event.type)
    // console.log(event.target)
    // console.log(event)
    var target = event.target;
    target.style.fontSize = '30px';
});
