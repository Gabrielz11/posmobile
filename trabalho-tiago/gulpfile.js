var gulp   = require('gulp');
var less   = require('gulp-less');
var minify = require('gulp-minify');
var connect = require('gulp-connect');

gulp.task('src', function () {
    gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('www/assets/js'));

    gulp.src('./src/html/**/*.html')
        .pipe(gulp.dest('www'));
});


gulp.task('less', function () {
    gulp.src('./src/less/**/*.less')
        .pipe(less({compress: true}))
        .pipe(gulp.dest('./www/assets/css'));
});

gulp.task('server', function () {
    connect.server({
        root: 'www',
        index: 'index.html',
        liveReload: true,
        port: 85
    });
});


gulp.task('default', ['src', 'less']);