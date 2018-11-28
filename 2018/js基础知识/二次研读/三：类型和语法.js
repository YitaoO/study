/**
 * 一：类型
 * 1:内置类型：除对象外，其他都是基本类型
 * 2:值和类型:变量没有类型，值才有；变量可以随时持有任何类型的值
 * 3:值
 */

/**
 * 1.1:特殊情况:null 检查是一个object类型，是一个bug
 * 1.2function:检查类型为function;实际是object的一个子类型;由于又一个内部属性[[call]],所以可以被调用;函数对象的length是参数个数
 * 1.3:数组:也是对象的一个子类型:元素按数字顺序来索引,length是元素个数
 */
{
  //1:内置类型

  为定义(undefined) === typeof('undefined') ->true
  布尔值(boolean) === typeof('boolean') ->true
  数字(number)  === typeof('number') ->true
  字符串(string) === typeof('string') ->true
  对象(object)  === typeof('Object') ->true
  符号(symbol)  === typeof('symbol') ->true
}
{
  //1.1:特殊情况
  空值(null)  === typeof('object') ->true (一个bug)

}
{
  //1.2function
  typeof(function a(){}) ==='function' // true
  function a(b,c){}
  a.length //2
}
{
  //1.3：数组
  typeof([1,2,3]) === 'object' //true
}

/**
 * 2.1:typeof返回的是变量值的类型，而不是变量;typeof总是会返回一个字符串
 * 2.2:没有值:undefined;undefined:未声明
 * 2.3:判断某个对象是否存在，特别是是否已经引入某个组件可以用typeof aaa === 'undefined';进行防止报错
 */
{
  var a=42;var b=true;
  typeof(a) //'number'
  typeof(b) //'boolean'
  typeof typeof(a) //'string'
}
{
  //2.2
  var a
  typeof(a) //'undefined'
  b //'undefined'
}
{
  //2.3
  if(typeof dialog === 'undefined'){
    dialog=function(){

    }
  }
}

/**
 * 3.1.1:数组:通过数字进行索引(也可以通过字符串键值访问索引值)(使用对象来存放键值，用数字索引存放数组*)
 * 3.1.2:数组可以由数字，字符串，对象，或者其他数组组成
 */
{
  //数组
  let arr=[1,'2',[2]]

}
