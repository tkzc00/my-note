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
