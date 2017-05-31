let gulp = require('gulp');
let less = require('gulp-less');
let connect = require('gulp-connect');

gulp.task('assets-html', () => {
  gulp.src('assets/html/index.html')
      .pipe(gulp.dest('www/'));
});

gulp.task('server', () => {
  connect.server({
    root: 'www',
    index: 'index.html',
    liveReload: true,
    port: 8080
  });
})

gulp.task('assets-less', () => {
  gulp.src('assets/less/style.less')
      .pipe(less())
      .pipe(gulp.dest('www/css'));
})

gulp.task('src', () => {
  gulp.src('src/app.js')
      .pipe(gulp.dest('www/js'));
});

gulp.task('watch', () =>{
  gulp.watch('assets/html/**/*.html', ['assets-html']);
  gulp.watch('assets/less/**/*.less', ['assets-less']);
  gulp.watch('src/**/*.js', ['src']);
});

gulp.task('default', ['assets-html','assets-less','src']);
