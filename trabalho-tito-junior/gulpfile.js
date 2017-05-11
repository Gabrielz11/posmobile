let gulp = require('gulp');
let less = require('gulp-less');
let connect = require('gulp-connect');
let del = require('del');
let browserSync = require('browser-sync').create();

gulp.task('server', () => {
    connect.server({
        root: 'www',
        index: 'index.html',
        liveReload: true,
        port: 8080
    });
});

gulp.task('assets-html', () => {
    gulp.src('assets/html/*.html')
        .pipe(gulp.dest('www/'));
});

gulp.task('assets-less', () => {
    gulp.src('assets/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('www/css'));
});

gulp.task('font-awesome', () => {
    gulp.src('node_modules/font-awesome/less/font-awesome.less')
        .pipe(less())
        .pipe(gulp.dest('www/css'));
    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('www/fonts'));
});

gulp.task('src', () => {
    gulp.src('src/app.js')
        .pipe(gulp.dest('www/js'));
});

gulp.task('clean:www', function () {
    return del.sync('www');
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'www'
        },
    })
});

gulp.task('watch', ['browserSync'], () => {
    gulp.watch('assets/html/*.html', ['assets-html']);
    gulp.watch('assets/less/*.less', ['assets-less']);
    gulp.watch('src/*.js', ['src']);
    gulp.watch('assets/html/*.html', browserSync.reload);
    gulp.watch('assets/less/*.less', browserSync.reload);
    gulp.watch('src/*.js', browserSync.reload);
});

gulp.task('default', ['assets-html', 'assets-less','font-awesome', 'src']);
