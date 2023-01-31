const livereload = require("gulp-livereload")
const gulp = require("gulp")
// gulp plugin to minify HTML.
// const htmlmin = require("gulp-htmlmin")
const { parallel } = require("gulp")
// gulp plugin to minify CSS, using clean-css
const cleanCSS = require("gulp-clean-css")
//  to concat files
const concat = require("gulp-concat")
// Enabling you to compile your Pug templates into HTML
const pug = require("gulp-pug")
// js obfuscator
// const javascriptObfuscator = require("gulp-javascript-obfuscator")
// convert scss into css
const sass = require("gulp-sass")(require("sass"))
// js to babel
const babel = require("gulp-babel")

function pugtoHTML() {
  return (
    gulp
      .src("src/*.pug")
      .pipe(pug({ pretty: true }))
      // .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("build"))
      .pipe(livereload())
  )
}

function moveCss() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("build"))
    .pipe(livereload())
}

function jsBabel() {
  return gulp
    .src("src/js/*js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("all.js"))
    .pipe(gulp.dest("build"))
}

exports.default = function () {
  require("./server.js")
  livereload.listen()

  gulp.watch(
    ["src/**/*.pug", "src/sass/**/*.scss", "src/js/*.js"],
    parallel(pugtoHTML, moveCss, jsBabel)
  )
}
