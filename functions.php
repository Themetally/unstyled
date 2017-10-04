<?php
$__DIR = get_template_directory();


/**
 * Load theme functions
 */
require_once $__DIR . '/inc/theme/functions-google-fonts.php';


/**
 * Theme initialization
 */
require_once $__DIR . '/inc/theme/init-setup.php';
require_once $__DIR . '/inc/theme/init-enqueue.php';
require_once $__DIR . '/inc/hooks.php';
require_once $__DIR . '/inc/template-tags.php';


/**
 * Compatibility with plugins
 */
require_once $__DIR . '/inc/compatibility/jetpack.php';


/**
 * Theme Customization
 */
require_once $__DIR . '/inc/customizer/customizer.php';