/**
 * es6总结:语法
 */
/**
 * 一:块作用域
 * 1:块作用域:es6前，创建块作用域除了函数生命外，就是立即调用函数
 * 2:es6块作用域{let a=1;} ;把块作用域放在左括号同一行，目的只是为了声明块作用域
 * 3:在let 声明/初始化之前访问let 声明的变量会导致错误。而var顺序就无关紧要
 * 4:let和for的结合使用
 * 5:const创建常量。可以帮助我们发现不想出现的变化。如果指向的是一个引用（对象，数组）,是可以变的
 */
{ //IIFE块作用域
  var a=2;
  (function(){
    var a=3;
    // console.log(a);
  })() // 3
  // console.log(a); //2

}
{ //2:块作用域
  { let a=2,b=3,c=4;

  }
}
{
   //3
   // console.log(a); //undefined
   // console.log(b);  //ReferenceError
   var a;
   let b;
}
{∏
  //4:
  var funs=[];
  for(let i=0;i<5;i++){
    funs.push(function(){
      // console.log(i);
    })
  }
  funs[3]() //3
}

/**
 * 二:...运算符
 * 1:spread/rest:es6新的运算符:...
 * 2:代替apply的方法：把一个数组展开为一组函数调用参数 --->展开***
 * 3:在其他上下文中展开一个值:替代了concat()
 * 4:反向用法:把一系列值收集到一起成为一个数组
 * 5:...args:收集其余的参数(rest参数):args是真正的数组,用来代替arguments类数组的用法--->收集***
 * 6:收集值
 */
{
   //2
  function foo(x,y,z){
   // console.log(x,y,z);
  }
  // es6前
  foo.apply(null,[1,2,3])
  //es6
  foo(...[4,5,6])
}
{
  //3
  var a=[1,2,3]
  //concat
  // console.log([4].concat(a,[9]));
  // es6
  var c=[4,...a,8]
  // console.log(c);
}
{
  //4
  function foo(x,y,...z){
    // console.log(x,y,z);
  }
  foo(1,2,3,4,5,6)
}
{
  //5
  function foo(...args){
    // console.log(args);
  }
  foo(1,2,3,4,5,6)
}
{
  //5
  function foo(...args){ //es6前arguments用法
    var args=Array.prototype.slice.call(arguments)
    args.push(4,5)
    bar.apply(null,args)
  }
  function bar(...args){ //es6
    args.shift() //去除第一个元素
    // console.log(...args);
  }
  foo(1,2,3);
}
/**
 * 三:设置默认参数值和默认表达式
 * 1:默认值
 * 2:默认表达式
 */
{
  //1
  function foo(x=11,y=33){
    // console.log(x+y);
  }
  foo() //44
  foo(5,undefined) //38(丢了undefined)
  foo(null,6) //17(null被强制转化为0)
}
{
  function bar(val){
    // console.log('hello world!');
    return y +val
  }
  function foo(x=y+3,z=bar(x)){
    // console.log(x,z);
  }
  var y=5
  foo()  //"hello world"  8,13
  foo(10) // "hello world" 10,15
  foo(undefined,10) //8,10
}

/**
 * 四:解构:结构化赋值(数组解构，对象解构)
 * 1:手动赋值需要创建一个临时变量
 * 2:数组解构:var [a,b,c]=foo()
 * 3:对象解构:var {x:x,y:y,z:z}=bar():(:号后面的是新定义的变量***)
 * 4:平常赋值和解构赋值的区别:平常赋值(target->source)解构赋值(source->target)***
 */

{//手动赋值
  //数组
  function foo(){
    return [1,2,3]
  }
  var tmp=foo(),
  a=tmp[0],b=tmp[1],c=tmp[2]
  // console.log(a,b,c);

  //对象
  function bar(){
    return {
      x:4,
      y:5,
      z:6
    }
  }
  var tmp1=bar(),
  d=tmp1.x,e=tmp1.y,f=tmp1.z
  // console.log(d,e,f);
}
{ //解构赋值
  //数组
  function foo(){
    return [1,2,3]
  }
  var [a,b,c]=foo()
  // console.log(a,b,c);
  //对象
  function bar(){
    return {
      x:7,
      y:8,
      z:9
    }
  }
  var {x:o1,y:o2,z:o3}=bar()
  // var {x,y,z}=bar() //如果属性名和赋值变量的名字一样，这样写更简便
  console.log(o1,o2,o3);
  console.log(x,y,z);
  console.log();

}

/**
 * 五:对象字面量扩展
 * 1:简洁属性：属性名和变量相同，可以省略
 * 2:简洁方法
 */
{
  //1
  var x=2,y=3
  o={ //以前
    x:x,y:y
  }
  o={ //现在
    x,y
  }
}
{
  //2
  var o={ //以前
    x:function(){

    },
    y:function(){

    }
  }
  var o={ //现在
    x(){

    },
    y(){

    }
  }
}
