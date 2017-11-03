/**
 * 处理页面（模板）构建脚本
 */
import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp语句中if判断
import livereload from 'gulp-livereload';  //热更新

import args from './util/args';  //命令行脚本

gulp.task('pages',()=>{
    return gulp.src(['app/**/*.ejs'])
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))

})
