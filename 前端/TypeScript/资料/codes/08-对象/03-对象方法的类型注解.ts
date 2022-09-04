// 说明：将鼠标放在以下变量名称上就可以知道类型注解
let age = 18
let songName = '晴天'
let isVip = true
let person = {
  name: '刘老师',
  age: 18
}


// ---
let p1: {
  sayHi: () => void
}

p1 = {
  sayHi: function () {
    console.log('哎呦，不错哦~')
  }
}

let p2: {
  sing: (name: string) => void
}
p2 = {
  sing: function (name: string) {
    console.log('歌曲名称：' + name)
  }
}

let p3: {
  sum: (num1: number, num2: number) => number
}
p3 = {
  sum: function (num1: number, num2: number) {
    return num1 + num2
  }
}
