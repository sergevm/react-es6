var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var globby = require('globby');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var babelify = require('babelify');

gulp.task('compile', function() {
    globby(['./src/js/**/*.js'])
        .then(paths => {
            browserify({entries: paths, debug:true})
                .transform(babelify, {presets: ['es2015', 'react']})
                .on('error', gutil.log)
                .bundle()
                .on('error', function(e) {
                    gutil.log(e);
                })
                .pipe(source('app.js'))
                .pipe(gulp.dest('./public'));
                });
});

gulp.task('serve', function() {
    connect.server({
        root: './public',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(['./src/*.html'], ['copy.html']);
    gulp.watch(['./src/js/**/*.js'], ['compile']);
    gulp.watch(['./src/styles.css'], ['copy.css']);
    gulp.watch(['./public/**/*.*'], ['reload']);
});

gulp.task('reload', function() {
    gulp.src(['./public/*.html']).pipe(connect.reload());
});

gulp.task('copy.html', function() {
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('copy.css', function() {
    gulp.src('./src/styles.css')
    .pipe(gulp.dest('./public'));
});

gulp.task('copy.static', function() {
    gulp.src(
        [
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/react/dist/react-min.js',
            './node_modules/react-dom/dist/react-core-min.js'
       ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('./public/'));

    gulp.src(
        [
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
         ])
        .pipe(concat('vendors.css'))
        .pipe(gulp.dest('./public/'));
});

gulp.task('copy', ['copy.html', 'copy.static', 'copy.css']);

gulp.task('default', ['copy', 'watch', 'compile', 'serve']);