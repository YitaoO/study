{ //显性绑定
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 2
  };
  foo.call(obj); // 2
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

{ //new绑定
  function foo(a) {
    this.a = a;
  }
  var bar = new foo(2);
  console.log(bar.a); // 2
}

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
