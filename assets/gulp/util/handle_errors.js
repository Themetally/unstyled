import util from 'gulp-util'
import notifier from 'node-notifier'
import error_handler from 'gulp-error-handle'


const capitalizeFirstChar = str => str.charAt( 0 ).toUpperCase() + str.substring( 1 )

const handle = function ( error ) {

    let file_name, title, message


    if ( error.filename ) {
        file_name = error.filename.replace( /^.*[\\\/]/, '' )
    } else {
        file_name = error.name
    }

    if ( error.plugin ) {
        let plugin = capitalizeFirstChar( error.plugin.replace( 'gulp-', '' ) )
        title      = `${plugin} error: ${file_name}`

    } else {
        title = `Error: ${file_name}`
    }

    // Object
    notifier.notify( {
        title  : title,
        message: `${error.name}: ${error.message}`
    } )


    console.log( '' )
    util.log( util.colors.red( '[Error]' ) )
    util.log( `[${error.plugin}]` + ' in file: ' + util.colors.cyan( file_name ) )
    util.log( error.stack )
    console.log( '' )

    // Keep gulp from hanging on this task
    this.emit( 'end' )


}

export default () => error_handler( handle )
