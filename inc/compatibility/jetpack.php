<?php
/**
 * Jetpack Compatibility File
 *
 * @link    https://jetpack.com/
 *
 * @package Unstyled
 */

/**
 * Jetpack setup function.
 *
 * See: https://jetpack.com/support/infinite-scroll/
 * See: https://jetpack.com/support/responsive-videos/
 */
function unstyled_jetpack_setup() {

	// Add theme support for Infinite Scroll.
	add_theme_support(
		'infinite-scroll',
		array(
			'container' => 'primary',
			'render'    => 'unstyled_infinite_scroll_render',
			'footer'    => 'page',
		)
	);

	// Add theme support for Responsive Videos.
	add_theme_support( 'jetpack-responsive-videos' );
}

add_action( 'after_setup_theme', 'unstyled_jetpack_setup' );

/**
 * Custom render function for Infinite Scroll.
 */
function unstyled_infinite_scroll_render() {

	while ( have_posts() ) {
		the_post();
		get_template_part( 'partials/content', 'in-loop' );
	}
}
