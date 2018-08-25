/**
 * Internal block libraries
 */
const { Component } = wp.element;

/**
 * Create an ShortcodeScripts Controls wrapper Component
 */
export default class ShortcodeScritps extends Component {

		constructor() {
			super( ...arguments );
		}

    render() {
				const { attributes } = this.props;
				const { checkedScripts } = attributes;
				let checkedScriptsTemp;
				let show;
				if ( typeof( checkedScripts ) == 'undefined' || checkedScripts == '' ) {
					show = false;
				} else {
					checkedScriptsTemp = checkedScripts.split(',');
					show = true;
				}
        return (
					show && ( checkedScriptsTemp.map( srcScript =>{

						if ( srcScript != '' ) {
							return (
								<script key={ srcScript } type="text/javascript/defer" src={ srcScript }></script>
							);
						}

					})
					)
        );
    }
}
