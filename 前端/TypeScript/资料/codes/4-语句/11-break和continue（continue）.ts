// 买了 5 个包子，吃包子。 正在吃第n个包子

// continue
for (let i: number = 1; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log('正在吃第' + i + '个包子')
}
