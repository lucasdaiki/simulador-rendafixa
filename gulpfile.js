const gulp = require('gulp')
const concat = require('gulp-concat')

gulp.task('minify', function() {
    return gulp.src([
        "node_modules/axios/dist/axios.min.js",
        "node_modules/vanilla-text-mask/dist/vanillaTextMask.js",
        "node_modules/text-mask-addons/dist/createNumberMask.js",
        "node_modules/vanilla-masker/build/vanilla-masker.min.js", 
        "node_modules/moment/min/moment.min.js"
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('default', ['minify'], function() {
    gulp.watch('scripts/**/*.js',['minify'])
})