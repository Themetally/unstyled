<button id="site-menu-open" class="site-menu-toggle site-menu-toggle--open"><?php esc_html_e(
		'Menu ',
		'unstyled'
	); ?></button>
<div id="primary-menu" class="site-menu__inner">
	<button id="site-menu-open" class="site-menu-toggle site-menu-toggle--close"><?php esc_html_e(
			'Close Menu',
			'unstyled'
		); ?></button>
	<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
</div>
