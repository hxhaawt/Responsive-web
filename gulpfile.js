
var gulp = require("gulp");
// 给文件增加版本号 会自动生成哈希值在版本号上
var rev = require('gulp-rev');
// 将之前文件的引用名 替换成最新的
var revReplace = require('gulp-rev-replace');
// 对文件进行合并
var useref = require('gulp-useref');
// 筛选文件
var filter = require('gulp-filter');
// 压缩 javascript 代码
var uglify = require('gulp-uglify');
// 压缩 CSS 代码
var csso = require('gulp-csso');


gulp.task("default", function () {

    var jsFilter = filter("**/*.js", {restore: true});
    var cssFilter = filter("**/*.css", {restore: true});
    var indexHtmlFilter = filter(["**/*", "!**/index.html"], {restore: true});

    return gulp.src("src/index.html")
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest("dist"))
        ;

});























