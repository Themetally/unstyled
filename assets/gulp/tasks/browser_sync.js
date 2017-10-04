import gulp from 'gulp'
import sync from 'browser-sync'


export default () => {

    const bs = sync.init( `${config.build}/*.css`, {
            proxy: {
                target: config.url
            },
            open : false,
            port : 3002
        }
    )

    // @TODO: gulp.run() is temporary
    // gulp.start() for now, refactor to gulp.task() in Gulp v4

    // A clean build before watch
    gulp.start( 'build' )

    // Watch Scripts and Sytles
    gulp.watch( `${config.scripts.source}/**`, () => gulp.start( 'scripts' ) )
    gulp.watch( `${config.style.source}/**/*.styl`, () => gulp.start( 'styl' ) )

    // Reload when JavaScript files change
    gulp.watch( `${config.build}/*.js`, sync.reload )

    return bs
}