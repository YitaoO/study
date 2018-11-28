/* ============================================================
    此JS用于总结this的一些概念和代码解释（*代表重要的程度）
============================================================ */
//1:this在任何情况下都不会指向词法作用域，使用this不可能在词法作用域只查到什么。所以this.bar()中并不能查到bar()词法作用域中的属性
//2:this是在运行时绑定的，而不是在在编写时绑定的(**)
//3:this的绑定和函数声明的位置没有任何关系，完全取决于函数在哪里被调用（而不是声明的位置）(**)
//4:基本概念：一个函数别调用时，会创建一个活动记录（执行上下文）,这个记录会有何时被调用，调用方式，传入的参数等信息，this就是这个记录的一个属性，会在函数执行的时候被调用
//4:调用栈：在开发者工具中断点：call stack中就可以看出当前函数的调用栈，如果想分析函数在上面地方调用，看调用栈中第二个元素，就知道在哪里调用（**）


/**
 * 一：使用this原因：使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用 this 则不会这样
 * @type {Number}
 */
{
  function identify(context) {
    return context.name.toUpperCase();
  }

  function speak(context) {
    var greeting = "Hello, I'm " + identify(context);
    console.log(greeting);
  }
  identify(you); // READER
  speak(me); //hello, 我是 KYLE
}

/**
 * 二:this常见当两个误区
 * 1:并不总是指向自身
 * 2:有时候不指向函数作用域
 * 3:任何时候都不指向词法作用域
 * @type {Number}
 */
{
  function foo(num) {
    console.log("foo: " + num);
    // 记录 foo 被调用的次数
    this.count++;
  }
  foo.count = 0;
  var i;
  for (i = 0; i < 10; i++) {
    if (i > 5) {
      foo(i);
    }
  }
  // foo: 6
  // foo: 7
  // foo: 8
  // foo: 9
  // foo 被调用了多少次?
  console.log(foo.count);
}


{ //词法作用域当用法
  function foo(num) {
    console.log("foo: " + num);
    // 记录 foo 被调用的次数
    data.count++;
  }
  var data = {
    count: 0
  };
  var i;
  for (i = 0; i < 10; i++) {
    if (i > 5) {
      foo(i);
    }
  }
  // foo: 6
  // foo: 7
  // foo: 8
  // foo: 9
  // foo 被调用了多少次?
  console.log(data.count);
}

{ //错误用法

  function foo() {
    var a = 2;
    this.bar();
  }

  function bar() {
    console.log(this.a);
  }
  foo(); // ReferenceError: a is not defined
}


/**
 * 三:基本概念：This是在运行时绑定的，而不是在编写时绑定的（这和词法作用域有本质的区别）
 * 1:上下文只是取决与调用的各种条件，this的绑定和函数声明没有任何的关系
 * 2:当一个函数被调用时，会创建一个活动记录(有时候也称为执行上下文)。这个记录会包 含函数在哪里被调用(调用栈)、函数的调用方法、传入的参数等信息。this 就是记录的 其中一个属性，会在函数执行的过程中用到。
 */


/**
 * 四:全面分析this
 * 1:调用位置:你可以在工具中给 foo() 函数的 第一行代码设置一个断点，或者直接在第一行代码之前插入一条 debugger; 语句。运行代码时，调试器会在那个位置暂停，同时会展示当前位置的函数 调用列表，这就是你的调用栈。因此，如果你想要分析 this 的绑定，使用开 发者工具得到调用栈，然后找到栈中第二个元素，这就是真正的调用位置。
 */

{ //分析调用位置
  function baz() {
    // 当前调用栈是:baz
    // 因此，当前调用位置是全局作用域
    console.log("baz");

    bar(); // <-- bar 的调用位置
  }

  function bar() {
    // 当前调用栈是 baz -> bar
    // 因此，当前调用位置在 baz 中
    console.log("bar");
    foo(); // <-- foo 的调用位置
  }

  function foo() {
    // 当前调用栈是 baz -> bar -> foo // 因此，当前调用位置在 bar 中
    console.log("foo");
  }
  baz(); // <-- baz 的调用位置
}

/**
 * 五:this绑定的四条规则
 * 1:默认绑定:独立函数调用（无法用其他规则）;默认绑定中的this指向全局对象(⚠️在严格模式下，全局对象将无法使用默人绑定)
 * 2:隐式绑定：调用位置是否拥有上下文对象（也就是说是否被某个对象拥有或者包含）:隐私绑定会把函数调用中的this绑定到这个上下文对象中（这里也就是obj对象）（注意：对象属性引用链只有上一层或者最后一层在调用位置中起作用）
 * 3:显性绑定：使用call（）或者apply()方法；把要绑定在那个对象里面直接写在括号里面（比如foo.call(obj)）
 * 4:new绑定：
 */
{ //默人绑定
  function foo() {
    console.log(this.a);
  }
  var a = 2;
  foo(); // 2
}

{ //严格模式下无法使用默人绑定

  function foo() {
    "use strict";
    console.log(this.a);
  }
  var a = 2;
  foo(); // TypeError: this is undefined
}

{ //隐性绑定

  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 2,
    foo: foo
  };
  obj.foo(); // 2
}

{ //显性绑定
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 2
  };
  foo.call(obj); // 2
} { //new绑定
  function foo(a) {
    this.a = a;
  }
  var bar = new foo(2);
  console.log(bar.a); // 2
}

/**
 * 六:new调用函数的四个过程:包括内置函数（比如:Number()）在内的所有函数都可以用new来实现，这种函数调用方式叫做构造函数调用（所以实际上并不存在所以的构造函数，只是对函数的够着调用）
 * 1：创建一个新的对象；
 * 2：这个新对象会 被执行[[Prototpye]]连接；
 * 3：这个新对象会绑定到函数调用的this;
 * 4:如果函数没有返回其他对象，呢么new表达式中的函数调用会自动返回这个新对象
 */



//5:new绑定：
//6:注意：
//7:使用 new调用函数，会有四个过程（）(***)
function foo(a) {
  this.a = a
}
var bar = new foo(3)
console.info(bar) //输出3

/**
 * 七：四个规则的优先级
 */
//1：是否有new，如果有的话this就绑定的是新创建的对象（var bar =new foo()）
//2:函数是否有call,apply(显示绑定)，如果有，this绑定到指定的对象(var bar =foo.call(obj))
//3:函数是否在某个上下文中调用（隐性绑定，也就是是否绑定到某个对象中）,如果是，this指向绑定的对象中(var bar =obj1.foo())
//4:如果都不是，就是默认绑定(var bar=foo())

//5:箭头函数并不会使用默认的四条规则，而是更具当前的词法作用域来决定this(也就是说箭头函数会根据外层函数调用的this绑定)，这种机制其实是和之前的self=this一样
