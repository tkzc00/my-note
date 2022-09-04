function fn(name: string, age: number) {
  console.log('1 ' + name)
  console.log('2 ' + age)
}

fn('刘老师', 18)

// 说明：代码会报错！因为实参没有与形参一一对应
// fn()

function sing(songName: string) {}
// 说明：代码会报错！因为实参不符合形参的类型要求
// sing(18)

sing('18')