/**
 * 浏览器监听构建脚本
 */
import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp语句中if判断
import gutil from 'gulp-util';  //命令行工具输出的包
import args from './util/args';  //命令行脚本

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb()

  //js.ejs,css改变就执行scripts这个脚本
  gulp.watch('app/**/*.js',['scripts'])
  gulp.watch('app/**/*.ejs',['pages'])
  gulp.watch('app/**/*.css',['css'])

})
