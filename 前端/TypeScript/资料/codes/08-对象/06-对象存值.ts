interface IUser {
  name: string
  height: number
}

let jay: IUser = {
  name: '周杰伦',
  height: 175
}

// 修改name属性的值
jay.name = '周董'
jay.height = 180

console.log(jay.name, jay.height)