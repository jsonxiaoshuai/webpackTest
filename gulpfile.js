const gulp = require('gulp');
const babel = require('gulp-babel');

//执行no_one代码后，再执行default代码
//default代码里做了watch，监控代码改变，自动编译
gulp.task('default',['no_one'],function () {
	gulp.watch(['src/**/**.es','!src/public/*/*.es'],['no_one'])
})

//先执行no_one的代码
gulp.task('no_one', () =>{
	//需要编译的是src下的所有.es文件,但是不要编译public下面的文件
	return gulp.src(['src/**/**.es','!src/public/*/*.es'])
		.pipe(babel({//编译用的插件
			presets: ['es2015','stage-0']
		}))
		.pipe(gulp.dest('./build'))//编译后的文件保存的位置
});