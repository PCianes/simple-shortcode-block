/**
 * Block dependencies
 */
import DynamicShortcodeInput from './shortcode';
import PluginStyles from './plugin-styles';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, SelectControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
				const { attributes, className, setAttributes } = this.props;
				const { selectPlugin } = attributes;
				const pluginsNames = [ { value : 0, label : __( 'Select the plugin of the shortcode', 'simple-shortcode-block' ) } ];
				Object.keys( ssb_plugins_register_styles ).map( ( pluginSlug ) => {
					pluginsNames.push( { value : pluginSlug, label : pluginSlug.split('-').join(' ').toUpperCase() } );
				}	);
        return (
            <InspectorControls>
              <PanelBody>
								<DynamicShortcodeInput
									attributes={ attributes }
									className={ className }
									setAttributes={ setAttributes }
								/>
								</PanelBody>
								<PanelBody>
								<PanelRow>
									<p>{ __( 'Do not you see what you expected? If the plugin of your shortcode not load styles in the backend first try to save and refresh this page. If the problem persists try with the following:', 'simple-shortcode-block' ) }</p>
								</PanelRow>
								<SelectControl
									label={ __( '1.- Select the plugin of your shortcode:', 'simple-shortcode-block' ) }
									value={ selectPlugin }
									options={ pluginsNames }
									onChange={ selectPlugin => setAttributes( { selectPlugin } ) }
								/>
								<PanelRow>
									<p>{ __( '2.-Try to load CSS & JS by manually selecting them:', 'simple-shortcode-block' ) }</p>
								</PanelRow>
							</PanelBody>
              <PanelBody
								title={ __( 'CSS styles', 'simple-shortcode-block' ) }
								initialOpen={ false }
							>
                <PanelRow>
                  <p>{ __( 'Try to load styles by manually selecting one or more:', 'simple-shortcode-block' ) }</p>
								</PanelRow>
								<PluginStyles { ...{ setAttributes, ...this.props } } />
							</PanelBody>
						</InspectorControls>
        );
    }
}
