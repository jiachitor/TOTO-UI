var browserSync = require('browser-sync');
var gulp = require('gulp');
var browserSync_config = require('../config').browserSync;
var markup_config = require('../config').markup;
var default_config = require('../config').default;
var moveLibs_config = require('../config').moveLibs;

function browserSyncTask(callback){
    browserSync(browserSync_config);
    callback();
}

gulp.task('markup', function(callback) {
    gulp.src(default_config.src + 'index.html')
        .pipe(gulp.dest(default_config.dest));
    for (var conf of markup_config) {
        gulp.src(conf.src)
            .pipe(gulp.dest(conf.dest));
    }
    callback();
});

gulp.task('moveLibs', function(callback) {
    gulp.src(moveLibs_config.src)
        .pipe(gulp.dest(moveLibs_config.dest))
        .on('finish', callback);
});

gulp.task('browserSync', gulp.series('browserify', 'markup', 'moveLibs', browserSyncTask));

