
<footer id="footer" class="site-footer" role="contentinfo">
	<div class="site-info">

		<span class="sitemeta">
				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'unstyled' ) ); ?>"><?php printf(
						esc_html__( 'Proudly powered by %s.', 'unstyled' ),
						'WordPress'
					); ?></a>
		</span>

		<span class="sitemeta">
				<?php printf(
					esc_html__( 'Theme: %1$s.', 'unstyled' ),
					'<a href="https://github.com/justnorris/unstyled">Unstyled</a>'
				); ?>
		</span>
	</div><!-- .site-info -->

</footer><!-- #footer -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>