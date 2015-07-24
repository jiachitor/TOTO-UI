var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

var modules_config = require('../config').modules;
var default_config = require('../config').default;

//File to monitor
function watchFn(conf){
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

gulp.task('watch', ['setWatch', 'browserSync'], function () {
    for ( conf of modules_config) {
        var _watch =  'watch_' + conf;
        gulp.start(_watch);
    }
});

for ( conf of modules_config) {
    var _watch =  'watch_' + conf;
    gulp.task(_watch, function(){
        watchFn(conf);
    });
}
