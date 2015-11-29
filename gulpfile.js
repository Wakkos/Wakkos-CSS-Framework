/**
* Configuración del gulpFile
**/
config = {
  autoprefixer : true, //Prefijos de navegadores para CSS: compatibilidad con browsers
  minify : true, // Minificado de CSS
  mergeMediaQueries: true, // Unimos el interior de las mediaQueries con las misma condición
  paths : {
    cssPath : 'css',
    sassPath : 'scss',
    cssName: 'style.css',
    sassName: 'style.scss'
  }
}
// Variables que nos facilitan crear las tareas gulp
var sassDir = config.paths.sassPath;
var sassFile = sassDir + '/' + config.paths.sassName;
var cssDir = config.paths.cssPath;
var cssFile = cssDir + '/' + config.paths.cssName;

/**
* Includes: Añadimos las librerías necesarios para compilar el Sass con nuestra configuración
**/
var gulp = require('gulp'); // Gulp
var gulpif = require('gulp-if'); // Condiciones para gulp
var sass = require('gulp-sass'); // Compilador Sass
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var mmq = require('gulp-merge-media-queries');

/**
* Config de autoprefixer.
**/
var AUTOPREFIXER_BROWSERS = ['ie >= 9','ie_mob >= 10','ff >= 30','chrome >= 34','safari >= 7','opera >= 23','ios >= 7','android >= 4.4','bb >= 10']; // Compatibilidad css

gulp.task('sass', function() {
    return gulp.src([sassFile])
        .pipe(sass().on('error', function(err) {
                console.log(err.toString());
                this.emit('end');
            }
        ))
        .pipe(gulpif(config.autoprefixer, autoprefixer({browsers: AUTOPREFIXER_BROWSERS})))
        .pipe(gulpif(config.mergeMediaQueries, mmq()))
        .pipe(gulpif(config.minify, minify()))
        .pipe(gulp.dest(cssDir));
});


// Ejecuta funciones cuando el archivo cambia
gulp.task('watch', function() {
    gulp.watch([sassDir + '/*/*.scss',sassFile],['sass']);
});

// Default Task
gulp.task('default', ['watch']);
