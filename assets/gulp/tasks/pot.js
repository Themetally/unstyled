import gulp from 'gulp'
import wpPot from 'gulp-wp-pot'
import sort from 'gulp-sort'

export default () => {
    return gulp.src( '**/*.php' )
        .pipe( sort() )
        .pipe( wpPot( global.config.language.config ) )
        .pipe( gulp.dest( global.config.language.dest ) )
}