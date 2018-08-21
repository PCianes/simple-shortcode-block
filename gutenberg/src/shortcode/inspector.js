/**
 * Block dependencies
 */
import DynamicShortcodeInput from './shortcode';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { CheckboxControl, PanelBody, PanelRow, SelectControl } = wp.components;

const DynamicStylesInput = ( { attributes : { checkedStyles }, pluginStyles, setAttributes } ) => (
	<div>
		{ pluginStyles.map( style =>{
			return (
			<CheckboxControl
				label={ style.name }
				checked={ checkedStyles.indexOf(style.src) >= 0 }
				defaultChecked={ checkedStyles.indexOf(style.src) >= 0 }
				onChange={ checked => {
					if ( checked && !(checkedStyles.indexOf(style.src) >= 0) ) {
						checkedStyles.push( style.src );
					} else {
						checkedStyles = checkedStyles.filter( value => value !== style.src );
					}
					setAttributes( { checkedStyles } );
					console.log( checkedStyles );
				}
				}
			/>
			);
		}) }
	</div>
	);

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
				const pluginsNames = [];
				const pluginsData = [];
				Object.keys( ssb_plugins_register_styles ).map( ( pluginSlug ) => {
					pluginsNames.push( { value : pluginSlug, label : pluginSlug.split('-').join(' ').toUpperCase() } );
					pluginsData.push( { pluginSlug, styles : ssb_plugins_register_styles[ pluginSlug ] } );
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
										help={ __( 'Only for plugins that do not load styles in the backend. First try to save and refresh this page.', 'simple-shortcode-block' ) }
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
								{ pluginsData.map( plugin =>{
									if ( plugin.pluginSlug == selectPlugin ) {
										return (
										<DynamicStylesInput
											attributes={ attributes }
											pluginStyles={ plugin.styles }
											setAttributes={ setAttributes }
										/>
										);
									}
								}) }
							</PanelBody>
							) }
						</InspectorControls>
        );
    }
}
