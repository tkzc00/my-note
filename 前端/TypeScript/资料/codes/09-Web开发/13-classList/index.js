// p元素
var p = document.querySelector('#txt');
// 添加类
p.classList.add('b', 'c');
// 移除类
p.classList.remove('b', 'c');
// 判断类是否存在
var has = p.classList.contains('b');
console.log(has);
