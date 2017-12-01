/**
 * this用法:指向函数的调用者
 */
{
  var obj = {
    count: 0,
    cool: function coolFn() {
      var self = this;
      if (self.count < 1) {
        setTimeout(function timer() {
          self.count++;
          console.log("awesome?");
        }, 100);
      }
    }
  };
  obj.cool(); // 酷吧?
}
