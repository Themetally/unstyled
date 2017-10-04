'use strict'

/**
 gulpfile.js
 ===========
 The real gulp files can be found in `./assets/gulp/`
 This file is just setting up the configuration
 */
import YAML from 'yamljs'
import configure from './assets/gulp/util/configure.js'

// Read YAML Config:
const yaml_config = YAML.load( 'theme.yml' )

// Parse & Set the configuration as a global that can be used everywhere in GULP
global.config = configure( yaml_config )

// Register tasks & Run Gulp.js
import './assets/gulp/index'
