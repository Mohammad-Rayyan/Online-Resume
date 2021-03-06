var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('css/*.css',browserSync.reload);
  gulp.watch('js/*.js',browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});