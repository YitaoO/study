{ //默认表达式语法
  //无法理解这段代码
  var w=1,z=2;
  function foo(x=w+1,y=x+1,z=z+1){
    console.log(x,y,z);

  }
  foo() //为什么输出z is not defined
}
