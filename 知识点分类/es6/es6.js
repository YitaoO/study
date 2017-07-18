/* ============================================================
    此JS用于总结es6的一些概念和代码解释（*代表重要的程度）
============================================================ */
/**
 * export与export default的区别
 */
 //1:两者都可以导出常量、函数、文件、模块；都可以通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入
 //2:一个文件或模块中，export、import可以有多个，export default仅有一个。
 //3:export需要花括号
export const str = 'hello world'
export function f(a){
    return a+1
}
import { str, f } from 'demo1' //也可以分开两次引入
//4:export default不需要花括号
export default const str = 'hello world'
import str from 'demo1' //导入的时候没有花括号

//5:let声明变量
  块级作用域
  不存在变量提升
  不允许重复声明
//6:const:声明常量
  也是块级作用域
  不存在重复声明，不存在变量提升
  只限定地址不能改变；所以如果声明的目标是对象,属性是可以改变的，所以如果要使对象为常量的话可以配合Object.freeze()实现;freeze只能保证它的属性不被修改，而不能保证属性的属性不被修改，如果要改属性的属性，只能自定义强度冻结方法
  const foo=Object.freeze({a:1})

  //深度冻结函数
  Object.deepFreeze=function(object){
    Object.freeze(object)
    Object.keys(object).forEach(function(key){
    if (typeof(object[key])=='object')
      return Object.deepFreeze(object[key])
    })
  }
  const foo=Object.freeze({a:[1]})
  foo.a.push(2)
  console.info('a='+foo.a) //可变
  const foo2=Object.deepFreeze({a:[1]})
  foo2.a.push(3)
  console.info('foo2.a='+foo2.a) //不可变

//7:全局对象：在浏览器中指window对象；在node指global对象
   es5中全局变量都是全局对象的属性
   es6中:var命令和function命令声明的全局变量，都属于全局对象的属性;let,const,class命令声明的全局变量，不属于全局对象的属性

//8:es6新增的赋值:批量地从对象（或数组）中提取出相应的值赋值到一组对应的变量上
  //数组解析赋值
  var [a,b] =[1,2,3]
  //相当于
  var a=1,b=2,c=3

  //对象解析赋值
  var {foo,bar}={foo:'aaa',bar:'bbb'}
  foo //aaa
  bar //bbb

//9:字符串扩展
  传统判断是否包含字符串:indexOf()
  //es6新增：
  includes():返回布尔值，是否找到参数
  startsWith():返回布尔值，是否在字符串头部
  endsWith():返回布尔值，是否在元字符串的尾部
  repeat():返回新的字符串，表示将原字符重复n次-> "x".repeat(3):"xxx"
//10:数组扩展  
