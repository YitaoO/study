/* ============================================================
    此JS用于总结'异步'的一些概念和代码解释（*代表重要的程度）
============================================================ */
//1:完整运行：js的单线程特性，表示函数中的代码具有原子性，一旦一个函数运行，那么只能等到这个函数的所有代码运行完在执行下一个函数
//2：竞态竞争：各个函数执行顺序的不确定性，所以存在先后顺序，也就是两个函数相互竞争
//3：并发：用户交互很快，多个事件一起请求(两个或多个事件链随时间发展交替执行)
//4：并发非交互：两个或者多个进程并发的交替步骤，互不影响
//5：并发交互：进程之间相互交流（更多的是这种情况）
//6：事件循环：提供了一种机制来处理程序中多个块的执行,且执行每 块时调用 JavaScript 引擎
//6：事件循环队列类似于一个游乐园游戏:玩过了一个游戏之后,你需要重新到队尾排队才能 再玩一次。而任务队列（异步）类似于玩过了游戏之后,插队接着继续玩。
//7：通过回调的程序两个缺陷：缺乏顺序和可信任性
//8:Promise和回调的区别：回调：控制的反转，控制权在别方;promise：控制的反转的反转：最终控制权在自己手上
//9:Promise 是一种封装和组合未来值的易于复用的机制
//10：Promise注意：只能调用一次；至多只能有一个决议值(完成或拒绝)；
//11：Promise并没有完全摆脱回调，只是改变了传递回调的方式位置；我们并不是把回调传给一个函数(foo()),而是从一个函数foo()得到某个东西（从外观上看像是一个真正的promise）,然后把回调传给这个东西

/**
 * Promise 常用API
 */
//1:new Promise(..) 构造器:有启事性的构造器必须和new一起用,并且返回两个参数(resolve(..) 和 reject(..))
var p = new Promise( function(resolve,reject){ // resolve(..)用于决议/完成这个promise
// reject(..)用于拒绝这个promise
} );
//2:Promise.resolve(..)：创建一个已完成的 Promise；Promise.reject(..)
 var fulfilledTh = {
         then: function(cb) { cb( 42 ); }
     };
     var rejectedTh = {
         then: function(cb,errCb) {
             errCb( "Oops" );
} };
     var p1 = Promise.resolve( fulfilledTh );
     var p2 = Promise.resolve( rejectedTh );
// p1是完成的promise // p2是拒绝的promise
//3：then(..)和 catch(..)：可以为这个 Promise 注册完成和拒绝处理函数
//4：then(..)：接受一个或两个参数:第一个用于完成回调,第二个用于拒绝回调
p.then( fulfilled );
p.then( fulfilled, rejected );
p.catch( rejected ); // 或者p.then( null, rejected )
//5:Promise.all([ .. ])和Promise.race([ .. ]):都会创建一个 Promise 作为它们的返回值。这个 promise 的决议完全由传入的 promise 数组控制。
//6:Promise.all([ .. ]):只有传入的所有promise都完成,返回promise才能完成。 如果有任何 promise 被拒绝,返回的主 promise 就立即会被拒绝(抛弃任何其他 promise 的 结果)
//7:Promise.race([ .. ]):只有第一个决议的promise(完成或拒绝)取胜,并且其 决议结果成为返回 promise 的决议
