var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');

gulp.task('inlineCss', function() {
    return gulp.src('./src/index.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('./dist/'));
});