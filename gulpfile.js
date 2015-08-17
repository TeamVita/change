var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
};

var bundler = watchify(browserify({
  entries: ['./client/app.js'],
  transform: [reactify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

function bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('build.js'))
    .pipe(gulp.dest('./client/build'))
}
bundler.on('update', bundle)

gulp.task('build', function() {
  bundle()
});

gulp.task('start', function () {
  nodemon({
    script: './bin/www'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

//for future sass folder
// gulp.task('sass', function () {
//   gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(concat('style.css'))
//     .pipe(gulp.dest('./'));
// });

//add sass to default when completed
gulp.task('default', ['build', 'start']);

// gulp.task('watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });