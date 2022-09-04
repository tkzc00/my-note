# MySQL学习笔记

# 数据库

## 数据库相关概念

### 数据库

- ==存储和管理数据的仓库，数据是有组织的进行存储。==
- 数据库英文名是 DataBase，简称DB。

数据库就是将数据存储在硬盘上，可以达到持久化存储的效果。那又是如何解决上述问题的？使用数据库管理系统。

### 数据库管理系统

- ==管理数据库的大型软件==
- 英文：DataBase Management System，简称 DBMS

在电脑上安装了数据库管理系统后，就可以通过数据库管理系统创建数据库来存储数据，也可以通过该系统对数据库中的数据进行数据的增删改查相关的操作。我们平时说的MySQL数据库其实是MySQL数据库管理系统。

### 常见的数据库管理系统

- Oracle：收费的大型数据库，Oracle 公司的产品
- MySQL： 开源免费的中小型数据库。后来 Sun公司收购了 MySQL，而 Sun 公司又被 Oracle 收购
- SQL Server：MicroSoft 公司收费的中型的数据库。C#、.net 等语言常使用
- PostgreSQL：开源免费中小型的数据库
- DB2：IBM 公司的大型收费数据库产品
- SQLite：嵌入式的微型数据库。如：作为 Android 内置数据库
- MariaDB：开源免费中小型的数据库

### SQL

- 英文：Structured Query Language，简称 SQL，结构化查询语言
- 操作关系型数据库的编程语言
- 定义操作所有关系型数据库的统一标准，可以使用SQL操作所有的关系型数据库管理系统，以后工作中如果使用到了其他的数据库管理系统，也同样的使用SQL来操作。

## MySQL数据库

### MySQL数据模型

关系型数据库：关系型数据库是建立在关系模型基础上的数据库，简单说，关系型数据库是由多张能互相连接的==二维表==组成的数据库

> 关系型数据库的优点：

- 都是使用表结构，格式一致，易于维护。
- 使用通用的 SQL 语言操作，使用方便，可用于复杂查询。
  - 关系型数据库都可以通过SQL进行操作，所以使用方便。
  - 复杂查询。现在需要查询001号订单数据，我们可以看到该订单是1号客户的订单，而1号订单是李聪这个客户。以后也可以在一张表中进行统计分析等操作。
- 数据存储在磁盘中，安全。

> 小结：

- MySQL中可以创建多个数据库，每个数据库对应到磁盘上的一个文件夹
- 在每个数据库中可以创建多个表，每张都对应到磁盘上一个 frm 文件
- 每张表可以存储多条数据，数据会被存储到磁盘中 MYD 文件中

## SQL

### SQL简介

- 英文：Structured Query Language，简称 SQL
- 结构化查询语言，一门操作关系型数据库的编程语言
- 定义操作所有关系型数据库的统一标准
- 对于同一个需求，每一种数据库操作的方式可能会存在一些不一样的地方，我们称为“方言”

### 通用语法

- SQL 语句可以单行或多行书写，以分号结尾。
- MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。
- 注释
  - 单行注释: -- 注释内容 或 #注释内容(MySQL 特有)
  - 多行注释: /* 注释 */

> 注意：使用-- 添加单行注释时，--后面一定要加空格，而#没有要求。

### SQL分类

- DDL(Data Definition Language) ： 数据定义语言，用来定义数据库对象：数据库，表，列等
  - DDL简单理解就是用来操作数据库，表等
- DML(Data Manipulation Language) 数据操作语言，用来对数据库中表的数据进行增删改
  - DML简单理解就对表中数据进行增删改
- DQL(Data Query Language) 数据查询语言，用来查询数据库中表的记录(数据)
  - DQL简单理解就是对数据进行查询操作。从数据库表中查询到我们想要的数据。
- DCL(Data Control Language) 数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户
  - DML简单理解就是对数据库进行权限控制。比如我让某一个数据库表只能让某一个用户进行操作等

> 注意： 以后我们最常操作的是 DML 和 DQL ，因为我们开发中最常操作的就是数据。

## DDL:操作数据库

### 查询

查询所有的数据库

```sql
SHOW DATABASES;
```

### 创建数据库

- 创建数据库：
```sql
CREATE DATABASE 数据库名称;
```
- 创建数据库(判断，如果不存在则创建)
```sql
CREATE DATABASE IF NOT EXISTS 数据库名称;
```

### 删除数据库

- 删除数据库
```sql
DROP DATABASE 数据库名称;
```
- 删除数据库(判断，如果存在则删除)
```sql
DROP DATABASE IF EXISTS 数据库名称;
```

### 使用数据库

- 使用数据库
```sql
USE 数据库名称;
```
- 查看当前使用的数据库
```sql
SELECT DATABASE();
```

## DDL:操作表

### 查询表

- 查询当前数据库下所有表名称
```sql
SHOW TABLES;
```
- 查询表结构
```sql
DESC 表名称;
```

### 创建表

- 创建表
```sql
CREATE TABLE 表名 (
    字段名1 数据类型1,
    字段名2 数据类型2,
    …
    字段名n 数据类型n
);
```

> 注意：最后一行末尾，不能加逗号

### 数据类型

- 数值
```sql
tinyint : 小整数型，占一个字节
int ： 大整数类型，占四个字节
    eg ： age int
double ： 浮点类型
    使用格式： 字段名 double(总长度,小数点后保留的位数)
    eg ： score double(5,2)
```
- 日期
```sql
date ： 日期值。只包含年月日
    eg ：birthday date ：
datetime ： 混合日期和时间值。包含年月日时分秒
```
- 字符串
```sql
char ： 定长字符串。
    优点：存储性能高
    缺点：浪费空间
    eg ： name char(10) 如果存储的数据字符个数不足10个，也会占10个的空间
varchar ： 变长字符串。
    优点：节约空间
    缺点：存储性能底
    eg ： name varchar(10) 如果存储的数据字符个数不足10个，那就数据字符个数是几就占几个的空间
```

> 注意：其他类型参考资料中的《MySQL数据类型].xlsx》

#### 案例

需求：设计一张学生表，请注重数据类型、长度的合理性
1. 编号
2. 姓名，姓名最长不超过10个汉字
3. 性别，因为取值只有两种可能，因此最多一个汉字
4. 生日，取值为年月日
5. 入学成绩，小数点后保留两位
6. 邮件地址，最大长度不超过 64
7. 家庭联系电话，不一定是手机号码，可能会出现 - 等字符
8. 学生状态（用数字表示，正常、休学、毕业...）

```sql
create table student (
    id int,
    name varchar(10),
    gender char(1),
    birthday date,
    score double(5,2),
    email varchar(15),
    tel varchar(15),
    status tinyint
);
```

### 删除表

- 删除表
```sql
DROP TABLE 表名;
```
- 删除表时判断表是否存在
```sql
DROP TABLE IF EXISTS 表名;
```

### 修改表

- 修改表名
```sql
ALTER TABLE 表名 RENAME TO 新的表名;

-- 将表名student修改为stu
alter table student rename to stu;
```
- 添加一列
```sql
ALTER TABLE 表名 ADD 列名 数据类型;
-- 给stu表添加一列address，该字段类型是varchar(50)
alter table stu add address varchar(50);
```
- 修改数据类型
```sql
ALTER TABLE 表名 MODIFY 列名 新数据类型;

-- 将stu表中的address字段的类型改为 char(50)
alter table stu modify address char(50);
```
- 修改列名和数据类型
```sql
ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;

-- 将stu表中的address字段名改为 addr，类型改为varchar(50)
alter table stu change address addr varchar(50);
```
- 删除列
```sql
ALTER TABLE 表名 DROP 列名;

-- 将stu表中的addr字段 删除
alter table stu drop addr;
```

## DML

DML主要是对数据进行增（insert）删（delete）改（update）操作。

### 添加数据

- 给指定列添加数据
```sql
INSERT INTO 表名(列名1,列名2,…) VALUES(值1,值2,…);
```
- 给全部列添加数据
```sql
INSERT INTO 表名 VALUES(值1,值2,…);
```
- 批量添加数据
```sql
INSERT INTO 表名(列名1,列名2,…) VALUES(值1,值2,…),(值1,值2,…),(值1,值2,…)…;
INSERT INTO 表名 VALUES(值1,值2,…),(值1,值2,…),(值1,值2,…)…;
```

### 修改数据

- 修改表数据
```sql
UPDATE 表名 SET 列名1=值1,列名2=值2,… [WHERE 条件];
```

> 注意：
> 1. 修改语句中如果不加条件，则将所有数据都修改！
> 2. 像上面的语句中的中括号，表示在写sql语句中可以省略这部分

#### 练习

- 将张三的性别改为女
```sql
update stu set sex = '女' where name = '张三';
```
- 将张三的生日改为 1999-12-12 分数改为99.99
```sql
update stu set birthday = '1999-12-12', score = 99.99 where name = '张三';
```
- 注意：==如果update语句没有加where条件，则会将表中所有数据全部修改！==
```sql
update stu set sex = '女';
```

### 删除数据

- 删除数据
```sql
DELETE FROM 表名 [WHERE 条件];
```

#### 练习

```sql
-- 删除张三记录
delete from stu where name = '张三';

-- 删除stu表中所有的数据
delete from stu;
```

## DQL

### 基础查询

- 查询多个字段
```sql
SELECT 字段列表 FROM 表名;
SELECT * FROM 表名; -- 查询所有数据
```
- 去除重复记录
```sql
SELECT DISTINCT 字段列表 FROM 表名;
```
- 起别名
```sql
AS: AS 也可以省略
```

#### 练习

- 查询name、age两列
```sql
select name,age from stu;
```
- 查询所有列的数据，列名的列表可以使用*替代
```sql
select * from stu;
```
- 查询地址信息
```sql
select address from stu;
```
- 去除重复记录
```sql
select distinct address from stu;
```
- 查询姓名、数学成绩、英语成绩。并通过as给math和english起别名（as关键字可以省略）
```sql
select name,math as 数学成绩,english as 英文成绩 from stu;
select name,math 数学成绩,english 英文成绩 from stu;
```

### 条件查询

> 语法

```sql
SELECT 字段列表 FROM 表名 WHERE 条件列表;
```

> 条件

|       符号       |                    功能                    |
| :--------------: | :----------------------------------------: |
|        >.        |                    大于                    |
|        <         |                    小于                    |
|        >=        |                  大于等于                  |
|        <=        |                  小于等于                  |
|        =         |                    等于                    |
|      <>或!=      |                   不等于                   |
| BETWEEN...AND... |          在某个范围之内（都包含）          |
|     IN(...)      |                   多选一                   |
|   LIKE 占位符    | 摩奴查询，`_`单个任意字符，`%`多个任意字符 |
|     IS NULL      |                  是 NULL                   |
|   IS NOT NULL    |                 不是 NULL                  |
|    AND 或 &&     |                    并且                    |
|    OR 或 \|\|    |                    或者                    |
|     NOT 或 !     |                  非，不是                  |

#### 条件查询练习

- 查询年龄大于20岁的学员信息
```sql
select * from stu where age > 20;
```
- 查询年龄大于等于20岁的学员信息
```sql
select * from stu where age >= 20;
```
- 查询年龄大于等于20岁 并且 年龄 小于等于 30岁 的学员信息
```sql
select * from stu where age >= 20 && age <= 30;
select * from stu where age >= 20 and age <= 30;
```
> 上面语句中 && 和 and 都表示并且的意思。建议使用 and 。
> 也可以使用 between ... and 来实现上面需求
```sql
select * from stu where age BETWEEN 20 and 30;
```
- 查询入学日期在'1998-09-01' 到 '1999-09-01' 之间的学员信息
```sql
select * from stu where hire_date BETWEEN '1998-09-01' and '1999-09-01';
```
- 查询年龄等于18岁的学员信息
```sql
select * from stu where age = 18;
```
- 查询年龄不等于18岁的学员信息
```sql
select * from stu where age != 18;
select * from stu where age <> 18;
```
- 查询年龄等于18岁 或者 年龄等于20岁 或者 年龄等于22岁的学员信息
```sql
select * from stu where age = 18 or age = 20 or age = 22;
select * from stu where age in (18,20 ,22);
```
- 查询英语成绩为 null的学员信息
  - null值的比较不能使用 = 或者 != 。需要使用 is 或者 is not
```sql
select * from stu where english = null; -- 这个语句是不行的
select * from stu where english is null;
select * from stu where english is not null;
```

#### 模糊查询练习

> 模糊查询使用like关键字，可以使用通配符进行占位:
> （1）_ : 代表单个任意字符
> （2）% : 代表任意个数字符

- 查询姓'马'的学员信息
```sql
select * from stu where name like '马%';
```
- 查询第二个字是'花'的学员信息
```sql
select * from stu where name like '_花%';
```
- 查询名字中包含 '德' 的学员信息
```sql
select * from stu where name like '%德%';
```

### 排序查询

```sql
SELECT 字段列表 FROM 表名 ORDER BY 排序字段名1 [排序方式1],排序字段名2 [排序方式2] …;
```

- ASC ： 升序排列 （默认值）
- DESC ： 降序排列

> 注意：如果有多个排序条件，当前边的条件值一样时，才会根据第二条件进行排序

#### 练习

- 查询学生信息，按照年龄升序排列
```sql
select * from stu order by age;
```
- 查询学生信息，按照数学成绩降序排列
```sql
select * from stu order by math desc;
```
- 查询学生信息，按照数学成绩降序排列，如果数学成绩一样，再按照英语成绩升序排列
```sql
select * from stu order by math desc , english asc;
```

### 聚合函数

> 概念

==将一列数据作为一个整体，进行纵向计算==。

> 聚合函数分类

|   函数名    |               功能               |
| :---------: | :------------------------------: |
| count(列名) | 统计数量（一般选用不为null的列） |
|  max(列名)  |              最大值              |
|  min(列名)  |              最小值              |
|  sum(列名)  |               求和               |
|  avg(列名)  |              平均值              |

> 聚合函数语法

```sql
SELECT 聚合函数名(列名) FROM 表;
```

> 注意：null 值不参与所有聚合函数运算

####  练习

- 统计班级一共有多少个学生
```sql
select count(id) from stu;
select count(english) from stu;
```
  - 上面语句根据某个字段进行统计，如果该字段某一行的值为null的话，将不会被统计。所以可以在count(*) 来实现。* 表示所有字段数据，一行中也不可能所有的数据都为null，所以建议使用 count(*)
  ```sql
  select count(*) from stu;
  ```
- 查询数学成绩的最高分
```sql
select max(math) from stu;
```
- 查询数学成绩的最低分
```sql
select min(math) from stu;
```
- 查询数学成绩的总分
```sql
select sum(math) from stu;
```
- 查询数学成绩的平均分
```sql
select avg(math) from stu;
```
- 查询英语成绩的最低分
```sql
select min(english) from stu;
```

### 分组查询

```sql
SELECT 字段列表 FROM 表名 [WHERE 分组前条件限定] GROUP BY 分组字段名 [HAVING 分组后条件过滤];
```

> 注意：分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义

#### 练习

- 查询男同学和女同学各自的数学平均分
```sql
select sex, avg(math) from stu group by sex;
```
> 注意：分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义
```sql
select name, sex, avg(math) from stu group by sex; -- 这里查询name字段就没有任何意义
```
- 查询男同学和女同学各自的数学平均分，以及各自人数
```sql
select sex, avg(math),count(*) from stu group by sex;
```
- 查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于70分的不参与分组
```sql
select sex, avg(math),count(*) from stu where math > 70 group by sex;
```
- 查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于70分的不参与分组，分组之后人数大于2个的
```sql
select sex, avg(math),count(*) from stu where math > 70 group by sex having count(*) > 2;
```

#### where 和 having 区别：

- 执行时机不一样：where 是分组之前进行限定，不满足where条件，则不参与分组，而having是分组之后对结果进行过滤。
- 可判断的条件不一样：where 不能对聚合函数进行判断，having 可以

### 分页查询

```sql
SELECT 字段列表 FROM 表名 LIMIT 起始索引 , 查询条目数;
```

> 注意： 上述语句中的起始索引是从0开始

#### 练习

- 从0开始查询，查询3条数据
```sql
select * from stu limit 0 , 3;
```
- 每页显示3条数据，查询第1页数据
```sql
select * from stu limit 0 , 3;
```
- 每页显示3条数据，查询第2页数据
```sql
select * from stu limit 3 , 3;
```
- 每页显示3条数据，查询第3页数据
```sql
select * from stu limit 6 , 3;
```

> 从上面的练习推导出起始索引计算公式：

```sql
起始索引 = (当前页码 - 1) * 每页显示的条数
```

> Tips：

- 分页查询 limit 是MySQL数据库的方言
- Oracle 分页查询使用 rownumber
- SQL Server 分页查询使用 top

# mysql高级

## 约束

### 概念

- 约束是作用于表中列上的规则，用于限制加入表的数据
  - 例如：我们可以给id列加约束，让其值不能重复，不能为null值。
- 约束的存在保证了数据库中数据的正确性、有效性和完整性
  - 添加约束可以在添加数据的时候就限制不正确的数据，年龄是3000，数学成绩是-5分这样无效的数据，继而保障数据的完整性。

### 分类

- **非空约束： 关键字是 `NOT NULL`**
  - 保证列中所有的数据不能有null值。
  - 例如：id列在添加 马花疼 这条数据时就不能添加成功。
- **唯一约束：关键字是 `UNIQUE`**
  - 保证列中所有数据各不相同。
  - 例如：id列中三条数据的值都是1，这样的数据在添加时是绝对不允许的。
- **主键约束： 关键字是 `PRIMARY KEY`**
  - 主键是一行数据的唯一标识，要求非空且唯一。一般我们都会给没张表添加一个主键列用来唯一标识数据。
  - 例如：上图表中id就可以作为主键，来标识每条数据。那么这样就要求数据中id的值不能重复，不能为null值。
- **检查约束： 关键字是 `CHECK`**
  - 保证列中的值满足某一条件。
  - 例如：我们可以给age列添加一个范围，最低年龄可以设置为1，最大年龄就可以设置为300，这样的数据才更合理些。

> 注意：MySQL不支持检查约束。
> 这样是不是就没办法保证年龄在指定的范围内了？从数据库层面不能保证，以后可以在java代码中进行限制，一样也可以实现要求。
- **默认约束： 关键字是 `DEFAULT`**
  - 保存数据时，未指定值则采用默认值。
  - 例如：我们在给english列添加该约束，指定默认值是0，这样在添加数据时没有指定具体值时就会采用默认给定的0。
- **外键约束： 关键字是 `FOREIGN KEY`**
  - 外键用来让两个表的数据之间建立链接，保证数据的一致性和完整性。
  - 外键约束现在可能还不太好理解，后面我们会重点进行讲解。

### 非空约束

- 概念
  - 非空约束用于保证列中所有数据不能有NULL值
- 语法
  - 添加约束
  ```sql
  -- 创建表时添加非空约束
  CREATE TABLE 表名(
      列名 数据类型 NOT NULL,
      …
  );
  ```
  ```sql
  -- 建完表后添加非空约束
  ALTER TABLE 表名 MODIFY 字段名 数据类型 NOT NULL;
  ```
  - 删除约束
  ```sql
  ALTER TABLE 表名 MODIFY 字段名 数据类型;
  ```

### 唯一约束

- 概念
  - 唯一约束用于保证列中所有数据各不相同
- 语法
  - 添加约束
  ```sql
  -- 创建表时添加唯一约束
  CREATE TABLE 表名(
    列名 数据类型 UNIQUE [AUTO_INCREMENT],
    -- AUTO_INCREMENT: 当不指定值时自动增长
    …
  );
  CREATE TABLE 表名(
    列名 数据类型,
    …
    [CONSTRAINT] [约束名称] UNIQUE(列名)
  );
  ```
  ```sql
  -- 建完表后添加唯一约束
  ALTER TABLE 表名 MODIFY 字段名 数据类型 UNIQUE;
  ```
  - 删除约束
  ```sql
  ALTER TABLE 表名 DROP INDEX 字段名;
  ```

### 主键约束

- 概念
  - 主键是一行数据的唯一标识，要求非空且唯一
  - 一张表只能有一个主键
- 语法
  - 添加约束
  ```sql
  -- 创建表时添加主键约束
    CREATE TABLE 表名(
    列名 数据类型 PRIMARY KEY [AUTO_INCREMENT],
    …
  );
  CREATE TABLE 表名(
    列名 数据类型,
    [CONSTRAINT] [约束名称] PRIMARY KEY(列名)
  );
  ```
  ```sql
  -- 建完表后添加主键约束
  ALTER TABLE 表名 ADD PRIMARY KEY(字段名);
  ```
  - 删除约束
  ```sql
  ALTER TABLE 表名 DROP PRIMARY KEY;
  ```

### 默认约束

- 概念
  - 保存数据时，未指定值则采用默认值
- 语法
  - 添加约束
  ```sql
  -- 创建表时添加默认约束
  CREATE TABLE 表名(
    列名 数据类型 DEFAULT 默认值,
    …
  );
  ```
  ```sql
  -- 建完表后添加默认约束
  ALTER TABLE 表名 ALTER 列名 SET DEFAULT 默认值;
  ```
  - 删除约束
  ```sql
  ALTER TABLE 表名 ALTER 列名 DROP DEFAULT;
  ```

### 约束练习

根据需求，为表添加合适的约束

```sql
-- 员工表
CREATE TABLE emp (
    id INT, -- 员工id，主键且自增长
    ename VARCHAR(50), -- 员工姓名，非空且唯一
    joindate DATE, -- 入职日期，非空
    salary DOUBLE(7,2), -- 工资，非空
    bonus DOUBLE(7,2) -- 奖金，如果没有将近默认为0
);
```

上面一定给出了具体的要求，我们可以根据要求创建这张表，并为每一列添加对应的约束。建表语句如下：

```sql
DROP TABLE IF EXISTS emp;

-- 员工表
CREATE TABLE emp (
    id INT PRIMARY KEY, -- 员工id，主键且自增长
    ename VARCHAR(50) NOT NULL UNIQUE, -- 员工姓名，非空并且唯一
    joindate DATE NOT NULL , -- 入职日期，非空
    salary DOUBLE(7,2) NOT NULL , -- 工资，非空
    bonus DOUBLE(7,2) DEFAULT 0 -- 奖金，如果没有奖金默认为0
);
```

通过上面语句可以创建带有约束的 emp 表，约束能不能发挥作用呢。接下来我们一一进行验证，先添加一条没有问题的数据

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(1,'张三','1999-11-11',8800,5000);
```

- 验证主键约束，非空且唯一

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,'张三','1999-11-11',8800,5000);
```
- 验证非空约束

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(3,null,'1999-11-11',8800,5000);
```
- 验证唯一约束

```sql
 INSERT INTO emp(id,ename,joindate,salary,bonus) values(3,'李四','1999-11-11',8800,5000);
```
- 验证默认约束

```sql
INSERT INTO emp(id,ename,joindate,salary) values(3,'王五','1999-11-11',8800);
```

> 注意：**默认约束只有在不给值时才会采用默认值。如果给了null，那值就是null值。**

- 验证自动增长： auto_increment 当列是数字类型 并且唯一约束
  - 重新创建 emp 表，并给id列添加自动增长
  ```sql
  -- 员工表
  CREATE TABLE emp (
    id INT PRIMARY KEY auto_increment, -- 员工id，主键且自增长
    ename VARCHAR(50) NOT NULL UNIQUE, -- 员工姓名，非空并且唯一
    joindate DATE NOT NULL , -- 入职日期，非空
    salary DOUBLE(7,2) NOT NULL , -- 工资，非空
    bonus DOUBLE(7,2) DEFAULT 0 -- 奖金，如果没有奖金默认为0
  );
  ```
  - 接下来给emp添加数据，分别验证不给id列添加值以及给id列添加null值，id列的值会不会自动增长：
  ```sql
  INSERT INTO emp(ename,joindate,salary,bonus) values('赵六','1999-11-11',8800,null);
  INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,'赵六2','1999-11-11',  8800,null);
  INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,'赵六3','1999-11-11',  8800,null);
  ```

### 外键约束

外键用来让两个表的数据之间建立链接，保证数据的一致性和完整性。

> 语法

- 添加外键约束

```sql
-- 创建表时添加外键约束
CREATE TABLE 表名(
    列名 数据类型,
    …
    [CONSTRAINT] [外键名称] FOREIGN KEY(外键列名) REFERENCES 主表(主表列名)
);
```
```sql
-- 建完表后添加外键约束
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);
```
- 删除外键约束

```sql
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;
```

#### 练习

根据上述语法创建员工表和部门表，并添加上外键约束：

```sql
-- 删除表
DROP TABLE IF EXISTS emp;
DROP TABLE IF EXISTS dept;

-- 部门表
CREATE TABLE dept(
    id int primary key auto_increment,
    dep_name varchar(20),
    addr varchar(20)
);

-- 员工表
CREATE TABLE emp(
    id int primary key auto_increment,
    name varchar(20),
    age int,
    dep_id int,

    -- 添加外键 dep_id,关联 dept 表的id主键
    CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES dept(id)
);
```
- 添加数据

```sql
-- 添加 2 个部门
insert into dept(dep_name,addr) values
('研发部','广州'),('销售部', '深圳');

-- 添加员工,dep_id 表示员工所在的部门
INSERT INTO emp (NAME, age, dep_id) VALUES
('张三', 20, 1),
('李四', 20, 1),
('王五', 20, 1),
('赵六', 20, 2),
('孙七', 22, 2),
('周八', 18, 2);
```
- 删除外键

```sql
alter table emp drop FOREIGN key fk_emp_dept;
```
- 重新添加外键

```sql
alter table emp add CONSTRAINT fk_emp_dept FOREIGN key(dep_id) REFERENCES dept(id);
```

## 数据库设计

- 数据库设计概念
  - 数据库设计就是根据业务系统的具体需求，结合我们所选用的DBMS，为这个业务系统构造出最优的数据存储模型。
  - 建立数据库中的表结构以及表与表之间的关联关系的过程。
  - 有哪些表？表里有哪些字段？表和表之间有什么关系？
- 数据库设计的步骤
  - 需求分析（数据是什么? 数据具有哪些属性? 数据与属性的特点是什么）
  - 逻辑分析（通过ER图对数据库进行逻辑建模，不需要考虑我们所选用的数据库管理系统）
  - 物理设计（根据数据库自身的特点把逻辑设计转换为物理设计）
  - 维护设计（1.对新的需求进行建表；2.表优化）
- 表关系
  - 一对一
    - 如：用户 和 用户详情
    - 一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能
  - 一对多
    - 如：部门 和 员工
    - 一个部门对应多个员工，一个员工对应一个部门。
  - 多对多
    - 如：商品 和 订单
    - 一个商品对应多个订单，一个订单包含多个商品。

### 表关系(一对多)

- 一对多
  - 如：部门 和 员工
  - 一个部门对应多个员工，一个员工对应一个部门。
- 实现方式
  - ==在多的一方建立外键，指向一的一方的主键==
- 建表语句如下：

```sql
-- 删除表
DROP TABLE IF EXISTS tb_emp;
DROP TABLE IF EXISTS tb_dept;

-- 部门表
CREATE TABLE tb_dept(
    id int primary key auto_increment,
    dep_name varchar(20),
    addr varchar(20)
);

-- 员工表
CREATE TABLE tb_emp(
    id int primary key auto_increment,
    name varchar(20),
    age int,
    dep_id int,

    -- 添加外键 dep_id,关联 dept 表的id主键
    CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES tb_dept(id)
);
```

### 表关系(多对多)

- 多对多
  - 如：商品 和 订单
  - 一个商品对应多个订单，一个订单包含多个商品
- 实现方式
  - ==建立第三张中间表，中间表至少包含两个外键，分别关联两方主键==
- 建表语句如下：

```sql
-- 删除表
DROP TABLE IF EXISTS tb_order_goods;
DROP TABLE IF EXISTS tb_order;
DROP TABLE IF EXISTS tb_goods;

-- 订单表
CREATE TABLE tb_order(
    id int primary key auto_increment,
    payment double(10,2),
    payment_type TINYINT,
    status TINYINT
);

-- 商品表
CREATE TABLE tb_goods(
    id int primary key auto_increment,
    title varchar(100),
    price double(10,2)
);

-- 订单商品中间表
CREATE TABLE tb_order_goods(
    id int primary key auto_increment,
    order_id int,
    goods_id int,
    count int
);

-- 建完表后，添加外键
alter table tb_order_goods add CONSTRAINT fk_order_id FOREIGN key(order_id) REFERENCES
tb_order(id);
alter table tb_order_goods add CONSTRAINT fk_goods_id FOREIGN key(goods_id) REFERENCES
tb_goods(id);
```

### 表关系(一对一)

- 一对一
  - 如：用户 和 用户详情
  - 一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能
- 实现方式
  - ==在任意一方加入外键，关联另一方主键，并且设置外键为唯一(UNIQUE)==
- 建表语句如下：

```sql
create table tb_user_desc (
    id int primary key auto_increment,
    city varchar(20),
    edu varchar(10),
    income int,
    status char(2),
    des varchar(100)
);

create table tb_user (
    id int primary key auto_increment,
    photo varchar(100),
    nickname varchar(50),
    age int,
    gender char(1),
    desc_id int unique,
    -- 添加外键
    CONSTRAINT fk_user_desc FOREIGN KEY(desc_id) REFERENCES tb_user_desc(id)
);
```

### 多表查询

多表查询顾名思义就是从多张表中一次性的查询出我们想要的数据。我们通过具体的sql给他们演示，先准备环境

```sql
DROP TABLE IF EXISTS emp;
DROP TABLE IF EXISTS dept;

# 创建部门表
CREATE TABLE dept(
    did INT PRIMARY KEY AUTO_INCREMENT,
    dname VARCHAR(20)
);

# 创建员工表
CREATE TABLE emp (
    id INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(10),
    gender CHAR(1), -- 性别
    salary DOUBLE, -- 工资
    join_date DATE, -- 入职日期
    dep_id INT,
    FOREIGN KEY (dep_id) REFERENCES dept(did) -- 外键，关联部门表(部门表的主键)
);

-- 添加部门数据
INSERT INTO dept (dNAME) VALUES ('研发部'),('市场部'),('财务部'),('销售部');

-- 添加员工数据
INSERT INTO emp(NAME,gender,salary,join_date,dep_id) VALUES
('孙悟空','男',7200,'2013-02-24',1),
('猪八戒','男',3600,'2010-12-02',2),
('唐僧','男',9000,'2008-08-08',2),
('白骨精','女',5000,'2015-10-07',3),
('蜘蛛精','女',4500,'2011-03-14',1),
('小白龙','男',2500,'2011-02-14',null);
```

- 执行下面的多表查询语句

```sql
select * from emp , dept; -- 从emp和dept表中查询所有的字段数据
```

- 孙悟空 这个员工属于1号部门，但也同时关联的2、3、4号部门。所以我们要
通过限制员工表中的 dep_id 字段的值和部门表 did 字段的值相等来消除这些无效的数据，

```sql
select * from emp , dept where emp.dep_id = dept.did;
```

> 多表查询分类

- 连接查询
  - 内连接查询 ：相当于查询AB交集数据
  - 外连接查询
    - 左外连接查询 ：相当于查询A表所有数据和交集部门数据
    - 右外连接查询 ： 相当于查询B表所有数据和交集部分数据
- 子查询

### 内连接查询

- 语法

```sql
-- 隐式内连接
SELECT 字段列表 FROM 表1,表2… WHERE 条件;

-- 显示内连接
SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 条件;
```

> 内连接相当于查询 A B 交集数据

- 案例
  - 隐式内连接
  ```sql
  SELECT
    *
  FROM
    emp,
    dept
  WHERE
    emp.dep_id = dept.did;
  ```
  - 查询 emp的 name， gender，dept表的dname
  ```sql
  SELECT
    emp. NAME,
    emp.gender,
    dept.dname
  FROM
    emp,
    dept
  WHERE
    emp.dep_id = dept.did;
  ```
    - 上面语句中使用表名指定字段所属有点麻烦，sql也支持给表指别名，上述语句可以改进为

```sql
SELECT
    t1. NAME,
    t1.gender,
    t2.dname
FROM
    emp t1,
    dept t2
WHERE
    t1.dep_id = t2.did;
```

  - 显式内连接

  ```sql
  select * from emp inner join dept on emp.dep_id = dept.did;
  -- 上面语句中的inner可以省略，可以书写为如下语句
  select * from emp join dept on emp.dep_id = dept.did;
  ```

### 外连接查询

- 语法

```sql
-- 左外连接
SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件;

-- 右外连接
SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件;
```

> 左外连接：相当于查询A表所有数据和交集部分数据
> 右外连接：相当于查询B表所有数据和交集部分数据

- 案例
  - 查询emp表所有数据和对应的部门信息（左外连接）
  ```sql
  select * from emp left join dept on emp.dep_id = dept.did;
  ```
  - 查询dept表所有数据和对应的员工信息（右外连接）
  ```sql
  select * from emp right join dept on emp.dep_id = dept.did;
  ```
  - 要查询出部门表中所有的数据，也可以通过左外连接实现，只需要将两个表的位置进行互换：
  ```sql
  select * from dept left join emp on emp.dep_id = dept.did;
  ```

### 子查询

==查询中嵌套查询，称嵌套查询为子查询==。

> 需求：查询工资高于猪八戒的员工信息。

- 来实现这个需求，我们就可以通过二步实现，第一步：先查询出来 猪八戒的工资

```sql
select salary from emp where name = '猪八戒'
```
- 第二步：查询工资高于猪八戒的员工信息

```sql
select * from emp where salary > 3600;
```
- 第二步中的3600可以通过第一步的sql查询出来，所以将3600用第一步的sql语句进行替换

```sql
select * from emp where salary > (select salary from emp where name = '猪八戒');
```
- 子查询根据查询结果不同，作用不同
  - 子查询语句结果是单行单列，子查询语句作为条件值，使用 = != > < 等进行条件判断
    ```sql
    SELECT 字段列表 FROM 表 WHERE 字段名 = (子查询);
    ```
  - 子查询语句结果是多行单列，子查询语句作为条件值，使用 in 等关键字进行条件判断
    ```sql
    SELECT 字段列表 FROM 表 WHERE 字段名 IN (子查询);
    ```
  - 子查询语句结果是多行多列，子查询语句作为虚拟表
    ```sql
    SELECT 字段列表 FROM (子查询) WHERE 条件;
    ```
- 案例
  - 查询 '财务部' 和 '市场部' 所有的员工信息
  ```sql
  -- 查询 '财务部' 或者 '市场部' 所有的员工的部门did
  select did from dept where dname = '财务部' or dname = '市场部';
  
  select * from emp where dep_id in (select did from dept where dname = '财务部' or dname = '市场部');
  ```
  - 查询入职日期是 '2011-11-11' 之后的员工信息和部门信息
  ```sql
  -- 查询入职日期是 '2011-11-11' 之后的员工信息
  select * from emp where join_date > '2011-11-11' ;
  
  -- 将上面语句的结果作为虚拟表和dept表进行内连接查询
  select * from (select * from emp where join_date > '2011-11-11' ) t1, dept where t1.dep_id = dept.did;
  ```

### 案例

- 环境准备：

```sql
DROP TABLE IF EXISTS emp;
DROP TABLE IF EXISTS dept;
DROP TABLE IF EXISTS job;
DROP TABLE IF EXISTS salarygrade;

-- 部门表
CREATE TABLE dept (
    did INT PRIMARY KEY PRIMARY KEY, -- 部门id
    dname VARCHAR(50), -- 部门名称
    loc VARCHAR(50) -- 部门所在地
);

-- 职务表，职务名称，职务描述
CREATE TABLE job (
    id INT PRIMARY KEY,
    jname VARCHAR(20),
    description VARCHAR(50)
);

-- 员工表
CREATE TABLE emp (
    id INT PRIMARY KEY, -- 员工id
    ename VARCHAR(50), -- 员工姓名
    job_id INT, -- 职务id
    mgr INT , -- 上级领导
    joindate DATE, -- 入职日期
    salary DECIMAL(7,2), -- 工资
    bonus DECIMAL(7,2), -- 奖金
    dept_id INT, -- 所在部门编号
    CONSTRAINT emp_jobid_ref_job_id_fk FOREIGN KEY (job_id) REFERENCES job (id),
    CONSTRAINT emp_deptid_ref_dept_id_fk FOREIGN KEY (dept_id) REFERENCES dept (id)
);

-- 工资等级表
CREATE TABLE salarygrade (
    grade INT PRIMARY KEY, -- 级别
    losalary INT, -- 最低工资
    hisalary INT -- 最高工资
);

-- 添加4个部门
INSERT INTO dept(did,dname,loc) VALUES
(10,'教研部','北京'),
(20,'学工部','上海'),
(30,'销售部','广州'),
(40,'财务部','深圳');

-- 添加4个职务
INSERT INTO job (id, jname, description) VALUES
(1, '董事长', '管理整个公司，接单'),
(2, '经理', '管理部门员工'),
(3, '销售员', '向客人推销产品'),
(4, '文员', '使用办公软件');

-- 添加员工
INSERT INTO emp(id,ename,job_id,mgr,joindate,salary,bonus,dept_id) VALUES
(1001,'孙悟空',4,1004,'2000-12-17','8000.00',NULL,20),
(1002,'卢俊义',3,1006,'2001-02-20','16000.00','3000.00',30),
(1003,'林冲',3,1006,'2001-02-22','12500.00','5000.00',30),
(1004,'唐僧',2,1009,'2001-04-02','29750.00',NULL,20),
(1005,'李逵',4,1006,'2001-09-28','12500.00','14000.00',30),
(1006,'宋江',2,1009,'2001-05-01','28500.00',NULL,30),
(1007,'刘备',2,1009,'2001-09-01','24500.00',NULL,10),
(1008,'猪八戒',4,1004,'2007-04-19','30000.00',NULL,20),
(1009,'罗贯中',1,NULL,'2001-11-17','50000.00',NULL,10),
(1010,'吴用',3,1006,'2001-09-08','15000.00','0.00',30),
(1011,'沙僧',4,1004,'2007-05-23','11000.00',NULL,20),
(1012,'李逵',4,1006,'2001-12-03','9500.00',NULL,30),
(1013,'小白龙',4,1004,'2001-12-03','30000.00',NULL,20),
(1014,'关羽',4,1007,'2002-01-23','13000.00',NULL,10);

-- 添加5个工资等级
INSERT INTO salarygrade(grade,losalary,hisalary) VALUES
(1,7000,12000),
(2,12010,14000),
(3,14010,20000),
(4,20010,30000),
(5,30010,99990);
```
- 需求
  - 查询所有员工信息。查询员工编号，员工姓名，工资，职务名称，职务描述
```sql
/*
    分析：
        1. 员工编号，员工姓名，工资 信息在emp 员工表中
        2. 职务名称，职务描述 信息在 job 职务表中
        3. job 职务表 和 emp 员工表 是 一对多的关系 emp.job_id = job.id
*/

-- 方式一 ：隐式内连接
SELECT
    emp.id,
    emp.ename,
    emp.salary,
    job.jname,
    job.description
FROM
    emp,
    job
WHERE
    emp.job_id = job.id;

-- 方式二 ：显式内连接
SELECT
    emp.id,
    emp.ename,
    emp.salary,
    job.jname,
    job.description
FROM
    emp
INNER JOIN job ON emp.job_id = job.id;
```
  - 查询员工编号，员工姓名，工资，职务名称，职务描述，部门名称，部门位置
```sql
/*
    分析：
        1. 员工编号，员工姓名，工资 信息在emp 员工表中
        2. 职务名称，职务描述 信息在 job 职务表中
        3. job 职务表 和 emp 员工表 是 一对多的关系 emp.job_id = job.id
        4. 部门名称，部门位置 来自于 部门表 dept
        5. dept 和 emp 一对多关系 dept.id = emp.dept_id
*/

-- 方式一 ：隐式内连接
SELECT
    emp.id,
    emp.ename,
    emp.salary,
    job.jname,
    job.description,
    dept.dname,
    dept.loc
FROM
    emp,
    job,
    dept
WHERE
    emp.job_id = job.id
    and dept.id = emp.dept_id;

-- 方式二 ：显式内连接
SELECT
    emp.id,
    emp.ename,
    emp.salary,
    job.jname,
    job.description,
    dept.dname,
    dept.loc
FROM
    emp
INNER JOIN job ON emp.job_id = job.id
INNER JOIN dept ON dept.id = emp.dept_id
```
  - 查询员工姓名，工资，工资等级
```sql
/*
    分析：
        1. 员工姓名，工资 信息在emp 员工表中
        2. 工资等级 信息在 salarygrade 工资等级表中
        3. emp.salary >= salarygrade.losalary and emp.salary <= salarygrade.hisalary
*/

SELECT
    emp.ename,
    emp.salary,
    t2.*
FROM
    emp,
    salarygrade t2
WHERE
    emp.salary >= t2.losalary
    AND emp.salary <= t2.hisalary
```
  - 查询员工姓名，工资，职务名称，职务描述，部门名称，部门位置，工资等级
```sql
/*
    分析：
        1. 员工编号，员工姓名，工资 信息在emp 员工表中
        2. 职务名称，职务描述 信息在 job 职务表中
        3. job 职务表 和 emp 员工表 是 一对多的关系 emp.job_id = job.id
        4. 部门名称，部门位置 来自于 部门表 dept
        5. dept 和 emp 一对多关系 dept.id = emp.dept_id
        6. 工资等级 信息在 salarygrade 工资等级表中
        7. emp.salary >= salarygrade.losalary and emp.salary <= salarygrade.hisalary
*/

SELECT
    emp.id,
    emp.ename,
    emp.salary,
    job.jname,
    job.description,
    dept.dname,
    dept.loc,
    t2.grade
FROM
    emp
INNER JOIN job ON emp.job_id = job.id
INNER JOIN dept ON dept.id = emp.dept_id
INNER JOIN salarygrade t2 ON emp.salary BETWEEN t2.losalary and t2.hisalary;
```
  - 查询出部门编号、部门名称、部门位置、部门人数
```sql
/*
    分析：
        1. 部门编号、部门名称、部门位置 来自于部门 dept 表
        2. 部门人数: 在emp表中 按照dept_id 进行分组，然后count(*)统计数量
        3. 使用子查询，让部门表和分组后的表进行内连接
*/

-- 根据部门id分组查询每一个部门id和员工数
select dept_id, count(*) from emp group by dept_id;

SELECT
    dept.id,
    dept.dname,
    dept.loc,
    t1.count
FROM
    dept,
    (
        SELECT
            dept_id,
            count(*) count
        FROM
            emp
        GROUP BY
            dept_id
    ) t1
WHERE
    dept.id = t1.dept_id
```

## 事务

### 概述

> 数据库的事务（Transaction）是一种机制、一个操作序列，包含了==一组数据库操作命令==。
> 事务把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令==要么同时成功，要么同时失败==。
> 事务是一个不可分割的工作逻辑单元。

### 语法

- 开启事务
```sql
START TRANSACTION;
或者
BEGIN;
```
- 提交事务
```sql
commit;
```
- 回滚事务
```sql
rollback;
```

### 代码验证

- 环境准备

```sql
DROP TABLE IF EXISTS account;

-- 创建账户表
CREATE TABLE account(
    id int PRIMARY KEY auto_increment,
    name varchar(10),
    money double(10,2)
);

-- 添加数据
INSERT INTO account(name,money) values('张三',1000),('李四',1000);
```
- 不加事务演示问题

```sql
-- 转账操作
-- 1. 查询李四账户金额是否大于500

-- 2. 李四账户 -500
UPDATE account set money = money - 500 where name = '李四';
出现异常了... -- 此处不是注释，在整体执行时会出问题，后面的sql则不执行

-- 3. 张三账户 +500
UPDATE account set money = money + 500 where name = '张三';
```
- 添加事务sql如下：

```sql
-- 开启事务
BEGIN;
-- 转账操作
-- 1. 查询李四账户金额是否大于500

-- 2. 李四账户 -500
UPDATE account set money = money - 500 where name = '李四';
出现异常了... -- 此处不是注释，在整体执行时会出问题，后面的sql则不执行

-- 3. 张三账户 +500
UPDATE account set money = money + 500 where name = '张三';

-- 提交事务
COMMIT;

-- 回滚事务
ROLLBACK;
```
- 上面sql中的执行成功进选择执行提交事务，而出现问题则执行回滚事务的语句。以后我们肯定不可能这样操作，而是在java中进行操作，在java中可以抓取异常，没出现异常提交事务，出现异常回滚事务。

### 事务的四大特征

- 原子性（Atomicity）: 事务是不可分割的最小操作单位，要么同时成功，要么同时失败
- 一致性（Consistency） :事务完成时，必须使所有的数据都保持一致状态
- 隔离性（Isolation） :多个事务之间，操作的可见性
- 持久性（Durability） :事务一旦提交或回滚，它对数据库中的数据的改变就是永久的

> 说明：
> mysql中事务是自动提交的。
> 也就是说我们不添加事务执行sql语句，语句执行完毕会自动的提交事务。
> 可以通过下面语句查询默认提交方式：
> ```sql
> SELECT @@autocommit;
> ```
> 查询到的结果是1 则表示自动提交，结果是0表示手动提交。当然也可以通过下面语句修改提交方式：
> ```sql
> set @@autocommit = 0;
> ```
