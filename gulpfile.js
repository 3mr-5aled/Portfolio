const gulp = require("gulp")
const { parallel } = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require("gulp-autoprefixer")
// const cssnano = require("gulp-cssnano")
const babel = require("gulp-babel")
const concat = require("gulp-concat")
const browserSync = require("browser-sync").create()

function css() {
  return (
    gulp
      .src("src/sass/**/*.scss") //source file to retrieve
      .pipe(sass()) //sends the source file to the sass plugin
      .pipe(autoprefixer()) //sends the source file to the autoprefixer plugin
      // .pipe(cssnano()) //sends the source file to the minifier plugin
      .on("error", sass.logError) //log errors
      .pipe(gulp.dest("./build"))
    // .pipe(browserSync.reload())
  ) //outputs the result in our public dir
}
function htmlTrans() {
  return gulp.src("dist/**/*.html").pipe(gulp.dest("build"))
}
function imgTrans() {
  return gulp.src("src/assets/images/*").pipe(gulp.dest("build/assets/images/"))
  // .pipe(browserSync.reload())
}

function jsBabel() {
  return gulp
    .src("src/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("all.js"))
    .pipe(gulp.dest("build"))
  // .pipe(browserSync.reload())
}

exports.default = function () {
  browserSync.init({
    server: {
      baseDir: "./build/",
    },
  })
  gulp.watch(
    ["src/**/*.pug", "src/sass/**/*.scss", "dist/**/*.html ", "src/js/*.js"],
    parallel(css, htmlTrans, imgTrans, jsBabel)
  )
}
