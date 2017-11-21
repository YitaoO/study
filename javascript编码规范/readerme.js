/**
 * javascript编写时必须遵守以下规范
 */

 /**
  * 一:const和let
  */
//1：使用const定义常量，避免使用var
var a=1;//bad
const a=1;//good
//2：如果你要重新复制，用let，避免用var
var count=1;
if(true){
	count++
} //bad
let count=1;
if(true){
	count++;
}//good
//3：在块级作用域(block-scoped)中，避免同时使用let,const
{
	let a=1;
	const b=1;
}//bad

/**
 * 二:对象
 */
//1：对象:使用字面量(literal syntax)创建对象
const item=new Object();//bad
const item={};//good
//不要使用保留字(reserved words)作为“键值”,因为在ie8中会报错
const item={
	default:{clark:'kent'},
	private:true
}//bad
const item={
	defaults:{cleak:'kent'},
	hidden:true
} //good
//2：对象里使用简便的创造方法(es6)
const atom={
	value:1,
	addValue:function(value){
		return atom.value +value;
	}
}//bad
const atom={
	value:1,
	addValue:(value){
		return atom.value +value;
	}
}
//3:方法简写(es6)
const type='123'
const obj={
	type:type
} //bad
const obj={
	type
} //good
//赋值的属性放在一起
const aaa='123'
const bbb='456'
const obj={
	ccc:'333'
	aaa,
	ddd:'789'
	bbb
} //bad
const obj={
	aaa,
	bbb,
	ccc:'333',
	ddd:'789'
}

/**
 * 三:数组
 */
//1:使用字面量语法创建数组
const arr=new Array();//bad
const arr=[];//good
//2:使用push去为数组添加元素而不使用直接的赋值添加元素
const arr=[];
arr[arr.length]='aaa'//bad
arr.push('aaa')//good
//3:使用...的方法取复制数组，代替slice,遍历的方法(es6)
const items=['sss','eee','bbb'];
const itemsCopy=[];
for(let i=0;i<items.length;i++){
	itemsCopy[i]=items[i]
}//bad(要遍历，增加开销)
const itemsCopy=[...items];//good
//4:类似数组的对象转化为真正数组，从而可以对数组进行操作，用from方法(es6)
let object={
	'0':'a',
	'1':'b',
	'2':'c',
	length:3
}
let arr2=Array.from(object)//['a','b','c']
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function (p) {
  console.log(p);
}); //把dom对象转化为数组后可以对数组进行遍历操作
//5:使用返回值的方法取得回调，而不是重新建一个变量；如果只有一个生命，可以把返回值去掉
[1,2,3].map((x)=>{
	const y = x + 1;
	return x * y
})
[1,2,3].map(x=>x +1);
//6:字符串转化为数组(split和from区别)，一般用split，不用from
let str='a,b,c'
str.split(',') //["a","b","c"]
Array.from(str) //["a",",","b",",","c"] ,会增加逗号

/**
 * 四：解构赋值(Destructuring)
 */
//1:对象解构
function getFullName(user){
	const firstName=user.first;
	const lastName=user.lastName; //bad

	const {firstName,lastName} =user; //good
	return `${firstName} ${lastName}`
} //bad

function getFullName({firstName,lastName}){
	return `${firstName} ${lastName}`
}//best
//2:数组解构
const arr=[1,2,3,4];
const first=arr[0]
const last=arr[1]; //bad
const [first,last]=arr
//3:使用对象结构如果是有多个返回值而不是用数组结构(对象结构可以根据属性取，而如果数组结构是根据key来的，如果中间不取要__,所以用对象结构)
function returnArr(input){
	return [left,right,top,bottom]
}//bad
const [_left,__,top]=returnArr(input)
function returnObj(input){
	return {left,right,top,bottom};
}//good
const {left,bottom} =returnObj(input)

/**
 * 四：字符串(string)
 */
//1:使用单引号
const name="aaa" //bad
const last='aaa' //good
//2:超过100个字的字符串要用+号换行显示
//3:如果存在字符串和变量的拼接使用模板字符串，不适用+(使用:``)
function say(name){
	return `how name,${name}`
}
//4:不使用eval()操作字符串，带来太多缺陷
document.write(eval(x+17)) //bad

/**
 * 五：方法(function)
 */
//1:使用函数声明代替函数表达式（函数声明在声明那一刻就放在作用域中，调用的时候在堆栈汇总更容易识别）
const foo = function(){} //bad
function foo(){} //good
//2:不要在代码块中定义方法，特别是if,switch语句(最好将函数赋值给一个变量)
if(true){
	function test(){
		console.log('ss');
	}
}//bad
let test;
if(true){
	test=()=>{
		console.log("ff");
	}//也试试函数表达式
}
//3:不要将参数命名为arguments，它将在每个函数的作用范围内优先于arguments对象。
function nope(name,arguments){

}//bad
//4:不要使用arguments
//5:使用默认参数而不是变化的方法参数
function hand(opts){
	opts=opts || {}
} //bad
function hand(opts){
	if(opts === void 0){
		opts={}
	}
}//bad
function hand(opts={}){

}//good
//6:使用默认参数避免造成不好的影响,并且把默认参数放在最后面
function hand(opts={},name){}//bad
function hand(name,opts={}){}//good
//7：从不使用构造函数去创造一个函数
var add =new function();//bad
var add = Function()//good
//8:当创建一个函数的时候注意之间的空格
const f = function(){};const g function function (){};const h = function() {};//bad
const f = function () {};//good

/**
 * 箭头函数(Arrow Functions)
 */
//1:当必须使用函数表达式或者匿名函数的时候，请使用箭头函数
[1,2,3].map(function(x)){
	return x
} //bad
[1,2,4].map((x)=>{
	return x
})//good
//2:如果箭头函数只有一个参数，可以忽略{}
[1,2,3].map(number=>)
//3:如果只有一个参数并且没有retrun返回值,箭头函数的参数括号可以省略
[1,2,3].map((x)=>x * x)//bad
[1,2,3].map(x=>x * x)//good
[1,2,3].map(x=>{
	const y = x +1
	return x * y;
})//bad
[1,2,3].map((x)=>{
	const y = x +1
	return x * y;
})//good

/**
 * class(类)
 */
//1:使用class，避免去直接操作原型prototype
