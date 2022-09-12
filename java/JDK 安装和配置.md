# JDK 安装和配置

---

## 下载JDK

下载地址：[https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) 

## 环境系统变量配置

### JAVA_HOME

-   在系统变量界面框中点击新建
    -   变量名：JAVA_HOME
    -   变量值：填写jdk的安装目录，可以通过浏览目录的方式选择
    -   目录的结尾不要出现分号，也不要选择任何jdk安装目录中的子目录

![](https://img-blog.csdnimg.cn/20200812135625990.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMxNTEwNjA3,size_16,color_FFFFFF,t_70)

### Path

- %JAVA_HOME%\bin

### 进入命令提示符测试

点击开始菜单 -> 搜索cmd -> 点击打开->依次输入以下命令

```sh
java
```

![](https://img-blog.csdnimg.cn/20200812151124764.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMxNTEwNjA3,size_16,color_FFFFFF,t_70)

```sh
javac
```

![](https://img-blog.csdnimg.cn/20200812151205166.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMxNTEwNjA3,size_16,color_FFFFFF,t_70)

```sh
java -version
```

- 显示JDK版本信息表示正确，如果提示"不是内部或外部命令"则表示失败，请认真检查上述步骤，并确实已经关闭了所有环境变量的配置窗口，使用的是新的cmd窗口