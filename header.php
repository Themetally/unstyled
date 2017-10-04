<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>"
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="page" class="site">

	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'unstyled' ); ?></a>

	<header id="header" class="site-header" role="banner">
		
		<?php get_template_part( 'partials/header/branding' ) ?>

		<nav id="site-navigation" class="site-navigation" role="navigation">
			<?php get_template_part( 'partials/header/navigation' ) ?>
		</nav><!-- #site-navigation -->

	</header><!-- #header -->

