"use strict";

let gulp = require('gulp');
let concat = require('gulp-concat');
let clean = require('gulp-clean');
let less = require('gulp-less');
let babel = require('gulp-babel');
let connect = require('gulp-connect');

gulp.task('js', () => {
    gulp.src('src/js/**/*.js')
        .pipe(babel())
        .pipe(concat('build.js'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('less', () => {
    gulp.src('./assets/less/**/*.less')
        .pipe(less({
            compress: true
        }))
        .pipe(concat('estilo.css'))
        .pipe(gulp.dest('www/css'));
});

gulp.task('html', () => {
    gulp.src('assets/html/**/*.html')
        .pipe(gulp.dest('www'));
});

gulp.task('img', () => {
    gulp.src('assets/img/**/icone-*')
        .pipe(gulp.dest('www/img'));
});

gulp.task('clean', () => {
    gulp.src('./www', {
            read: false
        })
        .pipe(clean());
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./assets/html/**/*.html', ['html']);
    gulp.watch('./assets/less/**/*.less', ['less']);
    gulp.watch('./assets/img/**/*.png', ['img']);
});

gulp.task('server', () => {
    connect.server({
        root: 'www',
        index: 'app.html',
        liveReload: true,
        port: 8080
    });
});

gulp.task('default', ['js', 'html', 'less', 'img']);