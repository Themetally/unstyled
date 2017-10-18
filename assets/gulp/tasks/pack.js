import gulp from 'gulp'
import zip from 'gulp-zip'
import _ from 'lodash'

module.exports = () => {
    let source = [
        // Include Everything:
        '**',

        // Remove `node_modules`
        '!node_modules',
        '!node_modules/**',

        // Make sure hidden files aren't included
        '!.idea',
        '!.gitignore',
        '!.git',
        '!.DS_Store',
        '!.babelrc'
    ]

    // Prepend exclamation mark "!"
    let excludes = _.map( global.config.pack.excludes, ( i ) => `!${i}` )

    // Combine sources
    source = _.union( source, excludes )

    gulp.src( source )
        .pipe( zip( global.config.pack.zip_file_name ) )
        .pipe( gulp.dest( '../' ) )
}