var gulp = require('gulp');
var config = require('../config').markup;
var _default = require('../config').default;

gulp.task('markup', function() {
    gulp.src(_default.src + 'index.html')
        .pipe(gulp.dest(_default.dest));
    for ( conf of config) {
        gulp.src(conf.src)
            .pipe(gulp.dest(conf.dest));
    };
    return true;
});
