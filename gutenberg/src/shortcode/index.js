/**
 * Block dependencies
 */
import DynamicShortcodeInput from './shortcode';
import Inspector from './inspector';
import ShortcodeStyles from './shortcode-styles';
import ShortcodeScripts from './shortcode-scripts';
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
			return (
				<div className={ className }>
					<DynamicShortcodeInput
						attributes={ attributes }
						className={ className }
						setAttributes={ setAttributes }
					/>
					<ServerSideRender
						block="simple-shortcode-block/shortcode"
						attributes={ attributes }
					/>
					<ShortcodeStyles { ...{ setAttributes, ...props } } />
					<ShortcodeScripts { ...{ setAttributes, ...props } } />
					<Inspector { ...{ setAttributes, ...props } } />
				</div>
			);
		},
        save() {
            // Rendering in PHP
            return null;
        },
} );
