# Rust编译的时候报出link.exe not found错误

## 报错内容

```txt
C:\rustspace>rustc main.rs
error: linker `link.exe` not found
  |
  = note: 系统找不到指定的文件。 (os error 2)
 
note: the msvc targets depend on the msvc linker but `link.exe` was not found
 
note: please ensure that VS 2013, VS 2015, VS 2017 or VS 2019 was installed with the Visual C++ option
 
error: aborting due to previous error
```

## 解决方法

在命令行就是CMD执行下面两行命令：

```sh
rustup toolchain install stable-x86_64-pc-windows-gnu
```

```sh
rustup default stable-x86_64-pc-windows-gnu
```

![](https://img-blog.csdnimg.cn/25dee23851d24b76b5f87a1aff046315.png)

这时再运行一下，错误就没了

![](https://img-blog.csdnimg.cn/9ffcfff2a1354fb6b47991c301b47db6.png)