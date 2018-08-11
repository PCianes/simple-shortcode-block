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
 * Plugin Name:       Simple_Shortcode_Block
 * Plugin URI:        https://pablocianes.com/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Pablo Cianes
 * Author URI:        https://pablocianes.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       simple-shortcode-block
 * Domain Path:       /languages
 */

/*
Simple_Shortcode_Block is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Simple_Shortcode_Block is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Simple_Shortcode_Block. If not, see http://www.gnu.org/licenses/gpl-2.0.txt.
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
define( 'Simple_Shortcode_Block_Version', '1.0.0' );

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
 * The code that runs during plugin activation.
 * This action is documented in core/class-simple-shortcode-block-activator.php
 */
function activate_simple_shortcode_block() {
	require_once plugin_dir_path( __FILE__ ) . 'core/class-simple-shortcode-block-activator.php';
	Simple_Shortcode_Block_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in core/class-simple-shortcode-block-deactivator.php
 */
function deactivate_simple_shortcode_block() {
	require_once plugin_dir_path( __FILE__ ) . 'core/class-simple-shortcode-block-deactivator.php';
	Simple_Shortcode_Block_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_simple_shortcode_block' );
register_deactivation_hook( __FILE__, 'deactivate_simple_shortcode_block' );

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
