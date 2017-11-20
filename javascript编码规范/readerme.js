/**
 * javascript编写时必须遵守以下规范
 */

//一:const和let
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

//对象
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
//2：对象里使用简便的创造方法
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
//3:方法简写
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
