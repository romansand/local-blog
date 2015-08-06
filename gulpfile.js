var gulp = require('gulp'),
    haml = require('gulp-haml'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload
    
gulp.task('serve', function() {
    browserSync.init({
        server: './rendered'
    });
    gulp.watch('./rendered/*.html').on('change', reload);
});

gulp.task('watch', function() {
    gulp.watch('./haml/index.haml', ['haml']);
});

gulp.task('haml', function () {
  gulp.src('./haml/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['serve', 'watch']);