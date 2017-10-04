<div class="site-branding">
	<?php the_custom_logo(); ?>

	<?php if ( get_bloginfo( 'name' ) || get_bloginfo( 'description' ) ): ?>

	<div class="site-title">
		<?php if ( is_front_page() && is_home() ) : ?>
			<h1 class="site-name"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
		<?php else : ?>
			<div class="site-name"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></div>
		<?php endif; ?>

		<?php
		$description = get_bloginfo( 'description', 'display' );
		if ( $description || is_customize_preview() ) : ?>
			<div class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></div>
			<?php
		endif; ?>

		<?php endif; ?>
	</div>
</div><!-- .site-branding -->
