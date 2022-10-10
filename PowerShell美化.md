# PowerShell 美化

## 安装oh-my-posh

```sh
Install-Module oh-my-posh -Scope CurrentUser -SkipPublisherCheck
```

## 安装 posh-git

```sh
Install-Module posh-git -Scope CurrentUser
```

## 安装 Terminal-Icons

```sh
Install-Module -Name Terminal-Icons -Repository PSGallery
```

## 打开 PowerShell  配置文件

```sh
notepad $PROFILE
```

配置以下内容：

```txt
Import-Module posh-git
Import-Module oh-my-posh
Import-Module Terminal-Icons
Set-PoshPrompt -Theme Paradox
oh-my-posh --init --shell pwsh --config D:/oh-my-posh/themes/powerlevel10k_rainbow.omp.json | Invoke-Expression
```

## 安装 PSReadLine

```sh
Install-Module PSReadLine -AllowPrerelease -Scope CurrentUser -Force -SkipPublisherCheck
```

## 开启命令行自动补全和提示

```sh
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
```

### 设置预测命令颜色

```sh
Set-PSReadLineOption -Colors @{ InlinePrediction = "#C0C0C0" }
```

![](https://i0.hdslb.com/bfs/album/c773b2054403e97d80d5ba7b95f7713216bb4a8b.png)

## 配置 PSReadLine

```sh
notepad $PROFILE
```

添加以下内容

```txt
Import-Module PSReadLine
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -Colors @{ InlinePrediction = "#C0C0C0" }
```

## 安装 scoop 包管理工具

修改PowerShell的安全策略

```sh
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

安装 scoop

```sh
iex (new-object net.webclient).downloadstring('https://raw.githubusercontent.com/lukesampson/scoop/master/bin/install.ps1')
```

测试是否安装成功

```sh
scoop help
```

## 安装 busybox

busybox 内置了Linux的许多命令，可以在windows上使用

```sh
scoop install busybox
```

## 安装 starship

官网：[https://starship.rs/zh-CN/](https://starship.rs/zh-CN/)

```sh
scoop install starship
```

在 PROFILE 文件中添加

```txt
Invoke-Expression (&starship init powershell)
```

在 .config/starship.toml 中添加

```toml
# 设置配置范例，开启编辑器的自动补全
"$schema" = 'https://starship.rs/config-schema.json'

# 在命令之间插入空行
add_newline = true

# 将提示符的“❯”替换为“➜”
[character] # “character”是我们正在配置的组件
success_symbol = "[➜](bold green)" # 设置“success_symbol” 字段为绿色加粗的“➜”

# 禁用 package 组件，完全隐藏它的提示符
[package]
disabled = true
```

