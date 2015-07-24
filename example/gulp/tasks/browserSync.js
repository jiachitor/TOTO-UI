var browserSync = require('browser-sync');
var gulp = require('gulp');
var browserSync_config = require('../config').browserSync;

gulp.task('browserSync', ['build'], function () {
    browserSync(browserSync_config);
});
