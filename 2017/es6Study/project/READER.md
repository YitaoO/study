
## 关于自动化构建工具的各个文件目录说明

### 页面命名清单
* app:前端模块
    *  js
       * class:放置类文件
       * index.js:初始化入口文件
    *  css
    *  views
    *
* server：服务器模块

* tasks：构建脚本模块（创建任务的目录）
  * util:工具包(放置常见的脚本)
    * args.js:命令行工具
    * script.js:构建脚本，对js进行处理


* gulpfile.babel.js：用gulp进行构建工具

* .babelrc:设置babel编译工具配置文件，文件名必须这个，babel编译的时候会找这个文件

* package.json:常用的依赖包
