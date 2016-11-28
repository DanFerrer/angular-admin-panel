import gulp from 'gulp';
import eslint from 'gulp-eslint';
import runSequence from 'run-sequence';
import webpack from 'webpack-stream';
import server from 'browser-sync';

const base = 'app';

const paths = {
	entry: `${base}/index.js`,
	app: `${base}/**/*`,
	copy: 'index.html',
	dest: 'dist',
	js: `${base}/**/*.js`
};

gulp.task('lint', () => {
	return gulp.src(paths.js)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('build', ['lint'], () => {
	return gulp.src(paths.entry)
		.pipe(webpack(require('./webpack.config')))
		.pipe(gulp.dest(paths.dest))
		.pipe(server.reload({stream: true}));
});

gulp.task('serve', () => {
	server({
		port: 4000,
		server: {
			baseDir: paths.dest
		}
	});
});

gulp.task('copy', () => {
	return gulp.src(paths.copy)
		.pipe(gulp.dest(paths.dest))
		.pipe(server.reload({stream: true}));
});

gulp.task('watch', () => {
	gulp.watch(paths.app, ['build']);
	gulp.watch(paths.copy, ['copy']);
});

gulp.task('default', (callback) => {
	runSequence('build', 'copy', 'serve', 'watch', callback);
});

