const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssVars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');


gulp.task('default', function () {
    console.log('gulp working');
})

gulp.task('html', function () {
    console.log('something useful being done to HTML file');
})

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));

})

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    })
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    })
})