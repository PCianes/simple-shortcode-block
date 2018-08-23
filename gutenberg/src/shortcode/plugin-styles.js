/**
 * Internal block libraries
 */
const { Component } = wp.element;
const { ToggleControl } = wp.components;
const pluginsData = [];
Object.keys( ssb_plugins_register_styles ).map( ( pluginSlug ) => {
	pluginsData[ pluginSlug ] = ssb_plugins_register_styles[ pluginSlug ];
}	);

/**
 * Create an PluginStyles Controls wrapper Component
 */
export default class PluginStyles extends Component {

		constructor() {
			super( ...arguments );
		}

    render() {
				const { attributes, setAttributes } = this.props;
				const { shortcode, selectPlugin, checkedStyles } = attributes;
				let stylesPlugin = [];
				stylesPlugin = pluginsData[ selectPlugin ] ? pluginsData[ selectPlugin ] : false;
        return (
					stylesPlugin && ( stylesPlugin.map( style =>{
						let checkedStylesTemp;
						if ( typeof( checkedStyles ) == 'undefined' || typeof( shortcode ) == 'undefined' ) {
							checkedStylesTemp = [];
						} else {
							checkedStylesTemp = checkedStyles.split(',');
						}
						return (
						<ToggleControl
							id={ style.name }
							label={ style.name }
							value={ checkedStylesTemp.indexOf(style.src) >= 0 }
							checked={ checkedStylesTemp.indexOf(style.src) >= 0 }
							onChange={ checked => {
								if ( checked && !( checkedStylesTemp.indexOf(style.src) >= 0 ) ) {
									checkedStylesTemp.push( style.src );
								} else {
									checkedStylesTemp = checkedStylesTemp.filter( value => value !== style.src );
								}
								if ( checkedStylesTemp.length == 1 ) {
									setAttributes( { checkedStyles : checkedStylesTemp[0] } );
								} else {
									setAttributes( { checkedStyles : checkedStylesTemp.join() } );
								}
								this.setState( { attributes } );
							}
							}
						/>
						);
					})
					)
        );
    }
}
