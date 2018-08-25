/**
 * Block dependencies
 */
import classnames from 'classnames';
import DynamicShortcodeInput from './shortcode';
import Inspector from './inspector';
import ShortcodeStyles from './shortcode-styles';
import ShortcodeScripts from './shortcode-scripts';
import './editor.scss';
import icon from './icon';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { BlockControls } = wp.editor;
const { ServerSideRender, Toolbar, Tooltip, Button } = wp.components;

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
		const { showInputShortcode } = attributes;
			return (
				<div className={ className }>
					<BlockControls key="custom-controls">
                        <Toolbar>
                            <Tooltip text={ __( 'Hide/Show Input Shortcode', 'simple-shortcode-block' )  }>
                                <Button
                                    className={ classnames( 'components-icon-button','components-toolbar__control',
                                        { 'is-active': showInputShortcode } ) }
                                    onClick={ () => setAttributes( { showInputShortcode: ! showInputShortcode } ) }
                                >
                                    { icon }
                                </Button>
                            </Tooltip>
                        </Toolbar>
                    </BlockControls>
					{ showInputShortcode && (
						<DynamicShortcodeInput
							attributes={ attributes }
							className={ className }
							setAttributes={ setAttributes }
						/>
					) }
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
