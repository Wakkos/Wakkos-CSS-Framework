var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('scss/style.scss')
        .pipe(sass()) // Using gulp-sass
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
      .pipe(gulp.dest('css'))
  });

  gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    // Other watchers
  })