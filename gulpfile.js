var gulp = require("gulp");

gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya"));
});
gulp.task("copy-img",function(){
	gulp.src("imgs/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\imgs"));
});
gulp.task("copy-css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\css"));
});
// gulp.task("sass",function(){
// 	gulp.src("sass/**/*.scss").pipe(sass())
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\css"));
// });
gulp.task("copy-font",function(){
	gulp.src("fonts/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\fonts"));
});
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\js"));
});
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\php"));
});
gulp.task("copy-json",function(){
	gulp.src("json/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\json"));
});
gulp.task("data",function(){
	gulp.src(["xml/*.xml","json/*.json","!json/test.json"])
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\data"));
});
gulp.task("build",["copy-html","copy-img","copy-css","copy-font","copy-js","copy-php","copy-json","data"],function(){
	console.info("OK!");
});
//监听，自动复制
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("imgs/**/*",["copy-img"]);
	gulp.watch("css/**/*",["copy-css"]);
	// gulp.width("sass/**/*.scss",["sass"]);
	gulp.watch("fonts/**/*",["copy-font"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("php/**/*",["copy-php"]);
	gulp.watch("json/**/*",["copy-json"]);
});