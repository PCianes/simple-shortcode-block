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
const { CheckboxControl, PanelBody, SelectControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
				const { attributes, className, setAttributes } = this.props;
				const { checkboxControl, selectPlugin } = attributes;
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
								<CheckboxControl
										heading={ __( 'Try to load styles by manually selecting them', 'simple-shortcode-block' ) }
										label={ __( 'Load CSS styles', 'simple-shortcode-block' ) }
										help={ __( 'Only for plugins which do not load styles in the backend. First try to save and refresh this page.', 'simple-shortcode-block' ) }
										checked={ checkboxControl }
										onChange={ checkboxControl => setAttributes( { checkboxControl } ) }
								/>
							</PanelBody>
							{ checkboxControl && (
							<PanelBody>
								<SelectControl
									label={ __( 'Select Plugin', 'simple-shortcode-block' ) }
									value={ selectPlugin }
									options={ pluginsNames }
									onChange={ selectPlugin => setAttributes( { selectPlugin } ) }
								/>
								<PluginStyles { ...{ setAttributes, ...this.props } } />
							</PanelBody>
							) }
						</InspectorControls>
        );
    }
}
