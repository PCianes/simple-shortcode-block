/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Spinner, withAPIData, ServerSideRender, PanelBody, RangeControl } = wp.components;

/**
 * To avoid use withAPIData in editor
 * see https://wordpress.org/gutenberg/handbook/blocks/creating-dynamic-blocks/
 * and only return the component ServerSideRender and controls but not declare here attributes
 * edit( { attributes } ) {
			// ensure the block attributes matches this plugin's name
			return (
				<div>
					<ServerSideRender
						block="simple-shortcode-block/block-name-dynamic"
						attributes={ attributes }
					/>
					<InspectorControls>
						<PanelBody>
							<RangeControl
								beforeIcon="arrow-left-alt2"
								afterIcon="arrow-right-alt2"
								label={ __( 'Range Control', 'simple-shortcode-block' ) }
								value={ attributes.number }
								onChange={ value => setAttributes( { number: value } ) }
								min={ 1 }
								max={ 10 }
							/>
						</PanelBody>
					</InspectorControls>
				</div>
			);
		},
 */

registerBlockType(
    'simple-shortcode-block/block-name-dynamic',
    {
        title: __( 'Example - Dynamic Block', 'simple-shortcode-block'),
        description: __( 'A look at how to build a basic dynamic block.', 'simple-shortcode-block'),
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },
        category: 'simple-shortcode-block',
        edit: withAPIData( props => {
                return {
                    posts: `/wp/v2/posts?per_page=3`
                };
            } )( ( { posts, className, isSelected, setAttributes } ) => {
                if ( ! posts.data ) {
                    return (
                        <p className={className} >
                            <Spinner />
                            { __( 'Loading Posts', 'simple-shortcode-block' ) }
                        </p>
                    );
                }
                if ( 0 === posts.data.length ) {
                    return <p>{ __( 'No Posts', 'simple-shortcode-block' ) }</p>;
                }
                return (
                    <ul className={ className }>
                        { posts.data.map( post => {
                            return (
                                <li>
                                    <a className={ className } href={ post.link }>
                                        { post.title.rendered }
                                    </a>
                                </li>
                            );
                        }) }
                    </ul>
                );
            } ) // end withAPIData
        , // end edit
        save() {
            // Rendering in PHP
            return null;
        },
} );
