import gulp from 'gulp'
import stylus from 'gulp-stylus'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import minify from 'gulp-clean-css'
import handle_errors from '../util/handle_errors'

// Minify options
const cssmin_opts = {
    rebase             : false,
    keepSpecialComments: 0,
    advanced           : false,
    aggressiveMerging  : false,
}

export default () => {

    let task = gulp.src( `${global.config.style.source}/*.styl` )
                   .pipe( handle_errors() )


    // Build Stylus
    task = task.pipe( sourcemaps.init() )
               .pipe( stylus() )
               .pipe( autoprefixer() )


    // Minify CSS in production
    if ( global.config.production ) {
        task = task.pipe( minify() )
    }


    // Write sourcemaps in development
    if ( !global.config.production ) {
        task = task.pipe( sourcemaps.write() )
    }

    return task.pipe( gulp.dest( global.config.build ) )

}