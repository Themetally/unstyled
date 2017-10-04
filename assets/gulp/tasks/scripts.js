import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import buffer from 'gulp-buffer'
import uglify from 'gulp-uglify'
import tap from 'gulp-tap'
import browserify from 'browserify'
import babel from 'babelify'
import util from 'gulp-util'
import strip_debug from 'gulp-strip-debug'
import handle_errors from '../util/handle_errors'


const babelify = ( file ) => {
    file.contents =
        browserify( file.path, { debug: true } )
            .transform( babel, { presets: [ 'env' ] } )
            .bundle()

    return file
}

export default () => {

    let task = gulp.src( `${global.config.scripts.source}/*.js`, { read: false } )
                   .pipe( handle_errors() )
                   .pipe( tap( babelify ) )
                   .pipe( buffer() )


    if ( global.config.production ) {
        task = task
            .pipe( strip_debug() )
            .pipe( uglify() )

    } else {
        task = task
            .pipe( sourcemaps.init( { loadMaps: true } ) )
            .pipe( sourcemaps.write() )
    }

    task = task.pipe( gulp.dest( global.config.build ) )

    return task
}