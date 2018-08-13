<?php
/**
 * The static callbacks from php to render by Gutenberg
 *
 * @link       https://pablocianes.com/
 * @since      1.0.0
 *
 * @package    Simple_Shortcode_Block
 * @subpackage Simple_Shortcode_Block/gutenberg
 */

/**
 * The static callbacks from php to render by Gutenberg
 *
 * Defines the plugin name and version
 *
 * @package    Simple_Shortcode_Block
 * @subpackage Simple_Shortcode_Block/gutenberg
 * @author     Pablo Cianes <pablo@pablocianes.com>
 */
class Simple_Shortcode_Block_Render_Dynamic {

	/**
	 * Callback 'block-name-dynamic' to render dynamic block
	 *
	 * @since    1.0.0
	 */
	public static function block_name_dynamic( $attributes ) {

		return do_shortcode( $attributes['shortcode'] );

	}

}
