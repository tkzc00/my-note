# SSM 学习笔记

# Spring的IoC和DI

## Spring简介

### Spring是什么

Spring是分层的 Java SE/EE应用 full-stack 轻量级开源框架，以 ==IoC==（Inverse Of Control：反转控制）和==AOP==（Aspect Oriented Programming：面向切面编程）为内核。

提供了==展现层 SpringMVC== 和==持久层 Spring JDBCTemplate== 以及==业务层事务管理==等众多的企业级应用技术，还能整合开源世界众多著名的第三方框架和类库，逐渐成为使用最多的Java EE 企业应用开源框架。

### Spring发展历程

- 1997 年， IBM提出了EJB 的思想
- 1998 年，SUN制定开发标准规范 EJB1.0
- 1999 年，EJB1.1 发布
- 2001 年，EJB2.0 发布
- 2003 年，EJB2.1 发布
- 2006 年，EJB3.0 发布

Rod Johnson （ Spring 之父）

- Expert One-to-One J2EE Design and Development(2002)
  - 阐述了 J2EE 使用EJB 开发设计的优点及解决方案
- Expert One-to-One J2EE Development without EJB(2004)
  - 阐述了 J2EE 开发不使用 EJB的解决方式（Spring 雏形）

2017 年 9 月份发布了 Spring 的最新版本 Spring5.0 通用版（GA）

### Spring的优势

1. ==方便解耦，简化开发==
   - 通过 Spring 提供的 IoC容器，可以将对象间的依赖关系交由 Spring 进行控制，避免硬编码所造成的过度耦合。
   - 用户也不必再为单例模式类、属性文件解析等这些很底层的需求编写代码，可以更专注于上层的应用。
2. ==AOP 编程的支持==
   - 通过 Spring 的 AOP 功能，方便进行面向切面编程，许多不容易用传统 OOP 实现的功能可以通过 AOP 轻松实现。
3. ==声明式事务的支持==
   - 可以将我们从单调烦闷的事务管理代码中解脱出来，通过声明式方式灵活的进行事务管理，提高开发效率和质量。
4. ==方便程序的测试==
   - 可以用非容器依赖的编程方式进行几乎所有的测试工作，测试不再是昂贵的操作，而是随手可做的事情。
5. ==方便集成各种优秀框架==
   - Spring对各种优秀框架（Struts、Hibernate、Hessian、Quartz等）的支持。
6. ==降低 JavaEE API 的使用难度==
   - Spring对 JavaEE API（如 JDBC、JavaMail、远程调用等）进行了薄薄的封装层，使这些 API 的使用难度大为降低。
7. ==Java 源码是经典学习范例==
   - Spring的源代码设计精妙、结构清晰、匠心独用，处处体现着大师对Java 设计模式灵活运用以及对 Java技术的高深造诣。它的源代码无意是 Java 技术的最佳实践的范例。

### Spring的体系结构

![](images/Spring%E7%9A%84%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.png)

## Spring快速入门

### Spring程序开发步骤

![](images/Spring%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4.png)

![](images/Spring%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A42.png)

1. 导入 Spring 开发的基本包坐标
2. 编写 Dao 接口和实现类
3. 创建 Spring 核心配置文件
4. 在 Spring 配置文件中配置 UserDaoImpl
5. 使用 Spring 的 API 获得 Bean 实例

### 导入Spring开发的基本包坐标

```xml
<properties>
    <spring.version>5.0.5.RELEASE</spring.version>
</properties>

<dependencies>
    <!--导入spring的context坐标，context依赖core、beans、expression-->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>${spring.version}</version>
    </dependency>
</dependencies>
```

### 编写Dao接口和实现类

```java
public interface UserDao {
    public void save();
}

public class UserDaoImpl implements UserDao {
    @Override
    public void save() {
        System.out.println("UserDao save method running....");
    }
}
```

### 创建Spring核心配置文件

在类路径下（resources）创建applicationContext.xml配置文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="
    http://www.springframework.org/schema/beans 
    http://www.springframework.org/schema/beans/spring-beans.xsd">
</beans>
```

### 在Spring配置文件中配置UserDaoImpl

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="
    http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl"></bean>
</beans>
```

### 使用Spring的API获得Bean实例

```java
@Test
public void test1(){
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
    UserDao userDao = (UserDao) applicationContext.getBean("userDao");
    userDao.save();
}
```

### 知识要点

#### Spring的开发步骤

1. 导入坐标
2. 创建Bean
3. 创建applicationContext.xml
4. 在配置文件中进行配置
5. 创建ApplicationContext对象getBean

## Spring配置文件

### Bean标签基本配置

用于配置对象交由==Spring==来创建。

默认情况下它调用的是类中的==无参构造函数==，如果没有无参构造函数则不能创建成功。

基本属性：

- `id`：Bean实例在Spring容器中的唯一标识
- `class`：Bean的全限定名称

### Bean标签范围配置

`scope`：指对象的作用范围，取值如下：

|    取值范围    |                                          说明                                          |
| :------------: | :------------------------------------------------------------------------------------: |
|   singleton    |                                     默认值，单例的                                     |
|   prototype    |                                         多例的                                         |
|    request     |           WEB 项目中，Spring 创建一个 Bean 的对象，将对象存入到 request 域中           |
|    session     |           WEB 项目中，Spring 创建一个 Bean 的对象，将对象存入到 session 域中           |
| global session | WEB 项目中，应用在 Portlet 环境，如果没有 Portlet 环境那么globalSession 相当于 session |

### Bean标签范围配置

1. 当scope的取值为singleton时
   - Bean的实例化个数：1个
   - Bean的实例化时机：当Spring核心文件被加载时，实例化配置的Bean实例
   - Bean的生命周期：
        - 对象创建：当应用加载，创建容器时，对象就被创建了
        - 对象运行：只要容器在，对象一直活着
        - 对象销毁：当应用卸载，销毁容器时，对象就被销毁了
2. 当scope的取值为prototype时
   - Bean的实例化个数：多个
   - Bean的实例化时机：当调用getBean()方法时实例化Bean
        - 对象创建：当使用对象时，创建新的对象实例
        - 对象运行：只要对象在使用中，就一直活着
        - 对象销毁：当对象长时间不用时，被 Java 的垃圾回收器回收了

### Bean生命周期配置

- `init-method`：指定类中的初始化方法名称
- `destroy-method`：指定类中销毁方法名称

### Bean实例化三种方式

- 无参构造方法实例化
- 工厂静态方法实例化
- 工厂实例方法实例化

1. 使用无参构造方法实例化
   - 它会根据默认无参构造方法来创建类对象，如果bean中没有默认无参构造函数，将会创建失败
```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl"/>
```
2. 工厂静态方法实例化
   - 工厂的静态方法返回Bean实例
```java
public class StaticFactoryBean {
    public static UserDao createUserDao(){
        return new UserDaoImpl();
    }
}
```
```xml
<bean id="userDao" class="com.itheima.factory.StaticFactoryBean" factory-method="createUserDao" />
```
3. 工厂实例方法实例化
   - 工厂的非静态方法返回Bean实例
```java
public class DynamicFactoryBean {
    public UserDao createUserDao(){
        return new UserDaoImpl();
    }
}
```
```xml
<bean id="factoryBean" class="com.itheima.factory.DynamicFactoryBean"/>
<bean id="userDao" factory-bean="factoryBean" factory-method="createUserDao"/>
```

### Bean的依赖注入入门

1. 创建 UserService，UserService 内部在调用 UserDao的save() 方法

```java
public class UserServiceImpl implements UserService {
    @Override
    public void save() {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserDao userDao = (UserDao) applicationContext.getBean("userDao");
        userDao.save();
    }
}
```
2. 将 UserServiceImpl 的创建权交给 Spring
```xml
<bean id="userService" class="com.itheima.service.impl.UserServiceImpl"/>
```
3. 从 Spring 容器中获得 UserService 进行操作
```java
ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
UserService userService = (UserService) applicationContext.getBean("userService");
userService.save();
```

### Bean的依赖注入分析

目前UserService实例和UserDao实例都存在与Spring容器中，当前的做法是在容器外部获得UserService实例和UserDao实例，然后在程序中进行结合。

![](images/Bean%E7%9A%84%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E5%88%86%E6%9E%90.png)

因为UserService和UserDao都在Spring容器中，而最终程序直接使用的是UserService，所以可以在Spring容器中，将UserDao设置到UserService内部。

![](images/Bean%E7%9A%84%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E5%88%86%E6%9E%902.png)

### Bean的依赖注入概念

依赖注入（Dependency Injection）：它是 Spring 框架核心 IOC 的具体实现。

在编写程序时，通过控制反转，把对象的创建交给了 Spring，但是代码中不可能出现没有依赖的情况。

IOC 解耦只是降低他们的依赖关系，但不会消除。例如：业务层仍会调用持久层的方法。

那这种业务层和持久层的依赖关系，在使用 Spring 之后，就让 Spring 来维护了。

简单的说，就是坐等框架把持久层对象传入业务层，而不用我们自己去获取。

### Bean的依赖注入方式

怎么将UserDao怎样注入到UserService内部呢？

- ==构造方法==
- ==set方法==

1. set方法注入
   - 在UserServiceImpl中添加setUserDao方法
```java
public class UserServiceImpl implements UserService {
    private UserDao userDao;
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
    @Override
    public void save() {
        userDao.save();
    }
}
```
   - 配置Spring容器调用set方法进行注入
```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl"/>
<bean id="userService" class="com.itheima.service.impl.UserServiceImpl">
    <property name="userDao" ref="userDao"/>
</bean>
```
  - P命名空间注入本质也是set方法注入，但比起上述的set方法注入更加方便，主要体现在配置文件中，如下：
  - 首先，需要引入P命名空间：
```xml
xmlns:p="http://www.springframework.org/schema/p"
```
   - 其次，需要修改注入方式
```xml
<bean id="userService" class="com.itheima.service.impl.UserServiceImpl" p:userDaoref="userDao"/>
```
2. 构造方法注入
   - 创建有参构造
```java
public class UserServiceImpl implements UserService {
    @Override
    public void save() {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserDao userDao = (UserDao) applicationContext.getBean("userDao");
        userDao.save();
    }
}
```
   - 配置Spring容器调用有参构造时进行注入
```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl"/>
<bean id="userService" class="com.itheima.service.impl.UserServiceImpl">
    <constructor-arg name="userDao" ref="userDao"></constructor-arg>
</bean>
```

### Bean的依赖注入的数据类型

上面的操作，都是注入的引用Bean，处了对象的引用可以注入，普通数据类型，集合等都可以在容器中进行注入。

注入数据的三种数据类型
- ==普通数据类型==
- ==引用数据类型==
- ==集合数据类型==

其中引用数据类型，此处就不再赘述了，之前的操作都是对UserDao对象的引用进行注入的，下面将以set方法注入为例，演示普通数据类型和集合数据类型的注入。

1. 普通数据类型的注入
```java
public class UserDaoImpl implements UserDao {
    private String company;
    private int age;
    public void setCompany(String company) {
        this.company = company;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public void save() {
        System.out.println(company+"==="+age);
        System.out.println("UserDao save method running....");
    }
}
```
```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl">
<property name="company" value="传智播客"></property>
    <property name="age" value="15"></property>
</bean>
```
2. 集合数据类型（`List<String>`）的注入
```java
public class UserDaoImpl implements UserDao {
    private List<String> strList;
    public void setStrList(List<String> strList) {
        this.strList = strList;
    }
    public void save() {
        System.out.println(strList);
        System.out.println("UserDao save method running....");
    }
}
```
```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl">
    <property name="strList">
        <list>
            <value>aaa</value>
            <value>bbb</value>
            <value>ccc</value>
        </list>
    </property>
</bean>
```
3. 集合数据类型（`List<User>`）的注入
```java
public class UserDaoImpl implements UserDao {
    private List<User> userList;
    public void setUserList(List<User> userList) {
        this.userList = userList;
    }
    public void save() {
        System.out.println(userList);
        System.out.println("UserDao save method running....");
    }
}
```
```xml
<bean id="u1" class="com.itheima.domain.User"/>
<bean id="u2" class="com.itheima.domain.User"/>
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl">
    <property name="userList">
        <list>
            <bean class="com.itheima.domain.User"/>
            <bean class="com.itheima.domain.User"/>
            <ref bean="u1"/>
            <ref bean="u2"/>
        </list>
    </property>
</bean>
```
4. 集合数据类型（ `Map<String,User>` ）的注入
```java
public class UserDaoImpl implements UserDao {
    private Map<String,User> userMap;
    public void setUserMap(Map<String, User> userMap) {
        this.userMap = userMap;
    }
    public void save() {
        System.out.println(userMap);
        System.out.println("UserDao save method running....");
    }
}
```
```xml
<bean id="u1" class="com.itheima.domain.User"/>
<bean id="u2" class="com.itheima.domain.User"/>
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl">
    <property name="userMap">
        <map>
            <entry key="user1" value-ref="u1"/>
            <entry key="user2" value-ref="u2"/>
        </map>
    </property>
</bean>
```
5. 集合数据类型（Properties）的注入
```java
public class UserDaoImpl implements UserDao {
    private Properties properties;
    public void setProperties(Properties properties) {
        this.properties = properties;
    }
    public void save() {
        System.out.println(properties);
        System.out.println("UserDao save method running....");
    }
}
```
```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl">
    <property name="properties">
        <props>
            <prop key="p1">aaa</prop>
            <prop key="p2">bbb</prop>
            <prop key="p3">ccc</prop>
        </props>
    </property>
</bean>
```

### 引入其他配置文件（分模块开发）

实际开发中，Spring的配置内容非常多，这就导致Spring配置很繁杂且体积很大，所以，可以将部分配置拆解到其他配置文件中，而在Spring主配置文件通过import标签进行加载

```xml
<import resource="applicationContext-xxx.xml"/>
```

### 知识要点

#### Spring的重点配置

```xml
<bean>标签
    id属性:在容器中Bean实例的唯一标识，不允许重复
    class属性:要实例化的Bean的全限定名
    scope属性:Bean的作用范围，常用是Singleton(默认)和prototype
    <property>标签：属性注入
        name属性：属性名称
        value属性：注入的普通属性值
        ref属性：注入的对象引用值
        <list>标签
        <map>标签
        <properties>标签
    <constructor-arg>标签
<import>标签:导入其他的Spring的分文件
```

## Spring相关API

### ApplicationContext的继承体系

`applicationContext`：接口类型，代表应用上下文，可以通过其实例获得 Spring 容器中的 Bean 对象

![](images/ApplicationContext%E7%9A%84%E7%BB%A7%E6%89%BF%E4%BD%93%E7%B3%BB.png)

### ApplicationContext的实现类

1. `ClassPathXmlApplicationContext`
    - 它是从类的根路径下加载配置文件 推荐使用这种
2. `FileSystemXmlApplicationContext`
    - 它是从磁盘路径上加载配置文件，配置文件可以在磁盘的任意位置。
3. `AnnotationConfigApplicationContext`
    - 当使用注解配置容器对象时，需要使用此类来创建 spring 容器。它用来读取注解。

### getBean()方法使用

```java
public Object getBean(String name) throws BeansException {
    assertBeanFactoryActive();
    return getBeanFactory().getBean(name);
}
public <T> T getBean(Class<T> requiredType) throws BeansException {
    assertBeanFactoryActive();
    return getBeanFactory().getBean(requiredType);
}
```

其中，当参数的数据类型是字符串时，表示根据Bean的id从容器中获得Bean实例，返回是Object，需要强转。

当参数的数据类型是Class类型时，表示根据类型从容器中匹配Bean实例，当容器中相同类型的Bean有多个时，则此方法会报错。

```java
ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
UserService userService1 = (UserService) applicationContext.getBean("userService");
UserService userService2 = applicationContext.getBean(UserService.class);
```

### 知识要点

#### Spring的重点API

```java
ApplicationContext app = new ClasspathXmlApplicationContext("xml文件")
app.getBean("id")
app.getBean(Class)
```

# IoC和DI注解开发

## Spring配置数据源

### 数据源（连接池）的作用

- 数据源(连接池)是提高程序性能如出现的
- 事先实例化数据源，初始化部分连接资源
- 使用连接资源时从数据源中获取
- 使用完毕后将连接资源归还给数据源

常见的数据源(连接池)：==DBCP、C3P0、BoneCP、Druid==等

### 数据源的开发步骤

1. 导入数据源的坐标和数据库驱动坐标
1. 创建数据源对象
1. 设置数据源的基本连接数据
1. 使用数据源获取连接资源和归还连接资源

### 数据源的手动创建

1. 导入c3p0和druid的坐标

```xml
<!-- C3P0连接池 -->
<dependency>
    <groupId>c3p0</groupId>
    <artifactId>c3p0</artifactId>
    <version>0.9.1.2</version>
</dependency>
<!-- Druid连接池 -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.10</version>
</dependency>
```

2. 导入mysql数据库驱动坐标

```xml
<!-- mysql驱动 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.39</version>
</dependency>
```

3. 创建C3P0连接池

```java
@Test
public void testC3P0() throws Exception {
    //创建数据源
    ComboPooledDataSource dataSource = new ComboPooledDataSource();
    //设置数据库连接参数
    dataSource.setDriverClass("com.mysql.jdbc.Driver");
    dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/test");
    dataSource.setUser("root");
    dataSource.setPassword("root");
    //获得连接对象
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
}
```

4. 创建Druid连接池

```java
@Test
public void testDruid() throws Exception {
    //创建数据源
    DruidDataSource dataSource = new DruidDataSource();
    //设置数据库连接参数
    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
    dataSource.setUrl("jdbc:mysql://localhost:3306/test");
    dataSource.setUsername("root");
    dataSource.setPassword("root");
    //获得连接对象
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
}
```

5. 提取jdbc.properties配置文件

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/test
jdbc.username=root
jdbc.password=root
```

6. 读取jdbc.properties配置文件创建连接池

```java
@Test
public void testC3P0ByProperties() throws Exception {
    //加载类路径下的jdbc.properties
    ResourceBundle rb = ResourceBundle.getBundle("jdbc");
    ComboPooledDataSource dataSource = new ComboPooledDataSource();
    dataSource.setDriverClass(rb.getString("jdbc.driver"));
    dataSource.setJdbcUrl(rb.getString("jdbc.url"));
    dataSource.setUser(rb.getString("jdbc.username"));
    dataSource.setPassword(rb.getString("jdbc.password"));
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
}
```

### Spring配置数据源

可以将DataSource的创建权交由Spring容器去完成

- DataSource有无参构造方法，而Spring默认就是通过无参构造方法实例化对象的
- DataSource要想使用需要通过set方法设置数据库连接信息，而Spring可以通过set方法进行字符串注入

```xml
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="com.mysql.jdbc.Driver"/>
    <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"/>
    <property name="user" value="root"/>
    <property name="password" value="root"/>
</bean>
```

测试从容器当中获取数据源

```java
ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
DataSource dataSource = (DataSource) applicationContext.getBean("dataSource");
Connection connection = dataSource.getConnection();
System.out.println(connection);
```

### 抽取jdbc配置文件

applicationContext.xml加载jdbc.properties配置文件获得连接信息。

首先，需要引入context命名空间和约束路径：

- 命名空间：xmlns:context="http://www.springframework.org/schema/context"
- 约束路径：http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd

```xml
<context:property-placeholder location="classpath:jdbc.properties"/>
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="${jdbc.driver}"/>
    <property name="jdbcUrl" value="${jdbc.url}"/>
    <property name="user" value="${jdbc.username}"/>
    <property name="password" value="${jdbc.password}"/>
</bean>
```

### 知识要点

#### Spring容器加载properties文件

```xml
<context:property-placeholder location="xx.properties"/>
<property name="" value="${key}"/>
```

## Spring注解开发

### Spring原始注解

Spring是轻代码而重配置的框架，配置比较繁重，影响开发效率，所以注解开发是一种趋势，注解代替xml配置文件可以简化配置，提高开发效率。

Spring原始注解主要是替代`<Bean>`的配置

|      注解      |                      说明                      |
| :------------: | :--------------------------------------------: |
|   @Component   |            使用在类上用于实例化Bean            |
|  @Controller   |         使用在web层类上用于实例化Bean          |
|    @Service    |       使用在service层类上用于实例化Bean        |
|  @Repository   |         使用在dao层类上用于实例化Bean          |
|   @Autowired   |        使用在字段上用于根据类型依赖注入        |
|   @Qualifier   | 结合@Autowired一起使用用于根据名称进行依赖注入 |
|   @Resource    | 相当于@Autowired+@Qualifier，按照名称进行注入  |
|     @Value     |                  注入普通属性                  |
|     @Scope     |               标注Bean的作用范围               |
| @PostConstruct |    使用在方法上标注该方法是Bean的初始化方法    |
|  @PreDestroy   |     使用在方法上标注该方法是Bean的销毁方法     |

**注意**：

使用注解进行开发时，需要在applicationContext.xml中配置组件扫描，作用是指定哪个包及其子包下的Bean需要进行扫描以便识别使用注解配置的类、字段和方法。

```xml
<!--注解的组件扫描-->
<context:component-scan base-package="com.itheima"></context:componentscan>
```

- 使用`@Compont`或`@Repository`标识`UserDaoImpl`需要Spring进行实例化。

```java
//@Component("userDao")
@Repository("userDao")
public class UserDaoImpl implements UserDao {
    @Override
    public void save() {
        System.out.println("save running... ...");
    }
}
```

- 使用`@Autowired`或者`@Autowired+@Qulifier`或者`@Resource`进行`userDao`的注入

```java
//@Component("userService")
@Service("userService")
public class UserServiceImpl implements UserService {
    /*@Autowired
    @Qualifier("userDao")*/
    @Resource(name="userDao")
    private UserDao userDao;
    @Override
    public void save() {
        userDao.save();
    }
}
```

- 使用`@Value`进行字符串的注入

```java
@Repository("userDao")
public class UserDaoImpl implements UserDao {
    @Value("注入普通数据")
    private String str;
    @Value("${jdbc.driver}")
    private String driver;
    @Override
    public void save() {
        System.out.println(str);
        System.out.println(driver);
        System.out.println("save running... ...");
    }
}
```

- 使用`@Scope`标注Bean的范围

```java
//@Scope("prototype")
@Scope("singleton")
public class UserDaoImpl implements UserDao {
    //此处省略代码
}
```

- 使用`@PostConstruct`标注初始化方法，使用`@PreDestroy`标注销毁方法

```java
@PostConstruct
public void init(){
    System.out.println("初始化方法....");
}
@PreDestroy
public void destroy(){
    System.out.println("销毁方法.....");
}
```

### Spring新注解

使用上面的注解还不能全部替代xml配置文件，还需要使用注解替代的配置如下：

- 非自定义的Bean的配置：`<bean>`
- 加载properties文件的配置：`<context:property-placeholder>`
- 组件扫描的配置：`<context:component-scan>`
- 引入其他文件：`<import>`

|      注解       |                                                                    说明                                                                     |
| :-------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| @Configuration  |                                     用于指定当前类是一个 Spring 配置类，当创建容器时会从该类上加载注解                                      |
| @ComponentScan  | 用于指定 Spring 在初始化容器时要扫描的包。<br>作用和在 Spring 的 xml 配置文件中的`<context:component-scan base-package="com.itheima"/>`一样 |
|      @Bean      |                                           使用在方法上，标注将该方法的返回值存储到 Spring 容器中                                            |
| @PropertySource |                                                      用于加载.properties 文件中的配置                                                       |
|     @Import     |                                                             用于导入其他配置类                                                              |

- @Configuration
- @ComponentScan
- @Import

```java
@Configuration
@ComponentScan("com.itheima")
@Import({DataSourceConfiguration.class})
public class SpringConfiguration {
}
```

- @PropertySource
- @value

```java
@PropertySource("classpath:jdbc.properties")
public class DataSourceConfiguration {
    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username}")
    private String username;
    @Value("${jdbc.password}")
    private String password;
}
```

- @Bean

```java
@Bean(name="dataSource")
public DataSource getDataSource() throws PropertyVetoException {
    ComboPooledDataSource dataSource = new ComboPooledDataSource();
    dataSource.setDriverClass(driver);
    dataSource.setJdbcUrl(url);
    dataSource.setUser(username);
    dataSource.setPassword(password);
    return dataSource;
}
```

测试加载核心配置类创建Spring容器

```java
@Test
public void testAnnoConfiguration() throws Exception {
    ApplicationContext applicationContext = new AnnotationConfigApplicationContext(SpringConfiguration.class);
    UserService userService = (UserService) applicationContext.getBean("userService");
    userService.save();
    DataSource dataSource = (DataSource) applicationContext.getBean("dataSource");
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
}
```

## Spring整合Junit

### 原始Junit测试Spring的问题

在测试类中，每个测试方法都有以下两行代码：

```java
ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml");
IAccountService as = ac.getBean("accountService",IAccountService.class);
```

这两行代码的作用是获取容器，如果不写的话，直接会提示空指针异常。所以又不能轻易删掉。

### 上述问题解决思路

- 让SpringJunit负责创建Spring容器，但是需要将配置文件的名称告诉它
- 将需要进行测试Bean直接在测试类中进行注入

### Spring集成Junit步骤

1. 导入spring集成Junit的坐标
1. 使用@Runwith注解替换原来的运行期
1. 使用@ContextConfiguration指定配置文件或配置类
1. 使用@Autowired注入需要测试的对象
1. 创建测试方法进行测试

### Spring集成Junit代码实现

1. 导入spring集成Junit的坐标

```xml
<!--此处需要注意的是，spring5 及以上版本要求 junit 的版本必须是 4.12 及以上-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.0.2.RELEASE</version>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
```

2. 使用@Runwith注解替换原来的运行期

```java
@RunWith(SpringJUnit4ClassRunner.class)
    public class SpringJunitTest {
}
```

3. 使用@ContextConfiguration指定配置文件或配置类

```java
@RunWith(SpringJUnit4ClassRunner.class)
//加载spring核心配置文件
//@ContextConfiguration(value = {"classpath:applicationContext.xml"})
//加载spring核心配置类
@ContextConfiguration(classes = {SpringConfiguration.class})
public class SpringJunitTest {
}
```

4. 使用@Autowired注入需要测试的对象

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {SpringConfiguration.class})
public class SpringJunitTest {
    @Autowired
    private UserService userService;
}
```

5. 创建测试方法进行测试

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {SpringConfiguration.class})
public class SpringJunitTest {
    @Autowired
    private UserService userService;
    @Test
    public void testUserService(){
        userService.save();
    }
}
```

### 知识要点

#### Spring集成Junit步骤

1. 导入spring集成Junit的坐标
1. 使用@Runwith注解替换原来的运行期
1. 使用@ContextConfiguration指定配置文件或配置类
1. 使用@Autowired注入需要测试的对象
1. 创建测试方法进行测试

# SpringMVC入门

## Spring与Web环境集成

### ApplicationContext应用上下文获取方式

应用上下文对象是通过==new ClasspathXmlApplicationContext(spring配置文件)==方式获取的，但是每次从容器中获得Bean时都要编写==new ClasspathXmlApplicationContext(spring配置文件)== ，这样的弊端是配置文件加载多次，应用上下文对象创建多次。

在Web项目中，可以使用==ServletContextListener==监听Web应用的启动，我们可以在Web应用启动时，就加载Spring的配置文件，创建应用上下文对象==ApplicationContext==，在将其存储到最大的域==servletContext==域中，这样就可以在任意位置从域中获得应用上下文==ApplicationContext==对象了。

### Spring提供获取应用上下文的工具

上面的分析不用手动实现，Spring提供了一个监听器==ContextLoaderListener==就是对上述功能的封装，该监听器内部加载Spring配置文件，创建应用上下文对象，并存储到==ServletContext==域中，提供了一个客户端工具==WebApplicationContextUtils==供使用者获得应用上下文对象。

所以我们需要做的只有两件事：
1. 在==web.xml==中配置==ContextLoaderListener==监听器（导入spring-web坐标）
1. 使用==WebApplicationContextUtils==获得应用上下文对象==ApplicationContext==

### 导入Spring集成web的坐标

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>5.0.5.RELEASE</version>
</dependency>
```

### 配置ContextLoaderListener监听器

```xml
<!--全局参数-->
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
</context-param>
<!--Spring的监听器-->
<listener>
    <listener-class>
        org.springframework.web.context.ContextLoaderListener
    </listener-class>
</listener>
```

### 通过工具获得应用上下文对象

```java
ApplicationContext applicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
Object obj = applicationContext.getBean("id");
```

### 知识要点

#### Spring集成web环境步骤
1. 配置ContextLoaderListener监听器
1. 使用WebApplicationContextUtils获得应用上下文

## SpringMVC的简介

### SpringMVC概述

==SpringMVC== 是一种基于 Java 的实现 ==MVC 设计模型==的请求驱动类型的轻量级 ==Web 框架==，属于SpringFrameWork 的后续产品，已经融合在 Spring Web Flow 中。

SpringMVC 已经成为目前最主流的MVC框架之一，并且随着Spring3.0 的发布，全面超越 Struts2，成为最优秀的 MVC 框架。它通过一套注解，让一个简单的 Java 类成为处理请求的控制器，而无须实现任何接口。同时它还支持 ==RESTful== 编程风格的请求。

### SpringMVC快速入门

需求：客户端发起请求，服务器端接收请求，执行逻辑并进行视图跳转。

开发步骤：
1. 导入SpringMVC相关坐标
1. 配置SpringMVC核心控制器DispathcerServlet
1. 创建Controller类和视图页面
1. 使用注解配置 Controller类 中业务方法的映射地址
1. 配置 SpringMVC 核心文件 spring-mvc.xml
1. 客户端发起请求测试

---

1. 导入Spring和SpringMVC的坐标

```xml
<!--Spring坐标-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.0.5.RELEASE</version>
</dependency>
<!--SpringMVC坐标-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.0.5.RELEASE</version>
</dependency>
```

2. 在web.xml配置SpringMVC的核心控制器

```xml
<servlet>
    <servlet-name>DispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:spring-mvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>DispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

3. 创建Controller和业务方法

```java
public class QuickController {
    public String quickMethod(){
        System.out.println("quickMethod running.....");
        return "index";
    }
}
```

4. 创建视图页面index.jsp

```jsp
<html>
<body>
    <h2>Hello SpringMVC!</h2>
</body>
</html>
```

5. 配置注解

```java
@Controller
public class QuickController {
    @RequestMapping("/quick")
    public String quickMethod(){
        System.out.println("quickMethod running.....");
        return "index";
    }
}
```

6. 创建spring-mvc.xml

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:mvc="http://www.springframework.org/schema/mvc"
        xmlns:context="http://www.springframework.org/schema/context"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/mvc
        http://www.springframework.org/schema/mvc/spring-mvc.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd">
    <!--配置注解扫描-->
    <context:component-scan base-package="com.itheima"/>
</beans>
```

7. 访问测试地址

```txt
http://localhost:8080/itheima_springmvc1/quick
```

### SpringMVC流程图示

![](images/SpringMVC%E6%B5%81%E7%A8%8B%E5%9B%BE%E7%A4%BA.png)

### 知识要点

#### SpringMVC的开发步骤
1. 导入SpringMVC相关坐标
1. 配置SpringMVC核心控制器DispathcerServlet
1. 创建Controller类和视图页面
1. 使用注解配置Controller类中业务方法的映射地址
1. 配置SpringMVC核心文件 spring-mvc.xml
1. 客户端发起请求测试

## SpringMVC的组件解析

### SpringMVC的执行流程

![](images/SpringMVC%E7%9A%84%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.png)

1. 用户发送请求至前端控制器DispatcherServlet。
1. DispatcherServlet收到请求调用HandlerMapping处理器映射器。
1. 处理器映射器找到具体的处理器(可以根据xml配置、注解进行查找)，生成处理器对象及处理器拦截器(如果有则生成)一并返回给DispatcherServlet。
1. DispatcherServlet调用HandlerAdapter处理器适配器。
1. HandlerAdapter经过适配调用具体的处理器(Controller，也叫后端控制器)。
1. Controller执行完成返回ModelAndView。
1. HandlerAdapter将controller执行结果ModelAndView返回给DispatcherServlet。
1. DispatcherServlet将ModelAndView传给ViewResolver视图解析器。
1. ViewResolver解析后返回具体View。
1. DispatcherServlet根据View进行渲染视图（即将模型数据填充至视图中）。DispatcherServlet响应用户

### SpringMVC组件解析

1. 前端控制器：DispatcherServlet
    - 用户请求到达前端控制器，它就相当于 MVC 模式中的 C，DispatcherServlet 是整个流程控制的中心，由它调用其它组件处理用户的请求，DispatcherServlet 的存在降低了组件之间的耦合性。
2. 处理器映射器：HandlerMapping
    - HandlerMapping 负责根据用户请求找到 Handler 即处理器，SpringMVC 提供了不同的映射器实现不同的映射方式，例如：配置文件方式，实现接口方式，注解方式等。
3. 处理器适配器：HandlerAdapter
    - 通过 HandlerAdapter 对处理器进行执行，这是适配器模式的应用，通过扩展适配器可以对更多类型的处理器进行执行。
4. 处理器：Handler
    - 它就是我们开发中要编写的具体业务控制器。由 DispatcherServlet 把用户请求转发到 Handler。由 Handler 对具体的用户请求进行处理。
5. 视图解析器：View Resolver
    - View Resolver 负责将处理结果生成 View 视图，View Resolver 首先根据逻辑视图名解析成物理视图名，即具体的页面地址，再生成 View 视图对象，最后对 View 进行渲染将处理结果通过页面展示给用户。
6. 视图：View
    - SpringMVC 框架提供了很多的 View 视图类型的支持，包括：jstlView、freemarkerView、pdfView等。最常用的视图就是 jsp。一般情况下需要通过页面标签或页面模版技术将模型数据通过页面展示给用户，需要由程序员根据业务需求开发具体的页面

### SpringMVC注解解析

`@RequestMapping`
- 作用：用于建立请求 URL 和处理请求方法之间的对应关系
- 位置：
    - 类上，请求URL 的第一级访问目录。此处不写的话，就相当于应用的根目录
    - 方法上，请求 URL 的第二级访问目录，与类上的使用@ReqquestMapping标注的一级目录一起组成访问虚拟路径
- 属性：
    - `value`：用于指定请求的URL。它和path属性的作用是一样的
    - `method`：用于指定请求的方式
    - `params`：用于指定限制请求参数的条件。它支持简单的表达式。要求请求参数的key和value必须和配置的一模一样
- 例如：
    - `params = {"accountName"}`，表示请求参数必须有accountName
    - `params = {"moeny!=100"}`，表示请求参数中money不能是100

---

1. mvc命名空间引入

```xml
命名空间：xmlns:context="http://www.springframework.org/schema/context"
        xmlns:mvc="http://www.springframework.org/schema/mvc"
约束地址：http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/mvc 
        http://www.springframework.org/schema/mvc/spring-mvc.xsd
```

2. 组件扫描
SpringMVC基于Spring容器，所以在进行SpringMVC操作时，需要将Controller存储到Spring容器中，如果使用`@Controller`注解标注的话，就需要使用`<context:component-scan basepackage=“com.itheima.controller"/>`进行组件扫描。

### SpringMVC的XML配置解析

1. 视图解析器

SpringMVC有默认组件配置，默认组件都是DispatcherServlet.properties配置文件中配置的，该配置文件地址org/springframework/web/servlet/DispatcherServlet.properties，该文件中配置了默认的视图解析器，如下：

```xml
org.springframework.web.servlet.ViewResolver=org.springframework.web.servlet.view.InternalResourceViewResolver
```

翻看该解析器源码，可以看到该解析器的默认设置，如下：

```sql
REDIRECT_URL_PREFIX = "redirect:" --重定向前缀
FORWARD_URL_PREFIX = "forward:" --转发前缀（默认值）
prefix = ""; --视图名称前缀
suffix = ""; --视图名称后缀
```

我们可以通过属性注入的方式修改视图的的前后缀

```xml
<!--配置内部资源视图解析器-->
<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <property name="prefix" value="/WEB-INF/views/"></property>
    <property name="suffix" value=".jsp"></property>
</bean>
```

### 知识要点

#### SpringMVC的相关组件
- 前端控制器：DispatcherServlet
- 处理器映射器：HandlerMapping
- 处理器适配器：HandlerAdapter
- 处理器：Handler
- 视图解析器：View Resolver
- 视图：View

#### SpringMVC的注解和配置
- 请求映射注解：@RequestMapping
- 视图解析器配置：

```sql
REDIRECT_URL_PREFIX = "redirect:" 
FORWARD_URL_PREFIX = "forward:" 
prefix = ""; 
suffix = "";
```

# SpringMVC的请求和响应

## SpringMVC的数据响应

### SpringMVC的数据响应方式

1. 页面跳转
   - 直接返回字符串
   - 通过ModelAndView对象返回
2. 回写数据
   - 直接返回字符串
   - 返回对象或集合

### 页面跳转

#### 1. 返回字符串形式

直接返回字符串：此种方式会将返回的字符串与视图解析器的前后缀拼接后跳转

![](images/%E8%BF%94%E5%9B%9E%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%BD%A2%E5%BC%8F.png)

返回带有前缀的字符串：
- 转发：`forward:/WEB-INF/views/index.jsp`
- 重定向：`redirect:/index.jsp`

#### 2. 返回ModelAndView对象

```java
@RequestMapping("/quick2")
public ModelAndView quickMethod2(){
    ModelAndView modelAndView = new ModelAndView();
    modelAndView.setViewName("redirect:index.jsp");
    return modelAndView;
}
@RequestMapping("/quick3")
public ModelAndView quickMethod3(){
    ModelAndView modelAndView = new ModelAndView();
    modelAndView.setViewName("forward:/WEB-INF/views/index.jsp");
    return modelAndView;
}
```

#### 3. 向request域存储数据

在进行转发时，往往要向request域中存储数据，在jsp页面中显示，那么Controller中怎样向request 域中存储数据呢？

1. 通过SpringMVC框架注入的request对象setAttribute()方法设置

```java
@RequestMapping("/quick")
public String quickMethod(HttpServletRequest request){
    request.setAttribute("name","zhangsan");
    return "index";
}
```

2. 通过ModelAndView的addObject()方法设置

```java
@RequestMapping("/quick3")
public ModelAndView quickMethod3(){
    ModelAndView modelAndView = new ModelAndView();
    modelAndView.setViewName("forward:/WEB-INF/views/index.jsp");
    modelAndView.addObject("name","lisi");
    return modelAndView;
}
```

### 回写数据

#### 1. 直接返回字符串

Web基础阶段，客户端访问服务器端，如果想直接回写字符串作为响应体返回的话，只需要使用`response.getWriter().print(“hello world”)` 即可，那么在Controller中想直接回写字符串该怎样呢？

1. 通过SpringMVC框架注入的response对象，使用`response.getWriter().print(“hello world”)` 回写数据，此时不需要视图跳转，业务方法返回值为void。

```java
@RequestMapping("/quick4")
public void quickMethod4(HttpServletResponse response) throws IOException {
    response.getWriter().print("hello world");
}
```

2. 将需要回写的字符串直接返回，但此时需要通过`@ResponseBody`注解告知SpringMVC框架，方法返回的字符串不是跳转是直接在http响应体中返回。

```java
@RequestMapping("/quick5")
@ResponseBody
public String quickMethod5() throws IOException {
    return "hello springMVC!!!";
}
```

在异步项目中，客户端与服务器端往往要进行json格式字符串交互，此时我们可以手动拼接json字符串返回。

```java
@RequestMapping("/quick6")
@ResponseBody
public String quickMethod6() throws IOException {
    return "{\"name\":\"zhangsan\",\"age\":18}";
}
```

上述方式手动拼接json格式字符串的方式很麻烦，开发中往往要将复杂的java对象转换成json格式的字符串，我们可以使用web阶段学习过的json转换工具jackson进行转换，导入jackson坐标。

```xml
<!--jackson-->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
    <version>2.9.0</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.0</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-annotations</artifactId>
    <version>2.9.0</version>
</dependency>
```

通过jackson转换json格式字符串，回写字符串。

```java
@RequestMapping("/quick7")
@ResponseBody
public String quickMethod7() throws IOException {
    User user = new User();
    user.setUsername("zhangsan");
    user.setAge(18);
    ObjectMapper objectMapper = new ObjectMapper();
    String s = objectMapper.writeValueAsString(user);
    return s;
}
```

#### 2. 返回对象或集合

通过SpringMVC帮助我们对对象或集合进行json字符串的转换并回写，为处理器适配器配置消息转换参数，指定使用jackson进行对象或集合的转换，因此需要在spring-mvc.xml中进行如下配置：

```xml
<bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter">
    <property name="messageConverters">
        <list>
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
            </bean>
        </list>
    </property>
</bean>
```

```java
@RequestMapping("/quick8")
@ResponseBody
public User quickMethod8() throws IOException {
    User user = new User();
    user.setUsername("zhangsan");
    user.setAge(18);
    return user;
}
```

在方法上添加@ResponseBody就可以返回json格式的字符串，但是这样配置比较麻烦，配置的代码比较多，因此，我们可以使用mvc的注解驱动代替上述配置。

```xml
<!--mvc的注解驱动-->
<mvc:annotation-driven/>
```

在 SpringMVC 的各个组件中，==处理器映射器、处理器适配器、视图解析器称==为 SpringMVC 的三大组件。

使用`<mvc:annotation-driven>`自动加载 RequestMappingHandlerMapping（处理映射器）和RequestMappingHandlerAdapter（ 处 理 适 配 器 ），可用在Spring-xml.xml配置文件中使用`<mvc:annotation-driven>`替代注解处理器和适配器的配置。

同时使用`<mvc:annotation-driven>`默认底层就会集成jackson进行对象或集合的json格式字符串的转换。

### 知识要点

#### SpringMVC的数据响应方式

1. 页面跳转
   - 直接返回字符串
   - 通过ModelAndView对象返回
2. 回写数据
   - 直接返回字符串
   - 返回对象或集合

## SpringMVC获得请求数据

### 获得请求参数

客户端请求参数的格式是：`name=value&name=value… …`

服务器端要获得请求的参数，有时还需要进行数据的封装，SpringMVC可以接收如下类型的参数：

- 基本类型参数
- POJO类型参数
- 数组类型参数
- 集合类型参数

###  获得基本类型参数

Controller中的业务方法的参数名称要与请求参数的name一致，参数值会自动映射匹配。

```txt
http://localhost:8080/itheima_springmvc1/quick9?username=zhangsan&age=12
```

```java
@RequestMapping("/quick9")
@ResponseBody
public void quickMethod9(String username,int age) throws IOException {
    System.out.println(username);
    System.out.println(age);
}
```

### 获得POJO类型参数

Controller中的业务方法的POJO参数的属性名与请求参数的name一致，参数值会自动映射匹配。

```txt
http://localhost:8080/itheima_springmvc1/quick9?username=zhangsan&age=12
```

```java
public class User {
    private String username;
    private int age;
    getter/setter…
}
@RequestMapping("/quick10")
@ResponseBody
public void quickMethod10(User user) throws IOException {
    System.out.println(user);
}
```

### 获得数组类型参数

Controller中的业务方法数组名称与请求参数的name一致，参数值会自动映射匹配。

```txt
http://localhost:8080/itheima_springmvc1/quick11?strs=111&strs=222&strs=333
```

```java
@RequestMapping("/quick11")
@ResponseBody
public void quickMethod11(String[] strs) throws IOException {
    System.out.println(Arrays.asList(strs));
}
```

### 获得集合类型参数

获得集合参数时，要将集合参数包装到一个POJO中才可以。

```html
<form action="${pageContext.request.contextPath}/quick12" method="post">
    <input type="text" name="userList[0].username"><br>
    <input type="text" name="userList[0].age"><br>
    <input type="text" name="userList[1].username"><br>
    <input type="text" name="userList[1].age"><br>
    <input type="submit" value="提交"><br>
</form>
```

```java
@RequestMapping("/quick12")
@ResponseBody
public void quickMethod12(Vo vo) throws IOException {
    System.out.println(vo.getUserList());
}
```

当使用ajax提交时，可以指定`contentType`为`json`形式，那么在方法参数位置使用`@RequestBody`可以直接接收集合数据而无需使用POJO进行包装。

```html
<script>
    //模拟数据
    var userList = new Array();
    userList.push({username: "zhangsan",age: "20"});
    userList.push({username: "lisi",age: "20"});
    $.ajax({
        type: "POST",
        url: "/itheima_springmvc1/quick13",
        data: JSON.stringify(userList),
        contentType : 'application/json;charset=utf-8'
    });
</script>
```

```java
@RequestMapping("/quick13")
@ResponseBody
public void quickMethod13(@RequestBody List<User> userList) throws IOException {
    System.out.println(userList);
}
```

注意：通过谷歌开发者工具抓包发现，没有加载到jquery文件，原因是SpringMVC的前端控制器`DispatcherServlet`的`url-pattern`配置的是`/`,代表对所有的资源都进行过滤操作，我们可以通过以下两种方式指定放行静态资源：

- 在spring-mvc.xml配置文件中指定放行的资源`<mvc:resources mapping="/js/**"location="/js/"/>` 
- 使用`<mvc:default-servlet-handler/>`标签

### 请求数据乱码问题

当post请求时，数据会出现乱码，我们可以设置一个过滤器来进行编码的过滤。

```xml
<filter>
    <filter-name>CharacterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>CharacterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

### 参数绑定注解@requestParam

当请求的参数名称与Controller的业务方法参数名称不一致时，就需要通过`@RequestParam`注解显示的绑定。

```html
<form action="${pageContext.request.contextPath}/quick14" method="post">
    <input type="text" name="name"><br>
    <input type="submit" value="提交"><br>
</form>
```

```java
@RequestMapping("/quick14")
@ResponseBody
public void quickMethod14(@RequestParam("name") String username) throws IOException {
    System.out.println(username);
}
```

---

注解@RequestParam还有如下参数可以使用：
- `value`：与请求参数名称
- `required`：此在指定的请求参数是否必须包括，默认是true，提交时如果没有此参数则报错
- `defaultValue`：当没有指定请求参数时，则使用指定的默认值赋值

```java
@RequestMapping("/quick14")
@ResponseBody
public void quickMethod14(@RequestParam(value="name",required = false,defaultValue = "itcast") String username) throws IOException {
    System.out.println(username);
}
```

### 获得Restful风格的参数

==Restful==是一种软件==架构风格、设计风格==，而不是标准，只是提供了一组设计原则和约束条件。主要用于客户端和服务器交互类的软件，基于这个风格设计的软件可以更简洁，更有层次，更易于实现缓存机制等。

==Restful==风格的请求是使用“==url+请求方式==”表示一次请求目的的，HTTP 协议里面四个表示操作方式的动词如下：
- GET：用于获取资源
- POST：用于新建资源
- PUT：用于更新资源
- DELETE：用于删除资源

例如：
- /user/1 GET ： 得到 id = 1 的 user
- /user/1 DELETE： 删除 id = 1 的 user
- /user/1 PUT： 更新 id = 1 的 user
- /user POST： 新增 user

上述url地址/user/1中的1就是要获得的请求参数，在SpringMVC中可以使用占位符进行参数绑定。地址/user/1可以写成/user/{id}，占位符{id}对应的就是1的值。在业务方法中我们可以使用`@PathVariable`注解进行占位符的匹配获取工作。

```txt
http://localhost:8080/itheima_springmvc1/quick19/zhangsan
```

![](images/%E8%8E%B7%E5%BE%97Restful%E9%A3%8E%E6%A0%BC%E7%9A%84%E5%8F%82%E6%95%B0.png)

### 自定义类型转换器

- SpringMVC 默认已经提供了一些常用的类型转换器，例如客户端提交的字符串转换成int型进行参数设置。
- 但是不是所有的数据类型都提供了转换器，没有提供的就需要自定义转换器，例如：日期类型的数据就需要自定义转换器。

自定义类型转换器的开发步骤：
1. 定义转换器类实现Converter接口
1. 在配置文件中声明转换器
1. 在<annotation-driven>中引用转换器

---

1. 定义转换器类实现Converter接口

```java
public class DateConverter implements Converter<String,Date>{
    @Override
    public Date convert(String source) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date date = format.parse(source);
            return date;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

2. 在配置文件中声明转换器

```xml
<bean id="converterService" class="org.springframework.context.support.ConversionServiceFactoryBean">
    <property name="converters">
        <list>
            <bean class="com.itheima.converter.DateConverter"/>
        </list>
    </property>
</bean>
```

3. 在`<annotation-driven>`中引用转换器

```xml
<mvc:annotation-driven conversion-service="converterService"/>
```

### 获得Servlet相关API

SpringMVC支持使用原始ServletAPI对象作为控制器方法的参数进行注入，常用的对象如下：
- HttpServletRequest
- HttpServletResponse
- HttpSession

```java
@RequestMapping("/quick16")
@ResponseBody
public void quickMethod16(HttpServletRequest request,HttpServletResponse response,HttpSession session){
    System.out.println(request);
    System.out.println(response);
    System.out.println(session);
}
```

### 获得请求头

#### 1. @RequestHeader

使用`@RequestHeader`可以获得请求头信息，相当于web阶段学习的`request.getHeader(name)`

`@RequestHeader`注解的属性如下：
- `value`：请求头的名称
- `required`：是否必须携带此请求头

```java
@RequestMapping("/quick17")
@ResponseBody
public void quickMethod17(@RequestHeader(value = "User-Agent",required = false) String headerValue){
    System.out.println(headerValue);
}
```

#### 2. @CookieValue

使用`@CookieValue`可以获得指定Cookie的值

`@CookieValue`注解的属性如下：
- `value`：指定cookie的名称
- `required`：是否必须携带此cookie

```java
@RequestMapping("/quick18")
@ResponseBody
public void quickMethod18(@CookieValue(value = "JSESSIONID",required = false) String jsessionid){
    System.out.println(jsessionid);
}
```

### 文件上传

#### 1. 文件上传客户端三要素

- 表单项type=“file”
- 表单的提交方式是post
- 表单的enctype属性是多部分表单形式，及enctype=“multipart/form-data”

![](images/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%B8%89%E8%A6%81%E7%B4%A0.png)

#### 2. 文件上传原理

- 当form表单修改为多部分表单时，`request.getParameter()`将失效。
- `enctype=“application/x-www-form-urlencoded”`时，form表单的正文内容格式是：`key=value&key=value&key=value`
- 当form表单的`enctype`取值为`Mutilpart/form-data`时，请求正文内容就变成多部分形式：

![](images/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%8E%9F%E7%90%86.png)

### 单文件上传步骤

1. 导入fileupload和io坐标
1. 配置文件上传解析器
1. 编写文件上传代码

### 单文件上传实现

1. 导入fileupload和io坐标

```xml
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.2.2</version>
</dependency>
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.4</version>
</dependency>
```

2. 配置文件上传解析器

```xml
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
    <!--上传文件总大小-->
    <property name="maxUploadSize" value="5242800"/>
    <!--上传单个文件的大小-->
    <property name="maxUploadSizePerFile" value="5242800"/>
    <!--上传文件的编码类型-->
    <property name="defaultEncoding" value="UTF-8"/>
</bean>
```

3. 编写文件上传代码

```java
@RequestMapping("/quick20")
@ResponseBody
public void quickMethod20(String name,MultipartFile uploadFile) throws IOException {
    //获得文件名称
    String originalFilename = uploadFile.getOriginalFilename();
    //保存文件
    uploadFile.transferTo(new File("C:\\upload\\"+originalFilename));
}
```

### 多文件上传实现

多文件上传，只需要将页面修改为多个文件上传项，将方法参数`MultipartFile`类型修改为`MultipartFile[]`即可

```html
<h1>多文件上传测试</h1>
<form action="${pageContext.request.contextPath}/quick21" method="post" enctype="multipart/form-data">
    名称：<input type="text" name="name"><br>
    文件1：<input type="file" name="uploadFiles"><br>
    文件2：<input type="file" name="uploadFiles"><br>
    文件3：<input type="file" name="uploadFiles"><br>
    <input type="submit" value="提交"><br>
</form>
```

```java
@RequestMapping("/quick21")
@ResponseBody
public void quickMethod21(String name,MultipartFile[] uploadFiles) throws IOException {
    for (MultipartFile uploadFile : uploadFiles){
        String originalFilename = uploadFile.getOriginalFilename();
        uploadFile.transferTo(new File("C:\\upload\\"+originalFilename));
    }
}
```

### 知识要点

#### MVC实现数据请求方式

- 基本类型参数
- POJO类型参数
- 数组类型参数
- 集合类型参数

#### MVC获取数据细节

- 中文乱码问题
- `@RequestParam`和 `@PathVariable`
- 自定义类型转换器
- 获得Servlet相关API
- `@RequestHeader` 和 `@CookieValue`
- 文件上传

# JdbcTemplate

## Spring JdbcTemplate基本使用

### JdbcTemplate概述

它是spring框架中提供的一个对象，是对原始繁琐的Jdbc API对象的简单封装。spring框架为我们提供了很多的操作模板类。例如：操作关系型数据的JdbcTemplate和HibernateTemplate，操作nosql数据库的RedisTemplate，操作消息队列的JmsTemplate等等。

### JdbcTemplate开发步骤

1. 导入spring-jdbc和spring-tx坐标
1. 创建数据库表和实体
1. 创建JdbcTemplate对象
1. 执行数据库操作

### JdbcTemplate快速入门

1. 导入坐标

```xml
<!--导入spring的jdbc坐标-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>5.0.5.RELEASE</version>
</dependency>
<!--导入spring的tx坐标-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-tx</artifactId>
    <version>5.0.5.RELEASE</version>
</dependency>
```

2. 创建accout表和Accout实体

```java
public class Account {
    private String name;
    private double money;
    //省略get和set方法
}
```

3. 创建JdbcTemplate对象
4. 执行数据库操作

```java
//1、创建数据源对象
ComboPooledDataSource dataSource = new ComboPooledDataSource();
dataSource.setDriverClass("com.mysql.jdbc.Driver");
dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/test");
dataSource.setUser("root");
dataSource.setPassword("root");
//2、创建JdbcTemplate对象
JdbcTemplate jdbcTemplate = new JdbcTemplate();
//3、设置数据源给JdbcTemplate
jdbcTemplate.setDataSource(dataSource);
//4、执行操作
jdbcTemplate.update("insert into account values(?,?)","tom",5000);
```

### Spring产生JdbcTemplate对象

我们可以将JdbcTemplate的创建权交给Spring，将数据源DataSource的创建权也交给Spring，在Spring容器内部将数据源DataSource注入到JdbcTemplate模版对象中，配置如下：

```xml
<!--数据源DataSource-->
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="com.mysql.jdbc.Driver"></property>
    <property name="jdbcUrl" value="jdbc:mysql:///test"></property>
    <property name="user" value="root"></property>
    <property name="password" value="root"></property>
</bean>
<!--JdbcTemplate-->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
    <property name="dataSource" ref="dataSource"></property>
</bean>
```

1. 从容器中获得JdbcTemplate进行添加操作

```java
@Test
public void testSpringJdbcTemplate() throws PropertyVetoException {
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
    JdbcTemplate jdbcTemplate = applicationContext.getBean(JdbcTemplate.class);
    jdbcTemplate.update("insert into account values(?,?)","lucy",5000);
}
```

2. 修改操作

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class JdbcTemplateCRUDTest {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Test
    //测试修改操作
    public void testUpdate(){
        jdbcTemplate.update("update account set money=? where 
        name=?",1000,"tom");
    }
}
```

3. 删除和查询全部操作

```java
@Test
public void testDelete(){
    jdbcTemplate.update("delete from account where name=?","tom");
}
@Test
public void testQueryAll(){
    List<Account> accounts = jdbcTemplate.query("select * from account", new BeanPropertyRowMapper<Account>(Account.class));
    for (Account account : accounts) {
        System.out.println(account.getName());
    }
}
```

4. 查询单个数据操作操作

```java
@Test
//测试查询单个对象操作
public void testQueryOne(){
    Account account = jdbcTemplate.queryForObject("select * from account where name=?", new BeanPropertyRowMapper<Account>(Account.class), "tom");
    System.out.println(account.getName());
}
@Test
//测试查询单个简单数据操作(聚合查询)
public void testQueryCount(){
    Long aLong = jdbcTemplate.queryForObject("select count(*) from account", Long.class);
    System.out.println(aLong);
}
```

### 知识要点

1. 导入spring-jdbc和spring-tx坐标
1. 创建数据库表和实体
1. 创建JdbcTemplate对象
    - `JdbcTemplate jdbcTemplate = new JdbcTemplate();`
    - `jdbcTemplate.setDataSource(dataSource);`
1. 执行数据库操作
    - 更新操作：
        - `jdbcTemplate.update (sql,params)`
    - 查询操作：
        - `jdbcTemplate.query (sql,Mapper,params)`
        - `jdbcTemplate.queryForObject(sql,Mapper,params)`

# SpringMVC拦截器

## SpringMVC拦截器

### 拦截器（interceptor）的作用

Spring MVC 的==拦截器==类似于 Servlet 开发中的过滤器 Filter，用于对处理器进行==预处理==和==后处理==。

将拦截器按一定的顺序联结成一条链，这条链称为==拦截器链（Interceptor Chain）==。在访问被拦截的方法或字段时，拦截器链中的拦截器就会按其之前定义的顺序被调用。拦截器也是AOP思想的具体实现。

### 拦截器和过滤器区别

|   区别   |                     过滤器（Filter）                      |                                                           拦截器（Interceptor）                                                           |
| :------: | :-------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| 使用范围 |  是 servlet 规范中的一部分，任何Java Web 工程都可以使用   |                                       是 SpringMVC 框架自己的，只有使用了SpringMVC 框架的工程才能用                                       |
| 拦截范围 | 在 url-pattern 中配置了/*之后，可以对所有要访问的资源拦截 | 在`<mvc:mapping path=“”/>`中配置了/**之后，也可以多所有资源进行拦截，但是可以通过`<mvc:exclude-mapping path=“”/>`标签排除不需要拦截的资源 |

### 拦截器快速入门

自定义拦截器很简单，只有如下三步：

1. 创建拦截器类实现HandlerInterceptor接口
1. 配置拦截器
1. 测试拦截器的拦截效果

---

1. 创建拦截器类实现HandlerInterceptor接口

```java
public class MyHandlerInterceptor1 implements HandlerInterceptor {
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        System.out.println("preHandle running...");
        return true;
    }
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) {
        System.out.println("postHandle running...");
    }
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        System.out.println("afterCompletion running...");
    }
}
```

2. 配置拦截器

```xml
<!--配置拦截器-->
<mvc:interceptors>
    <mvc:interceptor>
        <mvc:mapping path="/**"/>
        <bean class="com.itheima.interceptor.MyHandlerInterceptor1"/>
    </mvc:interceptor>
</mvc:interceptors>
```

3. 测试拦截器的拦截效果（编写目标方法）

```java
@RequestMapping("/quick23")
@ResponseBody
public ModelAndView quickMethod23() throws IOException, ParseException {
    System.out.println("目标方法执行....");
    ModelAndView modelAndView = new ModelAndView();
    modelAndView.addObject("name","itcast");
    modelAndView.setViewName("index");
    return modelAndView;
}
```

### 拦截器方法说明

|      方法名       |                                                                                                         说明                                                                                                          |
| :---------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    preHandle()    |   方法将在请求处理之前进行调用，该方法的返回值是布尔值Boolean类型的，当它返回为false 时，表示请求结束，后续的Interceptor 和Controller 都不会再执行；当返回值为true 时就会继续调用下一个Interceptor 的preHandle 方法   |
|   postHandle()    | 该方法是在当前请求进行处理之后被调用，前提是preHandle 方法的返回值为true 时才能被调用，且它会在DispatcherServlet 进行视图返回渲染之前被调用，所以我们可以在这个方法中对Controller 处理之后的ModelAndView 对象进行操作 |
| afterCompletion() |                                            该方法将在整个请求结束之后，也就是在DispatcherServlet 渲染了对应的视图之后执行，前提是preHandle 方法的返回值为true 时才能被调用                                            |

### 知识要点

#### 自定义拦截器步骤

1. 创建拦截器类实现HandlerInterceptor接口
1. 配置拦截器
1. 测试拦截器的拦截效果

# SpringMVC异常处理机制

## SpringMVC异常处理

### 异常处理的思路

系统中异常包括两类：==预期异常==和==运行时异常RuntimeException==，前者通过捕获异常从而获取异常信息，后者主要通过规范代码开发、测试等手段减少运行时异常的发生。

系统的==Dao、Service、Controller==出现都通过throws Exception向上抛出，最后由SpringMVC前端控制器交由异常处理器进行异常处理，如下图：

![](images/SpringMVC%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.png)

### 异常处理两种方式

- 使用Spring MVC提供的简单异常处理器SimpleMappingExceptionResolver
- 实现Spring的异常处理接口HandlerExceptionResolver 自定义自己的异常处理器

### 简单异常处理器SimpleMappingExceptionResolver

SpringMVC已经定义好了该类型转换器，在使用时可以根据项目情况进行相应异常与视图的映射配置

![](images/SpringMVC%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%862.png)

### 自定义异常处理步骤

1. 创建异常处理器类实现`HandlerExceptionResolver`
1. 配置异常处理器
1. 编写异常页面
1. 测试异常跳转

---

1. 创建异常处理器类实现`HandlerExceptionResolver`

```java
public class MyExceptionResolver implements HandlerExceptionResolver {
    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        //处理异常的代码实现
        //创建ModelAndView对象
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("exceptionPage");
        return modelAndView;
    }
}
```

2. 配置异常处理器

```xml
<bean id="exceptionResolver" class="com.itheima.exception.MyExceptionResolver"/>
```

3. 编写异常页面

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    这是一个最终异常的显示页面
</body>
</html>
```

4. 测试异常跳转

```java
@RequestMapping("/quick22")
@ResponseBody
public void quickMethod22() throws IOException, ParseException {
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
    simpleDateFormat.parse("abcde");
}
```

### 知识要点

#### 异常处理方式

- 配置简单异常处理器`SimpleMappingExceptionResolver`
- 自定义异常处理器

#### 自定义异常处理步骤

1. 创建异常处理器类实现`HandlerExceptionResolver`
1. 配置异常处理器
1. 编写异常页面
1. 测试异常跳转

# 面向切面编程AOP

## Spring 的 AOP 简介

### 什么是 AOP

==AOP==为 Aspect Oriented Programming 的缩写，意思为==面向切面编程==，是通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。

AOP 是 OOP 的延续，是软件开发中的一个热点，也是Spring框架中的一个重要内容，是函数式编程的一种衍生范型。利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高了开发的效率。

### AOP 的作用及其优势

- 作用：在程序运行期间，在不修改源码的情况下对方法进行功能增强
- 优势：减少重复代码，提高开发效率，并且便于维护

### AOP 的底层实现

实际上，AOP 的底层是通过 Spring 提供的的动态代理技术实现的。在运行期间，Spring通过动态代理技术动态的生成代理对象，代理对象方法执行时进行增强功能的介入，在去调用目标对象的方法，从而完成功能的增强。

### AOP 的动态代理技术

常用的动态代理技术
- JDK 代理 : 基于接口的动态代理技术
- cglib 代理：基于父类的动态代理技术

![](images/AOP%20%E7%9A%84%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86%E6%8A%80%E6%9C%AF.png)

### JDK 的动态代理

1. 目标类接口

```java
public interface TargetInterface {
    public void method();
}
```

2. 目标类

```java
public class Target implements TargetInterface {
    @Override
    public void method() {
        System.out.println("Target running....");
    }
}
```

3. 动态代理代码

```java
Target target = new Target(); //创建目标对象
//创建代理对象
TargetInterface proxy = (TargetInterface) Proxy.newProxyInstance(
    // 目标对象类加载器
    target.getClass().getClassLoader(),
    // 目标对象相同的接口字节码对象数组
    target.getClass().getInterfaces(),
    new InvocationHandler() {
        // 调用代理对象的任何方法，实质执行的都是invoke方法
        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            System.out.println("前置增强代码...");
            Object invoke = method.invoke(target, args);
            System.out.println("后置增强代码...");
            return invoke;
        }
    }
);
```

4. 调用代理对象的方法测试

```java
// 测试,当调用接口的任何方法时，代理对象的代码都无序修改
proxy.method();
```

### cglib 的动态代理

1. 目标类

```java
public class Target {
    public void method() {
        System.out.println("Target running....");
    }
}
```

2. 动态代理代码

```java
Target target = new Target(); //创建目标对象
Enhancer enhancer = new Enhancer(); //创建增强器
enhancer.setSuperclass(Target.class); //设置父类
enhancer.setCallback(new MethodInterceptor() { //设置回调
    @Override
    public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        System.out.println("前置代码增强....");
        Object invoke = method.invoke(target, objects);
        System.out.println("后置代码增强....");
        return invoke;
    }
});
Target proxy = (Target) enhancer.create(); //创建代理对象
```

3. 调用代理对象的方法测试

```java
//测试,当调用接口的任何方法时，代理对象的代码都无序修改
proxy.method();
```

### AOP 相关概念

Spring 的 AOP 实现底层就是对上面的动态代理的代码进行了封装，封装后我们只需要对需要关注的部分进行代码编写，并通过配置的方式完成指定目标的方法增强。

在正式讲解 AOP 的操作之前，我们必须理解 AOP 的相关术语，常用的术语如下：
- Target（目标对象）：代理的目标对象
- Proxy （代理）：一个类被 AOP 织入增强后，就产生一个结果代理类
- Joinpoint（连接点）：所谓连接点是指那些被拦截到的点。在spring中,这些点指的是方法，因为spring只支持方法类型的连接点
- Pointcut（切入点）：所谓切入点是指我们要对哪些 Joinpoint 进行拦截的定义
- Advice（通知/ 增强）：所谓通知是指拦截到 Joinpoint 之后所要做的事情就是通知
- Aspect（切面）：是切入点和通知（引介）的结合
- Weaving（织入）：是指把增强应用到目标对象来创建新的代理对象的过程。spring采用动态代理织入，而AspectJ采用编译期织入和类装载期织入

### AOP 开发明确的事项

1. 需要编写的内容
   - 编写核心业务代码（目标类的目标方法）
   - 编写切面类，切面类中有通知(增强功能方法)
   - 在配置文件中，配置织入关系，即将哪些通知与哪些连接点进行结合
2. AOP 技术实现的内容
    - Spring 框架监控切入点方法的执行。一旦监控到切入点方法被运行，使用代理机制，动态创建目标对象的代理对象，根据通知类别，在代理对象的对应位置，将通知对应的功能织入，完成完整的代码逻辑运行。
3. AOP 底层使用哪种代理方式
   - 在 spring 中，框架会根据目标类是否实现了接口来决定采用哪种动态代理的方式。

### 知识要点

- aop：面向切面编程
- aop底层实现：基于JDK的动态代理 和 基于Cglib的动态代理
- aop的重点概念：
    - Pointcut（切入点）：被增强的方法
    - Advice（通知/ 增强）：封装增强业务逻辑的方法
    - Aspect（切面）：切点+通知
    - Weaving（织入）：将切点与通知结合的过程
- 开发明确事项：
    - 谁是切点（切点表达式配置）
    - 谁是通知（切面类中的增强方法）
    - 将切点和通知进行织入配置

## 基于 XML 的 AOP 开发

### 快速入门

1. 导入 AOP 相关坐标
1. 创建目标接口和目标类（内部有切点）
1. 创建切面类（内部有增强方法）
1. 将目标类和切面类的对象创建权交给 spring
1. 在 applicationContext.xml 中配置织入关系
1. 测试代码

---

1. 导入 AOP 相关坐标

```xml
<!--导入spring的context坐标，context依赖aop-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.0.5.RELEASE</version>
</dependency>
<!-- aspectj的织入 -->
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.8.13</version>
</dependency>
```

2. 创建目标接口和目标类（内部有切点）

```java
public interface TargetInterface {
    public void method();
}
```
```java
public class Target implements TargetInterface {
    @Override
    public void method() {
        System.out.println("Target running....");
    }
}
```

3. 创建切面类（内部有增强方法）

```java
public class MyAspect {
    //前置增强方法
    public void before(){
        System.out.println("前置代码增强.....");
    }
}
```

4. 将目标类和切面类的对象创建权交给 spring

```xml
<!--配置目标类-->
<bean id="target" class="com.itheima.aop.Target"></bean>
<!--配置切面类-->
<bean id="myAspect" class="com.itheima.aop.MyAspect"></bean>
```

5. 在 applicationContext.xml 中配置织入关系
- 导入aop命名空间
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:aop="http://www.springframework.org/schema/aop"
    xsi:schemaLocation="
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop.xsd
        http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
">
```
- 配置切点表达式和前置增强的织入关系

```xml
<aop:config>
    <!--引用myAspect的Bean为切面对象-->
    <aop:aspect ref="myAspect">
        <!--配置Target的method方法执行时要进行myAspect的before方法前置增强-->
        <aop:before method="before" pointcut="execution(public void com.itheima.aop.Target.method())"></aop:before>
    </aop:aspect>
</aop:config>
```

6. 测试代码

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class AopTest {
    @Autowired
    private TargetInterface target;
    @Test
    public void test1(){
        target.method();
    }
}
```

### XML 配置 AOP 详解

#### 1. 切点表达式的写法

表达式语法：

```xml
execution([修饰符] 返回值类型 包名.类名.方法名(参数))
```

- 访问修饰符可以省略
- 返回值类型、包名、类名、方法名可以使用星号* 代表任意
- 包名与类名之间一个点 . 代表当前包下的类，两个点 .. 表示当前包及其子包下的类
- 参数列表可以使用两个点 .. 表示任意个数，任意类型的参数列表

例如：

```xml
execution(public void com.itheima.aop.Target.method())
execution(void com.itheima.aop.Target.*(..))
execution(* com.itheima.aop.*.*(..))
execution(* com.itheima.aop..*.*(..))
execution(* *..*.*(..))
```

#### 2. 通知的类型

通知的配置语法：

```xml
<aop:通知类型 method=“切面类中方法名” pointcut=“切点表达式"></aop:通知类型>
```

|     名称     |          标签           |                             说明                             |
| :----------: | :---------------------: | :----------------------------------------------------------: |
|   前置通知   |     `<aop:before>`      |     用于配置前置通知。指定增强的方法在切入点方法之前执行     |
|   后置通知   | `<aop:after-returning>` |     用于配置后置通知。指定增强的方法在切入点方法之后执行     |
|   环绕通知   |     `<aop:around>`      | 用于配置环绕通知。指定增强的方法在切入点方法之前和之后都执行 |
| 异常抛出通知 | `<aop:after-throwing>`  |     用于配置异常抛出通知。指定增强的方法在出现异常时执行     |
|   最终通知   |      `<aop:after>`      |     用于配置最终通知。无论增强方式执行是否有异常都会执行     |

#### 3. 切点表达式的抽取

当多个增强的切点表达式相同时，可以将切点表达式进行抽取，在增强中使用 `pointcut-ref` 属性代替 `pointcut` 属性来引用抽取后的切点表达式。

```xml
<aop:config>
    <!--引用myAspect的Bean为切面对象-->
    <aop:aspect ref="myAspect">
        <aop:pointcut id="myPointcut" expression="execution(* com.itheima.aop.*.*(..))"/>
        <aop:before method="before" pointcut-ref="myPointcut"></aop:before>
    </aop:aspect>
</aop:config>
```

### 知识要点

- aop织入的配置

```xml
<aop:config>
    <aop:aspect ref=“切面类”>
        <aop:before method=“通知方法名称” pointcut="切点表达式"></aop:before>
    </aop:aspect>
</aop:config>
```

- 通知的类型：前置通知、后置通知、环绕通知、异常抛出通知、最终通知
- 切点表达式的写法：

```xml
execution([修饰符] 返回值类型 包名.类名.方法名(参数))
```

## 基于注解的 AOP 开发

### 快速入门

基于注解的aop开发步骤：
1. 创建目标接口和目标类（内部有切点）
1. 创建切面类（内部有增强方法）
1. 将目标类和切面类的对象创建权交给 spring
1. 在切面类中使用注解配置织入关系
1. 在配置文件中开启组件扫描和 AOP 的自动代理
1. 测试

---

1. 创建目标接口和目标类（内部有切点）

```java
public interface TargetInterface {
    public void method();
}
```
```java
public class Target implements TargetInterface {
    @Override
    public void method() {
        System.out.println("Target running....");
    }
}
```

2. 创建切面类（内部有增强方法）

```java
public class MyAspect {
    //前置增强方法
    public void before(){
        System.out.println("前置代码增强.....");
    }
}
```

3. 将目标类和切面类的对象创建权交给 spring

```java
@Component("target")
public class Target implements TargetInterface {
    @Override
    public void method() {
        System.out.println("Target running....");
    }
}
@Component("myAspect")
public class MyAspect {
    public void before(){
        System.out.println("前置代码增强.....");
    }
}
```

4. 在切面类中使用注解配置织入关系

```java
@Component("myAspect")
@Aspect
public class MyAspect {
    @Before("execution(* com.itheima.aop.*.*(..))")
    public void before(){
        System.out.println("前置代码增强.....");
    }
}
```

5. 在配置文件中开启组件扫描和 AOP 的自动代理

```xml
<!--组件扫描-->
<context:component-scan base-package="com.itheima.aop"/>

<!--aop的自动代理-->
<aop:aspectj-autoproxy></aop:aspectj-autoproxy>
```

6. 测试代码

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class AopTest {
    @Autowired
    private TargetInterface target;
    @Test
    public void test1(){
        target.method();
    }
}
```

### 注解配置 AOP 详解

#### 1. 注解通知的类型

通知的配置语法：`@通知注解(“切点表达式")`

|     名称     |       注解        |                             说明                             |
| :----------: | :---------------: | :----------------------------------------------------------: |
|   前置通知   |     `@Before`     |     用于配置前置通知。指定增强的方法在切入点方法之前执行     |
|   后置通知   | `@AfterReturning` |     用于配置后置通知。指定增强的方法在切入点方法之后执行     |
|   环绕通知   |     `@Around`     | 用于配置环绕通知。指定增强的方法在切入点方法之前和之后都执行 |
| 异常抛出通知 | `@AfterThrowing`  |     用于配置异常抛出通知。指定增强的方法在出现异常时执行     |
|   最终通知   |     `@After`      |     用于配置最终通知。无论增强方式执行是否有异常都会执行     |

#### 2. 切点表达式的抽取

同 xml 配置 aop 一样，我们可以将切点表达式抽取。抽取方式是在切面内定义方法，在该方法上使用`@Pointcut`注解定义切点表达式，然后在在增强注解中进行引用。具体如下：

```java
@@Component("myAspect")
@Aspect
public class MyAspect {
    @Before("MyAspect.myPoint()")
    public void before(){
        System.out.println("前置代码增强.....");
    }
    @Pointcut("execution(* com.itheima.aop.*.*(..))")
    public void myPoint(){}
}
```

### 知识要点

- 注解aop开发步骤
    1. 使用`@Aspect`标注切面类
    1. 使用`@通知注解`标注通知方法
    1. 在配置文件中配置aop自动代理`<aop:aspectj-autoproxy/>`
- 通知注解类型

# 声明式事务控制

## 编程式事务控制相关对象

### PlatformTransactionManager 

`PlatformTransactionManager` 接口是 spring 的事务管理器，它里面提供了我们常用的操作事务的方法。

|                                 方法                                 |        说明        |
| :------------------------------------------------------------------: | :----------------: |
| `TransactionStatus getTransaction(TransactionDefination defination)` | 获取事务的状态信息 |
|               `void commit(TransactionStatus status)`                |      提交事务      |
|              `void rollback(TransactionStatus status)`               |      回滚事务      |

**注意**：

PlatformTransactionManager 是接口类型，不同的 Dao 层技术则有不同的实现类，例如：<br/>Dao 层技术是 jdbc 或 mybatis 时：`org.springframework.jdbc.datasource.DataSourceTransactionManager`；<br/>Dao 层技术是 hibernate 时：`org.springframework.orm.hibernate5.HibernateTransactionManager`

### TransactionDefinition

`TransactionDefinition` 是事务的定义信息对象，里面有如下方法：

|              方法              |        说明        |
| :----------------------------: | :----------------: |
|   `int getIsolationLevel()`    | 获得事务的隔离级别 |
| `int getPropogationBehavior()` | 获得事务的传播行为 |
|       `int getTimeout()`       |    获得超时时间    |
|     `boolean isReadOnly()`     |      是否只读      |

#### 1. 事务隔离级别

设置隔离级别，可以解决事务并发产生的问题，如脏读、不可重复读和虚读。
- ISOLATION_DEFAULT
- ISOLATION_READ_UNCOMMITTED
- ISOLATION_READ_COMMITTED
- ISOLATION_REPEATABLE_READ
- ISOLATION_SERIALIZABLE

#### 2. 事务传播行为

- ==REQUIRED：如果当前没有事务，就新建一个事务，如果已经存在一个事务中，加入到这个事务中。一般的选择（默认值）==
- ==SUPPORTS：支持当前事务，如果当前没有事务，就以非事务方式执行（没有事务）==
- MANDATORY：使用当前的事务，如果当前没有事务，就抛出异常
- REQUERS_NEW：新建事务，如果当前在事务中，把当前事务挂起。
- NOT_SUPPORTED：以非事务方式执行操作，如果当前存在事务，就把当前事务挂起
- NEVER：以非事务方式运行，如果当前存在事务，抛出异常
- NESTED：如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行 REQUIRED 类似的操作
- 超时时间：默认值是-1，没有超时限制。如果有，以秒为单位进行设置
- 是否只读：建议查询时设置为只读

### TransactionStatus

TransactionStatus 接口提供的是事务具体的运行状态，方法介绍如下。

|             方法             |      说明      |
| :--------------------------: | :------------: |
|   `boolean hasSavepoint()`   | 是否存储回滚点 |
|   `boolean isCompleted()`    |  事务是否完成  |
| `boolean isNewTransaction()` |  是否是新事务  |
|  `boolean isRollbackOnly()`  |  事务是否回滚  |

### 知识要点

#### 编程式事务控制三大对象

- `PlatformTransactionManager`
- `TransactionDefinition`
- `TransactionStatus`

## 基于 XML 的声明式事务控制

### 什么是声明式事务控制

Spring 的声明式事务顾名思义就是==采用声明的方式来处理事务==。这里所说的声明，就是指在配置文件中声明，用在 Spring 配置文件中声明式的处理事务来代替代码式的处理事务。

#### 声明式事务处理的作用

- 事务管理不侵入开发的组件。具体来说，业务逻辑对象就不会意识到正在事务管理之中，事实上也应该如此，因为事务管理是属于系统层面的服务，而不是业务逻辑的一部分，如果想要改变事务管理策划的话，也只需要在定义文件中重新配置即可。
- 在不需要事务管理的时候，只要在设定文件上修改一下，即可移去事务管理服务，无需改变代码重新编译，这样维护起来极其方便。

==注意：Spring 声明式事务控制底层就是AOP==。

### 声明式事务控制的实现

声明式事务控制明确事项：
- 谁是切点？
- 谁是通知？
- 配置切面？

---

1. 引入tx命名空间

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:aop="http://www.springframework.org/schema/aop"
    xmlns:tx="http://www.springframework.org/schema/tx"
    xsi:schemaLocation="
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop.xsd
        http://www.springframework.org/schema/tx 
        http://www.springframework.org/schema/tx/spring-tx.xsd
        http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
">
```

2. 配置事务增强

```xml
<!--平台事务管理器-->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"></property>
</bean>
<!--事务增强配置-->
<tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
        <tx:method name="*"/>
    </tx:attributes>
</tx:advice>
```

3. 配置事务 AOP 织入

```xml
<!--事务的aop增强-->
<aop:config>
    <aop:pointcut id="myPointcut" expression="execution(* com.itheima.service.impl.*.*(..))"/>
    <aop:advisor advice-ref="txAdvice" pointcut-ref="myPointcut"></aop:advisor>
</aop:config>
```

4. 测试事务控制转账业务代码

```java
@Override
public void transfer(String outMan, String inMan, double money) {
    accountDao.out(outMan,money);
    int i = 1/0;
    accountDao.in(inMan,money);
}
```

### 切点方法的事务参数的配置

```xml
<!--事务增强配置-->
<tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
        <tx:method name="*"/>
    </tx:attributes>
</tx:advice>
```

其中，`<tx:method>` 代表切点方法的事务参数的配置，例如：
`<tx:method name="transfer" isolation="REPEATABLE_READ" propagation="REQUIRED" timeout="-1" read-only="false"/>`

- name：切点方法名称
- isolation:事务的隔离级别
- propogation：事务的传播行为
- timeout：超时时间
- read-only：是否只读

### 知识要点

#### 声明式事务控制的配置要点

- 平台事务管理器配置
- 事务通知的配置
- 事务aop织入的配置

## 基于注解的声明式事务控制

### 使用注解配置声明式事务控制

1. 编写 AccoutDao

```java
@Repository("accountDao")
public class AccountDaoImpl implements AccountDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public void out(String outMan, double money) {
        jdbcTemplate.update("update account set money=money-? where name=?",money,outMan);
    }
    public void in(String inMan, double money) {
        jdbcTemplate.update("update account set money=money+? where name=?",money,inMan);
    }
}
```

2. 编写 AccoutService

```java
@Service("accountService")
@Transactional
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    @Transactional(isolation = Isolation.READ_COMMITTED,propagation = Propagation.REQUIRED)
    public void transfer(String outMan, String inMan, double money) {
        accountDao.out(outMan,money);
        int i = 1/0;
        accountDao.in(inMan,money);
    }
}
```

3. 编写 applicationContext.xml 配置文件

```xml
<!--之前省略datsSource、jdbcTemplate、平台事务管理器的配置-->
<!--组件扫描-->
<context:component-scan base-package="com.itheima"/>
<!--事务的注解驱动-->
<tx:annotation-driven/>
```

### 注解配置声明式事务控制解析

1. 使用 `@Transactional` 在需要进行事务控制的类或是方法上修饰，注解可用的属性同 xml 配置方式，例如隔离级别、传播行为等。
1. 注解使用在类上，那么该类下的所有方法都使用同一套注解参数配置。
1. 使用在方法上，不同的方法可以采用不同的事务参数配置。
1. Xml配置文件中要开启事务的注解驱动`<tx:annotation-driven />`

### 知识要点

#### 注解声明式事务控制的配置要点
- 平台事务管理器配置（xml方式）
- 事务通知的配置（`@Transactional`注解配置）
- 事务注解驱动的配置 `<tx:annotation-driven/>`

# MyBatis入门操作

## MyBatis的简介

### 原始jdbc操作（查询数据）

![](https://i0.hdslb.com/bfs/album/6b67bd2d61389107362b026c7207325f8af3f16d.png)

### 原始jdbc操作（插入数据）

![](https://i0.hdslb.com/bfs/album/7fe81b90e0f5bc437aefe7bcaf16db5b05abad3c.png)

### 原始jdbc操作的分析

原始jdbc开发存在的问题如下：
1. 数据库连接创建、释放频繁造成系统资源浪费从而影响系统性能
1. sql 语句在代码中硬编码，造成代码不易维护，实际应用 sql 变化的可能较大，sql 变动需要改变java代码。
1. 查询操作时，需要手动将结果集中的数据手动封装到实体中。插入操作时，需要手动将实体的数据设置到sql语句的占位符位置

应对上述问题给出的解决方案：
1. 使用数据库连接池初始化连接资源
1. 将sql语句抽取到xml配置文件中
1. 使用反射、内省等底层技术，自动将实体与表进行属性与字段的自动映射

### 什么是Mybatis

- mybatis 是一个优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。
- mybatis通过xml或注解的方式将要执行的各种 statement配置起来，并通过java对象和statement中sql的动态参数进行映射生成最终执行的sql语句。
- 最后mybatis框架执行sql并将结果映射为java对象并返回。采用ORM思想解决了实体和数据库映射的问题，对jdbc 进行了封装，屏蔽了jdbc api 底层访问细节，使我们不用与jdbc api打交道，就可以完成对数据库的持久化操作。

## MyBatis的快速入门

### MyBatis开发步骤

MyBatis官网地址：[http://www.mybatis.org/mybatis-3/](http://www.mybatis.org/mybatis-3/)

MyBatis开发步骤：
1. 添加MyBatis的坐标
1. 创建user数据表
1. 编写User实体类
1. 编写映射文件`UserMapper.xml`
1. 编写核心文件`SqlMapConfig.xml`
1. 编写测试类

### 环境搭建

1. 导入MyBatis的坐标和其他相关坐标

```xml
<!--mybatis坐标-->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.5</version>
</dependency>
<!--mysql驱动坐标-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.6</version>
    <scope>runtime</scope>
</dependency>
<!--单元测试坐标-->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
<!--日志坐标-->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.12</version>
</dependency>
```

2. 创建user数据表

![](images/%E5%88%9B%E5%BB%BAuser%E6%95%B0%E6%8D%AE%E8%A1%A8.png)

3. 编写User实体

```java
public class User {
    private int id;
    private String username;
    private String password;
    //省略get个set方法
}
```

4. 编写UserMapper映射文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="userMapper">
    <select id="findAll" resultType="com.itheima.domain.User">
        select * from User
    </select>
</mapper>
```

5. 编写MyBatis核心文件

```xml
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN“ "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!-- 数据源环境 -->
    <environments default="development">
        <environment id="development">
            <transactionManagertype="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.jdbc.Driver"/><property name="url" value="jdbc:mysql:///test"/>
                <property name="username" value="root"/><property name="password" value="root"/>
            </dataSource>
        </environment>
    </environments>

    <!-- 加载映射文件 -->
    <mappers> 
        <mapper resource="com/itheima/mapper/UserMapper.xml"/> 
    </mappers>
</configuration>
```

### 编写测试代码

```java
//加载核心配置文件
InputStream resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
//获得sqlSession工厂对象
SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
//获得sqlSession对象
SqlSession sqlSession = sqlSessionFactory.openSession();
//执行sql语句
List<User> userList = sqlSession.selectList("userMapper.findAll");
//打印结果
System.out.println(userList);
//释放资源
sqlSession.close();
```

### 知识小结

#### MyBatis开发步骤：
1. 添加MyBatis的坐标
1. 创建user数据表
1. 编写User实体类
1. 编写映射文件UserMapper.xml
1. 编写核心文件SqlMapConfig.xml
1. 编写测试类

## MyBatis的映射文件概述

![](https://i0.hdslb.com/bfs/album/06bfc7edd6ef510cd1dcb8608996b04b16841dbc.png)

## MyBatis的增删改查操作

### MyBatis的插入数据操作

1. 编写UserMapper映射文件

```xml
<mapper namespace="userMapper">
    <insert id="add" parameterType="com.itheima.domain.User">
        insert into user values(#{id},#{username},#{password})
    </insert>
</mapper>
```

2. 编写插入实体User的代码

```java
InputStream resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
SqlSession sqlSession = sqlSessionFactory.openSession();
int insert = sqlSession.insert("userMapper.add", user);
System.out.println(insert);
//提交事务
sqlSession.commit();
sqlSession.close();
```

3. 插入操作注意问题
   - 插入语句使用insert标签
   - 在映射文件中使用parameterType属性指定要插入的数据类型
   - Sql语句中使用#{实体属性名}方式引用实体中的属性值
   - 插入操作使用的API是`sqlSession.insert(“命名空间.id”,实体对象);`
   - 插入操作涉及数据库数据变化，所以要使用sqlSession对象显示的提交事务，即`sqlSession.commit()` 

### MyBatis的修改数据操作

1. 编写UserMapper映射文件

```xml
<mapper namespace="userMapper">
    <update id="update" parameterType="com.itheima.domain.User">
        update user set username=#{username},password=#{password} where id=#{id}
    </update>
</mapper>
```

2. 编写修改实体User的代码

```java
InputStream resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
SqlSession sqlSession = sqlSessionFactory.openSession();
int update = sqlSession.update("userMapper.update", user);
System.out.println(update);
sqlSession.commit();
sqlSession.close();
```

3. 修改操作注意问题
   - 修改语句使用update标签
   - 修改操作使用的API是`sqlSession.update(“命名空间.id”,实体对象);`

### MyBatis的删除数据操作

1. 编写UserMapper映射文件

```xml
<mapper namespace="userMapper">
    <delete id="delete" parameterType="java.lang.Integer">
        delete from user where id=#{id}
    </delete>
</mapper>
```

2. 编写删除数据的代码

```java
InputStream resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
SqlSession sqlSession = sqlSessionFactory.openSession();
int delete = sqlSession.delete("userMapper.delete",3);
System.out.println(delete);
sqlSession.commit();
sqlSession.close();
```

3. 删除操作注意问题
   - 删除语句使用delete标签
   - Sql语句中使用#{任意字符串}方式引用传递的单个参数
   - 删除操作使用的API是`sqlSession.delete(“命名空间.id”,Object);`

### 知识小结

#### 增删改查映射配置与API

- 查询数据：`List<User> userList = sqlSession.selectList("userMapper.findAll");`
```xml
<select id="findAll" resultType="com.itheima.domain.User">
    select * from User
</select>
```
- 添加数据：`sqlSession.insert("userMapper.add", user);`
```xml
<insert id="add" parameterType="com.itheima.domain.User">
    insert into user values(#{id},#{username},#{password})
</insert>
```
- 修改数据：`sqlSession.update("userMapper.update", user);`
```xml
<update id="update" parameterType="com.itheima.domain.User">
    update user set username=#{username},password=#{password} where id=#{id}
</update>
```
- 删除数据：`sqlSession.delete("userMapper.delete",3);`
```xml
<delete id="delete" parameterType="java.lang.Integer">
    delete from user where id=#{id}
</delete>
```

## MyBatis的核心配置文件概述

### MyBatis核心配置文件层级关系

![](https://i0.hdslb.com/bfs/album/b86dd177c35c57a5bb102d3d615d50d0ef3c29ab.png)

### MyBatis常用配置解析

#### 1. environments标签

数据库环境的配置，支持多环境配置

![](https://i0.hdslb.com/bfs/album/dc539c8d6ad58ba8e8f76955a444ecde05094e21.png)

其中，事务管理器（transactionManager）类型有两种：
- JDBC：这个配置就是直接使用了JDBC 的提交和回滚设置，它依赖于从数据源得到的连接来管理事务作用域。
- MANAGED：这个配置几乎没做什么。它从来不提交或回滚一个连接，而是让容器来管理事务的整个生命周期（比如JEE 应用服务器的上下文）。 默认情况下它会关闭连接，然而一些容器并不希望这样，因此需要将 closeConnection 属性设置为 false 来阻止它默认的关闭行为。

其中，数据源（dataSource）类型有三种：
- UNPOOLED：这个数据源的实现只是每次被请求时打开和关闭连接。
- POOLED：这种数据源的实现利用“池”的概念将 JDBC 连接对象组织起来。
- JNDI：这个数据源的实现是为了能在如 EJB 或应用服务器这类容器中使用，容器可以集中或在外部配置数据源，然后放置一个 JNDI 上下文的引用。

#### 2. mapper标签

该标签的作用是加载映射的，加载方式有如下几种：
- 使用相对于类路径的资源引用，例如：`<mapper resource="org/mybatis/builder/AuthorMapper.xml"/>`
- 使用完全限定资源定位符（URL），例如：`<mapper url="file:///var/mappers/AuthorMapper.xml"/>`
- 使用映射器接口实现类的完全限定类名，例如：`<mapper class="org.mybatis.builder.AuthorMapper"/>`
- 将包内的映射器接口实现全部注册为映射器，例如：`<package name="org.mybatis.builder"/>`

#### 3. Properties标签

实际开发中，习惯将数据源的配置信息单独抽取成一个properties文件，该标签可以加载额外配置的properties文件

![](https://i0.hdslb.com/bfs/album/5e241a40b8afbce06f1981eb55735099bffea704.png)

#### 4. typeAliases标签

类型别名是为Java 类型设置一个短的名字。原来的类型名称配置如下

![](https://i0.hdslb.com/bfs/album/dc824ea9cd5aed2424bc16a8d2070381cff06ac7.png)

配置typeAliases，为com.itheima.domain.User定义别名为user

![](https://i0.hdslb.com/bfs/album/44df0b9d1f43969d25db4d424120a641e2f0acaf.png)

上面我们是自定义的别名，mybatis框架已经为我们设置好的一些常用的类型的别名

|  别名   | 数据类型 |
| :-----: | :------: |
| string  |  String  |
|  long   |   Long   |
|   int   | Integer  |
| double  |  Double  |
| boolean | Boolean  |
| ......  |  ......  |

### 知识小结

#### 核心配置文件常用配置：

1. properties标签：该标签可以加载外部的properties文件

```xml
<properties resource="jdbc.properties"></properties>
```

2. typeAliases标签：设置类型别名

```xml
<typeAlias type="com.itheima.domain.User" alias="user"></typeAlias>
```

3. mappers标签：加载映射配置

```xml
<mapper resource="com/itheima/mapper/UserMapper.xml"></mapper>
```

4. environments标签：数据源环境配置标签

```xml
<environments default="development">
    <environment id="development">
        <transactionManager type="JDBC"/>
        <dataSource type="POOLED">
            <property name="driver" value="${jdbc.driver}"/>
            <property name="url" value="${jdbc.url}"/>
            <property name="username" value="${jdbc.username}"/>
            <property name="password" value="${jdbc.password}"/>
        </dataSource>
    </environment>
</environments>
```

## MyBatis的相应API

### SqlSession工厂构建器SqlSessionFactoryBuilder

常用API：SqlSessionFactory build(InputStream inputStream)

通过加载mybatis的核心文件的输入流的形式构建一个SqlSessionFactory对象

```java
String resource = "org/mybatis/builder/mybatis-config.xml";
InputStream inputStream = Resources.getResourceAsStream(resource);
SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
SqlSessionFactory factory = builder.build(inputStream);
```

其中， Resources 工具类，这个类在 `org.apache.ibatis.io` 包中。Resources 类帮助你从类路径下、文件系统或一个 web URL 中加载资源文件。

### SqlSession工厂对象SqlSessionFactory

SqlSessionFactory 有多个个方法创建 SqlSession 实例。常用的有如下两个：

|              方法               |                                                  解释                                                  |
| :-----------------------------: | :----------------------------------------------------------------------------------------------------: |
|          openSession()          | 会默认开启一个事务，但事务不会自动提交，也就意味着需要手动提交该事务，更新操作数据才会持久化到数据库中 |
| openSession(boolean autoCommit) |                       参数为是否自动提交，如果设置为true，那么不需要手动提交事务                       |

### SqlSession会话对象

SqlSession 实例在 MyBatis 中是非常强大的一个类。在这里你会看到所有执行语句、提交或回滚事务和获取映射器实例的方法。

执行语句的方法主要有：

```java
<T> T selectOne(String statement, Object parameter) 
<E> List<E> selectList(String statement, Object parameter) 
int insert(String statement, Object parameter) 
int update(String statement, Object parameter) 
int delete(String statement, Object parameter)
```

操作事务的方法主要有：

```java
void commit()
void rollback()
```

# MyBatis的Dao层实现方式

## MyBatis的Dao层实现

### 传统开发方式

1. 编写UserDao接口

```java
public interface UserDao {
    List<User> findAll() throws IOException;
}
```

2. 编写UserDaoImpl实现

```java
public class UserDaoImpl implements UserDao {
    public List<User> findAll() throws IOException {
        InputStream resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        SqlSession sqlSession = sqlSessionFactory.openSession();
        List<User> userList = sqlSession.selectList("userMapper.findAll");
        sqlSession.close();
        return userList;
    }
}
```

3. 测试传统方式

```java
@Test
public void testTraditionDao() throws IOException {
    UserDao userDao = new UserDaoImpl();
    List<User> all = userDao.findAll();
    System.out.println(all);
}
```

### 代理开发方式

#### 1. 代理开发方式介绍

采用 Mybatis 的代理开发方式实现 DAO 层的开发，这种方式是我们后面进入企业的主流。

Mapper 接口开发方法只需要程序员编写Mapper 接口（相当于Dao 接口），由Mybatis 框架根据接口定义创建接口的动态代理对象，代理对象的方法体同上边Dao接口实现类方法。

Mapper 接口开发需要遵循以下规范：
1. Mapper.xml文件中的namespace与mapper接口的全限定名相同
2. Mapper接口方法名和Mapper.xml中定义的每个statement的id相同
3. Mapper接口方法的输入参数类型和mapper.xml中定义的每个sql的parameterType的类型相同
4. Mapper接口方法的输出参数类型和mapper.xml中定义的每个sql的resultType的类型相同

#### 2. 编写UserMapper接口

![](https://i0.hdslb.com/bfs/album/1665c3047d9a2482e56b4c4424096d56a40ea86b.png)

#### 3. 测试代理方式

```java
@Test
public void testProxyDao() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //获得MyBatis框架生成的UserMapper接口的实现类
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
    User user = userMapper.findById(1);
    System.out.println(user);
    sqlSession.close();
}
```

### 知识小结

#### MyBatis的Dao层实现的两种方式

- 手动对Dao进行实现：传统开发方式
- 代理方式对Dao进行实现：

```java
UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
```

![](https://i0.hdslb.com/bfs/album/1665c3047d9a2482e56b4c4424096d56a40ea86b.png)

# MyBatis映射文件深入

## MyBatis映射文件深入

### 动态sql语句

#### 1. 动态sql语句概述

Mybatis 的映射文件中，前面我们的 SQL 都是比较简单的，有些时候业务逻辑复杂时，我们的 SQL是动态变化的，
此时在前面的学习中我们的 SQL 就不能满足要求了。

#### 2. 动态 SQL 之 \<if> 

我们根据实体类的不同取值，使用不同的 SQL语句来进行查询。比如在 id如果不为空时可以根据id查询，如果
username 不同空时还要加入用户名作为条件。这种情况在我们的多条件组合查询中经常会碰到。

```xml
<select id="findByCondition" parameterType="user" resultType="user">
    select * from User
    <where>
        <if test="id!=0">
            and id=#{id}
        </if>
        <if test="username!=null">
            and username=#{username}
        </if>
        <if test="password!=null">
            and password=#{password}
        </if>
    </where>
</select>
```

当查询条件id和username都存在时，控制台打印的sql语句如下：

```java
//获得MyBatis框架生成的UserMapper接口的实现类
UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
User condition = new User();
condition.setId(1);
condition.setUsername("lucy");
User user = userMapper.findByCondition(condition);
```

![](https://i0.hdslb.com/bfs/album/bf54d1d3c6d418f186c56b0bd239c8741472dcb8.png)

当查询条件只有id存在时，控制台打印的sql语句如下：

```java
//获得MyBatis框架生成的UserMapper接口的实现类
UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
User condition = new User();
condition.setId(1);
User user = userMapper.findByCondition(condition);
```

![](https://i0.hdslb.com/bfs/album/42e1221e7832a676618cfb7261b3df5ce5eb4bf6.png)

#### 3. 动态 SQL 之 \<foreach>

循环执行sql的拼接操作，例如：`SELECT * FROM USER WHERE id IN (1,2,5)`。

```xml
<select id="findByIds" parameterType="list" resultType="user">
    select * from User
    <where>
        <foreach collection="list" open="id in(" close=")" item="id" separator=",">
            #{id}
        </foreach>
    </where>
</select>
```

测试代码片段如下：

```java
//获得MyBatis框架生成的UserMapper接口的实现类
UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
int[] ids = new int[]{2,5};
List<User> userList = userMapper.findByIds(ids);
System.out.println(userList);
```

![](https://i0.hdslb.com/bfs/album/df2c339124686fa62f2fdf9e5215d8e7e062f3b3.png)

foreach标签的属性含义如下：

\<foreach>标签用于遍历集合，它的属性：
- `collection`：代表要遍历的集合元素，注意编写时不要写#{}
- `open`：代表语句的开始部分
- `close`：代表结束部分
- `item`：代表遍历集合的每个元素，生成的变量名
- `sperator`：代表分隔符

### SQL片段抽取

Sql 中可将重复的 sql 提取出来，使用时用 include 引用即可，最终达到 sql 重用的目的

```xml
<!--抽取sql片段简化编写-->
<sql id="selectUser"> select * from User </sql>
<select id="findById" parameterType="int" resultType="user">
    <include refid="selectUser"></include> where id=#{id}
</select>
<select id="findByIds" parameterType="list" resultType="user">
    <include refid="selectUser"></include>
    <where>
        <foreach collection="array" open="id in(" close=")" item="id" separator=",">
            #{id}
        </foreach>
    </where>
</select>
```

### 知识小结

#### MyBatis映射文件配置
- `<select>`：查询
- `<insert>`：插入
- `<update>`：修改
- `<delete>`：删除
- `<where>`：where条件
- `<if>`：if判断
- `<foreach>`：循环
- `<sql>`：sql片段抽取

# MyBatis核心配置文件深入

## MyBatis核心配置文件深入

### typeHandlers标签

无论是 MyBatis 在预处理语句（PreparedStatement）中设置一个参数时，还是从结果集中取出一个值时， 都会用类型处理器将获取的值以合适的方式转换成 Java 类型。下表描述了一些默认的类型处理器（截取部分）。

|      类型处理器      |            Java类型            |                JDBC类型                |
| :------------------: | :----------------------------: | :------------------------------------: |
| `BooleanTypeHandler` | `java.lang.Boolean`, `boolean` |         数据库兼容的`BOOLEAN`          |
|  `ByteTypeHandler`   |    `java.lang.Byte`, `byte`    |     数据库兼容的`NUMERIC`或`BYTE`      |
|  `ShortTypeHandler`  |   `java.lang.Short`, `short`   | 数据库兼容的`NUMERIC`或`SHORT INTEGER` |
| `IntegerTypeHandler` |   `java.lang.Integer`, `int`   |    数据库兼容的`NUMERIC`或`INTEGER`    |
|  `LongTypeHandler`   |    `java.lang.Long`, `long`    | 数据库兼容的`NUMERIC`或`LONG INTEGER`  |

你可以重写类型处理器或创建你自己的类型处理器来处理不支持的或非标准的类型。具体做法为：实现`org.apache.ibatis.type.TypeHandler` 接口， 或继承一个很便利的类 `org.apache.ibatis.type.BaseTypeHandler`， 然后可以选择性地将它映射到一个JDBC类型。例如需求：一个Java中的Date数据类型，我想将之存到数据库的时候存成一个1970年至今的毫秒数，取出来时转换成java的Date，即java的Date与数据库的varchar毫秒值之间转换。

开发步骤：
1. 定义转换类继承类`BaseTypeHandler<T>`
1. 覆盖4个未实现的方法，其中`setNonNullParameter`为java程序设置数据到数据库的回调方法，`getNullableResult`为查询时 mysql 的字符串类型转换成 java 的Type类型的方法
1. 在MyBatis核心配置文件中进行注册
1. 测试转换是否正确

```java
public class MyDateTypeHandler extends BaseTypeHandler<Date> {
    public void setNonNullParameter(PreparedStatement preparedStatement, int i, Date date, JdbcType type) {
        preparedStatement.setString(i,date.getTime()+"");
    }
    public Date getNullableResult(ResultSet resultSet, String s) throws SQLException {
        return new Date(resultSet.getLong(s));
    }
    public Date getNullableResult(ResultSet resultSet, int i) throws SQLException {
        return new Date(resultSet.getLong(i));
    }
    public Date getNullableResult(CallableStatement callableStatement, int i) throws SQLException {
        return callableStatement.getDate(i);
    }
}
```

```xml
<!--注册类型自定义转换器-->
<typeHandlers>
    <typeHandler handler="com.itheima.typeHandlers.MyDateTypeHandler"></typeHandler>
</typeHandlers>
```

测试添加操作：

```java
user.setBirthday(new Date());
userMapper.add2(user);
```

![](https://i0.hdslb.com/bfs/album/04f407e4c31adcb43c46a3c03551986a6b2d011b.png)

测试查询操作：

![](https://i0.hdslb.com/bfs/album/1881e6efd4c7234930291a4134c8b7c590557adc.png)

### plugins标签

MyBatis可以使用第三方的插件来对功能进行扩展，分页助手PageHelper是将分页的复杂操作进行封装，使用简单的方式即可获得分页的相关数据

开发步骤：
1. 导入通用PageHelper的坐标
1. 在mybatis核心配置文件中配置PageHelper插件
1. 测试分页数据获取

---

1. 导入通用PageHelper坐标

```xml
<!-- 分页助手 -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>3.7.5</version>
</dependency>
<dependency>
    <groupId>com.github.jsqlparser</groupId>
    <artifactId>jsqlparser</artifactId>
    <version>0.9.1</version>
</dependency>
```

2. 在mybatis核心配置文件中配置PageHelper插件

```xml
<!-- 注意：分页助手的插件 配置在通用馆mapper之前 -->
<plugin interceptor="com.github.pagehelper.PageHelper">
    <!-- 指定方言 -->
    <property name="dialect" value="mysql"/>
</plugin>
```

3. 测试分页代码实现

```java
@Test
public void testPageHelper(){
    //设置分页参数
    PageHelper.startPage(1,2);
    
    List<User> select = userMapper2.select(null);
    for(User user : select){
        System.out.println(user);
    }
}
```

4. 获得分页相关的其他参数

```java
//其他分页的数据
PageInfo<User> pageInfo = new PageInfo<User>(select);
System.out.println("总条数：" + pageInfo.getTotal());
System.out.println("总页数：" + pageInfo.getPages());
System.out.println("当前页：" + pageInfo.getPageNum());
System.out.println("每页显示长度：" + pageInfo.getPageSize());
System.out.println("是否第一页：" + pageInfo.isIsFirstPage());
System.out.println("是否最后一页：" + pageInfo.isIsLastPage());
```

### 知识小结

#### MyBatis核心配置文件常用标签
1. `properties`标签：该标签可以加载外部的properties文件
2. `typeAliases`标签：设置类型别名
3. `environments`标签：数据源环境配置标签
4. `typeHandlers`标签：配置自定义类型处理器
5. `plugins`标签：配置MyBatis的插件

# MyBatis的多表操作

## MyBatis的多表操作

### 一对一查询

#### 1. 一对一查询的模型

用户表和订单表的关系为，一个用户有多个订单，一个订单只从属于一个用户

一对一查询的需求：查询一个订单，与此同时查询出该订单所属的用户

![](https://i0.hdslb.com/bfs/album/9c41264deb69fa3835605b641954c16fcdd05146.png)

#### 2. 一对一查询的语句

对应的sql语句：`select * from orders o,user u where o.uid=u.id;`

查询的结果如下：

![](https://i0.hdslb.com/bfs/album/461d3b9f872d1d3bdbd2da4071e256f747b4092c.png)

#### 3. 创建Order和User实体

![](https://i0.hdslb.com/bfs/album/95d4890088dbdd179709c4750d6152e8933f2d4c.png)

#### 创建OrderMapper接口

```java
public interface OrderMapper {
    List<Order> findAll();
}
```

#### 5. 配置OrderMapper.xml

```xml
<mapper namespace="com.itheima.mapper.OrderMapper">
    <resultMap id="orderMap" type="com.itheima.domain.Order">
        <result column="uid" property="user.id"></result>
        <result column="username" property="user.username"></result>
        <result column="password" property="user.password"></result>
        <result column="birthday" property="user.birthday"></result>
    </resultMap>
    <select id="findAll" resultMap="orderMap">
        select * from orders o,user u where o.uid=u.id
    </select>
</mapper>
```

其中`<resultMap>`还可以配置如下：

```xml
<resultMap id="orderMap" type="com.itheima.domain.Order">
    <result property="id" column="id"></result>
    <result property="ordertime" column="ordertime"></result>
    <result property="total" column="total"></result>
    <association property="user" javaType="com.itheima.domain.User">
        <result column="uid" property="id"></result>
        <result column="username" property="username"></result>
        <result column="password" property="password"></result>
        <result column="birthday" property="birthday"></result>
    </association>
</resultMap>
```

#### 6. 测试结果

```java
OrderMapper mapper = sqlSession.getMapper(OrderMapper.class);
List<Order> all = mapper.findAll();
for(Order order : all){
    System.out.println(order);
}
```

![](https://i0.hdslb.com/bfs/album/29e5a0c0f588a9e22a36e0fa153310b0344ecf78.png)

### 一对多查询

#### 1. 一对多查询的模型

用户表和订单表的关系为，一个用户有多个订单，一个订单只从属于一个用户

一对多查询的需求：查询一个用户，与此同时查询出该用户具有的订单

![](https://i0.hdslb.com/bfs/album/c4ee9fbb34c7b334ada6d7004dd760371432e801.png)

#### 2. 一对多查询的语句

对应的sql语句：`select *,o.id oid from user u left join orders o on u.id=o.uid;`

查询的结果如下：

![](https://i0.hdslb.com/bfs/album/8028af7ae39627854be6f1e7a4e594b630a2dde1.png)

#### 3. 修改User实体

![](https://i0.hdslb.com/bfs/album/9f8af88ab111761a05ee966aebf2677aca513a47.png)

#### 4. 创建UserMapper接口

```java
public interface UserMapper {
    List<User> findAll();
}
```

#### 5. 配置UserMapper.xml

```xml
<mapper namespace="com.itheima.mapper.UserMapper">
    <resultMap id="userMap" type="com.itheima.domain.User">
        <result column="id" property="id"></result>
        <result column="username" property="username"></result>
        <result column="password" property="password"></result>
        <result column="birthday" property="birthday"></result>
        <collection property="orderList" ofType="com.itheima.domain.Order">
            <result column="oid" property="id"></result>
            <result column="ordertime" property="ordertime"></result>
            <result column="total" property="total"></result>
        </collection>
    </resultMap>
    <select id="findAll" resultMap="userMap">
        select *,o.id oid from user u left join orders o on u.id=o.uid
    </select>
</mapper>
```

#### 6. 测试结果

```java
UserMapper mapper = sqlSession.getMapper(UserMapper.class);
List<User> all = mapper.findAll();
for(User user : all){
    System.out.println(user.getUsername());
    List<Order> orderList = user.getOrderList();
    for(Order order : orderList){
        System.out.println(order);
    }
    System.out.println("----------------------------------");
}
```

![](https://i0.hdslb.com/bfs/album/99abe027ae5773a9d2d7ce1416a5f8a0ca7501e5.png)

### 多对多查询

#### 1. 多对多查询的模型

用户表和角色表的关系为，一个用户有多个角色，一个角色被多个用户使用

多对多查询的需求：查询用户同时查询出该用户的所有角色

![](https://i0.hdslb.com/bfs/album/4eab6fccee38dfe2a7eea1fc618e328e25343bf8.png)

#### 2. 多对多查询的语句

对应的sql语句：`select u.*,r.*,r.id rid from user u left join user_role ur on u.id=ur.user_id inner join role r on ur.role_id=r.id;`

查询的结果如下：

![](https://i0.hdslb.com/bfs/album/24f7d8b28d7529226d67d14ee3d09153fe4ee63f.png)

#### 3. 创建Role实体，修改User实体

![](https://i0.hdslb.com/bfs/album/e3a3423ea5448a599893311ebede1c3935494b79.png)

#### 添加UserMapper接口方法

```java
List<User> findAllUserAndRole();
```

#### 5. 配置UserMapper.xml

```xml
<resultMap id="userRoleMap" type="com.itheima.domain.User">
    <result column="id" property="id"></result>
    <result column="username" property="username"></result>
    <result column="password" property="password"></result>
    <result column="birthday" property="birthday"></result>
    <collection property="roleList" ofType="com.itheima.domain.Role">
        <result column="rid" property="id"></result>
        <result column="rolename" property="rolename"></result>
    </collection>
</resultMap>
<select id="findAllUserAndRole" resultMap="userRoleMap">
    select u.*,r.*,r.id rid from user u left join user_role ur on u.id=ur.user_id inner join role r on ur.role_id=r.id
</select>
```

#### 6. 测试结果

```java
UserMapper mapper = sqlSession.getMapper(UserMapper.class);
List<User> all = mapper.findAllUserAndRole();
for(User user : all){
    System.out.println(user.getUsername());
    List<Role> roleList = user.getRoleList();
    for(Role role : roleList){
        System.out.println(role);
    }
    System.out.println("----------------------------------");
}
```

![](https://i0.hdslb.com/bfs/album/5b468133249f312fc638c48f5a73be8c25838f01.png)

### 知识小结

#### MyBatis多表配置方式：

- 一对一配置：使用`<resultMap>`做配置
- 一对多配置：使用`<resultMap>`+`<collection>`做配置
- 多对多配置：使用`<resultMap>`+`<collection>`做配置

# MyBatis注解开发

## MyBatis的注解开发

### MyBatis的常用注解

这几年来注解开发越来越流行，Mybatis也可以使用注解开发方式，这样我们就可以减少编写Mapper映射文件了。我们先围绕一些基本的CRUD来学习，再学习复杂映射多表操作。

- `@Insert`：实现新增
- `@Update`：实现更新
- `@Delete`：实现删除
- `@Select`：实现查询
- `@Result`：实现结果集封装
- `@Results`：可以与`@Result` 一起使用，封装多个结果集
- `@One`：实现一对一结果集封装
- `@Many`：实现一对多结果集封装

### MyBatis的增删改查

我们完成简单的user表的增删改查的操作

```java
private UserMapper userMapper;

@Before
public void before() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession(true);
    userMapper = sqlSession.getMapper(UserMapper.class);
}
```

```java
@Test
public void testAdd() {
    User user = new User();
    user.setUsername("测试数据");
    user.setPassword("123");
    user.setBirthday(new Date());
    userMapper.add(user);
}
@Test
public void testUpdate() throws IOException {
    User user = new User();
    user.setId(16);
    user.setUsername("测试数据修改");
    user.setPassword("abc");
    user.setBirthday(new Date());
    userMapper.update(user);
}
@Test
public void testDelete() throws IOException {
    userMapper.delete(16);
}
@Test
public void testFindById() throws IOException {
    User user = userMapper.findById(1);
    System.out.println(user);
}
@Test
public void testFindAll() throws IOException {
    List<User> all = userMapper.findAll();
    for(User user : all){
        System.out.println(user);
    }
}
```

修改MyBatis的核心配置文件，我们使用了注解替代的映射文件，所以我们只需要加载使用了注解的Mapper接口即可

```xml
<mappers>
    <!--扫描使用注解的类-->
    <mapper class="com.itheima.mapper.UserMapper"></mapper>
</mappers>
```

或者指定扫描包含映射关系的接口所在的包也可以

```xml
<mappers>
    <!--扫描使用注解的类所在的包-->
    <package name="com.itheima.mapper"></package>
</mappers>
```

### MyBatis的注解实现复杂映射开发

实现复杂关系映射之前我们可以在映射文件中通过配置`<resultMap>`来实现，使用注解开发后，我们可以使用`@Results`注解，`@Result`注解，`@One`注解，`@Many`注解组合完成复杂关系的配置

|        注解        | 说明                                                         |
| :----------------: | :----------------------------------------------------------- |
|     `@Results`     | 代替的是标签`<resultMap>`该注解中可以使用单个`@Result`注解，也可以使用@Result集合。<br>使用格式：`@Results（{@Result（），@Result（）}）`或`@Results（@Result（））` |
|      `@Resut`      | 代替了`<id>`标签和`<result>`标签<br>`@Result`中属性介绍：<br>`column`：数据库的列名<br>`property`：需要装配的属性名<br>`one`：需要使用的`@One` 注解（`@Result（one=@One）（））`）<br>`many`：需要使用的`@Many` 注解（`@Result（many=@many）（））`） |
| `@One` （一对一）  | 代替了`<assocation>` 标签，是多表查询的关键，在注解中用来指定子查询返回单一对象。<br>`@One`注解属性介绍：<br>`select`: 指定用来多表查询的 sqlmapper<br>使用格式：`@Result(column=" ",property="",one=@One(select=""))` |
| `@Many` （多对一） | 代替了`<collection>`标签, 是是多表查询的关键，在注解中用来指定子查询返回对象集合。<br>使用格式：`@Result(property="",column="",many=@Many(select=""))` |

### 一对一查询

#### 1. 一对一查询的模型

用户表和订单表的关系为，一个用户有多个订单，一个订单只从属于一个用户

一对一查询的需求：查询一个订单，与此同时查询出该订单所属的用户

![](https://i0.hdslb.com/bfs/album/4745cdeeddf451a58cdd6da3af0ced44d4a8d88b.png)

#### 2. 一对一查询的语句

对应的sql语句：

```sql
select * from orders;
select * from user where id=查询出订单的uid;
```

查询的结果如下：

![](https://i0.hdslb.com/bfs/album/2f11933435620566803f5c3ba0be3d40100628ee.png)

#### 3. 创建Order和User实体

![](https://i0.hdslb.com/bfs/album/1460d05ad761fd076cfa3c49bfc1446c1291495f.png)

#### 4. 创建OrderMapper接口

```java
public interface OrderMapper {
    List<Order> findAll();
}
```

#### 5. 使用注解配置Mapper

![](https://i0.hdslb.com/bfs/album/ad7e096022f239fbb846ea30943609d4963e1228.png)

#### 6. 测试结果

```java
@Test
public void testSelectOrderAndUser() {
    List<Order> all = orderMapper.findAll();
    for(Order order : all){
        System.out.println(order);
    }
}
```

![](https://i0.hdslb.com/bfs/album/9a442f3824234f1d99ef37ac84e225f4cf596183.png)

### 一对多查询

#### 1. 一对多查询的模型

用户表和订单表的关系为，一个用户有多个订单，一个订单只从属于一个用户

一对多查询的需求：查询一个用户，与此同时查询出该用户具有的订单

![](https://i0.hdslb.com/bfs/album/f385987041ac1a2fe44a14ad40ced9dd96f5497a.png)

#### 2. 一对多查询的语句

对应的sql语句：

```sql
select * from user;
select * from orders where uid=查询出用户的id;
```

查询的结果如下：

![](https://i0.hdslb.com/bfs/album/82beea1f4c80a80d856eafe2f0afb184efccc4cd.png)

#### 3. 修改User实体

![](https://i0.hdslb.com/bfs/album/e9e9bb042df1339b59af0136dd91bbdcb293f4a2.png)

#### 4. 创建UserMapper接口

```java
List<User> findAllUserAndOrder();
```

#### 5. 使用注解配置Mapper

![](https://i0.hdslb.com/bfs/album/298a1900426c7c28c0d341c08a6af7633d2a2d49.png)

#### 6. 测试结果

```java
List<User> all = userMapper.findAllUserAndOrder();
for(User user : all) {
    System.out.println(user.getUsername());
    List<Order> orderList = user.getOrderList();
    for(Order order : orderList){
        System.out.println(order);
    }
    System.out.println("-----------------------------");
}
```

![](https://i0.hdslb.com/bfs/album/402738d4c62f278adc0ab75f5e1a870debec74fe.png)

### 多对多查询

#### 1. 多对多查询的模型

用户表和角色表的关系为，一个用户有多个角色，一个角色被多个用户使用

多对多查询的需求：查询用户同时查询出该用户的所有角色

![](https://i0.hdslb.com/bfs/album/f71c8022499c28902c0ee23c6a7b9e6755d9857e.png)

#### 2. 多对多查询的语句

对应的sql语句：

```sql
select * from user;
select * from role r,user_role ur where r.id=ur.role_id and ur.user_id=用户的id
```

查询的结果如下：

![](https://i0.hdslb.com/bfs/album/f6e39fff1001d03c57d6977d0feeeb3454cce2e1.png)

#### 3. 创建Role实体，修改User实体

![](https://i0.hdslb.com/bfs/album/78b8f72474a3888510fc96820f3cc1ba50460270.png)

#### 4. 添加UserMapper接口方法

```java
List<User> findAllUserAndRole();
```

#### 5. 使用注解配置Mapper

![](https://i0.hdslb.com/bfs/album/a19666abc824d9399f52224b37741e7b93083a70.png)

#### 6. 测试结果

```java
UserMapper mapper = sqlSession.getMapper(UserMapper.class);
List<User> all = mapper.findAllUserAndRole();
for(User user : all){
    System.out.println(user.getUsername());
    List<Role> roleList = user.getRoleList();
    for(Role role : roleList){
        System.out.println(role);
    }
    System.out.println("----------------------------------");
}
```

![](https://i0.hdslb.com/bfs/album/4d15af3d3c3fd88037700dad41437ca0af8bc2d3.png)

# SSM整合

## SSM框架整合

### 原始方式整合

#### 1.准备工作

![](https://i0.hdslb.com/bfs/album/f6e4b7a92f1d83cf27f179dbd7f1cf450aa0cdc4.png)

#### 2.创建Maven工程

![](https://i0.hdslb.com/bfs/album/cea7b367b1d79abcd9a3e46b17ec3f991da461b7.png)

#### 3.导入Maven坐标

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.itheima</groupId>
  <artifactId>itheima_ssm</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>war</packaging>

  <name>itheima_ssm Maven Webapp</name>
  <!-- FIXME change it to the project's website -->
  <url>http://www.example.com</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.7</maven.compiler.source>
    <maven.compiler.target>1.7</maven.compiler.target>
  </properties>

  <dependencies>
    <!--spring相关-->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-context</artifactId>
      <version>5.0.5.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>org.aspectj</groupId>
      <artifactId>aspectjweaver</artifactId>
      <version>1.8.7</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-jdbc</artifactId>
      <version>5.0.5.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-tx</artifactId>
      <version>5.0.5.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-test</artifactId>
      <version>5.0.5.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>5.0.5.RELEASE</version>
    </dependency>

    <!--servlet和jsp-->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>servlet-api</artifactId>
      <version>2.5</version>
    </dependency>
    <dependency>
      <groupId>javax.servlet.jsp</groupId>
      <artifactId>jsp-api</artifactId>
      <version>2.0</version>
    </dependency>

    <!--mybatis相关-->
    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis</artifactId>
      <version>3.4.5</version>
    </dependency>
    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis-spring</artifactId>
      <version>1.3.1</version>
    </dependency>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>5.1.6</version>
    </dependency>
    <dependency>
      <groupId>c3p0</groupId>
      <artifactId>c3p0</artifactId>
      <version>0.9.1.2</version>
    </dependency>

    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
    </dependency>
    <dependency>
      <groupId>jstl</groupId>
      <artifactId>jstl</artifactId>
      <version>1.2</version>
    </dependency>

  </dependencies>

  <build>
    <finalName>itheima_ssm</finalName>
    <pluginManagement><!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) -->
      <plugins>
        <plugin>
          <artifactId>maven-clean-plugin</artifactId>
          <version>3.0.0</version>
        </plugin>
        <!-- see http://maven.apache.org/ref/current/maven-core/default-bindings.html#Plugin_bindings_for_war_packaging -->
        <plugin>
          <artifactId>maven-resources-plugin</artifactId>
          <version>3.0.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-compiler-plugin</artifactId>
          <version>3.7.0</version>
        </plugin>
        <plugin>
          <artifactId>maven-surefire-plugin</artifactId>
          <version>2.20.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-war-plugin</artifactId>
          <version>3.2.0</version>
        </plugin>
        <plugin>
          <artifactId>maven-install-plugin</artifactId>
          <version>2.5.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-deploy-plugin</artifactId>
          <version>2.8.2</version>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>
</project>
```

#### 4.编写实体类

```java
public class Account {
    private int id;
    private String name;
    private double money;
    //省略getter和setter方法
}
```

#### 5.编写Mapper接口

```java
public interface AccountMapper {
    //保存账户数据
    void save(Account account);
    //查询账户数据
    List<Account> findAll();
}
```

#### 6.编写Service接口

```java
public interface AccountService {
    void save(Account account); //保存账户数据
    List<Account> findAll(); //查询账户数据
}
```

#### 7.编写Service接口实现

```java
@Service("accountService")
public class AccountServiceImpl implements AccountService {
    public void save(Account account) {
        SqlSession sqlSession = MyBatisUtils.openSession();
        AccountMapper accountMapper = sqlSession.getMapper(AccountMapper.class);
        accountMapper.save(account);
        sqlSession.commit();
        sqlSession.close();
    }
    public List<Account> findAll() {
        SqlSession sqlSession = MyBatisUtils.openSession();
        AccountMapper accountMapper = sqlSession.getMapper(AccountMapper.class);
        return accountMapper.findAll();
    }
}
```

#### 8.编写Controller

```java
@Controller
public class AccountController {
    @Autowired
    private AccountService accountService;
    @RequestMapping("/save")
    @ResponseBody
    public String save(Account account){
        accountService.save(account);
        return "save success";
    }
    @RequestMapping("/findAll")
    public ModelAndView findAll(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("accountList");
        modelAndView.addObject("accountList",accountService.findAll());
        return modelAndView;
    }
}
```

#### 9.编写添加页面

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>保存账户信息表单</h1>
    <form action="${pageContext.request.contextPath}/save.action" method="post">
        用户名称<input type="text" name="name"><br/>
        账户金额<input type="text" name="money"><br/>
        <input type="submit" value="保存"><br/>
    </form>
</body>
</html>
```

#### 10.编写列表页面

```jsp
<table border="1">
    <tr>
        <th>账户id</th>
        <th>账户名称</th>
        <th>账户金额</th>
    </tr>
    <c:forEach items="${accountList}" var="account">
        <tr>
            <td>${account.id}</td>
            <td>${account.name}</td>
            <td>${account.money}</td>
        </tr>
    </c:forEach>
</table>
```

#### 11.编写相应配置文件(文件参考目录：素材/配置文件)

- Spring配置文件：`applicationContext.xml`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">

    <!--组件扫描 扫描service和mapper-->
    <context:component-scan base-package="com.itheima">
        <!--排除controller的扫描-->
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"></context:exclude-filter>
    </context:component-scan>

    <!--加载propeties文件-->
    <context:property-placeholder location="classpath:jdbc.properties"></context:property-placeholder>

    <!--配置数据源信息-->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"></property>
        <property name="jdbcUrl" value="${jdbc.url}"></property>
        <property name="user" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
    </bean>

    <!--配置sessionFactory-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"></property>
        <!--加载mybatis核心文件-->
        <property name="configLocation" value="classpath:sqlMapConfig-spring.xml"></property>
    </bean>

    <!--扫描mapper所在的包 为mapper创建实现类-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.itheima.mapper"></property>
    </bean>


    <!--声明式事务控制-->
    <!--平台事务管理器-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"></property>
    </bean>

    <!--配置事务增强-->
    <tx:advice id="txAdvice">
        <tx:attributes>
            <tx:method name="*"/>
        </tx:attributes>
    </tx:advice>

    <!--事务的aop织入-->
    <aop:config>
        <aop:advisor advice-ref="txAdvice" pointcut="execution(* com.itheima.service.impl.*.*(..))"></aop:advisor>
    </aop:config>

</beans>
```

- SprngMVC配置文件：`spring-mvc.xml`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/mvc
http://www.springframework.org/schema/mvc/spring-mvc.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">

    <!--组件扫描  主要扫描controller-->
    <context:component-scan base-package="com.itheima.controller"></context:component-scan>
    <!--配置mvc注解驱动-->
    <mvc:annotation-driven></mvc:annotation-driven>
    <!--内部资源视图解析器-->
    <bean id="resourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/pages/"></property>
        <property name="suffix" value=".jsp"></property>
    </bean>
    <!--开发静态资源访问权限-->
    <mvc:default-servlet-handler></mvc:default-servlet-handler>

</beans>
```

- MyBatis映射文件：`AccountMapper.xml`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.AccountMapper">
    <insert id="save" parameterType="account">
        insert into account values(#{id},#{name},#{money})
    </insert>
    <select id="findAll" resultType="account">
        select * from account
    </select>
</mapper>
```

- MyBatis核心文件：`sqlMapConfig.xml`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--加载properties文件-->
    <properties resource="jdbc.properties"></properties>

    <!--定义别名-->
    <typeAliases>
        <!--<typeAlias type="com.itheima.domain.Account" alias="account"></typeAlias>-->
        <package name="com.itheima.domain"></package>
    </typeAliases>

    <!--环境-->
    <environments default="developement">
        <environment id="developement">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"></property>
                <property name="url" value="${jdbc.url}"></property>
                <property name="username" value="${jdbc.username}"></property>
                <property name="password" value="${jdbc.password}"></property>
            </dataSource>
        </environment>
    </environments>

    <!--加载映射-->
    <mappers>
        <!--<mapper resource="com/itheima/mapper/AccountMapper.xml"></mapper>-->
        <package name="com.itheima.mapper"></package>
    </mappers>

</configuration>
```

- 数据库连接信息文件：`jdbc.properties`

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/ssm
jdbc.username=root
jdbc.password=root
```

- Web.xml文件：`web.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://java.sun.com/xml/ns/javaee"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" id="WebApp_ID" version="2.5">

    <!--spring 监听器-->
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:applicationContext.xml</param-value>
    </context-param>
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>

    <!--springmvc的前端控制器-->
    <servlet>
        <servlet-name>DispatcherServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:spring-mvc.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>DispatcherServlet</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

    <!--乱码过滤器-->
    <filter>
        <filter-name>CharacterEncodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>UTF-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>CharacterEncodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

</web-app>
```

- 日志文件：`log4j.properties`

```properties
#
# Hibernate, Relational Persistence for Idiomatic Java
#
# License: GNU Lesser General Public License (LGPL), version 2.1 or later.
# See the lgpl.txt file in the root directory or <http://www.gnu.org/licenses/lgpl-2.1.html>.
#

### direct log messages to stdout ###
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.err
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n

### direct messages to file hibernate.log ###
#log4j.appender.file=org.apache.log4j.FileAppender
#log4j.appender.file.File=hibernate.log
#log4j.appender.file.layout=org.apache.log4j.PatternLayout
#log4j.appender.file.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n

### set log levels - for more verbose logging change 'info' to 'debug' ###

log4j.rootLogger=all, stdout
```

- `sqlMapConfig-spring.xml`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--定义别名-->
    <typeAliases>
        <!--<typeAlias type="com.itheima.domain.Account" alias="account"></typeAlias>-->
        <package name="com.itheima.domain"></package>
    </typeAliases>

</configuration>
```

#### 12.测试添加账户

![](https://i0.hdslb.com/bfs/album/74f8f1977250a190fab90954635a61c162f5e94a.png)

#### 13.测试账户列表

![](https://i0.hdslb.com/bfs/album/49c67f9879a72a5e901c6a36aadaadee41a6480e.png)

### Spring整合MyBatis

#### 1.整合思路

![](https://i0.hdslb.com/bfs/album/c176a6d324c651f4d6e471204e3678f76fec8212.png)

#### 2.将SqlSessionFactory配置到Spring容器中

```xml
<!--加载jdbc.properties-->
<context:property-placeholder location="classpath:jdbc.properties"/>
<!--配置数据源-->
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="${jdbc.driver}"/>
    <property name="jdbcUrl" value="${jdbc.url}"/>
    <property name="user" value="${jdbc.username}"/>
    <property name="password" value="${jdbc.password}"/>
</bean>
<!--配置MyBatis的SqlSessionFactory-->
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource"/>
    <property name="configLocation" value="classpath:sqlMapConfig.xml"/>
</bean>
```

#### 3.扫描Mapper，让Spring容器产生Mapper实现类

```xml
<!--配置Mapper扫描-->
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
    <property name="basePackage" value="com.itheima.mapper"/>
</bean>
```

#### 4.配置声明式事务控制

```xml
<!--配置声明式事务控制-->
<bean id="transacionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>
<tx:advice id="txAdvice" transaction-manager="transacionManager">
    <tx:attributes>
        <tx:method name="*"/>
    </tx:attributes>
</tx:advice>
<aop:config>
    <aop:pointcut id="txPointcut" expression="execution(* com.itheima.service.impl.*.*(..))"/>
    <aop:advisor advice-ref="txAdvice" pointcut-ref="txPointcut"/>
</aop:config>
```

#### 5.修改Service实现类代码

```java
@Service("accountService")
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    public void save(Account account) {
        accountMapper.save(account);
    }
    public List<Account> findAll() {
        return accountMapper.findAll();
    }
}
```