var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    replace = require('gulp-replace'),
    browserSync = require('browser-sync'),
    _ = require('underscore');

var modules_config = require('../config').modules;
var default_config = require('../config').default;

//File to monitor
function watchFn(conf){
    console.log("-------------------------------------------------------------");
    console.log("                   watching " + conf + " now!");
    console.log("-------------------------------------------------------------");
    var _src = default_config.src + '/'+ conf +'/www/**';
    var _dest = default_config.dest + '/' + conf;

    watch([_src], function(){
        gulp.src(_src)
            .pipe(gulp.dest(_dest));
    });

    watch([default_config.src + '/'+ conf +'/sass/**'], function(){
        gulp.src(default_config.src + '/'+ conf +'/sass/app.scss')
            .pipe(sass())
            .pipe(rename('app.css'))
            .pipe(minifycss())
            .pipe(gulp.dest(default_config.src + '/'+ conf +'/www/'))
            .pipe(notify({message: conf + ' app.css to build complete'}));
    });
}

function watchProcess(callback){
    for (var conf of modules_config) {
        watchFn(conf);
    }
}

gulp.task('setWatch', function (callback) {
    global.isWatching = true;
    callback();
});

gulp.task('watch',gulp.series(
    'setWatch',
    'browserSync',
    watchProcess
));


