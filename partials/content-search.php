<?php


/**
 * Template part for displaying results in a loop
 *
 * @link    https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Unstyled
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('search-result'); ?>>

	<header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->

</article><!-- #post-<?php the_ID(); ?> -->