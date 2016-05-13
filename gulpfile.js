/**
 * ugilfy the js files
 */

var gulp = require('gulp'),
    uglify = require('gulp-uglify')

gulp.task('uglify', function () {
    gulp.src('./src/**/*.js')
        .pipe(uglify())    //ѹ��
        .pipe(gulp.dest('./dist/'));  //���
});

gulp.task('default', ['uglify']);
