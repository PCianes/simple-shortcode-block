/**
 * Block dependencies
 */
import classnames from 'classnames';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { InspectorControls, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { ServerSideRender, PanelBody, Dashicon } = wp.components;

const DynamicShortcodeInput = ( { attributes : { shortcode }, className, setAttributes } ) => (
	<div className={ classnames( className, 'ssb-shortcode-input' ) }>
		<label className="ssb-shortcode-label">
			<Dashicon icon="shortcode" />{ __( 'Shortcode', 'simple-shortcode-block' ) }
		</label>
		<PlainText
			className="input-control"
			value={ shortcode }
			placeholder={ __( 'Write here your [shortcode]' ) }
			onChange={ shortcode => setAttributes( { shortcode } ) }
		/>
	</div>
  );

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
        edit( { attributes, className, setAttributes, isSelected } ) {
			return (
				<div className={ className }>
					{ isSelected ? (
						<DynamicShortcodeInput
							attributes={ attributes }
							className={ className }
							setAttributes={ setAttributes }
						/>
						) :
						<ServerSideRender
							block="simple-shortcode-block/shortcode"
							attributes={ attributes }
						/>
					}
					<InspectorControls>
						<PanelBody>
							<DynamicShortcodeInput
								attributes={ attributes }
								className={ className }
								setAttributes={ setAttributes }
							/>
						</PanelBody>
					</InspectorControls>
				</div>
			);
		},
        save() {
            // Rendering in PHP
            return null;
        },
} );
