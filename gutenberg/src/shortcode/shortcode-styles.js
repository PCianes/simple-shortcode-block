/**
 * Internal block libraries
 */
const { Component } = wp.element;

/**
 * Create an ShortcodeStyles Controls wrapper Component
 */
export default class ShortcodeStyles extends Component {

		constructor() {
			super( ...arguments );
		}

    render() {
				const { attributes } = this.props;
				const { checkedStyles } = attributes;
				let checkedStylesTemp;
				let show;
				if ( typeof( checkedStyles ) == 'undefined' || checkedStyles == '' ) {
					show = false;
				} else {
					checkedStylesTemp = checkedStyles.split(',');
					show = true;
				}
        return (
					show && ( checkedStylesTemp.map( srcStyle =>{
						if ( srcStyle != '' ) {
							return (
								<link key={ srcStyle } rel="stylesheet" type="text/css" href={ srcStyle } />
							);
						}
					})
					)
        );
    }
}
