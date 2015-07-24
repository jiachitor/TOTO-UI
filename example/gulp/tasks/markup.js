var gulp = require('gulp');
var markup_config = require('../config').markup;
var default_config = require('../config').default;

gulp.task('markup', function() {
    gulp.src(default_config.src + 'index.html')
        .pipe(gulp.dest(default_config.dest));
    for ( conf of markup_config) {
        gulp.src(conf.src)
            .pipe(gulp.dest(conf.dest));
    };
    return true;
});