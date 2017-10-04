import './util/configure'
import gulp from 'gulp'
import scripts from './tasks/scripts'
import browser_sync from './tasks/browser_sync'
import pot from './tasks/pot'
import stylus from './tasks/stylus'


gulp.task( 'sync', browser_sync )
gulp.task( 'scripts', scripts )
gulp.task( 'pot', pot )
gulp.task( 'styl', stylus )

/*
    Do everything
 */
gulp.task( 'build', () => {
    gulp.start( 'styl' )
    gulp.start( 'scripts' )
    gulp.start( 'pot' )
} )