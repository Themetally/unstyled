<?php get_header(); ?>

	<main id="primary" class="site-content" role="main">

		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) : ?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>

				<?php
			endif;

			/* Start the Loop */
			while ( have_posts() ) : the_post();

				get_template_part( 'partials/content', get_post_format() );

			endwhile;

			get_template_part( 'partials/pagination' );

		else :

			get_template_part( 'partials/content', 'none' );

		endif; ?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
