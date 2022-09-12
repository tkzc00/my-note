# Nodejs 安装和配置

---

## Nodejs 下载

Nodejs 官网：[https://nodejs.org/en/](https://nodejs.org/en/) 

在官网下载LTS长期支持版，安装。

## 校验是否安装成功

查看node版本号

```sh
node -v 
```

查看npm版本号 

```sh
npm -v
```

## 修改默认配置

因为npm的默认配置会将文件存到c盘，所以修改一下路径。  
在解压之后的文件路径下新建两个文件夹：  
node_cache：npm的缓存路径  
node_global：npm的安装全局模块的路径

创建好之后，打开cmd执行下边两条命令，修改npm的默认配置：

```sh
npm config set prefix "D:\work\node-v10.15.1-win-x64\node_global" 
``` 

```sh
npm config set cache "D:\work\node-v10.15.1-win-x64\node_cache"  
```
 
配置环境变量二  
在系统变量下新建"NODE_PATH"，由于改变了module的默认地址，所以用户变量要跟着改变一下PATH，要不使用module的时候会导致输入命令出现“xxx不是内部或外部命令，也不是可运行的程序或批处理文件”这个错误。

node.js 的全局依赖模块的路径：  
**其路径中的node_modules 不用创建，在下载依赖模块时，会自动创建该文件夹，并将依赖模块存储在其中**

## 修改系统环境变量

将【用户变量】下的【Path】修改为【D:\Nodejs\node_global】，之后点击确定。

![](https://img-blog.csdnimg.cn/4146c5cb2a1245ef86492370258806d0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmFrc29uIFBlbmc=,size_20,color_FFFFFF,t_70,g_se,x_16)

在【系统变量】下新建【NODE_PATH】【D:\Nodejs\node_global\node_modules】

![](https://img-blog.csdnimg.cn/2647866ff7294160a70b9a17f7cc33fd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmFrc29uIFBlbmc=,size_20,color_FFFFFF,t_70,g_se,x_16)

在【系统变量】下的【Path】新建添加node全局文件夹【D:\Nodejs\node_global】，之后点击确定。

![](https://img-blog.csdnimg.cn/dbdfbf507a534296af15782df5689bfe.png)

ℹ️注：若执行命令npm install express -g 出现如下报错

![](https://img-blog.csdnimg.cn/2021072913154398.png)

是由于权限的原因，右击Nodejs文件夹->属性->安全，点击编辑，将所有权限都✔即可。

![](https://img-blog.csdnimg.cn/ccf26c20e4e04f3e9427609782ecc151.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5b2t5L28,size_20,color_FFFFFF,t_70,g_se,x_16)

## 更换npm源为淘宝镜像

说明：npm 默认的 registry ,也就是下载 npm 包时是从国外的服务器下载，国内很慢，一般都会指向淘宝 https://registry.npm.taobao.org。

1. 查看初始npm源，如图：

```sh
npm config get registry
```

![](https://img-blog.csdnimg.cn/0d4a04eb1e444bfa967cea870992549e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmFrc29uIFBlbmc=,size_15,color_FFFFFF,t_70,g_se,x_16)

2. 更换镜像为淘宝镜像

```sh
npm config set registry https://registry.npm.taobao.org/
```

![](https://img-blog.csdnimg.cn/3197de67ffeb4d64bd96db182f76e353.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmFrc29uIFBlbmc=,size_20,color_FFFFFF,t_70,g_se,x_16)

3. 查看配置是否成功 

```sh
npm config get registry
```

![](https://img-blog.csdnimg.cn/c1dd1461b9ff48e283747c5ac2e75980.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmFrc29uIFBlbmc=,size_17,color_FFFFFF,t_70,g_se,x_16)

## 全局安装基于淘宝源的cnpm

说明：由于npm的服务器在海外，所以访问速度比较慢，访问不稳定 ，cnpm的服务器是由淘宝团队提供 服务器在国内cnpm是npm镜像，一般会同步更新，相差在10分钟，所以cnpm在安装一些软件时候会比较有优势。但是一般cnpm只用于安装时候，所以在项目创建与卸载等相关操作时候我们还是使用npm。  

1. 全局安装基于淘宝源的cnpm

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

![](https://img-blog.csdnimg.cn/d15c9e52e08346daa073324b609e659a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmFrc29uIFBlbmc=,size_20,color_FFFFFF,t_70,g_se,x_16)

2. 下载完后，我们在本地就能看到cnpm模块

![](https://img-blog.csdnimg.cn/ee07e5f0c21643f4a274f3079a72c326.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmFrc29uIFBlbmc=,size_20,color_FFFFFF,t_70,g_se,x_16)

3. 执行命令查看cnpm是否安装成功

```sh
cnpm -v
```

如图，即代表cnpm环境配置成功。

![](https://img-blog.csdnimg.cn/5fe57a069ba447d6a4b14041585f7da4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASmFrc29uIFBlbmc=,size_20,color_FFFFFF,t_70,g_se,x_16)

### 安装nrm无法切换

换一个nrm：

```sh
npm i -g @adams549659584/nrm
```

```sh
nrm ls
```

```sh
nrm use taobao
```

```sh
nrm current
```
