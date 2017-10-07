<?php

/**
 * Load theme functions
 */
require_once get_theme_file_path( '/inc/theme/functions-google-fonts.php' );


/**
 * Theme initialization
 */
require_once get_theme_file_path( '/inc/theme/init-setup.php' );
require_once get_theme_file_path( '/inc/theme/init-enqueue.php' );
require_once get_theme_file_path( '/inc/hooks.php' );
require_once get_theme_file_path( '/inc/template-tags.php' );


/**
 * Compatibility with plugins
 */
require_once get_theme_file_path( '/inc/compatibility/jetpack.php' );


/**
 * Theme Customization
 */
require_once get_theme_file_path( '/inc/customizer/customizer.php' );