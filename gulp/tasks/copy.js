var gulp = require('gulp');
var config = require('../config.js');

gulp.task('copy:fonts', function () {
    return gulp
        .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:data', function () {
    return gulp
        .src(config.src.data + '/**/*.*')
        .pipe(gulp.dest(config.dest.data));
});

gulp.task('copy:lib', function () {
    return gulp
        .src(config.src.lib + '/**/*.*')
        .pipe(gulp.dest(config.dest.lib));
});

gulp.task('copy:rootfiles', function () {
    return gulp
        .src(config.src.root + '/*.*')
        .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:wow', function () {
    return gulp
        .src(config.src.js + '/lib/wow.min.js')
        .pipe(gulp.dest(config.dest.js));
});
gulp.task('copy:pdf', function () {
    return gulp
        .src(config.src.pdf + '/*.*')
        .pipe(gulp.dest(config.dest.pdf));
});

gulp.task('copy:img', function () {
    return gulp
        .src([
            config.src.img + '/**/*.*',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy', [
    'copy:img',
    // 'copy:rootfiles',
    // 'copy:lib',
    // 'copy:data',
    'copy:fonts',
    'copy:pdf',
    'copy:wow'
]);
gulp.task('copy:watch', function () {
    gulp.watch(config.src.img + '/*', ['copy']);
});