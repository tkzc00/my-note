// function fn(): number {
//   console.log('fn 执行了')
//   return 18
//   console.log('我不会执行，放在这，没有意义')
// }

// fn()

// return

function play(age: number) {
  if (age < 18) {
    return
  }

  console.log('网吧上网好爽啊')
}

play(16)
play(20)