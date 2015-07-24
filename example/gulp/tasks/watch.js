
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var _default = require('../config').default;
gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch([_default.src + '/*/www/**'], ['markup']);
});
