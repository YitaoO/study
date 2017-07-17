/* ============================================================
    此JS用于总结'类型和语法'的一些概念和代码解释（*代表重要的程度）
============================================================ */
/**
 * 类型
 */
//1:内置六中类型:控制(null),未定义(underfined),布尔(boolean),数字(Number),字符串(string),对象(object),符号(symbol,es6新增)
//2:除了对象外，其他的都称为基本类型
//3:可以用typeof检测类型,返回布尔值
typeof underfined === "underfined" //true
typeof true === "boolean" //true
typeof 42 === "number" //true
typeof "42" === "string" //true
typeof {life:42} === "object" //true
typeof Symbol() === "symbol" //true
//4:注意：typeof null === "object" //true  返回true实际上是一个bug
//5:object子类型：数组，函数
//6:js中变量是没有类型的，而变量的值才有，使用typeof返回的是该变量的值的类型，而不是变量的类型，因为值的类型可能会变，当重新设置值的内容时值类型会跟着变化
//7：变量在未赋值的时候会返回underfined
//8:声明可是还没有赋值是underfined;可是在作用域中没有声明就会返回:undeclared
//9:underfined和浏览器中返回的"is not defined"是两回事，浏览器中的"is not defined"实际上是“undeclared”，未定义
//10:安全防范机制,防止报错
if(typeof aaa === "underfined"){
  aaa=function(){

  }
}

/**
 * 值
 */
//1:字符串不可变是指字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符串，而数组的成员函数都是在其原始值上操作的（）
//2：可以用数组函数来处理字符串，虽然字符串没有这些函数，可以用通过借用的方法：Array.prototype.call(a,'-')
//3:字符串反转:a.split("").reverse().join(""),很好的利用了数组的特性
//4：toFixed()可以指定数字小数显示位数
//5:检测一个数是否为整数:isInteger()
//6:不是数字的数字:var a=2 /"foo" //返回NaN ;类型仍然是number，可是它是一个错误的值
//7:NaN是js中唯一一个和自身不相等的值
//判断一个值是否是NaN的方法，不要使用:isNaN()
if(!Number.isNaN){
  Number.isNum=function(n){
    return n !==n
  }
}
//8:基本数据类型总是通过复制的方式赋值（传递）,而复合值（对象->数组，函数）总是通过引用复制的方式来赋值/传递,重点理解引用和复制的区别

/**
 * null和underfined区别
 */
null //曾赋予过值，现在没有
underfined //从未赋予过值
//null是一个关键字，不是标识符；underfined可以当做标识符
//void a :让表达式不返回值，并不改变值结果
var a=42
console.info(void a,a) //underfined,42
