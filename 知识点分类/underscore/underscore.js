/* ============================================================
    此JS用于总结underscore.js的一些概念和代码解释（*代表重要的程度）
=========================================================== */
/**
 * 数组
 */
//1:_.union(*arrays):返回传入的 arrays（数组）并集：按顺序返回，返回数组的元素是唯一的，可以传入一个或多个 arrays（数组）。
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
=> [1, 2, 3, 101, 10]
/**
 * 集合
 */

 //1: sortBy_.sortBy(list, iteratee, [context]) :返回一个排序后的list拷贝副本。如果传递iteratee参数，iteratee将作为list中每个值的排序依据。迭代器也可以是字符串的属性的名称进行排序的(比如 length)。

 _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
 => [5, 4, 6, 3, 1, 2]

 var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
 _.sortBy(stooges, 'name');
 => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
