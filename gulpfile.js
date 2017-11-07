var gulp = require('gulp');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var refresh = require('gulp-refresh');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('js', function () {
    return gulp.src(['src/app.ts', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
        .pipe(refresh());
});

gulp.task('lib-js', function () {
    return gulp.src([
        'node_modules/angular/angular.min.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('lib.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
        .pipe(refresh());
});

gulp.task('templates', function () {
    return gulp.src('src/**/*.html')
        .pipe(sourcemaps.init())
        .pipe(flatten())
        .pipe(templateCache('templates.js', { module: 'app', root: '' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
        .pipe(refresh());
});

gulp.task('css', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
        .pipe(refresh());
});

gulp.task('default',
    gulp.parallel(['js', 'lib-js', 'templates', 'css'])
);

gulp.task('watch', gulp.series([
    'default',
    function watch() {
        refresh.listen();
        gulp.watch('src/**/*.ts', gulp.parallel(['js']));
        gulp.watch('src/**/*.scss', gulp.parallel(['css']));
        gulp.watch('src/**/*.html', gulp.parallel(['templates']));
    }]
));

gulp.task('run', gulp.parallel([
    'watch',
    serve({
        root: ['./'],
        port: 1234
    })
]));