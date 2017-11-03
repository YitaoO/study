/**
 * 清空构建脚本
 */
import gulp from 'gulp';
import del from 'del'; //gulp语句中if判断
import args from './util/args';  //命令行脚本

gulp.task('clean',()=>{
  return del(['server/public','server/views']) //清空当前目录的所有文件，用于再生成新的文件

})
