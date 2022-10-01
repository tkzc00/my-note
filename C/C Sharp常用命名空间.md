# C#常用命名空间

## 一、基础命名空间

- **System**
	- 处理内建数据、数学计算、随机数的产生、环境变量、垃圾回收器及一些常见的异常和特征.
	
- **System.Collections**
	- 包含了一些与集合相关的类型，比如列表、队列、位数组、哈希表和字典等.
	
- **System.Collections.Generic**
	- 定义泛型集合的接口和类，泛型集合允许用户创建强类型集合，它能提供更好的类型安全性和性能.
	
- **System.IO**
	- 包含了一些数据流类型并提供了文件和目录同步异步读写.
	
- **System.IO.Comoression**
	- 提供基本的流压缩和解压缩服务的类.
	
- **System.IO.Ports**
	- 控制串行端口的类.
	
- **System.Text**
	- 包含了一些表示字符编码的类型并提供了字符串的操作和格式化.
	
- **System.Reflection**
	- 包括了一些提供加载类型,方法和字段的托管视图以及动态创建和调用类型功能的类型.
	
- **System.Threading**
	- 提供启用多线程的类和接口.
	
- **System.Runtime.InteropServices**
- 使得.NET类型可以与非托管代码交互.

## 二、图形命名空间

- **System.Drawing**
	- 这个主要的GDI＋命名空间定义了许多类型，实现基本的绘图类型（字体，钢笔，基本画笔等）和无所不能的Graphics对象．
	
- **System.Drawing2D**
	- 这个命名空间提供高级的二维和失量图像功能．
	
- **System.Drawing.Imaging**
	- 这个命名空间定义了一些类型实现图形图像的操作．
	
- **System.Drawing.Text**
	- 这个命名空间提供了操作字体集合的功能．
	
- **System.Drawing.Printing**
- 这个命名空间定义了一些类型实现在打印纸上绘制图像，和打印机交互以及格式化某个打印任务的总体外观等功能．

## 三、数据命名空间

- **System.Data**
	- 包含了数据访问使用的一些主要类型．
	
- **System.Data.Common**
	- 包含了各种数据库访问共享的一些类型．
	
- **System.XML**
	- 包含了根据标准来支持XML处理的类．
	
- **System.Data.OleDb**
	- 包含了一些操作OLEDB数据源的类型．
	
- **System.Data.Sql**
	- 能使你枚举安装在当前本地网络的SQLServer实例．
	
- **System.Data.SqlClient**
	- 包含了一些操作MSSQLServer数据库的类型，提供了和System.Data.OleDb相似的功能，但是针对SQL做了优化．
	
- **System.Data.SqlTypes**
	- 提供了一些表示SQL数据类型的类．
	
- **System.Data.Odbc**
	- 包含了操作Odbc数据源的类型．
	
- **System.Data.OracleClient**
	- 包含了操作Odbc数据库的类型．
	
- **System.Transactions**
- 这个命名空间提供了编写事务性应用程序和资源管理器的一些类．

## 四、语言集成查询

- **System.Linq**
	- 支持使用语言集成查询的查询.
	
- **System.Xml.Linq**
	- 包含LINQtoXML的类.
	
- **System.Data.Linq**
- 包含支持与LINQtoSQL应用程序中的关系数据库进行交互的类.

## 五、Windows窗体应用程序

- **System.Windows.Froms**
	- 创建WinForm应用程序.
	
- **System.Windows**
	- 提供支持WPF属性系统和事件逻辑的一些基元素类以及其他类型.
	
- **System.Windows.Controlls**
	- 创建WPF控件元素，使用户与应用程序进行交互.
	
- **System.Windows.Shapes**
- 提供对WPFXAML或代码中使用的形状库的访问.

## 六、WEB命名空间

- **System.Web**
	- 这个命名空间包含启用浏览器/服务器通信的类和接口.这些命名空间类用于管理到客户端的HTTP输出和读取HTTP请求.附加的类则提供了一些功能,用于服务器端的应用程序以及进程,Cookie管理,文件传输,异常信息和输出缓存的控制.
	
- **System.Web.UI**
	- 这个命名空间包含Web窗体的类,包括Page类和用于创建Web用户界面的其他标准类.
	
- **System.Web.UI.HtmlControls**
	- 这个命名空间包含用于HTML特定控件的类,这些控件可以添加到Web窗体中以创建Web用户界面.
	
- **System.Web.UI.WebControls**
	- 包含创建ASP.NET服务器控件的类,当添加到窗体时,这些控件将呈现浏览器特定的HTML和脚本,用于创建和设备无关的Web用户界面.
	
- **System.Web.Mobile**
	- 包含生成ASP.NET移动应用程序所需要的核心功能,包括身份验证和错误处理.
	
- **System.Web.UI.MobileControls**
	- 包括一组ASP.NET服务器控件,这些控件可以针对不同的移动设备呈现应用程序.
	
- **System.Web.Services**
- 包含能使你使用和生成XMLWebService的类,这些服务是驻留在服务器中的可编程实体,并通过标准Internet协议公开.

## 七、框架服务命名空间

- **System.Diagnostics**
	- 这个命名空间所提供的类允许你启动系统进程,读取和写入事件日志以及使用性能计数器监视系统性能.
	
- **System.DirectoryServices**
	- 这个命名空间所提供的类可便于从托管代码中访问ActiveDirectory.此命名空间中的类可以与任何ActiveDirectory服务提供程序一起使用.
	
- **System.Management**
	- 这个命名空间提供的类用于管理一些信息和事件,它们关系到系统,设备和WMI基础结构所使用的应用程序.
	
- **System.Messaging**
	- 这个命名空间提供的类用于连接到网络上的消息队列,向队列发送消息,从队列接收或查看消息.
	
- **System.ServiceProcess**
	- 这个命名空间提供的类用于安装和运行服务,服务是长期运行的可执行文件,它们不通过用户界面来运行.
	
- **System.Timers**
- 这个命名空间提供基于服务器的计时器组件,用以按指定的间隔引发事件.

## 八、安全性命名空间

- **System.Security**
	- 这个命名空间提供公共语言运行库安全性系统的基础结构.
	
- **System.Net.Security**
	- 这个命名空间提供用于主机间安全通信的网络流.
	
- **System.Web.Security**
- 这个命名空间包含的类用于在Web应用程序中实现ASP.NET安全性.

## 九、网络命名空间

- **System.Net**
	- 包含的类可为当前网络上的多种协议提供简单的编程接口.
	
- **System.Net.Cache**
	- 这个命名空间定义了一些类和枚举,用于为使用WebRequest和HttpWebRequest类获取的资源定义缓存策略.
	
- **System.Net.Configuration**
	- 这个命名空间包含了以编程方式访问和更新System.Net命名空间的配置设置的类.
	
- **System.Net.Mime**
	- 这个命名空间包含了用于将电子邮件发送到SMTP服务器进行传送的类.
	
- **System.Net.Networkinformation**
	- 这个命名空间提供对网络流量数据,网络地址信息和本地计算机的地址更改通知的访问,还包含实现Ping实用工具的类.你可以使用Ping和相关的类来检查是否可通过网络访问某台计算机.
	
- **System.Net.Sockets**
- 这个命名空间为严格控制网络访问的开发人员提供Windows套接字接口的托管实现.

## 十、配置命名空间

- **System.Configuration**
	- 这个命名空间包含用于以编程方式访问.NetFramework配置设置并处理配置文件中错误的类.
	
- **System.Configuration.Assemblies**
	- 这个命名空间包含用于配置程序集的类.
	
- **System.Configuration.Provider**
- 这个命名空间包含由服务器和客户端应用程序共享,以支持可插接式模型轻松添加或移除功能的基类.

## 十一、本地化命名空间

- **System.Globalization**
	- 包含的类定义与区域性相关的信息,其中包括语言,国家\地区,所使用的日历,日期格式的模式,货币与数字以及字符串的排序顺序.
	
- **System.Resources**
	- 这个命名空间提供一些类和接口,它们使开发人员得以创建,存储并管理应用程序中使用的各种区域性特定资源.
	
- **System.Resources.Tools**
- 这个命名空间包含StronglyTypedResourceBuilder类,该类提供对强类型资源的支持.这个编译时功能通过创建包含一组静态只读属性的类封装对资源的访问,从而使得使用资源变得更加容易.

## 十二、其他命名空间

- **System.ServiceModel**
	- 包含生成WCF服务和客户端应用程序所需要的类型.
	
- **System.Workflow**
	- 开发工作流应用程序.
	
- **System.Media**
- 包含用于播放声音文件和访问系统提供的声音的类.