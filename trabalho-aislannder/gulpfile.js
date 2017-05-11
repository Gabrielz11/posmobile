//carregador de plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect');

//criando uma tarefa para a pasta assets
gulp.task('assets-html',() => {
  //criando uma nova instrução para o arquivo index.html
  gulp.src('assets/html/index.html')
      .pipe(gulp.dest('www/'));
});

gulp.task('assets-less',() => {
//criando uma nova instrução para o arquivo estilo.css
 gulp.src('assets/less/estilo.less')
     .pipe(less())
     .pipe(gulp.dest('www/css'));
});

//criando uma tarefa para a pasta src
gulp.task('compile-src',() => {
  //criando uma nova instrução para o arquivo app.js
  gulp.src('src/app.js')
      .pipe(gulp.dest('www/js/'));
});


gulp.task('watch',()=>{
  //qualuqer um que termine com .html em qualquer diretorio /**/.html
  gulp.watch('assets/html/**/*.html',['assets-html']);
  gulp.watch('assets/less/**/*.less',['assets-less']);
});

gulp.task('connect', function() {
  connect.server({
    root:'www',
    index:'index.html',
    liveReload:true,
    port:8080
  });
});

gulp.task('default',['connect','assets-html','assets-less','compile-src']);
