interface IUser {
  name: string
  height: number
  sing: () => void
}

// 创建对象
let jay: IUser = {
  name: '周杰伦',
  height: 175,
  sing: function () {
    console.log('故事的小黄花。。。')
  }
}

// 访问对象jay的name属性
console.log(jay.name)
console.log(jay.height)

// 调用方法
jay.sing()

console.log('我叫', jay.name)
