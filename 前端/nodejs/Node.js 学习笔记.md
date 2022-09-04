# Node.js 学习笔记
---

# 第一章：初识 Node.js 与 内置模块
---

## 1 初识 Node.js

### 1.1 Node.js 简介

#### 1.1.1 什么是 Node.js

Node.js is a JavaScript built on Chrome's V8 JavaScript engine.

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

Node.js 的官网地址：[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)

#### 1.1.2 Node.js 中的 JavaScript 运行环境

![](images/nodejs运行环境.png)

**注意**：

1. ==浏览器==是 JavaScript 的==前端运行环境==。
2. ==Node.js== 是 JavaScript 的==后端运行环境==。
3. Node.js 中==无法调用== DOM 和 BOM 等==浏览器内置 API==。

#### 1.1.3 Node.js 可以做什么

Node.js 作为一个 JavaScript 的运行环境，仅仅提供了基础的功能和 API。然而，基于 Node.js 提供的这些基础功能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了 Node.js，可以让前端程序员胜任更多的工作和岗位：

1. 基于 Express 框架（[http://www.expressjs.com.cn/](http://www.expressjs.com.cn/)），可以快速构建 Web 应用
2. 基于 Electron 框架（[https://electronjs.org/](https://electronjs.org/)），可以构建跨平台的桌面应用
3. 基于 restify 框架（[http://restify.com/](http://restify.com/)），可以快速构建 API 接口项目
4. 读写和操作数据库、创建实用的命令行工具辅助前端开发、etc...

**总之**：Node.js 是大前端时代的“大宝剑”，有了 Node.js 这个超级 buff 的加持，前端程序员的行业竞争力会越来越强！

#### 1.1.4 Node.js 怎么学

**浏览器中的 JavaScript 学习路径**：
- JavaScript 基础语法 + 浏览器内置 API（DOM、BOM）+ 第三方库（jQuery、art-template 等）

**Node.js 的学习路径**：
- JavaScript 基础语法 + ==Node.js 内置 API 模块==（fs、path、http 等）+ ==第三方 API 模块==（express、mysql 等）

### 1.2 Node.js 环境的安装

如果希望通过 Node.js 来运行 JavaScript 代码，则必须在计算机上安装 Node.js 环境才行。

安装包可以从 Node.js 的官网首页直接下载，进入到 Node.js 的官网首页（[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)），点击绿色的按钮，下载所需的版本后，双击直接安装即可。

#### 1.2.1 区分 LTS 版本和 Current 版本的不同

1. LTS 为长期稳定版，对于追求稳定性的企业级项目来说，推荐安装 LTS 版本的 Node.js。
2. Current 为新特性尝鲜版，对热衷于尝试新特性的用户来说，推荐安装 Current 版本的 Node.js。但是，Current 版本中可能存在隐藏的 Bug 或安全性漏洞，因此不推荐在企业级项目中使用 Current 版本的 Node.js。

#### 1.2.2 查看已安装的 Node.js 的版本号

打开终端，在终端中输入命令 ==node -v== 后，按下回车键，即可查看已安装的 Node.js 的版本号。

![](images/查看版本号.png)

### 1.3 在 Node.js 环境中执行 JavaScript 代码

1. 打开终端
2. 输入 ==node 要执行的js文件的路径==

```sh
node code/1.js
```

#### 1.3.1 终端中的快捷键

在 Windows 的 powershell 或 cmd 终端中，我们可以通过如下快捷键，来提高终端的操作效率：

1. 使用 ==↑== 键，可以快速定位到上一次执行的命令
2. 使用 ==tab== 键，能够快速补全路径
3. 使用 ==esc== 键，能够快速清空当前已输入的命令
4. 输入 ==cls== 命令，可以清空终端

## 2 fs 文件系统模块

### 2.1 什么是 fs 文件系统模块

==fs 模块==是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

例如：

- ==fs.readFile()== 方法，用来==读取==指定文件中的内容
- ==fs.writeFile()== 方法，用来向指定文件中==写入==内容

如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它：

```js
const fs = require('fs')
```

### 2.2 读取指定文件中的内容

#### 2.2.1 fs.readFile() 的语法格式

使用 fs.readFile() 方法，可以读取指定文件中的内容，语法格式如下：

```js
fs.readFile(path[, options], callback)
```

**参数解读**：

- path：==必选==参数，字符串，表示文件的路径
- options：可选参数，表示以什么==编码格式==来读取文件
- callback：==必选==参数，文件读取完成后，通过回调函数拿到读取的结果

#### 2.2.2 fs.readFile() 的示例代码

以 utf8 的编码格式，读取指定文件的内容，并打印 err 和 dataStr 的值：

```js
const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
    console.log(err)
    console.log('--------')
    console.log(dataStr)
})
```

#### 2.2.3 判断文件是否读取成功

可以判断 err 对象是否为 null，从而知晓文件的读取结果：

```js
const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function(err, result) {
    if (err) {
        return console.log('文件读取失败！' + err.message)
    }

    console.log('文件读取成功，内容是：' + result)
})
```

### 2.3 向指定的文件中写入内容

#### 2.3.1 fs.writeFile() 的语法格式

使用 fs.writeFile() 方法，可以向指定的文件中写入内容，语法格式如下：

```js
fs.writeFile(file, data[, options], callback)
```

**参数解读**：

- file：==必选==参数，需要指定一个==文件路径的字符串==，表示文件的存放路径。
- data：==必选==参数，表示要写入的内容。
- options：==可选==参数，表示以什么格式写入文件内容，默认值是 utf8。
- callback：==必选==参数，文件写入完成后的回调函数。

#### 2.3.2 fs.writeFile() 的示例代码

向指定的文件路径中，写入文件内容：

```js
const fs = require('fs')
fs.writeFile('./files/2.txt', 'Hello Node.js!', function(err) {
    console.log(err)
})
```

#### 2.3.3 判断文件是否写入成功

可以判断 err 对象是否为 null，从而知晓文件写入的结果：

```js
const fs require('fs')
fs.writeFile('./files/2.txt', 'Hello Node.js!', function(err) {
    if (err) {
        return console.log('文件写入失败！' + err.message)
    }
    console.1og('文件写入成功!')
})
```

### 2.5 练习 - 考试成绩整理

使用 fs 文件系统模块，将素材目录下成绩.txt文件中的考试数据，整理到成绩-ok.txt文件中。

整理前，成绩.txt 文件中的数据格式如下：

```txt
小红=99 小白=100 小黄=70 小黑=66 小绿=88
```

整理完成之后，希望得到的 成绩-ok.txt 文件中的数据格式如下：

```txt
小红：99 
小白：100
小黄：70
小黑：66
小绿：88
```

```js
// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 读取文件的内容
fs.readFile('../素材/成绩.txt', 'utf8', function(err, dataStr) {
    // 3. 判断是否读取成功
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    // console.log('读取文件成功！' + dataStr)

    // 4.1 先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })
    // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')

    // 5. 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
        if (err) {
        return console.log('写入文件失败！' + err.message)
        }
    console.log('成绩写入成功！')
    })
})
```

### 2.6 fs 模块 - 路径动态拼接的问题

在使用 fs 模块操作文件时，如果提供的操作路径是以 ==./== 或 ==../== 开头的==相对路径==时，很容易出现路径动态拼接错误的问题。

**原因**：代码在运行的时候，==会以执行 node 命令时所处的目录==，动态拼接出被操作文件的完整路径。

**解决方案**：在使用 fs 模块操作文件时，==直接提供完整的路径==，不要提供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题。

```js
// 不要使用·/或··/这样的相对路径
fs.readFile('./files/1.txt', 'utf8', function(err,datastr) {
    if(err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log(dataStr)
})

// dirname表示当前文件所处的目录
fs.readFile(__dirname + '/files/1.txt','utf8',function(err, datastr) {
if(err) {
    return console.log('读取文件失败！' + err.message)
}
console.log(dataStr)
})
```

## 3 path 路径模块

### 3.1 什么是 path 路径模块

==path 模块==是 Node.js 官方提供的、用来==处理路径==的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

例如：

- ==path.join()== 方法，用来==将多个路径片段拼接成一个完整的路径字符串==
- ==path.basename()== 方法，用来==从路径字符串中，将文件名解析出来==

如果要在 JavaScript 代码中，使用 path 模块来处理路径，则需要使用如下的方式先导入它：

```js
const path = require('path')
```

### 3.2 路径拼接

#### 3.2.1 path.join() 的语法格式

使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下：

```js
path.join([...paths])
```

**参数解读**：

- ...paths \<string> 路径片段的序列
- 返回值: \<string>

#### 3.2.2 path.join() 的代码示例

使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串：

```js
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr) // 输出 \a\b\d\e

const pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2) // 输出 当前文件所处目录\files\1.txt
```

**注意**：==今后凡是涉及到路径拼接的操作，都要使用 path.join() 方法进行处理==。不要直接使用 + 进行字符串的拼接。

### 3.3 获取路径中的文件名

#### 3.3.1 path.basename() 的语法格式

使用 path.basename() 方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：

```js
path.basename(path[, ext])
```

**参数解读**：

- path \<string> 必选参数，表示一个路径的字符串
- ext \<string> 可选参数，表示文件扩展名
- 返回: \<string> 表示路径中的最后一部分

#### 3.3.2 path.basename() 的代码示例

使用 path.basename() 方法，可以从一个文件路径中，获取到文件的名称部分：

```js
const fpath = '/a/b/c/index.html' // 文件的存放路径

var fullName = path.basename(fpath)
console.log(fullName) // 输出 index.html

var namewithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) // 输出 index
```
### 3.4 获取路径中的文件扩展名

#### 3.4.1 path.extname() 的语法格式

使用 path.extname() 方法，可以获取路径中的扩展名部分，语法格式如下：

```js
path.extname(path)
```

**参数解读**：

- path \<string>必选参数，表示一个路径的字符串
- 返回: \<string> 返回得到的扩展名字符串

#### 3.4.2 path.extname() 的代码示例

使用 path.extname() 方法，可以获取路径中的扩展名部分：

```js
const fpath = '/a/b/c/index.html' // 路径字符串

const fext = path.extname(fpath)
console.log(fext) // 输出 .html
```

### 3.5 综合案例 - 时钟案例

![](images/时钟案例.png)

```js
// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err, dataStr) {
  // 2.2 读取 HTML 文件失败
  if (err) return console.log('读取HTML文件失败！' + err.message)
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
    if (err) return console.log('写入 CSS 样式失败！' + err.message)
    console.log('写入样式文件成功！')
  })
}

// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
  // 4.2 通过正则，提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr)
  // 4.3 将提取出来的内容，做进一步的处理
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
    if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
    console.log('写入 JS 脚本成功！')
  })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
    if (err) return console.log('写入 HTML 文件失败！' + err.message)
    console.log('写入 HTML 页面成功！')
  })
}
```

**案例的两个注意点**：

1. fs.writeFile() 方法只能用来创建文件，不能用来创建路径
2. 重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容

## 4. http 模块

### 4.1 什么是 http 模块

回顾：什么是客户端、什么是服务器？

- 在网络节点中，负责消费资源的电脑，叫做客户端；==负责对外提供网络资源==的电脑，叫做服务器。

==http 模块==是 Node.js 官方提供的、用来==创建 web 服务器==的模块。通过 http 模块提供的 ==http.createServer()== 方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

如果要希望使用 http 模块创建 Web 服务器，则需要先导入它：

```js
const http = require('http')
```

### 4.2 进一步理解 http 模块的作用

服务器和普通电脑的区别在于，服务器上安装了 web 服务器软件，例如：IIS、Apache 等。通过安装这些服务器软件，就能把一台普通的电脑变成一台 web 服务器。

在 Node.js 中，我们==不需要使用 IIS、Apache 等这些第三方 web 服务器软件==。因为我们可以基于 Node.js 提供的 http 模块，==通过几行简单的代码，就能轻松的手写一个服务器软件==，从而对外提供 web 服务。

### 4.3 服务器相关的概念

#### 4.3.1 IP 地址

==IP 地址==就是互联网上==每台计算机的唯一地址==，因此 IP 地址具有唯一性。如果把“个人电脑”比作“一台电话”，那么“IP地址”就相当于“电话号码”，只有在知道对方 IP 地址的前提下，才能与对应的电脑之间进行数据通信。

**IP 地址的格式**：通常用“==点分十进制==”表示成（==a.b.c.d==）的形式，其中，a,b,c,d 都是 0~255 之间的十进制整数。例如：用点分十进表示的 IP地址（192.168.1.1）

**注意**：

1. ==互联网中每台 Web 服务器，都有自己的 IP 地址==，例如：大家可以在 Windows 的终端中运行 ping www.baidu.com 命令，即可查看到百度服务器的 IP 地址。
2. 在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入 127.0.0.1 这个 IP 地址，就能把自己的电脑当做一台服务器进行访问了。

#### 4.3.2 域名 和 域名服务器

尽管 IP 地址能够唯一地标记网络上的计算机，但IP地址是一长串数字，==不直观==，而且==不便于记忆==，于是人们又发明了另一套==字符型==的==地址方案==，即所谓的==域名（Domain Name）地址==。

==IP 地址和域名是一一对应的关系==，这份对应关系存放在一种叫做==域名服务器==(DNS，Domain name server)的电脑中。使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，==域名服务器就是提供 IP 地址和域名之间的转换服务的服务器==。

**注意**：

1. 单纯使用 IP 地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便。
2. 在开发测试期间， ==127.0.0.1== 对应的域名是 ==localhost==，它们都代表我们自己的这台电脑，在使用效果上没有任何区别。

#### 4.3.3 端口号

计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你的手中。

同样的道理，在一台电脑中，可以运行成百上千个 web 服务。每个 web 服务都对应一个唯一的端口号。客户端发送过来的网络请求，通过端口号，可以被准确地交给==对应的 web 服务==进行处理。

![](images/端口号.png)

**注意**：

1. 每个端口号不能同时被多个 web 服务占用。
2. 在实际应用中，URL 中的 ==80 端口可以被省略==。

### 4.4 创建最基本的 web 服务器

#### 4.4.1 创建 web 服务器的基本步骤

1. 导入 http 模块
2. 创建 web 服务器实例
3. 为服务器实例绑定 ==request== 事件，**监听客户端的请求**
4. 启动服务器

#### 4.4.2 步骤1 - 导入 http 模块

如果希望在自己的电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块：

```js
const http = require('http')
```

#### 4.4.2 步骤2 - 创建 web 服务器实例

调用 ==http.createServer()== 方法，即可快速创建一个 web 服务器实例：

```js
const server = http.creatServer()
```

#### 4.4.2 步骤3 - 为服务器实例绑定 request 事件

为服务器实例绑定 request 事件，即可监听客户端发送过来的网络请求：

```js
// 使用服务器实例的.on()方法，为服务器绑定一个 request 事件
server.on('request',(req, res) => {
    // 只要有客户端来请求我们自己的服务器，就会触发 request 事件，从而调用这个事件处理函数
    console.log('Someone visit our web server.')
})
```
#### 4.4.2 步骤4 - 启动服务器

调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例：

```js
// 调用 server.listen(端口号，cb回调) 方法，即可启动 web 服务器
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1')
})
```

#### 4.4.3 req 请求对象

只要服务器接收到了客户端的请求，就会调用通过 ==server.on()== 为服务器绑定的 ==request 事件处理函数==。

如果想在事件处理函数中，==访问与客户端相关的**数据**或**属性**==，可以使用如下的方式：

```js
server.on('request', (req) => {
// req是请求对像，它包含了与客户端相关的数据和属性，例败如：
// req.url 是客户端请求的 URL 地址
// req.method 是客户端的 method 请求类型
const str =`Your request url is ${req.url}, and request method is ${req.method}`
console.log(str)
})
```

#### 4.4.4 res 响应对象

在服务器的 request 事件处理函数中，如果想==访问与服务器相关的**数据**或**属性**==，可以使用如下的方式：

```js
server.on('request',(req, res) => {
    // res 是响应对像，它包含了与服务器相关的数据和属性，例如：
    // 要发送到客户端的字符串
    const str =`Your request url is ${reg.url},and request method is ${req.method}`
    // res.end() 方法的作用：
    // 向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})
```

#### 4.4.5 解决中文乱码问题

当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动==设置内容的编码格式==：

```js
server.on('request',(req, res) => {
    // 发送的内容泡含中文
    const str=`您靖求的 url 地址是 ${req.url},请求的 method 类型是 ${req.method}`
    // 为了防止中文显示乱码的问题，需要设置响应头 Content-Type 的值为 text/html; charset:=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 把包含中文的内容，响应给客户端
    res.end(str)
})
```

### 4.5 根据不同的 url 响应不同的 html 内容

#### 4.5.1 核心实现步骤

1. 获取==请求的 url 地址==
2. 设置==默认的响应内容==为 404 Not found
3. 判断用户请求的是否为 ==/== 或 ==/index.html== 首页
4. 判断用户请求的是否为 ==/about.html== 关于页面
5. 设置 ==Content-Type== 响应头，防止中文乱码
6. 使用 ==res.end()== 把内容响应给客户端

#### 4.5.2 动态响应内容

```js
server.on('request', function(req, res) {
    const url = reg.url // 1. 获取请求的 ur1 地址
    let content = '<h1>404 Not found!</h1>' // 2. 设置默认的内容为 404 Not found
    if (url === '/' || url === '/index.html') {
        content='<h1>首页</h1>' // 3. 用户请求的是首页
    } else if (url === '/about.html') {
        content='<h1>关于页面</h1>' // 4. 用户请求的是关于页面
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8') // 5. 设置 Content-Type 响应头，防止中文乱码
    res.end(content) // 6. 把内容发送给客户端
})
```

### 4.6 案例 - 实现 clock 时钟的 web 服务器

#### 4.6.1 核心思路

把文件的==实际存放路径==，==作为==每个资源的==请求 url 地址==。

![](images/核心思路.png)

#### 4.6.2 实现步骤

1. 导入需要的模块
2. 创建基本的 web 服务器
3. 将资源的请求 url 地址映射为文件的存放路径
4. 读取文件内容并响应给客户端
5. 优化资源的请求路径

```js
// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 模块
const fs = require('fs')
// 1.3 导入 path 模块
const path = require('path')

// 2.1 创建 web 服务器
const server = http.createServer()
// 2.2 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
    // 3.1 获取到客户端请求的 URL 地址
    //     /clock/index.html
    //     /clock/index.css
    //     /clock/index.js
    const url = req.url
    // 3.2 把请求的 URL 地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname, url)
    // 5.1 预定义一个空白的文件存放路径
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        //     /index.html
        //     /index.css
        //     /index.js
        fpath = path.join(__dirname, '/clock', url)
    }

    // 4.1 根据“映射”过来的文件路径读取文件的内容
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 4.2 读取失败，向客户端响应固定的“错误消息”
        if (err) return res.end('404 Not found.')
        // 4.3 读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)
    })
})
// 2.3 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})
```

# 第二章：模块化
---

## 1 模块化的基本概念

### 1.1 什么是模块化

==模块化==是指解决一个复杂问题时，自顶向下逐层==把系统划分成若干模块的过程==。对于整个系统来说，==模块是可组合、分解和更换的单元==。

#### 1.1.1 编程领域中的模块化

编程领域中的模块化，就是==遵守固定的规则==，==把一个大文件拆成独立并互相依赖的多个小模块==。

**把代码进行模块化拆分的好处**：

1. 提高了代码的==复用性==
2. 提高了代码的==可维护性==
3. 可以实现==按需加载==

### 1.2 模块化规范

==模块化规范==就是对代码进行模块化的拆分与组合时，需要遵守的那些规则。

例如：

- 使用什么样的语法格式来==引用模块==
- 在模块中使用什么样的语法格式==向外暴露成员==

**模块化规范的好处**：大家都遵守同样的模块化规范写代码，==降低了沟通的成本，极大方便了各个模块之间的相互调用==，利人利己。

## 2 Node.js 中的模块化

### 2.1 Node.js 中模块的分类

Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是：

- ==内置模块==（内置模块是由 Node.js 官方提供的，例如 fs、path、http 等）
- ==自定义模块==（用户创建的每个 .js 文件，都是自定义模块）
- ==第三方模块==（==由第三方开发出来的模块==，并非官方提供的内置模块，也不是用户创建的自定义模块，==使用前需要先下载==）

### 2.2 加载模块

使用强大的 ==require()== 方法，可以加载需要的==内置模块、用户自定义模块、第三方模块==进行使用。例如：

```js
// 1. 加载内置的fs模块
const fs = require('fs')

// 2. 加载用户的自定义模块
const custom = require('./custom.js')

// 3. 加载第三方模块（关于第三方模块的下载和使用，会在后面的课程中进行专门的讲解）
const moment = require('moment')
```

**注意**：

- ==使用 require() 方法加载其它模块时，会执行被加载模块中的代码==。
- 在使用 require 加载用户自定义模块期间，可以省略 .js 的后缀名

### 2.3 Node.js 中的模块作用域

#### 2.3.1 什么是模块作用域

和==函数作用域==类似，在自定义模块中定义的==变量、方法==等成员，==只能在当前模块内被访问==，这种==模块级别的访问限制==，叫做==**模块作用域**==。

![](images/模块作用域.png)

#### 2.3.2 模块作用域的好处

防止了全局变量污染的问题

![](images/模块作用域好处.png)

### 2.4 向外共享模块作用域中的成员

#### 2.4.1 module 对象

在每个 .js 自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息，打印如下：

![](images/module对象.png)

#### 2.4.2 module.exports 对象

在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。

外界用 ==require() 方法==导入自定义模块时，得到的就是 module.exports 所指向的对象。

#### 2.4.3 共享成员时的注意点

使用 require() 方法导入模块时，导入的结果，==永远以 module.exports 指向的对象为准==。

![](images/共享成员时的注意点.png)

#### 2.4.4 exports 对象

由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 ==exports 对象==。==默认情况下，exports 和 module.exports 指向同一个对象==。最终共享的结果，还是以 module.exports 指向的对象为准。

![](images/exports对象.png)

##### exports 和 module.exports 的使用误区

时刻谨记，require() 模块时，得到的永远是 ==module.exports== 指向的对象：

![](images/使用误区.png)

**注意**：为了防止混乱，建议大家==不要在同一个模块中同时使用 exports 和 module.exports==

### 2.5 Node.js 中的模块化规范

Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了==模块的特性==和==各模块之间如何相互依赖==。

**CommonJS 规定**：

1. 每个模块内部，==module 变量==代表当前模块。
2. module 变量是一个对象，它的 exports 属性（即 ==module.exports==）==是对外的接口==。
3. 加载某个模块，其实是加载该模块的 module.exports 属性。==require() 方法用于加载模块==。

## 3. npm与包

### 3.1 包

#### 3.1.1 什么是包

Node.js 中的==第三方模块==又叫做==包==。

就像电脑和计算机指的是相同的东西，第三方模块和包指的是同一个概念，只不过叫法不同。

#### 3.1.2 包的来源

不同于 Node.js 中的内置模块与自定义模块，==包是由第三方个人或团队开发出来的==，免费供所有人使用。

**注意**：Node.js 中的包都是免费且开源的，不需要付费即可免费下载使用。

#### 3.1.3 为什么需要包

由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发的时，效率很低。

==包是基于内置模块封装出来的==，提供了更高级、更方便的 API，==极大的提高了开发效率==。

包和内置模块之间的关系，类似于 jQuery 和 浏览器内置 API 之间的关系。

#### 3.1.4 从哪里下载包

国外有一家 IT 公司，叫做 **npm, Inc.** 这家公司旗下有一个非常著名的网站：[https://www.npmjs.com/](https://www.npmjs.com/) ，它是==全球最大的包共享平台==，你可以从这个网站上搜索到任何你需要的包，只要你有足够的耐心！

到目前位置，全球约 1100 多万的开发人员，通过这个包共享平台，开发并共享了超过 120 多万个包 供我们使用。

**npm, Inc. 公司**提供了一个地址为 [https://registry.npmjs.org/](https://registry.npmjs.org/) 的服务器，来对外共享所有的包，我们可以从这个服务器上下载自己所需要的包。

**注意**：

- 从 [https://www.npmjs.com/](https://www.npmjs.com/) 网站上搜索自己所需要的包
- 从 [https://registry.npmjs.org/](https://registry.npmjs.org/) 服务器上下载自己需要的包

#### 3.1.5 如何下载包

**npm, Inc. 公司**提供了一个包管理工具，我们可以使用这个包管理工具，从 [https://registry.npmjs.org/](https://registry.npmjs.org/) 服务器把需要的包下载到本地使用。

这个包管理工具的名字叫做 **Node Package Manager**（简称 ==npm 包管理工具==），这个包管理工具随着 Node.js 的安装包一起被安装到了用户的电脑上。

大家可以在终端中执行 ==npm -v== 命令，来查看自己电脑上所安装的 npm 包管理工具的版本号：

![](images/npm版本号.png)

### 3.2 npm 初体验

#### 3.2.1 格式化时间的传统做法

```js
// 1. 定义格式化时间的方法
function dateFormat(dtStr) {
    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

module.exports = {
    dateFormat
}

```

![](images/传统做法.png)

1. 第四章 大事件项目

#### 3.2.2 格式化时间的高级做法

1. 第四章 大事件项目

```js
// 1. 导入moment包
const moment = require('moment')
// 2. 参考 moment 官方 API 文档，调用对应的方法，对时间进行格式化
// 2.1 调用 moment() 方法，得到当前的时间
// 2.2 针对当前的时间，调用 format() 方法，按照指定的格式进行时间的格式化
const dt = moment().format('YYYY-MM-DD HH:mm:ss')

console.log(dt) // 输出 2020-01-1217：23：48
```

#### 3.2.3 在项目中安装包的命令

如果想在项目中安装指定名称的包，需要运行如下的命令：

```sh
npm install 包的完整名称
```
上述的装包命令，可以简写成如下格式：

```sh
npm i 完整的包名称
```

#### 3.2.4 初次装包后多了哪些文件

初次装包完成后，在项目文件夹下多一个叫做 ==node_modules== 的文件夹和 ==package-lock.json== 的配置文件。

其中：
- ==node_modules== 文件夹用来==存放所有已安装到项目中的包==。require() 导入第三方包时，就是从这个目录中查找并加载包。
- ==package-lock.json== 配置文件用来==记录 node_modules 目录下的每一个包的下载信息==，例如包的名字、版本号、下载地址等。

**注意**：程序员==不要手动修改 node_modules 或 package-lock.json 文件中的任何代码，npm 包管理工具会自动维护它们==。

#### 3.2.5 安装指定版本的包

默认情况下，使用 npm install 命令安装包的时候，==会自动安装最新版本的包==。如果需要安装指定版本的包，可以在包名之后，通过 ==@ 符号==指定具体的版本，例如：

```sh
npm i moment@2.22.2
```

#### 3.2.6 包的语义化版本规范

包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如 2.24.0

其中每一位数字所代表的的含义如下：

- 第1位数字：==大版本==
- 第2位数字：==功能版本==
- 第3位数字：Bug修复版本

==**版本号提升的规则**==：只要前面的版本号增长了，则后面的版本号==归零==。

### 3.3 包管理配置文件

npm 规定，在==项目根目录==中，==必须==提供一个叫做 ==package.json== 的包管理配置文件。用来记录与项目有关的一些配置信息。例如：

- 项目的名称、版本号、描述等
- 项目中都用到了哪些包
- 哪些包只在==开发期间==会用到
- 那些包在==开发==和==部署==时都需要用到

#### 3.3.1 多人协作的问题

![](images/多人协作的问题.png)

- 整个项目的体积是 30.4M
- 第三方包的体积是 28.8M
- 项目源代码的体积 1.6M

**遇到的问题**：==第三方包的体积过大==，不方便团队成员之间共享项目源代码。

**解决方案**：==共享时剔除 node_modules==

#### 3.3.2 如何记录项目中安装了哪些包

在==项目根目录==中，创建一个叫做 ==package.json== 的配置文件，即可用来记录项目中安装了哪些包。从而方便剔除 node_modules 目录之后，在团队成员之间共享项目的源代码。

**注意**：今后==在项目开发中，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中==。

#### 3.3.3 快速创建 package.json

npm 包管理工具提供了一个==快捷命令==，可以在==执行命令时所处的目录中==，快速创建 package.json 这个包管理配置文件：

```sh
// 作用：在执行命令所处的目录中，快速新键 package.json 文件
npm init -y
```

**注意**：

1. 上述命令==只能在英文的目录下成功运行==！所以，项目文件夹的名称一定要使用英文命名，==不要使用中文，不能出现空格==。
2. 运行 npm install 命令安装包的时候，npm 包管理工具会自动把==包的名称==和==版本号==，记录到 package.json 中。

#### 3.3.4 dependencies 节点

package.json 文件中，有一个 ==dependencies== 节点，专门用来记录您使用 npm install  命令安装了哪些包。

![](images/dependencies节点.png)

#### 3.3.5 一次性安装所有的包

当我们拿到一个==剔除了 node_modules== 的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来。

否则会报类似于下面的错误：

```sh
// 由于项目运行依赖于 moment 这个包，如果没有提前安装好这个包，就会报如下的措误：
Error: Cannot find module 'moment'
```

可以运行 npm install 命令（或 npm i）一次性安装所有的依赖包：

```sh
// 执行 npm install 命令时，npm包管理工具会先读取 package.json 中的 dependencies 节点，
// 读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性下载到项目中
npm install
```

#### 3.3.6 卸载包

可以运行 npm uninstall 命令，来卸载指定的包：

```sh
// 使用 npm uninstall 具体的包名 来御载包
npm uninstall moment
```

注意：npm uninstall 命令执行成功后，会把卸载的包，自动从 package.json 的 dependencies 中移除掉。

#### 3.3.7 devDependencies 节点

如果某些包==只在项目开发阶段==会用到，在==项目上线之后不会用到==，则建议把这些包记录到 devDependencies 节点中。

与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中。

您可以使用如下的命令，将包记录到 devDependencies 节点中：

```sh
// 安装指定的包，并记到 devDependencies 节点中
npm i 包名 -D
// 注意：上述命令是简写式，等价于下面完的写法：
npm install包名 --save-dev
```

### 3.4 解决下包速度慢的问题

#### 3.4.1 为什么下包速度慢

在使用 npm 下包的时候，默认从国外的 [https://registry.npmjs.org/](https://registry.npmjs.org/) 服务器进行下载，此时，网络数据的传输需要经过漫长的海底光缆，因此下包速度会很慢。

#### 3.4.2 淘宝 NPM 镜像服务器

![](images/淘宝镜像.png)

淘宝在国内搭建了一个服务器，专门把国外官方服务器上的包==同步==到国内的服务器，然后在国内提供下包的服务。从而极大的提高了下包的速度。

扩展：

- ==镜像==（Mirroring）是一种文件存储形式，一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像。

#### 3.4.3 切换 npm 的下包镜像源

下包的镜像源，指的就是==下包的服务器地址==。

```sh
# 查看当前的下包镜像源
npm config get registry
# 将下包的镜像源切换为淘宝镜像源
npm config set registry=https://registry.npm.taobao.org/
# 检查镜像源是否下载成功
npm config get registry
```

#### 3.4.4 nrm

为了更方便的切换下包的镜像源，我们可以安装 ==nrm== 这个小工具，利用 nrm 提供的终端命令，可以快速查看和切换下包的镜像源。

```sh
# 通过 npm 包管理器，将 nrm 安装为全局可用的工具
npm i nrm -g
# 查看所有可用的镜像源
nrm 1s
# 将下包的镜像源切换为 taobao 镜像
nrm use taobao
```

### 3.5 包的分类

使用 npm 包管理工具下载的包，共分为两大类，分别是：

- 项目包
- 全局包

#### 3.5.1 项目包

那些被安装到项目的 node_modules 目录中的包，都是项目包。

项目包又分为两类，分别是：

- ==开发依赖包==（被记录到 devDependencies 节点中的包，只在开发期间会用到）
- ==核心依赖包==（被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到）

```sh
npm i 包名 -D   # 开发依赖包 (会被记录到devDependencies节点下)
npm i 包名      # 核心依赖包 (会被记录到dependencies节点下)
```

#### 3.5.2 全局包

在执行 npm install 命令时，如果提供了 ==-g== 参数，则会把包安装为==全局包==。

全局包会被安装到 C:\Users\用户目录\AppData\Roaming\npm\node_modules 目录下。

```sh
npm i 包名 -g           # 全局安装指定的包
npm uninstall 包名 -g   # 卸载全局安装的包
```

**注意**：

1. 只有==工具性质的包==，才有全局安装的必要性。因为它们提供了好用的终端命令。
2. 判断某个包是否需要全局安装后才能使用，可以==参考官方提供的使用说明==即可。

#### 3.5.3 i5ting_toc

i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具，使用步骤如下：

```sh
# 将 i5ting t0c 安装为全局包
npm install -g i5ting_toc
# 调用 i5 ting_toc,轻松实现 md 转 html 的功能
i5 ting_toc-f 要转换的md文件路径 -o
```

### 3.6 规范的包结构

在清楚了包的概念、以及如何下载和使用包之后，接下来，我们深入了解一下==包的内部结构==。

一个规范的包，它的组成结构，必须符合以下 3 点要求：

1. 包必须以==单独的目录==而存在
2. 包的顶级目录下要必须包含 ==package.json== 这个包管理配置文件
③. package.json 中必须包含 ==name，version，main== 这三个属性，分别代表**包的名字**、**版本号**、**包的入口**。

**注意**：以上 3 点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考如下网址：[https://yarnpkg.com/zh-Hans/docs/package-json](https://yarnpkg.com/zh-Hans/docs/package-json)

### 3.7 开发属于自己的包

#### 3.7.1 需要实现的功能

1. ==格式化日期==
2. ==转义== HTML 中的==特殊字符==
3. ==还原== HTML 中的==特殊字符==

#### 3.7.2 初始化包的基本结构

1. 新建 itheima-tools 文件夹，作为==包的根目录==
2. 在 itheima-tools 文件夹中，新建如下三个文件：
    - package.json （包管理配置文件）
    - index.js （包的入口文件）
    - README.md （包的说明文档）

#### 3.7.3 初始化 package.json

```json
{
  "name": "itheima-tools",
  "version": "1.1.0",
  "main": "index.js",
  "description": "提供了格式化时间、HTMLEscape相关的功能",
  "keywords": [
        "itheima",
        "dateFormat",
        "escape"
  ],
  "license": "ISC"
}
```

关于更多 license 许可协议相关的内容，可参考 [https://www.jianshu.com/p/86251523e898](https://www.jianshu.com/p/86251523e898)

#### 3.7.4 在 index.js 中定义格式化时间的方法

```js
// 定义格式化时间的函数
function dateFormat(dateStr) {
    const dt = new Date(dateStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义一个补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}
```

#### 3.7.5 在 index.js 中定义转义 HTML 的方法

```js
// 定义转义 HTML 字符的函数
function htmlEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, match => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}
```

#### 3.7.6 在 index.js 中定义还原 HTML 的方法

```js

// 定义还原 HTML 字符串的函数
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
        switch (match) {
        case '&lt;':
            return '<'
        case '&gt;':
            return '>'
        case '&quot;':
            return '"'
        case '&amp;':
            return '&'
        }
    })
}

module.exports = {
    dateFormat,
    htmlEscape,
    htmlUnEscape
}
```

#### 3.7.7 将不同的功能进行模块化拆分

1. 将格式化时间的功能，拆分到 src -> ==dateFormat.js== 中
2. 将处理 HTML 字符串的功能，拆分到 src -> ==htmlEscape.js== 中
3. 在 index.js 中，导入两个模块，得到需要向外共享的方法
4. 在 index.js 中，使用 module.exports 把对应的方法共享出去

#### 3.7.8 编写包的说明文档

包根目录中的 ==README.md== 文件，是==包的使用说明文档==。通过它，我们可以事先把包的使用说明，以 markdown 的格式写出来，方便用户参考。

README 文件中具体写什么内容，没有强制性的要求；只要能够清晰地把包的作用、用法、注意事项等描述清楚即可。

我们所创建的这个包的 README.md 文档中，会包含以下 6 项内容：

- 安装方式
- 导入方式
- 格式化时间
- 转义 HTML 中的特殊字符
- 还原 HTML 中的特殊字符
- 开源协议

### 3.8 发布包

#### 3.8.1 注册 npm 账号

1. 访问 [https://www.npmjs.com/](https://www.npmjs.com/) 网站，点击 sign up 按钮，进入注册用户界面
2. 填写账号相关的信息：Full Name、Public Email、Username、Password
3. 点击 Create an Account 按钮，注册账号
4. 登录邮箱，点击验证链接，进行账号的验证

#### 3.8.2 登录 npm 账号

npm 账号注册完成后，可以在终端中执行 ==npm login== 命令，依次输入用户名、密码、邮箱后，即可登录成功。

![](images/登录.png)

**注意**：==在运行 npm login 命令之前，必须先把下包的服务器地址切换为 npm 的官方服务器。否则会导致发布包失败！==

#### 3.8.3 把包发布到 npm 上

将终端切换到包的根目录之后，运行 ==npm publish== 命令，即可将包发布到 npm 上（**注意**：==包名不能雷同==）。

![](images/发布.png)

#### 3.8.4 删除已发布的包

运行 ==npm unpublish 包名 --force== 命令，即可从 npm 删除已发布的包。

![](images/删除.png)

**注意**：

1. npm unpublish 命令只能删除 ==72 小时以内==发布的包
2. npm unpublish 删除的包，在 ==24 小时内==不允许重复发布
③. 发布包的时候要慎重，==尽量不要往 npm 上发布没有意义的包==！

## 4. 模块的加载机制

### 4.1 优先从缓存中加载

==模块在第一次加载后会被缓存==。 这也意味着多次调用 require() 不会导致模块的代码被执行多次。

**注意**：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而==提高模块的加载效率==。

### 4.2 内置模块的加载机制

内置模块是由 Node.js 官方提供的模块，==内置模块的加载优先级最高==。

例如，require('fs') 始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs。

### 4.3 自定义模块的加载机制

使用 require() 加载自定义模块时，==必须指定以 ./ 或 ../ 开头的路径标识符==。在加载自定义模块时，==如果没有指定 ./ 或 ../ 这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载==。

同时，在使用 require() 导入自定义模块时，如果省略了文件的扩展名，则 Node.js 会==按顺序==分别尝试加载以下的文件：

1. 按照==确切的文件名==进行加载
2. 补全 ==.js== 扩展名进行加载
3. 补全 ==.json== 扩展名进行加载
4. 补全 ==.node== 扩展名进行加载
5. 加载失败，终端报错

### 4.4 第三方模块的加载机制

如果传递给 require() 的模块标识符不是一个内置模块，也没有以 ‘./’ 或 ‘../’ 开头，则 Node.js 会从当前模块的父目录开始，尝试从 /node_modules 文件夹中加载第三方模块。

==如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录==。

例如，假设在 'C:\Users\itheima\project\foo.js' 文件里调用了 require('tools')，则 Node.js 会按以下顺序查找：

1. C:\Users\itheima\project\node_modules\tools
2. C:\Users\itheima\node_modules\tools
3. C:\Users\node_modules\tools
4. C:\node_modules\tools

### 4.5 目录作为模块

当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：

1. 在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
2. 如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 ==index.js== 文件。
3. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error: Cannot find module 'xxx'

# 第三章 Express
---

## 1. 初识 Express

### 1.1 Express 简介

#### 1.1.1 什么是 Express

**官方给出的概念**：Express 是==基于 Node.js 平台==，快速、开放、极简的 ==Web 开发框架==。

**通俗的理解**：Express 的作用和 Node.js 内置的 http 模块类似，==是专门用来创建 Web 服务器的==。

**Express 的本质**：就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法。

**Express 的中文官网**： [http://www.expressjs.com.cn/](http://www.expressjs.com.cn/)

#### 1.1.2 进一步理解 Express

**思考**：不使用 Express 能否创建 Web 服务器？

**答案**：能，使用 Node.js 提供的原生 http 模块即可。

**思考**：既生瑜何生亮（有了 http 内置模块，为什么还有用 Express）？

**答案**：http 内置模块用起来很复杂，开发效率低；Express 是基于内置的 http 模块进一步封装出来的，能够极大的提高开发效率。

**思考**：http 内置模块与 Express 是什么关系？

**答案**：类似于浏览器中 Web API 和 jQuery 的关系。后者是基于前者进一步封装出来的。

#### 1.1.3 Express 能做什么

对于前端程序员来说，最常见的两种服务器，分别是：

- ==Web 网站服务器==：专门对外提供 Web 网页资源的服务器。
- ==API 接口服务器==：专门对外提供 API 接口的服务器。

使用 Express，我们可以方便、快速的创建 Web 网站的服务器或 API 接口的服务器。

### 1.2 Express 的基本使用

#### 1.2.1 安装

在项目所处的目录中，运行如下的终端命令，即可将 express 安装到项目中使用：

```sh
npm i express@4.17.1
```

#### 1.2.2 创建基本的 Web 服务器

```js
// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

// 3. 调用 app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
```

#### 1.2.3 监听 GET 请求

通过 ==app.get()== 方法，可以监听客户端的 GET 请求，具体的语法格式如下：

```js
// 参数1：客户端请求的URL地址
// 参数2：请求对应的处理函数
// req: 请求对象（包含了与请求相关的属性与方法）
// res: 响应对像（包含了与响应相关的属性与方法）
app.get('请求URL', function(req, res){ /*处理函数*/ })
```

#### 1.2.4 监听 POST 请求

通过 ==app.post()== 方法，可以监听客户端的 POST 请求，具体的语法格式如下：

```js
// 参数1：客户端请求的URL地址
// 参数2：请求对应的处理函数
// req: 请求对像（包含了与请求相关的属性与方法）
// res: 响应对象（包含了与响应相关的属性与方法）
app.post('请求URL', function(req, res){ /*处理函数*/ })
```

#### 1.2.5 把内容响应给客户端

通过 ==res.send()== 方法，可以把处理好的内容，发送给客户端：

```js
app.get('/user', (req, res) => {
    // 向客户端发送 JS0N 对象
    res.send({name: 'zs', age: 20, gender: '男'})
})

app.post('/user', (req, res) => {
    // 向客户端发送文本内容
    res.send('请求成功')
})
```

#### 1.2.6 获取 URL 中携带的查询参数

通过 ==req.query== 对象，可以访问到客户端通过==查询字符串==的形式，发送到服务器的参数：

```js
app.get('/', (req, res) => {
    // req.query 默认是一个空对象
    // 客户端使用 ？name=Zs&age=20 这种查询字符串形式，发送到服务器的参数，
    // 可以通过 req.query 对象问到，例如：
    // req.query.name  req.query.age
    console.log(req.query)
})
```

#### 1.2.7 获取 URL 中的动态参数

通过 ==req.params== 对象，可以访问到 URL 中，通过 ==:== 匹配到的==动态参数==：

```js
// URL 地址中，可以通过 :参数名 的形式，匹配动态参数值
app.get('/user/:id', (req, res) => {
    // req.params 默认是一个空对象，里面存放着通过 : 动态匹配到的参数值
    console.log(req.params)
})
```

### 1.3 托管静态资源

#### 1.3.1 express.static()

express 提供了一个非常好用的函数，叫做 ==express.static()==，通过它，我们可以非常方便地==创建一个静态资源服务器==，

例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：

```js
app.use(express.static('public'))
```

现在，你就可以访问 public 目录中的所有文件了：

- http://localhost:3000/css/style.css
- http://localhost:3000/js/login.js
- http://localhost:3000/images/bg.jpg

**注意**：Express 在==指定的==静态目录中查找文件，并对外提供资源的访问路径。因此，==存放静态文件的目录名不会出现在 URL 中==。

#### 1.3.2 托管多个静态资源目录

如果要托管多个静态资源目录，请多次调用 express.static() 函数：

```js
app.use(express.static('public'))
app.use(express.static('files'))
```

访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件。

#### 1.3.3 挂载路径前缀

如果希望在托管的==静态资源访问路径==之前，==挂载路径前缀==，则可以使用如下的方式：

```js
app.use('/public', express.static('public'))
```

现在，你就可以通过带有 /public 前缀地址来访问 public 目录中的文件了：

- http://localhost:3000/public/images/kitten.jpg
- http://localhost:3000/public/css/style.css
- http://localhost:3000/public/js/app.js

### 1.4 nodemon

#### 1.4.1 为什么要使用 nodemon

在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐。

现在，我们可以使用 nodemon（[https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)） 这个工具，它能够==监听项目文件的变动==，当代码被修改后，nodemon 会==自动帮我们重启项目==，极大方便了开发和调试。

#### 1.4.2 安装 nodemon

在终端中，运行如下命令，即可将 nodemon 安装为全局可用的工具：

```sh
npm install -g nodemon
```

#### 1.4.3 使用 nodemon

当基于 Node.js 编写了一个网站应用的时候，传统的方式，是运行 ==node app.js== 命令，来启动项目。这样做的坏处是：代码被修改之后，需要手动重启项目。

现在，我们可以将 node 命令替换为 nodemon 命令，使用 ==nodemon app.js== 来启动项目。这样做的好处是：代码被修改之后，会被 nodemon 监听到，从而实现自动重启项目的效果。

```sh
node app.js
# 将上面的终端命令，替换为下面的终端命冷，即可实现自动重启项目的效果
nodemon app.js
```

## 2. Express 路由

### 2.1 路由的概念

#### 2.1.1 什么是路由

广义上来讲，路由就是==映射关系==。

#### 2.1.2 Express 中的路由

在 Express 中，路由指的是==客户端的请求与服务器处理函数之间的映射关系==。

Express 中的路由分 3 部分组成，分别是==请求的类型、请求的 URL 地址、处理函数==，格式如下：

```js
app.METHOD(PATH, HANDLER)
```

#### 2.1.3 Express 中的路由的例子

```js
// 匹配 GET 请求，且请求 URL 为 /
app.get('/', function(req, res) {
    res.send('Hello World!')
})

// 匹配 P0ST 请求，且请求 URL 为 /
app.post('/', function(req, res) {
    res.send('Got a POST request')
})
```

#### 2.1.4 路由的匹配过程

每当一个请求到达服务器之后，==需要先经过路由的匹配==，只有匹配成功之后，才会调用对应的处理函数。

在匹配时，会按照路由的顺序进行匹配，如果==请求类型和请求的 URL **同时匹配成功**==，则 Express 会将这次请求，转交给对应的 function 函数进行处理。

![](images/路由匹配的过程.png)

**路由匹配的注意点**：

1. 按照定义的==先后顺序==进行匹配
2. ==请求类型==和==请求的URL==同时匹配成功，才会调用对应的处理函数

### 2.2 路由的使用

#### 2.2.1 最简单的用法

在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上，示例代码如下：

```js
const express = require('express')
// 创健 Web 服务器，命名为 app
const app = express()

// 挂载路由
app.get('/', (req, res) => {res.send('Hello World.')})
app.post('/', (req, res) => {res.send('Post Request.')})

// 启动 Web 服务器
app.listen(80, () => {console.log('server running at http://127.0.0.1')})
```

#### 2.2.2 模块化路由

为了方便对路由进行模块化的管理，Express ==不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块==。

**将路由抽离为单独模块的步骤如下**：

1. 创建路由模块对应的 .js 文件
2. 调用 ==express.Router()== 函数创建路由对象
3. 向路由对象上挂载具体的路由
4. 使用 ==module.exports== 向外共享路由对象
⑤. 使用 ==app.use()== 函数注册路由模块

#### 2.2.3 创建路由模块

```js
var express = require('express') // 1. 导入 express
var router = express.Router() // 2. 创建路由对像

router.get('/user/list', function(req, res) { // 3. 挂载获取用户列表的路由
    res.send('Get user list.')
})
router.post('/user/add', function(req, res) { // 4. 挂载添加用户的路油
    res.send('Add new user.')
})

module.exports = router // 5. 向外导出路由对像
```

#### 2.2.4 注册路由模块

```js
// 1. 导入路由模块
const userRouter = require('./router/user.js')

// 2. 使用 app.use() 注路由模块
app.use(userRouter)
```

#### 2.2.5 为路由模块添加前缀

类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单：

```js
// 1. 导入路由模块
const userRouter = require('./router/user.js')

// 2. 使用 app.use() 注册路由模块，并添加统的访问前缀 /api
app.use('/api', userRouter)
```

## 3. Express 中间件

### 3.1 中间件的概念

#### 3.1.1 什么是中间件

中间件（Middleware ），特指业务流程的==中间处理环节==。

#### 3.1.2 Express 中间件的调用流程

当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行==预处理==。

![](images/调用流程.png)

#### 3.1.3 Express 中间件的格式

Express 的中间件，==本质上就是一个 function 处理函数==，Express 中间件的格式如下：

![](images/格式.png)

**注意**：中间件函数的形参列表中，==必须包含 next 参数==。而路由处理函数中只包含 req 和 res。

#### 3.1.4 next 函数的作用

==**next 函数**==是实现==多个中间件连续调用==的关键，它表示把流转关系**转交**给下一个**中间件**或**路由**。

![](images/next函数.png)

### 3.2 Express 中间件的初体验

#### 3.2.1 定义中间件函数

可以通过如下的方式，定义一个最简单的中间件函数：

```js
// 常量 mw 所指向的，就是一个中间件函数
const mw = function(req, res, next) {
    console.log('这是一个最简单的中间件函数')
    // 注意：在当前中间件的业务处理完毕后，必须调用 next() 函数
    // 表示把流转关系转交给下一个中间件或路由
    next()
}
```

#### 3.2.2 全局生效的中间件

客户端发起的**任何请求**，到达服务器之后，**都会触发的中间件**，叫做==全局生效的中间件==。

通过调用 ==app.use==(中间件函数)，即可定义一个**全局生效**的中间件，示例代码如下：

```js
// 常量 mw 所指向的，就是一个中间件函数
const mw = function (req, res, next) {
    console.log('这是一个最简单的中间件函数')
    next()
}

// 全局生效的中间件
app.use(mw)
```

#### 3.2.3 定义全局中间件的简化形式

```js
// 全局生效的中间件
app.use(function(req, res, next) {
    console.log('这是一个最简单的中间件函数')
    next()
})
```

#### 3.2.4 中间件的作用

==多个中间件之间，共享同一份 req 和 res==。基于这样的特性，我们可以在**上游**的中间件中，**统一**为 **req** 或 **res** 对象**添加自定义的属性或方法**，供**下游**的中间件或路由进行使用。

![](images/中间件的作用.png)

```js
const express = require('express')
const app = express()

// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
    // 获取到请求到达服务器的时间
    const time = Date.now()
    // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    res.send('Home page.' + req.startTime)
})
app.get('/user', (req, res) => {
    res.send('User page.' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})

```

#### 3.2.5 定义多个全局中间件

可以==使用 app.use() 连续定义多个全局中间件==。客户端请求到达服务器之后，==会按照中间件定义的先后顺序依次进行调用==，示例代码如下：

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了第一个局部生效的中间件')
    next()
}

const mw2 = (req, res, next) => {
    console.log('调用了第二个局部生效的中间件')
    next()
}

// 2. 创建路由
app.get('/', [mw1, mw2], (req, res) => {
    res.send('Home page.')
})
app.get('/user', (req, res) => {
    res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})
```

#### 3.2.6 局部生效的中间件

==不使用 app.use() 定义的中间件==，叫做==局部生效的中间件==，示例代码如下：

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件')
    next()
}

// 2. 创建路由
app.get('/', mw1, (req, res) => {
    res.send('Home page.')
})
app.get('/user', (req, res) => {
    res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})
```

#### 3.2.7 定义多个局部中间件

可以在路由中，通过如下两种==等价==的方式，==使用多个局部中间件==：

```js
app.get('/', [mw1, mw2], (req, res) => {
    res.send('Home page.')
})

app.get('/', mw1, mw2, (req, res) => {
    res.send('Home page.')
})
```

#### 3.2.8 了解中间件的5个使用注意事项

1. 一定要在==路由之前==注册中间件
2. 客户端发送过来的请求，==可以连续调用多个==中间件进行处理
3. 执行完中间件的业务代码之后，==不要忘记调用 next() 函数==
4. 为了==防止代码逻辑混乱==，调用 next() 函数后不要再写额外的代码
5. 连续调用多个中间件时，多个中间件之间，==共享== req 和 res 对象

### 3.3 中间件的分类

为了方便大家理解和记忆中间件的使用，Express 官方把常见的中间件用法，分成了 5 大类，分别是：

1. ==应用级别==的中间件
2. ==路由级别==的中间件
3. ==错误级别==的中间件
4. ==Express 内置==的中间件
5. ==第三方==的中间件

#### 3.3.1 应用级别的中间件

通过 ==app.use()== 或 ==app.get()== 或 ==app.post()== ，==绑定到 app 实例上的中间件==，叫做**应用级别的中间件**。

#### 3.3.2 路由级别的中间件

绑定到 ==express.Router()== 实例上的中间件，叫做**路由级别的中间件**。它的用法和应用级别中间件没有任何区别。只不过，==应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上==。

#### 3.3.3 错误级别的中间件

错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。

格式：错误级别中间件的 function 处理函数中，==必须有 4 个形参==，形参顺序从前到后，分别是 (==err, req, res, next==)。

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义路由
app.get('/', (req, res) => {
    // 1.1 人为的制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('Home page.')
})

// 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => {
    console.log('发生了错误！' + err.message)
    res.send('Error：' + err.message)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})
```

**注意**：==错误级别的中间件，必须注册在所有路由之后！==

#### 3.3.4 Express内置的中间件

自 Express 4.16.0 版本开始，Express 内置了 3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验：

1. ==express.static== 快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（**无兼容性**）
2. ==express.json== 解析 JSON 格式的请求体数据（**有兼容性**，仅在 4.16.0+ 版本中可用）
3. ==express.urlencoded== 解析 URL-encoded 格式的请求体数据（**有兼容性**，仅在 4.16.0+ 版本中可用）

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json())
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body)
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
    console.log(req.body)
    res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})
```

#### 3.3.5 第三方的中间件

非 Express 官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以**按需下载**并**配置**第三方中间件，从而提高项目的开发效率。

例如：在 express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求体数据。使用步骤如下：

1. 运行 ==npm install body-parser== 安装中间件
2. 使用 ==require== 导入中间件
3. 调用 ==app.use()== 注册并使用中间件

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
// 2. 使用 app.use() 注册中间件
app.use(parser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body)
    res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})
```

**注意**：Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。

### 3.4 自定义中间件

#### 3.4.1 需求描述与实现步骤

自己手动模拟一个类似于 express.urlencoded 这样的中间件，来解析 POST 提交到服务器的表单数据。

**实现步骤**：

1. 定义中间件
2. 监听 req 的 data 事件
3. 监听 req 的 end 事件
4. 使用 querystring 模块解析请求体数据
5. 将解析出来的数据对象挂载为 req.body
6. 将自定义中间件封装为模块

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

// 这是解析表单数据的中间件
app.use((req, res, next) => {
    // 定义中间件具体的业务逻辑
    // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
    let str = ''
    // 2. 监听 req 的 data 事件
    req.on('data', (chunk) => {
        str += chunk
    })
    // 3. 监听 req 的 end 事件
    req.on('end', () => {
        // 在 str 中存放的是完整的请求体数据
        // console.log(str)
        // TODO: 把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })
})

app.post('/user', (req, res) => {
    res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})
```

## 4. 使用 Express 写接口

```js
// 导入 express
const express = require('express')
// 创建服务器实例
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // TODO: 定义 JSONP 接口具体的实现过程
    // 1. 得到函数的名称
    const funcName = req.query.callback
    // 2. 定义要发送到客户端的数据对象
    const data = { name: 'zs', age: 22 }
    // 3. 拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4. 把拼接的字符串，响应给客户端
    res.send(scriptStr)
})

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./16.apiRouter')
// 把路由模块，注册到 app 上
app.use('/api', router)

// 启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
```

### API 路由模块

**apiRouter.js**

```js
const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
// 定义 GET 接口
router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用 res.send() 方法，向客户端响应处理的结果
    res.send({
        status: 0, // 0 表示处理成功，1 表示处理失败
        msg: 'GET 请求成功！', // 状态的描述
        data: query, // 需要响应给客户端的数据
    })
})

// 定义 POST 接口
router.post('/post', (req, res) => {
    // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
    const body = req.body
    // 调用 res.send() 方法，向客户端响应结果
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body,
    })
})

// 定义 DELETE 接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功',
    })
})

module.exports = router
```

### CORS 跨域资源共享

#### 1. 接口的跨域问题

刚才编写的 GET 和 POST接口，存在一个很严重的问题：==不支持跨域请求==。

解决接口跨域问题的方案主要有两种：

1. ==CORS==（主流的解决方案，**推荐使用**）
2. ==JSONP==（有缺陷的解决方案：==只支持 GET 请求==）

#### 2. 使用 cors 中间件解决跨域问题

cors 是 Express 的一个第三方中间件。通过安装和配置 cors 中间件，可以很方便地解决跨域问题。

使用步骤分为如下 3 步：

1. 运行 **npm install cors** ==安装中间件==
2. 使用 **const cors = require('cors')** ==导入中间件==
3. 在路由之前调用 **app.use(cors())** ==配置中间件==

#### 3. 什么是 CORS

CORS （Cross-Origin Resource Sharing，跨域资源共享）由一系列 HTTP 响应头组成，==这些 HTTP 响应头决定浏览器是否阻止前端 JS 代码跨域获取资源==。

浏览器的同源安全策略默认会阻止网页“跨域”获取资源。但如果接口服务器==配置了 CORS 相关的 HTTP 响应头==，就可以==解除浏览器端的跨域访问限制==。

![](images/CORS.png)

#### 4. CORS 的注意事项

1. CORS 主要在==服务器端==进行配置。客户端浏览器==**无须做任何额外的配置**==，即可请求开启了 CORS 的接口。
2. CORS 在浏览器中==有兼容性==。只有支持 XMLHttpRequest Level2 的浏览器，才能正常访问开启了 CORS 的服务端接口（例如：IE10+、Chrome4+、FireFox3.5+）。

#### 5. CORS 响应头部 - Access-Control-Allow-Origin 

响应头部中可以携带一个 ==Access-Control-Allow-Origin== 字段，其语法如下:

```js
Access-Control-Allow-Origin: <origin> | *
```

其中，==origin 参数的值指定了允许访问该资源的外域 URL==。

例如，下面的字段值将==只允许==来自 http://itcast.cn 的请求：

```js
res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn')
```

如果指定了 Access-Control-Allow-Origin 字段的值为==通配符 *==，表示==允许来自任何域的请求==，示例代码如下：

```js
res.setHeader('Access-Control-Allow-Origin', '*')
```

#### 6. CORS 响应头部 - Access-Control-Allow-Headers

默认情况下，==CORS 仅支持客户端向服务器发送如下的 9 个请求头==：

- Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type （值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一）

==如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过 Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败！==

```js
// 允许客户端颜外向服务器发送 Content-Type 请求头和 X-Custom-Header 请求头
// 注意：多个请求头之问使用英文的返号进行分剖
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header'
```

#### 7. CORS 响应头部 - Access-Control-Allow-Methods

默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。

==如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Alow-Methods 来指明实际请求所允许使用的 HTTP 方法==。

示例代码如下：

```js
// 只允许 POST、GET、DELETE、HEAD 请求方法
res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
// 允浒所有的 HTTP 清求方法
res.setHeader('Access-Control-Allow-Methods', '*')
```

#### 8. CORS请求的分类

客户端在请求 CORS 接口时，根据**请求方式**和**请求头**的不同，可以将 CORS 的请求分为两大类，分别是：

1. 简单请求
2. 预检请求

#### 9. 简单请求

同时满足以下两大条件的请求，就属于简单请求：

1. ==请求方式==：GET、POST、HEAD 三者之一
②. ==HTTP 头部信息==不超过以下几种字段：**无自定义头部字段**、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type（只有三个值application/x-www-formurlencoded、multipart/form-data、text/plain）

#### 10. 预检请求

只要符合以下任何一个条件的请求，都需要进行预检请求：

1. 请求方式为 **GET、POST、HEAD 之外的请求 Method 类型**
2. 请求头中**包含自定义头部字段**
3. 向服务器发送了 **application/json 格式的数据**

在浏览器与服务器正式通信之前，浏览器会==先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求==，所以这一次的 OPTION 请求称为“预检请求”。==服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据==。

#### 11. 简单请求和预检请求的区别

**简单请求的特点**：客户端与服务器之间==只会发生一次请求==。

**预检请求的特点**：客户端与服务器之间会发生两次请求，==OPTION 预检请求成功之后，才会发起真正的请求==。

### JSONP 接口

#### 1. 回顾 JSONP 的概念与特点

**概念**：浏览器端通过 \<script> 标签的 src 属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做 JSONP。

**特点**：

1. JSONP 不属于真正的 Ajax 请求，因为它没有使用 XMLHttpRequest 这个对象。
2. JSONP 仅支持 GET 请求，不支持 POST、PUT、DELETE 等请求。

#### 2. 创建 JSONP 接口的注意事项

==如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突，必须在配置 CORS 中间件之前声明 JSONP 的接口==。否则 JSONP 接口会被处理成开启了 CORS 的接口。示例代码如下：

```js
// 优洗创腱 JSONP 接口【这个接口不会被处理成COR5接口】
app.get('/api/jsonp', (req, res) => { })

// 再配置 CORS 中间件【后续的所有接口，都会被处理成COR5接口】
app.use(cors())

// 这是一个开启了 CORS 的接口
app.get('/api/get', (req, res) => { })
```

#### 3. 实现 JSONP 接口的步骤

1. 第四章 大事件项目

#### 4. 实现 JSONP 接口的具体代码

```js
app.get('/api/jsonp', (req, res) => {
    // 1. 获取客户端发送过来的回调函数的名字
    const funcName = req.query.callback
    // 2. 得到腰通过 JSONP 形式发送给客户端的数据
    const data = {name: 'zs', age: 22}
    // 3. 根据前两步得到的数据，拼接出一个函数调用的字符串
    const scriptstr = '${funcName}(S{JSON.stringify(data)})'
    // 4. 把上步接得到的字符串，响应给客户端的 <script> 标签进行解析执行
    res.send(scriptstr)
})
```

#### 5. 在网页中使用 jQuery 发起 JSONP 请求

==调用 $.ajax() 函数，提供 JSONP 的配置选项==，从而发起 JSONP 请求，示例代码如下：

```js
$('#btnJSONP').on('click', function() {
    $.ajax({
        method: 'GET'.
        url: 'http://127.0.0.1/api/jsonp',
        dataType: 'jsonp', // 表示要发起 JSONP 的请求
        success: function (res) {
            console.log(res)
        }
    })
})
```

# 第四章 数据库与身份认证
---

## 1. 数据库的基本概念

### 1.1 什么是数据库

数据库（database）是用来==组织、存储和管理==数据的仓库。

当今世界是一个充满着数据的互联网世界，充斥着大量的数据。数据的来源有很多，比如出行记录、消费记录、浏览的网页、发送的消息等等。除了文本类型的数据，图像、音乐、声音都是数据。

为了方便管理互联网世界中的数据，就有了==数据库管理系统==的概念（简称：数据库）。用户可以对数据库中的数据进行==新增、查询、更新、删除==等操作。

### 1.2 常见的数据库及分类

市面上的数据库有很多种，最常见的数据库有如下几个：

- ==MySQL 数据库==（目前使用最广泛、流行度最高的开源免费数据库；Community + Enterprise）
- Oracle 数据库（收费）
- SQL Server 数据库（收费）
- Mongodb 数据库（Community + Enterprise）

其中，MySQL、Oracle、SQL Server 属于==传统型数据库==（又叫做：**关系型数据库** 或 **SQL 数据库**），这三者的设计理念相同，用法比较类似。

而 Mongodb 属于==新型数据库==（又叫做：**非关系型数据库** 或 **NoSQL 数据库**），它在一定程度上弥补了传统型数据库的缺陷。

### 1.3 传统型数据库的数据组织结构

数据的组织结构：指的就是数据以什么样的结构进行存储。

传统型数据库的数据组织结构，与 Excel 中数据的组织结构比较类似。

因此，我们可以对比着 Excel 来了解和学习传统型数据库的数据组织结构。

#### 1.3.1 Excel 的数据组织结构

每个 Excel 中，数据的组织结构分别为==工作簿、工作表、数据行、列==这 4 大部分组成。

1. 整个 Excel 叫做**工作簿**
2. users 和 books 是**工作表**
3. users 工作表中有 3 行数据
4. 每行数据由 6 列信息组成
5. 每列信息都有对应的**数据类型**

#### 1.3.2 传统型数据库的数据组织结构

在传统型数据库中，数据的组织结构分为==数据库(database)、数据表(table)、数据行(row)、字段(field)==这 4 大部分组成。

1. ==数据库==类似于 Excel 的==工作簿==
2. ==数据表==类似于 Excel 的==工作表==
3. ==数据行==类似于 Excel 的==每一行数据==
4. ==字段==类似于 Excel 的==列==
5. 每个字段都有对应的数据类型

#### 1.3.3 实际开发中库、表、行、字段的关系

1. 在实际项目开发中，一般情况下，每个项目都对应==独立的数据库==。
2. 不同的数据，要存储到数据库的不同表中，例如：用户数据存储到 users 表中，图书数据存储到 books 表中。
3. 每个表中具体存储哪些信息，由字段来决定，例如：我们可以为 users 表设计 id、username、password 这 3 个字段。
4. 表中的行，代表每一条具体的数据。

## 2. 安装并配置 MySQL

### 2.1 了解需要安装哪些MySQL相关的软件

对于开发人员来说，只需要安装 ==MySQL Server== 和 ==MySQL Workbench== 这两个软件，就能满足开发的需要了。

- MySQL Server：==专门用来提供数据存储和服务的软件==。
- MySQL Workbench：==可视化的 MySQL 管理工具==，通过它，可以方便的操作存储在 MySQL Server 中的数据。

### 2.2 MySQL 在 Mac 环境下的安装

在 Mac 环境下安装 MySQL 的过程比 Windows 环境下的步骤简单很多：

1. 先运行 ==mysql-8.0.19-macos10.15-x86_64.dmg== 这个安装包，将 MySQL Server 安装到 Mac 系统
②. 再运行 ==mysql-workbench-community-8.0.19-macos-x86_64.dmg== 这个安装包，将可视化的 MySQL Workbench 工具安装到 Mac 系统

具体的安装教程，可以参考 **素材 -> MySQL for Mac ->安装教程 - Mac系统安装MySql -> README.md**

### 2.3 MySQL 在 Windows 环境下的安装

在 Windows 环境下安装 MySQL，只需要运行 ==mysql-installer-community-8.0.19.0.msi== 这个安装包，就能一次性将 MySQL Server 和 MySQL Workbench 安装到自己的电脑上。

具体的安装教程，可以参考 **素材 -> MySQL for Windows ->安装教程 - Windows系统安装MySql -> README.md **

## 3. MySQL 的基本使用

### 3.1 使用 MySQL Workbench 管理数据库

#### 3.1.1 连接数据库

![](images/连接数据库.png)

#### 3.1.2 了解主界面的组成部分

![](images/主界面.png)

#### 3.1.3 创建数据库

![](images/创建数据库.png)

#### 3.1.4 创建数据表

![](images/创建数据表.png)

**DataType 数据类型**：

1. ==int== 整数
2. ==varchar(len)== 字符串
3. ==tinyint(1)== 布尔值

**字段的特殊标识**：

1. ==PK==（Primary Key）**主键、唯一标识**
2. ==NN==（Not Null）**值不允许为空**
3. ==UQ==（Unique）**值唯一**
4. ==AI==（Auto Increment）**值自动增长**

#### 5. 向表中写入数据

![](images/向表中写入数据.png)

### 3.2 使用 SQL 管理数据库

#### 3.2.1 什么是 SQL

SQL（英文全称：Structured Query Language）是==结构化查询语言==，专门用来==访问和处理数据库==的编程语言。能够让我们==以编程的形式，操作数据库里面的数据==。

**三个关键点**：

1. SQL 是一门==数据库编程语言==
2. 使用 SQL 语言编写出来的代码，叫做 ==SQL 语句==
3. SQL 语言==只能在关系型数据库中使用==（例如 **MySQL、Oracle、SQL Server**）。**非关系型数据库**（例如 **Mongodb**）**不支持 SQL 语言**

#### 3.2.2 SQL 能做什么

1. 从数据库中==查询数据==
2. 向数据库中==插入新的数据==
3. ==更新==数据库中的==数据==
4. 从数据库==删除数据==
5. 可以创建新数据库
6. 可在数据库中创建新表
7. 可在数据库中创建存储过程、视图
8. etc…

#### 3.2.3 SQL 的学习目标

重点掌握如何使用 SQL 从数据表中：

- ==查询数据==（select） 
- ==插入数据==（insert into） 
- ==更新数据==（update） 
- ==删除数据==（delete）

额外需要掌握的 4 种 SQL 语法：

- **where 条件、and 和 or 运算符、order by 排序、count(*) 函数**

### 3.3 SQL 的 SELECT 语句

#### 3.3.1 语法

==SELECT 语句==用于==从表中查询数据==。执行的结果被存储在一个==结果表==中（称为**结果集**）。语法格式如下：

```sql
-- 这是注释
-- 从 FROM 指定的【表中】，查询出【所有的】数据。* 表示【所有列】
SELECT * FROM 表名称

-- 从 FROM 指定的【表中】，查询出指定列名称（字段）的数据。
SELECT 列名称 FROM 表名称
```

**注意**：==SQL 语句中的**关键字对大小写不敏感**。SELECT 等效于 select，FROM 等效于 from==。

#### 3.3.2 SELECT * 示例

我们希望从 users 表中选取所有的列，可以使用==符号 *== 取代列的名称，示例如下：

![](images/SELECT示例.png)

#### 3.3.3 SELECT 列名称 示例

如需获取名为 "username" 和 "password" 的列的内容（从名为 "users" 的数据库表），请使用下面的 SELECT 语句：

![](images/SELECT列名称示例.png)

### 3.4 SQL 的 INSERT INTO 语句

#### 3.4.1 语法

==INSERT INTO== 语句用于向数据表中==插入新的数据行==，语法格式如下：

```sql
-- 语法解读：向指定的表中，插入如下几列数据，列的值通过 values 一一指定
-- 注意：列和值要一对应，多个列和多个值之间，使用英文的逗号分隔
INSERT INTO table_name (列1，列2，··.) VALUES (值1，值2，....)
```
#### 3.4.2 INSERT INTO 示例

向 users 表中，插入一条 username 为 tony stark，password 为 098123 的用户数据，示例如下：

![](images/INSERTINTO示例.png)

### 3.5 SQL 的 UPDATE 语句

#### 3.5.1 语法

==Update== 语句用于==修改表中的数据==。语法格式如下：

```sql
-- 语法解读：
-- 1. 用 UPDATE 指定要更新哪个表中的数据
-- 2. 用 SET 指定列对应的新值
-- 3. 用 WHERE 指定更新的条件
UPDATE 表名称 SET 列名称=新值 WHERE 列名称=某值
```

#### 3.5.2 UPDATE 示例 - 更新某一行中的一个列

把 users 表中 id 为 7 的用户密码，更新为 888888。示例如下：

![](images/更新某一行中的一个列.png)

#### 3.5.3 UPDATE 示例 - 更新某一行中的若干列

把 users 表中 id 为 2 的用户密码和用户状态，分别更新为 admin123 和 1。示例如下：

![](images/更新某一行中的若干列.png)

### 3.6 SQL 的 DELETE 语句

#### 3.6.1 语法

==DELETE== 语句用于==删除表中的行==。语法格式如下：

```sql
-- 语法解读：
-- 从指定的表中，根据 WHERE 条件，删除对应的数据行
DELETE FROM 表名称 WHERE 列名称=值
```

#### 3.6.2 DELETE 示例

从 users 表中，删除 id 为 4 的用户，示例如下：

![](images/DELETE示例.png)

### 3.7 SQL 的 WHERE 子句

#### 3.7.1 语法

==WHERE 子句==用于==限定选择的标准==。在 **SELECT、UPDATE、DELETE** 语句中，==皆可使用== WHERE 子句来限定选择的标准。

```sql
-- 查询语句中的 WHERE 条件
SELECT 列名称 FROM 表名称 WHERE 列 运算符 值

-- 更新语句中的 WHERE 条件
UPDATE 表名称 SET 列=新值 WHERE 列 运算符 值

-- 删除语句中的 WHERE 条件
DELETE FROM 表名称 WHERE 列 运算符 值
```

#### 3.7.2 可在 WHERE 子句中使用的运算符

下面的运算符可在 WHERE 子句中使用，用来限定选择的标准：

| 探作符  |     描述     |
| :-----: | :----------: |
|    =    |     等于     |
|   <>    |    不等于    |
|   >.    |     大于     |
|    <    |     小于     |
|   \>=   |   大于等于   |
|   <=    |   小于等于   |
| BETWEEN | 在某个范围内 |
|  LIKE   | 搜索某种横式 |

注意：==**在某些版本的 SQL 中，操作符 <> 可以写为 !=**==

#### 3.7.3 WHERE 子句示例

可以通过 WHERE 子句来限定 SELECT 的查询条件：

```sql
-- 查询 status 为 1 的所有用户
SELECT FROM users WHERE status=1

-- 查间 d 大于 2 的所有用户
SELECT FROM users WHERE id>2

-- 查询 username 不等于 admin 的所有用户
SELECT FROM users WHERE username<>'admin'
```

### 3.8 SQL 的 AND 和 OR 运算符

#### 3.8.1 语法

==AND 和 OR 可在 WHERE 子语句中把两个或多个条件结合起来==。

==AND== 表示==必须同时满足多个条件==，相当于 JavaScript 中的 && 运算符，例如 **if (a !== 10 && a !== 20)**

==OR== 表示==只要满足任意一个条件即可==，相当于 JavaScript 中的 || 运算符，例如 **if(a !== 10 || a !== 20)**

#### 3.8.2 AND 运算符示例

使用 AND 来显示所有 status 为 0，并且 id 小于 3 的用户：

![](images/AND运算符示例.png)

#### 3.8.2 OR 运算符示例

使用 OR 来显示所有 status 为 1，或者 username 为 zs 的用户：

![](images/OR运算符示例.png)

### 3.9 SQL 的 ORDER BY 子句

#### 3.9.1 语法

==ORDER BY== 语句用于==根据指定的列对结果集进行排序==。

==ORDER BY== 语句==默认按照升序对记录进行排序==。

如果您希望按照==降序==对记录进行排序，可以使用 ==DESC== 关键字。

#### 3.9.2 ORDER BY 子句 - 升序排序

对 users 表中的数据，按照 status 字段进行升序排序，示例如下：

![](images/升序排序.png)

#### 3.9.3 ORDER BY 子句 – 降序排序

对 users 表中的数据，按照 id 字段进行降序排序，示例如下：

![](images/降序排序.png)

#### 3.9.4 ORDER BY 子句 – 多重排序

对 users 表中的数据，先按照 status 字段进行降序排序，再按照 username 的字母顺序，进行升序排序，示例如下：

![](images/多重排序.png)

### 3.10 SQL 的 COUNT(*) 函数

#### 3.10.1 语法

==COUNT(*)== 函数用于==返回查询结果的总数据条数==，语法格式如下：

```sql
SELECT COUNT(*) FROM 表名称
```

#### 3.10.2 COUNT(*) 示例

查询 users 表中 status 为 0 的总数据条数：

![](images/COUNT示例.png)

#### 3.10.3 使用 AS 为列设置别名

如果希望**给查询出来的列名称设置别名**，可以使用 ==AS 关键字==，示例如下：

![](images/使用AS为列设置别名.png)

## 4. 在项目中操作 MySQL

### 4.1 在项目中操作数据库的步骤

1. 安装操作 MySQL 数据库的第三方模块（==mysql==）
2. 通过 mysql 模块==连接到 MySQL 数据库==
3. 通过 mysql 模块==执行 SQL 语句==

![](images/在项目中操作数据库的步骤.png)

### 4.2 安装与配置 mysql 模块

#### 4.2.1 安装 mysql 模块

mysql 模块是托管于 npm 上的**第三方模块**。它提供了**在 Node.js 项目中连接和操作 MySQL 数据库的能力**。

想要在项目中使用它，需要先运行如下命令，将 mysql 安装为项目的依赖包：

```sh
npm install mysql
```

#### 4.2.2 配置 mysql 模块

在使用 mysql 模块操作 MySQL 数据库之前，==必须先对 mysql 模块进行必要的配置==，主要的配置步骤如下：

```js
// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 建立与 MySQL 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',     // 数据库的 IP 地址
    user: 'root',          // 登录数据库的账号
    password: 'admin123',  // 登录数据库的密码
    database: 'my_db_01'   // 指定要操作哪个数据库
})
```

#### 4.2.3 测试 mysql 模块能否正常工作

调用 ==db.query()== 函数，指定要执行的 SQL 语句，通过回调函数拿到执行的结果：

```js
// 检测 mysql 模块能否正常工作
db.query('SELECT 1', (err, results) => {
    if (err) return console.log(err.message)
    // 只要打印出 [ RowDataPacket { '1': 1 } ] 的结果，就证明数据库连接正常
    console.log(results)
})
```

### 4.3 使用 mysql 模块操作 MySQL 数据库

#### 4.3.1 查询数据

查询 users 表中所有的数据：

```js
// 查询 users 表中所有的用户数据
db.query('SELECT * FROM users', (err, results) => {
    // 查询失败
    if (err) return console.log(err.message)
    // 查询成功
    console.log(results)
})
```

#### 4.3.2 插入数据

向 users 表中新增数据， 其中 username 为 Spider-Man，password 为 pcc321。示例代码如下：

```js
// 1. 要插入到 users 表中的数据对像
const user = {username: 'Spider-Man', password: 'pcc321'}
// 2. 待执行的 SQL 语句，其中英文的 ？ 表示占位符
const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)'
// 3. 使用数组的形式，依次为 ？ 占位符指定具体的值
db.query(sqlstr, [user.username, user.password], (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (results.affectedRows === 1) {console.log('插入数据成功')} // 成功
})
```

#### 4.3.3 插入数据的便捷方式

向表中新增数据时，如果==数据对象的每个属性和数据表的字段一一对应==，则可以通过如下方式快速插入数据：

```js
// 1. 要插入到 users 表中的数据对像
const user = {username: 'Spider-Man', password: 'pcc321'}
// 2. 待执行的 SQL 语句，其中英文的 ？ 表示占位符
const sqlStr = 'INSERT INTO users SET ?'
// 3. 使用数组的形式，依次为 ？ 占位符指定具体的值
db.query(sqlstr, user, (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (results.affectedRows === 1) {console.log('插入数据成功')} // 成功
})
```

#### 4.3.4 更新数据

可以通过如下方式，更新表中的数据：

```js
// 1. 要更新的数据对象
const user = {id: 7, username: 'aaa', password: '000'}
// 2. 要执行的 SQL 语句
const sqlstr = 'UPDATE users SET username=?, password=? WHERE id=?'
// 3. 调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlstr, [user.username, user.password, user.id], (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (results.affectedRows === 1) {console.1og('更斯数i据城功！')} // 成功
})
```

#### 4.3.5 更新数据的便捷方式

更新表数据时，如果==数据对象的每个属性和数据表的字段一一对应==，则可以通过如下方式快速更新表数据：

```js
// 1. 要更新的数据对象
const user = {id: 7, username: 'aaa', password: '000'}
// 2. 要执行的 SQL 语句
const sqlstr = 'UPDATE users SET ? WHERE id=?'
// 3. 调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlstr, [user, user.id], (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (results.affectedRows === 1) {console.1og('更斯数i据城功！')} // 成功
})
```

#### 4.3.6 删除数据

在删除数据时，推荐根据 id 这样的唯一标识，来删除对应的数据。示例如下：

```js
// 1. 要执行的 SQL 语句
const sqlStr = 'DELETE FROM users WHERE id=?'
// 2. 调用 db.query() 执行 SQL 语句的同时，为占位符指定具体的值
// 注意：如果 SQL 语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// 如果 SQL 语句中只有一个占位符，则可以省略数组
db.query(sqlstr, 7, (err, results) => {
    if (err) return console.log(err.message) // 失败
    if (re5ults.affectedRows==1){console.1og('m除数据城功！')} // 成功
})
```

#### 4.3.7 标记删除

使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见，==推荐使用标记删除的形式，来模拟删除的动作==。

所谓的标记删除，就是在表中设置类似于 ==status== 这样的==状态字段==，来==标记==当前这条数据是否被删除。

当用户执行了删除的动作时，我们并没有执行 DELETE 语句把数据删除掉，而是执行了 UPDATE 语句，将这条数据对应的 status 字段标记为删除即可。

```js
// 记除：使用 UPDATE 语句替代 DELETE 语句; 只更新数据的状态，并没有真正除
db.query('UPDATE USERS SET status=1 WHERE id=?', 6,(err, results) => {
    if (err) return console.log(err.message) // 失败
    if (re5ult5.affectedRows === 1) {console.1og('删除数据成功！')} // 成功
})
```

## 5. 前后端的身份认证

### 5.1 Web 开发模式

目前主流的 Web 开发模式有两种，分别是：

1. 基于==服务端渲染==的传统 Web 开发模式
2. 基于==前后端分离==的新型 Web 开发模式

#### 5.1.1 服务端渲染的 Web 开发模式

**服务端渲染的概念**：服务器**发送给客户端的 HTML 页面**，是==在服务器通过字符串的拼接，动态生成的==。因此，客户端不需要使用 Ajax 这样的技术额外请求页面的数据。代码示例如下：

```js
app.get('/index.html', (req, res) => {
    // 1. 要渲染的数据
    const user = {name: 'zs', age: 20}
    // 2. 服务器端通过字符串的拼接，动态生成 HTML 内容
    const html = `<h1>姓名：${user.,name}, 年龄：${user.age}</h1>`
    // 3. 把生成好的顶面内容响应给客户端。因此，客户端拿到的是带有克实数据的 HTML 页面
    res.send(html)
})
```

#### 5.1.2 服务端渲染的优缺点

**优点**：

1. ==前端耗时少==。因为服务器端负责动态生成 HTML 内容，浏览器只需要直接渲染页面即可。尤其是移动端，更省电。
2. ==有利于SEO==。因为服务器端响应的是完整的 HTML 页面内容，所以爬虫更容易爬取获得信息，更有利于 SEO。

**缺点**：

1. ==占用服务器端资源==。即服务器端完成 HTML 页面内容的拼接，如果请求较多，会对服务器造成一定的访问压力。
2. ==不利于前后端分离，开发效率低==。使用服务器端渲染，则**无法进行分工合作**，尤其对于**前端复杂度高**的项目，不利于项目高效开发。

#### 5.1.3 前后端分离的 Web 开发模式

前后端分离的概念：前后端分离的开发模式，==依赖于 Ajax 技术的广泛应用==。简而言之，前后端分离的 Web 开发模式，就是==后端只负责提供 API 接口，前端使用 Ajax 调用接口==的开发模式。

#### 5.1.4 前后端分离的优缺点

**优点**：

1. ==开发体验好==。前端专注于 UI 页面的开发，后端专注于api 的开发，且前端有更多的选择性。
2. ==用户体验好==。Ajax 技术的广泛应用，极大的提高了用户的体验，可以轻松实现页面的局部刷新。
3. ==减轻了服务器端的渲染压力==。因为页面最终是在每个用户的浏览器中生成的。

**缺点**：

1. ==不利于 SEO==。因为完整的 HTML 页面需要在客户端动态拼接完成，所以爬虫对无法爬取页面的有效信息。（解决方案：利用 Vue、React 等前端框架的 ==SSR== （server side render）技术能够很好的解决 SEO 问题！）

#### 5.1.5 如何选择 Web 开发模式

==不谈业务场景而盲目选择使用何种开发模式都是耍流氓==。

- 比如企业级网站，主要功能是展示而没有复杂的交互，并且需要良好的 SEO，则这时我们就需要使用服务器端渲染；
- 而类似后台管理项目，交互性比较强，不需要考虑 SEO，那么就可以使用前后端分离的开发模式。

另外，具体使用何种开发模式并不是绝对的，为了==同时兼顾了**首页的渲染速度**和**前后端分离的开发效率**==，一些网站采用了首屏服务器端渲染 + 其他页面前后端分离的开发模式。

### 5.2 身份认证

#### 5.2.1 什么是身份认证

==身份认证==（Authentication）又称“身份验证”、“鉴权”，是指==通过一定的手段，完成对用户身份的确认==。

- 日常生活中的身份认证随处可见，例如：高铁的验票乘车，手机的密码或指纹解锁，支付宝或微信的支付密码等。
- 在 Web 开发中，也涉及到用户身份的认证，例如：各大网站的手机验证码登录、邮箱密码登录、二维码登录等。

#### 5.2.2 为什么需要身份认证

身份认证的目的，是为了==确认当前所声称为某种身份的用户，确实是所声称的用户==。例如，你去找快递员取快递，你要怎么证明这份快递是你的。

在互联网项目开发中，如何对用户的身份进行认证，是一个值得深入探讨的问题。例如，如何才能保证网站不会错误的将“马云的存款数额”显示到“马化腾的账户”上。

#### 5.2.3 不同开发模式下的身份认证

对于==服务端渲染==和==前后端分离==这两种开发模式来说，分别有着不同的身份认证方案：

1. ==服务端渲染==推荐使用 ==Session 认证机制==
2. ==前后端分离==推荐使用 ==JWT 认证机制==

### 5.3 Session 认证机制

#### 5.3.1 HTTP 协议的无状态性

了解 HTTP 协议的无状态性是进一步学习 Session 认证机制的必要前提。

HTTP 协议的无状态性，指的是**客户端的每次 HTTP 请求都是独立的**，连续多个请求之间没有直接的关系，==服务器不会主动保留每次 HTTP 请求的状态==。

![](images/无状态性.png)

#### 5.3.2 如何突破 HTTP 无状态的限制

对于超市来说，为了方便收银员在进行结算时给 VIP 用户打折，超市可以为每个 VIP 用户发放会员卡。

![](images/突破限制.png)

注意：现实生活中的会员卡身份认证方式，在 Web 开发中的专业术语叫做 ==Cookie==。

#### 5.3.3 什么是 Cookie

==Cookie 是存储在用户浏览器中的一段不超过 4 KB 的字符串==。它由一个==名称==（Name）、一个==值==（Value）和其它几个用于控制 Cookie **有效期、安全性、使用范围**的**可选属性**组成。

不同域名下的 Cookie 各自独立，每当客户端发起请求时，会==自动把当前域名下所有未过期的 Cookie 一同发送到服务器==。

**Cookie的几大特性**：

1. 自动发送
2. 域名独立
3. 过期时限
4. 4KB 限制

#### 5.3.4 Cookie 在身份认证中的作用

客户端第一次请求服务器的时候，服务器==通过响应头的形式==，向客户端发送一个身份认证的 Cookie，客户端会自动将 Cookie 保存在浏览器中。

随后，当客户端浏览器每次请求服务器的时候，浏览器会==自动将身份认证相关的 Cookie，通过请求头的形式发送给服务器==，服务器即可验明客户端的身份。

![](images/认证机制.png)

#### 5.3.5 Cookie 不具有安全性

由于 Cookie 是存储在浏览器中的，而且==浏览器也提供了读写 Cookie 的 API==，因此 ==Cookie 很容易被伪造==，不具有安全性。因此不建议服务器将重要的隐私数据，通过 Cookie 的形式发送给浏览器。

![](images/不具有安全性.png)

**注意**：==千万不要使用 Cookie 存储重要且隐私的数据！比如用户的身份信息、密码等==。

#### 5.3.6 提高身份认证的安全性

为了防止客户伪造会员卡，收银员在拿到客户出示的会员卡之后，可以**在收银机上进行刷卡认证**。只有收银机确认存在的会员卡，才能被正常使用。

![](images/提高安全性.png)

这种“会员卡 + 刷卡认证”的设计理念，就是 Session 认证机制的精髓。

#### 5.3.7 Session 的工作原理

![](images/Session的工作原理.png)

### 5.4 在 Express 中使用 Session 认证

#### 5.4.1 安装 express-session 中间件

在 Express 项目中，只需要安装 ==express-session== 中间件，即可在项目中使用 Session 认证：

```sh
npm install express-session
```

#### 5.4.2 配置 express-session 中间件

express-session 中间件安装成功后，需要通过 ==app.use()== 来注册 session 中间件，示例代码如下：

```js
// 1. 导入session中间件
var session = require('express-session')

// 2. 配置Session中间件
app.use(session({
    secret: 'keyboard cat', // secret 属性的值可以为任意字符串
    resave: false, // 固定写法
    saveUninitialized: true // 固定写法
}))
```

#### 5.4.3 向 session 中存数据

当 express-session 中间件配置成功后，即可通过 ==req.session== 来访问和使用 session 对象，从而存储用户的关键信息：

```js
app.post('/api/login', (req, res) => {
    // 判唐断用户提的造录信息是杏止确
    if (req.body.username != 'admin' || req.body.password != '000000') {
        return res.send({status: 1, msg: '登绿失败'})
    }

    req.session.user = req.body // 将用户的信息，存储到 Session 中
    req,session.islogin = true // 将用户的登绿状态，存储到 Session 中

    res.send({
        status: 0,
        msg: '登录成功'
    })
})
```

#### 5.4.4 从 session 中取数据

可以直接从 ==req.session== 对象上获取之前存储的数据，示例代码如下：

```js
// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
    // 判断用户是否登录
    if (!req.session.islogin) {
        return res.send({status: 1, msg: 'fail'})
    }
    res.send({
        status: 0, 
        msg: 'success', 
        username: req.session.user.username
    })
})
```

#### 5.4.5 清空 session

调用 ==req.session.destroy()== 函数，即可清空服务器保存的 session 信息。

```js
// 退出登录的接口
app.post('/api/logout', (req, res) => {
    // 清空当前客户端对应的 session 信息
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})
```

### 5.5 JWT 认证机制

#### 5.5.1 了解 Session 认证的局限性

==Session 认证机制需要配合 Cookie 才能实现==。由于 Cookie 默认不支持跨域访问，所以，当**涉及到前端跨域请求后端接口**的时候，==需要做很多额外的配置==，才能实现跨域 Session 认证。

**注意**：

- 当前端请求后端接口==不存在跨域问题的时候，推荐使用 Session 身份认证机制==。
- 当前端需要跨域请求后端接口的时候，不推荐使用 Session 身份认证机制，推荐使用 JWT 认证机制。

#### 5.5.2 什么是 JWT

JWT（英文全称：JSON Web Token）是目前**最流行**的==跨域认证解决方案==。

#### 5.5.3 JWT 的工作原理

![](images/JWT的工作原理.png)

**总结**：用户的信息通过 Token 字符串的形式，保存在客户端浏览器中。服务器通过还原 Token 字符串的形式来认证用户的身份。

#### 5.5.4 JWT 的组成部分

JWT 通常由三部分组成，分别是 ==Header==（头部）、==Payload==（有效荷载）、==Signature==（签名）。

三者之间使用英文的“.”分隔，格式如下：

```txt
Header.Payload.Signature
```

下面是 JWT 字符串的示例：

![](images/JWT.png)

#### 5.5.6 JWT 的三个部分各自代表的含义

JWT 的三个组成部分，从前到后分别是 Header、Payload、Signature。

其中：

- ==Payload 部分才是真正的用户信息==，它是**用户信息经过加密之后生成的字符串**。
- Header 和 Signature 是**安全性相关**的部分，只是为了保证 Token 的安全性。

![](images/JWT含义.png)

#### 5.5.7 JWT 的使用方式

客户端收到服务器返回的 JWT 之后，通常会将它储存在 **localStorage** 或 **sessionStorage** 中。

此后，客户端每次与服务器通信，都要带上这个 JWT 的字符串，从而进行身份认证。推荐的做法是==把 JWT 放在 HTTP 请求头的 Authorization 字段中==，格式如下：

```txt
Authorization: Bearer <token>
```

### 5.6 在 Express 中使用 JWT

#### 5.6.1 安装 JWT 相关的包

运行如下命令，安装如下两个 JWT 相关的包：

```sh
npm install jsonwebtoken express-jwt
```

其中：

- ==jsonwebtoken== 用于**生成 JWT 字符串**
- ==express-jwt== 用于**将 JWT 字符串解析还原成 JSON 对象**

#### 5.6.2 导入 JWT 相关的包

使用 ==require()== 函数，分别导入 JWT 相关的两个包：

```js
// 1. 导入用于生成JT字符串的包
const jwt = require('jsonwebtoken')
// 2. 导入用于将客户端发送过来的JWT字符串，解析还原成 JSON 对像的包
const expressJWT = require('express-jwt')
```

#### 5.6.3 定义 secret 密钥

为了**保证 JWT 字符串的安全性**，防止 JWT 字符串在网络传输过程中被别人破解，我们需要专门定义一个用于**加密**和**解密**的 secret 密钥：

1. 当生成 JWT 字符串的时候，需要==使用 secret 密钥对用户的信息进行加密==，最终得到加密好的 JWT 字符串
2. 当把 JWT 字符串解析还原成 JSON 对象的时候，需要==使用 secret 密钥进行解密==

```js
// 3. secret 密钥的本质：就是一个字符串
const secretKey = 'itheima No1 ^_^'
```

#### 5.6.4 在登录成功后生成 JWT 字符串

调用 **jsonwebtoken** 包提供的 ==sign()== 方法，将用户的信息加密成 JWT 字符串，响应给客户端：

```js
// 登录接口
app.post('/api/login', function(req, res) {
    // ... 省路登录失败情况下的代码
    // 用户登录成功之后，生成 JWT 字符串，通过 token 属性响应给客户端
    res.send({
        status: 200,
        message:: '登录成功！',
        // 调用 jwt.sign() 生成 JWT 字符串，三个参数分别是：用户信息对像、加密密钥、配置对像
        token: jwt.sign({ username: userinfo.username }, secretkey, { expiresIn: '30s' })
    })
})
```

#### 5.6.5 将 JWT 字符串还原为 JSON 对象

客户端每次在访问那些有权限接口的时候，都需要主动通过**请求头中的 Authorization 字段**，将 Token 字符串发送到服务器进行身份认证。

此时，服务器可以通过 **express-jwt** 这个中间件，自动将客户端发送过来的 Token 解析还原成 JSON 对象：

```js
// 使用app.use() 来注册中间件
// expressJWT({ secret:secretKey }) 就是用来解析 Token 的中间件
// unless({ path:[/^\/api\//] }) 用来指定哪些接口不需要问权限
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))
```

#### 5.6.6 使用 req.user 获取用户信息

当 express-jwt 这个中间件配置成功之后，即可在那些有权限的接口中，使用 ==req.user== 对象，来访问从 JWT 字符串中解析出来的用户信息了，示例代码如下：

```js
// 这是一个有权限的 API 接口
app.get('/admin/getinfo', function(req, res) {
    console.log(req.user)
    res.send({
        status: 200,
        message: '获取用户信息成功！',
        data: req.user
    })
})
```

#### 5.6.7 捕获解析 JWT 失败后产生的错误

当使用 express-jwt 解析 Token 字符串时，如果客户端发送过来的 Token 字符串==过期==或==不合法==，会产生一个==解析失败==的错误，影响项目的正常运行。我们可以通过 ==Express 的错误中间件==，捕获这个错误并进行相关的处理，示例代码如下：

```js
app.use((err, req, res,n ext) => {
    // token 解折失败导致的错误
    if (err.name === 'UnauthorizedError') {
        return res.send({ status: 401, message: '无效的token' })
    }
    // 其它原因导致的错误
    res.send({ status: 500, message: "未知错误" })
})
```

# 第六章 大事件项目

## Headline

> 大事件后台 API 项目，API 接口文档请参考 [https://www.showdoc.cc/escook?page_id=3707158761215217](https://www.showdoc.cc/escook?page_id=3707158761215217)

## 1. 初始化

### 1.1 创建项目

1. 新建 `api_server` 文件夹作为项目根目录，并在项目根目录中运行如下的命令，初始化包管理配置文件：

```bash
npm init -y
```

2. 运行如下的命令，安装特定版本的 `express`：

```bash
npm i express@4.17.1
```

3. 在项目根目录中新建 `app.js` 作为整个项目的入口文件，并初始化如下的代码：

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// write your code here...

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})
```

### 1.2 配置 cors 跨域

1. 运行如下的命令，安装 `cors` 中间件：

```bash
npm i cors@2.8.5
```

2. 在 `app.js` 中导入并配置 `cors` 中间件：

```js
// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())
```

### 1.3 配置解析表单数据的中间件

1. 通过如下的代码，配置解析 `application/x-www-form-urlencoded` 格式的表单数据的中间件：

```js
app.use(express.urlencoded({ extended: false }))
```

### 1.4 初始化路由相关的文件夹

1. 在项目根目录中，新建 `router` 文件夹，用来存放所有的`路由`模块
   > 路由模块中，只存放客户端的请求与处理函数之间的映射关系
2. 在项目根目录中，新建 `router_handler` 文件夹，用来存放所有的 `路由处理函数模块`
   > 路由处理函数模块中，专门负责存放每个路由对应的处理函数

### 1.5 初始化用户路由模块

1. 在 `router` 文件夹中，新建 `user.js` 文件，作为用户的路由模块，并初始化代码如下：

```js
const express = require('express')
// 创建路由对象
const router = express.Router()

// 注册新用户
router.post('/reguser', (req, res) => {
    res.send('reguser OK')
})

// 登录
router.post('/login', (req, res) => {
    res.send('login OK')
})

// 将路由对象共享出去
module.exports = router
```

2. 在 `app.js` 中，导入并使用 `用户路由模块` ：

```js
// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)
```

### 1.6 抽离用户路由模块中的处理函数

> 目的：为了保证 `路由模块` 的纯粹性，所有的 `路由处理函数`，必须抽离到对应的 `路由处理函数模块` 中

1. 在 `/router_handler/user.js` 中，使用 `exports` 对象，分别向外共享如下两个 `路由处理函数` ：

```js
/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */

// 注册用户的处理函数
exports.regUser = (req, res) => {
    res.send('reguser OK')
}

// 登录的处理函数
exports.login = (req, res) => {
    res.send('login OK')
}
```

2. 将 `/router/user.js` 中的代码修改为如下结构：

```js
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

// 注册新用户
router.post('/reguser', userHandler.regUser)
// 登录
router.post('/login', userHandler.login)

module.exports = router
```

## 2. 登录注册

### 2.1 新建 ev_users 表

1. 在 `my_db_01` 数据库中，新建 `ev_users` 表如下：
   ![ev_users表结构](http://escook.cn:8088/images/1.jpg)

### 2.2 安装并配置 mysql 模块

> 在 API 接口项目中，需要安装并配置 `mysql` 这个第三方模块，来连接和操作 MySQL 数据库

1. 运行如下命令，安装 `mysql` 模块：

```bash
npm i mysql@2.18.1
```

2. 在项目根目录中新建 `/db/index.js` 文件，在此自定义模块中创建数据库的连接对象：

```js
// 导入 mysql 模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01',
})

// 向外共享 db 数据库连接对象
module.exports = db
```

### 2.3 注册

#### 2.3.0 实现步骤

1. 检测表单数据是否合法
2. 检测用户名是否被占用
3. 对密码进行加密处理
4. 插入新用户

#### 2.3.1 检测表单数据是否合法

1. 判断用户名和密码是否为空

```js
// 接收表单数据
const userinfo = req.body
// 判断数据是否合法
if (!userinfo.username || !userinfo.password) {
    return res.send({ status: 1, message: '用户名或密码不能为空！' })
}
```

#### 2.3.2 检测用户名是否被占用

1. 导入数据库操作模块：

```js
const db = require('../db/index')
```

2. 定义 SQL 语句：

```js
const sql = `select * from ev_users where username=?`
```

3. 执行 SQL 语句并根据结果判断用户名是否被占用：

```js
db.query(sql, [userinfo.username], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
        return res.send({ status: 1, message: err.message })
    }
    // 用户名被占用
    if (results.length > 0) {
        return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
    }
    // TODO: 用户名可用，继续后续流程...
})
```

#### 2.3.3 对密码进行加密处理

> 为了保证密码的安全性，不建议在数据库以 `明文` 的形式保存用户密码，推荐对密码进行 `加密存储`

---

在当前项目中，使用 `bcryptjs` 对用户密码进行加密，优点：

- 加密之后的密码，**无法被逆向破解**
- 同一明文密码多次加密，得到的**加密结果各不相同**，保证了安全性

---

1. 运行如下命令，安装指定版本的 `bcryptjs` ：

```bash
npm i bcryptjs@2.4.3
```

2. 在 `/router_handler/user.js` 中，导入 `bcryptjs` ：

```js
const bcrypt = require('bcryptjs')
```

3. 在注册用户的处理函数中，确认用户名可用之后，调用 `bcrypt.hashSync(明文密码, 随机盐的长度)` 方法，对用户的密码进行加密处理：

```js
// 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
userinfo.password = bcrypt.hashSync(userinfo.password, 10)
```

#### 2.3.4 插入新用户

1. 定义插入用户的 SQL 语句：

```js
const sql = 'insert into ev_users set ?'
```

2. 调用 `db.query()` 执行 SQL 语句，插入新用户：

```js
db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
    // 执行 SQL 语句失败
    if (err) return res.send({ status: 1, message: err.message })
    // SQL 语句执行成功，但影响行数不为 1
    if (results.affectedRows !== 1) {
        return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
    }
    // 注册成功
    res.send({ status: 0, message: '注册成功！' })
})
```

### 2.4 优化 res.send() 代码

> 在处理函数中，需要多次调用 `res.send()` 向客户端响应 `处理失败` 的结果，为了简化代码，可以手动封装一个 res.cc() 函数

1. 在 `app.js` 中，所有路由之前，声明一个全局中间件，为 res 对象挂载一个 `res.cc()` 函数 ：

```js
// 响应数据的中间件
app.use(function (req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
        res.send({
        // 状态
        status,
        // 状态描述，判断 err 是 错误对象 还是 字符串
        message: err instanceof Error ? err.message : err,
        })
    }
    next()
})
```

### 2.5 优化表单数据验证

> 表单验证的原则：前端验证为辅，后端验证为主，后端**永远不要相信**前端提交过来的**任何内容**

在实际开发中，前后端都需要对表单的数据进行合法性的验证，而且，**后端做为数据合法性验证的最后一个关口**，在拦截非法数据方面，起到了至关重要的作用。

单纯的使用 `if...else...` 的形式对数据合法性进行验证，效率低下、出错率高、维护性差。因此，推荐使用**第三方数据验证模块**，来降低出错率、提高验证的效率与可维护性，**让后端程序员把更多的精力放在核心业务逻辑的处理上**。

1. 安装 `@escook/express-joi` 中间件，来实现自动对表单数据进行验证的功能：

```bash
npm i @escook/express-joi
```

2. 安装 `@hapi/joi` 包，为表单中携带的每个数据项，定义验证规则：

```bash
npm install @hapi/joi@17.1.0
```

3. 新建 `/schema/user.js` 用户信息验证规则模块，并初始化代码如下：

```js
const joi = require('@hapi/joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 用户名的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
// 密码的验证规则
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
    // 表示需要对 req.body 中的数据进行验证
    body: {
        username,
        password,
    },
}
```

4. 修改 `/router/user.js` 中的代码如下：

```js
const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')

// 注册新用户
// 3. 在注册新用户的路由中，声明局部中间件，对当前请求中携带的数据进行验证
// 3.1 数据验证通过后，会把这次请求流转给后面的路由处理函数
// 3.2 数据验证失败后，终止后续代码的执行，并抛出一个全局的 Error 错误，进入全局错误级别中间件中进行处理
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)
// 登录
router.post('/login', userHandler.login)

module.exports = router
```

5. 在 `app.js` 的全局错误级别中间件中，捕获验证失败的错误，并把验证失败的结果响应给客户端：

```js
const joi = require('@hapi/joi')

// 错误中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 未知错误
    res.cc(err)
})
```
