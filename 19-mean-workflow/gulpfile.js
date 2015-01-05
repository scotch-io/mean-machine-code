var gulp = require('gulp')
	uglify = require('gulp-uglify');

gulp.task('uglify', function() {
	return gulp.src('*.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/'));
});

gulp.task('default', ['uglify']);