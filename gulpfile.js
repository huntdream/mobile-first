const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('min', () => {
    gulp.src('img/B.jpg').pipe(imagemin({
        optimizationLevel: 9,
    })).pipe(gulp.dest('dist'));
});

gulp.task('ap', () => {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./css/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/autoprefixed'));
});
