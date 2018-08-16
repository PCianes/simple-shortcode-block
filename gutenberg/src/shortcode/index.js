/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { InspectorControls, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { ServerSideRender, PanelBody, TextControl, Dashicon } = wp.components;

const Shortcode =

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
        edit( { attributes, className, setAttributes, isSelected } ) {
			const { shortcode } = attributes;
			return (
				<div className={ className }>
					{ isSelected ? (
						<div>
							<label>
								<Dashicon icon="shortcode" />{ __( 'Shortcode' ) }
							</label>
							<PlainText
							className="input-control"
							value={ shortcode }
							placeholder={ __( 'Write [shortcode] here…' ) }
							onChange={ shortcode => setAttributes( { shortcode } ) }
							/>
						</div>
						) :
						<ServerSideRender
							block="simple-shortcode-block/shortcode"
							attributes={ attributes }
						/>
					}
					<InspectorControls>
						<PanelBody>
							<label>
								<Dashicon icon="shortcode" />{ __( 'Shortcode' ) }
							</label>
							<PlainText
							className="input-control"
							value={ shortcode }
							placeholder={ __( 'Write [shortcode] here…' ) }
							onChange={ shortcode => setAttributes( { shortcode } ) }
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
