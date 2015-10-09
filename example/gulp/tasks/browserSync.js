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

function markup(callback){
    gulp.src(default_config.src + '/index.html')
        .pipe(gulp.dest(default_config.dest));
    gulp.src(default_config.fonts + '/**')
        .pipe(gulp.dest(default_config.dest + '/fonts'));
    for (var conf of markup_config) {
        gulp.src(conf.src)
            .pipe(gulp.dest(conf.dest));
    }
    callback();
}

gulp.task('browserSync', gulp.series('browserify', markup, browserSyncTask));

