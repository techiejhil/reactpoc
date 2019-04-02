'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
//var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
//var rename= require('gulp-rename');
//var changed =require('gulp-changed');

//var SCSS_SRC =

gulp.task('sass', function(){
    return gulp.src('src/Assets/scss/style.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('src/Assets/css'))
  });