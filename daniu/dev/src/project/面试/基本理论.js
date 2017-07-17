/* ============================================================
    此js用于面试中用到的基本理论
============================================================ */

/**
 * 基本概念
 */
//1:检验类型的方法:typeOf
//2:类型:string(字符串),boolean(布尔),number(数字),object(对象),underfined
//3:强制转化类型:parseInt(解析字符串，返回整数),parseFloat(解析字符串，返回浮点数),Number(转化为数字类型)
//4：隐性转化类型:(==,!!)
//5:js的本地对象(本地对象:array,object,regexp等可以new实例化的对象)，内置对象(gload,Math等不可以new实例化的对象)，宿主对象（浏览器自带的对象:window,document）
//6:==和===的区别(==会自动转换类型;===不会)
//7：javascript的同源策略：一段脚本只能来源于同一窗口和文档属性,这里的同一策略指的是同一主机名端口号协议
//8:javascript属于什么语言：脚本语言，动态类型，弱型，基于原型的语言（特点：解释性脚本，向html页面添加交互行为，可以单独嵌入js文件，跨平台语言）
//9：数据类型（基本类型:string,number,boolean,underfined,null;引用类型:array,Date,RegExp,function等）
//10：null和underfined(null:表示没有对象，此处不应该有值;underfined:表示缺少值，表示此处应该有个值)
//11:dom模型常用的四个对象（window.location,document,screen,history,navigator,screen）
//12:window对象常用方法(alert(), confirm(), prompt(), open(), close())
//13:有哪些方式会造成内存泄露:setTimeout第一个参数使用字符串而不是使用函数；用了闭包；控制台日志；循环
//14：事件委托：利用冒泡原理，把事件交给父元素


/**
 * 函数
 */
//1:创建函数的几种方式
function sum(a,b){ //函数声明
  return a+b;
}
var a=function(a,b){ //函数表达式
  return a+b;
}
var sum3=new Function("num1","num2","return num1+num2"); //函数对象方式

//2:函数如何实现集成（原型，构造，实例）

/**
 * 对象
 */
//1:创建对象的几种方式
var a={ //json创建

}
var object =new Object() //通过Object创建
object.name="aaa"
object.actjion=function(){}

var aaa=function(){ //通过 this函数
  this.name="fff"
  this.action=function(){}

}
function obc(){} //通过prototype关键字
obc.prototype.name="vvv"
obc.prototype.action=function(){}

var str=new String("实例化string对象") //通过内置对象

/**
 * 数组操作
 */
//1:split(字符串分割为字符串数组)
//2:join(数组转化为字符串)
//3:Push(尾部添加),pop(尾部删除)
//4:Unshift(头部添加), shift(头部删除)
//5:concat(合并数组)
//6:substring(截取)
var a="get-element-me";
var aArr=a.split('-') //字符串转化为数组
for(var i=0;i<aArr.length;i++){
  aArr[i]=aArr[i].charAt(0).toUpperCase()+aArr[i].substr(1,aArr[i].length-1); //把数组里面的第一个字母变为大写

}
msArr=aArr.join("") //数组变为字符串


var arr=[4,1,8,5,2,7]
arr.reverse() //倒序
arr.sort(function(a,b){return b-a}) //降序排序 [8,7,5,4,2,1]

//合并两个数组并且删除第二个元素
var arr1=[1,2,4];
var arr2=[6,7,8];
var arr3=arr1.concat(arr2)
var arr4=arr3.splice(1,1)

/**
 * 闭包:能够读取其他函数内部变量的函数，本质上来讲是将函数内部和函数外部链接起来的一座桥梁
 */


/**
 * 事件
 */
//1:普通事件和绑定事件的区别:普通事件（不支持多事件绑定，下面的事件会覆盖上面的事件）;绑定事件（添加事件可以多个;addEventListenr还支持事件捕获和时间冒泡）
var btn=document.getElementById('id');
btn.onclick=function({  //普通事件
  console.info("aaa")
})
btn.onclick=function({
  console.info("bbb")
})
//只输出bbb
btn.addEventListenr('click',function(){
  console.info("aaa")
})
btn.addEventListener('click',function(){
  console.info("bbb")
})
//依次输出aaa,bbb

//2:ie事件流（冒泡事件:button->div->body）;Dom事件流(先捕获后冒泡:body->div->button->div->body);区别:执行顺序，参数不一样，事件加不加on，this指向问题
//IE使用:
[Object].attachEvent("name_of_event_handler", fnHandler); //绑定函数
[Object].detachEvent("name_of_event_handler", fnHandler); //移除绑定
//DOM使用：
[Object].addEventListener("name_of_event", fnHandler, bCapture); //绑定函数
[Object].removeEventListener("name_of_event", fnHandler, bCapture); //移除绑定
//bCapture参数用于设置事件绑定阶段true捕获阶段false冒泡阶段

//3:如何阻止事件冒泡和默认事件（canceBubble:只支持ie；return false;stopPropagation()）

//4:window.onload和document.ready的区别
//时间不同:onload必须等页面包含图片所有元素下载完才显示;ready只需dom结构绘制完成后就执行
//编辑个数:onload只可以编辑一个，编辑多个后面的覆盖前面的;ready可以编辑多个，而且都会执行
//简便写法:onload没有简答写法;ready简答写法是$(document).ready(function(){})或者(function(){})

//4:js事件流：冒泡，捕捉，Dom

//5:Dom点击希望执行一个方法
<div onClick="test()"></div> //在dom接口中
xxx.onClick=test  //在js中
addEventListener(xxx,'click',test) //通过时间绑定




/**
 * Dom操作
 */
//1:Don节点操作
Obj.appndChild() //添加节点
Obj.removeChild //删除
Obj.replace() //替换
Obj.insertBefore()//插入到某个节点
//2:已知input的id，如何获取它的值
var val=document.getElementById("id").value
//3:如何获取页面中的所有checkBox
var inputAll=document.getElementByTagName("input");
var destArr=[];
var inputLenth=inputAll.length;
for(var i=0;i<inputLenth;i++){
  if(inputAll[i].type=='checkBox'){
    destArr.push(inputAll[i])
  }
}
//4:设置一个已知id的html 内容，并且设置颜色
var id=document.getElementById('id')
id.innerHtml("...")
id.style.color='red'


/**
 * 代码输出
 */
var a;
alert(a) //underfined
alert(b) //报错
//underfined是一个只有一个值的数据类型；如果定义了一个变量可是没有赋值，那么这个变量的值就是underfined
//如果一个变量没有被生命，就直接报错

var a=null;
alert(typeOf a) //object

var a=new Object();
a.value=1;
b=a;
b.value=2
alert(a.value) //2
//a是一个引用数据类型，引用数据类型变量保存的实际上是一个指针，这个指针指向内存中实际的值（**）

//输出今天的日期,以YYYY-MM-DD的格式
var now=new Date();
var year=now.getFullYear();
var month=now.getMonth()<10?'0'+now.getMonth():now.getMonth();
var day=now.getDay()<10?'0'+now.getDay():now.getDay();
var all=year+'-'+month+'-'+day

foo =foo || bar -> if(!foo) foo=bar //如果foo存在，foo等于foo，否则foo等于bar

var foo =111;
(function(){
  alert(foo) ->  var foo; alert(foo);
  foo =2
  alert(foo)
})()  ///???谷歌打印出第一次是111；这里有疑问
//输出underfined和2；因为函数声明和行数变量会隐式的被提升到当前作用域的顶部，只是提升变量而不会提升值，所以第一次输出是underfined

function d(){  //函数里面的this是指向全局
		console.log(this);
}
d();//输出window对象

/**
 * 开发常见问题
 */
//1:iframe作用（优点：解决加载缓慢的第三方内容的图标和广告的加载问题,Security sandbox,并行加载脚本;缺点:阻塞onload事件，即时内容为空，也会加载，没有语义）
//2：cookie的缺点：数量和长度限制，安全性问题（被拦截的话可以截取信息，有些状态不可能保存在客户端）
//3：document.write(只能重绘整个页面);innerHTML:重绘一部分，不会重绘整个页面
//4:window.location.search(查询参数部分，我们可以用这个来获取参数的值)
//5：window.location.hash:返回#后面的值，即锚点
//6：window.location.reload():刷新当前页面
