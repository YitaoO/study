/**
 * 把所有的任务（脚本）都串联起来
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; //处理任务之间的关联关系和先后顺序

//**数组里面的任务肯定是在前面任务执行完之后再执行
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']))
