/*
  获取元素 和 innerText 的练习。

  要求：给所有 p 标签的内容前面，添加 '[自己的索引]'
  即，
    天青色等烟雨 -> [0]天青色等烟雨
    而我在等你   -> [1]而我在等你
*/

// 1 获取到所有的 p 元素列表（可以像遍历数组一样遍历这个元素列表）
let list = document.querySelectorAll('.a')
// console.log(list)
// 2 遍历 p 元素列表，拿到每一个 p 元素以及它的索引号
list.forEach(function (item, index) {
  // console.log(item, index)
  // 因为要访问 item（p 元素）的 innerText 属性，所以，
  // 此处我们使用 类型断言 来指定更加具体的类型
  let p = item as HTMLParagraphElement
  // 3 通过索引号拼接内容，然后，设置元素的文本内容
  p.innerText = '[' + index + ']' + p.innerText
}) // 7:30