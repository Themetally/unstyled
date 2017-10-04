<?php
/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 *
 * @return array
 */

// Quite likely you'll want to uncomment this:
//function unstyled_body_classes( $classes ) {
//
//	return $classes;
//}
//
//add_filter( 'body_class', 'unstyled_body_classes' );


/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function unstyled_pingback_header() {

	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}

add_action( 'wp_head', 'unstyled_pingback_header' );


/**
 * Customize ellipsis at end of excerpts.
 */
function unstyled_excerpt_more( $more ) {

	return "...";
}

add_filter( 'excerpt_more', 'unstyled_excerpt_more' );
