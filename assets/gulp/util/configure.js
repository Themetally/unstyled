import gulp from 'gulp'
import util from 'gulp-util'
import defaults from 'defaults-deep'

export default ( theme ) => {
    let config = {

        // General Config
        url       : theme.development_url,
        build     : './build',
        production: !!util.env.production,

        style: {
            source: './assets/style',
        },

        scripts: {
            source: './assets/scripts',
        },


        language: {
            dest  : `./assets/languages/${theme.slug}.pot`,
            config: {
                domain        : theme.slug,
                package       : theme.name,
                bugReport     : theme.email,
                lastTranslator: `${theme.author} <${theme.email}>`,
                team          : `${theme.author} <${theme.email}>`,
            }
        }
    }

    // Allow to override config from YAML:
    if ( theme.override ) {
        config = defaults( theme.override, config )
    }

    return config

}


