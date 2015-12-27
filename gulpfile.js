var gulp = require('gulp-param')(require('gulp'), process.argv),
    path = require('path'),
    // gulpCopy = require('gulp-copy'),
    // gulpFilter = require('gulp-filter'),
    // uglify = require('gulp-uglify'),
    gulpLog = require('gulp-log'),
    // minifyCss = require('gulp-minify-css'),
    // htmlmin = require('gulp-htmlmin'),
    // savefile = require('gulp-savefile'),
    sass = require('gulp-sass'),
    // clean = require('gulp-clean'),
    // replace = require('gulp-replace'),
    // rename = require("gulp-rename"),
    reslovePath = require('./tasks/reslove-path');

//编译sass到当前css目录
gulp.task('sass', function () {
    var paths = [
            path.resolve(__dirname, '../sass'),
        ].concat(reslovePath.sass_paths(__dirname, [
            'bourbon/app/assets/stylesheets',
            'neat/app/assets/stylesheets',
            'normalize-scss/sass',
            'support-for/sass',
        ]));
    return gulp.src(['./sass/**/*.scss'])
        .pipe(sass({
            includePaths: paths
        }).on('error', sass.logError))
        .pipe(gulpLog())
        .pipe(gulp.dest('./dist/css'));
});

//监听sass
gulp.task('sass-watch', function () {
    gulp.watch([
        './sass/**/*.scss',
    ], ['sass']);
});
