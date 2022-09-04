# Git 命令

# Git 命令

---

## Git 全局设置

### 设置用户信息

```sh
git config --global user.name "用户名"
```

```sh
git config --global user.email "邮箱"
```

### 查看配置信息

```sh
git config --list
```

## 获取 Git 仓库

### 在本地初始化 Git 仓库

```sh
git init
```

### 从远程仓库进行克隆

```sh
git clone [远程Git仓库地址]
```

## Git 工作区中文件的状态

- untracked 未跟踪（未被纳入版本控制状态）
- tracked 已跟踪 （被纳入版本控制）
  - Unmodified 未修改状态
  - Modified 已修改状态
  - Staged 已暂存状态

## 本地仓库操作

### 查看文件状态

```sh
git status
```

### 将修改的文件加入暂存区

```sh
git add <filename>
```

将所有修改的文件加入暂存区

```sh
git add .
```

### 将暂存区的文件取消暂存或是切换到指定版本

取消暂存

```sh
git reset <filename>
```

切换到指定版本

```sh
git reset --hard <版本号>
```

### 将暂存区的文件修改提交到版本库

```sh
git commit
```

```sh
git commit -m "commitMsg" [filename]
```

### 查看日志

```sh
git log
```

## 远程仓库操作

### 查看远程仓库

```sh
git remote
```

查看详细信息

```sh
git remote -v
```

### 添加远程仓库

```sh
git remote add <shortname> <url>
```

### 从远程仓库克隆

```sh
git clone [url]
```

### 从远程仓库拉取

```sh
git pull [remote-name] [branch-name]
```

### 推送到远程仓库

```sh
git push [remote-name] [branch-name]
```

如果云端仓库没有该分支则创建该分支

```sh
git push -u origin 分支名
```

**注意**：如果当前本地仓库不是从远程仓库克隆，而是本地创建的仓库，并且仓库中存在文件，此时再从远程仓库拉取文件的时候会报错（fatal: refusing to merge unrelated histories），解决此问题可以在 git pull 命令后加上参数`--allow-unrelated-histories`

## 分支操作

### 查看分支

```sh
git branch
```

查看远程仓库分支

```sh
git branch -r
```

查看本地仓库和远程仓库的所有分支

```sh
git branch -a
```

### 创建分支

```sh
git branch [branch-name]
```

### 切换分支

```sh
git checkout [branch-name]
```

### 推送至远程仓库分支

```sh
git push [short-name] [branch-name]
```

### 合并分支

```sh
git merge [branch-name]
```

### 创建并切换分支

```sh
git checkout -b [branch-name]
```

### 分支合并时冲突解决(fatal: Cannot do a partial commit during a merge)

```sh
git commit -m "commitMsg" [filename] -i 
```

## 标签操作

### 列出已有的标签

```sh
git tag
```

### 创建标签

```sh
git tag [tag-name]
```

### 将标签推送至远程仓库

```sh
git push [short-name] [tag-name]
```

### 检出标签

```sh
git checkout -b [branch-name] [tag-name]
```

## 忽略文件

有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等

在主目录下建立".gitignore"文件，此文件有如下规则：

1. 忽略文件中的空行或以井号（#）开始的行将会被忽略。
2. 可以使用 Linux 通配符。例如：星号（\*）代表任意多个字符，问号（？）代表一个字符，方括号（[abc]）代表可选字符范围，大括号（{string1,string2,...}）代表可选的字符串等。
3. 如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。
4. 如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。
5. 如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。

~~~sh
#为注释
*.txt       #忽略所有 .txt 结尾的文件,这样的话上传就不会被选中！
!lib.txt    #但 lib.txt 除外
/temp       #仅忽略temp目录下的文件,不包括它的子目录
build/      #忽略 build/目录下的所有文件
doc/*.txt   #会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
~~~
