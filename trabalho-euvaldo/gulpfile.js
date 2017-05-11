var gulp   = require('gulp');
var less   = require('gulp-less');

var connect = require('gulp-connect');

gulp.task('src', () => {
    gulp.src('./src/javascript/**/*.js')
        .pipe(gulp.dest('./www/assets/js'));

    gulp.src('./src/html/**/*.html')
        .pipe(gulp.dest('www'));

    gulp.src('./src/image/**')
        .pipe(gulp.dest('www/assets/image'));
});

gulp.task('less', () => {
    gulp.src('./src/less/**/*.less')
        .pipe(less({compress: true}))
        .pipe(gulp.dest('./www/assets/css'));
});

gulp.task('third', () => {
    gulp.src('./resources/third/**')
        .pipe(gulp.dest('./www/assets/third'));
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.js',   [ 'src' ]);
    gulp.watch('./src/**/*.html',  [ 'src' ]);
    gulp.watch('./src/**/*.less', [ 'less' ]);
});

gulp.task('server', () => {
    connect.server({
        root: 'www',
        index: 'index.html',
        liveReload: true,
        port: 8080
    });
});

gulp.task('default', ['src', 'less', 'third']);