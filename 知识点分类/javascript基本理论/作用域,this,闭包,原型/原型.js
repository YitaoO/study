/* ============================================================
    此JS用于总结原型的一些概念和代码解释（*代表重要的程度）
============================================================ */
//1:对象在创建的时候都会有一个Prototype；当我们试图引用对象属性就会促发[Get]操作，如果对象本身没有这个属性，就会继续访问[Prototype]链
//2:想要创建一个关联对象，可以用：Object.create(proto [, propertiesObject ]) 是E5中提出的一种新的对象创建方式，第一个参数是要继承的原型，如果不是一个子函数，可以传一个null，第二个参数是对象的属性描述符，这个参数是可选的。
var anotherObject={
  a:2
}
var myObject=Object.create(anotherObject)
myObject.a //输出2

//3:注意:所有普通的[Prototype]都会最终指向Object.Prototype(**)
//4:Object.prototype(Object对象)常用的功能:toString(将当前对象以字符串的形式返回);valueOf();hasOwnProperty();isPrototypeOf()
//5:在js里面没有复杂机制；创建对象只是建立两个对象之间的关联，并不是复制；所以用“继承原型”就容易误解（继承意味着复制，js不会复制操作）
//6:委托：js会在两个对象之间创建一个关联，这样一个对象就可以通过委托访问另一个对象的属性和函数
//7:属性设置：如果实例化对象有该属性，就[get]操作，如果实例化对象没有，就直接把属性设置在实例化对象上，并且会把原型链对象上已有的属性屏蔽，因为实例化对象的属性总是选择原型链最底层的foo属性;所以如果想让原型链上的属性值发生改变，只能在原型链上给属性赋值
var anotherObject={
  a:2,
  b:3
}
var myObject=Object.create(anotherObject)
console.info("anotherObject.a="+anotherObject.a)
console.info("myObject.a="+myObject.a)
console.info(anotherObject.hasOwnProperty('a'))
console.info(myObject.hasOwnProperty('a'))
myObject.a++
console.info("anotherObject.a="+anotherObject.a)
console.info("myObject.a="+myObject.a)
console.info(anotherObject.hasOwnProperty('a'))
console.info(myObject.hasOwnProperty('a'))

//8:js只有对象而没有类的概念
//9：es6用了一种新的方法关联对象：Object.setPrototypeOf(Bar.prototype,Foo.prototype)
//10:判断实例化对象中的整条原型是否出现过原对象的原型链：Foo.prototype.isPrototypeOf(a)
//11:js中的[[prototype]]机制和累不一样，js只是简历对象间的关联,而类是复制
//12：所有的普通对象都有内置的Object.prototype,指向原型链的顶端
//13：关联两个对象最常用的方法是new
