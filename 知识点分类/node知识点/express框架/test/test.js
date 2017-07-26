 const express=require('express')
 var server=express()
 server.get('/',function(){
   console.log("有get");
 })
 // server.use('.a.html',function(req,res){
 //
 // })
 // server.use('.a.html',function(req,res){
 //
 // })

 server.listen(8080)
