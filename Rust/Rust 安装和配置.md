# Rust 安装和配置

## 一、下载

Rust 官网：[https://www.rust-lang.org/zh-CN/](https://www.rust-lang.org/zh-CN/)

![](https://i0.hdslb.com/bfs/album/64b21fbd3f2faf7eab40408013c5da322af54fbd.png)

## 二、改变安装目录

在想安装的位置新建Rust文件夹，并添加 .rustup 和 .cargo 两个文件夹

![](https://i0.hdslb.com/bfs/album/95b997887a69f26963d0f51088c30bdd64712f01.png)

在系统环境变量中新增两个环境变量，分别指向两个这文件夹

![](https://i0.hdslb.com/bfs/album/80f087f93cacaaaaa39703476fff8488a9f5b537.png)

![](https://i0.hdslb.com/bfs/album/3b44d79344aa1fe4e8efe790386a2ec0d6511ae2.png)

打开从官网下载的安装程序，发现图中三个地方的变成了刚设置的地址

![](https://i0.hdslb.com/bfs/album/e7b5b47a2682d39d620c460da81ce66aad429d8f.png)

## 三、配置 rustup 镜像

打开清华大学镜像：[https://mirrors.tuna.tsinghua.edu.cn/](https://mirrors.tuna.tsinghua.edu.cn/)

![](https://i0.hdslb.com/bfs/album/b4a5d8d38a27e113c8f2f219f5796b4d0ee6b7a3.png)

点击右下角的使用帮助

![](https://i0.hdslb.com/bfs/album/028390f1ca9907520b7cf6f3b7037c6680f3cc02.png)

按下 <kbd>Ctrl+F</kbd> 搜索 rustup，打开如下页面

![](https://i0.hdslb.com/bfs/album/8511ab363dfff35c1bd9b052b75c6704315ab6f2.png)

在系统环境变量中新增变量 RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup

![](https://i0.hdslb.com/bfs/album/ef2417275e3df23fec1daa07f7ba884d99775db5.png)

![](https://i0.hdslb.com/bfs/album/66ac15ffd64db032d7f08760447ecab92f66d039.png)

## 四、安装

打开安装程序，输入2，回车，进行自定义安装

![](https://i0.hdslb.com/bfs/album/608bb030cb4b0fff2406aef0913239d8b9bfeaa1.png)

接着输入下列命令，使用 x86_64-pc-windows-gnu

![](https://i0.hdslb.com/bfs/album/818542f647a770906fb1ef653a8a1dc2c8a155b5.png)

> x86_64-pc-windows-msvc编译速度相对慢一点，因而选用x86_64-pc-windows-gnu，如何选择无伤大雅，不用太纠结。

接着输入 nightly

![](https://i0.hdslb.com/bfs/album/f0c3c259d587a08d545aa2e30494a322cb224719.png)

接着直接按回车继续即可

![](https://i0.hdslb.com/bfs/album/ac743c83c28f3551918ea157b0f36b89192d3150.png)

等待下载安装完成

![](https://i0.hdslb.com/bfs/album/997006710c002196e7967690b172061fa61b802a.png)

## 五、配置 crates 镜像

接着在清华镜像站搜索 crates 打开如下页面

![](https://i0.hdslb.com/bfs/album/6104af19067c2b3d3cd1bebf267bda782cbce577.png)

在 .cargo 文件夹下新建 config 文件，并添加如下内容

```txt
[source.crates-io]
replace-with = 'tuna'

[source.tuna]
registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"
```

>该镜像可加快 cargo 读取软件包索引的速度。

## 六、创建工程

在命令行工具中输入如下命令创建rust工程

```sh
cargo new hello-rust
```

接着执行下面的命令运行程序

```sh
cargo run
```

执行完后能在终端看到如下内容

```sh
$ cargo run 
	Compiling hello-rust v0.1.0 (/Users/ag_dubs/rust/hello-rust) 
	  Finished dev [unoptimized + debuginfo] target(s) in 1.34s 
	    Running `target/debug/hello-rust` 
Hello, world!
```

## 七、引入依赖

在 `Cargo.toml` 文件中添加以下信息（从 crate 页面上获取[https://crates.io/](https://crates.io/)）：

![](https://i0.hdslb.com/bfs/album/31ada87784809d5e875c8dd250619724121affff.png)

![](https://i0.hdslb.com/bfs/album/07ccd14a4b76d6ccf66085e7a237119acd4288a4.png)

![](https://i0.hdslb.com/bfs/album/95fabbf787a3aee5ba1ea40ab6de3606e63437b2.png)

**Cargo.toml**

```txt
[dependencies] 
ferris-says = "0.2"
```

接着在 **main.rs** 中添加以下代码：

```rust
use ferris_says::say; // from the previous step 
use std::io::{stdout, BufWriter}; 

fn main() { 
	let stdout = stdout(); 
	let message = String::from("Hello fellow Rustaceans!"); 
	let width = message.chars().count(); 
	
	let mut writer = BufWriter::new(stdout.lock()); 
	say(message.as_bytes(), width, &mut writer).unwrap(); 
}
```

接着执行 `cargo run` 命令安装依赖

![](https://i0.hdslb.com/bfs/album/cdb147485521d02f59ab3abc9f390a52d8f6f587.png)
