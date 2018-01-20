var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            browsers: ["last 20 versions"]
        }))
        .pipe(gulp.dest("themes/ooods/static/css"));
});

gulp.task("bootstrap", function () {
    gulp.src("node_modules/bootstrap/dist/js/**/*.js")
        .pipe(gulp.dest("themes/ooods/static/js/bootstrap"));
});

// Watch asset folder for changes
gulp.task("watch", ["scss", "bootstrap"], function () {
    gulp.watch("src/scss/**/*", ["scss"]);
    gulp.watch("node_modules/bootstrap/dist/js/**/*", ["bootstrap"]);
});
