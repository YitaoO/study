/* ============================================================
    此JS用于总结'行为委托'的一些概念和代码解释（*代表重要的程度）
============================================================ */

//1:概念：委托行为意味着某对象在找不到属性或者方法的时候会把这个请求委托给另一个对象;这和类的继承有本质的区别
//第一种方式
 function Foo(who){
   this.me=who
 }
 Foo.prototype.identify=function(){
   return "I am "+ this.me
 }
 function Bar(who){
   Foo.call(this,who)
 }
 Bar.prototype=Object.create(Foo.prototype)
 Bar.prototype.speak=function(){
   console.info("Hello," +this.identify()+".")
 }
 var b1=new Bar("b1")
 var b2=new Bar("b2")
 b1.speak()
 b2.speak()
 //第二种方式:这是用三者关联的方式来进行继承，代码更简洁更好用  
 Foo={
   init:function(who){
     this.me=who
   },
   identify:function(){
     return 'I am ' + this.me
   }
 }
 Bar=Object.create(Foo)
 Bar.speak=function(){
   console.info("Hello," +this.identify() +'')
 }
 var b1=Object.create(Bar)
 b1.init("b1")
 var b2=Object.create(Bar)
 b1.init("b2")
 b1.speak()
 b2.speak()
