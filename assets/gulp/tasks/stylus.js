import gulp from 'gulp'
import stylus from 'gulp-stylus'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import minify from 'gulp-clean-css'
import handle_errors from '../util/handle_errors'

import postcss from 'gulp-postcss'
import postcss_rhythm from 'postcss-gridlover'

// Minify options
const cssmin_opts = {
    rebase             : false,
    keepSpecialComments: 0,
    advanced           : false,
    aggressiveMerging  : false,
}

// PostCSS Plugins
let postcss_plugins = [
    postcss_rhythm(),
]


export default () => {

    let task = gulp.src( `${global.config.style.source}/*.styl` )
                   .pipe( handle_errors() )


    // Build Stylus
    task = task.pipe( sourcemaps.init() )
               .pipe( stylus() )
               .pipe( postcss( postcss_plugins ) )
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