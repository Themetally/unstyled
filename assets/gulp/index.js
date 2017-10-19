import './util/configure'
import gulp from 'gulp'
import scripts from './tasks/scripts'
import browser_sync from './tasks/browser_sync'
import pot from './tasks/pot'
import stylus from './tasks/stylus'
import pack from './tasks/pack'


gulp.task( 'sync', browser_sync )
gulp.task( 'scripts', scripts )
gulp.task( 'pot', pot )
gulp.task( 'styl', stylus )
gulp.task( 'pack', pack )

/*
    Do everything
 */
gulp.task( 'build', () => {
    gulp.start( 'styl' )
    gulp.start( 'scripts' )
    gulp.start( 'pot' )
} )