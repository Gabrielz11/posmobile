var gulp   = require('gulp');
var less   = require('gulp-less');
//var minify = require('gulp-minify');
//var babel  = require('gulp-babel');

var connect = require('gulp-connect');
var clean   = require('gulp-clean');
var util    = require('gulp-util');

gulp.task('src', () => {
    gulp.src('./src/js/**/*.js')
        // .pipe(babel({
            // presets: ['es2015']
        // }))
        // .pipe(minify())
        .pipe(gulp.dest('www/assets/js'));

    gulp.src('./src/html/**/*.htm')
        .pipe(gulp.dest('www'));
});

gulp.task('less', () => {
    gulp.src('./src/less/**/*.less')
        .pipe(less({compress: true}))
        .pipe(gulp.dest('./www/assets/css'));
});

gulp.task('third', () => {
    gulp.src('./third/**')
        .pipe(gulp.dest('./www/assets/third'));
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.js',   [ 'src' ]);
    gulp.watch('./src/**/*.htm',  [ 'src' ]);
    gulp.watch('./src/**/*.less', [ 'less' ]);
});

gulp.task('server', () => {
    connect.server({
        root: 'www',
        index: 'index.htm',
        liveReload: true,
        port: 8080
    });
});

gulp.task('clean-www', () => {
    gulp.src('./www', {read: false})
        .pipe(clean());
});

gulp.task('clean-nm', () => {
    gulp.src('./node_modules', {read: false})
        .pipe(clean());
});

gulp.task('clean-all', ['clean-www', 'clean-nm']);
gulp.task('default', ['src', 'less', 'third', 'server', 'watch']);
