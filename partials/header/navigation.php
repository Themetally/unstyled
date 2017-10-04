<button id="site-navigation-toggle" class="menu-toggle"><?php esc_html_e(
		'Primary Menu',
		'unstyled'
	); ?></button>
<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>