/* ============================================================
    此JS用于总结vue基本的概念(vue-cli脚手架)
============================================================ */

//1:运行项目命令:npm run dev
//2:目录结构
index.html //默认启动页面
package.json //npm 包配置文件
sre-App.vue //启动组件
sre-main.js //vue实例启动入口
webpack.json //webpack配置文件

/**
 * 具体约定
 */
 //1:src下分别放的目录:公共组建(components);指令(directives);过滤器(filters)
 //2:以使用场景命名Vue页面文件
 //3:当页面文件具有是有组件，指令和过滤器的时候，则建立一个与页面相同的目录，页面名字更名为index.vue，将页面和相关依赖文件放在一起
 //4:vue文件以驼峰命名，仅入口采用index.vue小写
 //5:测试文件一律以测试目标文件名.spect.js命名
 //6:资源文件一律以小写字符命名，有两个以上的词组成，用'-'进行分隔
 src
   README.md

   assets          //全局资源目录
      images       //图片
      less         //less样式表
      css          //css样式表
      fonts       //自动以字体文件

  components     //公共组件目录
    ImageInput.vue
    Slider.vue

  directives.js   //公共指令

  filters.js      //公共过滤器

  login           //场景：登录
    index.vue     //入口文件
    LoginForm.vue


  Discover.vue   //场景入口
  App.vue        //默认程序入口
  main.js


/**
 * webpack 模板
 */
//1:build：存放用于编译用的webpack配置与相关的辅助文件代码
//2:config：存放三大环境配置文件，用于设定环境变量和必要的路径信息
//3:test:存放E2E测试与单元测试文件以及相关的配置文件
//4:static:存放项目所需的其他静态资源文件
//5:dist:存放运行npm run build指令后的生产环境输出文件，可直接部署到服务器对应的静态支援文件夹内，改文件夹只有在运行build之后才会生成

/**
 * 构建工具
 */
//1:编译开发环境:npm run dev(这个指令是在package.json的script属性配置的)，它是指是有npm来引导执行入口程序dev-server.js文成下面的加载过程
加载环境变量-合并webpack配置-配置热加载-配置代理服务-配置回退支持-配置静态资源-加载开发服务器
//加载环境变量:从config中加载index.js和dev.env.js两个模块，准备开发调试环境所需要的一些目录和全局变量
//合并webpack配置：使用webpack-merge的包将两个webpack配置进行合并（开发用:base,dev这两个配置）
webpack.base.conf.js:公用的基本webpack配置
webpack.dev.conf.js:开发环境专用的webpack配置项
webpack.prod.conf.js:生产环境专用的webpack配置项
//配置热加载:用于方便调试用
//配置代理服务:为我们的代码增加一个模拟的服务器做准备，有了它，在没有后端支持的情况下，直接模拟原创服务器执行一些请求效果；也就是可以模拟接口
//配置静态资源:将突破，字体，样式表和编译后的js脚本，生成对应的一些印记并存放到有开发服务器托管的static目录下，使得我们在浏览器中可以正常访问到这些资源，每个生成的文件Footprint是一些哈希代码，当文件内容发生变化这些哈希代码就会发生变化
//加载开发环境:启动一个express的Web服务器，将上述只各个环境好的模块进行加载，并使浏览器可以访问

//2:编译生产环境:npm run build：首先对必要的资源文件进行打包加上FootPrint，然后对监本进行编译，压缩和包大小分割


/**
 * webpack基本概念
 */
 //1:webpack是一个模块打包工具，它的作用是把相互依赖的模块处理成静态资源
 //2:webpack目标:
   把依赖树按需分割
   把初始加载时间控制在较低的水平
   每个静态资源都应该成为一个模块
   能把第三方库集成到项目里成为一个模块
   能定制模块打包器的每个部分
   能使用大型应用

//3:webpack特点:
    代码分割
    加载器：把其他代码转化为javascript代码，所有种类的代码都能组成一个模块；我们可以轻松在代码内通过impor将webpack打包的资源以模块的方式引入到程序中
    vue常用的加载器
      vue-loader:用于加载与编译*.vue文件
      vue-style-loader:用于加载*.vue文件中的样式
      style-loader:用于将样式直接插入到页面的<style>内
      css-loader:加载*.css样式表
      less-loader:加载和编译*.less文件（依赖less库）
      babel-loader:将es6编译成为浏览器兼容的es5
      file-loader:直接加载文件
      url-loader:加载URL指定文件,多用于字体与图片的加载
      json-loader:加载*.json文件为js实例

    智能解析:解析器几乎可以处理所有第三方库，允许依赖库中出现：require("./components/"+name+".vue"),这一点browserify无法实现
    插件系统：丰富的插件

/**
 * webpack基本用法
 */
 //1:打包方式依赖一个重要的配置文件:webpack.config.js,这个配置文件可以指定所有的源代码在编译中工作
 //2:样式表引用:import './app/assets/style.less',只需要在webpack配置中加入less-loader,打包会自动把less转换成css，将css的动态代码生成到js文件中
 //3:字体的引用：只需要在配置文件中配置url-loader
 //4:用别名取代路径引入:一些资源的路径引入过长，违反commonjs编码规范，可以在webpack中通过resolve配置项解决;绝对不要将路径引入我们的代码中，因为以后很难维护，直接将路径写在webpack.配置中
 //5:配置多入口程序:告诉webpack有几个入口，这些文件被生成到启动页的<script>内;vue-cli是用了HtmlWebpackPlugin插件

/**
* 单元测试
*/
//1:基本流程
  编写单元测试代码:组件名称，属性接口，断言工具确定衡量组件是否正确标准
  编写组件代码:一单元测试作为引导程序，编写组件真是的实现代码，让测试通过
  运行测试，并看到测试通过
  重构
//2:Karma完成任务（Karma只是一个运行器，所以需要配置测试框架:Mocha,Jasmine等单元测试代码）
   为测试程序注入依赖包
   可同时在一个或多个浏览器宿主中执行测试，满足兼容性测试需要
   执行代码覆盖性测试
   输出检测结果
   执行自动化测试
   初始化karma环境:karma init
   启动karma:karma;vue-cli进行了封装，用npm run unit

//3:基于Nightwatch的端到端测试环境（单元测试只是简答侧重于检测函数输出），而Ni更注重的是一种用户交互的体验性
