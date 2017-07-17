//同步
// var fs=require('fs');
// var data=fs.readFileSync('file.txt', 'utf-8');
// console.log(data)
// console.log('end')

//异步
function readFile(err,data){
  if(err){
    console.error(err)
  }else{
    console.log(data)
  }
}
var fs=require('fs')
fs.readFile('file.txt', 'utf-8',readFile)
console.log('end')
