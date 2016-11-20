import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

gulp.task('build', () => {
    gulp.src(['index.js'])
        .pipe(babel())
        .pipe(gulp.dest('public'));
});

gulp.task('run', () => {
    nodemon({
        script: 'public/index.js',
        ext: 'js',
        env: {'NODE_ENV': 'development'},
        tasks: ['build'],
        ignore: ['public/**/*.js']
    });
});

gulp.task('default', ['run'], () => {});