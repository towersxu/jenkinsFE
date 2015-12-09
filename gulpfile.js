var gulp = require('gulp');

gulp.task('autoprefixer',function(){
  var less = require('gulp-less');
  var autoprefixer = require('gulp-autoprefixer');
  return gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers:['last 2 versions'],
      cascade:false
    }))
    .pipe(gulp.dest('src/resources/css'))
});

gulp.task('release',function(){
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');
  return gulp.src('src/resources/js/*.js')
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify({outSourceMap: false}))
    .pipe(gulp.dest('src/resources/js/min'))
});
gulp.task('default', function(){
  gulp.run('autoprefixer');
  gulp.watch('src/less/*.less',{verbose:true},function(){
    gulp.run('autoprefixer');
  });
});


