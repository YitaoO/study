/* ============================================================
    此JS用于总结对象的一些概念和代码解释（*代表重要的程度）
============================================================ */
//1:创造方式：文字形式（var a={}）;构造形式(var a=new Object())，构造形式需要逐个添加属性
//2:类型:string,number,boolean,null,underfined,object
//3：注意：简单基本类型本身不是对象(string,number,boolean,null,underfined)
//4：函数和数组是对象的一个子类型
//5：内存对象（也就是对象的子类型）:String,Number,Boolean,Object,Function,Array,Date,RegExp,Error
//6：内置对象可以通过构造函数来使用，也就是new实例化
//7：type和instanceof区别：两者都可以判断类型;type会返回一个变量的基本类型；instanceof返回一个布尔值，只能用来判断对象和函数，不能用来判断数字和字符串
//8:一般情况下'i am string'只是一个字符串，是一个不可变的值，而不是字符串对象！如果想要获取长度，访问其中某个字符串，就需要妆花为String，我们之所以可以操作字符串，只是因为js会自动把字符串字面量转化为String对象
//9:访问属性对象的两种方法:myObject.a;myObject["a"]
//10:可计算的属性名:var a='foo';var myObject={[a+"bar"]:"hello"}->myObject["foobar"]
//11:es6用了Object.assign({},myObject) 来实现浅复制，第一个参数是目标对象，之后可以跟一个或者多个源对象
//12:es6中的Object.getOwnPropertyDescriptor(object, propertyname)可以设置属性（可写，可枚举，可配置）或者用defineProperty；也就是属性描述符
//14:使用 new调用函数，会有四个过程（1：创建一个新的对象；2：这个新对象会 被执行[[Prototpye]]连接；3：这个新对象会绑定到函数调用的this;4:如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象）(***)
var myObject={}
Object.defineProperties(myObject,"a",{
  value:2,
  writable:true,
  configurable:true,
  enumerable:true //是否会出现在循环中
})
//13:遍历:使用for(var v of myObject)会比for(let i=0;i<myObject.length;i++)好用；因为用第二种只是遍历下标来指向值，而并不是便利值
var myArr=[1,2,3,4]
for(var v of myArr){
  console.info(v)
}
