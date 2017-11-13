var gulp = require('gulp');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var refresh = require('gulp-refresh');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');
var ts = require('gulp-typescript');
var glob = require('glob');
var tsProject = ts.createProject('tsconfig.json');
var path = require('path');
var fs = require('fs');
var Q = require('q');

gulp.task('audio', function (done) {
    let files = glob.sync('audio/**/*.aac');
    let filenames = [];
    let script = `module app {export const AudioFiles = {\n`;
    for (var i = 0; i < files.length; i++) {
        let file = files[i];
        let filename = path.basename(file);
        let urlSafe = filename.replace('#', '%23');
        script += `'${filename}': '${urlSafe}',\n`
    };
    script += '};}';
    fs.writeFileSync('src/audioFiles.ts', script);
    done();
});

gulp.task('js', function () {
    return gulp.src(['src/app.ts', 'src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('lib-js', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular/angular.min.js',
        // 'lib/html2canvas.min.js'
        'lib/html2canvas-box-shadow-support.min.js',
        'node_modules/howler/dist/howler.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('lib.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('templates', function () {
    return gulp.src('src/**/*.html')
        .pipe(sourcemaps.init())
        .pipe(flatten())
        .pipe(templateCache('templates.js', { module: 'app', root: '' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src(['src/**/*.scss', '!src/font-awesome-overrides.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('lib-css', function () {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(concat('lib.css'))
        .pipe(replace(/\.\.\/fonts/g, './fonts'))
        .pipe(gulp.dest('dist'));
});

gulp.task('lib-assets', function () {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('prevent-cache', function (done) {
    Q.nfcall(fs.readFile, './index.html').then(function (buffer) {
        var fileContents = buffer.toString();
        fileContents = fileContents.replace(/\?t=\d+/g, '?t=' + new Date().getTime());
        return Q.nfcall(fs.writeFile, './index.html', fileContents);
    }).then(done, done);
});

gulp.task('default',
    gulp.parallel([
        'js', 'templates', 'css', 'prevent-cache',
        'lib-js', 'lib-css', 'lib-assets'
    ])
);

gulp.task('watch', gulp.series([
    'default',
    function watch() {
        refresh.listen();
        gulp.watch('src/**/*.ts', gulp.parallel(['js']));
        gulp.watch('src/**/*.scss', gulp.parallel(['css']));
        gulp.watch('src/**/*.html', gulp.parallel(['templates']));

        //refresh only the output files
        gulp.watch(['dist/**/*.js', 'dist/**/*.css']).on('change', function (path) {
            refresh.changed(path);
        });
    }]
));

gulp.task('run', gulp.parallel([
    'watch',
    serve({
        root: ['./'],
        port: 1234
    })
]));