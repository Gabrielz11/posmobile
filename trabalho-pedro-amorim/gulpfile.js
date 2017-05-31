var gulp    = require('gulp'),
    less    = require('gulp-less'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    pump    = require('pump'),
    connect = require('gulp-connect');

gulp.task('default',['less', 'concat-css', 'uglify','connect', 'watch' ]);	

gulp.task('less', function() {
    gulp.src('src/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/css'));
});

gulp.task('concat-css', function(){
	return gulp.src('src/css/**/*.css')
	.pipe(concat('estilos.css'))
	.pipe(gulp.dest('www/css'));
});

gulp.task('uglify', function (cb) {
  pump([
        gulp.src('src/js/**/*.js'),
        concat('script.js'),
        uglify(),
        gulp.dest('www/js')
    ],
    cb
  );
});

gulp.task('watch',function(){
  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('src/css/**/*.css', ['concat-css']);
  gulp.watch('src/js/**/*.js', ['uglify']);
  gulp.watch('www/**/*', ['reload']);
});

gulp.task('reload', function () {
  gulp.src('www/**/*')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    index: 'index.html',
    livereload: true
  });
});