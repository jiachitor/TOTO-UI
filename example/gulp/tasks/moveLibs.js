/**
 * Created by jchliu on 2015/8/4.
 */
var gulp = require('gulp');
var markup_config = require('../config').markup;
var moveLibs_config = require('../config').moveLibs;

gulp.task('moveLibs', function() {
    gulp.src(moveLibs_config.src)
        .pipe(gulp.dest(moveLibs_config.dest));
});