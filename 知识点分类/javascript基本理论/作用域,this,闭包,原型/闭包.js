/* ============================================================
    此JS用于总结闭包的一些概念和代码解释（*代表重要的程度）
============================================================ */

//1:当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用 域之外执行。
//2:如果将函数(访问它们各自的词法作用域)当作第一 级的值类型并到处传递，你就会看到闭包在这些函数中的应用
//
/**
 * 一：闭包基础的原理
 * 1:当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用 域之外执行(它本质就是基于词法作用域来实现功能的)
 * 2:观察闭包的方法: 如果将函数(访问它们各自的词法作用域)当作第一 级的值类型并到处传递，你就会看到闭包在这些函数中的应用
 * 3:用处: 定时器；事件监听器 ；Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步(或者同步)任务中，只要使 用了回调函数，实际上就是在使用闭包
 */

{ //基础原理例子（基于词法作用域）
  function foo() {
    var a = 2;

    function bar() {
      console.info(a)
    }
    bar()
  }
  var baz = foo()
  baz()
}

{ //闭包真正的例子
  function foo() {
    var a = 2;

    function bar() {
      console.log(a);
    }
    return bar;
  }
  var baz = foo();
  baz();

}

{
  function wait(message) {
    setTimeout(function timer() {
      console.log(message);
    }, 1000);
  }
  wait("Hello, closure!");
}

/**
 * 二：闭包例子
 * 1:循环和闭包
 * 2:模块
 */

{ //循环
  for (var i = 0; i <= 5; i++) {
    setTimeout(function() {
      console.info(i)
    }, i * 1000);
  }
  //输出五次6；而不是分别输出1-5
}

{ //IIFE:声明并且立即执行一个函数创建一个作用域
  for (var i = 1; i <= 5; i++) {
    (function() {
      var j = i;
      setTimeout(function timer() {
        console.log(j);
      }, j * 1000);
    })();
  }
}

{ //块作用域
  for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  }
}

// 模块例子
{
  function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
      console.log(something);
    }

    function doAnother() {
      console.log(another.join(" ! "));
    }
    return {
      doSomething: doSomething,
      doAnother: doAnother
    }
  }
  var foo = CoolModule();
  foo.doSomething(); // cool
  foo.doAnother(); // 1 ! 2 ! 3
}
//7：模块：必须有外部的封闭函数（该封闭函数必须至少调用一次，也就是实例化），封闭函数必须至少返回一个内部函数（这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的方法和属性）
//8:es6中模块的使用是使用 :export xxx和import hello from '.hello'来使用模块的（***）
