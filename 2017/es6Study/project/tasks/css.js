/**
 * 处理css构建脚本
 */
import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp语句中if判断
import livereload from 'gulp-livereload';  //热更新

import args from './util/args';  //命令行脚本

gulp.task('css',()=>{
    return gulp.src(['app/**/*.css'])
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))

})
