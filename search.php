<?php get_header(); ?>

<?php
if ( ! have_posts() ) :

	get_template_part( 'partials/content', 'none' );

	return;

endif;
?>

	<main id="primary" class="site-content" role="main">

		<?php
		if ( have_posts() ) : ?>

			<header class="search-header">
				<h2 class="search-title"><?php unstyled_search_results_title(); ?></h2>
			</header><!-- .search-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				get_template_part( 'partials/content', 'search' );

			endwhile;

			get_template_part( 'partials/pagination' );

		else :

			get_template_part( 'partials/content', 'none' );

		endif; ?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
