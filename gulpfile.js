
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const sassFiles = './sass/**/*.scss';  
const cssDest = './css';          

gulp.task('sass', function() {
    return gulp.src(sassFiles)        
        .pipe(sass().on('error', sass.logError))  
        .pipe(gulp.dest(cssDest));    
});

gulp.task('watch', function() {
    gulp.watch(sassFiles, gulp.series('sass'));   
});

gulp.task('default', gulp.series('sass', 'watch'));
