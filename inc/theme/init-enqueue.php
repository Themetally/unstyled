<?php


/**
 * Enqueue scripts and styles.
 */
function unstyled_scripts() {

	$version = wp_get_theme()->get( 'Version' );

	/**
	 * === Style ===
	 */

	// Enqueue Google Fonts:
	$google_fonts = array( 'Open Sans:400,400i,700,700i' );
	wp_enqueue_style( 'unstyled-fonts', unstyled_fonts_url( $google_fonts ) );

	// Theme Styles
	wp_enqueue_style( 'unstyled-style', get_template_directory_uri() . '/build/theme-style.css', $version );


	/**
	 * === Script ===
	 */
	// Main theme javascript file
	wp_enqueue_script( 'unstyled-script', get_template_directory_uri() . '/build/theme-script.js', array( 'jquery' ), $version, true );


	wp_enqueue_script(
		'unstyled-skip-link-focus-fix',
		get_template_directory_uri() . '/build/skip-link-focus-fix.js',
		array(),
		'20151215',
		true
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}


	/**
	 * === Localization ===
	 */
	//	wp_localize_script(
	//		'unstyled-script',
	//		'__unstyled',
	//		array(
	//			// do things
	//		)
	//
	//	);
}

add_action( 'wp_enqueue_scripts', 'unstyled_scripts' );