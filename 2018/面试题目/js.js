/**
 * JS
 */
{
  var z = 10;
  function foo(){
          console.log(z);
  }
  (function(funArg){
          var z = 20;
          funArg();
  })(foo);  //输出:20
}
