/**
 * 用到功能
 */
const express=require('express');
const static=require('express-static'); //读取静态数据
const cookieParser=require('cookie-parser'); //解析cookie
const cookieSession=require('cookie-session');//解析sessiong
const bodyParser=require('body-parser'); //解析数据(只能解析数据类的post，不能解析文件上传的数据)
const multer=require('multer') //解析post上传数据，可以解析文件上传
const ejs=require('ejs');
const jade=require('jade');

var server=express();
server.listen(8080);

//1:解析cookie
server.use(cookieParser('sdfgvewgewtedh'))

var arr=[]
for(var i=0;i<100000;i++){
  arr.push('keys_'+Math.random())
}
//2:使用session
server.use(cookieSession({name:'hyt_id',keys:arr,maxAge:20*3600*1000}));

//3:post数据
server.use(bodyParser.urlencoded({extended:false})); //解析数据
server.use(multer({dest:'./www/upload'}).any()) //解析文件

//用户请求
server.use('/',function(req,res,next){
    //req.query(get)
    //req.body(post)
  console.log(req.query,req.body,req.cookies,req.session)
})
//static
server.use(static('./www'))
