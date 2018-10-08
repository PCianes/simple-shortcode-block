/**
 * Internal block libraries
 */
const { Component } = wp.element;
const { ToggleControl } = wp.components;
const pluginsData = [];
Object.keys( ssb_plugins_register_scripts ).map( ( pluginSlug ) => {
	pluginsData[ pluginSlug ] = ssb_plugins_register_scripts[ pluginSlug ];
}	);

/**
 * Create an PluginScripts Controls wrapper Component
 */
export default class PluginScripts extends Component {

	constructor() {
		super( ...arguments );
	}

    render() {
		const { attributes, setAttributes } = this.props;
		const { shortcode, selectPlugin, checkedScripts } = attributes;
		let scriptsPlugin = [];
		scriptsPlugin = pluginsData[ selectPlugin ] ? pluginsData[ selectPlugin ] : false;
        return (
			scriptsPlugin && ( scriptsPlugin.map( script =>{
				let checkedScriptsTemp;
				if ( typeof( checkedScripts ) == 'undefined' || typeof( shortcode ) == 'undefined' ) {
					checkedScriptsTemp = [];
				} else {
					checkedScriptsTemp = checkedScripts.split(',');
				}
				return (
				<ToggleControl
					id={ script.name }
					key={ script.name }
					label={ script.name }
					value={ checkedScriptsTemp.indexOf(script.src) >= 0 }
					checked={ checkedScriptsTemp.indexOf(script.src) >= 0 }
					onChange={ checked => {
						if ( checked && !( checkedScriptsTemp.indexOf(script.src) >= 0 ) ) {
							checkedScriptsTemp.push( script.src );
						} else {
							checkedScriptsTemp = checkedScriptsTemp.filter( value => value !== script.src );
						}
						if ( checkedScriptsTemp.length == 1 ) {
							setAttributes( { checkedScripts : checkedScriptsTemp[0] } );
						} else {
							setAttributes( { checkedScripts : checkedScriptsTemp.join() } );
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
