const gulp = require ('gulp');

const sass = require('gulp-sass')(require('sass'));/* compilar sass */
const sourcemaps = require('gulp-sourcemaps');

const uglify = require('gulp-uglify');/* comprimir javaScript */
const obfucate = require('gulp-obfuscate');

const imagemin = require('gulp-imagemin');/* comprimir imagen */


function comprilarSass(){ /* compilar sass */
    return gulp.src('./source/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/style'))
}


function comprimirJava(){ /* comprimir javaScript */
    return gulp.src('./source/script/*.js')
        .pipe(uglify())
        .pipe(obfucate())
        .pipe(gulp.dest('./build/script'))
}

function comprimirImagen(){
    return gulp.src('./source/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

exports.javaScript = comprimirJava
exports.compilar = comprilarSass
exports.imagen = comprimirImagen

exports.default = gulp.parallel(comprimirJava, comprilarSass, comprimirImagen )