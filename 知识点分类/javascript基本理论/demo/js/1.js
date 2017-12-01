/**
 * 闭包：方法的作用域不会消失，因为闭包引用，也就是函数一直保存着对作用域引用的闭包
 * 函数当做参数进行引用:只要使用了回调函数，实际上就是用了闭包
 */
{ //作用域查询
  function foo(){
    let a=2;
    function bar(){
      console.log(a);
    }
    bar()
  }
  foo()
}

{
  function foo(){
    let b=3;
    function bar(){
      console.log(b);
    }
    return bar;
  }
  let baz=foo()
  baz() //在函数的外面范围函数内部作用域，闭包的效果
}

{  //time方法可以访问message变量
  function wait(message){
    setTimeout(function timer(){
      console.log(`message=${message}`);
    },10000)
  }
  wait('hello world')
}
{
  // for (let i = 0; i <= 5; i++) {
  //   setTimeout(function timer(){
  //     console.log(i);
  //   }, i * 1000)
  // }
}
{
  function foo(){
    console.log(a);
  }
  function bar(){
    var a=7;
    foo()
  }
  var a=10;
  bar()

}
