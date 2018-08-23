/**
 * Block dependencies
 */
import DynamicShortcodeInput from './shortcode';
import Inspector from './inspector';
import ShortcodeStyles from './shortcode-styles';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { ServerSideRender } = wp.components;

registerBlockType(
    'simple-shortcode-block/shortcode',
    {
        title: __( 'Dynamic Shortcode', 'simple-shortcode-block'),
        description: __( 'A simple block to render a shortcode in a dynamic way.', 'simple-shortcode-block'),
		icon: {
			background: 'rgba(41, 170, 227)',
			src: 'shortcode',
		},
		category: 'widgets',
		supports: {
			html: false,
		},
		edit: props => {
		const { attributes, className, setAttributes, isSelected } = props;
		const { checkboxControl } = attributes;
			return (
				<div className={ className }>
					{ isSelected ? (
						<DynamicShortcodeInput
							attributes={ attributes }
							className={ className }
							setAttributes={ setAttributes }
						/>
						) :
						<div>
						<ServerSideRender
							block="simple-shortcode-block/shortcode"
							attributes={ attributes }
						/>
						{ checkboxControl && ( <ShortcodeStyles { ...{ setAttributes, ...props } } /> ) }
						</div>
					}
					<Inspector { ...{ setAttributes, ...props } } />
				</div>
			);
		},
        save() {
            // Rendering in PHP
            return null;
        },
} );
