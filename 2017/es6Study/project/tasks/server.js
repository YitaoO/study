/**
 * 处理服务器构建脚本
 */
import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp语句中if判断
import liveserver from 'gulp-live-server';  //热更新

import args from './util/args';  //命令行脚本

gulp.task('server',(cb)=>{
    if(!args.watch) return cb()

    var server = liveserver.new(['--harmony','server/bin/www']) //当前路径下执行脚本，也就是启动www目录下的脚本
    server.start()

    //监听server目录下js和ejs发生改变的时候浏览器自动刷星
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
      server.notify.apply(server,[file]); //改动的时候通知服务器做相应的动作
    })

    //监听需要重启服务的文件
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
      server.start.bind(server)() //重启服务
    })

})
