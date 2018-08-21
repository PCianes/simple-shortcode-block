<?php
/**
 * The gutenberg-specific functionality of the plugin.
 *
 * @link       https://pablocianes.com/
 * @since      1.0.0
 *
 * @package    Simple_Shortcode_Block
 * @subpackage Simple_Shortcode_Block/gutenberg
 */

/**
 * The gutenberg-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the gutenberg-specific stylesheet and JavaScript.
 *
 * @package    Simple_Shortcode_Block
 * @subpackage Simple_Shortcode_Block/gutenberg
 * @author     Pablo Cianes <pablo@pablocianes.com>
 */
class Simple_Shortcode_Block_Gutenberg {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 * Enqueue all Gutenberg blocks assets for only backend editor.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_all_blocks_assets_editor() {

		wp_register_script(
			'simple-shortcode-block-gutenberg-editor',
			plugin_dir_url( __FILE__ ) . 'dist/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'dist/blocks.build.js' )
		);

		wp_localize_script( 'simple-shortcode-block-gutenberg-editor', 'ssb_plugins_register_styles', get_option( 'save_data_enqueue' ) );
		wp_enqueue_script( 'simple-shortcode-block-gutenberg-editor' );

		wp_enqueue_style(
			'simple-shortcode-block-gutenberg-editor',
			plugin_dir_url( __FILE__ ) . 'dist/blocks.editor.build.css',
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'dist/blocks.editor.build.css' )
		);

	}

	/**
	 * Enqueue all Gutenberg blocks assets for both frontend + backend.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_all_blocks_assets() {

		wp_enqueue_style(
			'simple-shortcode-block-gutenberg',
			plugin_dir_url( __FILE__ ) . 'dist/blocks.style.build.css',
			array( 'wp-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'dist/blocks.style.build.css' )
		);
	}

	/**
	 * Enqueue all Gutenberg blocks assets for only frontend
	 *
	 * @since    1.0.0
	 */
	public function enqueue_all_blocks_assets_frontend() {

		/**
		 * If in the backend, bail out.
		 *
		 * @since    1.0.0
		 */
		if ( is_admin() ) {
			return;
		}

		wp_enqueue_script(
			'simple-shortcode-block-gutenberg-frontend',
			plugin_dir_url( __FILE__ ) . 'src/frontend.blocks.js',
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . 'src/frontend.blocks.js' )
		);
	}

	/**
	 * Allow to work in Gutenberg with dynamic blocks
	 *
	 * @since    1.0.0
	 */
	public function register_dynamic_blocks() {

		/**
		 * Only load if Gutenberg is available.
		 */
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		/**
		 * Hook server side rendering into render callback
		 */
		register_block_type( 'simple-shortcode-block/shortcode', array(
			'attributes'      => array(
				'checkboxControl' => array(
					'type' => 'boolean',
					'default' => false,
				),
				'shortcode' => array(
					'type' => 'string',
				),
				'checkedStyles' => array(
					'type' => 'array',
					'default' => array(),
				),
				'selectPlugin' => array(
					'type' => 'string',
				),
				'selectStyle' => array(
					'type' => 'string',
				),
			),
			'render_callback' => array( Simple_Shortcode_Block_Gutenberg::class, 'render_dynamic_shortcode' ),
		 	)
		);

	}

	/**
	 * Callback to render dynamic block
	 *
	 * @since    1.0.0
	 */
	public static function render_dynamic_shortcode( $attributes ) {

		if ( is_null( $attributes['shortcode'] ) ) {
			return __( 'Please, set here the [shortcode] to render', 'simple-shortcode-block' );
		}

		return do_shortcode( sanitize_text_field( $attributes['shortcode'] ) );

	}

}

