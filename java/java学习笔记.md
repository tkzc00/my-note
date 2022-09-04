# JAVA 学习笔记

# 编程入门

## 概述

计算机包括==硬件(hardware)== 和 ==软件(software)==两部分。硬件包括计算机中可以看得见的物理部分。而软件提供看不见的指令。这些指令控制硬件并且使得硬件完成特定的任务。

> **程序设计**

**定义**：创建（或开发）软件。软件包含了指令，告诉计算机做什么。

**应用场景**：软件遍布我们周围。除了个人计算机，飞机、汽车、手机甚至烤面包机中，同样运行着软件。 

> **程序设计语言**

软件开发人员在称为程序设计语言的强大工具的帮助下创建软件。

### 如何选择该学习哪种程序设计语言？

- 程序设计语言有很多种，每种语言都是为了实现某个特定的目的而发明的。
- 你会困惑哪种语言是最好的。事实上，**没有“最好”的语言**。每种语言都有它的长处和短处。
- 经验丰富的程序员知道各种语言擅长的应用场景，因此，会尽可能的掌握各种不同的程序设计语言。
- 如果你掌握了一种编程语言，应该会更容易上手其它的编程语言。**关键是学习如何使用程序设计方法来解决问题**。

## 计算机硬件介绍

![](images/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E4%BB%8B%E7%BB%8D.png)

![](images/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E4%BB%8B%E7%BB%8D2.png)

==冯·诺依曼体系结构==是现代计算机的基础，现在大多计算机仍是冯·诺依曼计算机的组织结构，只是作了一些改进而已，并没有从根本上突破冯体系结构的束缚。冯·诺依曼也因此被人们称为“计算机之父”。

### 计算机硬件介绍-中央处理器

- 中央处理器(Central Processing Unit,CPU)是计算机的大脑。它从内存中获取指令，然后执行这些指令。
- 包括：控制单元(control unit)和算术/逻辑单元(arithmetic/login unit)。

    - 控制单元：用于控制和协调其他组件的动作。
    - 算术/逻辑单元：用于完成数值运算(+、-、*、/)和逻辑运算(比较)。

- 每台计算机都有一个内部时钟，该时钟以固定速度发射电子脉冲。时钟速度越快，在给定的时间段内执行的指令就越多。速度的计量单位是赫兹(Hz)，1Hz相当于每秒1个脉冲。随着CPU速度不断提高，目前以千兆赫(GHz)来表述。
- 最初一个CPU只有一个核(core)。核是处理器中实现指令读取和执行的部分。一个多核CPU是一个具有两个或者更多独立核的组件。可提高CPU的处理能力。

#### IT定律之计算机行业发展规律

- 摩尔定律(Moore’s Law)
- 安迪-比尔定律(Andy and Bill’s Law)
- 反摩尔定律(Reverse Moore’s Law)

### 计算机硬件介绍-存储设备

- 内存中的信息在断电时会丢失。那我们可以考虑将程序和数据永久的保存在存储设备上。当计算机确实需要这些数据时，再移入内存，因为从内存中读取比从存储设备读取要快得多。
- 存储设备主要有以下三种：
  
    - 磁盘驱动器:每台计算机至少有一个硬盘驱动器。硬盘(hard disk)用于永久的保存数据和程序。
    - 光盘驱动器(CD和DVD)
      
        - CD的容量可达700MB。
        - DVD的容量可达4.7GB。

    - USB闪存驱动器
      
        - USB: Universal Serial Bus，通用串行总线。
        - 可以使用USB将打印机、数码相机、鼠标、外部硬盘驱动器连接到计算机上。
        - USB闪存驱动器很小，可用于存储和传输数据的设备。

### 计算机硬件介绍：内存

**比特(bit)和字节(byte)**

- 在讨论内存前，先清楚数据是如何存储在计算机中的。
- 计算机就是一系列的电路开关。每个开关存在两种状态：关(off)和开(on)。如果电路是开的，它的值是1。如果电路是关的，它的值是0。
- **一个0或者一个1存储为一个比特(bit)，是计算机中最小的存储单位。**
- **计算机中是最基本的存储单元是字节(byte)** 。每个字节由8个比特构成。
- 计算机的存储能力是以字节和多字节来衡量的。如下：
  
    - **千字节(kilobyte,KB) = 1024B**
    - **兆字节(megabyte,MB) = 1024KB**
    - **千兆字节(gigabyte,GB) = 1024MB**
    - **万亿字节(terabyte,TB) = 1024GB**

- 内存(也叫 Random-Access Memory,RAM)：由一个有序的字节序列组成，用于存储程序及程序需要的数据。
- ==一个程序和它的数据在被CPU执行前必须移到计算机的内存中==。
- 每个字节都有一个唯一的地址。见右图。使用这个地址确定字节的位置，以便于存储和获取数据。
- 一个计算机具有的RAM越多，它的运行速度越快，但是此规律是有限制的。
- 内存与CPU一样，也构建在表面嵌有数百万晶体管的硅半导体芯片上。但内存芯片更简单、更低速、更便宜。
- 实测发现：==内存存取数据的速度比硬盘的存取速度快10倍==，在某些环境里，硬盘和内存之间的速度差距可能会更大。而==CPU的速度比内存不知还要快多少倍==。当我们把程序从硬盘放到内存以后，CPU就直接在内存运行程序，这样比CPU直接在硬盘运行程序就要快很多。
- 内存解决了一部分CPU运行过快，而硬盘数据存取太慢的问题。 提高了我们的电脑的运行
速度。内存就如同一条“高速车道”一般，数据由传输速度较慢的硬盘通过这条高速车道
传送至CPU进行处理！
- ==但内存是带电存储的(一旦断电数据就会消失)，而且容量有限，所以要长时间储存程序或数据就需要使用硬盘==
- 内存在这里起了两个作用：
  
    1. 保存从硬盘读取的数据，提供给CPU使用
    2. 保存CPU的一些临时执行结果，以便CPU下次使用或保存到硬盘

### 计算机硬件介绍：输入和输出设备

- 常见的输入设备：键盘（keyboard）和鼠标（mouse）
- 常见的输出设备：显示器（monitor）和打印机（printer）
- 显示器屏幕分辨率：是指显示设备水平和垂直方向上显示的像素(px)数。

- 分辨率可以手工设置。
- 分辨率越高，图像越锐化、越清晰。

![](images/%E8%BE%93%E5%85%A5%E5%92%8C%E8%BE%93%E5%87%BA%E8%AE%BE%E5%A4%87.png)

计算公式：==像素密度=√[(长度像素数)\^2+(宽度像素数)^2]/屏幕尺寸==

### 计算机硬件介绍：通信设备

- 计算机可以通过通信设备进行联网。
-  常见的设备有：
   
    - 拨号调制解调器：使用的是电话线，传输速度可达56 000bps(bps:每秒比特)
    - DSL（数字用户线）：使用的也是电话线，但传输速度叫上面的快20倍
    - 电缆调制解调器：利用有线电视电缆进行数据传输，通常速度比DSL快。
    - 网络接口卡（NIC）：将计算机接入局域网（LAN）的设备。局域网通常用于大学、商业组织和政府组织。速度甚至可达1000Mbps
    - 无线网络：在家庭、商业和学校中极其常见。计算机可通过无线适配器连接到局域网或internet上。

## 计算机发展史上的鼻祖

最近半个世纪以来，世界计算机科学界的重大进步，离不开图灵等人的理论奠基作用和多方面的开创性研究成果。**图灵是当之无愧的计算机科学和人工智能之父**。甚至认为，他在技术上的贡献及对未来世界的影响几乎可与牛顿、爱因斯坦等巨人比肩。

图灵论文中的“**用有限的指令和有限的存储空间可算尽一切可算之物**”理论让当时所有的科学家震惊

美国计算机学会（ACM）的年度“图灵奖”，自从1966年设立以来，一直是世界计算机科学领域的最高荣誉，相当于计算机科学界的诺贝尔奖。至今，中国人只有**姚期智**院士获该奖项。

20世纪最重要的数学家之一，在现代计算机、博弈论、核武器和生化武器等诸多领域内有杰出建树的最伟大的科学全才之一，被后人称为**“计算机之父”和“博弈论之父”**。

计算机基本工作原理是存储程序和程序控制，它是由世界著名数学家冯·诺依曼提出的。**最简单的来说，冯诺依曼理论的要点是：数字计算机的数制采用二进制；计算机应该按照程序顺序执行**。

同样有着“计算机之父”称号的冯·诺依曼的助手弗兰克尔在一封信中写到：“……计算机的基本概念属于图灵。按照我的看法，冯·诺依曼的基本作用是使世界认识了由图灵引入的计算机基本概念……”

**根据冯诺依曼体系结构构成的计算机，必须具有如下功能**：

- 把需要的程序和数据送至计算机中。
- 必须具有长期记忆程序、数据、中间结果及最终运算结果的能力。
- 能够完成各种算术、逻辑运算和数据传送等数据加工处理的能力。
- 能够根据需要控制程序走向，并能根据指令控制机器的各部件协调操作。
- 能够按照要求将处理结果输出给用户。

## 操作系统

操作系统(Operating System)是运行在计算机上的最重要的程序，它可以管理和控制计算机的活动。

![](images/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.png)

- 硬件、操作系统、应用程序和用户之间的关系如右图。
- 操作系统的主要任务：
- 控制和监视系统的活动
- 分配和调配系统资源
- 调度操作

## 万维网

万维网（World Wide Web,www,环球信息网）常简称为Web,发明者蒂姆·伯纳斯·李。分为Web客户端和Web服务器程序。 WWW可以让==Web客户端（常用浏览器）访问浏览Web服务器上的页面==。 是一个由许多互相链接的超文本组成的系统，通过互联网访问。在这个系统中，每个有用的事物，称为一样“资源”；并且由一个==全局“统一资源标识符”（URI）标识==；这些资源通过==超文本传输协议（Hypertext Transfer Protocol）==传送给用户，而后者通过点击链接来获得资源。

万维网是无数个网络站点和网页的集合，它们在一起构成了因特网Internet最主要的部分（因特网也包括电子邮件、Usenet以及新闻组）。它实际上是多媒体的集合，是由超级链接连接而成的。我们通常通过网络浏览器上网观看的，就是万维网的内容。

## 职业发展与提升

![](images/%E4%B8%93%E4%B8%9A%E8%81%8C%E7%BA%A71.jpg)

![](images/%E4%B8%93%E4%B8%9A%E8%81%8C%E7%BA%A72.jpg)

![](images/%E7%AE%A1%E7%90%86%E8%81%8C%E7%BA%A7.jpg)

# Java 概述

## Java 语言发展史

### Java 语言

**语言**：人与人交流沟通的方式

**计算机语言**：人与计算机之间进行信息交流沟通的一种特殊语言

Java 语言是美国 Sun 公司（Stanford University Network）在 1995 年推出的计算机语言。

Java 之父：詹姆斯·高斯林（James Gosling）

### Java 语言发展史

- 1995年，Sun公司发布Java语言
- 1996年，发布Java（1.0）
- 1997年，发布Java（1.1）
- 1998年，发布Java（1.2）
- 2000年，发布Java（1.3）
- 2002年，发布Java（1.4）
- 2004年，发布Java（5.0）
- 2006年，发布Java（6.0）
- 2009年，Oracle 甲骨文公司收购Sun公司
- 2011年，发布Java（7.0）
- 2014年，发布Java（8.0）
- 2017年9月，发布Java（9.0）
- 2018年3月，发布Java（10.0）
- 2018年9月，发布Java（11.0）

## Java 语言跨平台原理

### 平台

指的是操作系统

- Windows
- Mac
- Linux

### 跨平台

Java 程序可以在任意操作系统上运行

### 跨平台原理

![](images/%E8%B7%A8%E5%B9%B3%E5%8F%B0%E5%8E%9F%E7%90%86.png)

**总结**：在需要运行 Java 应用程序的操作系统上，安装一个与操作系统对应的 Java虚拟机（JVM Java Virtual Machine）即可。

## JRE 和 JDK

### JRE（Java Runtime Environment）

是 Java 程序的运行时环境，包含 JVM 和运行时所需要的核心类库。

我们想要运行一个已有的 Java 程序，那么只需要安装 JRE 即可。

### JDK（Java Development Kit）

是 Java 程序开发工具包，包含 JRE 和开发人员使用的工具。

其中的开发工具：编译工具（javac.exe）和运行工具（java.exe）。

### JDK、JRE 和 JVM 的关系

![](images/JDK%E3%80%81JRE%E3%80%81JVM%E7%9A%84%E5%85%B3%E7%B3%BB.png)

## JDK 的下载和安装

傻瓜式安装，下一步即可。

==建议：安装路径中不要包含中文和空格，所有的开发工具最好安装目录统一==。

### JDK 的安装目录

| 目录名称 |                              说明                               |
| :------: | :-------------------------------------------------------------: |
|   bin    | 该路径下存放了 JDK 的各种工具命令。javac 和 java 就放在这个目录 |
|   conf   |                该路径下存放了 JDK 的相关配置文件                |
| include  |               该路径下存放了一些平台特定的头文件                |
|  jmods   |                  该路径下存放了 JDK 的各种模块                  |
|  legal   |               该路径下存放了 JDK 各模块的授权文档               |
|   lib    |            该路径下存放了 JDK 工具的一些补充 IAR 包             |

其余文件为说明性文档。

# 第一个程序

## 常用 DOS 命令

### 打开命令提示符窗口

1. 按下 win+R
2. 输入cmd
3. 按下回车键

### 常用命令

|         操作         |               说明               |
| :------------------: | :------------------------------: |
|       盘符名称       | 盘符切换。E:+回车，表示切换到E盘 |
|         dir          |       查看当前路径下的内容       |
|       cd 目录        |           进入单级目录           |
|        cd ...        |         回退到上一级目录         |
|  cd 目录1\目录2\...  |           进入多级目录           |
| cd \\|回退到盘符目录 |
|         cls          |               清屏               |
|         exit         |        退出命令提示符窗口        |

## Path 环境变量的配置

### 为什么要配置 Path 环境变量

开发 Java 程序，需要使用 JDK 提供的开发工具，而这些开发工具在 JDK 安装目录的 bin 目录下。

为了在开发 Java 程序的时候，能够方便的使用 javac 和 java 这些命令，我们需要配置 Path 环境变量。

在系统变量中新建一个 JAVA_HOME

```md
D:\java\jdk1.8.0_341
```

在 Path 中新建

```md
%JAVA_HOME%\bin
```

> 提示：如果命令提示符窗口是配置环境变量前打开的，需要关闭该窗口，重新打开一个窗口测试。

## HelloWorld 案例

### Java 程序开发运行流程

开发 Java 程序，需要三个步骤：==编写程序==、==编译程序==、==运行程序==

### HelloWorld 案例的编写

```java
public class HelloWorld {
    public static void main (String[] args) {
        System.out.println("HelloWorld")
    }
}
```

# 基础语法

## 注释

### 注释概述

- 注释是指在程序==指定位置==添加的==说明性信息==
- 注释不参与程序运行，仅起到==说明作用==

### 注释分类

- 单行注释

```java
//注释信息
```

- 多行注释

```java
/* 注释信息 */
```

- 文档注释

```java
/** 注释信息 */
```

## 关键字

### 关键字概述

**关键字**：被 Java 语言赋予了==特定含义的单词==。

### 关键字的特点

1. 关键字的字母==全部小写==
2. 常见的代码编辑器，针对关键字有特殊的颜色标记，非常直观

## 常量

### 常量概述

**常量**：在程序运行过程中，其值不可以发生改变的量

### 常量分类

|  常量类型  |         说明         |           举例            |
| :--------: | :------------------: | :-----------------------: |
| 字符串常量 | 用双引号括起来的内容 | “HelloWord", "黑马程序员” |
|  整数常量  |    不带小数的数字    |         666， -88         |
|  小数常量  |     带小数的数字     |       13.14， -5.21       |
|  字符常量  | 用单引号括起来的内容 |     ‘A’， ‘0’， ‘我’      |
|  布尔常量  |   布尔值，表示真假   |       true， false        |
|   空常量   |  一个特殊的值，空值  |         值是null          |

## 数据类型

### 计算机存储单元

我们知道计算机是可以用来存放数据的，但是无论是内存还是硬盘，计算机存储设备的最小单元叫“==位（bit）==”，我们又称之为“==比特位==”，通常用小写字母“==b==”表示。而计算机中最小的存储单元叫“==字节（byte）==”，通常用大写字母“==B==”表示，字节是由连续的8个位组成的。

除了字节外还有一些常用的存储单位：

- 1B（字节）= 8bit
- 1KB = 1024B
- 1MB = 1024KB
- 1GB = 1024MB
- 1TB = 1024GB

### 数据类型

Java 语言是强类型语言，对于每一种数据都给出了明确的数据类型，不同的==数据类型==也分配了不同的==内存空间==，所以它们表示的==数据大小==也是不一样的。

![](images/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.png)

### 数据类型内存占用和取值范围

| 数据类型 |       关键字       | 内存占用 |                                   取值范围                                    |
| :------: | :----------------: | :------: | :---------------------------------------------------------------------------: |
|   整数   |        byte        |    1     |                                   -128~127                                    |
|   整数   |       short        |    2     |                                 -32768~32767                                  |
|   整数   |   **int (默认)**   |    4     |                            -2的31次方到2的31次方-1                            |
|   整数   |        long        |    8     |                            -2的63次方到2的63次方-1                            |
|  浮点数  |       float        |    4     |    负数：-3.042823E+38到-1.401298E-45<br/>正数：1.401298E-45到3.042823E+38    |
|  浮点数  | **double（默认）** |    8     | 负数：-1.797693E+308到-4.9000000E-324<br/>正数：4.9000000E-324到1.797693E+308 |
|   字符   |        char        |    2     |                                    0~65535                                    |
|   布尔   |      boolean       |    1     |                                  true，false                                  |

## 变量

### 变量概述

**变量**：在程序运行过程中，其值可以发生改变的量。

### 变量定义

- 格式：数据类型 变量名 = 变量值;
- 范例：

```java
int a = 10;
```

### 变量的使用

变量的使用：取值和修改值

- 取值格式：变量名
- 范例：

```java
a
```

- 修改值格式：变量名 = 变量值
- 范例：

```java
a = 20;
```

### 变量使用的注意事项

1. ==名字不能重复==
2. ==变量未赋值，不能使用==
3. ==long类型的变量定义的时候，为了防止整数过大，后面要加L==
4. ==float类型的变量定义的时候，为了防止类型不兼容，后面要加F==

## 标识符

### 标识符概述

**标识符**：给类、方法、变量等起名字的**符号**。

### 标识符定义规则

1. 由==数字、字母、下划线(_)和美元符（$）==组成
2. 不能以数字开头
3. 不能是关键字
4. 区分大小写

### 常见命名约定

> **小驼峰命名法**：----->==方法、变量==

1. 标识符是一个单词的时候，首字母小写，如name
2. 标识符由多个单词组成的时候，第一个单词首字母小写，其他单词首字母大写，如firstName

> **大驼峰命名法**：----->==类==

1. 标识符是一个单词的时候，首字母大写，如Student
2. 标识符由多个单词组成的时候，每个单词首字母大写，如GoodStudent

## 类型转换

### 类型转换分类

- 自动类型转换
- 强制类型转换

### 自动类型转换

把一个表示数据==范围小的数值==或者==变量==赋值给另一个表示==数据范围大的变量==。

范例：

```java
double d = 10;
```

表示数据范围从小到大图：

![](images/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.png)

### 强制类型转换

把一个表示==数据范围大的数值==或者==变量==赋值给另一个表示数据==范围小的变量==。

- 格式：目标数据类型 变量名 = (目标数据类型)变量名;
- 范例：

```java
int k = (int)88.88;
```

> 不建议使用强制类型转换，会有数据的损失。

# 运算符

## 算数运算符

### 运算符和表达式

- 运算符：对常量或者变量进行操作的==符号==
- 表达式：用==运算符==把常量或者变量连接起来==符合java语法==的式子就可以称为表达式。
- 不同运算符连接的表达式体现的是不同类型的表达式。

### 算数运算符

| 符号  | 作用  |         说明         |
| :---: | :---: | :------------------: |
|   +   |  加   |  将两个数据相加求和  |
|   -   |  减   |  将两个数据相减求差  |
|   *   |  乘   |  将两个数据相乘求积  |
|   /   |  除   |  将两个数据相除求商  |
|   %   | 取余  | 将两个数据相除取余数 |

> 除法得到的是商，取余得到的是余数。
> 
> 整数相除只能得到整数，要想得到小数，必须有浮点数的参与。

### 字符的“+”操作

拿字符在计算机底层==对应的数值==来进行计算。

```md
‘A’ --> 65  A-Z是连续的
'a' --> 97  a-z是连续的
'0' --> 48  0-9是连续的
```

算术表达式中==包含多个基本数据类型==的值的时候，整个算术表达式的==类型==会==自动进行提升==。
        
> 提升规则：

1. byte类型，short类型和char类型将会被提升到int类型
2. 整个表达式的类型会自动提升到表达式中最高等级操作数同样的类型
3. 等级顺序：byte，short，char----> int ----> long ----> float ----> double

### 字符串的“+”操作

- 当‘+’操作中出现字符串时，这个‘+’是==字符串连接符==，而不是算数运算符。
- 当‘+’操作中，如果出现了字符串，就是连接运算符，否则就是算术运算符。当连续进行‘+’操作时，从左到右逐个执行。

## 赋值运算符

| 符号  |    作用    |         说明          |
| :---: | :--------: | :-------------------: |
|   =   |    赋值    | a=10，将10赋值给变量a |
|  +=   |  加后赋值  | a+=b，将a+b的值赋给a  |
|  -=   |  减后赋值  | a-=b，将a-b的值赋给a  |
|  *=   |  乘后赋值  | a*=b，将a*b的值赋给a  |
|  /=   |  除后赋值  | a/=b，将a/b的值赋给a  |
|  %=   | 取余后赋值 | a%=b，将a%b的值赋给a  |

> 注意：扩展的赋值运算符底层隐含了强制类型转换。

## 自增自减运算符

| 符号  | 作用  |    说明     |
| :---: | :---: | :---------: |
|  ++   | 自增  | 变量的值加1 |
| \-\-  | 自减  | 变量的值减1 |

```java
// 单独使用
int i = 10;
i++; // 11
++i; // 12
```

```java
// 参与操作使用
int j = i++; // 先赋值再自增
int k = ++i; // 先自增再赋值
```

> 注意事项：
> 
> 1. ++和--既可以放在变量的后边，也可以放在变量的前边
> 2. 单独使用的时候，++和--无论是放在变量的前边还是后边，结果都是一样的
> 3. 参与操作的时候，如果放在变量的后边，先拿变量参与操作，后拿变量做++或者--
> 4. 参与操作的时候，如果放在变量的前边，先拿变量做++或者--，后拿变量参与操作

最常见的用法：==单独使用==

## 关系运算符

| 符号  |                             说明                              |
| :---: | :-----------------------------------------------------------: |
|  ==   |  a==b，判断a和b的值是否**相等**，成立则为true，不成立为false  |
|  !=   | a!=b，判断a和b的值是否**不相等**，成立则为true，不成立为false |
|  >.   |     a>b，判断a是否**大于**b，成立则为true，不成立为false      |
|  >=   |   a>=b，判断a是否**大于等于**b，成立则为true，不成立为false   |
|   <   |     a<b，判断a是否**小于**b，成立则为true，不成立为false      |
|  <=   |   a<=b，判断a是否**小于等于**b，成立则为true，不成立为false   |

> 注意事项：
> 关系运算符的结果都是布尔类型，要么是true，要么是false
> 千万不要把“==”误写成“=”

## 逻辑运算符

### 逻辑运算符概述

逻辑运算符，是用来==连接关系表达式==的运算符。

逻辑运算符也可以直接==连接布尔类型的常量或者变量==。

### 逻辑运算符

| 符号  |   作用   |                     说明                     |
| :---: | :------: | :------------------------------------------: |
|   &   |  逻辑与  |  a&b，a和b都是true，结果为true，否则为false  |
|  \|   |  逻辑或  | a\|b，a和b都是false，结果为false，否则为true |
|  \^   | 逻辑异或 |     a^b，a和b结果不同为true，相同为false     |
|   !   |  逻辑非  |            !a，结果和a的结果相反             |

### 短路逻辑运算符

| 符号  |  作用  |                         说明                         |
| :---: | :----: | :--------------------------------------------------: |
|  &&   | 短路与 | a&&b，作用和&相同，但是有短路效果（有false则false）  |
| \|\|  | 短路或 | a\|\|b，作用和\|相同，但是有短路效果（有true则true） |

> 注意事项：
> 逻辑与**&**，无论左边真假，右边都要执行
> 短路与**&&**，如果左边为真，右边执行；如果**左边为假，右边不执行**
> 逻辑或**|**，无论左边真假，右边都要执行
> 短路或**||**，如果左边为假，右边执行；如果**左边为真，右边不执行**

最常用的逻辑运算符：==&&，||，!==

## 三元运算符

- 格式：关系表达式 ？ 表达式1 : 表达h式2;
- 范例：

```java
a > b ? a : b;
```

- 计算规则：
  - 首先计算==关系表达式的值==
  - ==如果值为true，表达式1的值就是运算结果==
  - ==如果值为false，表达式2的值就是运算结果==

### 案例：两只老虎

需求：动物园里有两只老虎，已知两只老虎的体重分别为180kg、200kg，请用程序实现判断两只老虎的体重是否相同。

```java
int weight1 = 180;
int weight2 = 200;
boolean b = weight1 == weight2 ? true : false;
System.out.println("b:" + b);
```

### 案例：三个和尚

需求：一座寺庙里住着三个和尚，已知他们的身高分别为150cm、210cm、165cm，请用程序实现获取这三个和尚的最高身高。

```java
int height1 = 150;
int height2 = 210;
int height3 = 165;
int tempHeight = height1 > height2 ? height1 : height2;
int maxHeight = tempHeight > height3 ? tempHeight : height3;
System.out.println("maxHeight:" + maxHeight);
```

# 数据输入

## Scanner 使用的基本步骤

1. 导包

```java
// 导包的动作必须出现在类定义的上边
import java.util.Scanner;
```

2. 创建对象

```java
// 格式中，只有sc是变量名，可以变，其他的都不允许变
Scanner sc = new Scanner(System.in);
```

3. 接收数据

```java
// 格式中，只有i是变量名，可以变，其他的都不允许变
int i = sc.nextInt();
```

## 案例：三个和尚

需求：一个寺庙里住着三个和尚，他们的身高必须经过测量得出，请用程序实现获取这三个和尚的最高身高。

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入第一个和尚的身高：");
int height1 = sc.nextInt();
System.out.println("请输入第二个和尚的身高：");
int height2 = sc.nextInt();
System.out.println("请输入第三个和尚的身高：");
int height3 = sc.nextInt();
int tempHeight = height1 > height2 ? height1 : height2;
int maxHeight = tempHeight > height3 ? tempHeight : height3;
System.out.println("这三个和尚中身高最高的是:" + maxHeight + "cm");
```

# 分支语句

## 流程控制

### 流程控制语句分类

- 顺序结构
- 分支结构(if,switch)
- 循环结构(for,while,do...while)

### 顺序结构

顺序结构是程序中最基本的流程控制，没有特定的语法结构，按照代码的先后顺序，依次执行。

程序中大多数的代码都是这样执行的。

## if 语句

### if 语句格式1

```txt
格式：
if (关系表达式) {
    语句体
}
```

> 执行流程：
        
1. 首先计算关系表达式的值
2. 如果关系表达式的值为true就执行语句体
3. 如果关系表达式的值为false就不执行语句体
4. 继续执行后面的语句内容

### if 语句格式2

```txt
格式：
if (关系表达式) {
    语句体1;
} else {
    语句体2;
}
```

> 执行流程：
        
1. 首先计算关系表达式的值
2. 如果关系表达式的值为true就执行语句体1
3. 如果关系表达式的值为false就执行语句体2
4. 继续执行后面的语句内容

#### 案例：奇偶数

需求：仍以给出一个整数，请用程序实现判断该整数是奇数还是偶数，并在控制台输出该整数是奇数还是偶数

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入一个整数：");
int a = sc.nextInt();
if (a % 2 == 0) {
    System.out.println(a + "是偶数");
} else {
    System.out.println(a + "是奇数");
}
```

### if 语句格式3

```java
格式：
if (关系表达式1) {
    语句体1;
} else if (关系表达式2) {
    语句体2;
}
...
else {
    语句体n+1;
}
```

> 执行流程：
        
1. 首先计算关系表达式1的值
2. 如果值为true就执行语句体1；如果值为false就计算关系表达式2的值
3. 如果值为true就执行语句体2；如果值为false就计算关系表达式3的值
4. ...
5. 如果没有任何关系表达式的值为true，就执行语句体n+1

> 需求：键盘录入一个星期数（1，2，。。。。。。，7），输出对应的星期一，星期二，。。。，星期日

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入一个星期数（1~7）：");
int a = sc.nextInt();
if (a == 1) {
    System.out.println("星期一");
} else if (a == 2) {
    System.out.println("星期二");
} else if (a == 3) {
    System.out.println("星期三");
} else if (a == 4) {
    System.out.println("星期四");
} else if (a == 5) {
    System.out.println("星期五");
} else if (a == 6) {
    System.out.println("星期六");
} else {
    System.out.println("星期日");
}
System.out.println("结束");
```

#### 案例：考试奖励

需求：小明快要期末考试了，小明的爸爸对他说，会根据他不同的考试成绩，送他不同的礼物，假如你可以控制小明的得分，请用程序实现小明到底该获得什么样的礼物，并在控制台输出。

奖励：
95~100   山地自行车一辆
90~94    游乐场玩一次
80~89    变形金刚玩具一个
80以下    胖揍一顿

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入一个分数：");
int score = sc.nextInt();
if (score > 100 || score < 0) {
    System.out.println("您输入的分数有误");
} else if (score >= 95 && score <= 100) {
    System.out.println("山地自行车一辆");
} else if (score >= 90 && score <= 94) {
    System.out.println("游乐场玩一次");
} else if (score >= 80 && score <= 89) {
    System.out.println("变形金刚玩具一个");
} else {
    System.out.println("胖揍一顿");
}
```

> 数据测试：正确数据、边界数据、错误数据

## switch 语句

### switch 语句格式

```java
格式：
switch (表达式) {
case值1：
        语句体1;
        break;
case值2:
        语句体2;
        break;
...
default:
        语句体n+1;
        [break;]
}
```

> 格式说明：

1. 表达式：取值为byte、short、int、char，JDK5以后可以是枚举，JDK7以后可以是string
2. case： 后面跟的是要和表达式进行比较的值
3. break：表示中断、结束的意思，用来结束switch语句
4. default：表示所有情况都不匹配的时候，就执行该处的内容，和if语句的else相似

> 执行流程：

1. 首先计算表达式的值
2. 依次和case后面的值进行比较，如果有对应的值，就会执行相应的语句，在执行的过程中，遇到break就会结束
3. 如果所有的case后面的值和表达式的值都不匹配，就会执行default里面的语句体，然后程序结束掉

```java
//需求：键盘录入一个星期数（1~7），控制台输出对应的星期一、星期二、。。。、星期日
System.out.println("请输入一个星期数（1~7）：");
Scanner sc = new Scanner(System.in);
int week = sc.nextInt();
switch (week) {
    case 1:
        System.out.println("星期一");
        break;
    case 2:
        System.out.println("星期二");
        break;
    case 3:
        System.out.println("星期三");
        break;
    case 4:
        System.out.println("星期四");
        break;
    case 5:
        System.out.println("星期五");
        break;
    case 6:
        System.out.println("星期六");
        break;
    case 7:
        System.out.println("星期日");
        break;
    default:
        System.out.println("您输入的星期数有误");
}
```

#### 案例：春夏秋冬

需求：一年有12个月，分属于春夏秋冬四个季节，键盘录入一个月份，请用程序实现判断该月份属于哪个季节，并输出
        
春：3、4、5
夏：6、7、8
秋：9、10、11
冬：12、1、2

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入一个月份：");
int month = sc.nextInt();
switch (month) {
case 1:
case 2:
case 12:
    System.out.println("冬季");
    break;
case 3:
case 4:
case 5:
    System.out.println("春季");
    break;
case 6:
case 7:
case 8:
    System.out.println("夏季");
    break;
case 9:
case 10:
case 11:
    System.out.println("秋季");
    break;
default:
    System.out.println("您输入的月份有误");
}
```

> 注意事项：在switch语句中，如果case控制的语句体后面不写break，将会出现穿透现象，在不判断下一个case值的情况下，向下运行，直到遇到break，或者整体switch语句结束

# 循环语句

## for 循环语句

### 循环结构

> **特征**：

- 重复做某件事情
- 具有明确的开始和停止标志

> **循环结构的组成**：

- 初始化语句： 用于表示循环开始时的起始状态，简单说就是循环开始的时候什么样
- 条件判断语句： 用于表示循环反复执行的条件，简单说就是判断循环是否能一直执行下去
- 循环体语句： 用于表示循环反复执行的内容，简单说就是循环反复执行的事情
- 条件控制语句： 用于表示循环执行中每次变化的内容，简单说就是控制循环是否能执行下去

> **循环结构对应的语法**：

- 初始化语句： 这里可以是一条或者多条语句，这些语句可以完成一些初始化操作
- 条件判断语句： 这里使用一个结果值为boolean类型的表达式，这个表达式能决定是否执行循环体。例如：a < 3
- 循环体语句： 这里可以是任意语句，这些语句将反复执行
- 条件控制语句： 这里通常是使用一条语句来改变变量的值，从而达到控制循环是否向下执行的效果。常见i++,i--这样的操作

### for 循环语句格式

```java
格式：
for (初始化语句;条件判断语句;条件控制语句) {
    循环体语句;
}
```

> 执行流程：

1. 执行初始化语句
2. 执行条件判断语句，判断其结果是true还是false
    - 如果是false，循环结束
    - 如果是true，继续执行
3. 执行循环体语句
4. 执行条件控制语句
5. 回到2继续

```java
//需求：在控制台输出5次"HelloWorld"
for (int i = 1; i <= 5; i++) {
    System.out.println("HelloWorld");
}
```

### 案例：输出数据

需求：在控制台输出1-5和5-1的数据

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
System.out.println("----------------");
for (int i = 5; i >= 1; i--) {
    System.out.println(i);
}
```

### 案例：求和

需求：求1-5之间的数据和，并把求和结果在控制台输出

```java
int sum = 0;
for (int i = 1; i <= 5; i++) {
    sum += i; //sum = sum + i
}
System.out.println("1-5之间的数据和是：" + sum);
```

### 案例：求偶数和

需求：求1-100之间的偶数和，并把求和结果在控制台输出

```java
int sum = 0;
for (int i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
System.out.println("1-100之间的偶数和为：" + sum);
```

### 案例：水仙花

需求：在控制台输出所有的水仙花数

1. 水仙花数是一个三位数
2. 水仙花数的个位、十位、百位的数字立方和等于原数

```java
for (int i = 100; i <= 999; i++) {
    int a = i % 10; //个位
    int b = i / 10 % 10; //十位
    int c = i / 10 / 10 % 10; //百位
    if (a * a * a + b * b * b + c * c * c == i) {
        System.out.println(i);
    }
}
```

> 任意数字的指定位上的数值如何求？
> 先使用整除操作将要求的数字移动到个位上，再使用取余操作取出最后一位上的值。

### 案例：统计水仙花数

需求：统计水仙花数一共有多少个，并在控制台输出个数

```java
int count = 0;
for (int i = 100; i <= 999; i++) {
    int a = i % 10;
    int b = i / 10 % 10;
    int c = i / 10 / 10 % 10;
    if (a * a * a + b * b * b + c * c * c == i) {
        count++;
    }
}
System.out.println("水仙花数共有：" + count + "个");
```

## while 循环语句

### while 循环语句格式

```java
基本格式：
while (条件判断语句) {
    循环体语句;
}
```

```java
完整格式：
初始化语句;
while (条件判断语句) {
    循环体语句;
    条件控制语句;
}
```

> 执行流程：

1. 执行初始化语句
2. 执行条件判断语句，判断其结果是true还是false
    - 如果是false，循环结束
    - 如果是true，继续执行
3. 执行循环体语句
4. 执行条件控制语句
5. 回到2继续

```java
//需求：在控制台输出5次HelloWorld
int i = 1;
while (i <= 5) {
    System.out.println("HelloWorld");
    i++;
}
```

### 案例：珠穆朗玛峰

需求：世界最高山峰珠穆朗玛峰（8844.43米=8844430毫米），假如我有一张足够大的纸，它的厚度是0.1毫米。请问，我折叠多少次，可以折成珠穆朗玛峰的高度？

```java
int count = 0;
double paper = 0.1;
while (paper <= 8844430) {
    paper *= 2;
    count++;
}
System.out.println("需要折叠：" + count + "次");
```

## do...while 循环语句

### do...while 循环语句格式

```java
基本格式：
do {
    循环体语句;
} while (条件判断语句);
```

```java
完整格式：
初始换语句;
do {
    循环体语句;
    条件控制语句;
} while (条件判断语句);
```

> 执行流程：
        
1. 执行初始化语句
2. 执行循环体语句
3. 执行条件控制语句
4. 执行条件判断语句，看其结果是true还是false
    - 如果是false，循环结束
    - 如果是true，继续执行
5. 回到2继续

```java
int i = 1;
do {
    System.out.println("HelloWorld");
    i++;
} while (i <= 5);
```

## 三种循环的区别

> **三种循环的区别**:

- for循环和while循环先判断条件是否成立，然后决定是否执行循环体（先判断后执行）
- do...while循环先执行一次循环体，然后判断条件是否成立，是否继续执行循环体（先执行后判断）

> **for和while的区别**：

- 条件控制语句所控制的自增变量，因为归属for循环的语法结构中，在for循环结束后，就不能再次被访问到了
- 条件控制语句所控制的自增变量，对于while循环来说不归属其语法结构中，在while循环结束后，该变量还可以继续使用

> **死循环格式**：

```java
for (; ;) {}
while (true) {}
do {} while (true);
```

> while 的死循环格式是最常用的
> 在命令提示符窗口中可以按下ctrl+c强制停止死循环

## 跳转控制语句

- `continue` 跳过某循环体执行，继续下一次的执行  使用是基于条件控制的
- `break` 终止循环体执行，结束当前整个循环  使用是基于条件控制的

```java
for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
    continue;
    }
    System.out.println(i);
}
System.out.println("-------");
for (int j = 1; j <= 5; j++) {
    if (j % 2 == 0) {
        break;
    }
    System.out.println(j);
}
```

## 循环嵌套

循环语句中包含循环语句称为循环嵌套

```java
//需求：在控制台输出一天的小时和分钟
for (int hour = 0; hour < 24; hour++) {
    for (int minute = 0; minute < 60; minute++) {
        System.out.println(hour + "时" + minute + "分");
    }
    System.out.println("-------");
}
```

## Random

作用：用于产生一个随机数

> 使用步骤：

1. 导包

```java
import java.util.Random;
导包动作必须出现类定义的上面
```

2. 创建对象

```java
Random r = new Random();
上面这个格式里面，r是变量名，可以变，其他的都不允许变
```

3. 获取随机数

```java
int number = r.nextInt(10); // 获取数据的范围[0,10)，包括0但不包括10
上面这个格式里面，number是变量名，可以变，数字10可以变，其他的都不允许变
```

```java
Random r = new Random();
//用循环获取10个随机数
for (int i=0;i<10;i++) {
    int number = r.nextInt(10);
    System.out.println(number);
}

//需求：获取一个1-100之间的随机数
int x = r.nextInt(100) + 1;
System.out.println(x);
```

### 案例：猜数字

需求：程序自动生成一个1-100之间的数字，使用程序实现猜出这个数字是多少？

> 当猜错的时候，根据不同情况给出相应提示：

- 如果猜的数字比真实数字大，提示你猜的数据大了
- 如果猜的数字比真实数字小，提示你猜的数据小了
- 如果猜的数字与真实数字相等，提示恭喜你猜中了

```java
Random r = new Random();
int number = r.nextInt(100) + 1;
while(true) {
    Scanner sc = new Scanner(System.in);
    System.out.println("请输入你要猜的数字：");
    int guessNumber = sc.nextInt();
    if (guessNumber > number) {
        System.out.println("你猜的数字" + guessNumber + "大了");
    } else if (guessNumber < number) {
        System.out.println("你猜的数字" + guessNumber + "小了");
    } else {
        System.out.println("恭喜你猜中了！");
        break;
    }
}
```

# 数组

## 数组定义格式

数组是一种用于存储==多个相同类型==数据的存储模型

- 格式一：数据类型 [] 变量名
- 定义了一个int类型的数组，数组名是arr
- 范例：
  
```java
int [] arr
```

- 格式二：数据类型 变量名 []
- 定义了一个int类型的变量，变量名是arr数组
- 范例：

~~~java
int arr []
~~~

> 推荐使用格式一定义数组。

## 数组初始化之动态初始化

java中的数组必须先初始化，然后才能使用

所谓初始化，就是为数组中的数组元素分配内存空间，并为每个数组元素赋值

动态初始化：初始化时只指定数组长度，由系统为数组分配初始值

- 格式： 数据类型 [] 变量名 = 数据类型[数组长度];
- 范例：

```java
int [] arr = new int[3];
```

## 数组元素访问

- 数组变量访问方式
- 格式： 数组名

- 数组内部保存的数据的访问方式
- 格式： 数组名[索引]

- 索引是数组中数据的编号方式
- 作用：索引用于访问数组中的数据使用，数组名[索引]等同于变量名，是一种特殊的变量名
- 特征：
    1. 索引聪从0开始
    2. 索引是连续的
    3. 索引逐一增加，每次加1

```java
int[] arr = new int[3];
//输出数组名
System.out.println(arr);
//输出数组中的元素
System.out.println(arr[0]);
System.out.println(arr[1]);
System.out.println(arr[2]);
```

## 内存分配

### java中的内存分配

java程序在运行时，需要在内存中分配空间，为了提高运算效率，就对空间进行了不同区域的划分，因为每一片区域都有特定的处理数据方式和内存管理方式。

数组在初始化时，会为内存空间添加初始值：

- 整数：默认值0
- 浮点数：默认值0.0
- 布尔值：默认值false
- 字符：默认值是空字符
- 引用数据类型：默认值是null

1. 栈内存：存储局部变量
2. 局部变量：定义在方法中的变量，如arr。使用完毕，立即消失。
3. 堆内存：存储new出来的内容（实体，对象）
4. 每一个new出来的东西都有一个地址值，使用完毕，会在垃圾回收器空闲时被回收

## 数组初始化之静态初始化

**静态初始化**：初始化时指定每个数组元素的初始值，由系统决定数组长度

- 格式：数据类型[] 变量名 = new 数据类型[] {数据1，数据2，数据3，......};

```java
int[] arr = new int[] {1,2,3,......};
```

- 简化格式：数据类型[] 变量名 = {数据1，数据2，数据3，......};

```java
int[] arr = [1,2,3,......];
```

```java
int[] arr = {1, 2, 3};
System.out.println(arr);
System.out.println(arr[0]);
System.out.println(arr[1]);
System.out.println(arr[2]);
```

## 数组操作的两个常见小问题

- 索引越界：访问了数组中不存在的索引对应的元素，造成索引越界问题
- 空指针异常：访问的数组已经不再指向堆内存的数据，造成空指针异常

```java
int[] arr = new int[3];
System.out.println(arr[3]); // 索引越界

int[] arr2 = new int[3];
arr2 = null;
System.out.println(arr2[0]); // 空指针异常
```

## 数组常见操作

### 数组遍历

```java
int[] arr = {11, 22, 33, 44, 55};
for (int x = 0; x <= 4; x++) {
    System.out.println(arr[x]);
}
```

### 数组元素数量

- 格式：数组名.length
- 范例：

```java
arr.length
```

```java
int[] arr2 = {11, 22, 33, 44, 55};
for (int x = 0; x < arr.length; x++) {
    System.out.println(arr2[x]);
}
```

### 最值

```java
int[] arr3 = {12, 45, 98, 73, 60};
int max = arr3[0];
int min = arr3[0];
for (int y = 1; y < arr.length; y++) {
    if (arr3[y] > max) {
        max = arr3[y];
    };
    if (arr3[y] < min) {
        min = arr3[y];
    }
}
System.out.println("最大值为：" + max);
System.out.println("最小值为：" + min);
```

# 方法

## 方法概论

方法是将具有独立功能的代码块组织成为一个整体，使其具有特殊功能的代码集。

> **注意**：

1. 方法必须先创建才可以使用，该过程称为方法定义
2. 方法创建后并不是直接运行的，需要手动使用后才执行，该过程称为方法调用

## 方法的定义和调用

- 方法定义格式：

```java
public static void 方法名 () {
    方法体;
}
```

- 方法调用格式：

```java
方法名();
```

```java
//需求：定义一个方法，在方法中定义一个变量，判断该数是否是偶数
//调用方法
isEvenNumber();
```

```java
public static void isEvenNumber() {
    //定义变量
    int number = 10;
    //判断该数据是否是偶数
    if (number % 2 == 0) {
        System.out.println(true);
    } else {
        System.out.println(false);
    }
}
```

### 方法练习

需求：设计一个方法，用于打印两个数中的较大数。

```java
public static void getMax() {
    int a = 10;
    int b = 20;
    if (a > b) {
        System.out.println(a);
    } else {
        System.out.println(b);
    }
}

public static void main(String[] args) {
    getMax();
}
```

## 带参数方法的定义和调用

- 带参数方法的定义格式：

```java
public static void 方法名 (参数) {... ...}
```

- 单个参数： 

```java
public static void 方法名 (数据类型 变量名) {}
```

- 多个参数：

```java
public static void 方法名 (数据类型 变量名， 数据类型 变量名， ......) {}
```

> 注意：

1. 方法定义时，参数中的==数据类型==与==变量名==都不能少，缺少任意一个程序将报错
2. 方法定义时，多个参数之间使用逗号分隔

---

- 带参数方法的调用格式：

```java
方法名 (参数);
```

- 单个参数： 

```java
方法名 (变量名/常量值);
```

- 多个参数： 

```java
方法名 (变量名1/常量值1，变量名2/常量值2);
```

> 注意：

1. 方法调用时，参数的数量与类型必须与方法定义中的设置相匹配，否则程序将报错

---

```java
// 常量值调用
isEvenNumber(10);

// 变量调用
int number = 9;
isEvenNumber(number);
```

```java
public static void isEvenNumber(int number) {
    if (number % 2 == 0) {
        System.out.println(true);
    } else {
        System.out.println(false);
    }
}
```

### 形参和实参

- 形参：方法定义中的参数
- 实参：方法调用中的参数

### 带参数方法练习

需求：设计一个方法，用于打印两个数中的较大数，数据来自于方法参数

```java
public static void main(String[] args) {
    getMax(10, 20);

    int a = 10;
    int b = 20;
    getMax(a, b);
}

public static void getMax(int a, int b) {
    if (a > b) {
        System.out.println(a);
    } else {
        System.out.println(b);
    }
}
```

## 带返回值方法的定义和调用

> 带返回值方法的定义格式：

```java
public static _1至75.数据类型 方法名 (参数) {
    return 数据;
}
```

> 注意： 方法定义时，return后面的返回值与方法定义上的数据类型要匹配，否则程序将报错

---

> 带返回值方法调用的格式：
- 格式1：

```java
方法名 (参数);
```

- 格式2：

```java
数据类型 变量名 = 方法名 (参数);
```

> 注意： 方法的返回值通常会使用变量接收，否则返回值将无意义

```java
public static void main(String[] args) {
    isEvenNumber(10);

    boolean flag = isEvenNumber(10);
    System.out.println(flag);
}

public static boolean isEvenNumber(int number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
```

### 带返回值方法练习

需求：设计一个方法可以获取两个数的较大值，数据来自于参数

```java
public static void main(String[] args) {
    int max = getMax(10, 20);
    System.out.println(max);

    System.out.println(getMax(10, 20));
}

public static int getMax(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
```

## 方法的注意事项

1. 方法不能嵌套定义
2. void表示无返回值，可以省略return，也可以单独的书写return，后面不加数据

### 方法的通用格式

格式：

```java
public static 返回值类型 方法名 (参数) {
    方法体;
    return 数据;
}
```

> **定义方法时，要做到两个明确**：

1. 明确返回值类型： 主要是明确方法操作完毕之后是否有数据返回，如果没有，写void；如果有，写对应的数据类型
2. 明确参数： 主要是明确参数的类型和数量

> **调用方法时**：

1. void类型的方法,直接调用即可
2. 非void类型的方法，推荐用变量接收调用

## 方法重载

> **方法重载指同一个类中定义多个方法之间的关系，满足下列条件的多个方法互相构成重载**：

1. 多个方法在同一个类中
2. 多个方法具有相同的方法名
3. 多个方法的参数不相同，类型不同或者数量不同

> **方法重载的特点**：

1. 重载仅对应方法的定义，与方法调用无关，调用方式参照标准格式
2. 重载仅针对同一个类中方法的名称与参数进行识别，与返回值无关，换句话说不能通过返回值来判定两个方法是否相互构成重载

```java
public static void main(String[] args) {
    int result = sum(10, 20);
    System.out.println(result);

    double result2 = sum(10.0, 20.0);
    System.out.println(result2);

    int result3 = sum(10, 20, 30);
    System.out.println(result3);
}

//需求1：求两个int类型数据和的方法
public static int sum(int a, int b) {
    return a + b;
}

//需求2：求两个double类型数据和的方法
public static double sum(double a, double b) {
    return a + b;
}

//需求3：求三个int类型数据和的方法
public static int sum(int a, int b, int c) {
    return a + b + c;
}
```

### 方法重载练习

需求：使用方法重载的思想，设计比较两个整数是否相同的方法，兼容全整数类型（byte，int，short，long）

```java
public static void main(String[] args) {
    //需求：使用方法重载的思想，设计比较两个整数是否相同的方法，兼容全整数类型（byte，int，short，long）
    System.out.println(compare(10, 20));
    System.out.println(compare((byte) 10, (byte) 20));
    System.out.println(compare((short) 10, (short) 20));
    System.out.println(compare(10L, 20L));
}

public static boolean compare(int a, int b) {
    System.out.println("int");
    return a == b;
}

public static boolean compare(short a, short b) {
    System.out.println("short");
    return a == b;
}

public static boolean compare(byte a, byte b) {
    System.out.println("byte");
    return a == b;
}

public static boolean compare(long a, long b) {
    System.out.println("long");
    return a == b;
}
```

## 方法的参数传递

遂于基本数据类型的参数，形式参数的改变，不影响实际参数的值

```java
public static void main(String[] args) {
    int number = 100;
    System.out.println("调用change方法前：" + number);
    
    change(number);
    System.out.println("调用change方法后：" + number);
}
public static void change(int number){
    number = 200;
}
```

### 方法参数传递引用类型

对于引用类型的参数，形式参数的改变，影响实际参数的值

```java
public static void main(String[] args) {
    int[] arr = {10, 20, 30};
    System.out.println("调用change方法前：" + arr[1]);
    
    change(arr);
    System.out.println("调用change方法后：" + arr[1]);
}

public static void change(int[] arr) {
    arr[1] = 200;
}
```

### 案例：数组遍历

需求：设计一个方法用于数组遍历，要求遍历的结果是在一行上的。

```java
public static void main(String[] args) {
    int[] arr = {11, 22, 33, 44, 55};
    arr_sort(arr);
}

public static void arr_sort(int[] arr) {
    System.out.print("{");
    for (int x = 0; x < arr.length; x++) {
        if (x == arr.length - 1) {
            System.out.print(arr[x]);
        } else {
            System.out.print(arr[x] + ", ");
        }
    }
    System.out.print("}");
}
```

> System.out.println("内容"); 输出内容并换行
> System.out.print("内容"); 输出内容不换行
> System.out.println(); 不输出内容，起换行作用

### 案例：数组最大值

需求：设计一个方法用于获取数组中元素的最大值，调用方法并输出结果

```java
public static void main(String[] args) {
    int[] arr = {11, 22, 33, 44, 55};
    getMax(arr);
}

public static void getMax(int[] arr) {
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    System.out.println("数组中最大值为：" + max);
}
```

# Debug

Debug是供程序员使用的程序调试工具，它可以用于查看程序的执行流程，也可以用于追踪程序执行过程来调试程序。

> 注意事项：
> 如果数据来自于键盘输入，一定要记住输入数据，不然就不能继续往下看了。

# 基础知识练习

## 减肥计划if版

需求：输入星期数，显示今天的减肥活动
        
周一：跑步
周二：游泳
周三：慢走
周四：动感单车
周五：拳击
周六：爬山
周日：好好吃一顿

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入一个星期数（1-7）：");
int week = sc.nextInt();
if (week < 1 | week > 7) {
    System.out.println("您输入的星期数有误");
} else if (week == 1) {
    System.out.println("跑步");
} else if (week == 2) {
    System.out.println("游泳");
} else if (week == 3) {
    System.out.println("慢走");
} else if (week == 4) {
    System.out.println("动感单车");
} else if (week == 5) {
    System.out.println("拳击");
} else if (week == 6) {
    System.out.println("爬山");
} else if (week == 7) {
    System.out.println("好好吃一顿");
}
```

## 减肥计划switch版

需求：输入星期数，显示今天的减肥活动
        
周一：跑步
周二：游泳
周三：慢走
周四：动感单车
周五：拳击
周六：爬山
周日：好好吃一顿

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入一个星期数（1-7）：");
int week = sc.nextInt();
switch (week) {
    case 1:
        System.out.println("跑步");
        break;
    case 2:
        System.out.println("游泳");
        break;
    case 3:
        System.out.println("慢走");
        break;
    case 4:
        System.out.println("动感单车");
        break;
    case 5:
        System.out.println("拳击");
        break;
    case 6:
        System.out.println("爬山");
        break;
    case 7:
        System.out.println("好好吃一顿");
        break;
    default:
        System.out.println("您输入的星期数有误");
}
```

## 逢七过

需求：朋友聚会的时候可能会玩一个游戏：_1至75.逢七过。规则是：从任意一个数字开始报数，当你要报的数字包含7或者是7的倍数时都要说：过。为了帮助大家更好的玩这个游戏，这里我们直接在控制台打印出1-100之间满足逢七过规则的数据。

```java
System.out.print("1-100内要喊过的数字有：");
for (int guo = 1; guo <=100; guo++) {
    if (guo % 7 == 7 | guo / 10 % 10 == 7 | guo % 7 == 0) {
        System.out.print(guo + " ");
    }
}
```

## 不死神兔

需求：有一对兔子，从出生后第三个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问第20个月的兔子对数为多少？

```java
int[] arr = new int[20];
arr[0] = 1;
arr[1] = 1;
for (int x = 2; x < arr.length; x++) {
    arr[x] = arr[x - 2] + arr[x - 1];
}
System.out.println("第二十个月兔子的对数为：" + arr[19]);
```

## 百钱百鸡

需求：我国古代数学家张邱建在《算经》一书中提出的数学问题：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？

```java
for (int x = 0; x <= 20; x++) {
    for (int y = 0; y <= 33; y++) {
        int z = 100 - x - y;
        if (z % 3 == 0 && 5 * x + 3 * y + z / 3 == 100) {
            System.out.println("鸡翁：" + x + "只");
            System.out.println("鸡母：" + y + "只");
            System.out.println("鸡雏：" + z + "只");
        }
    }
}
```

## 数组元素求和

需求：有这样一个数组，元素是{68，27，95，88，171，996，51，210}.求出该数组中满足要求的元素和，要求是：求和的元素个位和十位都不能是7，并且只能是偶数。

```java
int[] arr = {68, 27, 95, 88, 171, 996, 51, 210};
int sum = 0;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] % 10 != 7 && arr[i] / 10 % 10 != 7 && arr[i] % 2 == 0) {
        sum += arr[i];
    }
}
System.out.println("和为：" + sum);
```

## 数组内容相同

需求：设计一个方法，用于比较两个数组的内容是否相同

```java
public static void main(String[] args) {
    int[] arr = {11, 22, 33, 44, 55};
    int[] arr2 = {11, 22, 33, 44, 55};
    int[] arr3 = {11, 22, 33, 44, 5};
    
    boolean result = arrCompare(arr, arr2);
    System.out.println(result);
    System.out.println("--------");

    boolean flag = arrCompare(arr, arr3);
    System.out.println(flag);
}

public static boolean arrCompare(int[] arr, int[] arr2) {
    if (arr.length != arr2.length) {
        return false;
    }
    for (int x = 0; x < arr.length; x++) {
        if (arr[x] != arr2[x]) {
            return false;
        }
    }
    return true;
}
```

## 查找

需求：已知一个数组arr = {19，28，37，46，50}，键盘录入一个数据，查找该数据在数组中的索引，并在控制台输出找到的索引值。

```java
int[] arr = {19, 28, 37, 46, 50};
Scanner sc = new Scanner(System.in);
System.out.println("请输入您要查找的值：");
int a = sc.nextInt();
int index = -1;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
        index = i;
        System.out.println("您查找的值在数组中的索引值为：" + index);
        break;
    }
}
System.out.println("您查找的值在数组中不存在");
```

## 反转

需求：已知一个数组arr = {19,28,37,46,50};用程序实现把数组中的元素值交换，交换后的数组arr = {50,46,37,28,19};并在控制台输出交换后的数组元素。

```java
public static void main(String[] args) {
    int[] arr = {19, 28, 37, 46, 50};
    for (int start = 0, end = arr.length - 1; start <= end; start++, end--) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
    printArray(arr);
}

public static void printArray(int[] arr) {
    System.out.print("[");
    for (int i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            System.out.print(arr[i]);
        } else {
            System.out.print(arr[i] + ", ");
        }
    }
    System.out.print("]");
}
```

## 评委打分

需求：在编程竞赛中，有6个评委为参赛的选手打分，分数为0-100的整数分。
选手的最后得分为：去掉一个最高分和一个最低分后的4个评委平均值（不考虑小数部分）。

```java
public static void main(String[] args) {
    int[] arr = new int[6];
    Scanner sc = new Scanner(System.in);
    for (int x = 0; x < 6; x++) {
        System.out.println("请输入第" + (x + 1) + "位评委的打分：");
        arr[x] = sc.nextInt();
    }
    printArray(arr);
    int max = getMax(arr);
    int min = getMin(arr);
    int sum = getSum(arr);
    int score = (sum - max - min) / (arr.length - 2);
    System.out.println();
    System.out.println("选手的最终得分为：" + score);
}

public static void printArray(int[] arr) {
    System.out.print("[");
    for (int i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            System.out.print(arr[i]);
        } else {
            System.out.print(arr[i] + ", ");
        }
    }
    System.out.print("]");
}

public static int getMax(int[] arr) {
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

public static int getMin(int[] arr) {
    int min = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

public static int getSum(int[] arr) {
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
```

# 面向对象基础

## 类和对象

### 什么是类

类是对现实生活中一类具有==共同属性==和==行为==的事物的抽象。

> **类的特点**：

- 类是对象的数据类型
- 类是具有相同属性和行为的一组对象的集合

### 什么是对象的属性

**属性**：对象具有的各种特征，每个对象的每个==属性==都拥有特定的==值==。

### 什么是对象的行为

**行为**：对象能够执行的操作。

### 类和对象的关系

- **类**：类是对现实生活中一类具有共同属性和行为的事物的抽象
- **对象**：是能够看得到摸得着的真实存在的实体

==**类是对象的抽象，对象是类的实体**==

### 类的定义

类的重要性：是 Java 程序的基本组成单位。

> 类的组成：==属性==和==行为==

- 属性：在类中通过==成员变量==来体现（类中方法外的变量）
- 行为：在类中通过==成员方法==来体现（和前面的方法相比去掉static关键字即可）

> 类的定义步骤：

1. 定义类
2. 编写类的成员变量
3. 编写类的成员方法

```java
class Phone {
    String brand;
    int price;
    public void call() {
        System.out.println("打电话");
    }
    public void sentMessage() {
            System.out.println("发短信");
    }
}
```

### 对象的使用

**创建对象**

- 格式：

```java
类名 对象名 = new 类名();
```

- 范例：

```java
Phone p = new Phone();
```

---

**使用对象**

1. 使用成员变量
   - 格式：
    ```java
    对象名.变量名
    ```
    - 范例：
    ```java
    p.brand
    ```
2. 使用成员方法
   - 格式：
    ```java
    对象名.方法名()
    ```
    - 范例：
    ```java
    p.call()
    ```

### 案例：学生类

需求：首先定义一个学生类，然后定义一个学生测试类，在学生测试类中通过对象完成成员变量和成员方法的使用

```java
class Student {
    String name;
    int age;
    public void study() {
        System.out.println("好好学习，天天向上");
    }
    public void doHomework() {
        System.out.println("键盘敲烂，月薪过万");
    }
}
```

```java
public static void main(String[] args) {
    Student s = new Student();
    System.out.println(s.name + "," + s.age);
    s.name = "林青霞";
    s.age = 30;
    System.out.println(s.name + "," + s.age);
    s.study();
    s.doHomework();
}
```

## 成员变量和局部变量

- 成员变量：类中方法外的变量
- 局部变量：方法中的变量

**成员变量和局部变量的区别**：

|   区别   |     类中位置不同     | 内存中位置不同 |                  生命周期不同                  |                  初始化值不同                  |
| :------: | :------------------: | :------------: | :--------------------------------------------: | :--------------------------------------------: |
| 成员变量 |      类中方法外      |     堆内存     |   随着对象的存在而存在，随着对象的消失而消失   |                有默认的初始化值                |
| 局部变量 | 方法内或者方法声明上 |     栈内存     | 随着方法的调用而存在，随着方法的调用完毕而消失 | 没有默认的初始化值，必须先定义，赋值，才能使用 |

## 封装

### private 关键字

> private：

- 是一个权限修饰符
- 可以修饰成员（成员变量和成员方法）
- 作用是保护成员不被别的类使用，被`private`修饰的成员在本类中才能访问

> 针对`private`修饰的成员变量，如果需要被其它类使用，提供相应的操作：

1. 提供“`get变量名()`”方法，用于获取成员变量的值，方法用`public`修饰
2. 提供“`set变量名(参数)`”方法，用于设置成员变量的值，方法用`public`修饰

### private 关键字的使用

```java
class Student1 {
    private String name;
    private int age;

    public void setName(String n) {
        name = n;
    }

    public String getName() {
        return name;
    }

    public void setAge(int a) {
        age = a;
    }

    public int getAge() {
        return age;
    }
    public void show() {
        System.out.println(name + "," + age);
    }
}
```

```java
public static void main(String[] args) {
    Student1 s = new Student1();
    s.setName("林青霞");
    s.setAge(30);
    s.show();

    System.out.println(s.getName() + "---" + s.getAge());
    System.out.println(s.getName() + "," + s.getAge());
}
```

### this 关键字

- `this`修饰的变量用于指代成员变量
  - 方法的形参如果与成员变量同名，不带`this`修饰的变量指的是形参，而不是成员变量
  - 方法的形参没有与成员变量同名，不带`this`修饰的变量指的是成员变量
- 什么时候使用`this`？ —— ==解决局部变量隐藏成员变量==
- `this` 代表所在类的对象引用
  - 记住：==方法被哪个对象调用，`this` 就代表那个对象==

### 封装

> **封装概述**：

- 是面向对象三大特征之一（==封装、继承、多态==）
- 是面向对象编程语言对客观世界的模拟，客观世界里成员变量都是隐藏在对象内部的，外界是无法直接操作的

> **封装原则**：

- 将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问成员变量`private`，提供对应的`getXxx()`/`setXxx()`方法

> **封装好处**：

- 通过方法来控制成员变量的操作，提高了代码的安全性
- 把代码用方法进行封装，提高了代码的复用性

## 构造方法

构造方法是一种特殊的方法

作用：创建对象

格式：

```java
public class 类名{
    修饰符 类名(参数){
    }
}
```

功能：主要是完成对象数据的初始化

> 注意事项：

1. 构造方法的创建
    - 如果没有定义构造方法，系统将给出一个==默认==的==无参数构造方法==
    - 如果定义了构造方法，系统将不再提供默认的无参构造方法

2. 构造方法的重载
    - 如果定义了带参构造方法，还要使用无参数构造方法，就必须再写一个无参数构造方法

3. 推荐的使用方式：
    - ==无论是否使用，都手工书写无参数构造方法==

### 标准类制作

1. 成员变量： 使用`private`修饰

2. 构造方法：
    - 提供一个无参构造方法
    - 提供一个带多个参数的构造方法

3. 成员方法：
    - 提供每一个成员变量对应的`setXxx()`/`getXxx()`
    - 提供一个显示对象信息的`show()`

4. 创建对象并为其成员变量赋值的两种方式
    - 无参构造方法创建对象后使用`setXxx()`赋值
    - 使用带参构造方法直接创建带有属性值的对象

```java
public class Student {
    //成员变量
    private String name;
    private int age;

    //构造方法
    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    //成员方法
    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void show() {
        System.out.println(name + "," + age);
    }
}
```

```java
public class test {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.setName("林青霞");
        s1.setAge(30);
        s1.show();

        Student s2 = new Student("林青霞", 30);
        s2.show();
    }
}
```

# 字符串

## API

API（Application Programing Interface）: 应用程序编程接口

> 注意：

1. 调用方法的时候，如果方法有明确的返回值，我们用变量接收
2. 可以手动完成，也可以使用快捷键的方式完成（CTRL+ALT+V）

### API 使用练习

需求：按照帮助文档的使用步骤学习Scanner类的使用，并实现键盘录入一个字符串，最后输出在控制台

```java
public class api {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入你想打印的话：");
        String line = sc.nextLine();
        System.out.println(line);
    }
}
```

## String

### String 构造

String类在==java.lang==包下，所以使用时不需要导包

==String==类代表==字符串==，java程序中的所有字符串文字（例如："abc"）都被实现为此类的实例。也就是说，==Java程序中所有的双引号字符串，都是String类的对象==。

> 字符串的特点：

- 字符串不可变，它们的值在创建后不能被更改
- 虽然String的值是不可变的，但是它们可以被共享
- 字符串效果上相当于字符数组（==char[]==），但是底层原理是字节数组（==byte[]==）（JDK8及以前是字符数组，JDK9及以后是字节数组）

> 构造方法：

|         构造方法          |                   描述                    |
| :-----------------------: | :---------------------------------------: |
|      public String()      |  创建一个空白字符串对象，不含有任何内容   |
| public String(char[] chs) |   根据字符数组的内容，来创建字符串对象    |
| public String(byte[] bys) |   根据字节数组的内容，来创建字符串对象    |
|     String s = "abc";     | 直接赋值的方式创建字符串对象，内容就是abc |

> 推荐使用**直接赋值**的方式得到字符串对象

```java
String s1 = new String();
System.out.println("s1:" + s1); // s1:

char[] chs = {'a', 'b', 'c'};
String s2 = new String(chs);
System.out.println("s2:" + s2); // s2:abc

byte[] bys = {97, 98, 99};
String s3 = new String(bys);
System.out.println("s3:" + s3); // s3:abc

String s4 = "abc";
System.out.println("s4:" + s4); // s4:abc
```

### String 对象特点

1. 通过`new`创建的字符串对象，==每一次`new`都会申请一个内存空间，虽然内容相同，但是地址值不同==
2. 以”“方式给出的字符串，只要==字符序列相同（顺序和大小写）==，无论在程序代码中出现几次，JVM都==只会建立一个String对象==，并在字符串池中维护

### 字符串比较

> 使用 `==` 作比较：

- 基本类型：比较的是数据值是否相同
- 引用类型：比较的是地址值是否相同

> 使用 `equals()` 方法比较：

- 字符串是对象，它比较内容是否相同，是通过一个方法来实现的，这个方法叫`equals()`
- `public boolean equals(Object anObject)`:将此字符串与指定对象进行比较。由于我们比较的是字符串对象，所以参数直接传递一个字符串

### 案例：用户登录

需求：已知用户名和密码，请用程序实现模拟用户登录。总共给三次机会，登录之后，给出相应的提示。

```java
import java.util.Scanner;

public class 用户登录 {
    public static void main(String[] args) {
        String username = "root";
        String password = "123456";

        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < 3; i++) {

            System.out.println("请输入用户名：");
            String name = sc.nextLine();

            System.out.println("请输入密码：");
            String pasw = sc.nextLine();

            if (name.equals(username) && pasw.equals(password)) {
                System.out.println("登录成功！");
                break;
            } else {
                if (2 - i == 0) {
                    System.out.println("你的账户被锁定，请与管理员联系");
                } else {
                    System.out.println("登录失败，你还有" + (2 - i) + "次机会");
                }
            }

        }
    }
}
```

### 案例：遍历字符串

需求：键盘录入一个字符串，使用程序实现在控制台遍历该字符串。

```java
import java.util.Scanner;

public class 遍历字符串 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个字符串：");
        String s = sc.nextLine();
        // s.length()获取字符串长度
        for (int i = 0; i < s.length(); i++) {
            // s.charAt()获取指定索引处的字符
            System.out.println(s.charAt(i));
        }
    }
}
```

### 案例：统计字符次数

需求：键盘录入一个字符串，统计该字符串中大写字母字符，小写字母字符，数字字符出现的次数（不考虑其他字符）。

```java
import java.util.Scanner;

public class 统计字符次数 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个字符串：");
        String line = sc.nextLine();

        int bigCount = 0;
        int smallCount = 0;
        int numberCount = 0;

        for (int i = 0; i < line.length(); i++) {
            char ch = line.charAt(i);

            if (ch >= 'A' && ch <= 'Z') {
                bigCount++;
            } else if (ch >= 'a' && ch <= 'z') {
                smallCount++;
            } else if (ch >= '0' && ch <= '9') {
                numberCount++;
            }
        }

        System.out.println("大写字母：" + bigCount + "个");
        System.out.println("小写字母：" + smallCount + "个");
        System.out.println("数字：" + numberCount + "个");
    }
}
```

### 案例：字符串拼接

需求：定义一个方法，把int数组中的数据按照指定的格式拼接成一个字符串返回，调用该方法，并在控制台输出结果。例如：数组为int[] arr = {1,2,3};，执行该方法后输出的结果为：[1, 2, 3]。

```java
public class 拼接字符串 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        String s = arrayToStrijng(arr);
        System.out.println(s); // [1, 2, 3]
    }

    public static String arrayToStrijng(int[] arr) {
        String s = "";
        s += "[";

        for (int i = 0; i < arr.length; i++) {
            if (i == arr.length - 1) {
                s += arr[i];
            } else {
                s += arr[i];
                s += ", ";
            }
        }

        s += "]";
        return s;
    }
}
```

### 案例：字符串反转

需求：定义一个方法，实现字符串反转。键盘录入一个字符串，调用该方法后，在控制台输出结果。
例如：键盘录入abc，输出结果cba。

```java
import java.util.Scanner;

public class 字符串反转 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个字符串：");
        String line = sc.nextLine();

        String s = stringReverse(line);

        System.out.println("字符串反转结果为：" + s);
    }

    public static String stringReverse(String s) {
        String ss = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            ss += s.charAt(i);
        }
        return ss;
    }
}
```

### 通过帮助文档查看 String 中的方法

|                 方法名                 |                       描述                       |
| :------------------------------------: | :----------------------------------------------: |
| public bollean equals(Object anObject) | 比较字符串的内容，严格区分大小写（用户名和密码） |
|     public char charAt(int index)      |             返回指定索引处的 char 值             |
|          public int length()           |                返回此字符串的长度                |

## StringBuilder

- StringBuilder是一个可变的字符串类，我们可以把它看成是一个容器。
- 这里的可变指的是StringBuilder对象中的内容是可变的。

> String 和 StringBuilder 的区别：

- String：内容是不可变的
- StringBuilder：内容是可变的

> 构造方法：

|             构造方法             |                    描述                    |
| :------------------------------: | :----------------------------------------: |
|      public StringBuilder()      | 创建一个空白可变字符串对象，不含有任何内容 |
| public StringBuilder(String str) |   根据字符串的内容，来创建可变字符串对象   |

```java
StringBuilder sb = new StringBuilder();
System.out.println("sb:" + sb);
System.out.println("sb.length():" + sb.length());

StringBuilder sb2 = new StringBuilder("hello");
System.out.println("sb2:" + sb2);
System.out.println("sb2.length():" + sb2.length());
```

### StringBuilder 的添加和反转方法

```java
//创建对象
StringBuilder sb = new StringBuilder();

StringBuilder sb2 = sb.append("hello");

System.out.println("sb:" + sb);
System.out.println("sb2:" + sb2);
System.out.println(sb == sb2);

/*sb.append("hello");
sb.append("world");
sb.append("java");
sb.append(100);
    */

//链式编程
sb.append("hello").append("world").append("java").append(100);

System.out.println("sb:" + sb);

sb.reverse();
System.out.println("sb:" + sb);
```

### StringBuilder 和 String 相互转换

1. **StringBuilder转换为String**
    - `public StringToString()`：通过`toString()`就可以实现把StringBuilder转换为String

2. **String转换为StringBuilder**
    - `public StringBuilder(String s)`：通过构造方法就可以实现把String转换为StringBuilder

```java
StringBuilder sb = new StringBuilder();
sb.append("hello");

String s = sb.toString();
System.out.println(s);

String str = "hello";
StringBuilder sb2 = new StringBuilder(str);
System.out.println(sb2);
```

### 案例：拼接字符串

需求：定义一个方法，把int数组中的数据按照指定的格式拼接成一个字符串返回，调用该方法，并在控制台输出结果。例如：数组为int[] arr = {1,2,3};，执行该方法后输出的结果为：[1, 2, 3]。

```java
public static void main(String[] args) {
    int[] arr = {1, 2, 3};

    String s = arrayToString(arr);

    System.out.println("s:" + s);
}

public static String arrayToString(int[] arr) {
    StringBuilder sb = new StringBuilder();
    sb.append("[");
    for (int i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            sb.append(arr[i]);
        } else {
            sb.append(arr[i]).append(", ");
        }
    }
    sb.append("]");
    String s = sb.toString();
    return s;
}
```

### 案例：字符串反转

需求：定义一个方法，实现字符串反转。键盘录入一个字符串，调用该方法后，在控制台输出结果。
例如：键盘录入abc，输出结果cba。

```java
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("请输入一个字符串：");
    String line = sc.nextLine();

    String s = myReverse(line);
    System.out.println("反转后的字符串为：" + s);
}

public static String myReverse(String s) {
    /*StringBuilder sb = new StringBuilder(s);
    sb.reverse();
    String s1 = sb.toString();
    return s1;*/

    return new StringBuilder(s).reverse().toString();
}
```

# 集合基础

## 集合概述

编程的时候如果要存储多个数据，使用长度固定的数组存储格式，不一定能满足我们的需求，更适应不了变化的需求。此时，就应该使用==集合==。

> 集合的特点：

- 提供一种存储空间可变的存储模型，存储的数据容量可以发生改变

## ArrayList

```java
ArrayList<E>
```

- 可调整大小的数组实现
- <E>:是一种特殊的数据类型，泛型

- 使用：在出现E的地方用引用数据类型替换即可
- 范例： 

```java
ArrayList<String>,ArrayList<Student>
```

> 构造方法和添加方法：

|                方法名                 |                描述                |
| :-----------------------------------: | :--------------------------------: |
|          public ArrayList()           |        创建一个空的集合对象        |
|        public boolean add(E e)        |   将特定的元素追加到此集合的末尾   |
| public void add(int index, E element) | 在此集合中的特定位置插入指定的元素 |

```java
//public ArrayList()   创建一个空的集合对象
//ArrayList<String> array = new ArrayList<>();

ArrayList<String> array = new ArrayList<String>();

//public boolean add(E e)  将特定的元素追加到此集合的末尾
System.out.println(array.add("hello"));

array.add("hello");
array.add("world");
array.add("java");

//public void add(int index, E element)   在此集合中的特定位置插入指定的元素
array.add(1, "javase");
array.add(3, "javase");

//输出集合
System.out.println("array:" + array);
```

## ArrayList 集合常用方法

|               方法名               |                  描述                  |
| :--------------------------------: | :------------------------------------: |
|  public boolean remove(Object o)   |    删除指定的元素，返回删除是否成功    |
|     public E remove(int index)     | 删除指定索引处的元素，返回被删除的元素 |
| public E set(int index, E element) | 修改指定索引处的元素，返回被修改的元素 |
|      public E get(int index)       |          返回指定索引处的元素          |
|         public int size()          |          返回集合中的元素个数          |

```java
//创建集合
ArrayList<String> array = new ArrayList<String>();

//添加元素
array.add("hello");
array.add("world");
array.add("java");
//public boolean remove(Object o)  删除指定的元素，返回删除是否成功
System.out.println(array.remove("world"));

//public E remove(int index)  删除指定索引处的元素，返回被删除的元素
System.out.println(array.remove(1));

//public E set(int index, E element)  修改指定索引处的元素，返回被修改的元素
System.out.println(array.set(1, "javase"));

//public E get(int index)  返回指定索引处的元素
System.out.println(array.get(0));

//public int size()  返回集合中的元素个数
System.out.println(array.size());

//输出集合
System.out.println("array:" + array);
```

## 案例：存储字符串并遍历

需求：创建一个存储字符串的集合，存储3个字符串元素，使用程序实现在控制台遍历该集合。

```java
ArrayList<String> array = new ArrayList<String>();

array.add("hello");
array.add("world");
array.add("java");

for (int i = 0; i < array.size(); i++) {
    System.out.println(array.get(i));
}
```

## 案例：存储学生对象并遍历

需求：创建一个存储学生对象的集合，存储3个学生对象，使用程序实现在控制台遍历该集合。

```java
public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}
```

```java
public class Demo {
    public static void main(String[] args) {

        //创建集合对象
        ArrayList<Student> array = new ArrayList<Student>();

        //创建学生对象
        Student s1 = new Student("林青霞", 30);
        Student s2 = new Student("风清扬", 33);
        Student s3 = new Student("张曼玉", 18);

        //添加学生对象到集合中
        array.add(s1);
        array.add(s2);
        array.add(s3);

        //遍历集合
        for (int i = 0; i < array.size(); i++) {
            Student s = array.get(i);
            System.out.println(s.getName() + "," + s.getAge());
        }

    }
}
```

## 案例：存储学生对象并遍历升级版

需求：创建一个存储学生对象的集合，存储3个学生对象，使用程序实现在控制台遍历该集合，学生的姓名和年龄来自键盘录入。

```java
public class Student {
    private String name;
    private String age;

    public Student() {
    }

    public Student(String name, String age) {
        this.name = name;
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getAge() {
        return age;
    }
}
```

```java
public class Demo {
    public static void main(String[] args) {

        ArrayList<Student> array = new ArrayList<Student>();

        /*Scanner sc = new Scanner(System.in);
        System.out.println("请输入学生姓名：");
        String name = sc.nextLine();
        System.out.println("请输入学生的年龄：");
        String age = sc.nextLine();

        Student s = new Student();
        s.setName(name);
        s.setAge(age);

        array.add(s);*/

        addStudent(array);
        addStudent(array);
        addStudent(array);

        for (int i = 0; i < array.size(); i++) {
            Student s = array.get(i);
            System.out.println(s.getName() + "," + s.getAge());
        }
    }

    public static void addStudent(ArrayList<Student> array) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入学生姓名：");
        String name = sc.nextLine();
        System.out.println("请输入学生的年龄：");
        String age = sc.nextLine();

        Student s = new Student();
        s.setName(name);
        s.setAge(age);

        array.add(s);
    }
}
```

# 案例：学生管理系统

```java
public class Student {
    //学号
    private String sid;
    //姓名
    private String name;
    //年龄
    private String age;
    //居住地
    private String address;

    public Student() {
    }

    public Student(String sid, String name, String age, String address) {
        this.sid = sid;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
```

```java
import java.util.ArrayList;
import java.util.Scanner;

public class StudentManager {
    public static void main(String[] args) {
        //创建集合对象用于存储学生数据
        ArrayList<Student> array = new ArrayList<Student>();
        //用循环完成再次回到主界面
        while (true) {
            //主界面编写
            System.out.println("--------欢迎来到学生管理系统--------");
            System.out.println("1 添加学生");
            System.out.println("2 删除学生");
            System.out.println("3 修改学生");
            System.out.println("4 查看所有学生");
            System.out.println("5 退出");
            System.out.println("请输入你的选择：");

            //用Scanner实现键盘录入数据
            Scanner sc = new Scanner(System.in);
            String line = sc.nextLine();

            //用switch语句完成操作的选择
            switch (line) {
                case "1":
                    //System.out.println("添加学生");
                    addStudent(array);
                    break;
                case "2":
                    //System.out.println("删除学生");
                    deleteStudent(array);
                    break;
                case "3":
                    //System.out.println("修改学生");
                    updateStudent(array);
                    break;
                case "4":
                    //System.out.println("查看所有学生");
                    findAllStudent(array);
                    break;
                case "5":
                    System.out.println("谢谢使用");
                    //break;
                    System.exit(0); //JVM退出
            }
        }
    }

    //定义一个方法，用于添加学生信息
    public static void addStudent(ArrayList<Student> array) {
        //键盘录入学生对象所需要的数据，显示提示信息，提示要输入何种信息
        Scanner sc = new Scanner(System.in);

        //为了让sid在循环外被访问到
        String sid;

        //为了让程序回到这里，用循环实现
        while (true) {
            System.out.println("请输入学生学号：");
            sid = sc.nextLine();
            boolean flag = isUsed(array, sid);
            if (flag) {
                System.out.println("该学号已被使用，请重新输入");
            } else {
                break;
            }
        }

        System.out.println("请输入学生姓名：");
        String name = sc.nextLine();
        System.out.println("请输入学生年龄：");
        String age = sc.nextLine();
        System.out.println("请输入学生居住地：");
        String address = sc.nextLine();
        //创建学生对象，把键盘录入的数据赋值给学生对象的成员变量
        Student s = new Student();
        s.setSid(sid);
        s.setName(name);
        s.setAge(age);
        s.setAddress(address);
        //将学生对象添加到集合中
        array.add(s);
        //给出添加成功提示
        System.out.println("添加学生成功！");
    }

    //定义一个方法，用于查看所有学生信息
    public static void findAllStudent(ArrayList<Student> array) {
        //判断集合中是否有数据，如果没有显示提示信息
        if (array.size() == 0) {
            System.out.println("无信息，请先添加信息再查询");
            //为了让程序不再往下执行
            return;
        }
        //显示表头信息
        //\t 其实就是tab键的位置
        System.out.println("学号\t\t姓名\t\t年龄\t\t居住地");
        //将集合数据取出来按照对应格式显示学生信息，年龄显示补充“岁”
        for (int i = 0; i < array.size(); i++) {
            Student s = array.get(i);
            System.out.println(s.getSid() + "\t\t" + s.getName() + "\t" + s.getAge() + "岁\t" + s.getAddress());
        }
    }

    //定义一个方法，用于删除学生信息
    public static void deleteStudent(ArrayList<Student> array) {
        //键盘录入要删除的学生学号
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入要删除的学生的学号：");
        String sid = sc.nextLine();
        //遍历集合将对应学生对象从集合中删除
        int index = -1;

        for (int i = 0; i < array.size(); i++) {
            Student s = array.get(i);
            if (s.getSid().equals(sid)) {
                //array.remove(i);
                index = i;
                break;
            }
        }

        if (index == -1) {
            System.out.println("该学号不存在，请重新输入");
        } else {
            array.remove(index);
            //给出删除成功的提示
            System.out.println("删除学生成功!");
        }
    }

    //定义一个方法，用于修改学生信息
    public static void updateStudent(ArrayList<Student> array) {
        //键盘录入要修改的学生学号，显示提示信息
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入要修改的学生的学号：");
        String sid = sc.nextLine();
        //键盘录入要修改的学生信息
        System.out.println("请输入新的学生姓名：");
        String name = sc.nextLine();
        System.out.println("请输入新的学生年龄：");
        String age = sc.nextLine();
        System.out.println("请输入新的学生居住地：");
        String address = sc.nextLine();
        //创建学生对象
        Student s = new Student();
        s.setSid(sid);
        s.setName(name);
        s.setAge(age);
        s.setAddress(address);
        //遍历集合，修改对应的学生信息
        for (int i = 0; i < array.size(); i++) {
            Student student = array.get(i);
            if (student.getSid().equals(sid)) {
                array.set(i, s);
                break;
            }
        }
        //给出修改成功提示
        System.out.println("修改学生成功!");
    }

    //定义一个方法，判断学号是否被使用
    public static boolean isUsed(ArrayList<Student> array, String sid) {
        boolean flag = false;
        for (int i = 0; i < array.size(); i++) {
            Student s = array.get(i);
            if (s.getSid().equals(sid)) {
                flag = true;
                break;
            }
        }
        return flag;
    }
}
```

> ALT+INSERT 根据自己的需要进行选择

# 继承

## 继承概述

继承是面向对象三大特征之一，可以使得子类具有父类的属性和方法，还可以在子类中重新定义，追加属性和方法。

> 继承的格式

- 格式：

```java
public class 子类名 extends 父类名 {}
```

- 范例：

```java
public class Zi extends Fu {}
```

- Fu：父类，也被称为基类、超类
- Zi：子类，也被称为派生类

> 继承中子类的特点：

- 子类可以有父类的内容
- 子类还可以有自己特有的内容

> 继承的好处和弊处

- 继承好处：
    - 提高了代码的==复用性==（多个类相同的成员可以放到同一个类中）
    - 提高了代码的==维护性==（如果方法的代码需要修改，修改一处即可）

- 继承弊端：
    - 继承让类与类之间产生了关系，类的耦合性增强了，当父类发生变化时子类实现也不得不跟着变化，削弱了子类的独立性

> 什么时候使用继承？

- 继承体现的关系： is a
- 假设法：我有两个类A和B，如果它们满足A是B的一种，或者B是A的一种，就说明它们存在继承关系，这个时候就可以考虑使用继承来体现，否则就不能滥用继承

> 继承中变量的访问特点

在子类方法中访问一个变量：

- 子类局部范围找
- 子类成员范围找
- 父类成员范围找
- 如果都没有就报错（不考虑父亲的父亲...）

## Super关键字

- `super`关键字的用法和`this`关键字的用法类似
- `this`：代表本类对象的引用
- `super`：代表父类存储空间的标识（可以理解为父类对象引用）

> 三种用法：

```java
this.成员变量           访问本类成员变量
this(...)             访问本类构造方法
this.成员方法(...)      访问本类成员方法

super.成员变量           访问父类成员变量
super(...)             访问父类构造方法
super.成员方法(...)      访问父类成员方法
```

## 继承中构造方法的访问特点

> 继承中构造方法的访问特点：

- 子类中所有的构造方法默认都会访问父类中无参的构造方法
- 原因：
    1. 因为子类会继承父类中的数据，可能还会使用父类的数据，所以，子类初始化之前，一定要先完成父类数据的初始化
    2. 每一个子类构造方法的第一条语句默认都是：`super()`

> 如果父类中没有无参构造方法，只有带参构造方法：

- 通过使用`super`关键字去显式调用父类的带参构造方法
- 在父类中自己提供一个无参构造方法

推荐：==自己给出无参构造方法==

## 继承中成员方法的访问特点

> 继承中成员方法的访问特点：

- 通过子类对象访问一个方法
    - 子类成员范围找
    - 父类成员范围找
    - 如果都没有就报错（不考虑父亲的父亲...）

## 方法重写

> 方法重写概述：

子类中出现了和父类一模一样的方法声明

> 方法重写的应用：

当子类需要父类的功能，而功能主体子类有自己特有内容时，可以重写父类中的方法，这样，既沿袭了父类的功能，又定义了子类特有的内容

> `@Override`

- 是一个注解
- 可以帮助我们检查重写方法的方法声明的正确性

> 注意事项：

1. 私有方法不能被重写（父类私有成员子类是不能继承的）
2. 子类方法访问权限不能更低（public > 默认 > 私有）

## Java 中继承的注意事项

1. Java 中类只支持单继承，不支持多继承
2. Java 中类支持多层继承

# 修饰符

## 包

> 包的概述和使用：

- 包其实就是文件夹
- 作用：对类进行分类管理

> 包的定义格式：

- 格式：`package 包名;` (多级包用`.`分开)
- 范例： `package com.itheima;`

## 导包

```java
cn.itcast.Teacher t = new cn.itcast.Teacher();
```

```java
import cn.itcast.Teacher;

Teacher t = new Teacher();
```

## 修饰符

### 权限修饰符

|  修饰符   | 同一个类中 | 同一个包中子类无关类 | 不同包的子类 | 不同包的无关类 |
| :-------: | :--------: | :------------------: | :----------: | :------------: |
|  private  |     √      |        &nbsp;        |    &nbsp;    |     &nbsp;     |
|   默认    |     √      |          √           |    &nbsp;    |     &nbsp;     |
| protected |     √      |          √           |      √       |     &nbsp;     |
|  public   |     √      |          √           |      √       |       √        |

### 状态修饰符

- `final`(最终态)
- `static`(静态)

#### final

`final`(最终态) 关键字是最终的意思，可以修饰成员方法，成员变量，类

> `final`修饰的特点：

- 修饰方法：表明该方法是最终方法，==不能被重写==
- 修饰变量：表明该变量是常量，==不能再次被赋值==
- 修饰类：表明该类是最终类，==不能被继承==

> `final`修饰局部变量：
    
- 变量是基本类型：final修饰指的是==基本类型==的==数据值不能发生改变==

```java
final int age = 20;
```

- 变量是引用类型：final修饰指的是==引用类型==的==地址值不能发生改变==，但是地址值里面的==内容是可以发生改变的==

```java
final Student s = new Student();
```

#### static

static 关键字是静态的意思，可以修饰成员变量，成员方法

> static修饰的特点：

1. 被类的所有对象共享         这也是我们判断是否使用静态关键字的条件
2. 可以使用类名调用，也可以使用对象名调用，推荐使用类名调用

> static访问特点

- 非静态的成员方法：
    1. 能访问静态的成员变量
    2. 能访问非静态的成员变量
    3. 能访问静态的成员方法
    4. 能访问非静态的成员方法

- 静态的成员方法：
    1. 能访问静态的成员变量
    2. 能访问静态的成员方法

总结：==静态成员方法只能访问静态成员==

# 多态

## 多态概述

多态：同一个对象，在不同时刻表现出来的不同形态

> 多态的前提和体现：

1. 有继承/实现关系
2. 有方法重写
3. 有父类引用指向子类对象

## 多态中成员访问特点

- 成员变量：编译看左边，执行看左边
- 成员方法：编译看左边，执行看右边

> 为什么成员变量和成员方法的访问不一样呢？

因为成员方法有重写，而成员变量没有。

## 多态的好处和弊端

- 多态的好处： 提高了程序的扩展性
  - 具体体现：定义方法的时候使用父类型作为参数，将来在使用的时候，使用具体的子类型参加操作
- 多态的弊端： 不能使用子类的特有功能

## 多态中的转型

1. 向上转型  从子到父  父类引用指向子类对象

```java
Animal a = new Cat();
```

2. 向下转型  从父到子  父类引用转为子类对象

```java
Cat c = (Cat) a;
```

## 案例：猫和狗

```java
Animal a = new Cat();
a.setName("加菲");
a.setAge(5);
System.out.println(a.getName() + "," + a.getAge());
a.eat();

a = new Cat("加菲", 5);
System.out.println(a.getName() + "," + a.getAge());
a.eat();
```

# 抽象类

## 抽象类概述

在Java中，一个==没有方法体==的方法应该定义为==抽象方法==，而类中如果有==抽象方法==，该类必须定义为==抽象类==。

## 抽象类特点

1. 抽象类和抽象方法必须使用`abstract`关键字修饰
    - `public abstract void class 类名 {}`
    - `public abstract void eat();`
2. ==抽象类中不一定有抽象方法，有抽象方法的类一定是抽象类==
3. 抽象类不能直接实例化，但可以==参照多态的方式，通过子类对象实例化==，这叫**抽象类多态**
4. ==抽象类的子类，要么重写抽象类中的所有抽象方法，要么写成抽象类==

## 抽象类的成员特点

1. 成员变量：可以是变量，也可以是常量
2. 构造方法：有构造方法，但是不能实例化，构造方法的作用是用于子类访问父类数据的初始化
3. 成员方法：
    - 可以有抽象方法：限定子类必须完成某些动作
    - 也可以有非抽象方法：提高代码复用性

## 案例：猫和狗

```java
Animal a = new Cat();
a.setName("加菲");
a.setAge(5);
System.out.println(a.getName() + "," + a.getAge());
a.eat();

System.out.println("--------");

a = new Cat("加菲", 5);
System.out.println(a.getName() + "," + a.getAge());
a.eat();
```

# 接口

## 接口概述

接口就是一种==公共的规范标准==，只要符合规范标准，大家都可以通用。

Java中的接口更多的体现在==对行为的抽象==。

## 接口特点

1. 接口用关键字`interface`修饰 —— `public interface 接口名 {}`
2. 类实现接口用`implements`表示 —— `public class 类名 implements 接口名 {}`
3. 接口不能直接实例化，要想实例化，需要==参照多态的方式，通过实现类对象实例化==，这叫**接口多态**。
    - 多态的形式：具体类多态、抽象类多态、接口多态
    - 多态的前提：有继承或者实现关系；有方法重写；有父（类/接口）引用指向（子/实现）类对象。
4. 接口的实现类：
   - 要么重写接口中的所以抽象方法
   - 要么是抽象类

## 接口的成员特点

1. 成员变量
    - ==只能是常量==
    - 默认修饰符： `public static final`

2. 构造方法
    - ==接口没有构造方法==，因为接口主要是对行为进行抽象的，是没有具体存在。
    - ==一个类如果没有父类，默认继承自Object类==

3. 成员方法
    - ==只能是抽象方法==
    - 默认修饰符： `public abstract`

## 类和接口的关系

> 类和类的关系：

继承关系，只能单继承，但是可以多层继承

```java
public class Zi extends Fu {}
```

> 类和接口的关系：

实现关系，可以单实现，也可以多实现，还可以在继承一个类的同时实现多个接口

```java
public class InterImpl extends Object implements Inter1, Inter2, Inter3 {}
```

> 接口和接口的关系：

继承关系，可以单继承，也可以多继承

```java
public interface Inter3 extends Inter1, Inter2 {}
```

## 抽象类和接口的区别

1. 成员区别：
    - 抽象类 —— 变量，常量；有构造方法；有抽象方法；也有非抽象方法
    - 接口 —— 常量；抽象方法

2. 关系区别：
    - 类与类 —— 继承，单继承
    - 类与接口 —— 实现，可以单实现，也可以多实现
    - 接口与接口 —— 继承，单继承，多继承

3. 设计理念没区别：
    - 抽象类 —— 对类抽象，包括属性、行为
    - 接口 —— 对行为抽象，主要是行为

# 形参和返回值

## 类名作为形参和返回值

- 方法的形参是类名，其实需要的是该类的对象
- 方法的返回值是类名，其实返回的是该类的对象

## 抽象类名作为形参和返回值

- 方法的形参是抽象类名，其实需要的是该抽象类的子类对象
- 方法的返回值是抽象类名，其实返回的是该抽象类的子类对象

## 接口名作为形参和返回值

- 方法的形参是接口名，其实需要的是该接口的实现类对象
- 方法的返回值是接口名，其实返回的是该接口的实现类对象

# 内部类

## 内部类概述

内部类：就是在一个类中定义一个类。

> 内部类的定义格式：

```java
public class 类名 {
    修饰符 class 类名 {

    }
}
```

> 内部类的访问特点：

1. 内部类可以直接访问外部类的成员，包括私有
2. 外部类要访问内部类的成员，必须创建对象

---

```java
public class Demo {
    private int num = 10;

    public class Inner {
        public void show() {
            System.out.println(num);
        }
    }

    public void method() {
        //show();

        Inner i = new Inner();
        i.show();
    }
}
```

## 成员内部类

> 根据内部类在类中定义的位置不同，可以分为如下两种形式：

1. 在类的成员位置：成员内部类
2. 在类的局部位置：局部内部类

> 外部类创建对象使用内部类

- 格式： `外部类名.内部类名 对象名 = 外部类对象.内部类对象`
- 范例：

```java
Outer.Inner oi = new Outer().new Inner();
```

---

```java
public class Outer {
    private int num = 10;

    /*public class Inner {
        public void show() {
            System.out.println(num);
        }
    }*/

    private class Inner {
        public void show() {
            System.out.println(num);
        }
    }

    public void method() {
        Inner i = new Inner();
        i.show();
    }
}
```

```java
public class InnerDemo {
    public static void main(String[] args) {
        //创建内部类对象，并调用方法

        // piublic 修饰的内部类
        // Outer.Inner oi = new Outer().new Inner();
        // oi.show();

        // private 修饰的内部类
        Outer o = new Outer();
        o.method();
    }
}
```

## 局部内部类

- 局部内部类是在方法中定义的类，所以外界是无法直接使用的，需要要在方法内部创建对象并使用。
- 该类可以直接访问外部类的成员，也可以访问方法内的局部变量。

```java
public class Outer {
    private int num = 10;
    public void method() {
        int num2 = 20;
        
        class Inner {
            public void show() {
                System.out.println(num);
                System.out.println(num2);
            }
        }
        
        Inner i = new Inner();
        i.show();
    }
}
```

```java
public class Demo {
    public static void main(String[] args) {
        Outer o = new Outer();
        o.method();
    }
}
```

## 匿名内部类

- 前提：存在一个类或接口，这里的类可以是具体类，也可以是抽象类。
- 格式：

```java
new 类名或者接口名() {
    重写方法;
};
```

- 本质：==是一个继承了该类或者实现了该接口的子类匿名**对象**==。

---

```java
public class Outer {
    public void method() {
        new Inter() {
            @Override
            public void show() {
                System.out.println("匿名内部类");
            }
        }.show();

        new Inter() {
            @Override
            public void show() {
                System.out.println("匿名内部类");
            }
        }.show();

        System.out.println("--------");

        Inter i = new Inter() {
            @Override
            public void show() {
                System.out.println("匿名内部类");
            }
        };

        i.show();
        i.show();
    }
}
```

```java
public interface Inter {
    void show();
}
```

```java
public class Demo {
    public static void main(String[] args) {
        Outer o = new Outer();
        o.method();
    }
}
```

#### 匿名内部类在开发中的使用

```java
JumppingOperator jo = new JumppingOperator();

jo.method(new Jumpping() {
    @Override
    public void jump() {
        System.out.println("猫可以跳高了");
    }
});

jo.method(new Jumpping() {
    @Override
    public void jump() {
        System.out.println("狗可以跳高了");
    }
});
```

# 常用API

## Math

Math包含执行基本数字运算的方法。

> Math类的常用方法：

|                    方法名                    |                      描述                      |
| :------------------------------------------: | :--------------------------------------------: |
|         public static int abs(int a)         |                返回参数的绝对值                |
|     public static double ceil(double a)      | 返回大于或等于参数的最小double值，等于一个整数 |
|     public static double floor(double a)     | 返回小于或等于参数的最大double值，等于一个整数 |
|       public static int round(float a)       |        按照四舍五入返回最接近参数的int         |
|     public static int max(int a, int b)      |            返回两个int值中的较大值             |
|     public static int min(int a, int b)      |            返回两个int值中的较小值             |
| public static double pow(double a, double b) |                返回a的b次幂的值                |
|        public static double random()         |        返回值为double的正值，[0.0,1.0)         |

```java
//public static int abs(int a) 返回参数的绝对值
System.out.println(Math.abs(88));
System.out.println(Math.abs(-88));
System.out.println("--------");

//public static double ceil(double a) 返回大于或等于参数的最小double值，等于一个整数
System.out.println(Math.ceil(12.34));
System.out.println(Math.ceil(12.56));
System.out.println("--------");

//public static double floor(double a) 返回小于或等于参数的最大double值，等于一个整数
System.out.println(Math.floor(12.34));
System.out.println(Math.floor(12.56));
System.out.println("--------");

//public static int round(float a) 按照四舍五入返回最接近参数的int
System.out.println(Math.round(12.34));
System.out.println(Math.round(12.56));
System.out.println("--------");

//public static int max(int a, int b) 返回两个int值中的较大值
System.out.println(Math.max(66, 88));
System.out.println("--------");

//public static int min(int a, int b) 返回两个int值中的较小值
System.out.println(Math.min(66, 88));
System.out.println("--------");

//public static double pow(double a, double b) 返回a的b次幂的值
System.out.println(Math.pow(2.0, 3.0));
System.out.println("--------");

//public static double random() 返回值为double的正值，[0.0,1.0)
System.out.println(Math.random());
System.out.println((int) (Math.random() * 100) + 1);
```

## System

System包含几个有用的类字段和方法，它不能被实例化。

> System类的常用方法：

|                 方法名                 |                    描述                    |
| :------------------------------------: | :----------------------------------------: |
|  public static void exit(int status)   | 终止当前运行的Java虚拟机，非零表示异常终止 |
| public static long currentTimeMillis() |        返回当前时间（以毫秒为单位）        |

```java
System.out.println("开始");
//public static void exit(int status) 终止当前运行的Java虚拟机，非零表示异常终止
//System.exit(0);
System.out.println("结束");

//public static long currentTimeMillis() 返回当前时间（以毫秒为单位）
System.out.println(System.currentTimeMillis());

System.out.println(System.currentTimeMillis() * 1.0 / 1000 / 60 / 60 / 24 / 365 + "年");

long start = System.currentTimeMillis();
for (int i = 0; i < 10000; i++) {
    System.out.println(i);
}
long end = System.currentTimeMillis();
System.out.println("共耗时：" + (end - start) + "毫秒");
```

## Obiect类的toString方法

- Object是类层次结构的根，每个类都可以将Object类作为超类。所有类都直接或间接继承自该类。
- 构造方法：`public Object()`

> 看方法的源码，选中方法按`CTRL+B`
> 建议所有子类重写`toString()`方法

```java
public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

```java
Student s = new Student();
s.setName("林青霞");
s.setAge(30);
System.out.println(s);
System.out.println(s.toString());
```

## Object类的equals方法

> Object类的常用方法：

|              方法名               |                            描述                            |
| :-------------------------------: | :--------------------------------------------------------: |
|     public String toString()      | 返回对象的字符串表示形式。建议所有子类重写该方法，自动生成 |
| public boolean equals(Object obj) | 比较对象是否相等，默认比较地址，重写可以比较内容，自动生成 |

```java
public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        /*
        this ---- s1
        o ------ s2
         */
        //比较地址是否相同，如果相同直接返回true
        if (this == o) return true;
        //判断参数是否为null   判断两个对象是否来自于同一个类
        if (o == null || getClass() != o.getClass()) return false;
        //向下转型
        Student student = (Student) o;  //student = s2
        //判断age是否相同
        if (age != student.age) return false;
        //比较name是否相同
        return name != null ? name.equals(student.name) : student.name == null;
    }
}
```

```java
Student s1 = new Student();
s1.setName("林青霞");
s1.setAge(30);

Student s2 = new Student();
s2.setName("林青霞");
s2.setAge(30);

//需求：比较两个对象的值是否相同
System.out.println(s1 == s2); // false 比较的是地址值
System.out.println(s1.equals(s2)); // true
```

## 冒泡排序

- **排序**：将一组数据按照固定的规则进行排列
- **冒泡排序**：一种排序方式，对要进行排序的数据中相邻的数据进行两两比较，将较大的数据放到后面，依次对所有的数据进行操作，直至所有数据按照要求完成排序。

> 冒泡排序特点：

- 如果有n个数据进行排序，总共需要比较n-1次
- 每一次比较完毕，下一次的比较就会少一个数据参与

```java
public class Demo {
    public static void main(String[] args) {
        int[] arr = {24, 69, 80, 57, 13};
        System.out.println("排序前：" + arrayToString(arr));

        for (int x = 0; x < arr.length - 1; x++) {
            for (int i = 0; i < arr.length - 1 - x; i++) {
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
            }
            System.out.println("第" + x + "次排序后：" + arrayToString(arr));
        }
        System.out.println("排序后：" + arrayToString(arr)); // [13, 24, 57, 69, 80]
    }

    public static String arrayToString(int[] arr) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < arr.length; i++) {
            if (i == arr.length - 1) {
                sb.append(arr[i]);
            } else {
                sb.append(arr[i]).append(",");
            }
        }
        sb.append("]");
        String s = sb.toString();
        return s;
    }
}
```

## Arrays 类

Arrays类包含用于操作数组的各种方法

|                 方法名                 |                描述                |
| :------------------------------------: | :--------------------------------: |
| public static String toString(int[] a) | 返回指定数组的内容的字符串表示形式 |
|    public static void sort(int[] a)    |     按照数字顺序排列指定的数组     |

> 工具类的设计思想：

- 构造方法用`private`修饰
- 成员用`public static`修饰

```java
//定义一个数组
int[] arr = {24, 69, 80, 57, 13};
System.out.println("排序前：" + Arrays.toString(arr));

Arrays.sort(arr);
System.out.println("排序后：" + Arrays.toString(arr));
```

# 基本类型包装类

## 基本类型包装类

- 将基本数据类型封装成对象的好处在于可以在对象中定义更多的功能方法操作该数据
- 常用的操作之一：用于基本数据类型与字符串之间的转换

| 基本数据类型 |  包装类   |
| :----------: | :-------: |
|     byte     |   Byte    |
|    short     |   Short   |
|     int      |  Integer  |
|     long     |   Long    |
|    float     |   Float   |
|    double    |  Double   |
|     char     | Character |
|   boolean    |  Boolean  |

```java
//需求：判断一个数据是否在int范围内
System.out.println(Integer.MIN_VALUE);
System.out.println(Integer.MAX_VALUE);
```

## Integer

Integer:包装一个对象中的原始类型int的值

|                 方法名                  |                 描述                  |
| :-------------------------------------: | :-----------------------------------: |
|        public Integer(int value)        |   根据int值创建Integer对象（过时）    |
|        public Integer(String s)         |  根据String值创建Integer对象（过时）  |
|  public static Integer valueOf(int i)   |   返回表示指定的int值的Integer实例    |
| public static Integer valueOf(String s) | 返回一个保存指定值的Integer对象String |

```java
//public Integer(int value) 根据int值创建Integer对象（过时）
Integer i1 = new Integer(100);
System.out.println(i1);

//public Integer(String s) 根据String值创建Integer对象（过时）
Integer i2 = new Integer("100");     //字符串必须是数字字符串
System.out.println(i2);

//public static Integer valueOf(int i)  返回表示指定的int值的Integer实例
Integer i3 = Integer.valueOf(200);
System.out.println(i3);

//public static Integer valueOf(String s)  返回一个保存指定值的Integer对象String
Integer i4 = Integer.valueOf("200");
System.out.println(i4);
```

## int和String类型的相互转换

|      功能       |                方法名                |                         描述                          |
| :-------------: | :----------------------------------: | :---------------------------------------------------: |
| int转换为String | public static String valueOf(int i)  | 返回int参数的字符串表示形式。该方法是String类中的方法 |
| String转换为int | public static int parseInt(String s) |   将字符串解析为int类型。该方法是Integer类中的方法    |

```java
//int ----> String
int number = 100;
//方式一
String s1 = "" + number;
System.out.println(s1);

//方式二
//public static String valueOf (int i)
String s2 = String.valueOf(number);
System.out.println(s2);
System.out.println("--------");

//String ----> int
String s = "100";
//方式一
//String ----> Integer ----> int
Integer i = Integer.valueOf(s);
//public int intValue ()
int x = i.intValue();
System.out.println(x);

//方式二
//public static int parseInt (String s)
int y = Integer.parseInt(s);
System.out.println(y);
```

### 案例：字符串中数据排序

需求：有一个字符串："91 27 46 38 50"，请写程序实现最终输出的结果是："27 38 46 50 91"

```java
String s = "91 27 46 38 50";

//把字符串中的数字数据存储到一个int类型的数组中
String[] strArray = s.split(" ");
for (int i = 0; i < strArray.length; i++) {
    System.out.println(strArray[i]);
}

//定义一个int数组，把String[]数组中的每一个元素存储到int数组中
int[] arr = new int[strArray.length];
for (int i = 0; i < arr.length; i++) {
    arr[i] = Integer.parseInt(strArray[i]);
}
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

//对int数组排序
Arrays.sort(arr);

//将排序后的int数组中的元素进行拼接得到一个字符串，这里拼接采用StringBuilder来实现
StringBuilder sb = new StringBuilder();
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == arr.length - 1) {
        sb.append(arr[i]);
    } else {
        sb.append(arr[i]).append(" ");
    }
}
String result = sb.toString();
System.out.println("result：" + result); // "27 38 46 50 91"
```

## 自动装箱和拆箱

- 装箱：把基本数据类型转换为对应的包装类类型
- 拆箱：把包装类类型转换为对应的基本数据类型

> 注意：在使用包装类类型的时候，如果做操作，最好先判断是否为null
> 推荐只要是对象，在使用前就必须进行不为null的判断

```java
//装箱
Integer i = Integer.valueOf(100);
//自动装箱
Integer ii = 100;

//拆箱
ii = ii.intValue() + 200;
System.out.println(ii);
//自动拆箱
ii += 200;
System.out.println(ii);

Integer iii = null;
if (iii != null) {
    iii += 300; //NullPointerException 空指针
}
```

## 日期类

### Date

Date代表了一个特定的时间，精确到毫秒

|         构造方法         |                               描述                               |
| :----------------------: | :--------------------------------------------------------------: |
|     public Date类()      | 分配一个Date对象，并初始化，以便它代表它被分配的时间，精确到毫秒 |
| public Date类(long date) | 分配一个Date对象，并将其初始化为表示从标准基准时间起指定的毫秒数 |

```java
//public Date类() 分配一个Date对象，并初始化，以便它代表它被分配的时间，精确到毫秒
Date d1 = new Date();
System.out.println(d1);

System.out.println("--------");

//public Date类(long date) 分配一个Date对象，并将其初始化为表示从标准基准时间起指定的毫秒数
long date = 1000 * 60 * 60;
Date d2 = new Date(date);
System.out.println(d2);
```

> Date 类中的常用方法

|             方法名             |                          描述                          |
| :----------------------------: | :----------------------------------------------------: |
|     public long getTime()      | 获取的是日期对象从1970年1月1日00：00：00到现在的毫秒值 |
| public void setTime(long time) |                 设置时间，给的是毫秒值                 |

```java
//创建日期对象
Date d = new Date();

//public long getTime() 获取的是日期对象从1970年1月1日00：00：00到现在的毫秒值
System.out.println(d.getTime());
System.out.println(d.getTime() * 1.0 / 1000 / 60 / 60 / 24 / 365 + "年");
System.out.println("--------");

//public void setTime(long time) 设置时间，给的是毫秒值
System.out.println(d);

System.out.println("-------");

long time = 1000*60*60;
d.setTime(time);
System.out.println(d);

System.out.println("-------");

time = System.currentTimeMillis();
d.setTime(time);
System.out.println(d);
```

> SimpleDateFormat类

SimpleDateFormat类是一个具体的类，用于以区域设置敏感的方式格式化和解析日期。

日和时间格式由日期和时间模式字符串指定，在日期和时间模式字符串中，从 ‘A’ 到 ‘Z’ 以及从 ‘a’ 到 ‘z’ 引号的字母被解释为表示日期或时间字符串的组件的模式字母

> 常用的模式字母及对应关系如下：

- y —— 年
- M —— 月
- d —— 日
- H —— 时
- m —— 分
- s —— 秒

> 构造方法：

|                构造方法                 |                          描述                          |
| :-------------------------------------: | :----------------------------------------------------: |
|        public SimpleDateFormat()        |    构造一个SimpleDateFormat，使用默认模式和日期格式    |
| public SimpleDateFormat(String pattern) | 构造一个SimpleDateFormat使用给定的模式和默认的日期格式 |

- **格式化日期(Date ---> String)**：
    - `public final String format(Date date)` 将日期格式化成日期/时间字符串

- **解析日期（String ---> Date）**:
    - `public Date parse(String source)` 从给定字符串的开始解析文本以生成日期

```java
//格式化
Date d = new Date();
SimpleDateFormat sdf = new SimpleDateFormat();
String s = sdf.format(d);
System.out.println(s);
System.out.println("--------");

sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
s = sdf.format(d);
System.out.println(s);

System.out.println("--------");

//解析
String ss = "2022-05-06 14:54:30";
SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
Date d2 = sdf2.parse(ss);
System.out.println(d2);
```

### 案例：日期工具类

需求：定义一个日期工具类（DateUtils），包含两个方法：把日期转换为指定格式的字符串；把字符串解析为指定格式的日期。然后定义一个测试类，测试日期工具类的方法。

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {
    private DateUtils() {}

    public static String dateToString(Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        String s = sdf.format(date);
        return s;
    }

    public static Date stringToDate(String s, String format) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        Date d = sdf.parse(s);
        return d;
    }
}
```

```java
import java.text.ParseException;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws ParseException {
        Date d = new Date();

        String s1 = DateUtils.dateToString(d, "yyyy年MM月dd日 HH:mm:ss");
        System.out.println(s1);

        System.out.println("--------");

        String s2 = DateUtils.dateToString(d, "yyyy年MM月dd日");
        System.out.println(s2);
        String s3 = DateUtils.dateToString(d, "HH:mm:ss");
        System.out.println(s3);

        System.out.println("--------");

        String s = "2022-5-6 15:12:02";
        Date dd = DateUtils.stringToDate(s, "yyyy-MM-dd HH:mm:ss");
        System.out.println(dd);

    }
}
```

### Calendar

Calendar为某一时刻和一组日历字段之间的转换提供了一些方法，并为操作日历字段提供了一些方法。

Calendar提供了一个类方法`getInstance`用于获取Calendar对象，其日历字段已使用当前日期和时间初始化：

```java
Calendar rightNow = Calendar.getInstance();
```

```java
//获取Calendar对象
Calendar c = Calendar.getInstance(); //多态的形式得到对象
// System.out.println(c);

//public int get(int field)
int year = c.get(Calendar.YEAR);
int month = c.get(Calendar.MONTH) + 1;
int day = c.get(Calendar.DATE);
System.out.println(year + "年" + month + "月" + day + "日");
```

> Calendar常用方法:

|                        方法名                        |                          描述                          |
| :--------------------------------------------------: | :----------------------------------------------------: |
|              public int get(int field)               |                  返回给定日历字段的值                  |
|   public abstract void add(int field, int amount)    | 根据日历的规则，将指定的时间量添加或减去给定的日历字段 |
| public final void set(int year, int month, int date) |                  设置当前日历的年月日                  |

```java
//获取日历类对象
Calendar c = Calendar.getInstance();

//public int get(int field)
int year = c.get(Calendar.YEAR);
int month = c.get(Calendar.MONTH) + 1;
int day = c.get(Calendar.DATE);
System.out.println(year + "年" + month + "月" + day + "日");

System.out.println("--------");

//public abstract void add(int field, int amount) 根据日历的规则，将指定的时间量添加或减去给定的日历字段
//10年后的5天前
c.add(Calendar.YEAR, 10);
c.add(Calendar.DATE, -5);
year = c.get(Calendar.YEAR);
month = c.get(Calendar.MONTH) + 1;
day = c.get(Calendar.DATE);
System.out.println(year + "年" + month + "月" + day + "日");

System.out.println("--------");

//public final void set(int year, int month, int date) 设置当前日历的年月日
c.set(2048, 11, 11);
year = c.get(Calendar.YEAR);
month = c.get(Calendar.MONTH) + 1;
day = c.get(Calendar.DATE);
System.out.println(year + "年" + month + "月" + day + "日");
```

### 案例：二月天

需求：获取任意一年的二月份有多少天

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入你想查询的年份：");
int year = sc.nextInt();

//设置日历对象的年月日
Calendar c = Calendar.getInstance();
c.set(year, 2, 1);

//3月1日往前推一天就是2月的最后一天
c.add(Calendar.DATE, -1);

//获取这一天并输出
int date = c.get(Calendar.DATE);

System.out.println(year + "年的2月份有" + date + "天");
```

# 异常

## 异常概述

异常：就是程序出现了不正常的情况

> 异常体系

![](images/%E5%BC%82%E5%B8%B8%E4%BD%93%E7%B3%BB.png)

- Error:严重问题，不需要处理
- Exception:称为异常类，它表示程序本身可以处理的问题
  - RuntimeException:在编译期间是不检查的，需要我们回来修改代码
  - 非RuntimeException:编译期间就必须处理，否则程序不能通过编译，就更不能正常运行了

## JVM的默认处理方案

> 如果程序出现了问题，我们没有做任何处理，最终JV吗会做默认的处理

1. 把异常的名称，异常原因及异常出现的位置等信息输出在了控制台
2. 程序停止执行

## 异常处理之try...catch

格式：

```java
try {
    可能出现异常的代码;
} catch(异常类名 变量名) {
    异常的处理代码;
}
```

> 执行流程：

1. 程序从try里面的代码开始执行
2. 出现异常，会自动生成一个异常类对象，该异常对象将被提交给Java时系统
3. 当Java运行时系统接收到异常对象时，会到catch中去找匹配的异常类，找到后执行异常的处理
4. 执行完毕之后，程序还可以继续往下执行

```java
public static void main(String[] args) {
    System.out.println("开始");
    method();
    System.out.println("结束");
}

public static void method() {
    try {
        int[] arr = {1, 2, 3};
        System.out.println(arr[3]);
    } catch (ArrayIndexOutOfBoundsException e) {
    // System.out.println("你访问的数组索引不存在");
        e.printStackTrace();
    }
}
```

## Throwable的成员方法

|            方法名             |              描述               |
| :---------------------------: | :-----------------------------: |
|  public String getMessage()   | 返回此throwable的详细消息字符串 |
|   public String toString()    |     返回此可抛出的简短描述      |
| public void printStackTrace() |  把异常的错误信息输出在控制台   |

```java
public static void main(String[] args) {
    System.out.println("开始");
    method();
    System.out.println("结束");
}

public static void method() {
    try {
        int[] arr = {1, 2, 3};
        System.out.println(arr[3]);
    } catch (ArrayIndexOutOfBoundsException e) {
//            e.printStackTrace();

        //public String getMessage()                返回此throwable的详细消息字符串
        System.out.println(e.getMessage());           //Index 3 out of bounds for length 3  返回出现异常的原因

        System.out.println("--------");

        //public String toString()                 返回此可抛出的简短描述
        System.out.println(e.toString());       //java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3

        System.out.println("--------");

        //public void printStackTrace()            把异常的错误信息输出在控制台
        e.printStackTrace();
        //java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3
        //	at 异常_93.Throwable的成员方法_4.method(Throwable的成员方法_4.java:19)
        //	at 异常_93.Throwable的成员方法_4.main(Throwable的成员方法_4.java:12)
    }
}
```

## 编译时异常和运行时异常的区别

- Java中的异常分为两大类：编译时异常和运行时异常，也被称为受检异常和非受检异常。
- 所有的RuntimeException类及其子类被称为运行时异常，其他的异常都是编译时异常。
- 编译时异常：必须显示处理，否则程序就会发生错误，无法通过编译
- 运行时异常：无需显示处理，也可以和编译时异常一样处理

```java
public static void main(String[] args) {
    method();
}

//编译时异常
public static void method2() {
    try {
        String s = "2048-08-09";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date d = sdf.parse(s);
        System.out.println(d);
    } catch (ParseException e) {
        e.printStackTrace();
    }
}

//运行时异常
public static void method() {
    int[] arr = {1, 2, 3};
    try {
        System.out.println(arr[3]);
    } catch (ArrayIndexOutOfBoundsException e) {
        e.printStackTrace();
    }
}
```

## 异常处理之throws

格式：

```java
throws 异常类名;
```

> 注意：这个格式是**跟在方法的括号后面**的

- 编译时异常必须要进行处理，两种处理方案：try...catch...或者throws，如果采用throws这种方案，将来谁调用谁处理
- 运行时异常可以不处理，出现问题后，需要我们回来修改代码

```java
public static void main(String[] args) {
    System.out.println("开始");
    method();
    try {
        method2();
    } catch (ParseException e) {
        throw new RuntimeException(e);
    }
    System.out.println("结束");
}

//运行时异常
public static void method() throws ArrayIndexOutOfBoundsException {
    int[] arr = {1, 2, 3};
    System.out.println(arr[3]);
}

//编译时异常
public static void method2() throws ParseException {
    String s = "2048-08-09";
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    Date d = sdf.parse(s);
    System.out.println(d);
}
```

## 自定义异常

格式：

```java
public class 异常类名 extends Exception {
    无参构造
    带参构造
}
```

|                      throws                      |                throw                 |
| :----------------------------------------------: | :----------------------------------: |
|         用在方法声明后面，跟的是异常类名         |    用在方法体内，跟的是异常对象名    |
|       表示抛出异常，由该方法的调用者来处理       | 表示抛出异常，由该方法体内的语句处理 |
| 表示出现异常的一种可能性，并不一定会发生这些异常 |     执行throw一定抛出了某种异常      |

---

```java
public class ScoreException extends Exception {
    public ScoreException() {};
    public ScoreException(String message) {
        super(message);
    }
}
```

```java
public class Teacher {
    public void checkScore(int score) throws ScoreException {
        if (score < 0 || score > 100) {
            // throw new ScoreException();
            throw new ScoreException("你给的分数有误，分数应该在0-100之间");
        } else {
            System.out.println("分数正常");
        }
    }
}
```

```java
public class Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入分数：");
        int score = sc.nextInt();

        Teacher t = new Teacher();
        try {
            t.checkScore(score);
        } catch (ScoreException e) {
            e.printStackTrace();
        }
    }
}
```

# 集合进阶

## Collection

集合类的特点：提供一种存储空间可变的存储模型，存储的数据容量可以随时发生改变

![](images/%E9%9B%86%E5%90%88.png)

### Collection集合概述和使用

- 是单列集合的顶层接口，他表示一组对象，这些对象也称为Collection的元素
- JDK不提供此接口的任何直接实现，它提供更具体的子接口（如Set和List）实现

> 创建Collection集合的对象：

- 多态的方式
- 具体的实现类ArrayList

```java
//创建Collection集合的对象
Collection<String> c = new ArrayList<String>();

//添加元素：boolean add(E e)
c.add("hello");
c.add("world");
c.add("java");

//输出集合对象
System.out.println(c);
```

### Collection集合常用方法

|           方法名           |                描述                |
| :------------------------: | :--------------------------------: |
|      boolean add(E e)      |              添加元素              |
|  boolean remove(Object o)  |       从集合中移除指定的元素       |
|        void clear()        |          清空集合中的元素          |
| boolean contains(Object o) |    判断集合中是否存在指定的元素    |
|     boolean isEmpty()      |          判断集合是否为空          |
|         int size()         | 集合的长度，也就是集合中元素的个数 |

```java
//创建Collection集合对象
Collection<String> c = new ArrayList<String>();

//boolean add(E e) 添加元素
//System.out.println(c.add("hello"));
//System.out.println(c.add("world"));
//System.out.println(c.add("world"));
c.add("hello");
c.add("world");
c.add("java");


//boolean remove(Object o) 从集合中移除指定的元素
System.out.println(c.remove("world"));
System.out.println(c.remove("javaee"));

//void clear() 清空集合中的元素
//c.clear();

//boolean contains(Object o) 判断集合中是否存在指定的元素
System.out.println(c.contains("world"));
System.out.println(c.contains("javaee"));

//boolean isEmpty() 判断集合是否为空
System.out.println(c.isEmpty());

//int size() 集合的长度，也就是集合中元素的个数
System.out.println(c.size());

//输出集合对象
System.out.println(c);
```

### Collection集合的遍历

- Iterator:迭代器，集合的专用遍历方式
- `Iterator<E> iterator()`:返回此合集中元素的迭代器，通过集合的`iterator()`方法得到
- 迭代器是通过集合的`iterator()`方法得到的，所以我们说它是依赖于集合而存在的

> Iterator中的常用方法：

|      方法名       |               描述               |
| :---------------: | :------------------------------: |
|     E next()      |      返回迭代中的下一个元素      |
| boolean hasNext() | 如果迭代具有更多元素，则返回true |

```java
Collection<String> c = new ArrayList<String>();

c.add("hello");
c.add("world");
c.add("java");

//Iterator<E> iterator():返回此合集中元素的迭代器，通过集合的iterator()方法得到
Iterator<String> it = c.iterator();

//E next() 返回迭代中的下一个元素
/*System.out.println(it.next());
System.out.println(it.next());
System.out.println(it.next());*/

//boolean hasNext() 如果迭代具有更多元素，则返回true
/*if (it.hasNext()) {
    System.out.println(it.next());
}
if (it.hasNext()) {
    System.out.println(it.next());
}
if (it.hasNext()) {
    System.out.println(it.next());
}
if (it.hasNext()) {
    System.out.println(it.next());
}*/

//用while循环改进判断
while (it.hasNext()) {
//  System.out.println(it.next());
    String s = it.next();
    System.out.println(s);
}
```

### Collection集合存储学生对象并遍历

需求：创建一个存储学生对象的集合，存储3个学生对象，使用程序实现在控制台遍历该集合。

```java
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class Demo {
    public static void main(String[] args) {
        //创建Collection集合对象
        Collection<Student> c = new ArrayList<Student>();

        //创建学生对象
        Student s1 = new Student("林青霞", 30);
        Student s2 = new Student("张曼玉", 35);
        Student s3 = new Student("王祖贤", 33);

        //把学生添加到集合
        c.add(s1);
        c.add(s2);
        c.add(s3);

        //遍历集合（迭代器方式）
        Iterator<Student> it = c.iterator();
        while (it.hasNext()) {
            Student s = it.next();
            System.out.println(s.getName() + "," + s.getAge());
        }
    }
}
```

## List

### List集合概述

- 有序集合（也称为序列），用户可以精确控制列表中每个元素的插入位置。用户可以通过整数索引访问元素，并搜索列表中的元素。
- 与Set集合不同，==列表通常允许重复的元素==

> List集合特点：

- 有序：存储和取出的元素顺序一致
- 可重复：存储的元素可以重复

```java
//创建集合对象
List<String> list = new ArrayList<String>();

//添加元素
list.add("hello");
list.add("world");
list.add("java");
list.add("world");

//输出集合对象
//System.out.println(list);

//遍历集合(迭代器)
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    System.out.println(s);
}
```

### List集合的特有方法

|             方法名             |                  描述                  |
| :----------------------------: | :------------------------------------: |
| void add(int index, E element) |   在此集合中的指定位置插入指定的元素   |
|      E remove(int index)       | 删除指定索引处的元素，返回被删除的元素 |
|  E set(int index, E element)   | 修改指定索引处的元素，返回被修改的元素 |
|        E get(int index)        |          返回指定索引处的元素          |

```java
List<String> list = new ArrayList<String>();

list.add("hello");
list.add("world");
list.add("java");

//void add(int index, E element) 在此集合中的指定位置插入指定的元素
list.add(1, "javaee");
//list.add(11, "javaee");  //IndexOutOfBoundsException  索引越界

//E remove(int index) 删除指定索引处的元素，返回被删除的元素
System.out.println(list.remove(1));

//E set(int index, E element) 修改指定索引处的元素，返回被修改的元素
System.out.println(list.set(1, "javaee"));

//E get(int index)  返回指定索引处的元素
System.out.println(list.get(1));

System.out.println(list);

//用for循环遍历集合
for (int i = 0; i < list.size(); i++) {
    String s = list.get(i);
    System.out.println(s);
}
```

### 案例：List集合存储学生对象并遍历

```java
List<Student> list = new ArrayList<Student>();

Student s1 = new Student("林青霞", 30);
Student s2 = new Student("张曼玉", 35);
Student s3 = new Student("王祖贤", 33);

list.add(s1);
list.add(s2);
list.add(s3);


//for循环的方式遍历
for (int i = 0; i < list.size(); i++) {
    Student s = list.get(i);
    System.out.println(s.getName() + "," + s.getAge());
}

System.out.println("--------");

//迭代器的方式遍历
Iterator<Student> it = list.iterator();
while (it.hasNext()) {
    Student s = it.next();
    System.out.println(s.getName() + "," + s.getAge());
}
```

### 并发修改异常

并发修改异常 —— `ConcurrentModificationException`

> 产生原因：

迭代器遍历的过程中，通过集合对象修改了集合中元素的长度，造成了迭代器获取元素中判断预期修改值与实际修改值不一致

> 解决方案

用for循环遍历，然后用集合对象做对应的操作即可

```java
List<String> list = new ArrayList<String>();

list.add("hello");
list.add("world");
list.add("java");

/*Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    if (s.equals("world")) {
        list.add("javaee");
    }
}*/  //ConcurrentModificationException  当不允许这样的修改时，可以通过检测到对象的并发修改的方法来抛出此异常

for (int i = 0; i < list.size(); i++) {
    String s = list.get(i);
    if (s.equals("world")) {
        list.add("javaee");
    }
}

System.out.println(list);
```

### 列表迭代器

- ListIterator —— 列表迭代器
- 通过List集合的`listIterator()`方法得到，所以说它是List集合特有的迭代器
- 用于允许程序员沿任一方向遍历列表的列表的迭代器，在迭代期间修改列表，并获取列表中迭代器的当前位置

> 常用方法：

|        方法名         |                             描述                              |
| :-------------------: | :-----------------------------------------------------------: |
|       E next()        |           返回列表中的下一个元素，并且前进光标位置            |
|   boolean hasNext()   | 如果此列表迭代器在向前方向遍历列表时具有更多元素，则返回 true |
|     E previous()      |          返回列表中的上一个元素，并向后移动光标位置           |
| boolean hasPrevious() | 如果此列表迭代器在相反方向遍历列表时具有更多元素，则返回 true |
|     void add(E e)     |               将指定的元素插入列表（可选操作）                |

```java
List<String> list = new ArrayList<>();

list.add("hello");
list.add("world");
list.add("java");

ListIterator<String> lit = list.listIterator();
while (lit.hasNext()) {
    String s = lit.next();
    System.out.println(s);
}

System.out.println("--------");

//逆向遍历
while (lit.hasPrevious()) {
    String s = lit.previous();
    System.out.println(s);
}

System.out.println("--------");

//获取列表迭代器
while (lit.hasNext()) {
    String s = lit.next();
    if (s.equals("world")) {
        lit.add("javaee");
    }
}

System.out.println(list);
```

### 增强for循环

- 增强for：简化数组和Collection集合的遍历
- 实现此接口允许对象成为增强型 for语句的目标
- 它是JDK5之后出现的，其内部原理是一个Iterator迭代器

格式：

```java
for (元素数据类型 变量名 : 数组或者Collection集合) {
    //在此处使用变量即可，该变量就是元素
}
```

```java
int[] arr = {1, 2, 3, 4, 5};
for (int i : arr) {
    System.out.println(i);
}

System.out.println("--------");

String[] str = {"hello", "world", "java"};
for (String s : str) {
    System.out.println(s);
}

System.out.println("--------");

List<String> list = new ArrayList<String>();
list.add("hello");
list.add("world");
list.add("java");

for (String s : list) {
    System.out.println(s);
}

System.out.println("--------");

//内部原理是一个Iterator迭代器
for (String s : list) {
    if (s.equals("world")) {
        list.add("javaee"); //ConcurrentModificationException
    }
}
```

### 案例：List集合存储学生对象用三种方式遍历

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Demo {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<Student>();
        Student s1 = new Student("林青霞", 30);
        Student s2 = new Student("张曼玉", 35);
        Student s3 = new Student("王祖贤", 33);

        list.add(s1);
        list.add(s2);
        list.add(s3);

        //迭代器方式，集合特有的遍历方式
        Iterator<Student> it = list.iterator();
        while (it.hasNext()) {
            Student s = it.next();
            System.out.println(s.getName() + "," + s.getAge());
        }

        System.out.println("--------");

        //普通for循环方式
        for (int i = 0; i < list.size(); i++) {
            Student s = list.get(i);
            System.out.println(s.getName() + "," + s.getAge());
        }

        System.out.println("--------");

        //增强for循环
        for (Student s : list) {
            System.out.println(s.getName() + "," + s.getAge());
        }
    }
}
```

### 数据结构

#### 栈和队列

- 数据结构是计算机存储、组织数据的方式，是指相互之间存在一种或多种特定关系的数组元素的集合。
- 通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。

> 栈：

- 数据进入栈模型的过程称为：压/进栈
- 数据离开栈模型的过程称为：弹/出栈
- 栈是一种数据先进后出的模型

> 队列：

- 数据从后端进入队列模型的过程称为：入队列
- 数据从前端进出队列模型的过程称为：出队列
- 队列是一种数据先进先出的模型

#### 数组和链表

> 数组：

- 查询数据通过索引定位，查询任意数据耗时相同，==查询速度快==
- 删除数据时，要将原始数据删除，同时后面每个数据前移，==删除效率低==
- 添加数据时，添加位置后的每个数据后移，再添加元素，==添加效率极低==

> 链表：

- 链表的每个元素称为结点，一个结点包含：结点的存数位置（地址）、存储具体的数据、下一个结点的地址
- 链表是一种==增删快==的模型（对比数组）
- 链表是一种==查询慢==的模型（对比数组）

### List集合子类特点

- List集合的常用子类：ArrayList、LinkedList
- ArrayList：底层数据结构是数组，查询快，增删慢
- LinkedList：底层数据结构是链表，查询慢，增删快

```java
//需求：分别使用ArrayList和LinkedList完成存储字符串并遍历
//创建集合对象
ArrayList<String> array = new ArrayList<String>();

array.add("hello");
array.add("world");
array.add("java");

//遍历
for (String s : array) {
    System.out.println(s);
}

System.out.println("--------");

LinkedList<String> linkedlist = new LinkedList<String>();

linkedlist.add("hello");
linkedlist.add("world");
linkedlist.add("java");

for (String s : linkedlist) {
    System.out.println(s);
}
```

### 案例：ArrayList集合存储学生对象用三种方式遍历

```java
import java.util.ArrayList;
import java.util.Iterator;

public class Demo {
    public static void main(String[] args) {
        ArrayList<Student> array = new ArrayList<Student>();

        Student s1 = new Student("林青霞", 30);
        Student s2 = new Student("张曼玉", 35);
        Student s3 = new Student("王祖贤", 33);

        array.add(s1);
        array.add(s2);
        array.add(s3);

        //迭代器
        Iterator<Student> it = array.iterator();
        while (it.hasNext()) {
            Student s = it.next();
            System.out.println(s.getName() + "," + s.getAge());
        }

        System.out.println("--------");

        //for
        for (int i = 0; i < array.size(); i++) {
            Student s = array.get(i);
            System.out.println(s.getName() + "," + s.getAge());
        }

        System.out.println("--------");

        //增强for
        for (Student s : array) {
            System.out.println(s.getName() + "," + s.getAge());
        }
    }
}
```

### LinkedList集合的特有功能

|          方法名           |               描述               |
| :-----------------------: | :------------------------------: |
| public void addFirst(E e) |    在该列表开头插入指定的元素    |
| public void addLast(E e)  |  将指定的元素追加到此列表的末尾  |
|    public E getFirst()    |     返回此列表中的第一个元素     |
|    public E getLast()     |    返回此列表中的最后一个元素    |
|  public E removeFirst()   |  从此列表中删除并返回第一个元素  |
|   public E removeLast()   | 从此列表中删除并返回最后一个元素 |

```java
LinkedList<String> linkedList = new LinkedList<String>();

linkedList.add("hello");
linkedList.add("world");
linkedList.add("java");

linkedList.addFirst("javaee");
linkedList.addLast("javaee");

System.out.println("--------");

System.out.println(linkedList.getFirst());
System.out.println(linkedList.getLast());
System.out.println(linkedList);

System.out.println("--------");

System.out.println(linkedList.removeFirst());
System.out.println(linkedList.removeLast());
System.out.println(linkedList);
```

## Set

### Set集合概述和特点

- ==不包含重复元素==的集合
- ==没有带索引的方法，所以不能使用普通for循环遍历==
- ==HashSet对集合的迭代顺序不做任何保证==

```java
//用Set集合存储字符串并遍历
Set<String> s = new HashSet<String>();

s.add("hello");
s.add("world");
s.add("java");

Iterator<String> it = s.iterator();
while (it.hasNext()) {
    String s1 = it.next();
    System.out.println(s1);
}

System.out.println("--------");

for (String s1 : s) {
    System.out.println(s1);
}
```

### 哈希值

- 哈希值是JDK根据对象的==地址==或者==字符串==或者==数字==算出来的==int类型的数值==
- Object类中有一个方法可以获取==对象的哈希值==
  - `public int hashCode()`：返回对象的哈希码值

> 对象哈希值的特点：

- 同一个对象多次调用`hashCode()`方法返回第哈希值是相同的
- 默认情况下，不同对象的哈希值是不同的，而重写`hashCode()`方法可以实现让不同对象的哈希值相同

```java
Student s1 = new Student("林青霞", 30);

//同一对象多次调用hashCode()方法返回第哈希值是相同的
System.out.println(s1.hashCode());
System.out.println(s1.hashCode());

System.out.println("--------");

//默认情况下，不同对象的哈希值是不相同的
//通过方法重写可以实现不同对象的哈希值是相同的
Student s2 = new Student("林青霞", 30);
System.out.println(s2.hashCode());

System.out.println("--------");

System.out.println("hello".hashCode());  //99162322
System.out.println("world".hashCode());  //113318802
System.out.println("java".hashCode());  //3254818

System.out.println("--------");

// 字符串中重写了hashCode()方法
System.out.println("重地".hashCode());   //1179395
System.out.println("通话".hashCode());  //1179395
```

### HashSet

#### HashSet集合概述和特点

> HashSet集合特点

- 底层数据结构是哈希表
- 对集合的迭代顺序不作任何保证，也就是说不保证存储和取出的元素顺序一致。
- 没有带索引的方法，索引不能使用普通for循环遍历
- 由于是Set集合，索引是不包含重复元素的

```java
//创建集合对象
HashSet<String> hs = new HashSet<String>();

// 添加元素
hs.add("hello");
hs.add("world");
hs.add("java");

// 遍历
for (String s : hs) {
    System.out.println(s);
}
```

#### HashSet集合保证元素唯一性源码分析

HashSet集合存储元素，要保证元素唯一性，需要重写`hashCode()`和`equals()`方法。

> HashSet 存储一个元素的过程：

![](images/HashSet%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E8%BF%87%E7%A8%8B.png)

```java
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Demo {
    public static void main(String[] args) {
        //用Set集合存储字符串并遍历
        Set<String> s = new HashSet<String>();

        s.add("hello");
        s.add("world");
        s.add("java");

        Iterator<String> it = s.iterator();
        while (it.hasNext()) {
            String s1 = it.next();
            System.out.println(s1);
        }

        System.out.println("--------");

        for (String s1 : s) {
            System.out.println(s1);
        }
    }
}
```

```txt
//用Set集合存储字符串并遍历
Set<String> s = new HashSet<String>();

s.add("hello");
s.add("world");
s.add("java");
---------------------------------------------------------------

public boolean add(E e) {
    return map.put(e, PRESENT)==null;
}

static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}

public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);
}

//哈希值和元素的hashCode()方法相关
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,boolean evict) {
    Node<K,V>[] tab; Node<K,V> p; int n, i;

//如果哈希表未进行初始化就对其进行初始化
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;

//根据对象的哈希值计算对象的存储位置，如果该位置没有元素，就存储元素
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
    else {
        Node<K,V> e; K k;

        /*
            存入的元素和以前的元素比较哈希值
                如果哈希值不同，会继续向下执行，把元素添加到集合
                如果哈希值相同，会调用对象的equals()方法比较
                    如果返回false，会继续向下执行，把元素添加到集合
                    如果返回true，说明元素重复，不存储
        */
        if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k))))
            e = p;
        else if (p instanceof TreeNode)
            e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
        else {
            for (int binCount = 0; ; ++binCount) {
                if ((e = p.next) == null) {
                    p.next = newNode(hash, key, value, null);
                    if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        treeifyBin(tab, hash);
                    break;
                }
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    break;
                p = e;
            }
        }
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
            if (!onlyIfAbsent || oldValue == null)
                e.value = value;
            afterNodeAccess(e);
            return oldValue;
        }
    }
    ++modCount;
    if (++size > threshold)
        resize();
    afterNodeInsertion(evict);
    return null;
}
```

#### 常见数据结构之哈希表

> 哈希表

- JDK8之前，底层采用==数组+链表==实现，可以说是一个元素为链表的数组
- JDK8之后，在长度比较长的时候，底层实现了优化

#### 案例：HashSet集合存储学生对象并遍历

```java
import java.util.HashSet;

public class Demo {
    public static void main(String[] args) {
        Student s1 = new Student("林青霞", 30);
        Student s2 = new Student("张曼玉", 35);
        Student s3 = new Student("王祖贤", 33);

        Student s4 = new Student("王祖贤", 33);

        HashSet<Student> hs = new HashSet<Student>();

        hs.add(s1);
        hs.add(s2);
        hs.add(s3);

        for (Student s : hs) {
            System.out.println(s.getName() + "," + s.getAge());
        }
    }
}
```

### LinkedHashSet

#### LinkedHashSet集合概述和特点

> LinkedHashSet结合特点

- 哈希表和链表实现的Set接口，==具有可预测的迭代次序==
- 由链表保证元素有序，也就是说==元素的存储和取出顺序是一致的==
- 由哈希表保证元素唯一，也就是说==没有重复的元素==

```java
LinkedHashSet<String> linkedHsahSet = new LinkedHashSet<String>();

linkedHsahSet.add("hello");
linkedHsahSet.add("world");
linkedHsahSet.add("java");

for (String s : linkedHsahSet) {
    System.out.println(s);
}
```

### TreeSet

#### TreeSet集合概述和特点

> TreeSet集合特点：

- 元素有序，这里的顺序不是指存储和取出的顺序，而是按照一定的规律进行排序，具体排序方法取决于构造方法。
- 没有带索引的方法，所以==不能使用普通for循环遍历==
- 由于是Set集合，所以==不包含重复元素==

> 构造方法

|            构造方法            |            描述            |
| :----------------------------: | :------------------------: |
|           TreeSet()            | 根据元素的自然排序进行排序 |
| TreeSet(Comparator comparator) |  根据指定的比较器进行排序  |

> TreeSet集合存储整数并遍历

```java
TreeSet<Integer> ts = new TreeSet<Integer>();
ts.add(10);
ts.add(40);
ts.add(30);
ts.add(50);
ts.add(20);

ts.add(30);

for (Integer i : ts) {
    System.out.println(i); // 10 20 30 40 50
}
```

#### 自然排序Comparable的使用

- 用TreeSet集合存储自定义对象，无参构造方法使用的是==自然排序==对元素进行排序的
- 自然排序，就是==让元素所属的类实现Comparable接口==，重写compareTo(To)方法
- 重写方法时，一定要注意排序规则必须按照要求的主要条件和次要条件来写

> 需求：存储学生对象并遍历，创建TreeSet集合使用无参构造方法
  要求：按照年龄从小到大进行排序，年龄相同时，按照姓名的字母顺序排序

```java
public class Student implements Comparable<Student> {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public int compareTo(Student s) {
//        return 0; 只添加一个
//        return 1; 升序添加
//        return -1; 降序添加
        //按照年龄从小到大进行排序
        int num = this.age - s.age;
        //年龄相同时，按照姓名的字母顺序排序
        int num2 = num == 0 ? this.name.compareTo(s.name) : num;
        return num2;
    }
}
```

```java
TreeSet<Student> ts = new TreeSet<Student>();
Student s1 = new Student("xishi", 29);
Student s2 = new Student("wangzhaojun", 28);
Student s3 = new Student("diaochan", 30);
Student s4 = new Student("yangyuhuan", 33);

Student s5 = new Student("linqingxia", 33);
Student s6 = new Student("linqingxia", 33);

ts.add(s1);
ts.add(s2);
ts.add(s3);
ts.add(s4);
ts.add(s5);
ts.add(s6);

for (Student s : ts) {
    System.out.println(s.getName() + "," + s.getAge());
}
```

#### 比较器排序Comparator的使用

- 用TreeSet集合存储自定义对象，带参构造方法使用的是比较器排序对元素进行排序的
- 比较器排序，就是让集合构造方法接收Comparator的实现类对象，重写compare(To 1, To 2)方法
- 重写方法时，一定要注意排序规则必须按照要求的主要条件和次要条件来写

> 存储学生对象并遍历，创建TreeSet集合使用带参构造方法
  要求：按照年龄从小到大进行排序，年龄相同时，按照行姓名的字母顺序排序

```java
import java.util.Comparator;
import java.util.TreeSet;

public class Demo {
    public static void main(String[] args) {
        TreeSet<Student> ts = new TreeSet<Student>(new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                int num = s1.getAge() - s2.getAge();
                int num2 = num == 0 ? s1.getName().compareTo(s2.getName()) : num;
                return num2;
            }
        });

        Student s1 = new Student("xishi", 29);
        Student s2 = new Student("wangzhaojun", 28);
        Student s3 = new Student("diaochan", 30);
        Student s4 = new Student("yangyuhuan", 33);

        Student s5 = new Student("linqingxia", 33);
        Student s6 = new Student("linqingxia", 33);

        ts.add(s1);
        ts.add(s2);
        ts.add(s3);
        ts.add(s4);
        ts.add(s5);
        ts.add(s6);

        for (Student s : ts) {
            System.out.println(s.getName() + "," + s.getAge());
        }
    }
}
```

### 案例：成绩排序

需求：用TreeSet集合存储多个学生信息（姓名、语文成绩、数学成绩），并遍历该集合
要求：按照总分从高到低出现

```java
public class Student {
    private String name;
    private int chinese;
    private int math;

    public Student() {
    }

    public Student(String name, int chinese, int math) {
        this.name = name;
        this.chinese = chinese;
        this.math = math;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getChinese() {
        return chinese;
    }

    public void setChinese(int chinese) {
        this.chinese = chinese;
    }

    public int getMath() {
        return math;
    }

    public void setMath(int math) {
        this.math = math;
    }

    public int getSum() {
        return this.chinese + this.math;
    }
}
```

```java
import java.util.Comparator;
import java.util.TreeSet;

public class Demo {
    public static void main(String[] args) {
        TreeSet<Student> ts = new TreeSet<Student>(new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                //主要条件
                int num = s2.getSum() - s1.getSum();
                //次要条件
                int num2 = num == 0 ? s1.getChinese() - s2.getChinese() : num;
                int num3 = num2 == 0 ? s1.getName().compareTo(s2.getName()) : num2;
                return num3;
            }
        });

        Student s1 = new Student("林青霞", 98, 100);
        Student s2 = new Student("张曼玉", 95, 95);
        Student s3 = new Student("王祖贤", 100, 93);
        Student s4 = new Student("柳岩", 100, 97);
        Student s5 = new Student("风清扬", 98, 98);

        Student s6 = new Student("左冷禅", 97, 99);
        Student s7 = new Student("赵云", 97, 99);

        ts.add(s1);
        ts.add(s2);
        ts.add(s3);
        ts.add(s4);
        ts.add(s5);
        ts.add(s6);
        ts.add(s7);

        for (Student s : ts) {
            System.out.println(s.getName() + "," + s.getChinese() + "," + s.getMath() + "," + s.getSum());
        }
    }
}
```

#### 案例：不重复的随机数

要求：编写一个程序，获取10个1-20之间的随机数，要求随机数不能重复，并在控制台输出。

```java
import java.util.Random;
import java.util.Set;
import java.util.TreeSet;

public class Demo {
    public static void main(String[] args) {
//      Set<Integer> set = new HashSet<Integer>();
        Set<Integer> set = new TreeSet<Integer>();

        Random r = new Random();

        while (set.size() < 10) {
            int number = r.nextInt(20) + 1;
            set.add(number);
        }

        for (Integer i : set) {
            System.out.println(i);
        }
    }
}
```

## 泛型

### 泛型概述

- 泛型：是JDK中引入的特性，它提供了编译时类型安全检测机制，该机制允许在编译时检测到非法的类型。
- 它的本质是==参数化类型==，也就是说所操作的数据类型被指定为一个参数
- 一提到参数，最熟悉的就是定义方法时有形参，然后调用此方法时传递实参。
- 参数化类型，顾名思义，就是==将参数类型由原来的具体的类型参数化，然后在使用/调用时传入具体的类型==。
- 这种参数类型可以用在类、方法和接口中，分别被称为泛型类、泛型方法、泛型接口

> 泛型定义格式：

- `<类型>`:指定一种类型的格式。这里的类型可以看成是形参
- `<类型1,类型2,...>`:指定多种类型的格式，多种类型之间用逗号隔开。这里的类型可以看成是形参
- 将来具体调用的时候给定的类型可以看成是实参，并且实参的数据类型只能是引用数据类型

> 泛型的好处：

- 把运行时期的问题提前到了编译期间
- 避免了强制类型转换

### 泛型类

> 泛型类的定义格式：

- 格式：`修饰符 class 类名<类型> { }`
- 范例：`public class Generic<T> { }`
- 此处的==T==可以随便写为任意标识，常见的如==T、E、K、V==等形式的参数常用于表示泛型

```java
public class Generic<T> {
    private T t;

    public T getT() {
        return t;
    }

    public void setT(T t) {
        this.t = t;
    }
}
```

```java
Generic<String> g1 = new Generic<String>();
g1.setT("林青霞");
System.out.println(g1.getT());

Generic<Integer> g2 = new Generic<Integer>();
g2.setT(30);
System.out.println(g2.getT());
```

### 泛型方法

> 泛型方法的定义格式：

- 格式：

```java
修饰符 <类型> 返回值类型 方法名(类型 变量名) {}
```

- 范例：

```java
public <T> void sjow(T t) {} 
```

---

```java
public class Generic {
    public <T> void show(T t) {
        System.out.println(t);
    }
}
```

```java
Generic g = new Generic();
g.show("林青霞");
g.show(30);
g.show(true);
g.show(12.34);
```

### 泛型接口

> 泛型接口的定义格式：

- 格式：

```java
修饰符 interface 接口名<类型> {}
```

- 范例：

```java
public interface Generic<T> {}
```

---

```java
public interface Generic<t> {
    void show(T t);
}
```

```java
public class GenericImpl<T> implements Generic<T> {
    @override
    public void show(T t) {
        System.out.println(t);
    }
}
```

```java
Generic<String> g1 = new GenericImpl<String>();
g1.show("林青霞");

Generic<Integer> g2 = new GenericImpl<Integer>();
g2.show(30);
```

### 类型通配符

为了表示各种泛型List的父类，可以使用类型通配符。

- 类型通配符：`<?>`
- `List<?>`：表示元素类型未知的List，它的元素可以匹配==任何的类型==
- 这种带通配符的List仅表示它是各种泛型List的父类，并不能把元素添加到其中

> 类型通配符上限

- 如果不希望List<?>是任何泛型List的父类，只希望它代表某一类泛型的父类，可以使用类型通配符的上限
- 类型通配符上限：`<? extends 类型>`
- `List<? extends Number>`：它表示的类型是==Number或者其子类型==

> 类型通配符下限

- 类型通配符下限：`<? super 类型>`
- `List<? super Number>`：它表示的是==Number或者其父类型==

### 可变参数

可变参数又称参数个数可变，用作方法形参出现，那么方法参数个数就是可变的了。

- 格式：

```java
修饰符 返回值类型 方法名(数据类型... 变量名) {}
```

- 范例：

```java
public static int sum(int... a) {}
```

---

```java
public static int sum(int... a) {
    int sum = 0;
    for (int i : a) {
        sum += i;
    }
    return sum;
}
```

```java
System.out.println(sum(10, 20));
System.out.println(sum(10, 20, 30));
System.out.println(sum(10, 20, 30, 40));
```

> 可变参数注意事项：

- 这里的变量其实是一个数组
- 如果一个方法有多个参数，包含可变参数，==可变参数要放在最后==

```java
public static int sum(int b, int... a) {}
```

#### 可变参数的使用

Arrays工具类中有一个静态方法：
- `public static <T> List<T> asList(T... a)`：返回由指定数组支持的固定大小的列表
- 返回的集合不能做增删操作，可以做修改操作

List接口中有一个静态方法：
- `public static <E> List<E> of(E... elements)`：返回包含任意数量元素的==不可变列表==
- 返回的集合不能做增删改操作

Set接口中有一个静态方法：
- `public static <E> Set<E> of(E... elements)`：返回一个包含任意数量元素的==不可变集合==
- 在给元素的时候，不能给重复的元素
- 返回的集合不能做增删操作，没有修改的方法

## Map

### Map集合概述和特点

> Map结合概述

- `Interface Map<K, V>`  K：键的类型; V：值的类型
- 将键映射到值的对象；不能包含重复的键；每个键可以映射到最多一个值

> 创建Map集合的对象

- 多态的方式
- 具体的实现类HashMap

```java
import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {
        // 创建集合对象
        Map<String, String> map = new HashMap<String, String>();

        // V put (K key, V value) 将指定的值与该映射中的指定键相关联
        map.put("itheima001", "林青霞");
        map.put("itheima002", "张曼玉");
        map.put("itheima003", "王祖贤");
        map.put("itheima003", "柳岩"); // 替换了王祖贤

        // 输出集合对象
        System.out.println(map);
    }
}
```

### Map集合的基本功能

|               方法名                |                 描述                 |
| :---------------------------------: | :----------------------------------: |
|        V put(K key, V value)        |               添加元素               |
|        V remove(Object key)         |         根据键删除键值对元素         |
|            void clear()             |         移除所有的键值对元素         |
|   boolean containsKey(Object key)   |       判断集合是否包含指定的键       |
| boolean containsValue(Object value) |       判断集合是否包含指定的值       |
|          boolean isEmpty()          |           判断集合是否为空           |
|             int size()              | 集合的长度，也就是集合中键值对的个数 |

### Map集合的获取功能

|             方法名              |           描述           |
| :-----------------------------: | :----------------------: |
|        V get(Object key)        |       根据键获取值       |
|         Set<K> keySet()         |     获取所有键的集合     |
|     Collection<V> values()      |     获取所有值的集合     |
| Set<Map.Entry<K, V>> entrySet() | 获取所有键值对对象的集合 |

### Map集合的遍历（方式一）

> 遍历思路：

- 获取所有键的集合，用`keySet()`方法实现
- 遍历键的集合，获取到每一个键，用`增强for`实现
- 根据键去找值，用`get(Object key)`方法实现

```java
// 创建集合对象
Map<String, String> map = new HashMap<String, String>();

// 添加元素
map.put("张无忌", "赵敏");
map.put("郭靖", "黄蓉");
map.put("杨过", "小龙女");

// 获取所有键的集合
Set<String> keySet = map.keySet();

// 遍历键的集合，获取到每一个键
for (String key : keySet) {
    // 根据键去找值
    String value = map.get(key);
    System.out.println(key + "," + value);
}
```

### Map集合的遍历（方式二）

> 遍历思路:

- 获取所有键值对对象的集合，用`Set<Map.Entry<K, V>> entrySet()`方法实现
- 遍历键值对对象的集合，得到每一个键值对对象集合，用`增强for`实现
- 根据键值对对象获取键和值，用`getKey()`和`getValue()`方法实现

```java
// 创建集合对象
Map<String, String> map = new HashMap<String, String>();

// 添加元素
map.put("张无忌", "赵敏");
map.put("郭靖", "黄蓉");
map.put("杨过", "小龙女");

// 获取所有键值对对象的集合
Set<Map.Entry<String, String>> entrySet = map.entrySet();

// 遍历键值对对象的集合，得到每一个键值对对象集合
for (Map.Entry<String, String> me : entrySet) {
    // 根据键值对对象获取键和值
    String key = me.getKey();
    String value = me.getValue();
    System.out.println(key + "," + value);
}
```

### 案例：HashMap集合存储学生对象并遍历

```java
// 创建集合对象
Map<String, Student> hm = new HashMap<String, Student>();

// 创建学生对象
Student s1 = new Student("林青霞", 30);
Student s2 = new Student("张曼玉", 35);
Student s3 = new Student("王祖贤", 33);

// 添加元素
hm.put("itheima001", s1);
hm.put("itheima002", s2);
hm.put("itheima003", s3);

// 方式一：键找值
Set<String> keySet = hm.keySet();
for (String key : keySet) {
    Student value = hm.get(key);
    System.out.println(key + "," + value.getName() + "," + value.getAge());
}

System.out.println("--------");

// 方式二：键值对对象找键和值
Set<Map.Entry<String, Student>> entrySet = hm.entrySet();
for (Map.Entry<String, Student> me : entrySet) {
    String key = me.getKey();
    Student value = me.getValue();
    System.out.println(key + "," + value.getName() + "," + value.getAge());
}
```

### 案例：HashMap集合存储学生对象并遍历

需求：创建一个HashMap集合，键是学生对象(Student)，值是居住地(String)。存储多个键值对元素，并遍历。
要求保证键的唯一性：==如果学生对象的成员变量相同，我们就认为是同一个对象==。

```java
import java.util.Objects;

public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Student student = (Student) o;

        if (age != student.age) return false;
        return Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + age;
        return result;
    }
}
```

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MapDemo {
    public static void main(String[] args) {
        // 创建集合对象
        Map<Student, String> hm = new HashMap<Student, String>();

        // 创建学生对象
        Student s1 = new Student("林青霞", 30);
        Student s2 = new Student("张曼玉", 35);
        Student s3 = new Student("王祖贤", 33);
        Student s4 = new Student("王祖贤", 33);

        // 添加元素
        hm.put(s1, "西安");
        hm.put(s2, "武汉");
        hm.put(s3, "郑州");
        hm.put(s4, "北京");

        // 方式一：键找值
        Set<Student> keySet = hm.keySet();
        for (Student key : keySet) {
            String value = hm.get(key);
            System.out.println(key.getName() + "," + key.getAge() + "," + value);
        }

        System.out.println("--------");

        // 方式二：键值对对象找键和值
        Set<Map.Entry<Student, String>> entrySet = hm.entrySet();
        for (Map.Entry<Student, String> me : entrySet) {
            Student key = me.getKey();
            String value = me.getValue();
            System.out.println(key.getName() + "," + key.getAge() + "," + value);
        }
    }
}
```

### 案例：ArrayList集合存储HashMap元素并遍历

需求：创建一个ArrayList集合，存储三个元素，每一个元素都是HashMap，每一个HashMap的键和值都是String，并遍历。

```java
// 创建ArrayList集合
ArrayList<HashMap<String, String>> array = new ArrayList<HashMap<String, String>>();
// 创建HashMap集合并添加键值对元素
HashMap<String, String> hm1 = new HashMap<String, String>();
hm1.put("孙策", "大乔");
hm1.put("周瑜", "小乔");
// 把HashMap作为元素添加到ArrayList集合
array.add(hm1);

// 创建HashMap集合并添加键值对元素
HashMap<String, String> hm2 = new HashMap<String, String>();
hm1.put("郭靖", "黄蓉");
hm1.put("杨过", "小龙女");
// 把HashMap作为元素添加到ArrayList集合
array.add(hm2);

// 创建HashMap集合并添加键值对元素
HashMap<String, String> hm3 = new HashMap<String, String>();
hm1.put("令狐冲", "任盈盈");
hm1.put("林平之", "岳灵珊");
// 把HashMap作为元素添加到ArrayList集合
array.add(hm3);

// 遍历ArrayList集合
for (HashMap<String, String> hm : array) {
    Set<String> keySet = hm.keySet();
    for (String key : keySet) {
        String value = hm.get(key);
        System.out.println(key + "," + value);
    }
}
```

### 案例：HashMap集合存储ArrayList元素并遍历

需求：创建一个HashMap集合，存储三个键值对元素，每一个键值对元素的键是String，值是ArrayList，每一个ArrayList的元素是String，并遍历。

```java
// 创建HashMap集合
HashMap<String, ArrayList<String>> hm = new HashMap<String, ArrayList<String>>();

// 创建ArrayList集合，并添加元素
ArrayList<String> sgyy = new ArrayList<String>();
sgyy.add("诸葛亮");
sgyy.add("赵云");

// 把ArrayList作为元素添加到HashMap集合
hm.put("三国演义", sgyy);

// 创建ArrayList集合，并添加元素
ArrayList<String> xyj = new ArrayList<String>();
sgyy.add("唐僧");
sgyy.add("孙悟空");

// 把ArrayList作为元素添加到HashMap集合
hm.put("西游记", xyj);

// 创建ArrayList集合，并添加元素
ArrayList<String> shz = new ArrayList<String>();
sgyy.add("武松");
sgyy.add("鲁智深");

// 把ArrayList作为元素添加到HashMap集合
hm.put("水浒传", shz);

// 遍历HashMap集合
Set<String> keySet = hm.keySet();
for (String key : keySet) {
    System.out.println(key);
    ArrayList<String> value = hm.get(key);
    for (String s : value) {
        System.out.println("\t" + s);
    }
}
```

### 案例：统计字符串中每个字符出现的次数

需求：键盘录入一个字符串，要求统计字符串中每个字符出现的次数。

```java
Scanner sc = new Scanner(System.in);
System.out.println("请输入一个字符串：");
String line = sc.nextLine();

// HashMap<Character, Integer> hm = new HashMap<Character, Integer>(); // 无序
TreeMap<Character, Integer> hm = new TreeMap<Character, Integer>(); // 自然顺序
for (int i = 0; i < line.length(); i++) {
    char key = line.charAt(i);
    Integer value = hm.get(key);

    if (value == null) {
        hm.put(key, 1);
    } else {
        value++;
        hm.put(key, value);
    }
}

StringBuilder sb = new StringBuilder();
Set<Character> keySet = hm.keySet();
for (Character key : keySet) {
    Integer value = hm.get(key);
    sb.append(key).append("(").append(value).append(")");
}

String result = sb.toString();
System.out.println(result);
```

## Collections

### Collections概述和使用

> Collections类的概述

- 是针对集合操作的工具类

> Collections类的常用方法

|                                 方法名                                  |                描述                |
| :---------------------------------------------------------------------: | :--------------------------------: |
| public static <T extends Comparable<? super T>> void sort(List<T> list) |       将指定的列表按升序排序       |
|                public static void reverse(List<?> list)                 |      反转指定列表中元素的顺序      |
|                public static void shuffle(List<?> list)                 | 使用默认的随机源随机排列指定的列表 |

```java
// 创建集合对象
        List<Integer> list = new ArrayList<Integer>();

        // 添加元素
        list.add(30);
        list.add(20);
        list.add(50);
        list.add(10);
        list.add(40);

        Collections.sort(list);
        System.out.println(list); // [10, 20, 30, 40, 50]

        Collections.reverse(list);
        System.out.println(list); // [50, 40, 30, 20, 10]

        Collections.shuffle(list);
        System.out.println(list); // [30, 50, 40, 10, 20]
```

### 案例：Arraylist集合存储学生对象并排序

需求：ArrayList存储学生对象，使用Collections对ArrayList进行排序
要求：按照年龄从小到大进行排序，年龄相同时，按照姓名的字母顺序排序

```java
ArrayList<Student> array = new ArrayList<Student>();

Student s1 = new Student("linqingxia", 30);
Student s2 = new Student("zhangmanyu", 35);
Student s3 = new Student("wangzuxian", 33);
Student s4 = new Student("liuyan", 33);

array.add(s1);
array.add(s2);
array.add(s3);
array.add(s4);

Collections.sort(array, new Comparator<Student>() {
    @Override
    public int compare(Student s1, Student s2) {
        int num = s1.getAge() - s2.getAge();
        int num2 = num == 0 ? s1.getName().compareTo(s2.getName()) : num;
        return num2;
    }
});

for (Student s : array) {
    System.out.println(s.getName() + "," + s.getAge());
}
```

### 案例：模拟斗地主

需求：通过程序实现斗地主过程中的洗牌，发牌和看牌。

```java
public static void main(String[] args) {
    // 创建牌盒
    ArrayList<String> array = new ArrayList<String>();

    // 定义花色数组
    String[] colors = {"♦", "♣", "♥", "♠"};
    // 定义点数数组
    String[] numbers = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};
    for (String color : colors) {
        for (String number : numbers) {
            array.add(color + number);
        }
    }
    array.add("小王");
    array.add("大王");

    // 洗牌
    Collections.shuffle(array);

    // 发牌
    ArrayList<String> lqxArray = new ArrayList<String>();
    ArrayList<String> lyArray = new ArrayList<String>();
    ArrayList<String> fqyArray = new ArrayList<String>();
    ArrayList<String> dpArray = new ArrayList<String>();

    for (int i = 0; i < array.size(); i++) {
        String poker = array.get(i);

        if (i >= array.size() - 3) {
            dpArray.add(poker);
        } else if (i % 3 == 0) {
            lqxArray.add(poker);
        } else if (i % 3 == 1) {
            lyArray.add(poker);
        } else if (i % 3 == 2) {
            fqyArray.add(poker);
        }
    }

    // 看牌
    lookPoker("林青霞", lqxArray);
    lookPoker("柳岩", lyArray);
    lookPoker("风清扬", fqyArray);
    lookPoker("底牌", dpArray);
}

// 看牌的方法
public static void lookPoker(String name, ArrayList<String> array) {
    System.out.print(name + "的牌是：");
    for (String poker : array) {
        System.out.print(poker + " ");
    }
    System.out.println();
}
```

### 案例：模拟斗地主升级版

需求：通过程序实现斗地主过程中的洗牌，发牌和看牌。
要求：对牌进行排序。

```java
public static void main(String[] args) {
    HashMap<Integer, String> hm = new HashMap<Integer, String>();

    ArrayList<Integer> array = new ArrayList<Integer>();

    String[] colors = {"♦", "♣", "♥", "♠"};
    String[] numbers = {"3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"};

    int index = 0;
    for (String number : numbers) {
        for (String color : colors) {
            hm.put(index, color + number);
            array.add(index);
            index++;
        }
    }

    hm.put(index, "小王");
    array.add(index);
    index++;

    hm.put(index, "大王");
    array.add(index);

    Collections.shuffle(array);

    TreeSet<Integer> lqxSet = new TreeSet<Integer>();
    TreeSet<Integer> lySet = new TreeSet<Integer>();
    TreeSet<Integer> fqySet = new TreeSet<Integer>();
    TreeSet<Integer> dpSet = new TreeSet<Integer>();
    for (int i = 0; i < array.size(); i++) {
        int x = array.get(i);

        if (i >= array.size() - 3) {
            dpSet.add(x);
        } else if (i % 3 == 0) {
            lqxSet.add(x);
        } else if (i % 3 == 1) {
            lySet.add(x);
        } else if (i % 3 == 2) {
            fqySet.add(x);
        }
    }

    lookPoker("林青霞", lqxSet, hm);
    lookPoker("柳岩", lySet, hm);
    lookPoker("风清扬", fqySet, hm);
    lookPoker("底牌", dpSet, hm);
}

public static void lookPoker(String name, TreeSet<Integer> ts, HashMap<Integer, String> hm) {
    System.out.print(name + "的牌是：");
    for (Integer key : ts) {
        String poker = hm.get(key);
        System.out.print(poker + " ");
    }
    System.out.println();
}
```

# IO流

## File

### File类概述和构造方法

- File：它是文件和目录路径名的抽象表示。
- 文件和目录是可以通过File封装成对象的
- 对于File而言，其封装的并不是一个真正存在的文件，仅仅是一个路径名而已，它可以是存在的，也可以是不存在的，将来是要通过具体的操作把这个路径的内容转换为具体存在的。

> File类构造方法

|              方法名               |                            描述                            |
| :-------------------------------: | :--------------------------------------------------------: |
|       File(String pathname)       | 通过将给定的路径名字符串转换为抽象路径名来创建新的File实例 |
| File(String parent, String child) |      从父路径名字符串和子路径名字符串创建新的File实例      |
|  File(File parent, String child)  |       从父抽象路径名和子路径名字符串创建新的File实例       |

```java
File f1 = new File("E:\\itcast\\java.txt");
System.out.prinln(f1); // E:\itcast\java.txt

File f2 = new File("E:\\itcast", "java.txt");
System.out.prinln(f2); // E:\itcast\java.txt

File f3 = new File("E:\\itcast");
File f4 = new File(f3, "java.txt");
System.out.prinln(f4); // E:\itcast\java.txt
```

### File类创建功能

|            方法名             |                              描述                              |
| :---------------------------: | :------------------------------------------------------------: |
| public boolean creatNewFile() | 当具有该名称的文件不存在时，创建一个由该抽象路径名命名的空文件 |
|    public boolean mkdir()     |                  创建由此抽象路径名命名的目录                  |
|    public boolean mkdirs()    |   创建由此抽象路径名命名的目录，包括任何必需但不存在的父目录   |

```java
File f1 = new File("E:\\itcast\\java.txt");
System.out.println(f1.creatNewFile()); // 文件不存在，就创建文件，返回true；文件存在，就不创建文件，返回false

File f2 = new File("E:\\itcast\\JavaSE");
System.out.println(f2.mkdir()); // 目录不存在，就创建目录，返回true；目录存在，就不创建目录，返回false

File f3 = new File("E:\\itcast\\JavaWEB\\HTML");
System.out.println(f3.mkdirs()); // 创建多级目录

File f4 = new File("E:\\itcast\\javase.txt");
System.out.println(f4.creatNewFile());
```

### File类判断和获取功能

|             方法名              |                           描述                           |
| :-----------------------------: | :------------------------------------------------------: |
|  public boolean isDirectory()   |           测试此抽象路径名表示的File是否为目录           |
|     public boolean isFile()     |           测试此抽象路径名表示的File是否为文件           |
|     public boolean exists()     |            测试此抽象路径名表示的File是否存在            |
| public String getAbsolutePath() |            返回此抽象路径名的绝对路径名字符串            |
|     public String getPath()     |             将此抽象路径名转换为路径名字符串             |
|     public String getName()     |         返回由此抽象路径名表示的文件或目录的名称         |
|     public String[] list()      | 返回此抽象路径名表示的目录中的文件和目录的名称字符串数组 |
|    public File[] listFiles()    |  返回此抽象路径名表示的目录中的文件和目录的File对象数组  |

### File类删除功能

|         方法名          |                描述                |
| :---------------------: | :--------------------------------: |
| public boolean delete() | 删除由此抽象路径名表示的文件或目录 |

> 绝对路径和相对路径的区别

- 绝对路径：==完整的路径名==，不需要任何其他信息就可以定位它所表示的文件。例如：E:\\itcast\\java.txt
- 相对路径：必须使用取自其他路径名的信息进行解释。例如：myFile\\java.txt

> 删除目录时的注意事项

- 如果一个==目录中有内容==（目录，文件），==不能直接删除==。应该先删除目录中的内容，最后才能删除目录

### 递归

递归概述：以编程的角度来看，递归指的是方法定义中调用方法本身的现象。

> 递归解决问题的思路

- 把一个复杂的问题层层转化为一个==与原问题相似的规模较小==的问题来求解
- 递归策略只需==少量的程序==就可以描述出解题过程所需要的多次重复计算

> 递归解决问题要找到两个内容：

- 递归出口：否则会出现内存溢出
- 递归规则：与原问题相似的规模较小的问题

> 不死神兔

```java
public static int f(int n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return f(n-1) + f(n - 2);
    }
}

System.out.println(f(20)); // 6765
```

#### 案例：递归求阶乘

需求：用递归求5的阶乘，并把结果在控制台输出。

```java
public static void main(String[] args) {
    int result = jc(5);
    System.out.println("5的阶乘是：" + result); // 120
}

public static int jc(int n) {
    if (n == 1) {
        return 1;
    } else {
        return n * jc(n - 1);
    }
}
```

#### 案例：遍历目录

需求：给定一个路径(E:\\itcast)，请通过递归完成遍历该目录下的所有内容，并把所有文件的绝对路径输出在控制台。

```java
public static void main(String[] args) {
    File srcFile = new File("E:\\itcast");

    getAllFilePath(srcFile);
}

public static void getAllFilePath(File srcFile) {
    File[] fileArray = srcFile.listFiles();
    if (fileArray != null) {
        for (File file : fileArray) {
            if (file.isDirectory()) {
                getAllFilePath(file);
            } else {
                System.out.println(file.getAbsolutePath());
            }
        }
    }
}
```

## 字节流

### IO流概述和分类

> IO流概述

- IO：输入/输出(Input/Output)
- 流：是一种抽象的概念，是对数据传输的总称。也就是说数据在设备间的传输成为流，流的本质是数据传输。
- IO流就是用来处理设备间数据传输问题的
  - 常见的应用：文件复制、文件上传、文件下载

> IO流分类

- 按照数据的流向
  - 输入流：读数据
  - 输出流：写数据
- 按照数据类型来分
  - 字节流
    - 字节输入流，字节输出流
  - 字符流
    - 字符输入流，字符输出流

> 一般来说，我们说IO流的分类是按照==数据类型==来分的

> 那么两种流都在什么情况下使用呢？

- 如果数据通过Windows自带的记事本软件打开，我们还==可以读懂里面的内容，就使用字符流，否则使用字节流==。如果不知道该使用哪种类型的流，就使用字节流。

### 字节流写数据

> 字节流抽象基类

- InputStream：这个抽象类是表示字节输入流的所有类的超类
- OutputStream：这个抽象类是表示字节输出流的所有类的超类
- 子类名特点：子类名称都是以其父类名作为子类名的后缀

> `FileOutputStream`：文件输出流用于将数据写入File

- `FileOutputStream(String name)`：创建文件输出流以指定的名称写入文件

> 使用字节输出流写数据的步骤

- 创建字节输出流对象（调用系统功能创建了文件，创建字节输出流对象，让字节输出流对象指向文件）
- 调用字节输出流对象的写数据方法
- 释放资源（关闭此文件输出流并释放与此流相关联的任何系统资源）

```java
// 创建字节输出流对象
FileOutputStream fos = new FileOutputStream("myByteStream\\fos.txt");
// 将指定的字节写入文件输出流
fos.write(97);
// 释放资源
fos.close();
```

### 字节流写数据的3种方式

|                 方法名                 |                                             描述                                             |
| :------------------------------------: | :------------------------------------------------------------------------------------------: |
|           void write(int b)            |                       将指定的字节写入此文件输出流，一次写一个字节数据                       |
|          void write(byte[] b)          |            将b.length字节从指定的字节数组写入此文件输出流，一次写一个字节数组数据            |
| void write(byte[] b, int off, int len) | 将len字节从指定的字节数组开始，从偏移量off开始写入此文件输出流，一次写一个字节数组的部分数据 |

### 字节流写数据的两个小问题

> 字节流写数据如何实现换行？

- 写完数据后，加换行符
  - Windows：`\r\n`
  - Linux：`\n`
  - mac：`\r`

> 字节流写数据如何实现追加写入呢？

- `public FileOutputStream(String name, boolean append)`
- 创建文件输出流以指定的名称写入文件。如果第二个参数为`true`，则字节将写入文件的末尾而不是开头

### 字节流写数据加异常处理

- `finally`：在异常处理时提供finally块来执行所有清除操作。比如说IO流中的释放资源。
- 特点：被finally控制的语句一定会执行，除非JVM退出

```java
try {
    可能出现异常的代码;
} catch (异常类名 变量名) {
    异常的处理代码;
} finally {
    执行所有清除操作;
}
```

```java
FileOutputStream fos = null;

try {
    fos = new FileOutputStream("myByteStream\\fos.txt");
    fos.write("hello".getBytes());
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (fos != null) {
        try {
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 字节流读数据（一次读一个字节数据）

> FileInputStream：从文件系统中的文件获取输入字节

- `FileInputStream(String name)`：通过打开与实际文件的连接来创建一个FileInputStream，该文件由文件系统中的路径名name命名。

> 需求：把文件fos.txt中的内容读取出来在控制台输出。

```java
FileInputStream fis = new FileInputStream("maByteStream\\fos.txt");
int by = fis.read();
System.out.println((char) by);
fis.close();
```

```java
FileInputStream fis = new FileInputStream("maByteStream\\fos.txt");
int by;
while ((by = fis.read()) != -1) {
    System.out.println((char) by);
}
fis.close();
```

### 案例：复制文本文件

需求：把“E:\\itcast\\窗里窗外.txt”复制到模块目录下的“窗里窗外.txt”

```java
FileInputStream fis = new FileInputStream("E:\\itcast\\窗里窗外.txt");
FileOutputStream fos = new FileOutputStream("myByteStream\\窗里窗外.txt");

int by;
while ((by = fis.read()) != -1) {
    fos.write(by);
}

fos.close();
fis.close();
```

### 字节流读数据（一次读一个字节数组数据）

需求：把文件fos.txt中的内容读取出来在控制台输出。

```java
FileInputStream fis = new FileInputStream("myByteStream\\fos.txt");

byte[] bys = new byte[1024]; // 一般给1024及其整数倍
int len;
while ((len = fis.read(bys)) != -1) {
    System.out.println(new String(bys, 0, len));
}

fis.close();
```

### 案例：复制图片

需求：把“E:\\itcast\\mn.jpg”复制到模块目录下的“mn.jpg”

```java
FileInputStream fis = new FileInputStream("E:\\\\itcast\\\\mn.jpg");
FileOutputStream fos = new FileOutputStream("myByteStream\\mn.jpg");

byte[] bys = new byte[1024];
int len;
while ((len = fis.read(bys)) != -1) {
    fos.write(bys, 0, len);
}

fis.close();
fos.close();
```

### 字节缓冲流

> 字节缓冲流

- `BufferedOutputStream`：该类实现缓冲输出流。通过设置这样的输出流，应用程序可以向底层输出流写入字节，而不必为写入的每个字节导致底层系统的调用。
- `BufferedInputStream`：创建BufferedInputStream将创建一个内部缓冲区数组。当从流中读取或跳过字节时，内部缓冲区将根据需要从所包含的输入流中重新填充，一次很多字节。

> 构造方法

- 字节缓冲输出流：`BufferedOutputStream(OutputStream out)`
- 字节缓冲输入流：`BufferedInputStream(InputStream in)`

> 为什么构造方法需要的是字节流，而不是具体的文件或者路径呢？

- 字节缓冲流==仅仅提供缓冲区==，而真正的读写数据还得依靠基本的字节流对象进行操作。

### 案例：复制视频

需求：把“E:\\itcast\\字节流复制图片.avi”复制到模块目录下的“字节流复制图片.avi”

```java
public static void main(String[] args) throws IOException {
    long startTime = System.currentTimeMillis();

    method1(); // 共耗时64565毫秒
    method2(); // 共耗时107毫秒
    method3(); // 共耗时405毫秒
    method4(); // 共耗时60毫秒

    long endTime = System.currentTimeMillis();
    System.out.println("共耗时：" + (endTime - startTime) + "毫秒");
}

// 基本字节流一次读写一个字节
public static void method1() throws IOException {
    FileInputStream fis = new FileInputStream("E:\\itcast\\字节流复制图片.avi");
    FileOutputStream fos = new FileOutputStream("muByteStream\\字节流复制图片.avi");

    int by;
    while ((by = fis.read()) != -1) {
        fos.write(by);
    }

    fos.close();
    fis.close();
}

// 基本字节流一次读写一个字节数组
public static void method2() throws IOException {
    FileInputStream fis = new FileInputStream("E:\\itcast\\字节流复制图片.avi");
    FileOutputStream fos = new FileOutputStream("muByteStream\\字节流复制图片.avi");

    byte[] bys = new byte[1024];
    int len;
    while ((len = fis.read(bys)) != -1) {
        fos.write(bys, 0, len);
    }

    fos.close();
    fis.close();
}

// 字节缓冲流一次读写一个字节
public static void method3() throws IOException {
    BufferedInputStream bis = new BufferedInputStream(new FileInputStream("E:\\itcast\\字节流复制图片.avi"));
    BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("muByteStream\\字节流复制图片.avi"));

    int by;
    while ((by = bis.read()) != -1) {
        bos.write(by);
    }

    bos.close();
    bis.close();
}

// 字节缓冲流一次读写一个字节数组
public static void method4() throws IOException {
    BufferedInputStream bis = new BufferedInputStream(new FileInputStream("E:\\itcast\\字节流复制图片.avi"));
    BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("muByteStream\\字节流复制图片.avi"));

    byte[] bys = new byte[1024];
    int len;
    while ((len = bis.read(bys)) != -1) {
        bos.write(bys, 0, len);
    }

    bos.close();
    bis.close();
}
```

## 字符流

### 为什么出现字符流

由于字节流操作中文不是特别方便，所以java就提供了字符流

- ==字符流 = 字节流 + 编码表==

> 用字节流复制文本文件时，文本文件也会有中文，但是没有问题，原因是最终底层操作会自动将字节拼接成中文，如何识别是中文的呢？

- 汉字在存储的时候，无论选择哪种编码存储，第一个字节都是负数

### 编码表

> 基础知识

- 计算机中储存的信息都是用==二进制==数表示的，我们在屏幕上看到的英文、汉字等字符是二进制数转换之后的结果
- 按照某种规则，将字符存储到计算机中，成为==编码==。反之，将在存储在计算机中的二进制数按照某种规则解析显示出来，称为==解码==。这里强调一下：按照A编码存储，必须按照A编码解析，这样才能显示正确的文本符号，否则就会导致乱码现象。
  - 字符编码：就是一套自然语言的字符与二进制数之间的对应规则（A —— 65）


```txt
HEX —— 十六进制
DEC —— 十进制
OCT —— 八进制
BIN —— 二进制
```

> 字符集

- 是一个系统支持的所有字符的集合，包括各国家文字、标点符号、图形符号、数字等
- 计算机要准确的存储和识别各种字符集符号，就需要进行字符编码，一套字符集必然至少有一套字符编码。常见的字符集有ASCII字符集、GBXXX字符集、Unicode字符集等

> ASCII字符集

- ==ASCII==（American Standard Code for Information Interchange，美国信息交换标准代码）：是基于拉丁字母的一套电脑编码系统，用于显示现代英语，主要包括控制字符（回车键、退格、换行键等）和可显示字符（英文大小写字符、阿拉伯数字和西文符号）
- 基本的ASCII字符集，使用7位表示一个字符，共128字符。ASCII的扩展字符集使用8位表示一个字符，共258字符，方便支持欧洲常用字符。

> GBXXX字符集

- GB2312：简体中文码表。一个小于127的字符的意义与原来相同，但两个大于127的字符连在一起时，就表示一个汉字，这样大约可以组合了包含7000多个简体汉字，此外数学符号、罗马希腊的字母、日文的假名等都编进去了，连在ASCII里面本来就有的数字、标点、字母通通重新编了两个字节长的编码，这就是常说的“全角”字符，而原来在127号以下的那些就叫“半角”字符了
- ==GBK==：最常用的中文码表。实在GB2312标准基础上的扩展规范，使用了双字节编码方案，共收录了21003个汉字，完全兼容GB2312标准，同时支持繁体汉字以及日韩汉字等
- GB18030：最新的中文码表。收录汉字70244个，采用多字节编码，每个字可以由1个、2个或4个字节组成。支持中国国内少数民族的文字，同时支持繁体汉字以及日韩汉字等

> Unicode字符集

- 为表达任意语言的任意字符而设计，是业界的一种标准，也称为统一码、标准万国码。它最多使用4个字节的数字来表达每个字母、符号，或者文字。有三种编码方案，UTF-8、UTF-16和UTF32.最为常用的是UTF-8编码
- ==UTF-8==编码：可以用来表示Unicode标准中任意字符，它是电子邮件、网页及其他存储或传送文字的应用中，优先采用的编码。互联网工作小组（IETF）要求所有互联网协议都必须支持UTF-8编码。它使用1-4个字节为每个字符编码
- 编码规则：
  - 128个US-ASCII字符，只需1个字节编码
  - 拉丁文等字符，需要2个字节编码
  - 大部分常用字（含中文），使用3个字符编码
  - 其他极少使用的Unicode辅助字符，使用4个字节编码

> 小结：**采用何种规则编码，就要采用对应规则解码，否则就会出现乱码**

### 字符串中的编码解码问题

> 编码

- `byte[] getBytes()`：使用平台的默认字符集将该String编码为一系列字节，将结果存储到新的字节数组中
- `byte[] getBytes(String charsetName)`：使用指定的字符集将该String编码为一系列字节，将结果存储到新的字节数组中

> 解码

- `String(byte[] bytes)`：通过使用平台的默认字符集解码指定的字节数组来构造新的String
- `String(byte[] bytes, String charsetName)`：通过指定的字符集解码指定的字节数组来构造新的String

### 字符流中的编码解码问题

> 字符流抽象基类

- Reader：字符输入流的抽象类
- Writer：字符输出流的抽象类

> 字符流中和编码解码问题相关的两个类

- `InputStreamReader`
- `OutputStreamWriter`

### 字符流写数据的5中方式

|                  方法名                   |         描述         |
| :---------------------------------------: | :------------------: |
|             void write(int c)             |      写一个字符      |
|          void write(char[] cbuf)          |   写入一个字符数组   |
| void write(char[] cbuf, int off, int len) | 写入字符数组的一部分 |
|          void write(String str)           |     写一个字符串     |
| void write(String str, int off, int len)  | 写一个字符串的一部分 |

| 方法名  |                                 描述                                 |
| :-----: | :------------------------------------------------------------------: |
| flush() |                       刷新流，还可以继续写数据                       |
| close() | 关闭流，释放资源，但是在关闭之前会先刷新流。一旦关闭，就不能再写数据 |

## 字符流读数据的2种方式

|        方法名         |          描述          |
| :-------------------: | :--------------------: |
|      int read()       |   一次读一个字符数据   |
| int read(char[] cbuf) | 一次读一个字符数组数据 |

## 字符流复制Java文件

需求：把模块目录下的“ConversionStreamDemo.java”复制到模块目录下的“Copy.java”

```java
InputStreamReader isr = new InputStreamReader(new FileInputStream("myByteStream\\ConversionStreamDemo.java"));
OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream("myByteStream\\Copy.java"));

// 一次读写一个字符数据
int ch;
while ((ch = isr.read()) != -1) {
    osw.write(ch);
}
osw.close();
isr.close();

// 一次读写一个字符数组
char[] chs = new char[1024];
int len;
while ((len = isr.read()) != -1) {
    osw.write(chs, 0, len);
}
osw.close();
isr.close();
```

### 案例：复制Java文件（改进版）

需求：把模块目录下的“ConversionStreamDemo.java”复制到模块目录下的“Copy.java”

```java
FileReader fr = new FileReader("myByteStream\\ConversionStreamDemo.java");
FileWriter fw = new FileWriter("myByteStream\\Copy.java");

// 一次读写一个字符数据
int ch;
while ((ch = fr.read()) != -1) {
    fw.write(ch);
}
fw.close();
fr.close();

// 一次读写一个字符数组
char[] chs = new char[1024];
int len;
while ((len = fr.read()) != -1) {
    fw.write(chs, 0, len);
}
fw.close();
fr.close();
```

### 字符缓冲流

- `BufferWriter`：将文本写入字符数输出流，缓冲字符，以提供单个字符，数组和字符串的高效写入，可以指定缓冲区大小，或者可以接受默认大小，默认值足够大，可用于大多数用途
- `BufferReader`：从字符输入流读取文本，缓冲字符，以提供字符，数组和行的高效读取，可以指定缓冲区大小，或者可以使用默认大小，默认值足够大，可用于大多数用途

> 构造方法

- `BufferWriter(Writer out)`
- `BufferReader(Reader in)`

### 案例：复制Java文件（字符缓冲流改进版）

需求：把模块目录下的“ConversionStreamDemo.java”复制到模块目录下的“Copy.java”

```java
BufferedReader br = new BufferedReader(new FileReader("myByteStream\\ConversionStreamDemo.java"));
BufferedWriter bw = new BufferedWriter(new FileWriter("myByteStream\\Copy.java"));

// 一次读写一个字符数据
int ch;
while ((ch = br.read()) != -1) {
    bw.write(ch);
}
bw.close();
br.close();

// 一次读写一个字符数组
char[] chs = new char[1024];
int len;
while ((len = br.read()) != -1) {
    bw.write(chs, 0, len);
}
bw.close();
br.close();
```

### 字符缓冲流特有功能

- BufferReader
  - `void newLine()`：写一行行分隔符，行分隔符字符串由系统属性定义
- BufferWriter
  - `public String readLine()`：读一行文字。结果包含行的内容的字符串，不包括任何终止字符，如果流的结尾已经到达，则为null

### 案例：字符缓冲流复制Java文件

需求：把模块目录下的“ConversionStreamDemo.java”复制到模块目录下的“Copy.java”

```java
BufferedReader br = new BufferedReader(new FileReader("myByteStream\\ConversionStreamDemo.java"));
BufferedWriter bw = new BufferedWriter(new FileWriter("myByteStream\\Copy.java"));

String line;
while ((line = br.readLine()) != null) {
    bw.write(line);
    bw.newLine();
    bw.flush();
}

bw.close();
br.close();
```

## IO流小结

![](images/IO%E6%B5%81%E5%B0%8F%E7%BB%93.png)

> 小结：**字节流可以复制任意文件数据，有4种方式，一般采用字节缓冲流一次读写一个字节数组的方式**

![](images/%E5%AD%97%E7%AC%A6%E6%B5%81.png)

> 小结：**字符流只能复制文本数据，有5种方式，一般采用字符缓冲流的特有方式**

## 案例：集合到文件

需求：把ArrayList集合中的字符串数据写入到文本文件。
要求：每一个字符串元素做为文本中的一行数据。

```java
ArrayList<String> array = new ArrayList<String>();

array.add("hello");
array.add("world");
array.add("java");

BufferedWriter bw = new BufferedWriter(new FileWriter("myByteStream\\array.txr"));

for (String s : array) {
    bw.write(s);
    bw.newLine();
    bw.flush();
}

bw.close();
```

### 案例：文件到集合

需求：把文本文件的数据读取到集合中，并遍历集合。
要求：文件中每一行数据就是一个集合元素。

```java
BufferedReader br = new BufferedReader(new FileReader("myByteStream\\array.txt"));

ArrayList<String> array = new ArrayList<String>();

String line;
while ((line = br.readLine()) != null) {
    array.add(line);
}

br.close();

for (String s : array) {
    System.out.println(s);
}
```

### 案例：点名器

需求：我有一个文件里面存满了班级同学的姓名，每一个姓名占一行，要求通过程序实现随机点名器。

```java
BufferedReader br = new BufferedReader(new FileReader("myCharStream\\names.txt"));

ArrayList<String> array = new ArrayList<String>();
String line;
while ((line = br.readLine()) != null) {
    array.add(line);
}

br.close();

Random r = new Random();
int index = r.nextInt(array.size());

String name = array.get(index);

System.out.println("幸运者是：" + name);
```

### 案例：集合到文件（改进版）

需求：把ArrayList集合中的学生数据写入到文本文件。
要求：每一个学生对象的数据作为文件中的一行数据。

```java
ArrayList<Student> array = new ArrayList<Student>();

Student s1 = new Student("itheima001", "林青霞", 30, "西安");
Student s2 = new Student("itheima002", "张曼玉", 35, "武汉");
Student s3 = new Student("itheima003", "王祖贤", 33, "郑州");

array.add(s1);
array.add(s2);
array.add(s3);

BufferedWriter bw = new BufferedWriter(new FileWriter("myCharStreanm\\student"));

for (Student s : array) {
    StringBuilder sb = new StringBuilder();
    sb.append(s.getSid).append(",").append(s.getName()).append(",").apppend(s.getAge()).append(",").append(s.getAddress);

    bw.write(sb.toString());
    bw.newLine();
    bw.flush();
}

bw.close();
```

### 案例：文件到集合（改进版）

需求：把文本文件中的数据读取到集合中，并遍历集合。
要求：文件中每一行数据就是一个学生对象的成员变量值。

```java
BufferedReader br = new BufferedReader(new FileReader("myCharStream\\students.txt"));
ArrayList<Student> array = new ArrayList<Student>();

String line;
while ((line = br.readLine()) != null) {
    String[] strArray = line.split(",");
    Student s = new Student();

    s.setSid(strArray[0]);
    s.setName(strArray[1]);
    s.setAge(Integer.parseInt(strArray[2]));
    s.setAddress(strArray[3]);

    array.add(s);
}

br.close();

for (Student s : array) {
    System.out.println(s.getSid() + "." + s.getName() + "." + s.getAge() + "," + s.getAddress());
}
```

案例：集合到文件（数据排序改进版）

需求：键盘录入5个学生信息（姓名、语文成绩、数学成绩、英语成绩）。
要求：按照成绩总分从高到低写入文本文件。

```java
TreeSet<Student> ts = new TreeSet<Student>(new Comparator<Student>() {
    @Override
    public int compare(Student s1, Student s2) {
        int num = s2.getSum() - s1.getSum();
        int num2 = num == 0 ? s1.getChinese() - s2.getChinese() : num;
        int num3 = num2 == 0 ? s1.getMath() - s2.getMath() : num2;
        int num4 = num3 == 0 ? s1.getName().compareTo(s2.getName()) : num3;
        return num4;
    }
});

for (int i = 0; i < 5; i++) {
    Scanner sc = new Scanner(System.in);
    System.out.println("请输入第" + (i + 1) + "个学生的信息：");
    System.out.println("姓名：");
    String name = sc.nextLine();
    System.out.println("语文成绩：");
    int chinese = sc.nextInt();
    System.out.println("数学成绩：");
    int math = sc.nextInt();
    System.out.println("英语成绩：");
    int english = sc.nextInt();

    Student s = new Student();
    s.setName(name);
    s.setChinese(chinese);
    s.setMath(math);
    s.setEngkish(english);

    ts.add(s);
}

BufferedWriter bw = new BufferedWriter(new FileWriter("myCharStream\\ts.txt"));

for (Student s : ts) {
    StringBuilder sb = new StringBuilder();
    sb.append(s.getName()).append(",").append(s.getChinese()).append(",").append(s.getMath()).append(",").append(s.getEnglish()).append(",").append(s.getSum());

    bw.write(sb.toString());
    bw.newLine();
    bw.flush();
}

bw.close();
```

### 案例：复制单级文件夹

需求：把“E:\\itcast”这个文件夹复制到模块目录下。

```java
public static void main(String[] args) throws IOException {
    File srcFolder = new File("E:\\itcast");

    String srcFolderName = srcFolder.getName();

    File destFolder = new File("myCharStream", srcFolderName);

    if (!destFolder.exists()) {
        destFolder.mkdir();
    }

    File[] listFiles = srcFolder.listFiles();

    for (File srcfile : listFiles) {
        String srcfileName = srcfile.getName();
        File destFile = new File(destFolder, srcfileName);
        copyFile(srcfile, destFile);
    }
}

public static void copyFile(File srcFile, File destFile) throws IOException {
    BufferedInputStream bis = new BufferedInputStream(new FileInputStream(srcFile));
    BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(destFile));

    byte[] bys = new byte[1024];
    int len;
    while ((len = bis.read()) != -1) {
        bos.write(bys, 0, len);
    }

    bos.close();
    bis.close();
}
```

### 案例：复制多级文件夹

需求：把“E:\\itcast”复制到F盘目录下。

```java
public static void main(String[] args) throws IOException {
    File srcFile = new File("E:\\itcast");
    File destFile = new File("F:\\");

    copyFolder(srcFile, destFile);
}

private static void copyFolder(File srcFile, File destFile) throws IOException {
    if (srcFile.isDirectory()) {
        String srcFileName = srcFile.getName();
        File newFolder = new File(destFile, srcFileName);
        if (!newFolder.exists()) {
            newFolder.mkdir();
        }

        File[] listFiles = srcFile.listFiles();
        for (File file : listFiles) {
            copyFolder(file, newFolder);
        }
    } else {
        File newFile = new File(destFile, srcFile.getName());
        copyFile(srcFile, newFile);
    }
}

public static void copyFile(File srcFile, File destFile) throws IOException {
    BufferedInputStream bis = new BufferedInputStream(new FileInputStream(srcFile));
    BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(destFile));

    byte[] bys = new byte[1024];
    int len;
    while ((len = bis.read()) != -1) {
        bos.write(bys, 0, len);
    }

    bos.close();
    bis.close();
}
```

### 复制文件的异常处理

> try...catch...finally 的做法

```java
try {
    可能出现异常的代码;
} catch (异常类名 变量名) {
    异常的处理代码;
} finally {
    执行所有清除操作;
}
```

```java
public static void copyFile(File srcFile, File destFile) {
    BufferedInputStream bis = null;
    BufferedOutputStream bos = null;

    try {
        bis = new BufferedInputStream(new FileInputStream(srcFile));
        bos = new BufferedOutputStream(new FileOutputStream(destFile));

        byte[] bys = new byte[1024];
        int len;
        while ((len = bis.read()) != -1) {
            bos.write(bys, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        if (bos != null) {
            try {
                bos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        
        if (bis != null) {
            try {
                bis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

> JDK7改进方案

```java
try (定义流对象) {
    可能出现异常的代码;
} catch (异常类名 变量名) {
    异常的处理代码;
}
```

> 自动释放资源

```java
public static void copyFile(File srcFile, File destFile) {
    try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream(srcFile));
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(destFile));) {
        byte[] bys = new byte[1024];
        int len;
        while ((len = bis.read()) != -1) {
            bos.write(bys, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

> JDK9改进方案

```java
定义输入流对象;
定义输出流对象;
try (输入流对象; 输出流对象) {
    可能出现异常的代码;
} catch (异常类名 变量名) {
    异常的处理代码;
}
```

> 自动释放资源

```java
public static void copyFile(File srcFile, File destFile) throws IOException {
    BufferedInputStream bis = new BufferedInputStream(new FileInputStream(srcFile));
    BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(destFile));
    try (bis; bos) {
        byte[] bys = new byte[1024];
        int len;
        while ((len = bis.read()) != -1) {
            bos.write(bys, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

## 特殊操作流

### 标准输入输出流

System类中有两个静态的成员变量：

- `public static final InputStream in`：标准输入流。通常该流对应于键盘输入或由主机环境或用户指定的另一个输入源
- `public static final PrintStream out`：标准输出流。通常该流对应于显示输出或由主机环境或用户指定的另一个输出目标

#### 标准输入流

> 自己实现键盘录入数据

- `BufferedReader br = new BuffreredReader(new InputStreamReader(System.in));`

> 写起来太麻烦了，java就提供了一个类实现键盘录入

- `Scanner sc = new Scanner(System.in);`

#### 标准输出流

输出语句的本质：是一个标准的输出流

- `PrintStream ps = System.out,`
- `PrintStream`类有的方法，`System.out`都可以使用

### 字节打印流

> 打印流分类

- 字节打印流：PrintStream
- 字符打印流：PrintWriter

> 打印流的特点

- 只负责输出数据，不负责读取数据
- 有自己的特有方法

> 字节打印流

- `PrintStream(String fileName)`：使用指定的文件名创建新的打印流
- 使用继承父类的方法写数据，查看的时候会转码；使用自己的特有方法写数据，查看的数据原样输出

```java
PrintString ps = new PrintString("myOtherStream\\ps.txt");

ps.print(97);
ps.println();
ps.print(98);

ps.println(97);
ps.println(98);
```

### 字符打印流

> 构造方法

|                   方法名                   |                                                              描述                                                              |
| :----------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|        PrintWriter(String fileName)        |                                使用指定的文件名创建一个新的PrintWriter，而不需要自动执行行刷新                                 |
| PrintWriter(Writer out, boolean autoFlush) | 创建一个新的PrintWriter<br/>out:字符输出流<br/>autoFlush:一个布尔值，如果为真，则println，printf 或 format方法将刷新输出缓冲区 |

```java
PrintWriter pw = new PrintWriter("myOtherStream\\pw.txt");

pw.write("hello");
pw.write("\r\n");
pw.flush();
pw.write("world");
pw.write("\r\n");
pw.flush();
pw.close();
```

```java
PrintWriter pw = new PrintWriter(new FileWriter("myOtherStream\\pw.txt"), true);

pw.println("hello");
pw.println("world");
pw.close();
```

### 复制Java文件打印流改进版

需求：把模块目录下的“PrintStreamDemo.java”复制到模块目录下的“Copy.java”

```java
BufferedReader br = new BufferedReader(new FileReader("myOtherStream\\PrintStreamDemo.java"));
PrintWriter pw = new PrintWriter(new FileWriter("myOtherStream\\Copy.java"), true);

String line;
while ((line = br.readLine()) != null) {
    pw.println(line);
}

pw.close();
br.close();
```

### 对象序列化流

- 对象序列化：就是将对象保存到磁盘中，或者在网络中传输对象
- 这种机制就是使用一个字节序列表示一个对象，该字节序列包含：对象的类型、对象的数据和对象中存储的属性等信息
- 字节序列写到文件之后，相当于文件中持久保存了一个对象的信息
- 反之，该字节序列还可以从文件中读取回来，重构对象，对它进行反序列化

> 要实现序列化和反序列化就要使用对象序列化流和对象反序列化流

- 对象序列化流：`ObjectOutputStream`
- 对象反序列化流：`ObjectInputStream`

#### 对象序列化流

对象序列化流：`ObjectOutputStream`

- 将Java对象的原始数据类型和图形写入OutputStream。可以使用ObjectInputStream读取（重构）对象。可以通过使用流的文件来实现对象的持久存储。如果流是网格套接字流，则可以在另一个主机上或另一个进程中重构对象。

> 构造方法

- `ObjectOutputStream(OutputStream out)`：创建一个写入指定的ObjectStream的ObjectOutputStream

> 序列化对象的方法

- `void writeString(Object obj)`：将制定的对象写入ObjectOutputStream

> 注意

- 一个对象要想被序列化，该对象所属的类必须实现`Serializable`接口
- `Serializable`是一个==标记接口==，实现该接口，不需要重写任何方法

```java
ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("myOthersStream\\oos.txt"));

Student s = new Student("林青霞", 30);

oos.writeObject(s);

oos.close();
```

#### 对象反序列化流

对象反序列化流：`ObjectInputStream`

- ObjectInputStream反序列化先前使用ObjectOutputStream编写的原始数据和对象

> 构造方法

- `ObjectInputStream(InputStream in)`：创建从指定的InputStream读取的ObjectInputStream

> 反序列化对象的方法

- `Object readObject()`：从ObjectInputStream读取一个对象

```java
ObjectOutputStream ois = new ObjectOutputStream(new FileInputStream("myOthersStream\\oos.txt"));

Object obj = new ois.readObject();

Student s = (Student) obj;
System.out.println(s.getName() + "," + s.getAge());

ois.close();
```

### 对象序列化流问题

> 用对象序列化流序列化了一个对象后，假如修改了对象所属的类文件，读取数据会不会出问题？

- 会出问题，抛出`InvalidClassException`异常

> 如果出问题了，如何解决？

- 给对象所属的类加一个`serialVersionUID`
  - `private static final serialVersionUID = 421;`

> 如果一个对象中的某个成员变量的值不想被序列化，又该如何实现？

- 给该成员变量加一个`transient`关键字，该关键字标记的成员变量不参与序列化过程

### Properties

> Properties概述

- 是一个Map体系的集合类
- Properties可以保存到流中或从流中加载

> 练习：Properties作为Map集合的使用

```java
Properties prop = new Properties();

// 存储元素
prop.put("itheima001", "林青霞");
prop.put("itheima002", "张曼玉");
prop.put("itheima003", "王祖贤");

// 遍历集合
Set<Object> keySet = prop.keySet();
for (Object key : keySet) {
    Object value = prop.get(key);
    System.out.println(key + "," + value);
}
```

> Properties作为集合的特有方法

|                    方法名                    |                               描述                               |
| :------------------------------------------: | :--------------------------------------------------------------: |
| Object setProperty(String key, String value) |   设置集合的键和值，都是String类型，底层调用HashTable方法 put    |
|        String getProperty(String key)        |                 使用此属性列表中指定的键搜索属性                 |
|       Set<String> stringPropertyName()       | 从该属性列表中返回一个不可修改的键集，其中键及其对应的值是字符串 |

```java
Properties prop = new Properties();

// 存储元素
prop.setProperty("itheima001", "林青霞");
prop.setProperty("itheima002", "张曼玉");
prop.setProperty("itheima003", "王祖贤");

System.out.println(prop.getProperty("itheima001"));

Set<String> names = prop.stringPropertyNames();
for (String key : names) {
    String value = prop.getProperty(key);
    System.out.println(key + "," + value);
}
```

> Properties和IO流结合的方法

|                    方法名                     |                                                 描述                                                  |
| :-------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
|          void load(Stream inStream)           |                                从输入字节流读取数组列表（键和元素对）                                 |
|           void load(Reader reader)            |                                从输入字符流读取属性列表（键和元素对）                                 |
| void store(OutputStream out, String comments) | 将此属性列表（键和元素对）写入此Properties表中，以适合于使用load(InputStream)方法的格式写入输出字节流 |
|  void store(Writer writer, String comments)   |    将此属性列表（键和元素对）写入此Properties表中，以适合使用load(Reader)方法的格式写入输出字符流     |

### 案例：游戏次数

需求：请写程序实现猜数字小游戏只能试玩3次，如果还想玩，提示：游戏试玩已结束，想玩请充值。

```java
Properties prop = new Properties();

FileReader fr = new FileReader("myOtherStream\\game.txt");
prop.load(fr);
fr.close();

String count = prop.getProperty("count");
int number = Integer.parseInt(count);

if (number >= 3) {
    System.out.println("游戏试玩已结束，想玩请充值");
} else {
    GuessNumber.start();

    number++;
    prop.setProperty("count", String.valueOf(number));
    FileWriter fw = new FileWriter("myOtherStream\\game.txt");
    prop.store(fw, null);
    fw.close();
}
```

# 多线程

## 实现多线程

### 进程

进程：是正在运行的程序

- 是系统进行资源分配和调用的独立单位
- 每一个进程都有它自己的内存空间和系统资源

### 线程

线程：是进程中的单个顺序控制流，是一条执行路径

- 单线程：一个进程如果只有一条执行路径，则称为单线程程序
- 多线程：一个进程如果有多条执行路径，则成为多线程程序

### 多线程的实现方式1

> 继承Thread类

- 定义一个MyThread类继承Thread类
- 在MyThread类中重写run()方法
- 创建MyThread类的对象
- 启动线程

> 两个小问题

- 为什么要重写run()方法？
  - 因为run()是用来封装被线程执行的代码
- run()方法和start()方法的区别？
  - run()：封装线程执行的代码，直接调用，相当于普通方法的调用
  - start()：启动线程，然后由JVM调用此线程的run()方法

```java
public class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println(i);
        }
    }
}
```

```java
public class MyThreadDemo {
    public static void main(String[] args) {
        MyThread my1 = new MyThread();
        MyThread my2 = new MyThread();

        // 启动线程
        my1.start();
        my2.start();
    }
}
```

### 设置和获取线程名称

> Thread类中设置和获取线程名称的方法

- `void setName(String name)`：将此线程的名称更改为等于参数name
- `String getName()`：返回此线程的名称

### 线程调度

> 线程有两种调度模型

- 分时调度模型：所有线程轮流使用CPU的使用权，平均分配每个线程占用CPU的时间片
- 抢占式调度模型：优先让优先级高的线程使用CPU，如果线程的优先级相同，name会随机选择一个，优先级高的线程获取的CPU时间片相对多一些

> Java使用的是抢占式调度模型。

- 加入计算机只有一个CPU，那么CPU在某一时刻只能执行一条指令，线程只有得到CPU的时间片，也就是使用权，才可以执行指令。所以说多线程程序的执行有==随机性==，因为谁抢到CPU的使用权是不一定的。

> Thread类中设置和获取线程优先级的方法

- `public final int getPriority()`：返回此线程的优先级
- `public final void setPriority(int newPriority)`：更改此线程的优先级
  - 线程默认优先级是==5==，线程优先级的范围是==1-10==
  - 线程优先级高仅仅表示获取CPU时间片的几率高，但是要在次数比较多或者多次运行的时候才能看到你想要的结果

### 线程控制

|             方法名             |                                 说明                                 |
| :----------------------------: | :------------------------------------------------------------------: |
| static void sleep(long millis) |           使当前正在执行的线程停留（暂停执行）指定的毫秒数           |
|          void join()           |                           等待这个线程死亡                           |
|   void setDaemon(boolean on)   | 将此线程标记为守护线程，当运行的线程都是守护线程时，Java虚拟机将退出 |

### 线程生命周期

![](images/%E7%BA%BF%E7%A8%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

### 多线程的实现方式2

> 实现Runnable接口

- 定义一个MyRunnable实现Runnable接口
- 在MyRunnable类中重写run()方法
- 创建MyRunnable类的对象
- 创建Thread类的对象，把MyRunnable对象作为构造方法的参数
  - `Thread(Runnable target, String name)`
- 启动线程

> 多线程的实现方案有2中

- 继承Thread类
- 实现Runnable接口

> 相比继承Thread类，实现Runnable接口的好处

- 避免了Java单继承的局限性
- 适合多个相同程序的代码去处理同一个资源的情况，把线程和程序的代码、数据有效分离，较好地体现了面向对象的设计思想

```java
MyRunnable my = new MyRunnable();

Thread t1 = new Thread(my, "高铁");
Thread t2 = new Thread(my, "飞机");

// 启动线程
t1.start();
t2.start();
```

## 线程同步

### 案例：卖票

需求：某电影院正在上映国产大片，共有100张票，而它有3个窗口售卖，请设计一个程序实现模拟该电影院卖票。

```java
public class SellTicket implements Runnable {
    private int tickets = 100;

    @Override
    public void run() {
        while (true) {
            if (tickets > 0) {
                System.out.println(Thread.currentThread().getName() + "正在出售第" + tickets + "张票");
                tickets--;
            }
        }
    }
}
```

```java
public class SellTicketDemo {
    public static void main(String[] args) {
        SellTicket st = new SellTicket();

        Thread t1 = new Thread(st, "窗口一");
        Thread t2 = new Thread(st, "窗口二");
        Thread t3 = new Thread(st, "窗口三");

        // 启动线程
        t1.start();
        t2.start();
        t3.start();
    }
}
```

### 卖票案例的思考

要求：每次出票时间100毫秒，用sleep()方法实现。

```java
public class SellTicket implements Runnable {
    private int tickets = 100;
    private Object obj = new Object();

    @Override
    public void run() {
        while (true) {
            synchronized (obj) {
                if (tickets > 0) {
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    System.out.println(Thread.currentThread().getName() + "正在出售第" + tickets + "张票");
                    tickets--;
                }
            }
        }
    }
}
```

> 为什么会出现安全问题？

- 是否是多线程环境
- 是否有数据共享
- 是否有多条语句操作共享数据

> 如何解决多线程安全问题？

- 基本思想：让程序没有安全问题的环境

> 如何实现？

- 把多条语句操作共享数据的代码给锁起来，让任意时刻只能有一个线程执行即可
- Java提供了同步代码块的方式来解决

### 同步代码块

锁多条语句操作共享数据，可以使用同步代码块实现

- 格式

```java
synchronized(任意对象) {
    多条语句操作共享数据的代码;
}
```

- synchronized(任意对象)：就相当于给代码加锁了，任意对象就可以看成是一把锁

> 同步的好处和弊端

- 好处：解决了多线程的数据安全问题
- 弊端：当线程很多时，因为每个线程都会去判断同步上的锁，这是很耗费资源的，无形中会降低程序的运行效率

### 同步方法

- 同步方法：把`synchronized`关键字加到方法上
- 格式：

```java
修饰符 synchronized 返回值类型 方法名(方法参数) {}
```

> 同步方法的锁对象是什么？

- `this`

---

- 同步静态方法：把`synchronized`关键字加到静态方法上
- 格式：

```java
修饰符 static synchronized 返回值类型 方法名(方法参数) {}
```

> 同步静态方法的锁对象是什么？

- `类名.this`

### 线程安全的类

#### StringBuffer

- 线程安全，可变的字符序列
- 从版本JDK5开始，被StringBuilder替代。通常应该使用StringBuilder类，因为它支持所有相同的操作，但它更快，因为它不执行同步

#### Vector

- 从Java平台v1.2开始，该类改进了List接口，使其成为Java Collections Framework的成员。与新的集合实现不同，Vector被同步，如果不需要线程安全的实现，建议使用ArrayList代替Vector

#### HashTable

- 该类实现了一个哈希表，它将键映射到值。任何非null对象都可以用作键或者值
- 从Java平台v1.2开始，该类进行了改进，实现了Map接口，使其成为Java Collections Framework的成员。与新的集合实现不同，HashTable被同步。如果不需要线程侵权的实现，建议使用HashMap代替Hashtable

### Lock锁

Lock实现提供比使用synchronized方法和语句可以获得更广泛的锁定操作

> Lock中提供了获得锁和释放锁的方法

- `void lock()`：获得锁
- `void unlock()`：释放锁

Lock是接口不能直接实例化，这里采用它的实现类ReentrantLock来实例化

> ReentrantLock的构造方法

- `ReentrantLock()`：创建一个ReentrantLock的实例

```java
public class SellTicket implements Runnable {
    private int tickets = 100;
    private Lock lock = new ReentrantLock();

    @Override
    public void run() {
        while (true) {
            try {
                lock.lock();
                if (tickets > 0) {
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    System.out.println(Thread.currentThread().getName() + "正在出售第" + tickets + "张票");
                    tickets--;
                }
            } finally {
                lock.unlock();
            }
        }
    }
}
```

## 生产者消费者

### 生产者消费者模式概述

生产者消费者模式是一个十分经典的多线程协作的模式，弄懂生产者消费者问题能够让我们对多线程编程的理解更加深刻。

所谓的生产者消费者问题，实际上主要是包含了两类线程：

- 一类是生产者线程用余生产数据
- 一类是消费者线程用于消费数据

为了解偶生产者和消费者的关系，通常会采用共享的数据区域，就像是一个仓库

- 生产者生产数据之后直接放置在公共数据区中，并不需要关心消费者的行为
- 消费者只需要从共享数据区中去取数据，并不需要关心生产者的行为

> Object类中的等待和唤醒方法：

|      方法名      |                                   描述                                    |
| :--------------: | :-----------------------------------------------------------------------: |
|   void wait()    | 导致当前线程等待，直到另一个线程调用该对象的notify()方法或notifyAll()方法 |
|  void notify()   |                     唤醒正在等待对象监视器的单个线程                      |
| void notifyAll() |                     唤醒正在等待对象监视器的所有线程                      |

### 生产者消费者案例

```java
public class Box {
    private int milk;
    private boolean state = false;

    public synchronized void put(int milk) {
        // 如果有牛奶，等待消费
        if (state) {
            try {
                wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        // 如果没有牛奶，就生产牛奶
        this.milk = milk;
        System.out.println("送奶工将第" + this.milk + "瓶奶放入奶箱");

        // 修改完毕之后，修改奶箱状态
        state = true;

        // 唤醒其他等待的线程
        notifyAll();
    }

    public synchronized void get() {
        // 如果没有牛奶，应该等待生产
        if (!state) {
            try {
                wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        // 如果有牛奶，就消费牛奶
        System.out.println("用户拿到第" + this.milk + "瓶奶");

        // 消费完毕之后，修改奶箱状态
        state = false;

        // 唤醒其他等待的线程
        notifyAll();
    }
}
```

```java
public class Producer implements Runnable {
    private Box b;

    public Producer(Box b) {
        this.b = b;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            b.put(i);
        }
    }
}
```

```java
public class Customer implements Runnable {
    private Box b;

    public Customer(Box b) {
        this.b = b;
    }

    @Override
    public void run() {
        while (true) {
            b.get();
        }
    }
}
```

```java
public class BoxDemo {
    public static void main(String[] args) {
        Box b= new Box();

        Producer p =new Producer(b);

        Customer c = new Customer(b);

        Thread t1 = new Thread(p);
        Thread t2 = new Thread(c);

        t1.start();
        t2.start();
    }
}
```

# 网络编程

## 网络编程入门

### 网络编程概述

> 计算机网络

- 是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统

> 网络编程

- 在网络通信协议下，实现网络互联的不同计算机上运行的程序间可以进行数据交换

### 网络编程三要素

- ==IP地址==
  - 要想让网络中的计算机能够互相通信，必须为每台计算机指定一个标识号，通过这个标识号来指定要接收数据的计算机和识别发送的计算机，而IP地址就是这个标识号。也就是设备的标识
- ==端口==
  - 网络的通信，本质上是两个应用程序的通信。每台计算机都有很多的应用程序，那么在网络通信时，如何区分这些应用程序呢？如果说IP地址可以唯一标识网络中的设备，那么端口号就可以唯一标识设备中的应用程序了。也就是应用程序的标识
- ==协议==
  - 通过计算机网络，可以使多台计算机实现连接，位于同一个网络中的计算机在进行连接和通信时需要遵守一定的规则。在计算机网络中，这些连接和通信的规则被称为网络通信协议，它对数据的传输格式、传输速率、传输步骤等做了统一的规定，通信双方必须同时遵守才能完成数据交换。常见的协议有UDP协议和TCP协议

### IP地址

IP地址：是网络中设备的唯一标识

> IP地址分为两大类

- IPV4：是给每个连接在网络上的主机分配一个32bit地址。按照TCP/IP规定，IP地址用二进制来表示，每个IP地址长32bit，也就是4个字节。例如一个采用二进制形式的IP地址是“11000000 10101000 00000001 01000010”，这么长的地址，处理起来太费劲了。为了方便使用，IP地址经常被写成十进制的形式，中间使用符号“.”分隔不同的字节。于是，上面的IP地址可以表示为“192.168.1.66”。IP地址的这种表示法叫做“点分十进制表示法”，这显然比1和0容易记忆很多
- IPV6：由于互联网的蓬勃发展，Ip地址的需求量愈来愈大，但是网络地址资源有限，使得IP的分配越发紧张。为了扩大地址空间，通过IPV6重新定义地址空间，采用128位地址长度，每16个字节一组，分成8组十六进制数，这样就解决了网络地址资源数量不够的问题

> 常用命令

- `ipconfig`：查看本机IP地址
- `ping IP地址`：检查网络是否连通

> 特殊IP地址

- 127.0.0.1：是回送地址，可以代表本机地址，一般用来测试使用

### InetAddress的使用

InetAddress：此类表示Internet协议（IP）地址

|                  方法名                   |                             描述                             |
| :---------------------------------------: | :----------------------------------------------------------: |
| static InetAddress getByName(String host) | 确定主机名称的IP地址。主机名称可以使机器名称，也可以是IP地址 |
|           String getHostName()            |                     获取此IP地址的主机名                     |
|          String getHostAddress()          |                 返回文本显示中的IP地址字符串                 |

```java
// InetAddress address = InetAddress.getByName("DESKTOP-VJICL7M");
InetAddress address = InetAddress.getByName("192.168.1.5");

String name = address.getHostName();
String ip = address.getHostAddress();

System.out.println("主机名" + name);
System.out.println("IP地址" + ip);
```

### 端口

端口：设备上应用程序的唯一标识

端口号：用两个字节表示的整数，它的取值范围是0~65535.其中，0~1023之间的端口号用于一些知名的网络服务和应用，普通的应用程序需要使用1024以上的端口号。如果端口号被另一个服务或应用所占用，会导致当前程序启动失败。

### 协议

协议：计算机网络中，连接和通信的规则被称为网络通信协议。

> UDP协议

- 用户数据服务协议（User Datagram Protcol）
- UDP是无连接通信协议。即在传输数据时，数据的发送端和接收端不建立逻辑连接。简单来说，当一台计算机向另一台计算机发送数据时，发送端不会确认接收端是否存在，就会发出数据，同样接收端在收到数据时，也不会向发送端反馈是否收到数据。
- 由于UDP协议消耗资源小，通信效率高，所以通常都会用于音频、视频和普通数据的传输
- 例如视频会议通常采用UDP协议，因为这种情况即使偶尔丢失一两个数据包，也不会对接收结果产生太大影响。但是使用UDP协议传送数据时，由于UDP的面向无连接性，不能保证数据的完整性，因此在传输重要数据时不建议使用UDP协议

> TCP协议

- 传输控制协议（Transmission Control Protocol）
- TCP协议是==面向连接==的通信协议，即传输数据之前，在发送端和接收端建立逻辑连接，然后再传输数据，它提供了两台计算机之间==可靠无差错==的数据传输。在TCP连接中必须要明确客户端与服务器端，由客户端向服务端发出连接请求，每次连接的创建都需要经过“三次握手”
- “三次握手”：TCP协议中，在发送数据的准备阶段，客户端与服务器之间的三次交互，以保证连接的可靠
  - 第一次握手，客户端向服务器端发出连接请求，等待服务器确认
  - 第二次握手，服务器端向客户端会送一个响应，通知客户端收到了连接请求
  - 第三次握手，客户端再次向服务器端发送确认信息，确认连接
- 完成三次握手，连接建立后，客户端和服务器就可以开始进行数据传输了。由于这种面向连接的特性，TCP洗衣可以保证传输数据的安全，所以应用十分广泛。例如上传文件、下载文件、浏览网页等

## UDP通信程序

### UDP发送数据

> 发送数据的步骤

1. 创建发送端的Socket对象（DatagramSocket）
2. 创建数据，并把数据打包
3. 调用DatagramSocket对象的方法发送数据
4. 关闭发送端

```java
DatagramSocket ds = new DatagramSocket();

byte[] bys = "hello,udp,我来了".getBytes();
/*int length = bys.length;
InetAddress address = InetAddress.getByName("192.168.1.66");
int port = 10086;
DatagramPacket dp = new DatagramPacket(bys, length, address, port);*/
DatagramPacket dp = new DatagramPacket(bys, bys.length, InetAddress.getByName("192.168.1.66"), 10086);

ds.send(dp);

ds.close();
```

### UDP接收数据

> 接收数据的步骤

1. 创建接收端的Socket对象（DatagramSocket）
2. 创建一个数据包，用于接收数据
3. 调用DatagramSocket对象的方法接收数据
4. 解析数据包，并把数据在控制台显示
5. 关闭接收端

```java
DatagramSocket ds = new DatagramSocket(10086);

byte[] bys = new byte[1024];
DatagramPacket dp = new DatagramPacket(bys, bys.length);

ds.receive(dp);

byte[] datas = dp.getData();
int len = dp.getLength();
String dataString = new String(datas, 0, len);
System.out.println("数据是：" + dataString);

ds.close();
```

### UDP通信程序练习

按照下面的要求实现程序：

- UDP发送数据：数据来自于键盘录入，直到输入的数据是886，发送数据结束
- UDP接收数据：因为接收端不知道发送端什么时候停止发送，故采用死循环接收

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class SendDemo {
    public static void main(String[] args) throws IOException {
        DatagramSocket ds = new DatagramSocket();

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line;
        while ((line = br.readLine()) != null) {
            if ("886".equals(line)) {
                break;
            }
            
            byte[] bys = line.getBytes();
            DatagramPacket dp = new DatagramPacket(bys, bys.length, InetAddress.getByName("192.168.1.66"), 12345);
            
            ds.send(dp);
        }
        
        ds.close();
    }
}
```

```java
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class ReceiveDemo {
    public static void main(String[] args) throws IOException {
        DatagramSocket ds = new DatagramSocket(12345);

        while (true) {
            byte[] bys = new byte[1024];
            DatagramPacket dp = new DatagramPacket(bys, bys.length);

            ds.receive(dp);

            System.out.println("数据是：" + new String(dp.getData(), 0, dp.getLength()));
        }
    }
}
```

## TCP通信程序

### TCP通信原理

TCP通信协议是一种可靠的网络协议，它在通信的两端各建立一个Socket对象，从而在通信的两端形成网络虚拟链路，一旦建立了虚拟的网络链路，两端的程序就可以通过虚拟链路进行通信。

Java对基于TCP协议的网络提供了良好的封装，使用Socket对象；来代表两端的通信端口，并通过Socket产生的IO流来进行网络通信。

Java为客户端提供了Socket类，为服务器端提供了ServerSocket类。

### TCP发送数据

> 发送数据的步骤

1. 创建客户端的Socket对象（Socket）
2. 获取输出流，写数据
3. 释放资源

```java
// Socket s = new Socket(InetAddress.getByName("192.168.1.66"), 10086);
Socket s = new Socket("192.168.1.66", 10086);

OutputStream os = s.getOutputStream();

os.write("hello java,我来了".getBytes());

s.close();
```

### TCP接收数据

> 接收数据的步骤

1. 创建服务器端的Socket对象（ServerSocket）
2. 获取输入流，读数据，并把数据显示在控制台
3. 释放资源

```java
ServerSocket ss = new ServerSocket(10086);

Socket s = ss.accept();
InputStream is = s.getInputStream();

byte[] bys = new byte[1024];
int len = is.read(bys);
String data = new String(bys, 0, len);
System.out.println("数据是：" + data);

s.close();
ss.close();
```

### TCP通信程序练习1

- 客户端：发送数据，接收服务器反馈
- 服务端：接收数据，给出反馈

```java
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class ClientDemo {
    public static void main(String[] args) throws IOException {
        Socket s = new Socket("192.168.1.66", 10086);

        OutputStream os = s.getOutputStream();
        os.write("hello java,我来了".getBytes());

        InputStream is = s.getInputStream();
        byte[] bys = new byte[1024];
        int len = is.read();
        String data = new String(bys, 0, len);
        System.out.println("客户端：" + data);

        s.close();
    }
}
```

```java
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerDemo {
    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(10086);

        Socket s = ss.accept();
        InputStream is = s.getInputStream();
        byte[] bys = new byte[1024];
        int len = is.read(bys);
        String data = new String(bys, 0, len);
        System.out.println("服务器：" + data);
        
        // 给出反馈
        OutputStream os = s.getOutputStream();
        os.write("数据已经收到".getBytes());

        ss.close();
    }
}
```

### TCP通信程序练习2

- 客户端：数据来自于键盘录入，直到输入的数据是886，发送数据结束
- 服务器：接收到的数据在控制台输出

```java
import java.io.*;
import java.net.Socket;

public class ClientDemo {
    public static void main(String[] args) throws IOException {
        Socket s = new Socket("192.168.1.66", 10086);

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 封装输出流对象
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));
        
        String line;
        while ((line = br.readLine()) != null) {
            if ("886".equals(line)) {
                break;
            }
            
            // 获取输出流对象
            bw.write(line);
            bw.newLine();
            bw.flush();
        }
        
        s.close();
    }
}
```

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerDemo {
    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(10086);

        // 监听客户端的连接，返回一个对应的Socket对象
        Socket s = ss.accept();

        // 获取输入流
        /*InputStream is = s.getInputStream();
        InputStreamReader isr = new InputStreamReader(is);
        BufferedReader br = new BufferedReader(isr);*/
        BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }

        // 释放资源
        ss.close();
    }
}
```

### TCP通信程序练习3

- 客户端：数据来自于键盘录入，直到输入的数据是886，发送数据结束
- 服务器：接收到的数据写入文本文件

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerDemo {
    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(10086);

        // 监听客户端的连接，返回一个对应的Socket对象
        Socket s = ss.accept();

        // 获取输入流
        BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
        // 把数据写入文本文件
        BufferedWriter bw = new BufferedWriter(new FileWriter("myNet\\s.txt"));
        String line;
        while ((line = br.readLine()) != null) {
            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        // 释放资源
        bw.close();
        ss.close();
    }
}
```

### TCP通信程序练习4

- 客户端：数据来自于文本文件
- 服务器：接收到的数据写入文本文件

```java
import java.io.*;
import java.net.Socket;

public class ClientDemo {
    public static void main(String[] args) throws IOException {
        Socket s = new Socket("192.168.1.66", 10086);

        BufferedReader br = new BufferedReader(new FileReader("myNet\\InetaddressDemo.txt"));
        // 封装输出流对象
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));

        String line;
        while ((line = br.readLine()) != null) {
            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        // 释放资源
        br.close();
        s.close();
    }
}
```

### TCP通信程序练习5

- 客户端：数据来自于文本文件，接收服务器反馈
- 服务器：接收到的数据写入文本文件，给出反馈

---

- 出现问题：程序一直等待
- 原因：读数据的方法是阻塞式的
- 解决办法：自定义结束标记，或使用`shutdownOuput()`方法（推荐）

```java
import java.io.*;
import java.net.Socket;

public class ClientDemo {
    public static void main(String[] args) throws IOException {
        Socket s = new Socket("192.168.1.66", 10086);

        BufferedReader br = new BufferedReader(new FileReader("myNet\\InetaddressDemo.txt"));
        // 封装输出流对象
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));

        String line;
        while ((line = br.readLine()) != null) {
            bw.write(line);
            bw.newLine();
            bw.flush();
        }
        
        // 自定义结束标记
        /*bw.write("886");
        bw.newLine();
        bw.flush();*/
        
        s.shutdownOutput();

        // 给出反馈
        BufferedWriter bwServer = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));
        bwServer.write("文件上传成功");
        bwServer.newLine();
        bwServer.flush();

        // 释放资源
        br.close();
        s.close();
    }
}
```

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerDemo {
    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(10086);

        // 监听客户端的连接，返回一个对应的Socket对象
        Socket s = ss.accept();

        // 获取输入流
        BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
        // 把数据写入文本文件
        BufferedWriter bw = new BufferedWriter(new FileWriter("myNet\\s.txt"));
        String line;
        while ((line = br.readLine()) != null) {
            /*if ("886".equals(line)) {
                break;
            }*/

            bw.write(line);
            bw.newLine();
            bw.flush();
        }

        // 接收反馈
        BufferedReader brClient = new BufferedReader(new InputStreamReader(s.getInputStream()));
        String data = brClient.readLine();
        System.out.println("服务器的反馈：" + data);

        // 释放资源
        bw.close();
        ss.close();
    }
}
```

### TCP通信程序练习6

- 客户端：数据来自于文本文件，接收服务器反馈
- 服务器：接收到的数据写入文本文件，给出反馈，代码用线程进行封装，为每一个客户端开启一个线程

```java
import java.io.*;
import java.net.Socket;

public class serverThread implements Runnable {
    private Socket s;

    public serverThread(Socket s) {
        this.s = s;
    }

    @Override
    public void run() {
        // 接收数据，写入文本文件
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));

            // 解决名称冲突问题
            int count = 0;
            File file = new File("myNet\\Copy[" + count + "].java");

            while (file.exists()) {
                count++;
                file = new File("myNet\\Copy[" + count + "].java");
            }

            BufferedWriter bw = new BufferedWriter(new FileWriter(file));

            String line;
            while ((line = br.readLine()) != null) {
                bw.write(line);
                bw.newLine();
                bw.flush();
            }

            // 给出反馈
            BufferedWriter bwServer = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));
            bwServer.write("文件上传成功");
            bwServer.newLine();
            bw.flush();

            // 释放资源
            s.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerDemo {
    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(10086);

        while (true) {
            // 监听客户端的连接，返回一个对应的Socket对象
            Socket s = ss.accept();

            // 为每一个客户端开启一个线程
            new Thread(new serverThread(s)).start();
        }
    }
}
```

# Lambda表达式

## 体验Lambda表达式

需求：启动一个线程，在控制台输出一句话：多线程启动了

> 方式1

1. 定义一个类MyRunnable实现Runnable接口，重写run()方法
2. 创建MyRunnable类的对象
3. 创建Thread类的对象，把MyRunnable类的对象作为构造参数传递
4. 启动线程

> 方式2

- 匿名内部类的方式改进

> 方式3

- Lambda表达式的方式改进

```java
public class LambdaDemo {
    public static void main(String[] args) {
        /*MyRunnable my = new MyRunnable();
        Thread t = new Thread(my);
        t.start();*/

        // 使用匿名内部类的方式改进
        // new Thread(new Runnable() {
        //     @Override
        //     public void run() {
        //         System.out.println("多线程徐启动了");
        //     }
        // }).start();

        // Lambda表达式改进
        new Thread( () -> {
            System.out.println("多线程徐启动了");
        } ).start();
    }
}
```

### Lambda表达式的标准格式

> 匿名内部类中重写run()方法的代码分析

```java
new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("多线程徐启动了");
    }
}).start();
```

- 方法形式参数为空，说明调用方法时不需要传递参数
- 方法返回值类型为void，说明方法执行没有结果返回
- 方法体中的内容，是我们具体要做的事情

> Lambda表达式的代码分析

```java
new Thread( () -> {
    System.out.println("多线程徐启动了");
} ).start();
```

- ()：里面没有内容，可以看成是方法形式参数为空
- ->：用箭头指向后面要做的事情
- {}：包含一段代码，我们称之为代码块，可以看成是方法体中的内容

组成Lambda表达式的三要素：==形式参数、箭头、代码块==

> Lambda表达式的格式

- 格式：

```java
(形式参数) -> {代码块}
```
- 形式参数：如果有多个参数，参数之间用逗号隔开；如果没有参数，留空即可
- ->：由英文中划线和大于符号组成，固定写法，代表指向动作
- 代码块：是我们具体要做的事情，也就是以前我们写的方法体内容

### Lambda表达式的练习

> Lambda表达式的使用前提

- 有一个接口
- 接口中有且仅有一个抽象方法

> 练习1

- 定义一个接口(Eatable)，里面定义一个抽象方法:void eat()
- 定义一个测试类（EatableDemo），在测试类中提供两个方法：
  - 一个方法是：useEatable(Eatable e)
  - 一个方法是主方法：在主方法中调用useEatable()方法

```qjava
public interface Eatable {
    void eat();
}
```

```java
public class EatableImpl implements Eatable {
    @Override
    public void eat() {
        System.out.println("一天一苹果，医生远离我");
    }
}
```

```java
public class EatableDemo {
    public static void main(String[] args) {
        Eatable e = new EatableImpl();
        useEatable(e);

        // 匿名内部类
        useEatable(new EatableImpl() {
            @Override
            public void eat() {
                System.out.println("一天一苹果，医生远离我");
            }
        });

        // Lambda表达式
        useEatable(() -> {
            System.out.println("一天一苹果，医生远离我");
        });
    }

    private static void useEatable(Eatable e) {
        e.eat();
    }
}
```

### Lambda表达式的使用

> 练习2

- 定义一个接口(Flyable)，里面定义一个抽象方法:void fly(String s)
- 定义一个测试类（FlyableDemo），在测试类中提供两个方法：
  - 一个方法是：useFlyable(Flyable f)
  - 一个方法是主方法：在主方法中调用useFlyable()方法

```java
public interface Flyable {
    void fly(String s);
}
```

```java
public class FlyableDemo {
    public static void main(String[] args) {
        useFlyable((String s) -> {
            System.out.println(s);
            System.out.println("飞机自驾游");
        });
    }

    private static void useFlyable(Flyable f) {
        f.fly("风和日丽，晴空万里");
    }
}
```

### Lambda表达式的使用

> 练习3

- 定义一个接口(Addable)，里面定义一个抽象方法:void add(int x, int y)
- 定义一个测试类（AddableDemo），在测试类中提供两个方法：
  - 一个方法是：useAddable(Addable a)
  - 一个方法是主方法：在主方法中调用useAddable()方法

```java
public interface Addable {
    int add(int x, int y);
}
```

```java
public class AddableDemio {
    public static void main(String[] args) {
        useAddable((int x, int y) -> {
            return x + y;
        });
    }

    public static void useAddable(Addable a) {
        int sum = a.add(10, 20);
        System.out.println(sum);
    }
}
```

### Lambda表达式的省略模式

> 省略规则

- 参数类型可以省略，但有多个参数的情况下，不能只省略一个
- 如果参数有且仅有一个，那么小括号可以省略
- 如果代码块的语句只有一条，可以省略大括号和分号，如果有return，可以省略return

### Lambda表达式的注意事项

> 注意事项

- 使用Lambda必须要有接口，并且要求接口中有且仅有一个抽象方法
- 必须要有上下文环境，才能推导出Lambda对应的接口
  - 根据==局部变量的赋值==得知Lambda对应的接口：`Runnable r = () -> System.out.println("Lambda表达式");`
  - 根据==调用方法的参数==得知Lambda对应的接口：`new Thread() -> System.out.println("Lambda表达式").start();`

### Lambda表达式和匿名内部类的区别

- 所需类型不同
  - 匿名内部类：可以是接口，也可以是抽象类，还可以是具体类
  - Lambda表达式：只能是接口

- 使用限制不同
  - 如果接口中有且仅有一个抽象方法，可以使用呢名内部类，也可以使用Lambda表达式
  - 如果接口中有多于一个抽象方法，只能使用匿名内部类，而不能使用Lambda表达式

- 实现原理不同
  - 匿名内部类：编译之后，产生一个单独的class字节码文件
  - Lambda表达式：编译之后，没有一个单独的class字节码文件。对应的字节码会在运行的时候动态生成

# 接口组成更新

## 接口组成更新描述

> 接口的组成

- 常量
  - public static final
- 抽象方法
  - public abstract
- 默认方法（Java8）
- 静态方法（Java8）
- 私有方法（Java9）

## 接口中默认方法

> 默认方法的定义格式

- 格式：

```java
public default 返回值类型 方法名(参数列表) {}
```

> 接口中默认方法注意事项

- 默认方法不是抽象方法，所以不强制被重写，但是可以被重写，重写的时候去掉default关键字
- public可以省略，default不能省略

## 接口中静态方法

> 接口中静态方法定义格式

- 格式：

```java
public static 返回值类型 方法名(参数列表) {} 
```

> 接口中静态方法的注意事项

- 静态方法只能通过接口名调用，不能通过实现类名或者对象名调用
- public 可以省略，static不能省略

## 接口中私有方法

> 接口中私有方法定义格式

- 格式1：

```java
private 返回值类型 方法名(参数列表) {}
```
- 格式2：

```java
private static 返回值类型 方法名(参数列表) {}
```

> 接口中私有方法注意事项

- 默认方法可以调用私有的静态方法和非静态方法
- 静态方法只能调用私有的静态方法

# 方法引用

## 体验方法引用

```java
public interface Printable {
    void printString(String s);
}
```

```java
public class PrintableDemo {
    public static void main(String[] args) {
        usePrintable(s -> System.out.println(s));

        // 方法引用符：::
        usePrintable(System.out::println);
    }

    public static void usePrintable(Printable p) {
        p.printString("爱生活爱Java");
    }
}
```

## 方法引用符

- `::`  该符号为引用运算符，而它所在的表达式被称为方法引用

> 推导与省略

- 如果使用Lambda，那么根据“可推导就是可省略”的原则，无需指定参数类型，也无需指定重载形式，它们都将被自动推导
- 如果使用方法引用，也是同样可以根据上下文进行推导
- 方法引用是Lambda的孪生兄弟

## Lambda表达式支持的方法引用

> 常见的引用方式

- 引用类方法
- 引用对象的实例方法
- 引用类的实例方法
- 引用构造器

### 引用类方法

- 引用类方法，其实就是引用类的静态方法

- 格式：

```java
类名::静态方法
```
- 范例：

```java
Integer::parseInt
```
  - Integer类的方法：`public static parseInt(String s)` 将此String转换为int类型数据

### 引用对象的实例方法

- 引用对象的实例方法，其实就是引用类中的成员方法
- 格式：

```java
对象::成员方法
```

- 范例：

```java
"HelloWorld"::toUpperCase
```
  - `String类中的方法：public String toUpperCase()`  将此String所有字符转换为大写

### 引用类的实例对象

- 引用类的实例对象，其实就是引用类中的成员方法
- 格式：

```java
类名::成员方法
```
- 范例：

```java
String::substring
```
- String类中的方法：`public String substring(int beginIndex, int endIndex)` 从beginIndex开始到endIndex结束，截取字符串，返回一个子串，子串的长度为endIndex - beginIndex

### 引用构造器

- 引用构造器，其实就是引用构造方法
- 格式：

```java
类名::new
```
- 范例：

```java
Student::new
```

# 函数式接口

## 函数式接口概述

- 函数式接口：有且仅有一个抽象方法的接口
- Java中的函数式编程体现就是Lambda表达式，所以函数式接口就是可以适用于Lambda使用的接口
- 只有确保接口中有且仅有一个抽象方法，Java中的Lambda才能顺利地进行推导

> 如何检测一个接口是否是函数式接口？

- `@FunctionalInterface`
- 放在定义接口的上方，如果接口是函数式接口，编译通过；如果不是，编译失败

> 注意：

- 我们自己定义函数式接口的时候，`@FunctionalInterface`是可选的，就算不写这个注解，只要保证满足函数式接口的定义条件，也照样是函数式接口。但是，==建议加上该注解==

## 函数式接口作为方法的参数

- 如果方法的参数是一个函数式接口，可以使用Lambda表达式作为参数传递

```java
start() -> System.out.println(Thread.currentThread().getName() + "线程启动了");
```

## 函数式接口作为方法的返回值

- 如果方法的返回值是一个函数式接口，可以使用Lambda表达式作为结果返回

```java
private static Comparator<String> getComparator() {
    return (s1, s2) -> s1.length() - s2.length();
}
```

## 常用的函数式接口

- Supplier接口
- Consumer接口
- Predicate接口
- Function接口

### Supplier接口

- `Supplier<T>`：包含一个无参的方法
- `T get()`：获得结果
- 该方法不需要参数，它会按照某种实现逻辑由Lambda表达式（实现）返回一个数据
- `Supplier<T>`接口也被称为生产型接口，如果我们指定了接口的泛型是什么类型，那么接口中的`get()`方法就会产生什么类型的数据供我们使用

#### Supplier接口练习之获取最大值

```java
public class SupplierTest {
    public static void main(String[] args) {
        // 定义一个int数组
        int[] arr = {19, 50, 28, 46};

        int maxValue = getMax(() -> {
            int max = arr[0];

            for (int i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }

            return max;
        });

        System.out.println(maxValue);
    }

    // 返回一个int数组中的最大值
    public static int getMax(Supplier<Integer> sup) {
        return sup.get();
    }
}
```

### Consumer接口

- `Consumer<T>`：包含两个方法
- `void accept(T t)`：对给定的参数执行此操作
- `defaultConsumer<T> andThen(Consumer after)`：返回一个组合的Consumer，依次执行此操作，然后执行Then操作
- `Consumer<T>`接口也被称为消费型接口，他消费的数据的数据类型由泛型指定

#### Consumer接口之按照要求打印信息

```java
public class ConsumerTest {
    public static void main(String[] args) {
        String[] strArray = {"林青霞,30", "张曼玉,35", "王祖贤,33"};

        printInfo(strArray, str -> {
            String name = str.split(",")[0];
            System.out.print("姓名：" + name);
        }, str -> {
            int age = Integer.parseInt(str.split(",")[1]);
            System.out.println(",年龄：" + age);
        });
    }

    private static void printInfo(String[] array, Consumer<String> con1, Consumer<String> con2) {
        for (String s : array) {
            con1.andThen(con2).accept(s);
        }
    }
}
```

### Predicate接口

- `Predicate<T>`：常用的四个方法
- `boolean test(T t)`：对给定的参数进行判断（判断逻辑由Lambda表达式实现），返回一个布尔值
- `default Predicate<T> negate()`：返回一个逻辑的否定，对应逻辑非
- `default Predicate<T> and(Predicate other)`：返回一个组合判断，对应短路与
- `default Predicate<T> or(Predicate other)`：返回一个组合判断，对应短路或
- `Predicate<T>`接口通常用于判断参数是否满足指定的条件

#### Predicate接口之筛选满足条件的数据

- String[] strArray = {"林青霞,30", "柳岩,34", "张曼玉,35", "貂蝉,31", "王祖贤,33"};
- 字符串数组中有多条信息，请通过Predicate接口的拼装将符合要求的字符串筛选到集合ArrayList中，并遍历ArrayList集合
- 同时满足如下要求：姓名长度大于2，年龄大于33

```java
import java.util.ArrayList;
import java.util.function.Predicate;

public class PreducateTest {
    public static void main(String[] args) {
        String[] strArray = {"林青霞,30", "柳岩,34", "张曼玉,35", "貂蝉,31", "王祖贤,33"};

        ArrayList<String> array = myFilter(strArray, s -> s.split(",")[0].length() > 2, s -> Integer.parseInt(s.split(",")[1]) > 33);

        for (String str : array) {
            System.out.println(str);
        }
    }

    private static ArrayList<String> myFilter(String[] strArray, Predicate<String> pre1, Predicate<String> pre2) {
        ArrayList<String> array = new ArrayList<String>();

        // 遍历数组
        for (String str : strArray) {
            if (pre1.and(pre2).test(str)) {
                array.add(str);
            }
        }

        return array;
    }
}
```

### Function接口

- `Function<T, R>`：常用的两个方法
- `R apply(T t)`：将此函数应用于给定的参数
- `deafult <V> Function andThen(Function after)`：返回一个组合函数，首先将该函数应用于输入，然后将after函数应用于结果
- `Function<T, R>`接口通常用于对参数进行处理，转换（处理逻辑由Lambda表达式实现），然后返回一个新的值

#### Function接口之按照指定要求操作数据

```java
import java.util.function.Function;

public class FunctionTest {
    public static void main(String[] args) {
        String s = "林青霞,30";

        // convert(s, ss -> ss.split(",")[1], ss -> Integer.parseInt(ss), i -> i + 70);
        convert(s, ss -> ss.split(",")[1], Integer::parseInt, i -> i + 70);
    }

    private static void convert(String s, Function<String, String> fun1, Function<String, Integer> fun2, Function<Integer, Integer> fun3) {
        int i = fun1.andThen(fun2).andThen(fun3).apply(s);
        System.out.println(i);
    }
}
```

# Stream流

## Stream流的生成方式

> Stream流的使用

- 生成流
  - 通过数据源（集合、数组等）生成流
  - `list.stream()`
- 中间操作
  - 一个流后面可以跟零个或多个中间操作，其目的主要是打开流，做出某种程度的数据过滤/映射，然后返回一个新的流，交给下一个操作使用
  - `filter()`
- 终结操作
  - 一个流只能有一个终结操作，当这个操作执行后，流就被使用“光”了，无法再被操作，所以这必定是流的最后一个操作
  - `forEach()`

> Stream流常见生成方式

- Collection体系的集合可以使用默认方法`stream()`生成流
  - `default Stream<E> stream()`
- Map体系的集合间接的生成流
- 数组可以通过Stream接口的静态方法`of(T... values)`生成流

## Stream流中常见的中间操作

- `Stream<T> filter(Predicate predicate)`：用于对流中的数据进行过滤
- `Stream<T> limit(long maxSize)`：返回此流中的元素组成的流，截取前指定参数个数的数据
- `Stream<T> skip(long n)`：跳过指定参数个数的数据，返回由该流的剩余参数组成的流
- `static <T> Stream<T> concat(Stream a, Stream b)`：合并a和b两个流为一个流
- `Stream<T> distinct()`：返回由该流的不同元素（根据Objectequals(Object)）组成的流
- `Stream<T> sorted()`：返回由此流的元素组成的流，根据自然顺序进行排序
- `Stream<T> sorted(Comparator)`：返回由该流的元素组成的流，根据提供的Comparator进行排序
- `<R> Stream<R> map(Function mapper)`：返回由给定的函数应用于此流的元素的结果组成的流
- `IntStream mapToInt(ToIntFunction mapper)`：返回一个IntStream其中包含将给定函数应用于此流的元素的结果

## Stream流的常见终结操作方法

- `void forEach(Consumer action)`：对此流的每个元素执行操作
- `long count()`：返回此流中的元素数

## Stream流的收集操作

- R collect(Collector collector)
- 但是这个收集方法的参数是一个Collector接口

> 工具类Collectors提供了具体的收集方法

- `public static <T> Collector toList()`：把元素收集到List集合中
- `public static <T> Collector toSet()`：把元素收集到Set集合中
- `public static Collector toMap(Function keyMapper, Function valueMapper)`：把元素收集到Map集合中

# 反射

## 类加载器

### 类加载

当程序要使用某个类时，如果该类还未被加载到内存中，则系统会通过类的加载、类的连接、类的初始化这三个步骤来对类进行初始化。如果不出现意外情况，JVM会连续完成这三个步骤，所以有时也把这三个步骤统称为类加载或类初始化。

> 类的加载

- 就是将class文件读入内存，并为之创造一个java.lang.Class对象
- 任何类被使用时，系统都会为之建立一个java.lang.Class对象

> 类的连接

- 验证阶段：用于检验被加载的类是否有正确的内部结构，并和其他类协调一致
- 准备阶段：负责为类的类变量分配内存，并设置默认初始化值
- 解析阶段：将类的二进制数据中的符号引用替换为直接引用

> 类的初始化

- 在该阶段，主要就是对类变量进行初始化

> 类的初始化步骤

- 假如类还未被加载和连接，则程序先加载并连接该类
- 假如类的直接父类还未被初始化，则先初始化其直接父类
- 假如类中有初始化语句，则系统依次执行这些初始化语句

> 注意：在执行第二个步骤的时候，系统对直接父类的初始化步骤也是初始化步骤1-3

> 类的初始化时机

- 创建类的实例
- 调用类的方法
- 访问类或者接口的类变量，或者为该类变量赋值
- 使用反射方式来强制创建某个类或接口对应的java.lang.Class对象
- 初始化某个类的子类
- 直接使用java.exe命令来运行整个主类

### 类加载器

> 类加载器的作用

- 负责将.class文件加载到内存中，并为之生成对应的java.lang.Class对象
- 虽然不用过分关心类加载机制，但了解这个机制就能更好地理解程序的运行

> JVM的类加载机制

- 全盘负责：就是当一个类加载器负责加载某个Class时，该Class所依赖的和引用的其他Class也将由该类加载器负责载入，除非显示使用另一个类加载器来载入
- 父类委托：就是当一个类加载器负责加载某个Class时，先让父类加载器试图加载该Class，只有在父类加载器无法加载该类时才尝试从自己的类路径中加载该类
- 缓存机制：保证所有被加载过的Class都会被缓存，当程序需要使用某个Class对象时，类加载器先从缓存区中搜索该Class，只有当缓存区中不存在该Class对象时，系统才会读取该类对应的二进制数据，并将其转换成Class对象，存储到缓存区

> Java运行时具有以下内置类加载器

- Bootstrap class loader：它是虚拟机的内置类加载器，通常表示为null，并且没有父null
- Platform class loader：平台类加载器可以看到所有平台类，平台类包括由平台类加载器或其祖先定义的JavaSE平台API，其实现类和JDK特有的运行时类
- Systen class loader：它也被称为应用程序类加载器，与平台类加载器不同，系统类加载器通常用于定义应用程序类路径、模块路径和JDK特定工具上的类
- ==类加载器的继承关系：System的父加载器为Platform，而Platform的父加载器为Bootstrap==

> ClassLoader 中的两个方法

- `static ClassLoader getSystemClassLoader()`：返回用于委派的系统类加载器
- `ClassLoader getParent()`：返回父类加载器进行委派

## 反射

### 反射概述

Java反射机制：是指在运行时去获取一个类的变量和方法信息，然后通过获取到的信息来创建对象，调用方法的一种机制。由于这种动态性，可以极大地增强程序的灵活性，程序不用在编译期就完成确定，在运行期仍然可以扩展。

### 获取Class类的对象

- 实用类的`class`属性来获取该类对应的Class对象
  - 举例：`Student.class`将会返回Student类对应的Class对象
  - 基本数据类型也可以通过.class得到对应的Class属性
- 调用对象的`getClass()`方法，返回对象所属类对应的Class对象
  - 该方法是Object类中的方法，所有的Java对象都可以调用该方法
- 使用Class类中的静态方法`forName(String className)`，该方法需要传入字符串参数，该字符串参数的值是某个类的全路径，也就是完整包名的路径

### 反射获取构造方法并使用

> Class类中用于获取构造方法的方法

- `Constructor<?>[] getConstructors()`：返回所有公共构造方法对象的数组
- `Constructor<?>[] getDeclaredConstructors()`：返回所有构造方法对象的数组
- `Constructor<T> getConstructor(Class<?>... parameterTypes)`：返回单个公共构造方法对象
- `Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes)`：返回单个构造方法对象

> Constructor类中创建对象的方法

- `T newInstance(Object... initargs)`：根据指定的构造方法创建对象

### 反射获取成员变量并使用

- `Field[] getFields()`：返回所有公共成员变量对象的数组
- `Field[] getDeclaredFields()`：返回所有成员变量对象的数组
- `Field getField(String name)`：返回单个公共成员变量对象
- `Field getDeclaredField(String name)`：返回单个成员变量对象

> Field类中用于给成员变量赋值的方法

- `void set(Object obj, Object value)`：给Object对象的成员变量赋值为value

### 反射获取成员方法并使用

- `Method[] getMethods()`：返回所有公共成员方法对象的数组，不包括继承的
- `Method[] getDeclaredMethods()`：返回所有成员方法对象的数组，不包括继承的
- `Method getMethod(String name, Class<?>... parameterTypes)`：返回单个公共成员方法对象
- `Method getDeclaredMethod(String name, Class<?>... parameterTypes)`：返回单个成员方法对象

> Methos类中用于调用成员方法的对象

- `Object invoke(Object obj, Object... args)`：调用obj对象的成员方法，参数是args，返回值是Object类型

### 反射练习

> 练习1：有一个ArrayList<Integer>集合，现在想在这个集合中添加一个字符串数据，如何实现？

```java
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;

public class ReflectTest {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        // 创建集合
        ArrayList<Integer> array = new ArrayList<Integer>();

        Class<? extends ArrayList> c = array.getClass();
        Method m = c.getMethod("add", Object.class);
        m.invoke(array, "hello");
        m.invoke(array, "world");
        m.invoke(array, "java");

        System.out.println(array);
    }
}
```

> 练习2：通过配置文件运行类中的方法

```java
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Properties;

public class ReflectTest {
    public static void main(String[] args) throws IOException, ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        // 加载数据
        Properties prop = new Properties();
        FileReader fr = new FileReader("myReflect\\class.txt");
        prop.load(fr);
        fr.close();

        String className = prop.getProperty("className");
        String methodMame = prop.getProperty("methodMame");

        // 通过反射来使用
        Class<?> c = Class.forName(className);

        Constructor<?> con = c.getConstructor();
        Object obj = con.newInstance();

        Method m = c.getMethod(methodMame);
        m.invoke(obj);
    }
}
```

> class.txt

```txt
className=com.itheima_06.Teacher
methodName=teach
```

# 模块化

## 模块的基本使用

> 模块的基本使用步骤

- 创建模块（按照以前讲解的方式创建模块，创建包、创建类、定义方法）
- 在模块的src目录下新建一个名为`module-info.java`的描述性文件，该文件专门定义模块名、访问权限、模块依赖等信息
  - 描述性文件中使用模块导出和模块依赖来进行配置并使用
- 模块中所有未导出的包都是模块私有的，它们是不能在模块之外被访问的
  - 模块导出格式：`export 包名;`
- 一个模块要访问其他模块，必须明确指定依赖哪些模块，未明确指定依赖的模块不能访问
  - 模块依赖格式：`requires 模块名;`
  - 注意：==写模块名报错，需要按下ALT+ENTER提示，然后选择模块依赖==

## 模块服务的使用

- 模块导出：`export com.itheima_03;`
- 服务提供：`provides MyService with Itheima;` 指定MyService的服务实现类是Itheima
- 声明服务接口：`uses MyService;`
- 使用接口提供的服务
  - `ServiceLoader`：一种加载服务实现的工具
  - `ServiceLoader<MyService> myServices = ServiceLoader.load(MyService.class);`