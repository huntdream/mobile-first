const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('min',() => {
    gulp.src('img/B.jpg').pipe(imagemin({optimizationLevel: 9,})).pipe(gulp.dest('dist'));
});
