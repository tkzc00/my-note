# Python代码打包exe可执行程序

## 1.将需要打包的内容单独放在一个文件夹中

## 2.创建一个虚拟环境（虚拟环境打包出来的体积相对小很多）

1. 新建一个虚拟环境

   ```python
   python -m venv venv
   ```

   

2. 修改解释器为虚拟环境（pycharm里面操作）

3. 重启命令行，使虚拟环境生效（用pip list指令检测是否生效）

4. 安装pyinstaller库

   ```python
   pip install pyinstaller
   ```

5. 执行打包指令

   ```python
   pyinstaller <yourprogram>.py  # 默认只能打包一个文件
   ```

   注意：如果使用了第三方工具，需要进行安装。有些第三方工具无法进行打包，操作起来会很麻烦。

6. 打包好的程序会在dist目录中，打包完后需要检查一下程序是否可以用。在命令行启动可以查看错误的详细信息。

7. 如果想在启动程序后隐藏cmd窗口，可以用下面的命令来打包

   ```python
   pyinstaller -F -w <yourprogram>.py   # -F 打包成一个exe文件，-w 隐藏cmd窗口
   ```

   