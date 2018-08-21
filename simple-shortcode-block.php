<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also core all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://pablocianes.com/
 * @since             1.0.0
 * @package           Simple_Shortcode_Block
 *
 * @wordpress-plugin
 * Plugin Name:       Simple Shortcode Block
 * Plugin URI:        https://pablocianes.com/
 * Description:       A simple block to render a shortcode in a dynamic way.
 * Version:           1.0.0
 * Author:            Pablo Cianes
 * Author URI:        https://pablocianes.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       simple-shortcode-block
 * Domain Path:       /languages
 */

/*
Simple Shortcode Block is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Simple Shortcode Block is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Simple Shortcode Block. If not, see http://www.gnu.org/licenses/gpl-2.0.txt.
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'SIMPLE_SHORTCODE_BLOCK_VERSION', '1.0.0' );

/**
 * The code that runs only in dev mode
 * and we know that because of exists autolad.php into vendor folder
 * when it is set 'composer install' in console to dev this plugin
 */
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
	require_once __DIR__ . '/tests/dev/simple-shortcode-block-configuration.php';
}

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'core/class-simple-shortcode-block.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_simple_shortcode_block() {

	$plugin = new Simple_Shortcode_Block();
	$plugin->run();

}
run_simple_shortcode_block();


add_action( 'wp_footer', 'my_plugin_admin_init', PHP_INT_MAX);

function my_plugin_admin_init(){

	foreach ( $GLOBALS['wp_styles'] -> registered as $registered ){

		$style_src = $registered->src;

		if ( ( strpos( $style_src, 'wp-includes' ) !== false ) ||  ( strpos( $style_src, 'wp-admin' ) !== false ) || ( strpos( $style_src, 'gutenberg' ) !== false )) {
			continue;
		}

		$search_position = strpos( $style_src, 'plugins' );

		if ( $search_position !== false ) {

			$plugin_url = explode( '/', substr( $style_src, $search_position + 8 ) );

			$style_urls[ $plugin_url[0] ][] = array(
				'name'	=> $registered -> handle,
				'src'	=> $style_src,
				//'data'	=> wp_script_is( $registered -> handle )
			);
		}
	}

	update_option( 'save_data_enqueue', $style_urls );

	//var_dump( get_option( 'save_data_enqueue' ) );

	//wp_die();
}


// define the activate_plugin callback
function action_activate_plugin( $a, $b ) {
	// make action magic happen here...
	//var_dump($a, $b);wp_die();
};

// add the action
add_action( 'activate_plugin', 'action_activate_plugin', 10, 2 );
