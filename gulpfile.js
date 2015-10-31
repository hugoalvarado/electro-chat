
// get the dependencies
var gulp        = require('gulp'),
 childProcess  = require('child_process'),
 electron      = require('electron-prebuilt'),
 ts = require('gulp-typescript');

// create the gulp task
gulp.task('run', function () {
    
    gulp.src('app/scripts/*.ts')
        .pipe(ts({
            "target": "ES5",
            "module": "commonjs",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
            //out: 'output.js'
        }))
        .pipe(gulp.dest('app/scripts/'));

    childProcess.spawn(electron, ['./app'], { stdio: 'inherit' });
});
